import React from "react";
import "./Accessibility.scss";
import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center darkblue text-white">
        <h1 className="m-3">Accessibility Statement</h1>
      </div>
      <div className="accessibility mt-5">
        <div className="mb-5 mt-3">
          <h2>Our aim</h2>
          <p>
            We are committed to making our website more accessible and inclusive
            for everyone. This is an important part of our aim to ensure that
            everyone who visits our website feels welcome.
          </p>
          <h2>What we are doing</h2>
          <p>
            Our efforts to ensure that our website is accessible and usable to
            the widest possible audience are based on best practice guidelines,
            specifically the Web Content Accessibility Guidelines (WCAG) 2.1
            published by the World Wide Web Consortium (W3C). These guidelines
            explain how to make web content more accessible.
          </p>
          <p>
            The guidelines have three levels: A, AA, and AAA. As an
            organisation, we aim for Level AAA.
          </p>
          <h2>Get in touch with us</h2>
          <p>
            Although we are working to make this website as accessible as
            possible, we appreciate that issues may arise.
          </p>
          We are always happy to receive feedback. If you have experienced any
          difficulties, or if you enjoyed using our website, please get in touch
          at{" "}
          <a href="mailto:accessibility@raspberrypi.com">
            accessibility@raspberrypi.com
          </a>{" "}
          .
        </div>
      </div>
    </React.Fragment>
  );
}
