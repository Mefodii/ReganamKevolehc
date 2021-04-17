import React, { Component } from "react";
import { DEFAULT_IMAGE } from "../../../util/constants";

export class Poster extends Component {
  render() {
    const images = this.props.images;
    var imgPath = images[0] ? images[0].image : DEFAULT_IMAGE;

    return (
      <div className="w-60">
        <img
          src={imgPath}
          alt="Image Placeholder"
          className="shadow-sm rounded-lg"
        />
      </div>
    );
  }
}

export default Poster;
