import React from "react";
import { Link } from "react-router-dom";
import "./Security.scss";

export default function Security() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center darkblue text-white">
        <h1 className="m-3">Security</h1>
      </div>
      <div className="security mt-5">
        <p>
          If you have security concerns or a disclosure to make, you may contact
          the security team via{" "}
          <a href="mailto:security@raspberrypi.com">security@raspberrypi.com</a>
        </p>
        <p>Please note that we do not offer a bug bounty programme.</p>
      </div>
    </React.Fragment>
  );
}
