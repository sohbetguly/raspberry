import React from "react";
import { Link } from "react-router-dom";
import "./pico-and-pi-4.css";
import pico from "../images/pico.avif";
import modelb from "../images/modelb.avif";

export default function PicoAndPi4() {
  return (
    <div className="row">
      <div className="col-md-6 d-flex">
        <Link to="#" className="m-3 border-shadow p-0 w-100">
          <div className="row h-100">
            <div className="col-lg-12 image">
              {/* <div>
                <picture>
                  <source type="/avif" />
                  <img src={pico} />
                </picture>
              </div> */}
              <div className="cont">
                <div className="image-container">
                  <img className="image-ratio" src={pico} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="p-4">
                <h5>Raspberry Pi Pico</h5>
                <p>
                  The new, flexible 4$ microcontroller board from Raspberry Pi
                </p>
                <div className="d-flex justify-content-end ">
                  <span className="green-button d-sm-flex">More Info</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-6 d-flex">
        <Link to="#" className=" m-3 border-shadow p-0 w-100">
          <div className="row ">
            <div className="col-lg-12 image">
              {/* <div className="card-img-top">
                <picture>
                  <source type="image/avif" />
                  <img src={modelb} />
                </picture>
              </div> */}
              <div className="cont">
                <div className="image-container">
                  <img className="image-ratio" src={modelb} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="p-4 d-flex flex-column h-100">
                <h5>Raspberry Pi 4 Model B</h5>
                <p>Your tiny, dual-display, desktop computer</p>
                <div className="d-flex justify-content-end align-self-end">
                  <span className="green-button d-sm-flex ">More Info</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <hr className="mt-5" />
    </div>
  );
}
