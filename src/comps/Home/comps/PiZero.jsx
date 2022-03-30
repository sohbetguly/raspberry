import React from "react";
import piizero from "./images/Pi_Zero.webp";
import "./styles/pi-zero.css";

function piZero() {
  return (
    <section className="text-white bg-dark">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-sm text-center align-middle">
            <h4>
              <b>Your tiny, tiny $15 computer</b>
            </h4>
            <p style={{ fontSize: "20px" }}>
              With wireless connectivity, 40-pin GPIO and a Raspberry
              Pi-designed System in Package, Raspberry Pi Zero 2 W packs a
              mighty punch into a little footprint.
            </p>
            <button className="rounded-sm btn1">
              Buy Raspberry Pi Zero 2W
            </button>
          </div>
          <div className="col-sm">
            <img
              className="img-fluid pizero-img"
              src={piizero}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default piZero;
