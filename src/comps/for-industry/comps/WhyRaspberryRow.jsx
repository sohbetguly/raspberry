import React from "react";
import WhyRaspberryTitles from "./WhyRaspberryTitles";

export default function WhyRaspberryRow(props) {
  const { image, changeImage, data } = props;
  return (
    <div className="row">
      <WhyRaspberryTitles changeImage={changeImage} image={image} data={data} />
      <div className="col-lg-9 image-cont">
        <img className="my-image " src={image} alt="" />
      </div>
    </div>
  );
}
