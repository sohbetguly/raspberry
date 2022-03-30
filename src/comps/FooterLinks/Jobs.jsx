import React from "react";
import "./Jobs.scss";
import { Link } from "react-router-dom";

export default function Jobs() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center bg-primary text-white">
        <h1 className="m-3">Jobs at Raspberry Pi</h1>
      </div>
      <div className="jobs mt-5">
        <div>
          <p>
            At Raspberry Pi, we are proud to foster an environment where those
            who work with us can do what they love and do it well. By joining
            Raspberry Pi, you are adding to a lean and passionate team who are
            dedicated to democratising technology and giving affordable access
            to computing tools to people across the globe.
          </p>
          <h2 className="mt-4">Who are Raspberry Pi?</h2>
          <hr className="mt-5" />
          <h2 className="mt-4 text-danger">Current Jobs</h2>
          <table className="w-100">
            <thead>
              <tr className="p-5">
                <td>
                  <b>Job Title</b>
                </td>
                <td>
                  <b>Closing date</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="p-5">
                <td>
                  <a href="https://apply.workable.com/raspberrypi/j/B597FC61AE/">
                    Digital IC Implementation Engineer
                  </a>
                </td>
                <td>No closing date</td>
              </tr>
              <tr className="p-5">
                <td>
                  <a href="https://apply.workable.com/raspberrypi/j/4000470BD2/">
                    Digital IC Verification Engineer
                  </a>
                </td>
                <td>No closing date</td>
              </tr>
              <tr>
                <td>
                  <a href="https://apply.workable.com/raspberrypi/j/A9F3EC594A">
                    DFT Engineer/Architect
                  </a>
                </td>
                <td>No closing date</td>
              </tr>
            </tbody>
          </table>
          <hr className="mt-5" />
          <h2 className="mt-4 text-danger">About Raspberry Pi</h2>
          <p>
            Democratising technology – providing access to tools – has been our
            motivation since the Raspberry Pi project began. By driving down the
            cost of general-purpose computing to{" "}
            <Link to="/products/raspberry-pi-pico">below $5</Link>, we’ve opened
            up the ability for anybody to use computers in projects that used to
            require prohibitive amounts of capital. Today, with barriers to
            entry being removed, we see{" "}
            <Link to="/products">Raspberry Pi computers</Link> being used
            everywhere from interactive museum exhibits and schools to national
            postal sorting offices and government call centres. Kitchen table
            businesses all over the world have been able to scale and find
            success in a way that just wasn’t possible in a world where
            integrating technology meant spending large sums on laptops and PCs.
          </p>
          <p>
            Raspberry Pi removes the high entry cost to computing for people
            across all demographics: while children can benefit from a computing
            education that previously wasn’t open to them, many adults have also
            historically been priced out of using computers for enterprise,
            entertainment and creativity. Raspberry Pi eliminates those
            barriers.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
