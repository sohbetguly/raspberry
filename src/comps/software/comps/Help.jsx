import React from "react";
import { Link } from "react-router-dom";
import "../styles/help.css";
import lg2 from "../images/lg-2ffff1686fa9c920757bba9ce8a17c90.png";

export default function Help() {
  return (
    <section className="d-flex align-items-center flex-row help-section mb-5">
      <div className="mx-5 my-5">
        <div className="row w-100">
          <div className="d-flex align-items-center col-lg-6 ">
            <div className="help-title p-5 ">
              <h2>Help</h2>
              <ul>
                <li>
                  <Link to="#">
                    Using the GPIO pins to interact with hardware
                  </Link>
                </li>
                <li>
                  <Link to="#">Setting up a wireless connection</Link>
                </li>
                <li>
                  <Link to="#">Updating and upgrading Raspberry Pi OS</Link>
                </li>
                <li>
                  <Link to="#">Remotely accessing your Raspberry Pi</Link>
                </li>
              </ul>
              <Link className="d-inline-block doc-link mt-3" to="#">
                Technical documentation
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <img className="img-fluid" src={lg2} alt="lg-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
