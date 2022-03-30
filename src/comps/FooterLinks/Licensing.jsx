import React from "react";
import { Link } from "react-router-dom";
import "./Licensing.scss";

export default function Licensing() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center darkblue text-white">
        <h1 className="m-3">Licensing</h1>
      </div>
      <div className="licensing mt-5">
        <div className="mb-5 mt-3">
          <h2>Document licensing</h2>
          <p>
            All of our online <Link to="/documentation"></Link> documentation is
            released under a Creative Commons{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              Attribution-ShareAlike 4.0 International{" "}
            </a>{" "}
            (CC BY-SA) licence. However, some of the content integrated into
            that documentation originated from the{" "}
            <a href="http://elinux.org/">eLinux wiki</a>, and is licensed under
            a Creative Commons{" "}
            <a href="http://creativecommons.org/licenses/by-sa/3.0/">
              Attribution-ShareAlike 3.0 Unported
            </a>{" "}
            licence.
          </p>
          <p>In either case, you are free:</p>
          <ul>
            <li>
              <b>to Share</b> – to copy, distribute, and transmit the material,
              and
            </li>
            <li>
              <b>to Remix</b> – to adapt the material
            </li>
          </ul>
          <p>Under the following conditions:</p>{" "}
          <ul>
            <li>
              <b>Attribution</b> – you must attribute the materials to Raspberry
              Pi Ltd (but not in any way that suggests that Raspberry Pi Ltd
              endorses you or your use of the materials), as well as including a
              link to the original resource. You must also indicate if changes
              were made.
            </li>
            <li>
              <b>ShareAlike</b> – if you alter, transform, or build upon these
              materials, you must distribute the resulting materials under the
              same licence.
            </li>
          </ul>
          <p>
            Most of the product documentation that we host on our site and
            distribute in PDF format is copyright © Raspberry Pi Ltd, and is
            licensed under a Creative Commons Attribution-NoDerivatives 4.0
            International (CC BY-ND) licence.
          </p>
          <p>With these files you are free:</p>
          <ul>
            <li>
              <b>to Share</b> – to copy, distribute, and transmit the material
              in any medium or format for any purpose, even commercially
            </li>
          </ul>
          <p>Under the following conditions:</p>
          <ul>
            <li>
              <b>Attribution</b> – you must attribute the materials to Raspberry
              Pi Ltd, but not in any way that suggests that Raspberry Pi Ltd
              endorses you or your use of the materials, as well as including a
              link to the original resource.
            </li>
            <li>
              <b>No Derivatives</b> – if you remix, transform, or build upon the
              material, you may not distribute the modified material.
            </li>
          </ul>
          <p>
            However, some documents that we share and host on our website are
            either copyright © Raspberry Pi Ltd or copyright © their original
            authors, including but not limited to the Broadcom Corporation and
            ARM Ltd, and all rights are reserved to their respective authors.
          </p>
          <h2>Software licensing</h2>
          <p>
            Most of the source code released and hosted by us is copyright ©
            Raspberry Pi Ltd and licensed under the BSD 3-Clause licence.
            However, some source code has been released under other licences —
            such as the MIT License or the GNU General Public License — and you
            should ensure you are aware of the licence of any code and of the
            restrictions the licence places upon you before reusing such code
            for any purpose.
          </p>
          <h2>Design file licensing</h2>
          <p>
            Most of the design files released and hosted by us are made
            available openly, with no limitations. Permission to use, copy,
            modify, and/or distribute these designs for any purpose with or
            without fee is hereby granted.
          </p>
          <p>
            DESIGNS ARE PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES
            WITH REGARD TO THESE DESIGNS INCLUDING ALL IMPLIED WARRANTIES OF
            MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
            FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
            DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
            WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
            ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE
            OF THESE DESIGNS.
          </p>
          <p>
            However, some design files that we have shared on our website are
            from third-party manufacturers, including but not limited to Diodes,
            MTCONN, Toby, and TRXCOM. Terms and conditions for the use of these
            remain with the original manufacturer.
          </p>
          <h2>Contributions</h2>
          <p>
            We welcome contributions to our{" "}
            <a href="/documentation">documentation</a> released under a CC BY-SA
            licence. You are free to fork the{" "}
            <a href="https://github.com/raspberrypi/documentation">
              documentation repository
            </a>{" "}
            and create a pull request for your changes to be merged. However,
            please read the{" "}
            <a href="https://github.com/raspberrypi/documentation/blob/develop/CONTRIBUTING.md">
              contribution guidelines
            </a>{" "}
            and the{" "}
            <a href="https://github.com/raspberrypi/style-guide/blob/master/style-guide.md">
              style guide
            </a>{" "}
            before making a pull request against the documentation.
          </p>
          <p>
            In all cases, the licence must remain in any derivatives of the
            work, and any contributions are assumed to be licensed under the
            same licence.
          </p>
          <h2>GitHub organisations</h2>
          <p>
            A full list of our official GitHub organisations can be{" "}
            <a href="https://raspberrypi.github.io/">on GitHub</a>. Repositories
            and projects under these organisations are officially supported.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
