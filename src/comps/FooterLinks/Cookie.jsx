import React from "react";
import "./Cookie.scss";
import { Link } from "react-router-dom";
import piZero from "./../Home/comps/PiZero";

export default function Cookie() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center darkblue text-white">
        <h1 className="m-3">Cookie policy</h1>
      </div>
      <div className="cookie mt-5">
        <div className="mb-5 mt-3">
          <p>
            The Raspberry Pi website, like most websites, uses small text files
            called cookies. This note provides information on what cookies are,
            which cookies Raspberry Pi uses, and how they can be controlled.
          </p>
          <p>
            Our website uses cookies to distinguish you from other users of our
            website. A cookie is a small file which is stored by your web
            browser. Cookies provide core functionality (such as the ability to
            authenticate and log you in to an account), they also help store
            data on state and and behaviour which can be used to analyse web
            traffic and visitors. Cookies allow web applications to respond to
            you as an individual, aiding them to tailor their operations to your
            needs, likes and dislikes by storing unique information about you.
          </p>
          <p>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website, and allows us to improve our site.
          </p>
          <p>
            By continuing to browse the site, you are agreeing to our use of
            cookies.
          </p>
          <p>We use the following cookies:</p>

          <ul>
            <li>
              <p>
                <b>Strictly necessary cookies.</b> These are cookies that are
                required for the operation of our website. They include, for
                example, cookies that enable you to log into secure areas of our
                website such as forums.
              </p>
            </li>
            <li>
              <p>
                <b>Analytical/performance cookies.</b> They allow us to
                recognise and count the number of visitors and to see how
                visitors move around our website when they are using it. This
                lets us improve the way our website works, for example by
                helping us to ensure that users are easily finding what they are
                looking for.
              </p>
            </li>

            <li>
              <p>
                <b>Functionality cookies.</b> These are used to recognise you
                when you return to our website. This enables us to personalise
                our content for you.
              </p>
            </li>
            <li>
              <p>
                <b>Targeting cookies.</b> These cookies record your visit to our
                website, the pages you have visited, and the links you have
                followed. We will use this information to make our website and
                the advertising displayed on it more relevant to your interests.
                We may also share this information with third parties for this
                purpose.
              </p>
            </li>
          </ul>
          <h2>Cookie Information</h2>
          <table className="table-primary table-striped">
            <caption className="text-dark font-weight-bold">
              General cookies:
            </caption>
            <thead>
              <tr>
                <td>
                  <b>Cookie Name</b>{" "}
                </td>
                <td>
                  <b>Purpose</b>
                </td>
                <td>
                  <b>Expires </b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookiebanner_accepted </td>
                <td>
                  Records the users acceptance of our cookie policy, hiding our
                  cookie banner{" "}
                </td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>_ga, _gid, _gat, _gat_gtag_UA-XXXXXXX-X </td>
                <td>
                  Google Analytics: allows us to analyse user experience on the
                  website{" "}
                </td>
                <td>1 week</td>
              </tr>
              <tr>
                <td>countryCode </td>
                <td>
                  Records the country selected on a product page, pre-selecting
                  that country on other product pages{" "}
                </td>
                <td>Session Session</td>
              </tr>
              <tr>
                <td>RPTLLB</td>
                <td>
                  Used for load balancing traffic so all requests from a user go
                  to the same server{" "}
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>_GRECAPTCHA </td>
                <td>
                  Set by reCAPTCHA for the purpose of providing its risk
                  analysis. See{" "}
                  <a href="https://developers.google.com/recaptcha/docs/faq#does-recaptcha-use-cookies">
                    Google’s documentation for further information.{" "}
                  </a>{" "}
                </td>
                <td>6 months</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption className="mt-3">Forums:</caption>
            <thead>
              <tr>
                <td>
                  <b>Cookie Name</b>{" "}
                </td>
                <td>
                  <b>Purpose</b>
                </td>
                <td>
                  <b>Expires</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>phpbb3_XXXX_k, phpbb3_XXXX_sid, phpbb3_XXXX_u </td>
                <td>Used to identify user sessions</td>
                <td>1 month</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption className="mt-3">Product Information Portal:</caption>
            <thead>
              <tr>
                <td>
                  <b>Cookie Name </b>{" "}
                </td>
                <td>
                  <b>Purpose</b>
                </td>
                <td>
                  <b>Expires</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_product_information_session </td>
                <td>Used to identify user sessions</td>
                <td>1 week</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption className="mt-3">
              The MagPi, HackSpace, Wireframe, Custom PC & Digital SLR
              Photography:
            </caption>
            <thead>
              <tr>
                <td>
                  <b>Cookie Name </b>{" "}
                </td>
                <td>
                  <b>Purpose</b>
                </td>
                <td>
                  <b>Expires</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_magazines_session </td>
                <td>Used to identify user sessions </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>__stripe_mid, __stripe_sid </td>
                <td>
                  Set by Stripe for fraud prevention purposes and to assess the
                  risk associated with an attempted contribution. See{" "}
                  <a href="https://stripe.com/gb/cookie-settings">
                    Stripe’s documentation for further information
                  </a>
                  .{" "}
                </td>
                <td>1 year and 30 minutes respectively</td>
              </tr>
            </tbody>
          </table>
          <p>
            For more information about the individual cookies we use, you can
            contact us at{" "}
            <Link to="mailto:dataprotection@raspberrypi.com">
              dataprotection@raspberrypi.com
            </Link>{" "}
            .
          </p>
          <p>
            Please note that third parties (including, for example, advertising
            networks and providers of external services like web traffic
            analysis services) may also use cookies, over which we have no
            control. These cookies are likely to be analytical/performance
            cookies or targeting cookies.
          </p>
          <p>
            You block cookies by activating the setting on your browser that
            allows you to refuse the setting of all or some cookies. However, if
            you use your browser settings to block all cookies (including
            essential cookies), you may not be able to access all or parts of
            our site. We recommend you visit{" "}
            <a href="https://knowcookies.com/">knowcookies.com</a> for detailed
            guidance.
          </p>
          <p>
            Except for essential cookies, all cookies will expire after we no
            longer use them.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
