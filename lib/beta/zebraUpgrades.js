//
// Kitten game is licensed under a WET PAWS LICENSE.
//
// You are free to make any changes in the code for personal or educational purpose.
// Using the game code for commercial gain or creation of derivative works is not permitted.
//
// Hosting a translated version of the game is permitted as long as the game retains all links.
// And for god's sake please don't make huge idiotic red logos of your website. (Yes, u77 folks, I am talking about you).
//
// Kitten Science Game Data Exporter © 2025 by Oliver Salzburg is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
//

export default {
  bloodstoneInstitute: {
    description:
      "Foggy memory of finding it. Zebra workshops increase chance to find Bloodstones in hunts",
    effects: {},
    label: "Bloodstone Institute",
    name: "bloodstoneInstitute",
    prices: [
      {
        name: "science",
        val: 85000,
      },
      {
        name: "blueprint",
        val: 50,
      },
      {
        name: "bloodstone",
        val: 25,
      },
      {
        name: "tMythril",
        val: 10,
      },
    ],
    upgrades: {
      buildings: ["zebraWorkshop"],
    },
  },
  darkBrew: {
    description: "Festivals also boosts chance of zebra arrival.",
    effects: {},
    label: "Dark Brew",
    name: "darkBrew",
    prices: [
      {
        name: "bloodstone",
        val: 1,
      },
      {
        name: "parchment",
        val: 3000,
      },
      {
        name: "science",
        val: 100,
      },
    ],
  },
  darkRevolution: {
    description: "Zebra Outposts allow more zebras to prepare for hunting",
    effects: {},
    label: "Dark Revolution",
    name: "darkRevolution",
    prices: [
      {
        name: "bloodstone",
        val: 15,
      },
      {
        name: "science",
        val: 100,
      },
    ],
    upgrades: {
      buildings: ["zebraOutpost"],
    },
  },
  minerologyDepartment: {
    description:
      "Minerology is being taught in the Academy, leading to better production from meteors",
    effects: {},
    label: "Minerology department",
    name: "minerologyDepartment",
    prices: [
      {
        name: "science",
        val: 75000,
      },
      {
        name: "compedium",
        val: 75,
      },
    ],
    unlocks: {
      zebraUpgrades: ["bloodstoneInstitute"],
    },
    upgrades: {
      buildings: ["academy"],
    },
  },
  whispers: {
    description:
      "Unlock Alicorn Ascension rituals at Ivory Temples. Alicorn Ascension produces T-Mythril and increases mineral production.",
    effects: {},
    label: "Whispers",
    name: "whispers",
    prices: [
      {
        name: "tMythril",
        val: 5,
      },
    ],
    upgrades: {
      buildings: ["ivoryTemple"],
    },
  },
};
