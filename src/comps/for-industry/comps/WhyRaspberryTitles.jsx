import React, { useEffect, useState } from "react";

export default function WhyRaspberryTitles({ changeImage, image, data }) {
  // changeImage(image)
  const [count, setCount] = useState(2);

  const changer = () => {
    if (count) {
      changeImage(data[count - 1].image);
      setCount(count + 1);
    } else {
      return;
    }
  };

  const id = count ? setInterval(changer, 4000) : null;

  const changeImageHandler = (item) => {
    changeImage(item);
    setCount(0)
  };

  useEffect(() => {
    if (count > 3) {
      setCount(1);
    }
    return () => (count ? clearInterval(id) : null);
  });

  return (
    <div className="col-lg-3">
      <div className="row titles-cont">
        {data.map((item) => {
          return (
            <div
              key={item.image}
              onClick={() => {
                changeImageHandler(item.image);
              }}
              className={
                "col-md-12 p-4 " +
                (image === item.image ? "is-active" : "dialog-cont")
              }
            >
              <h5 className="weight-font">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
