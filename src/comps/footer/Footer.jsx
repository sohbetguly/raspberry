import React, { useState } from "react";
import FirstRowFooter from "./comps/FirstRowFooter";
import "./styles/footer.css";

export default function Footer() {
  const rowItems = [
    {
      id: "1",
      div: [
        {
          title: "Follow us",
          links: [
            { text: "Sign up to newsletter", link: "/weekly" },
            { text: "Twitter", link: "https://twitter.com/Raspberry_Pi" },
            { text: "Facebook", link: "https://www.facebook.com/raspberrypi" },
            { text: "YouTube", link: "https://youtube.com/raspberrypi" },
            {
              text: "Instagram",
              link: "https://www.instagram.com/raspberrypi/",
            },
            {
              text: "LinkedIn",
              link: "https://www.linkedin.com/company/raspberrypi/",
            },
          ],
        },
      ],
    },

    {
      id: "2",
      div: [
        {
          title: "About Raspberry Pi",
          links: [
            { text: "News", link: "/news" },
            { text: "Contact us", link: "/contact" },
            { text: "Trademark", link: "/trademark-rules" },
            { text: "About us", link: "/about" },
            { text: "Jobs", link: "/jobs" },
            { text: "Accessibility", link: "/accessibility" },
            { text: "Cookies", link: "/cookies" },
            { text: "Licensing", link: "/licensing" },
            {
              text: "Terms and conditions of sale",
              link: "/terms-conditions-sale",
            },
            { text: "Privacy", link: "/privacy" },
            { text: "Security", link: "/security" },
          ],
        },
      ],
    },

    {
      id: "3",
      div: [
        {
          title: "For industry",
          links: [
            { text: "Raspberry Pi for industry", link: "/for-industry" },
            { text: "Thin clients", link: "/for-industry/thin-clients" },
            {
              text: "Powered by Raspberry Pi",
              link: "/for-industry/integrator-programme",
            },
            { text: "Design partners", link: "/for-industry/design-partners" },
          ],
        },
        {
          title: "Hardware",
          links: [
            {
              text: "Computers and microcontrollers",
              link: "/products/#raspberry-pi-computers-and-microcontrollers",
            },
            {
              text: "Cameras and displays",
              link: "/products/#Cameras-and-displays",
            },
            { text: "Add-on boards", link: "/products/#Add-on-boards" },
            { text: "Power supplies and cables", link: "/products/#cases" },
            { text: "Cases", link: "/products/#peripherals" },
            { text: "Peripherals", link: "/products/#books" },
          ],
        },
        {
          title: "Software",
          links: [
            { text: "Raspberry Pi OS", link: "/software/operating-systems" },
            { text: "Raspberry Pi Imager", link: "/software" },
            { text: "Raspberry Pi Desktop", link: "" },
          ],
        },
      ],
    },

    {
      id: "4",
      div: [
        {
          title: "Documentation",
          links: [
            { text: "All categories", link: "" },
            { text: "Product information portal", link: "" },
            { text: "Datasheets", link: "" },
          ],
        },
        {
          title: "Forums",
          links: [{ text: "All forums", link: "" }],
        },
        {
          title: "Raspberry Pi Store",
          links: [{ text: "Cambridge Store", link: "" }],
        },
        {
          title: "Raspberry Pi Press",
          links: [
            { text: "About Raspberry Pi Press", link: "" },
            { text: "The MagPi", link: "" },
            { text: "HackSpace", link: "" },
            { text: "Wireframe", link: "" },
            { text: "Custom PC", link: "" },
          ],
        },
      ],
    },
  ];
  return (
    <footer className="bg-light">
      <div className="container ">
        <div className="row">
          {rowItems.map((item) => {
            return <FirstRowFooter key={item.id} rowItems={item.div} />;
          })}
        </div>
      </div>
    </footer>
  );
}
