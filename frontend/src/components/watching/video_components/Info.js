import React, { Component } from "react";
import { connect } from "react-redux";

export class Info extends Component {
  render() {
    return (
      <div>
        <div>Component placeholder for CHECKDATE!!</div>
        <div>
          {this.props.statusTypes.map((status, i) => (
            <span key={i}>{status}</span>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusTypes: state.videos.info.statusTypes,
});

export default connect(mapStateToProps, null)(Info);
