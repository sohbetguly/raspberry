import React from "react";
import { useParams, Link } from "react-router-dom";
import "./computer-docs.scss";
import ClearDoc from "./../../for-industry/comps/ClearDoc";

export default function ComputerDocs() {
  const param = useParams().id;

  const handlePar = (par) => {
    return (
      <div className="par">
        <p>{par}</p>
      </div>
    );
  };

  return (
    <section>
      <div className="row">
        <div className="col-lg-3">Sohbetguly Danegulyyew</div>
        <div className="col-lg-9">
          <section className="computer-docs">
            <h1 className="pink-color">Getting Started</h1>
            <h2>Setting up your Raspberry Pi</h2>
            <div className="edit-on-guthub">
              <p>
                Edit this{" "}
                <Link to="https://github.com/raspberrypi/documentation/blob/develop/documentation/asciidoc/computers/getting-started/setting-up.adoc">
                  on GitHub
                </Link>
              </p>
            </div>
            <div className="par">
              <p>
                To get started with your Raspberry Pi computer you’ll need the
                following accessories:
              </p>
            </div>
            <div className="note">
              <p className="title">NOTE</p>
              <div className="content">
                <p>
                  If your display uses an HDMI connection and has built-in
                  speakers, you can use it to output sound.
                </p>
              </div>
            </div>
            <div className="par">
              <p>A computer keyboard and mouse</p>
            </div>
            <div className="unlist">
              <ul>
                <li>
                  Any standard USB keyboard and mouse will work with your
                  Raspberry Pi.
                </li>
                <li>
                  Wireless keyboards and mice will work if already paired.
                </li>
                <li>
                  For keyboard layout configuration options see{" "}
                  <Link to="#raspi-config"> raspi-config</Link> .
                </li>
              </ul>
            </div>
            <div className="par">
              <p>
                A good quality <Link to="#power-supply">power supply </Link> .
              </p>
            </div>
            {handlePar(
              "We recommend the official Raspberry Pi Power Supply which has been specifically designed to consistently provide +5.1V despite rapid fluctuations in current draw. Those fluctuations in demand is something that happens a lot with when you’re using peripherals with the Raspberry Pi, and something that other supplies—designed to provide consistent current for charging cellphones—usually don’t cope with all that well. It also has an attached micro USB cable, which means that you don’t accidentally use a poor quality cable—something that can be an issue."
            )}
           
            <div className="par">
              <p>
                For the Raspberry Pi 4, Model B and Raspberry Pi 400 you should
                use the <Link to="#type-c">type C power supply</Link>; for all
                other models you should use the{" "}
                <Link to="#">micro USB power supply</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
