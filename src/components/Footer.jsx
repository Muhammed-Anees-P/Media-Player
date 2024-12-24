import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column mb-4"
      style={{ width: "100%", height: "300px" }}
    >
      <div className="footer d-flex align-items-center justify-content-evenly m-4">
        <div className="website" style={{ width: "400px" }}>
          <h4>
            <i class="fa-solid fa-video  text-warning"></i>{" "}
            <span className="text-white">Video Player</span>
          </h4>
          <h6>
          Experience seamless playback with our media player. Enjoy your favorite songs and videos anytime, anywhere. Built for performance, simplicity, and endless entertainment. Stay tuned for updates!
          </h6>
        </div>
        <div className="links d-flex flex-column m-4">
          <h4>Links</h4>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Watch History
          </Link>
        </div>
        <div className="guides d-flex flex-column m-4">
          <h4>Guides</h4>
          <Link
            to={"https://react.dev/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to={"https://react-bootstrap.netlify.app/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to={"https://bootswatch.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Bootswatch
          </Link>
        </div>
        <div className="contact m-4">
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
            />
            <button className="btn btn-warning text-white ms-3">
              Subscibe
            </button>
          </div>
          <div className="d-flex m-2 justify-content-evenly ">
            <Link
              className="m-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-instagram fa-2x mt-2 me-2"></i>
            </Link>
            <Link
              className="m-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-square-twitter fa-2x mt-2 me-2"></i>
            </Link>
            <Link
              className="m-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-facebook fa-2x mt-2 me-2"></i>
            </Link>
            <Link
              className="m-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-linkedin fa-2x mt-2 me-2"></i>
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-5">Copyright &copy; 2024 Media Player</p>
    </div>
  );
}

export default Footer;
