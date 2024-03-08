import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand custom-navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Naples Pizza
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Apply Now!
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>
        {`
          .custom-navbar {
            background-color: #40180F;
          }
          .custom-navbar .navbar-nav .nav-link {
            color: white;
          }
          .custom-navbar .navbar-brand {
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default Navigation;