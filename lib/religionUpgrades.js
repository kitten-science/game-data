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
  apocripha: {
    description:
      "Grants the ability to convert worship to epiphany, which improves the effectiveness of praying",
    effects: {},
    faith: 100000,
    label: "Apocrypha",
    name: "apocripha",
    noStackable: true,
    prices: [
      {
        name: "gold",
        val: 5000,
      },
      {
        name: "faith",
        val: 5000,
      },
    ],
  },
  basilica: {
    description: "Temples generate more culture and expand cultural limits",
    effects: {},
    faith: 10000,
    label: "Basilica",
    name: "basilica",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "gold",
        val: 750,
      },
      {
        name: "faith",
        val: 1250,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  goldenSpire: {
    description: "Temples can store 50% more faith",
    effects: {},
    faith: 500,
    flavor: "A luxurious spike",
    label: "Golden Spire",
    name: "goldenSpire",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "gold",
        val: 150,
      },
      {
        name: "faith",
        val: 350,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  scholasticism: {
    description: "Temples will give a bonus to max science",
    effects: {},
    faith: 300,
    label: "Scholasticism",
    name: "scholasticism",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "faith",
        val: 250,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  solarchant: {
    description: "Improves your faith generation rate by 10%",
    effects: {
      faithRatioReligion: 0.1,
    },
    faith: 150,
    label: "Solar Chant",
    name: "solarchant",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "faith",
        val: 100,
      },
    ],
  },
  solarRevolution: {
    description: "Worship will give a small boost to resource production.",
    effects: {
      solarRevolutionRatio: 0,
    },
    faith: 1000,
    label: "Solar Revolution",
    name: "solarRevolution",
    noStackable: true,
    prices: [
      {
        name: "gold",
        val: 500,
      },
      {
        name: "faith",
        val: 750,
      },
    ],
  },
  stainedGlass: {
    description: "Every temple will generate twice as much culture",
    effects: {},
    faith: 750,
    label: "Stained Glass",
    name: "stainedGlass",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "gold",
        val: 250,
      },
      {
        name: "faith",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  sunAltar: {
    description: "Every temple can store a bit more faith and will improve happiness by 0.5%",
    effects: {},
    faith: 750,
    label: "Sun Altar",
    name: "sunAltar",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "gold",
        val: 250,
      },
      {
        name: "faith",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  templars: {
    description: "Temples have a small impact on the catpower limit",
    effects: {},
    faith: 75000,
    label: "Templar",
    name: "templars",
    noStackable: true,
    priceRatio: 2.5,
    prices: [
      {
        name: "gold",
        val: 3000,
      },
      {
        name: "faith",
        val: 3500,
      },
    ],
    upgrades: {
      buildings: ["temple", "ziggurat"],
    },
  },
  transcendence: {
    description: "Unlocks additional religion upgrades",
    effects: {},
    faith: 125000,
    label: "Transcendence",
    name: "transcendence",
    noStackable: true,
    prices: [
      {
        name: "gold",
        val: 7500,
      },
      {
        name: "faith",
        val: 7500,
      },
    ],
    upgrades: {
      religion: [
        "solarchant",
        "scholasticism",
        "goldenSpire",
        "sunAltar",
        "stainedGlass",
        "basilica",
        "templars",
      ],
    },
  },
};
