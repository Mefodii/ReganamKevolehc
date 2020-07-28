import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink to="/" className="navbar-brand">
            Kevolehc
          </NavLink>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WatchIO
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/watchio/movies" className="dropdown-item">
                  Movies
                </NavLink>
                <NavLink to="/watchio/serials" className="dropdown-item">
                  Serials
                </NavLink>
                <NavLink to="/watchio/anime" className="dropdown-item">
                  Anime
                </NavLink>
              </div>
            </li>
            <NavLink to="/gamio" className="nav-link">
              <li className="nav-item">GameIO</li>
            </NavLink>
            <NavLink to="/readio" className="nav-link">
              <li className="nav-item">ReadIO</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
