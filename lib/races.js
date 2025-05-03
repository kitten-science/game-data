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
  dragons: {
    buys: [
      {
        name: "titanium",
        val: 250,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 7500,
      },
    ],
    hidden: true,
    name: "dragons",
    pinned: false,
    sells: [
      {
        chance: 0.95,
        name: "uranium",
        value: 1,
        width: 0.25,
      },
      {
        chance: 0.5,
        minLevel: 5,
        name: "thorium",
        value: 1,
        width: 0.25,
      },
    ],
    standing: 0,
    title: "Dragons",
  },
  griffins: {
    buys: [
      {
        name: "wood",
        val: 500,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 1000,
      },
    ],
    name: "griffins",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "iron",
        seasons: {
          autumn: 0.35,
          spring: -0.25,
          summer: -0.05,
          winter: -0.2,
        },
        value: 250,
        width: 0.12,
      },
      {
        chance: 0.25,
        minLevel: 5,
        name: "steel",
        value: 25,
        width: 0.1,
      },
      {
        chance: 0.1,
        minLevel: 10,
        name: "gear",
        value: 5,
        width: 0.25,
      },
    ],
    standing: -0.15,
    title: "Griffins",
  },
  leviathans: {
    buys: [
      {
        name: "unobtainium",
        val: 5000,
      },
    ],
    collapsed: false,
    hidden: true,
    name: "leviathans",
    pinned: false,
    sells: [
      {
        chance: 0.5,
        name: "starchart",
        value: 250,
        width: 0.8,
      },
      {
        chance: 0.98,
        name: "timeCrystal",
        value: 0.25,
        width: 0.15,
      },
      {
        chance: 0.15,
        name: "sorrow",
        value: 1,
        width: 0.1,
      },
      {
        chance: 0.05,
        name: "relic",
        value: 1,
        width: 0,
      },
    ],
    standing: 0,
    title: "Leviathans",
    unlocks: {
      policies: ["transkittenism", "necrocracy", "radicalXenophobia"],
    },
  },
  lizards: {
    buys: [
      {
        name: "minerals",
        val: 1000,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 100,
      },
    ],
    name: "lizards",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "wood",
        seasons: {
          autumn: 0.15,
          spring: -0.05,
          summer: 0.35,
          winter: 0.05,
        },
        value: 500,
        width: 0.08,
      },
      {
        chance: 0.25,
        minLevel: 5,
        name: "beam",
        value: 10,
        width: 0.15,
      },
      {
        chance: 0.1,
        minLevel: 10,
        name: "scaffold",
        value: 1,
        width: 0.1,
      },
    ],
    standing: 0.25,
    title: "Lizards",
  },
  nagas: {
    buys: [
      {
        name: "ivory",
        val: 500,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 500,
      },
    ],
    hidden: true,
    name: "nagas",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "minerals",
        seasons: {
          autumn: -0.35,
          spring: 0.25,
          summer: 0.05,
          winter: -0.05,
        },
        value: 1000,
        width: 0.18,
      },
      {
        chance: 0.75,
        minLevel: 5,
        name: "slab",
        value: 5,
        width: 0.15,
      },
      {
        chance: 0.25,
        minLevel: 10,
        name: "concrate",
        value: 5,
        width: 0.05,
      },
      {
        chance: 0.1,
        minLevel: 15,
        name: "megalith",
        value: 1,
        width: 0.1,
      },
    ],
    standing: 0,
    title: "Nagas",
  },
  sharks: {
    buys: [
      {
        name: "iron",
        val: 100,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 100,
      },
    ],
    name: "sharks",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "catnip",
        seasons: {
          autumn: 0.15,
          spring: 0.2,
          summer: -0.05,
          winter: 0.45,
        },
        value: 35000,
        width: 0.15,
      },
      {
        chance: 0.25,
        minLevel: 5,
        name: "parchment",
        value: 5,
        width: 0.25,
      },
      {
        chance: 0.15,
        minLevel: 10,
        name: "manuscript",
        value: 3,
        width: 0.25,
      },
      {
        chance: 0.1,
        minLevel: 15,
        name: "compedium",
        value: 1,
        width: 0.25,
      },
    ],
    standing: 0,
    title: "Sharks",
  },
  spiders: {
    buys: [
      {
        name: "scaffold",
        val: 50,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 5000,
      },
    ],
    hidden: true,
    name: "spiders",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "coal",
        seasons: {
          autumn: 0.15,
          spring: 0,
          summer: 0.05,
          winter: -0.05,
        },
        value: 350,
        width: 0.15,
      },
      {
        chance: 0.25,
        minLevel: 5,
        name: "oil",
        value: 100,
        width: 0.15,
      },
    ],
    standing: 0.15,
    title: "Spiders",
  },
  zebras: {
    buys: [
      {
        name: "slab",
        val: 50,
      },
    ],
    collapsed: false,
    embassyPrices: [
      {
        name: "culture",
        val: 25000,
      },
    ],
    hidden: true,
    name: "zebras",
    pinned: false,
    sells: [
      {
        chance: 1,
        name: "iron",
        seasons: {
          autumn: -0.1,
          spring: 0,
          summer: 0.15,
          winter: -0.2,
        },
        value: 300,
        width: 0.08,
      },
      {
        chance: 0.65,
        name: "plate",
        seasons: {
          autumn: 0.05,
          spring: 0.05,
          summer: -0.15,
          winter: 0.25,
        },
        value: 2,
        width: 0.25,
      },
      {
        chance: 0.05,
        minLevel: 5,
        name: "alloy",
        value: 0.25,
        width: 0.05,
      },
    ],
    standing: -0.3,
    title: "Zebras",
    unlocks: {
      policies: ["zebraRelationsAppeasement", "zebraRelationsBellicosity"],
    },
  },
};
