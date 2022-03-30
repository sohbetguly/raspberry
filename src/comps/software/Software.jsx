import React from "react";
import Main from "./comps/Main";
import ImagerLaylout from "./comps/ImagerLaylout";
import "./styles/software.css";
import DownloadOpt from "./comps/DownloadOpt";
import Help from "./comps/Help";

export default function Software() {
  return (
    <div className="container">
      <Main />
      <ImagerLaylout/>
      <DownloadOpt/>
      <Help/>
    </div>
  );
}
