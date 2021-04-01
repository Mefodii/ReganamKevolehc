import React, { Component } from "react";
import { VIDEO_STATUS_CHOICES } from "../../../backend/videos";

export class Info extends Component {
  render() {
    console.log(Object.values(VIDEO_STATUS_CHOICES));
    return (
      <div>
        <div>Component placeholder for CHECKDATE!!</div>
        <div className="sticky-bottom" valign="bottom">
          {Object.values(VIDEO_STATUS_CHOICES).map((status, i) => (
            <span key={i}>{status}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Info;
