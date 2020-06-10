import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
          <a className="navbar-brand" href="#">
            Watchings
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Serials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Anime
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
