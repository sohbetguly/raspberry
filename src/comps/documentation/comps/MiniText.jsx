import React from "react";
import "../styles/mini-text.css";

export default function MiniText() {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="mini-text py-2">
          <p className="text-muted">
            You can view and edit the Raspberry Pi documentation source on{" "}
            <a href="#">Github</a>. Please read our{" "}
            <a href="#">usage and contributions policy</a>
            before you make a Pull Request.
          </p>{" "}
          <p className="text-muted">
            Raspberry Pi documentation is copyright © 2012-2022 Raspberry Pi Ltd
            and is licensed under a{" "}
            <a href="#">
              Creative Commons Attribution-ShareAlike 4.0 International
            </a>{" "}
            (CC BY-SA) licence.
          </p>{" "}
          <p className="text-muted">
            Some content originates from the <a href="#">eLinux</a> wiki, and is
            licensed under a{" "}
            <a href="#">Creative Commons Attribution-ShareAlike 3.0 Unported</a>
            licence.
          </p>
        </div>
      </div>
    </section>
  );
}
