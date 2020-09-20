import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./Home";
import { default as WatchioDashboard } from "./watching/Dashboard";
import { default as GamioDashboard } from "./gaming/Dashboard";
import { default as ReadioDashboard } from "./reading/Dashboard";

import Movies from "./watching/Movies";
import Serials from "./watching/Serials";
import Anime from "./watching/Anime";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route
                  exact
                  path="/watchio"
                  component={WatchioDashboard}
                ></Route>
                <Route exact path="/watchio/movies" component={Movies}></Route>
                <Route
                  exact
                  path="/watchio/serials"
                  component={Serials}
                ></Route>
                <Route exact path="/watchio/anime" component={Anime}></Route>
                <Route exact path="/gamio" component={GamioDashboard}></Route>
                <Route exact path="/readio" component={ReadioDashboard}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
