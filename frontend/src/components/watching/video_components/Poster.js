import React, { Component } from "react";

export class Poster extends Component {
  render() {
    return (
      <img
        src="static/frontend/icons/image-placeholder.png"
        alt="Image Placeholder"
        className="mr-3 shadow-sm mb-5 rounded"
        height="130"
      />
    );
  }
}

export default Poster;
