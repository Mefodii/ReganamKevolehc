import React, { Component } from "react";

export class Title extends Component {
  render() {
    const { name, alias } = this.props;
    return (
      <div className="">
        <h5 className="">{name}</h5>
        <p>
          Alias 1<br />
          Alias 2 <br /> Alias 3
        </p>
      </div>
    );
  }
}

export default Title;
