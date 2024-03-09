import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5" style={{ color: '#58483A' }}>Careers</h1>
        <h1 className="text-center mt-5" style={{ color: '#58483A' }}>Welcome to the family!</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;