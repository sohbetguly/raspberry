const allImages = {
  computers: [
    {
      id: 0,
      text: "This is the stuff about how to get started",
      title: "Getting Started",
      imageUrl: require("../images/Categorized/Computers/01 Getting-Started.png"),
    },
    {
      id: 1,
      text: "The official OS of Raspberry Pi",
      title: "Raspberry Pi OS",
      imageUrl: require("../images/Categorized/Computers/02 Raspberry-Pi-OS.png"),
    },
    {
      id: 2,
      text: "Configuring the Raspberry Pi's settings to suit your needs",
      title: "Configuration",
      imageUrl: require("../images/Categorized/Computers/03 Configuration.png"),
    },
    {
      id: 3,
      text: "Low-level control of your Raspberry Pi's settings",
      title: "The config.txt file",
      imageUrl: require("../images/Categorized/Computers/04 The-config.txt-file.png"),
    },
    {
      id: 4,
      text: "How to configure and build a custom kernel for your Raspberry Pi",
      title: "Linux Kernel",
      imageUrl: require("../images/Categorized/Computers/05 Linux-Kernel.png"),
    },
    {
      id: 5,
      text: "How to use the Linux command line from Raspberry Pi OS",
      title: "Using Linux",
      imageUrl: require("../images/Categorized/Computers/06 Using-Linux.png"),
    },
    {
      id: 6,
      text: "Accessing your Raspberry Pi remotely",
      title: "Remote Access",
      imageUrl: require("../images/Categorized/Computers/07 Remote-Access.png"),
    },
    {
      id: 7,
      text: "Technical information about Raspberry Pi hardware",
      title: "Raspberry Pi Hardware",
      imageUrl: require("../images/Categorized/Computers/08 Raspberry-Pi-Hardware.png"),
    },
    {
      id: 8,
      text: "Technical information about Raspberry Pi Compute Module hardware",
      title: "Compute Module Hardware",
      imageUrl: require("../images/Categorized/Computers/09 Compute-Module-Hardware.png"),
    },
    {
      id: 9,
      text: "Technical information about the CPUs used by Raspberry Pi",
      title: "Processors",
      imageUrl: require("../images/Categorized/Computers/10 Processors.png"),
    },
    {
      id: 10,
      text: "The Product Information Portal (PIP) for Raspberry Pi compliance documents",
      title: "PIP",
      imageUrl: require("../images/Categorized/Computers/11 PIP.png"),
    },
    {
      id: 11,
      text: "The Datasheets site for PDF-based documentation",
      title: "Datasheets",
      imageUrl: require("../images/Categorized/Computers/12 Datasheets.png"),
    },
    {
      id: 12,
      text: "User and product support forums",
      title: "Forums",
      imageUrl: require("../images/Categorized/Computers/13 Forums.png"),
    },
  ],
  accessories: [
    {
      id: 0,
      text: "We have several Raspberry Pi cameras",
      title: "Camera",
      imageUrl: require("../images/Categorized/Accessories/01 Camera.png"),
    },
    {
      id: 1,
      text: "The Raspberry Pi Touch Display",
      title: "Display",
      imageUrl: require("../images/Categorized/Accessories/02 Display.png"),
    },
    {
      id: 2,
      text: "We have our own keyboard and mouse",
      title: "Keyboard & Mouse",
      imageUrl: require("../images/Categorized/Accessories/03 Keyboard-&-Mouse.png"),
    },
    {
      id: 3,
      text: "How to use the Build HAT",
      title: "Build HAT",
      imageUrl: require("../images/Categorized/Accessories/04 Build-HAT.png"),
    },
    {
      id: 4,
      text: "How to use the Sense HAT",
      title: "Sense HAT",
      imageUrl: require("../images/Categorized/Accessories/05 Sense-HAT.png"),
    },
    {
      id: 5,
      text: "How to watch TV on your Raspberry Pi",
      title: "TV HAT",
      imageUrl: require("../images/Categorized/Accessories/06 TV-HAT.png"),
    },
    {
      id: 6,
      text: "Information on the HAT specification",
      title: "Designing a HAT",
      imageUrl: require("../images/Categorized/Accessories/07 Datasheets.png"),
    },
    {
      id: 7,
      text: "The Product Information Portal (PIP) for Raspberry Pi compliance documents",
      title: "PIP",
      imageUrl: require("../images/Categorized/Accessories/08 Designing-a-HAT.png"),
    },
    {
      id: 8,
      text: "The Datasheets site for PDF-based documentation",
      title: "Datasheets",
      imageUrl: require("../images/Categorized/Accessories/09 Forums.png"),
    },
    {
      id: 9,
      text: "User and product support forums",
      title: "Forums",
      imageUrl: require("../images/Categorized/Accessories/10 PIP.png"),
    },
  ],
  microcontrollers: [
    {
      id: 0,
      text: "Our first microcontroller device",
      title: "RP2040",
      imageUrl: require("../images/Categorized/Microcontrollers/01 RP2040.png"),
    },
    {
      id: 1,
      text: "A board built around our RP2040",
      title: "Raspberry Pi Pico",
      imageUrl: require("../images/Categorized/Microcontrollers/02 Raspberry Pi Pico.png"),
    },
    {
      id: 2,
      text: "Getting started with MicroPython",
      title: "MicroPython",
      imageUrl: require("../images/Categorized/Microcontrollers/03 MicroPython.png"),
    },
    {
      id: 3,
      text: "Getting started with the C/C++ SDK",
      title: "The C/C++ SDK",
      imageUrl: require("../images/Categorized/Microcontrollers/04 The C&C++ SDK.png"),
    },
    {
      id: 4,
      text: "The Product Information Portal (PIP) for Raspberry Pi compliance documents",
      title: "PIP",
      imageUrl: require("../images/Categorized/Microcontrollers/05 PIP.png"),
    },
    {
      id: 5,
      text: "The Datasheets site for PDF-based documentation",
      title: "Datasheets",
      imageUrl: require("../images/Categorized/Microcontrollers/06 Datasheets.png"),
    },
    {
      id: 6,
      text: "User and product support forums",
      title: "Forums",
      imageUrl: require("../images/Categorized/Microcontrollers/07 Forums.png"),
    },
  ],
};

const { computers, accessories, microcontrollers } = allImages;

export default {
  computers,
  accessories,
  microcontrollers,
};
