var dataInfo = [
  {
    title: "Raspberry Pi computers and microcontrollers",
    id: "raspberry-pi-computers-and-microcontrollers",
    content: [
      { title: "Raspberry Pi Zero 2 W", text: "Your tiny, tiny $15 computer" },
      {
        title: "Raspberry Pi 400 Personal Computer Kit",
        text: "Raspberry Pi 400 is a complete personal computer, built into a compact keyboard.",
      },
      {
        title: "Raspberry Pi 400 unit",
        text: "Raspberry Pi 400 is your complete personal computer, built into a compact keyboard",
      },
      {
        title: "Raspberry Pi Pico",
        text: "The new, flexible $4 microcontroller board from Raspberry Pi",
      },
      {
        title: "RP2040",
        text: "A microcontroller chip designed by Raspberry Pi",
      },
      {
        title: "Raspberry Pi 4 Desktop Kit",
        text: "Full desktop computer kit - just connect to HDMI display(s)",
      },
      {
        title: "Raspberry Pi 4 Model B",
        text: "Your tiny, dual-display, desktop computer",
      },
      {
        title: "Raspberry Pi 3 Model A+",
        text: "Our third-generation single-board computer, now in the A+ format",
      },
      {
        title: "Raspberry Pi 3 Model B+",
        text: "The final revision of our third-generation single-board computer",
      },
      {
        title: "Raspberry Pi 3 Model B",
        text: "Our third-generation single-board computer",
      },
      {
        title: "Raspberry Pi 1 Model B+",
        text: "The Model B+ is the final revision of the original Raspberry Pi",
      },
      {
        title: "Raspberry Pi 1 Model A+",
        text: "The Model A+ is the low-cost variant of the Raspberry Pi",
      },
      {
        title: "Raspberry Pi Zero W",
        text: "Single-board computer with wireless and Bluetooth connectivity",
      },
      {
        title: "Raspberry Pi Zero",
        text: "Our lowest-cost single-board computer",
      },
    ],
  },
  {
    title: "Cameras and displays",
    id: "Cameras-and-displays",
    content: [
      {
        title: "Raspberry Pi Camera Module 2",
        text: "Raspberry Pi Camera Module 2",
      },
      {
        title: "Raspberry Pi Camera Module 2 NoIR",
        text: "The infrared Raspberry Pi Camera Module 2 NoIR",
      },
      {
        title: "Raspberry Pi High Quality Camera",
        text: "Our high quality 12.3-megapixel camera for use with interchangeable lenses",
      },
      {
        title: "Raspberry Pi Touch Display",
        text: "The 7″ touchscreen display for Raspberry Pi",
      },
    ],
  },
  {
    title: "Add-on boards",
    id: "Add-on-boards",
    content: [
      {
        title: "Raspberry Pi Build HAT",
        text: "Connect Raspberry Pi computing power with LEGO® Technic™ motors and sensors",
      },
      {
        title: "PoE+ HAT",
        text: "The official Power-over-Ethernet-Plus add-on board for Raspberry Pi",
      },
      {
        title: "Raspberry Pi TV HAT",
        text: "A HAT for receiving and decoding digital DVB-T2 TV streams",
      },
      {
        title: "Sense HAT",
        text: "The Sense HAT is an add-on board for Raspberry Pi",
      },
      {
        title: "IQaudio DAC+",
        text: "IQaudio DAC+ is an audio output HAT for all generations of Raspberry Pi",
      },
      {
        title: "IQaudio DAC Pro",
        text: "IQaudio DAC Pro is our highest-fidelity audio output HAT for all generations of Raspberry Pi",
      },
      {
        title: "IQaudio DigiAMP+",
        text: "IQaudio DigiAMP+ is an audio output HAT with integrated amplifier for all generations of Raspberry Pi.",
      },
      {
        title: "IQaudio Codec Zero",
        text: "IQaudio Codec Zero is a Raspberry Pi Zero-sized audio I/O add-on that includes the HAT EEPROM, allowing for autoconfiguration of the Linux environment if needed.",
      },
    ],
  },
  {
    title: "Cases",
    id: "cases",
    content: [
      {
        title: "Raspberry Pi 4 Case",
        text: "The official case for Raspberry Pi 4",
      },
      {
        title: "Raspberry Pi 3 Case",
        text: "Now available in red/white or black/grey",
      },
      {
        title: "Raspberry Pi A+ Case",
        text: "The official case for the Model A+",
      },
      {
        title: "Raspberry Pi Zero Case",
        text: "Case for Raspberry Pi Zero, Raspberry Pi Zero W, and Raspberry Pi Zero 2 W.",
      },
      {
        title: "Raspberry Pi 4 Case Fan",
        text: "Works with Raspberry Pi 4 and the Raspberry Pi 4 Case. Keeps your Raspberry Pi 4 at a comfortable operating temperature even under heavy load",
      },
    ],
  },
  {
    title: "Peripherals",
    id: "peripherals",
    content: [
      {
        title: "Raspberry Pi Keyboard and Hub",
        text: "The official Raspberry Pi keyboard and hub",
      },
      {
        title: "Raspberry Pi Mouse",
        text: "The official Raspberry Pi mouse",
      },
    ],
  },
  {
    title: "Books",
    id: "books",
    content: [
      {
        title: "Get Started with MicroPython on Raspberry Pi Pico",
        text: "How to get the most out of your new microcontroller board",
      },
      {
        title: "Official Raspberry Pi Beginner's Guide - 3rd Edition",
        text: "How to use your Raspberry Pi computer",
      },
      {
        title: "The Official Raspberry Pi Camera Guide",
        text: "How to get the most from your Raspberry Pi camera",
      },
    ],
  },
  {
    title: "Raspberry Pi for embedded applications",
    id: "Raspberry-Pi-for-embedded-applications",
    content: [
      {
        title: "Compute Module 4",
        text: "The power of Raspberry Pi 4 in a small, flexible form factor, available with a range of storage capacities and optional wireless connectivity",
      },
      {
        title: "Compute Module 4 IO Board",
        text: "A development platform and reference base-board design for our most powerful Compute Module yet",
      },
      {
        title: "Compute Module 4 Antenna Kit",
        text: "Certified for use with Raspberry Pi Compute Module 4",
      },
      {
        title: "Compute Module 3+",
        text: "Our third-generation Compute Module",
      },
      {
        title: "Compute Module 3+ Development Kit",
        text: "The Compute Module Development Kit for industrial designs using CM3+, also compatible with CM3",
      },
      {
        title: "Compute Module 1/3/3+ IO Board",
        text: "The Compute Module 1/3/3+ IO Board for CM1/CM3/CM3+",
      },
    ],
  },
];

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    let image = item.replace(/.\/|.avif/gim, "");
    images[`image${Number(image) - 1}`] = r(item);
  });
  return images;
};
const images = importAll(
  require.context("../item-images", false, /\.(png|jpe?g|svg|avif)$/)
);

var allImages = [];

for (const i in images) {
  if (Object.hasOwnProperty.call(images, i)) {
    const image = images[i];
    allImages.push(image);
  }
}

const getData = () => {
  dataInfo.map((data) => {
    data.content.map((d, index) => {
      d.images = allImages[index];
    });
  });
  return dataInfo;
};

export default getData();
