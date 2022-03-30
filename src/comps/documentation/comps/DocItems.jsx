import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Computers({ data }) {
  const param = useParams().id;
  return (
    <React.Fragment>
      {param ? (
        <Outlet />
      ) : (
        data.map((item) => {
          return (
            <div
              key={item.imageUrl}
              className="d-flex flex-column justify-content-center align-items-center col-lg-4 col-md-6 col-12 py-3 px-4"
            >
              <Link to={item.title} className=" doc-item bg-white w-100 h-100">
                <div>
                  <img
                    className="img-fluid doc-item-images"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
}
