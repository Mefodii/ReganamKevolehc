import React, { Component } from "react";
import Poster from "./video_components/Poster";
import Info from "./video_components/Info";
import Season from "./video_components/Season";
import Title from "./video_components/Title";
import Seasons from "./Seasons";

export class AnimeItem extends Component {
  render() {
    const { name, alias, id, status, year } = this.props.video;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="media">
              <Poster></Poster>
              <Title></Title>
            </div>
          </div>
          <Seasons></Seasons>
          <Info></Info>
        </div>
      </div>
    );
  }
}

export default AnimeItem;
