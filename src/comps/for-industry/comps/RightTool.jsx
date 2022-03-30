import React, { useState } from "react";
import { Link } from "react-router-dom";
import rpi4 from "../images/rpi4.webp";
import cm4 from "../images/cm4.webp";
import rp2040 from "../images/rp2040.webp";

export default function RightTool() {
  const data = [
    {
      link: "1",
      image: rpi4,
      title: "Raspberry Pi 4",
      par: ["Full featured", "Accessory support", "Long production lifetime"],
    },
    {
      link: "2",
      image: cm4,
      title: "Raspberry Pi Compute Module 4",
      par: ["Small form factor", "Multiple models", "Long production lifetime"],
    },
    {
      link: "3",
      image: rp2040,
      title: "RP2040",
      par: [
        "Extensively documented",
        "Perfect for machine learning applications",
        "Low cost",
      ],
    },
  ];

  return (
    <section className="bg-dark  text-align-center right-tool-section">
      <div className="container">
        <div className="rt-text-tool text-white">
          <div className="col-lg-5 mt-5">
            <h2>The right tool for the job</h2>
            <p>
              Raspberry Pi products give you the power and flexibility you need
              for your business, with a range of certified and production-ready
              boards and accessories.
            </p>
          </div>
        </div>
        <div className="row right-tool-image">
          {data.map((i) => {
            return (
              <Link to={"/" + i.link} className="col-lg-3" key={i.image}>
                <div>
                  <img src={i.image} className="img-fluid" />
                  <h5>
                    <b>{i.title}</b>
                  </h5>
                  <div className="par-container">
                    {i.par.map((p) => {
                      return <p key={p}>{p}</p>;
                    })}
                  </div>
                  <h4 className="href-container">more info</h4>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="explore-button">
          <Link to="#" className="back-blue-btn ">
            Explore more solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
