import React, { Component } from "react";
import Poster from "./video_components/Poster";
import Info from "./video_components/Info";
import Title from "./video_components/Title";
import Seasons from "./Seasons";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addAnimePoster, deleteAnimePoster } from "../../actions/posters";

export class AnimeItem extends Component {
  static propTypes = {
    video: PropTypes.object.isRequired,
  };

  state = {
    name: "",
    alias: "",
    id: 0,
    status: "",
    year: "",
    images: [],
    seasons: [],
  };

  render() {
    const { name, alias, id, status, year, images, seasons } = this.props.video;
    return (
      <div className="flex m-5 p-2 border-2 shadow-2xl rounded-xl bg-anime-sec border-anime-ter">
        <Poster
          images={images}
          videoId={id}
          deletePoster={this.props.deleteAnimePoster}
          addPoster={this.props.addAnimePoster}
        ></Poster>
        <div className="w-full">
          <Title name={name} alias={alias} year={year}></Title>
          <Seasons seasons={seasons}></Seasons>
        </div>
        <Info status={status}></Info>
      </div>
    );
  }
}

export default connect(null, { addAnimePoster, deleteAnimePoster })(AnimeItem);
