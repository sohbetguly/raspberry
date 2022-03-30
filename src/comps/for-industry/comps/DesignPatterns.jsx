import React from "react";
import "./DesignPatterns.scss";
import { Link } from "react-router-dom";

export default function DesignPatterns() {
  return (
    <React.Fragment>
      <div className="design-partners mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img alt="Raspberry Pi Partner" />
            </div>
            <div className="col-lg-9">
              <p>
                Countless businesses use Raspberry Pi to jump-start the design
                process of their products, and to build in proven and powerful
                computing. If you have an idea or a product and need a design
                partner to help you integrate Raspberry Pi, we can connect you
                with designers who can help you.
              </p>
              <p>
                Every Design Partner is reviewed and approved by Raspberry Pi.
                We ensure that each has the technical and commercial abilities
                to design your product to your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="integrated-design">
        <div className="container">
          <h2>Interested in becoming a Design Partner?</h2>
          <p>
            Fill out an application form and a member of our Applications team
            will be in touch
          </p>
          <a className="back-blue-btn" href="https://forms.gle/Aj9vzEsBQ">
            Apply
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}
