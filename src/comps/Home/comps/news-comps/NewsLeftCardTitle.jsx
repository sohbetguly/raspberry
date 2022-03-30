import React from "react";

export default function NewsLeftCardTitle() {
  return (
    <div className="p-4">
      <h3 className="link-dark card-title" href="#">
        Create your own teletext service
      </h3>
      <p className="card-text  font-weight-light text-muted">
        Feeling retro? In the latest issue of The MagPi magazine, PJ Evans shows
        you how to turn any Raspberry Pi into a teletext broadcast service, make
        your own pages, and even generate content from the web. The web? A bit
        overrated if you ask us. What was wrong with the beautiful teletext
        pages that came…
      </p>
      <p
        className="padding-auto "
        style={{
          fontSize: "20px",
          color: "#4f60f6",
          fontWeight: "700",
        }}
      >
        Read more →
      </p>
    </div>
  );
}
