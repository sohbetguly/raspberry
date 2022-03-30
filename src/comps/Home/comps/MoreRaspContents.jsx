import React, { useEffect } from "react";

export default function MoreRaspContents({ images, title, paragraphs }) {
  const imgStyle = {
    borderRadius: "2rem",
  };
  const rastBerry = "Raspberry Pi";
  
  return (
    <div className="col-sm-4 p-3 more-container">
      <a href="#" style={{ textDecoration: "none", color: "black" }}>
        <img style={imgStyle} className="img-fluid" src={images} alt="" />
        <h3 id="store">
          <b>{rastBerry} </b> {title}
        </h3>
        <p style={{ fontSize: "18px" }}>{paragraphs}</p>
        <p
          id="findoutMore"
          style={{
            color: "#118bd1",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          Find out more →
        </p>
      </a>
    </div>
  );
}
