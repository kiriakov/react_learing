import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/summer2021">
                  Summer 2020
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/winter2021">
                 Winter 2020
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">
                  Momen
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/men">
                  Men
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
