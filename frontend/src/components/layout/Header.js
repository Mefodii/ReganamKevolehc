import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Header extends Component {
  state = {
    showDropDown: false,
    bg: "bg-gray-100",
  };

  showDropDown = (e) => {
    this.setState({ showDropDown: true });
  };

  hideDropDown = (e) => {
    this.setState({ showDropDown: false });
  };

  getWatchioClass = () => {
    return this.state.bg;
  };

  render() {
    return (
      <nav className="text-gray-200 shadow-md bg-gray-800" id="site-header">
        <ul className="flex p-2">
          <li className="text-lg font-bold m-2">
            <NavLink to="/">:Kevolehc:</NavLink>
          </li>
          <li
            className="relative m-2 group "
            onMouseEnter={this.showDropDown}
            onMouseLeave={this.hideDropDown}
          >
            <NavLink to="/watchio">WatchIO</NavLink>
            <svg
              className="w-5 inline transform group-hover:-rotate-180 transition ease-in duration-150 opacity-75 scale-75"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            <div
              id="drop-down"
              className={`${this.state.showDropDown ? "" : "hidden"}`}
            >
              <ul>
                <li>
                  <NavLink to="/watchio/movies">Movies</NavLink>
                </li>
                <li>
                  <NavLink to="/watchio/serials">Serials</NavLink>
                </li>
                <li>
                  <NavLink to="/watchio/anime">Anime</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="m-2">
            <NavLink to="/gamio">GameIO</NavLink>
          </li>
          <li className="m-2">
            <NavLink to="/readio">ReadIO</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
