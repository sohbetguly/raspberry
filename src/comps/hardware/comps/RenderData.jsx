import React from "react";
import { Link } from "react-router-dom";

export default function RenderData({ title, content, id }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <div className="row" id={id}>
        {content.map((data) => {
          return (
            <div
              key={data.title}
              className="d-flex p-3 col-xl-3 col-lg-4 col-md-6"
            >
              <Link to={"#"} className="border-shadow p-0 gap-items w-100">
                <div className="row ">
                  <div className="col-lg-12 image">
                    <div className="cont">
                      <div className="image-container">
                        <img
                          className="image-ratio"
                          src={data.images}
                          alt={data.title}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="flex-column align-items-start p-3">
                      <h5>{data.title}</h5>
                      <p className="par">{data.text}</p>
                      <div className="d-flex btn-container">
                        <span className="green-button py-2 align-self-end">
                          More Info
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <hr />
    </React.Fragment>
  );
}
