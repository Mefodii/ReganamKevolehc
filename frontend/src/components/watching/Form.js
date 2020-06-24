import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVideo } from "../../actions/videos";
import { VIDEO_TYPE_CHOICES, VIDEO_STATUS_CHOICES } from "../../backend/videos";

export class VideoForm extends Component {
  state = {
    name: "",
    alias: "",
    year: "",
    type: "",
    status: "",
  };

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, alias, year, type, status } = this.state;
    const video = { name, alias, year, type, status };
    console.log(video);
    this.props.addVideo(video);
  };

  render() {
    const { name, alias, year, type, status } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Video</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Alias</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                placeholder="Aliases (>;< separated)"
                type="text"
                name="alias"
                onChange={this.onChange}
                value={alias}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Year</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="year"
                onChange={this.onChange}
                value={year}
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Type</legend>
              <div className="col-sm-10">
                {Object.entries(VIDEO_TYPE_CHOICES).map(
                  ([video_key, video_type]) => (
                    <div className="form-check" key={video_key}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        value={video_type}
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        {video_type}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Status</legend>
              <div className="col-sm-10">
                {Object.entries(VIDEO_STATUS_CHOICES).map(
                  ([status_key, status_type]) => (
                    <div className="form-check" key={status_key}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        value={status_type}
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        {status_type}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addVideo })(VideoForm);
