import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAnime, deleteVideo } from "../../actions/videos";
import AnimeItem from "./AnimeItem";

export class Anime extends Component {
  static propTypes = {
    anime: PropTypes.array.isRequired,
    getAnime: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getAnime();
  }

  render() {
    const animeItems = this.props.anime.length
      ? this.props.anime.map((video) => {
          return <AnimeItem video={video} key={video.id}></AnimeItem>;
        })
      : null;
    return (
      <Fragment>
        <div className="text-gray-100 w-full flex flex-col items-center">
          <h2 className="text-xl uppercase font-bold m-4">
            Welcome to Anime, fellow watcher
          </h2>
          <div
            className="rounded-xl shadow-lg w-10/12"
            style={{ background: "#150017" }}
          >
            {animeItems}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  anime: state.videos.anime,
});

export default connect(mapStateToProps, { getAnime, deleteVideo })(Anime);
