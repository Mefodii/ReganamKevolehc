import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getThemeForUrl } from "../../util/colors";

export class Header extends Component {
  state = {
    showDropDown: false,
    bg: "bg-gray-800",
    border: "border-gray-700",
    url: "",
    theme: {},
  };

  updateBg = () => {
    const newUrl = window.location.href;
    if (this.state.url === newUrl) return;
    const theme = getThemeForUrl(newUrl);
    const newState = {
      theme,
      bg: "bg-" + theme.prim,
      border: "border-" + theme.ter,
      url: newUrl,
    };
    this.setState(newState);
  };

  showDropDown = (e) => {
    this.setState({ showDropDown: true });
  };

  hideDropDown = (e) => {
    this.setState({ showDropDown: false });
  };

  componentDidMount() {
    this.updateBg();
  }

  componentDidUpdate() {
    this.updateBg();
  }

  render() {
    return (
      <nav
        className={`text-gray-200 shadow-md ${this.state.bg}`}
        id="site-header"
      >
        <ul className="flex p-2 items-center text-lg">
          <li className="font-bold m-2">
            <NavLink to="/">:Kevolehc:</NavLink>
          </li>
          <li
            className="relative m-2 group"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            <div
              id="drop-down"
              className={`${this.state.showDropDown ? "" : "hidden"} ${
                this.state.bg
              } border ${this.state.border} shadow-md z-10`}
            >
              <ul>
                <li className="p-2">
                  <NavLink
                    className="hover:underline hover:text-red-200"
                    to="/watchio/movies"
                  >
                    Movies
                  </NavLink>
                </li>
                <li className="p-2">
                  <NavLink
                    className="hover:underline hover:text-red-200"
                    to="/watchio/serials"
                  >
                    Serials
                  </NavLink>
                </li>
                <li className="p-2">
                  <NavLink
                    className="hover:underline hover:text-red-200"
                    to="/watchio/anime"
                  >
                    Anime
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="m-2 hover:underline hover:text-red-200">
            <NavLink to="/gamio">GameIO</NavLink>
          </li>
          <li className="m-2 hover:underline hover:text-red-200">
            <NavLink to="/readio">ReadIO</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
