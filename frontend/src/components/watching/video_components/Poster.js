import React, { Component } from "react";

export class Poster extends Component {
  render() {
    const imgPath =
      window.location.origin + "/static/frontend/icons/image-placeholder.png";
    console.log(window.location.origin);
    return (
      <img
        src={imgPath}
        alt="Image Placeholder"
        className="mr-3 shadow-sm mb-5 rounded"
        height="130"
      />
    );
  }
}

export default Poster;
