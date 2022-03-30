import React from "react";
import "./not-found.styles.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="not-found">
          <div>
            <h1>Unfortunately we can't find that page</h1>
            <Link to="/">
              Go to the Home page
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
