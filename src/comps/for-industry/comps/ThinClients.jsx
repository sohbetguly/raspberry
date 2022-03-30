import React from "react";
import hdDualDisplays from "./images thin clients/4k dual displays.svg";
import centralisedSecurity from "./images thin clients/Centralised security.svg";
import longLife from "./images thin clients/Long life cycle.svg";
import lowCost from "./images thin clients/Low cost.svg";
import lowPowerDraw from "./images thin clients/Low power draw.svg";
import quadCoreProcessor from "./images thin clients/Quad-core processors.svg";
import USB3 from "./images thin clients/USB 3.0.svg";
import wireless from "./images thin clients/Wireless networking.svg";
import testImage from "../images/clear-and-supportive.webp";
import testImage2 from "../images/rp2040.webp";

import "./ThinClients.scss";

export default function ThinClients() {
  return (
    <React.Fragment>
      <section className="thin-client-section">
        <div className="thin-title">
          <div>
            <h2>Thin clients with Raspberry Pi</h2>
            <p>
              Raspberry Pi computers underpin thin client technologies around
              the world. With solutions from our industry-leading partners,
              built using Raspberry Pi’s robust and affordable technology, you
              have access to an enterprise-class system without the cost and
              complexity of traditional hardware products.
            </p>
          </div>
        </div>
        <div className="thin-background-image"></div>
      </section>
      <section className="thin-clients">
        <div className="container">
          <div>
            <h3>The ideal thin client solution</h3>
            <p>
              Raspberry Pi gives you PC-equivalent performance at an affordable
              price
            </p>
          </div>
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={hdDualDisplays} alt="" />
                  <h6>4k dual displays</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={quadCoreProcessor} alt="" />
                  <h6>Quad-core processors</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={USB3} alt="" />
                  <h6>USB 3.0</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={wireless} alt="" />
                  <h6>Wireless networking</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={lowPowerDraw} alt="" />
                  <h6>Low power draw</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={lowCost} alt="" />
                  <h6>Low cost</h6>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={longLife} alt="" />
                  <h6>Long life cycle</h6>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                <div>
                  <img src={centralisedSecurity} alt="" />
                  <h6>Centralised security</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discover-section">
        <div className="container">
          <div className="my-3">
            <div className="row">
              <div className="col-lg-6 discover">
                <div>
                  <h3>Discover your perfect setup</h3>
                  <p>
                    Offering specialist device management, enterprise-class
                    security, and virtualisation services optimised for
                    Raspberry Pi, our network of approved enterprise partners
                    can offer you a perfect thin client tool for your business.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="picture-container">
                  <img src={testImage} alt="" />
                </div>
              </div>
            </div>
            <div className="row mt-3 flex-lg-row-reverse">
              <div className="col-lg-6 discover">
                <div>
                  <h3>Digital signage</h3>
                  <p>
                    Raspberry Pi’s low-cost, flexible hardware means you can
                    find the perfect software solution to roll out your digital
                    signage requirements at scale.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="picture-container">
                  <img src={testImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="success-stories">
        <div className="container">
          <div className="title">
            <h1>Success stories</h1>
          </div>
          <div className="my-5">
            <div className="row">
              <div className="d-flex p-3 col-lg-4">
                <a href="https://assets.raspberrypi.com/static/raspberry-pi-success-story-merton-council-2f265fc83418cea536696e0d33c05684.pdf">
                  <div className="photo-container">
                    <div>
                      <img src={testImage} alt="" />
                    </div>
                  </div>
                  <div className="d-flex t-container flex-column m-3 mb-2">
                    <p>
                      Merton Council saved £100,000 of public funds using
                      Raspberry Pi technology
                    </p>
                    <h3 className="mt-auto">Find out more →</h3>
                  </div>
                </a>
              </div>
              <div className="d-flex p-3 col-lg-4">
                <a href="https://assets.raspberrypi.com/static/raspberry-pi-success-story-merton-council-2f265fc83418cea536696e0d33c05684.pdf">
                  <div className="photo-container">
                    <div>
                      <img src={USB3} alt="" />
                    </div>
                  </div>
                  <div className="d-flex t-container flex-column m-3 mb-2">
                    <p>
                      Raspberry Pi-powered products transformed the way office
                      staff in Cambridge University work while saving on costs
                      and helping the environment
                    </p>
                    <h3 className="mt-auto">Find out more →</h3>
                  </div>
                </a>
              </div>
              <div className="d-flex p-3 col-lg-4">
                <a href="https://assets.raspberrypi.com/static/raspberry-pi-success-story-merton-council-2f265fc83418cea536696e0d33c05684.pdf">
                  <div className="photo-container">
                    <div>
                      <img src={longLife} alt="" />
                    </div>
                  </div>
                  <div className="d-flex t-container flex-column m-3 mb-2">
                    <p>
                      Évreux Portes de Normandie manages a complex and unique
                      VDI environment powered by Raspberry Pi solutions
                    </p>
                    <h3 className="mt-auto">Find out more →</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
