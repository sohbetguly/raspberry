import React from "react";
import { Link } from "react-router-dom";
import laptop from "../images/laptop-lg-1ba8ed554f197296bf36bdaa4bf2bbe8.png";
import download from "../images/download.svg";
import "../styles/download-layout.css";

export default function DownloadOpt() {
  return (
    <section>
      <div className="row">
        <div className="d-flex align-items-center col-md-6 p-5 inst-intro mt-4">
          <div>
            <h2 className="mb-4">Manually install an operating system image</h2>
            <p>
              Browse a range of operating systems provided by Raspberry Pi and
              by other organisations, and download them to install manually.
            </p>
            <Link className="d-inline-block doc-link" to="operating-systems">
              See all download options
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center col-md-6 p-5 inst-intro mt-4">
          <img src={download} alt="Download" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="d-flex align-items-center col-md-6 p-5 inst-intro mt-4">
          <div>
            <h2 className="mb-4">Raspberry Pi Desktop for PC and Mac</h2>
            <p>
              <b>Debian with Raspberry Pi Desktop</b> is our operating system
              for PC and Mac. It provides the Raspberry Pi OS desktop, as well
              as most of the recommended software that comes with Raspberry Pi
              OS, for any PC or Apple Mac computer.
            </p>
            <Link className="d-inline-block doc-link" to="#">
              Download Raspberry Pi Desktop
            </Link>
          </div>
        </div>
        <div className="col-md-6 p-5 inst-intro mt-4">
          <img src={laptop} alt="Download" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
