import React from "react";
import store from "./images/store.webp";
import press from "./images/press.webp";
import foundation from "./images/foundation.webp";
import "./styles/more-raspberry.css";
import MoreRaspContents from "./MoreRaspContents";

export default function MoreRaspberry() {
  const h1Sytle = {
    textAlign: "center",
    marginTop: "4rem",
    marginBottom: "3rem",
  };

  const info = [
    {
      id: "1",
      title: "store",
      paragraph: "Cambridge’s one-stop shop for all things Raspberry Pi.",
      image: store,
    },
    {
      id: "2",
      title: "press",
      paragraph:
        "Your essential bookshelf for computing, gaming and hands-on making.",
      image: press,
    },
    {
      id: "3",
      title: "foundation",
      paragraph:
        "Putting the power of computing and digital making into the hands of people all over the world.",
      image: foundation,
    },
  ];

  return (
    <section>
      <h1 style={h1Sytle}>
        More from <b>Raspberry Pi</b>
      </h1>
      <div className="container">
        <div className="row">
          {info.map((information) => {
            return (
              <MoreRaspContents
                key={information.id}
                title={information.title}
                images={information.image}
                paragraphs={information.paragraph}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
