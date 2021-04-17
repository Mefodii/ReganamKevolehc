import React, { Component } from "react";
import { DEFAULT_IMAGE } from "../../../util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export class Poster extends Component {
  render() {
    const images = this.props.images;
    var imgPath = images[0] ? images[0].image : DEFAULT_IMAGE;

    return (
      <div className="w-60 relative group">
        <div className="absolute bottom-0 w-full flex justify-center transform opacity-0 group-hover:opacity-100 transition ease-in duration-300">
          <div className="absolute w-full bg-gray-800 h-full opacity-70"></div>
          <FontAwesomeIcon
            icon={faCamera}
            size="lg"
            className="text-purple-400 z-10 hover:text-purple-300 cursor-pointer"
          />
        </div>
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
