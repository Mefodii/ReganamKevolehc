import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./Home";
import { default as WatchioDashboard } from "./watching/Dashboard";
import { default as GamioDashboard } from "./gaming/Dashboard";
import { default as ReadioDashboard } from "./reading/Dashboard";

import Movies from "./watching/Movies";
import Serials from "./watching/Serials";
import Anime from "./watching/Anime";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class Content extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    if (this.props.isLoading)
      return <div className="text-gray-200">Loading....</div>;

    return (
      <Router>
        <Fragment>
          <Header />
          <div className="text-gray-200">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/watchio" component={WatchioDashboard}></Route>
              <Route exact path="/watchio/movies" component={Movies}></Route>
              <Route exact path="/watchio/serials" component={Serials}></Route>
              <Route exact path="/watchio/anime" component={Anime}></Route>
              <Route exact path="/gamio" component={GamioDashboard}></Route>
              <Route exact path="/readio" component={ReadioDashboard}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.pageInit.isLoading,
});

export default connect(mapStateToProps, null)(Content);
