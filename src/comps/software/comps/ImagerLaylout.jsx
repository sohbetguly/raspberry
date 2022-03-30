import React from "react";
import imager from "../images/imager.png";

export default function ImagerLaylout() {
  return (
    <section className="imager">
      <div className="row">
        <div className="col-lg-6 px-4 py-2 px-sm-4 py-sm-3 sm- p-lg-5">
          <div className="content-title px-1 px-sm-1">
            <h3 className=" font-weight">
              Install Raspberry Pi OS using Raspberry Pi Imager
            </h3>
            <p className=" imager-par">
              Raspberry Pi Imager is the quick and easy way to install Raspberry
              Pi OS and other operating systems to a microSD card, ready to use
              with your Raspberry Pi.
              <a className="link" href="https://youstu.be/ntaXWS8Lk34">
                Watch our 45-second video
              </a>
              to learn how to install an operating system using Raspberry Pi
              Imager.
            </p>
            <p className="imager-par">
              Download and install Raspberry Pi Imager to a computer with an SD
              card reader. Put the SD card you'll use with your Raspberry Pi
              into the reader and run Raspberry Pi Imager.
            </p>
            <ul className="p-0">
              <li className="py-2">
                <a
                  className="link"
                  href="https://downloads.raspberrypi.org/imager/imager_latest.exe"
                >
                  Download for Windows
                </a>
              </li>
              <li className="py-2">
                <a
                  className="link"
                  href="https://downloads.raspberrypi.org/imager/imager_latest.dmg"
                >
                  Download for macOS
                </a>
              </li>
              <li className="py-2">
                <a
                  className="link"
                  href="https://downloads.raspberrypi.org/imager/imager_latest_amd64.deb"
                >
                  Download for Ubuntu for x86
                </a>
              </li>
            </ul>
            <div className="intro-install">
              <h6>To install on Raspberry Pi OS, type</h6>
              <h6 className="black-back">sudo apt install rpi-imager</h6>
              <h6>in a Terminal window</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <img className="img-fluid" src={imager} alt="" />
        </div>
      </div>
    </section>
  );
}
