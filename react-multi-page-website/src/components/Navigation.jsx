import React from "react";
import { NavLink } from "react-router-dom";

// Define the Navigation component
function Navigation() {
  return (
    <div className="navigation">
      {/* Create a navbar container */}
      <nav className="navbar navbar-expand custom-navbar">
        <div className="container">
          {/* Add the Naples Pizza logo */}
          <NavLink className="navbar-brand" to="/">
            Naples Pizza
          </NavLink>
          {/* Create a div for the navbar items */}
          <div>
            {/* Create an unordered list for the navbar items */}
            <ul className="navbar-nav ml-auto">
              {/* Add a navbar item for the home page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  {/* Add a screen reader only text for accessibility */}
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* Add a navbar item for the careers page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Careers
                </NavLink>
              </li>
              {/* Add a navbar item for the contact us page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              {/* Add a navbar item for the apply now page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/apply">
                  Apply Now!
                </NavLink>
              </li>
              {/* Add a navbar item for the login page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Add custom styles for the navbar */}
      <style>
        {`
          .custom-navbar {
            background-color: #AF672D;
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

// Export the Navigation component as the default export
export default Navigation;