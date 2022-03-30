import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

export default function Contact() {
  const [display, setDisplay] = useState("none");
  const protectionOptions = (val) => {
    if (val === "GDPR") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center bg-primary text-white">
        <h1 className="m-3">Contact Us</h1>
      </div>
      <div className="contact-us">
        <div>
          <div className="mt-3">
            <div className="mt-3">
              <h3>Forums</h3>
              <p>
                With members of our engineering staff and thousands of other
                Raspberry Pi experts on hand to help, the{" "}
                <a href="https://forums.raspberrypi.com/">
                  Raspberry Pi forums
                </a>{" "}
                are the ideal place for all your hardware and software
                questions.
              </p>
              <a href="https://forums.raspberrypi.com/">Go to the forums</a>
            </div>
            <div className="mt-3">
              <h3>Documentation</h3>
              <p>
                Our <Link to="/documentation">official documentation</Link> has
                all the information you need to get the most out of all
                Raspberry Pi products. Search for your answers, download
                diagrams and more.
              </p>
              <Link to="/documentation">Read our documentation</Link>
            </div>
            <div className="mt-3">
              <h3>Get in touch</h3>
              <p>
                Still haven’t found what you’re looking for? Don’t worry, Bono.
                Just fill in the form below and a member of the Raspberry Pi
                team will get back to you as soon as they can.
              </p>
              <p>
                For security-related concerns or disclosures, see our{" "}
                <Link to="/security">security page</Link>.
              </p>
            </div>
            <form id="form">
              <div className="form-group">
                <label htmlFor="yourName">Your name*</label>
                <input
                  type="text"
                  placeholder="ada Example"
                  id="yourName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="a.example@anyplace.cc"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Example select
                </label>
                <select
                  onChange={({ target }) => protectionOptions(target.value)}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="Subject">Subject</option>
                  <option value="Sales enquiries">Sales enquiries</option>
                  <option value="Press enquiries">Press enquiries</option>
                  <option value="Forum account query / deletion request">
                    Forum account query / deletion request
                  </option>
                  <option value="GDPR">Data protection / GDPR</option>
                  <option value="Something else">Something else </option>
                </select>
              </div>
              <div style={{ display: display }}>
                <p>Personal data erasure</p>
                <p>
                  Select relevant items from the list if you would like to
                  submit a personal data erasure request:
                </p>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="All of the below"
                      id="choice1"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice1">
                      All of the below
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Forums account"
                      id="choice2"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice2">
                      Forums account{" "}
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Code Club account"
                      id="choice3"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice3">
                      Code Club account
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Raspberry Pi account"
                      id="choice4"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice4">
                      Raspberry Pi account
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Blog comments"
                      id="choice5"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice5">
                      Blog comments{" "}
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Newsletters"
                      id="choice6"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice6">
                      Newsletters{" "}
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="sohbet"
                      value="Other"
                      id="choice7"
                    />{" "}
                    <label className="form-check-label" htmlFor="choice7">
                      Other{" "}
                    </label>
                  </li>
                </ul>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary my-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
