import React from "react";
import Computing from "./comps/computing";
import PiZero from "./comps/PiZero";
import News from "./comps/News";
import MoreRaspberry from "./comps/MoreRaspberry";

export default function Home() {
  return (
    <React.Fragment>
      <Computing />
      <PiZero />
      <News />
      <MoreRaspberry />
    </React.Fragment>
  );
}
