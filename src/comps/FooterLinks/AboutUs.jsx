import React from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center bg-primary text-white">
        <h1 className="m-3">About Us</h1>
      </div>
      <div className="about-us mt-5">
        <div>
          <p>
            Raspberry Pi is an affordable way to do something useful, or to do
            something fun.
          </p>
          <h2 className="mt-4">Who are Raspberry Pi?</h2>
          <p>
            Democratising technology – providing access to tools – has been our
            motivation since the Raspberry Pi project began. By driving down the
            cost of general-purpose computing to below $5, we’ve opened up the
            ability for anybody to use computers in projects that used to
            require prohibitive amounts of capital. Today, with barriers to
            entry being removed, we see Raspberry Pi computers being used
            everywhere from interactive museum exhibits and schools to national
            postal sorting offices and government call centres. Kitchen table
            businesses all over the world have been able to scale and find
            success in a way that just wasn’t possible in a world where
            integrating technology meant spending large sums on laptops and PCs.
          </p>
          <p>
            Raspberry Pi removes the high entry cost to computing for people
            across all demographics: while children can benefit from a computing
            education that previously wasn’t open to them, many adults have also
            historically been priced out of using computers for enterprise,
            entertainment and creativity. Raspberry Pi eliminates those
            barriers.
          </p>
          <h2 className="mt-4">Raspberry Pi Foundation</h2>
          <p>
            Through our charity, the Raspberry Pi Foundation, we engage millions
            of young people around the world in learning computing and digital
            making skills through a thriving network of clubs and events, and
            through partnerships with youth organisations. We enable any school
            to offer students the opportunity to study computing and computer
            science through providing the best possible curriculum, resources,
            and training for teachers. We work to deepen our understanding of
            how young people learn about computing and digital making, and to
            use that knowledge to increase the impact of our own work and to
            advance the field of computing education.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
