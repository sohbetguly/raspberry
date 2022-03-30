import React from "react";
import { useParams } from "react-router-dom";
import DocItemsLayout from "./comps/DocItemsLayout";
import MainSection from "./comps/MainSection";
import MiniText from "./comps/MiniText";

export default function Documentation(props) {
  // console.log(useParams().id);
  return (
    <React.Fragment>
      <section className="main-section">
        <MainSection />
      </section>
      <DocItemsLayout />
      <MiniText />
    </React.Fragment>
  );
}
