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
  blackCore: {
    description:
      "Alter and corrupt the laws of the reality on a minor scale.<br>Every level of Black Core increases BLS limit by 1%.",
    effects: {
      blsLimit: 1,
    },
    flavor: "Built with the bones of kitten sacrifices.",
    label: "Black Core",
    name: "blackCore",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 10000,
      },
    ],
    tier: 5,
    unlocked: false,
  },
  blackLibrary: {
    description:
      "Every Black Library improves Codex Leviathanianus scaling by 2%. This value is further improved by Unicorn Graveyards.",
    effects: {
      compendiaTTBoostRatio: 0.02,
    },
    flavor: "Maybe it's too dark to read on purpose.",
    label: "Black Library",
    name: "blackLibrary",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 30000,
      },
    ],
    tier: 9,
    unlocked: false,
  },
  blackNexus: {
    description:
      "Improves the rate you refine time crystals into relics.<br>Every Black Nexus will increase your Relic Refine efficiency by the number of Black Pyramid.<br>This effect also boosts the effectiveness of Relic Stations",
    effects: {
      relicRefineRatio: 1,
    },
    flavor: "Eye in the sky.",
    label: "Black Nexus",
    name: "blackNexus",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 5000,
      },
    ],
    tier: 3,
    unlocked: false,
    upgrades: {
      spaceBuilding: ["spaceBeacon"],
    },
  },
  blackObelisk: {
    description:
      "Improves your Solar Revolution bonus limit.<br>Every Black Obelisk will increase your Solar Revolution bonus limit by 5 percentage point per transcendence tier.",
    effects: {
      solarRevolutionLimit: 0.05,
    },
    flavor: "TBD",
    label: "Black Obelisk",
    name: "blackObelisk",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 100,
      },
    ],
    tier: 1,
    unlocked: false,
  },
  blackRadiance: {
    description: "Every % of BLS meter will very slightly increase alicorn corruption rate",
    effects: {
      blsCorruptionRatio: 0.0012,
    },
    flavor: "Like a rainbow in the dark",
    label: "Black Radiance",
    name: "blackRadiance",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 37500,
      },
    ],
    tier: 12,
    unlocked: false,
  },
  blazar: {
    description: "Improve time-related structures",
    effects: {
      rrRatio: 0.02,
      timeRatio: 0.1,
    },
    flavor: "Tiger tiger burning bright.",
    label: "Blazar",
    name: "blazar",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 50000,
      },
    ],
    tier: 15,
    unlocked: false,
    unlocks: {
      chronoforge: ["temporalPress"],
    },
    upgrades: {
      chronoforge: ["temporalImpedance", "temporalPress"],
    },
  },
  darkNova: {
    description: "Improves global energy production by 2%",
    effects: {
      energyProductionRatio: 0.02,
    },
    flavor: "The stars are dead. Just like our hopes and dreams.",
    label: "Dark Nova",
    name: "darkNova",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 75000,
      },
      {
        name: "void",
        val: 7500,
      },
    ],
    tier: 20,
    unlocked: false,
  },
  holyGenocide: {
    description:
      "Reduce your max population cap by 1%. Increase all population-related effects by 2%",
    effects: {
      activeHG: 0,
      maxKittensRatio: -0.01,
      simScalingRatio: 0.02,
    },
    flavor:
      "We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.",
    label: "Holy Genocide",
    name: "holyGenocide",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 100000,
      },
      {
        name: "void",
        val: 25000,
      },
    ],
    tier: 25,
    togglable: true,
    unlocked: false,
    unlocks: {
      challenges: ["postApocalypse"],
    },
  },
  mausoleum: {
    description: "Venerate kittens of the past. Adds available pacts.",
    effects: {
      pactsAvailable: 1,
    },
    label: "Mausoleum",
    name: "mausoleum",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 50000,
      },
      {
        name: "void",
        val: 12500,
      },
      {
        name: "necrocorn",
        val: 10,
      },
    ],
    tier: 23,
    unlocked: false,
    unlocks: {
      pacts: ["pactOfCleansing", "pactOfDestruction", "pactOfExtermination", "pactOfPurity"],
      policies: ["siphoning", "feedingFrenzy", "upfrontPayment"],
    },
    upgrades: {
      pacts: ["fractured"],
      policies: ["feedingFrenzy"],
    },
  },
  singularity: {
    description: "Improve global resource limits by 10%",
    effects: {
      globalResourceRatio: 0.1,
    },
    flavor: "A gateway... To what?",
    label: "Event Horizon",
    name: "singularity",
    priceRatio: 1.15,
    prices: [
      {
        name: "relic",
        val: 25000,
      },
    ],
    tier: 7,
    unlocked: false,
  },
};
