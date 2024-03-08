import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="container" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-lg-4">
          <Link to="/blog/Job-Openings">
            <div className="card">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fY5lZC_cDwoFYJ7Iq2hTXdl00GZJbmV0dw&usqp=CAU"
                alt="Job Openings"
              />
              <div className="card-body">
                <h1 className="card-title">Job Openings</h1>
                <p className="card-text">
                  Explore the latest job openings at our company.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="/blog/Benefits">
            <div className="card">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7PJmLi6nlUn6MGp3fRPG0mAZ5vOTA3Gqdg&usqp=CAU"
                alt="Benefits"
              />
              <div className="card-body">
                <h1 className="card-title">Benefits</h1>
                <p className="card-text">
                  Discover the amazing benefits of working with our company.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="/blog/Statistics">
            <div className="card">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd1sSH7-7JTowRKOdfh4Z0YJq36SXhXst2A&usqp=CAU"
                alt="Statistics"
              />
              <div className="card-body">
                <h1 className="card-title">Statistics</h1>
                <p className="card-text">
                  Check out the impressive statistics of our company.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Posts;