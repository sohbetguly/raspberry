import React, { useState } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>RaspberryPi</b>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              (isOpen ? "collapse" : "") + " navbar-collapse nav-animation"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav nav-animation">
              <Link to="/for-industry" className="nav-item nav-link">
                For Industry
              </Link>
              <Link to="/products/" className="nav-item nav-link">
                Hardware
              </Link>
              <Link to="/software/" className="nav-item nav-link">
                Software
              </Link>
              <Link to="/documentation/" className="nav-item nav-link">
                Documentation
              </Link>
              <Link to="/news/" className="nav-item nav-link">
                News
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
