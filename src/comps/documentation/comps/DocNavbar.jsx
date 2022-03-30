import React, { useState, useEffect } from "react";
import "../styles/doc-navbar.css";
import { Link } from "react-router-dom";

export default function DocNavbar() {
  useEffect(() => {});

  const [active, setActive] = useState("computers");

  const checkActive = (activate) => {
    if (active !== activate) {
      setActive(activate);
    }
  };

  return (
    <nav className="doc-navbar">
      <ul className="d-flex text-muted">
        <li className={active === "computers" ? "active" : ""}>
          <Link to="computers" onClick={() => checkActive("computers")}>
            Computers
          </Link>
        </li>

        <li className={active === "accessories" ? "active" : ""}>
          <Link to="accessories" onClick={() => checkActive("accessories")}>
            Accessories
          </Link>
        </li>

        <li className={active === "microcontrollers" ? "active" : ""}>
          <Link
            to="microcontrollers"
            onClick={() => checkActive("microcontrollers")}
          >
            Microcontrollers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
