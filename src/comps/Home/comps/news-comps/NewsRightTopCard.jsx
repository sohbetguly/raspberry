import React from "react";
import "./../styles/news-right-top-card.css";
import RightBottom from "./RightBottom";
import RightTop from "./RightTop";

export default function NewsRightTopCard() {
  return (
    <div className="col-sm-6">
      <a
        href="#"
        style={{ textDecoration: "none", color: "black" }}
        className="mt-3"
      >
        <RightTop />
      </a>
      <a href="" style={{ textDecoration: "none", color: "black" }}>
        <RightBottom />
      </a>
    </div>
  );
}
