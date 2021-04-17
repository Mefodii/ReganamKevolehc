import React, { Component } from "react";
import Poster from "./video_components/Poster";
import Info from "./video_components/Info";
import Season from "./video_components/Season";
import Title from "./video_components/Title";
import Seasons from "./Seasons";

export class AnimeItem extends Component {
  render() {
    const { name, alias, id, status, year, images, seasons } = this.props.video;
    return (
      <div
        className="anime-item flex m-5 p-2 border-2 shadow-2xl rounded-xl"
        style={{ background: "#170019", borderColor: "#26002b" }}
      >
        <Poster images={images}></Poster>
        <div className="anime-item-content w-full">
          <Title name={name} alias={alias}></Title>
          <Seasons></Seasons>
        </div>
        <Info></Info>
      </div>
    );
  }
}

export default AnimeItem;
