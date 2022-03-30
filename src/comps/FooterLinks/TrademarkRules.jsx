import React from "react";
import "./TrademarkRules.scss";
import { Link } from "react-router-dom";
import marks from "./utils/pimarks";

export default function TrademarkRules() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center bg-primary text-white">
        <h1 className="m-3">
          Raspberry Pi trademark rules and brand guidelines
        </h1>
      </div>
      <div className="trademark-rules mt-5">
        <div>
          <p>
            We often receive enquiries from people wondering whether they can
            use our various logos and the words “Raspberry Pi” in a number of
            different applications – on third-party accessories, on clothing, on
            websites, and so on.
          </p>
          <p>
            We need to make sure that we protect the unique identity of
            Raspberry Pi (our “brand”), and to ensure that when people see the
            Raspberry Pi name or logo, they know it is being used for genuine
            Raspberry Pi products or services.
          </p>
          <p>
            We also take measures to protect our intellectual property and to
            monitor our brand online. As part of our brand protection and
            enforcement programme, we use specialist software to monitor and
            detect online infringements, including unauthorised use of our brand
            name, logo, photographs, and imagery.
          </p>
          <p>
            We want to help you to use our intellectual property in the right
            way, so we have prepared some guidelines that explain which kinds of
            use are acceptable and which are not. Please help us to protect our
            intellectual property by following these rules and guidelines and
            only using approved brand assets from raspberrypi.com (any logos or
            imagery found elsewhere on the Internet are not authorised by us).
            <b>
              Any use of our brand and visual identity must abide by the
              requirements and restrictions set out both here and in our{" "}
              <Link to="#">visual identity guidelines</Link>
            </b>
          </p>
          <p>
            We own a portfolio of registered trademark and design rights to
            protect how our brand is used in commerce by third parties. The
            trademark portfolio includes, but is not limited to, the following
            trademarks:
          </p>
          <div>
            <table>
              <tbody>
                <tr className="m-5">
                  <td>1.</td>
                  <td className="m-5">The words "Raspberry Pi"</td>
                  <td>
                    We will refer to this as the <b>“Raspberry Pi Word Mark”</b>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td></td>
                  <td>
                    {" "}
                    We will refer to this as the <b> “Raspberry Pi Logo”</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We will refer to these marks together as the{" "}
            <b>“Raspberry Pi Marks”</b>.
          </p>
          {marks.map(({ title, par }, index) => {
            return (
              <React.Fragment key={index}>
                <h4 className="text-danger mt-4 mb-3">{title}</h4>
                {par.map((p, i) => {
                  if (typeof p === "string")
                    return (
                      <p key={i} className={"font-weight-bold"}>
                        {p}
                      </p>
                    );
                  if (typeof p === "object" && p.type === "strong") {
                    return (
                      <strong>
                        <p key={i}>{p.text}</p>
                      </strong>
                    );
                  }
                })}
              </React.Fragment>
            );
          })}
          Authorised products or services that contain and/or relate to
          Raspberry Pi may be eligible to use the{" "}
          <Link to="/for-industry/integrator-programme">
            POWERED BY RASPBERRY PI
          </Link>{" "}
          logo.
          <p></p>
          <p></p>
        </div>
      </div>
    </React.Fragment>
  );
}
