import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // import the CSS file for styling

// import the necessary components for routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import the individual components for the website
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  JobOpenings,
} from "./components";

// import the LoginSignup component
import LoginSignup from "./components/LoginSignup/LoginSignup";

// import the individual blog components
import Benefits from "./components/blog/Benefits";
import Statistics from "./components/blog/Statistics";

// Render the Router component to the root element of the HTML document
ReactDOM.render(
  <Router>
    {/* Render the Navigation component at the top of the page */}
    <Navigation />
    {/* Define the different routes for the website */}
    <Routes>
      {/* The homepage route */}
      <Route path="/" element={<Home />} />
      {/* The about page route */}
      <Route path="/about" element={<About />} />
      {/* The contact page route */}
      <Route path="/contact" element={<Contact />} />
      {/* The login/signup page route */}
      <Route path="/login" element={<LoginSignup />} />
      {/* The blog page route */}
      <Route path="/blog" element={<Blog />}>
        {/* The default route for the blog page will display the Posts component */}
        <Route path="" element={<Posts />} />
        {/* The Job Openings route for the blog page */}
        <Route path="Job-Openings" element={<JobOpenings />} />
        {/* The Statistics route for the blog page */}
        <Route path="Statistics" element={<Statistics />} />
        {/* The Benefits route for the blog page */}
        <Route path="benefits" element={<Benefits />} />
      </Route>
    </Routes>
    {/* Render the Footer component at the bottom of the page */}
    <Footer />
  </Router>,
  document.getElementById("root")
);