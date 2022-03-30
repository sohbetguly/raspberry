import React from "react";
import pict from "../images/teletext.webp";

export default function RightTop() {
  return (
    <div className="d-flex row card flex-row radius-border card-cont mt-3 ">
      <div className="col-lg-6 card-body">
        <h3 className="card-title">Create your own teletext service</h3>
        <p className="card-text text-muted p-2">
          Feeling retro? In the latest issue of The MagPi magazine, PJ Evans
          shows you how to turn any Raspberry Pi…
        </p>
        <p className="reto-read-more pt-5">Read more →</p>
      </div>
      <img
        id="playReto"
        className="img-fluid col-lg-6 card-img-start p-0 "
        src={pict}
        alt=""
      />
    </div>
  );
}
