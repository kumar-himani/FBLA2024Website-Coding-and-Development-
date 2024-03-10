import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Benefits from "./components/blog/Benefits";
import Statistics from "./components/blog/Statistics";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path="Job-Openings" element={<JobOpenings />} />
        <Route path="Statistics" element={<Statistics />} />
        <Route path="benefits" element={<Benefits />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);