import React from "react";
import { Link } from "react-router-dom";

export default function FirstRowFooter({ rowItems }) {
  const myStyle = {
    fontWeight: "700",
    fontSize: "15px",
    marginLeft: "2rem",
    marginBottom: "1.5rem",
    marginTop: "2.5rem",
  };

  return (
    <div className="col-lg-3 mt-5">
      {rowItems.map((rowItem) => {
        return (
          <React.Fragment key={rowItem.title}>
            <div>
              <h4 style={myStyle}>{rowItem.title}</h4>
            </div>
            <ul className="footer-list">
              {rowItem.links.map((item, index) => {
                return (
                  <li key={index}>
                    {item.link.includes("http" && "#") ? (
                      <a href={item.link}>{item.text}</a>
                    ) : (
                      <Link to={item.link}>{item.text}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
}
