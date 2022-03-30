import React from "react";
import pict from "../images/briefcase.webp";

export default function RightBottom() {
  return (
    <div className="d-flex row card flex-row radius-border card-cont mt-3">
      <img
        id="playReto"
        className="img-fluid col-lg-6 card-img-start p-0"
        src={pict}
        alt=""
      />
      <div className="col-lg-6 card-body">
        <h3 className="card-title">
          Play retro games inside this gorgeous wooden briefcase
        </h3>
        <p className="card-text text-muted p-2">
          It’s not often we see a crossover hit between the r/woodworking and
          r/retropie subreddits, but here we are…
        </p>
        <p className="reto-read-more">Read more →</p>
      </div>
    </div>
  );
}
