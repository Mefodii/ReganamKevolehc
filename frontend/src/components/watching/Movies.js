import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, deleteVideo } from "../../actions/videos";
import { GET_MOVIES } from "../../actions/types";

export class Movies extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos(GET_MOVIES);
  }

  render() {
    return (
      <Fragment>
        <h2>Movies</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aliases</th>
              <th>Year</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((video) => (
              <tr key={video.id}>
                <td>{video.name}</td>
                <td>{video.alias}</td>
                <td>{video.year}</td>
                <td>{video.status}</td>
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
  movies: state.videos.movies,
});

export default connect(mapStateToProps, { getVideos, deleteVideo })(Movies);
