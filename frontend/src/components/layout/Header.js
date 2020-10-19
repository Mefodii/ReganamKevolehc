import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="text-gray-200" id="site-header">
        <ul>
          <li>
            <NavLink to="/">Kevolehc</NavLink>
          </li>
          <li>
            <NavLink to="/watchio">WatchIO</NavLink>
            <div>
              <NavLink to="/watchio/movies">Movies</NavLink>
              <NavLink to="/watchio/serials">Serials</NavLink>
              <NavLink to="/watchio/anime">Anime</NavLink>
            </div>
          </li>
          <NavLink to="/gamio">
            <li>GameIO</li>
          </NavLink>
          <NavLink to="/readio">
            <li>ReadIO</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
