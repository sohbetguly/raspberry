import React from "react";
import retro from "../images/project-otter-2-scaled.webp";
import NewsLeftCardTitle from "./NewsLeftCardTitle";

export default function NewsLeftCard() {
  return (
    <div className="col-sm-6 mt-3" style={{ maxHeight: "100%" }}>
      <a href="#" style={{ textDecoration: "none" }}>
        <div
          className="card-cont"
          style={{ borderRadius: "20px", height: "100%" }}
        >
          <img
            className="img-fluid card-image-top"
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            src={retro}
          />
          <NewsLeftCardTitle />
        </div>
      </a>
    </div>
  );
}
