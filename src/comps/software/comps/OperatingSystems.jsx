import React from "react";
import "./OperatingSystems.scss";
import { Link } from "react-router-dom";

export default function OperatingSystems() {
  return (
    <div className="container">
      <section className="operating-system-main">
        <div className="row w-100">
          <div className="col-sm-8 main">
            <div className="title-container">
              <h2>Operating system images</h2>
              <p>
                Many operating systems are available for Raspberry Pi, including
                Raspberry Pi OS, our official supported operating system, and
                operating systems from other organisations.
              </p>
              <p>
                Raspberry Pi Imager is the quick and easy way to install an
                operating system to a microSD card ready to use with your
                Raspberry Pi. Alternatively, choose from the operating systems
                below, available to download and install manually.
              </p>
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center align-items-center">
            <div className="d-md-block d-flex align-items-center">
              <div className="back-color">
                <div className="p-3 ">
                  {" "}
                  <p className="p-0 mb-1">Download:</p>
                  <ul className="m-0 p-0">
                    <li>
                      <a href="#raspberry-pi-os-32-bit">Raspberry Pi OS</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#raspberry-pi-os-64-bit">
                        Raspberry Pi OS (64-bit)
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#raspberry-pi-os-legacy">
                        Raspberry Pi OS (Legacy)
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#raspberry-pi-desktop">
                        Raspberry Pi Desktop
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr size="5" className="text-danger opacity-100" />
      <section className="raspberry-system pt-2">
        <div className="p-4" id="raspberry-pi-os-32-bit">
          <div className="d-flex justify-content-start align-items-center">
            <div>
              {" "}
              <h2>Raspberry Pi OS</h2>
              <p>Our recommended operating system for most users.</p>
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-md-4 capable">
              <h5>Compatible with:</h5>
              <Link className="d-inline-block doc-link" to="/products">
                All Raspberry Pi models
              </Link>
            </div>

            <div className="col-md-8 ">
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">Raspberry Pi OS with desktop</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 11 (bullseye)</li>
                      <li>Size: 1,246MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="a67e372dc8b3a66a00756b13031cb0be894483fc45ee9a27a2fc1bf2720eddeb"
                        id="a67e372dc8b3a66a00756b13031cb0be894483fc45ee9a27a2fc1bf2720eddeb"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="a67e372dc8b3a66a00756b13031cb0be894483fc45ee9a27a2fc1bf2720eddeb"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        a67e372dc8b3a66a00756b13031cb0be894483fc45ee9a27a2fc1bf2720eddeb
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_full_armhf/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>

                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <hr size="4" />

              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">
                  Raspberry Pi OS with desktop and recommended software
                </h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 11 (bullseye)</li>
                      <li>Size: 3,267MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="cfe1aca4190beb5803ecbe4125891d32ef38a11df85d06a6b3db364225f9cc96"
                        id="cfe1aca4190beb5803ecbe4125891d32ef38a11df85d06a6b3db364225f9cc96"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="cfe1aca4190beb5803ecbe4125891d32ef38a11df85d06a6b3db364225f9cc96"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        cfe1aca4190beb5803ecbe4125891d32ef38a11df85d06a6b3db364225f9cc96
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_full_armhf/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>
                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mt-4 m-md-0">
                <hr size="4" />

                <h4 className="m-0 p-0">Raspberry Pi OS Lite</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 11 (bullseye)</li>
                      <li>Size: 482MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="f6e2a3e907789ac25b61f7acfcbf5708a6d224cf28ae12535a2dc1d76a62efbc

"
                        id="f6e2a3e907789ac25b61f7acfcbf5708a6d224cf28ae12535a2dc1d76a62efbc

"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="f6e2a3e907789ac25b61f7acfcbf5708a6d224cf28ae12535a2dc1d76a62efbc

"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        f6e2a3e907789ac25b61f7acfcbf5708a6d224cf28ae12535a2dc1d76a62efbc
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_lite_armhf/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>
                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr size="3" className="opacity-100 text-danger mt-5" />
        </div>
        <div className="p-4" id="raspberry-pi-os-64-bit">
          <div className="d-flex justify-content-start align-items-center">
            <div>
              {" "}
              <h2>Raspberry Pi OS (64-bit)</h2>
              <p className="p-0 m-0">
                A stable legacy version of Raspberry Pi OS Buster.
              </p>
              <Link to="/news/new-old-functionality-with-raspberry-pi-os-legacy">
                Not sure which version to download?
              </Link>
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-md-4 capable">
              <h5>Compatible with:</h5>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-3-model-b"
              >
                3B
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-3-model-b-plus"
              >
                3B+
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-3-model-a-plus"
              >
                3A+
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-4-model-b"
              >
                4
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-400"
              >
                400
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/compute-module-io-board-v3"
              >
                CM3
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/compute-module-3-plus"
              >
                CM3+
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/compute-module-4"
              >
                CM4
              </Link>
              <Link
                className="d-inline-block doc-link m-2"
                to="/products/raspberry-pi-zero-2-w"
              >
                Zero 2 W
              </Link>
            </div>
            <div className="col-md-8 ">
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">Raspberry Pi OS with desktop</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 64-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 11 (bullseye)</li>
                      <li>Size: 1,135MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="c6f583fab8ed8d84bdf272d095c821fa70d2a0b434ba78432648f69b661d3783"
                        id="c6f583fab8ed8d84bdf272d095c821fa70d2a0b434ba78432648f69b661d3783"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="c6f583fab8ed8d84bdf272d095c821fa70d2a0b434ba78432648f69b661d3783"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        c6f583fab8ed8d84bdf272d095c821fa70d2a0b434ba78432648f69b661d3783
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_arm64/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>

                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <hr size="4" />
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">Raspberry Pi OS Lite</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 64-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 11 (bullseye)</li>
                      <li>Size: 435MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="d694d2838018cf0d152fe81031dba83182cee79f785c033844b520d222ac12f5"
                        id="d694d2838018cf0d152fe81031dba83182cee79f785c033844b520d222ac12f5"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="d694d2838018cf0d152fe81031dba83182cee79f785c033844b520d222ac12f5"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        d694d2838018cf0d152fe81031dba83182cee79f785c033844b520d222ac12f5
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_lite_arm64/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>
                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr size="3" className="opacity-100 text-danger mt-5" />
        </div>
        <div className="p-4" id="raspberry-pi-os-legacy">
          <div className="d-flex justify-content-start align-items-center">
            <div>
              {" "}
              <h2>Raspberry Pi OS (Legacy)</h2>
              <p className="p-0 m-0">
                A stable legacy version of Raspberry Pi OS Buster.
              </p>
              <Link to="/news/new-old-functionality-with-raspberry-pi-os-legacy">
                Not sure which version to download?
              </Link>
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-md-4 capable">
              <h5>Compatible with:</h5>
              <Link className="d-inline-block doc-link m-2" to="/products">
                All Raspberry Pi models
              </Link>
            </div>
            <div className="col-md-8 ">
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">Raspberry Pi OS with desktop</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 10 (bullseye)</li>
                      <li>Size: 1,116MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="281914c65cffd855feda798276185d9f1925eabb0f2d2b0321d4c6398dad69c0"
                        id="281914c65cffd855feda798276185d9f1925eabb0f2d2b0321d4c6398dad69c0"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="281914c65cffd855feda798276185d9f1925eabb0f2d2b0321d4c6398dad69c0"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        281914c65cffd855feda798276185d9f1925eabb0f2d2b0321d4c6398dad69c0{" "}
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_arm64/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>

                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <hr size="4" />
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">Raspberry Pi OS Lite (Legacy)</h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 28th 2022</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 5.10</li>
                      <li>Debian version: 10 (bullseye)</li>
                      <li>Size: 451MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="84c7d41b6d0a9fc8e6163045842a1bae7cc57cef36808d3d350fdf18e9b3f50e"
                        id="84c7d41b6d0a9fc8e6163045842a1bae7cc57cef36808d3d350fdf18e9b3f50e"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="84c7d41b6d0a9fc8e6163045842a1bae7cc57cef36808d3d350fdf18e9b3f50e"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        84c7d41b6d0a9fc8e6163045842a1bae7cc57cef36808d3d350fdf18e9b3f50e
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_oldstable_lite_armhf/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>
                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr size="3" className="opacity-100 text-danger mt-5" />
        </div>
        <div className="p-4" id="raspberry-pi-desktop">
          <div className="d-flex justify-content-start align-items-center">
            <div>
              {" "}
              <h2>Raspberry Pi Desktop</h2>
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-md-4 capable">
              <h5>Compatible with:</h5>
              <h5>PC and Mac</h5>
            </div>
            <div className="col-md-8 ">
              <div className="mt-4 m-md-0">
                <h4 className="m-0 p-0">
                  Debian Buster with Raspberry Pi Desktop
                </h4>
                <div className="row">
                  <div className="col-md-8 info">
                    <ul className="p-0 m-0">
                      <li>Release date: January 11th 2021</li>
                      <li>System: 32-bit</li>
                      <li>Kernel version: 4.19</li>
                      <li>Debian version: 10 (buster)</li>
                      <li>Size: 2,948MB</li>
                    </ul>
                    <p className="hash p-0 m-0">
                      <input
                        hidden
                        className="p-0 m-0"
                        type="checkbox"
                        name="c78c8dca8ca80ffbac90f4cedfedb6793b37b06df307b0c87e778eef3842a9be"
                        id="c78c8dca8ca80ffbac90f4cedfedb6793b37b06df307b0c87e778eef3842a9be"
                      />
                      <label
                        className="pt-0 "
                        htmlFor="c78c8dca8ca80ffbac90f4cedfedb6793b37b06df307b0c87e778eef3842a9be"
                      >
                        Show SHA256 file integrity hash:
                      </label>
                      <span className="bg-light shadow-sm border-2 p-2 w-75 border mt-2">
                        c78c8dca8ca80ffbac90f4cedfedb6793b37b06df307b0c87e778eef3842a9be
                      </span>
                      <br />
                      <a href="https://downloads.raspberrypi.org/raspios_arm64/release_notes.txt">
                        Release notes
                      </a>
                    </p>
                  </div>
                  <ul className="p-0 m-0 d-inline-flex flex-column col-md-4 download mt-md-4">
                    <li className="d-inline-flex flex-column p-0 m-0">
                      {" "}
                      <a
                        className="d-flex justify-content-md-start justify-content-center doc-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf.zip"
                      >
                        Download
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_full_armhf/images/raspios_full_armhf-2022-01-28/2022-01-28-raspios-bullseye-armhf-full.zip.torrent"
                      >
                        Download torrent
                      </a>{" "}
                    </li>
                    <li className="d-flex p-0 m-0">
                      {" "}
                      <a
                        className="download-link"
                        href="https://downloads.raspberrypi.org/raspios_armhf/images/"
                      >
                        Archive
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr size="3" className="opacity-100 text-danger mt-5" />
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center Wolfram-language">
        <div className="m-0 mx-lg-5">
          <p className="m-0 mx-lg-5">
            Note: Mathematica and the Wolfram Language are included in this
            release under license and with permission of Wolfram Research, Inc.
            and may be used for non-commercial purposes only. By using this
            software you agree to be bound by .{" "}
            <a href="http://www.wolfram.com/legal/agreements/wolfram-mathematica-raspberry-pi.html">
              the Wolfram Raspberry Pi Bundle License Agreement
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
