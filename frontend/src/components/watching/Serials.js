import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, deleteVideo } from "../../actions/videos";
import { GET_SERIALS } from "../../actions/types";
import { VIDEO_STATUS_CHOICES } from "../../backend/videos";
// import ImgPlaceholder from "static/frontend/icons/image-placeholder.png";

export class Serials extends Component {
  static propTypes = {
    serials: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getVideos(GET_SERIALS);
  }

  onChangeStatus = (video, new_status) => {
    console.log(video, new_status);
  };

  render() {
    return (
      <Fragment>
        <h2>Serials</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div className="media">
                <img
                  src="static/frontend/icons/image-placeholder.png"
                  alt="Image Placeholder"
                  className="mr-3 shadow-sm mb-5 rounded"
                  height="130"
                />
                <div className="media-mody">
                  <h5 className="mt-0">Name of the Serial</h5>
                  <p>
                    Alias 1<br />
                    Alias 2 <br /> Alias 3
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">Component placeholder for SEASONS!!!!</div>
            <div class="col-sm">
              <div>Component placeholder for CHECKDATE!!</div>
              <div className="sticky-bottom" valign="bottom">
                Component placeholder for STATUS RADIO BUTTONS!!
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aliases</th>
              <th>Status</th>
              <th>Seasons</th>
              <th>Check Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.serials.map((video) => (
              <tr key={video.id}>
                <td>{video.name}</td>
                <td>{video.alias}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropDownStatus"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {video.status}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropDownStatus"
                    >
                      {Object.entries(VIDEO_STATUS_CHOICES).map(
                        ([status_key, status_type]) => (
                          <a
                            className="dropdown-item"
                            onClick={this.onChangeStatus.bind(this, video, {
                              status_key,
                            })}
                            key={status_key}
                          >
                            {status_type}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </td>
                <td />
                <td>{video.check_date}</td>
                <td>
                  <button className="btn btn-success btn-sm">Update</button>
                  <br />
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
  serials: state.videos.serials,
});

export default connect(mapStateToProps, { getVideos, deleteVideo })(Serials);
