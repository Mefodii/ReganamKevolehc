import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, deleteVideo } from "../../actions/videos";
import { GET_ANIME } from "../../actions/types";
import AnimeItem from "./AnimeItem";

export class Anime extends Component {
  static propTypes = {
    anime: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos(GET_ANIME);
  }

  render() {
    const animeItems = this.props.anime.length
      ? this.props.anime.map((video) => {
          return <AnimeItem video={video} key={video.id}></AnimeItem>;
        })
      : null;
    return (
      <Fragment>
        <div className="text-light">
          <br />
          <h2>Welcome to Anime, fellow watcher</h2>
          <br />
          {animeItems}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  anime: state.videos.anime,
});

export default connect(mapStateToProps, { getVideos, deleteVideo })(Anime);
