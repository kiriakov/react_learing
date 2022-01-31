import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Summer2021">
                  Summer 2020
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Winter2021">
                 Winter 2020
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Women">
                  Momen
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/MenItems">
                  Man
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
