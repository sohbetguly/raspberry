import React, { useState, useEffect } from "react";
import "./styles/computing.css";
import hero from "./images/hero.webp";

function Computing() {
  return (
    <section className="d-grid comp-section">
      <div className="container">
        <div
          className="text-center"
          style={{ maxWidth: "500px", marginLeft: "auto" }}
        >
          <h1>
            <b>Computing</b> for everybody
          </h1>
          <p>
            From industries large and small, to the kitchen table tinkerer, to
            the classroom coder, we make computing accessible and affordable for
            everybody.
          </p>
          <button className="btn0">Buy Raspberry Pi</button>
        </div>
      </div>
      <div className="img-container">
        <img className="img-fluid" src={hero} />
      </div>
    </section>
  );
}

export default Computing;
