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
  chronocontrol: {
    description: "Increase the duration of Temporal Paradox",
    effects: {
      energyConsumption: 15,
      temporalParadoxDay: 0,
    },
    label: "Chronocontrol",
    name: "chronocontrol",
    priceRatio: 1.25,
    prices: [
      {
        name: "temporalFlux",
        val: 3000,
      },
      {
        name: "timeCrystal",
        val: 30,
      },
      {
        name: "void",
        val: 500,
      },
    ],
    unlocked: false,
    unlockScheme: {
      name: "vintage",
      threshold: 1,
    },
    unlocks: {
      upgrades: ["turnSmoothly"],
    },
  },
  cryochambers: {
    breakIronWill: true,
    description:
      "Will preserve one kitten after the reset.<br>You can have one Cryochamber per Chronosphere",
    effects: {
      maxKittens: 1,
    },
    flavor: "Board for the past",
    label: "Cryochamber",
    limitBuild: 0,
    name: "cryochambers",
    priceRatio: 1.25,
    prices: [
      {
        name: "karma",
        val: 1,
      },
      {
        name: "timeCrystal",
        val: 2,
      },
      {
        name: "void",
        val: 100,
      },
    ],
    unlocked: false,
    upgrades: {
      voidSpace: ["cryochambers"],
    },
  },
  usedCryochambers: {
    description: "Unsealed Cryochamber. Not in operating condition.",
    effects: {},
    fixPrices: [
      {
        name: "temporalFlux",
        val: 3000,
      },
      {
        name: "timeCrystal",
        val: 100,
      },
      {
        name: "void",
        val: 500,
      },
    ],
    label: "Used Cryochamber",
    limitBuild: 0,
    name: "usedCryochambers",
    priceRatio: 1.25,
    prices: [],
    unlocked: false,
  },
  voidHoover: {
    description: "Increase the maximum of void gained per day during the Temporal Paradox",
    effects: {
      temporalParadoxVoid: 1,
    },
    label: "Void Hoover",
    name: "voidHoover",
    priceRatio: 1.25,
    prices: [
      {
        name: "antimatter",
        val: 1000,
      },
      {
        name: "timeCrystal",
        val: 10,
      },
      {
        name: "void",
        val: 250,
      },
    ],
    unlocked: false,
  },
  voidResonator: {
    description:
      "Every Void Resonator will improve Order of the Void effect by 10%. Will trigger Order of the Void on a time skip.",
    effects: {
      voidResonance: 0.1,
    },
    label: "Void Resonator",
    name: "voidResonator",
    priceRatio: 1.25,
    prices: [
      {
        name: "timeCrystal",
        val: 1000,
      },
      {
        name: "relic",
        val: 10000,
      },
      {
        name: "void",
        val: 50,
      },
    ],
    unlocked: false,
  },
  voidRift: {
    description: "Increase the maximum storage space by 2%",
    effects: {
      globalResourceRatio: 0.02,
      umbraBoostRatio: 0.1,
    },
    label: "Void Rift",
    name: "voidRift",
    priceRatio: 1.3,
    prices: [
      {
        name: "void",
        val: 75,
      },
    ],
    unlocked: false,
    upgrades: {
      spaceBuilding: ["hrHarvester"],
    },
  },
};
