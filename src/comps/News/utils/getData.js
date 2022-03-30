const newsData = [
  {
    title: "Play retro games inside this gorgeous wooden briefcase",
    text: "Why don't people use briefcases any more?",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Network install beta test: your help required!",
    text: "We're working on a new easy way to install your OS",
    image: require("../images/Bootloader-setup-blog-small-800x400.jpg"),
    date: { month: 2, year: 2022 },
  },
  {
    title:
      "Three surprises popping up to mark the Raspberry Pi Store’s third birthday",
    text: "One pop, two pop, three pop",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 3, year: 2022 },
  },
  {
    title: "Retro Tech: Nvidia GeForce | Custom PC #223",
    text: "Lights, transform, action! ",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 4, year: 2022 },
  },
  {
    title: "Code an explosive homage to Bomb Jack | Wireframe #59",
    text: "Code an homage to Bomb Jack in Python and Pygame Zero",
    image: require("../images/GameScreen1-560x400.png"),
    date: { month: 5, year: 2022 },
  },
  {
    title: "Raspberry Pi OS (64-bit)",
    text: "Open sesame ",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 6, year: 2022 },
  },
  {
    title: "Detect malware with electromagnetic waves and Raspberry Pi",
    text: "Benign, benign, benign... MALWARE!",
    image: require("../images/hardware-800x400.jpg"),
    date: { month: 4, year: 2022 },
  },
  {
    title: "University students in Hungary learn with Raspberry Pi 400",
    text: "That is a LOT of exams",
    image: require("../images/ELTE_GTK_VK_vizsgater-800x400.jpg"),
    date: { month: 5, year: 2022 },
  },
  {
    title: "Ghost bust with this Raspberry Pi-powered P.K.E. Meter",
    text: "Who you gonna call?",
    image: require("../images/Screenshot-2022-01-25-at-17.01.58-718x400.png"),
    date: { month: 2, year: 2022 },
  },
  {
    title: "DeMoor Orrery planetarium | The MagPi #114",
    text: "Mars bar",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Swipe right for this one",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 5, year: 2022 },
  },
  {
    title: "Australian students built an arcade to play their own games on",
    text: "Pew pew pew",
    image: require("../images/11-800x400.jpg"),
    date: { month: 4, year: 2022 },
  },
  {
    title:
      "Three surprises popping up to mark the Raspberry Pi Store’s third birthday",
    text: "One pop, two pop, three pop.",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 9, year: 2022 },
  },
  {
    title: "Network install beta test: your help required!",
    text: "We're working on a new easy way to install your OS.",
    image: require("../images/Bootloader-setup-blog-small-800x400.jpg"),
    date: { month: 10, year: 2022 },
  },
  {
    title: "Play retro games inside this gorgeous wooden briefcase",
    text: "Why don't people use briefcases any more??",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 11, year: 2022 },
  },
  {
    title: "Code an explosive homage to Bomb Jack | Wireframe #59",
    text: "Code an homage to Bomb Jack in Python and Pygame Zero.",
    image: require("../images/GameScreen1-560x400.png"),
    date: { month: 7, year: 2022 },
  },

  {
    title: "Retro Tech: Nvidia GeForce | Custom PC #223",
    text: "Lights, transform, action! .",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 8, year: 2022 },
  },

  {
    title: "Detect malware with electromagnetic waves and Raspberry Pi",
    text: "Benign, benign, benign... MALWARE!.",
    image: require("../images/hardware-800x400.jpg"),
    date: { month: 5, year: 2022 },
  },
  {
    title: "DeMoor Orrery planetarium | The MagPi #114",
    text: "Mars bar.",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 2, year: 2022 },
  },
  {
    title: "Raspberry Pi OS (64-bit)",
    text: "Open sesame. ",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 6, year: 2022 },
  },

  {
    title: "University students in Hungary learn with Raspberry Pi 400",
    text: "That is a LOT of exams.",
    image: require("../images/ELTE_GTK_VK_vizsgater-800x400.jpg"),
    date: { month: 4, year: 2022 },
  },
  {
    title: "Ghost bust with this Raspberry Pi-powered P.K.E. Meter",
    text: "Who you gonna call?.",
    image: require("../images/Screenshot-2022-01-25-at-17.01.58-718x400.png"),
    date: { month: 3, year: 2022 },
  },
  {
    title: "Australian students built an arcade to play their own games on",
    text: "Pew pew pew.",
    image: require("../images/11-800x400.jpg"),
    date: { month: 0, year: 2022 },
  },

  {
    title: "Hand-controlled Atari 2600",
    text: "Swipe right for this one.",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },

  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Hand-controlled Atari 2600",
    text: "Blablabla",
    image: require("../images/Screenshot-2022-01-25-at-14.09.43-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Play retro games inside this gorgeous wooden briefcase",
    text: "Why don't people use briefcases any more?",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Network install beta test: your help required!",
    text: "We're working on a new easy way to install your OS",
    image: require("../images/Bootloader-setup-blog-small-800x400.jpg"),
    date: { month: 2, year: 2022 },
  },
  {
    title:
      "Three surprises popping up to mark the Raspberry Pi Store’s third birthday",
    text: "One pop, two pop, three pop",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 3, year: 2022 },
  },
  {
    title: "Retro Tech: Nvidia GeForce | Custom PC #223",
    text: "Lights, transform, action! ",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 4, year: 2022 },
  },
  {
    title: "Code an explosive homage to Bomb Jack | Wireframe #59",
    text: "Code an homage to Bomb Jack in Python and Pygame Zero",
    image: require("../images/GameScreen1-560x400.png"),
    date: { month: 5, year: 2022 },
  },
  {
    title: "Play retro games inside this gorgeous wooden briefcase",
    text: "Why don't people use briefcases any more?",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 1, year: 2022 },
  },
  {
    title: "Network install beta test: your help required!",
    text: "We're working on a new easy way to install your OS",
    image: require("../images/Bootloader-setup-blog-small-800x400.jpg"),
    date: { month: 2, year: 2022 },
  },
  {
    title:
      "Three surprises popping up to mark the Raspberry Pi Store’s third birthday",
    text: "One pop, two pop, three pop",
    image: require("../images/Screenshot-2022-01-25-at-20.48.23-800x400.png"),
    date: { month: 3, year: 2022 },
  },
  {
    title: "Retro Tech: Nvidia GeForce | Custom PC #223",
    text: "Lights, transform, action! ",
    image: require("../images/Screenshot-2022-02-03-at-13.20.46-800x400.png"),
    date: { month: 4, year: 2022 },
  },
  {
    title: "Code an explosive homage to Bomb Jack | Wireframe #59",
    text: "Code an homage to Bomb Jack in Python and Pygame Zero",
    image: require("../images/GameScreen1-560x400.png"),
    date: { month: 5, year: 2022 },
  },
];

const filteredData = (month) => {
  if (month) return newsData.filter((m) => m.date.month === month);

  return newsData;
};

export default filteredData;

// const months = document.querySelectorAll('select')[0].querySelectorAll('option')
// const monthArray = []

// for (let i = 0; i < months.length; i++) {
//   const month = months[i].innerHTML;
//   monthArray.push(month)
// }
