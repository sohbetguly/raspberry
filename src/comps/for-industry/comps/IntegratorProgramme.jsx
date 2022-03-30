import React from "react";
import "./IntegratorProgramme.scss";
import { Link } from "react-router-dom";

export default function IntegratorProgramme() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center bg-primary text-white">
        <h1 className="m-3">Raspberry Pi Integrator Programme</h1>
      </div>
      <div className="integrator-programme mt-5">
        <div>
          <p>
            Raspberry Pi products are used in a large and growing number of
            embedded applications, from washing machines to underwater
            exploration vehicles. We are committed to supporting businesses to
            bring Raspberry Pi-powered products to market.
          </p>
          <p>
            All our products have undergone extensive compliance testing, and
            you can download copies of the relevant certificates and conformity
            documents from our Product Information Portal.
          </p>
          <h2>Jump start your design</h2>
          <p>
            Our network of trusted, hand-picked Design Partners can help you
            design Raspberry Pi computing solutions into your product. With each
            partner reviewed and approved by Raspberry Pi, we ensure that they
            have the technical and commercial expertise to bring your product to
            market.
          </p>
          <p>
            Click below to find a Design Partner, or to apply to become one
            yourself.
          </p>
          <Link className="back-blue-btn" to="design-partners">
            Raspberry Pi Design Partners
          </Link>
          <h2 className="mt-5">
            Streamlining compliance testing and certification
          </h2>
          <p>
            Compliance testing and certification place significant demands on
            businesses bringing products to market, especially smaller
            enterprises. The <b>Raspberry Pi Integrator Programme</b> is
            designed to eliminate the burden of navigating complicated
            compliance issues and make it easier for companies to bring new,
            exciting products to consumers, in <b>less time</b> and with{" "}
            <b>lower overhead costs</b>.
          </p>
          <p>
            The programme provides access to the same test engineers who worked
            on our Raspberry Pi products during their compliance testing,
            connecting the user to a <b>dedicated team</b> at{" "}
            <a href="https://www.ul-certification.com/">UL</a> who assess and
            test the user’s product, facilitated by their in-depth knowledge of
            Raspberry Pi. The team at UL works closely with the Raspberry Pi
            engineering team, so any unexpected issues that may arise during
            testing can be resolved quickly.
          </p>
          <p>
            Through the programme, UL streamlines the testing and certification
            process, which in turn decreases the amount of time necessary to
            launch the product. Our Integrator Programme is openly available and
            comes with <b>no added cost</b> beyond the usual testing fees at UL.
            This well established programme has been benefitting businesses
            since 2017.
          </p>
          <p>
            To find out more, please email{" "}
            <Link to="mailto:compliance@raspberrypi.com">
              compliance@raspberrypi.com
            </Link>
            .
          </p>
          <h2 className="mt-5">Powered by Raspberry Pi</h2>
          <p>
            As a producer of a Raspberry Pi-based device, you can also apply to
            use our{" "}
            <Link to="/news/powered-by-raspberry-pi">
              Powered by Raspberry Pi
            </Link>{" "}
            logo on your product and its packaging. Doing so indicates to your
            customers that a portion of their payment supports the educational
            work of the Raspberry Pi Foundation.
          </p>

          <p>
            The approval process for using the ‘Powered by Raspberry Pi brand’
            is straightforward: just complete this simple{" "}
            <Link to="/trademark-rules/powered-raspberry-pi">
              application form
            </Link>
            . Once you have submitted it, we will review your details and get
            back to you as soon as possible.
          </p>
          <p>
            When we approve your application, we will require that you use one
            of our official “Powered by Raspberry Pi” logos (see page 18 of our{" "}
            <i>Visual identity guidelines</i>, linked from our{" "}
            <a href="trademark-rules">Trademark rules and brand guidelines</a>{" "}
            ). You must ensure it is at least 30 mm wide. We are more than happy
            to help you if you have any design queries related to this – just
            contact us by email to{" "}
            <a href="mailto:info@raspberrypi.com">info@raspberrypi.com</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
