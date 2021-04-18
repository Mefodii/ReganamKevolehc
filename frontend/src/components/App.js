import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content></Content>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
