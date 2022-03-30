import React from "react";
import Raspberry400 from "../images/raspberry400.avif";
import { Link } from "react-router-dom";

export default function Pi400Personal() {
  return (
    <Link to="#" className="row border-shadow">
      <div className="col-lg-12 raspberry-400">
        <div className="row ">
          <div className="col-md-6 back-img">
            {/* <img className="img-fluid" src={Raspberry400} alt="" /> */}
            <picture>
              <source srcSet="" type="image/avif" />
              <img src={Raspberry400} />
            </picture>
          </div>

          <div className="col-md-6 raspberry-400-title ">
            <div className="text-container">
              <h1>Raspberry Pi 400 Personal Computer Kit</h1>
              <p>
                Raspberry Pi 400 is your complete personal computer, built into
                a compact keyboard. Featuring a quad-core 64-bit processor, 4GB
                of RAM, wireless networking, dual-display output, and 4K video
                playback, as well as a 40-pin GPIO header, it's the most
                powerful and easy-to-use Raspberry Pi computer yet.
              </p>
              <div className="button-container">
                <span className="green-button first-button">More Info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
