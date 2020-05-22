import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos } from "../../actions/videos";

export class Videos extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <Fragment>
        <h2>Videos list</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Watching Status</th>
              <th>Related To</th>
            </tr>
          </thead>
          <tbody>
            {this.props.videos.map((video) => (
              <tr key={video.id}>
                <td>{video.name}</td>
                <td>{video.type}</td>
                <td>{video.status}</td>
                <td>{video.parent_video}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

export default connect(mapStateToProps, { getVideos })(Videos);
