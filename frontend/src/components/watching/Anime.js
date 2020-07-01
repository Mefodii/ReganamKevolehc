import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, deleteVideo } from "../../actions/videos";
import { GET_ANIME } from "../../actions/types";

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
    return (
      <Fragment>
        <h2>Anime</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Watching Status</th>
              <th>Related To</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.anime.map((video) => (
              <tr key={video.id}>
                <td>{video.name}</td>
                <td>{video.type}</td>
                <td>{video.status}</td>
                <td>{video.parent_video}</td>
                <td>
                  <button
                    onClick={this.props.deleteVideo.bind(this, video.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  anime: state.videos.anime,
});

export default connect(mapStateToProps, { getVideos, deleteVideo })(Anime);