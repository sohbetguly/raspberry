import React from "react";
import "../styles/main.css";

export default function MainSection() {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="main-title-container">
        <a href="#">
          <b>Raspberry Pi</b> Documentation
        </a>
        <p>
          The official documentation for Raspberry <br /> Pi computers and
          microcontrollers
        </p>
      </div>
    </div>
  );
}
