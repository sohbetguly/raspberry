import React from "react";
import { Link } from "react-router-dom";
import "./hardware.css";
import Pi400Personal from "./comps/Pi400Personal";
import PicoAndPi4 from "./comps/PicoAndPi4";
import DataItems from "./comps/DataItems";

export default function Foundation() {
  return (
    <div className="products">
      <div className="container p-lg-5 overflow-hidden">
        <h1 className="main-title">Products</h1>
        <Pi400Personal />
        <PicoAndPi4 />
        <DataItems />
      </div>

      <div className="d-flex justify-content-end pb-4">
        {/* <img className="img-fluid" src={Raspberry400} alt="" /> */}
      </div>
    </div>
  );
}
