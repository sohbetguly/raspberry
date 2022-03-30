import React, { useState } from "react";
import "./styles/for-industry.css";
import powerful from "./images/powerful-performance.webp";
import affordable from "./images/affordable.webp";
import compliance from "./images/compliance.webp";
import WhyRaspberry from "./comps/WhyRaspberry";
import WhyRaspberryRow from "./comps/WhyRaspberryRow";
import YourProduct from "./comps/YourProduct";
import Header from "./comps/Header";
import ClearDoc from "./comps/ClearDoc";
import RightTool from "./comps/RightTool";

export default function ForIndustry() {
  const data = [
    {
      id: "01",
      image: powerful,
      title: "Powerful performance, your way",
      text: "Raspberry Pi has computing solutions to fit a wide range of applications. From micro-controllers to ARM-based computers, Raspberry Pi brings every last drop of power to bear in your application.",
    },
    {
      id: "02",
      image: affordable,
      title: "Affordable and sustainable",
      text: "Raspberry Pi’s low power draw makes for an extremely efficient platform. Good for your overheads, and good for the environment too.",
    },
    {
      id: "03",
      image: compliance,
      title: "Compliance and support",
      text: "We’ve done the hard work so you don’t have to. Raspberry Pi products are subject to rigorous compliance testing, designed to save you time and money.",
    },
  ];

  const [image, setImage] = useState(powerful);

  const changeImage = (image) => {
    setImage(image);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="black-container p-5">
        <div className="container">
          <WhyRaspberry />
          <WhyRaspberryRow
            changeImage={changeImage}
            image={image}
            data={data}
          />
        </div>
      </div>
      <YourProduct />
      <section className="thin-client-section">
        <div className="thin-title">
          <div>
            <h1>Thin clients</h1>
            <p>
              Raspberry Pi computers offer an affordable, scalable solution for
              your thin client products. Whether you're working at the office or
              from home, find out how Raspberry Pi is transforming the working
              landscape.
            </p>
            <a className="back-blue-btn" href="">
              Find out more
            </a>
          </div>
        </div>
        <div className="thin-background-image"></div>
      </section>
      <ClearDoc />
      <RightTool />
    </React.Fragment>
  );
}
