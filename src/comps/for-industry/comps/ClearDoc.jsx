import React from "react";

export default function ClearDoc() {
  return (
    <section className="clear-product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 clear-doc">
            <div>
              <h2>Clear and supportive documentation</h2>
              <p>
                All Raspberry Pi products are extensively documented, giving you
                a transparent view of how our computers work. Our dedicated
                documentation includes datasheets, guides, and schematics, as
                well as information on developer tools.
              </p>
              <a href="#" className="back-blue-btn">
                Read our documentation
              </a>
            </div>
          </div>

          <div className="col-md-6 background-image-2">
            <div className="img-fluid"></div>
          </div>
        </div>
        <div className="row info-port-container">
          <div className="col-md-6 back-image-3">
            <div></div>
          </div>
          <div className="col-md-6 info-portal">
            <div className="img-fluid">
              <span>
                <h2>Product Information Portal</h2>
                <p>
                  Compliance testing and certification place significant demands
                  on businesses bringing products to market, especially for
                  smaller enterprises. Access all of Raspberry Pi’s compliance,
                  conformity and test certification all in one place with a free
                  Raspberry Pi account.
                </p>
                <a href="#" className="back-blue-btn">
                  Go to the Product Information Portal
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
