import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="text-gray-200 p-5 shadow-md bg-gray-800" id="site-header">
        <ul className="flex">
          <li className="mr-5 text-lg font-bold">
            <NavLink to="/">:Kevolehc</NavLink>
          </li>
          <li className="relative mr-5">
            <NavLink to="/watchio">WatchIO</NavLink>
            <svg
              className="w-5 inline transform hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            <div className="hidden">
              <NavLink to="/watchio/movies">Movies</NavLink>
              <NavLink to="/watchio/serials">Serials</NavLink>
              <NavLink to="/watchio/anime">Anime</NavLink>
            </div>
          </li>
          <li className="mr-5">
            <NavLink to="/gamio">GameIO</NavLink>
          </li>
          <li>
            <NavLink to="/readio">ReadIO</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
