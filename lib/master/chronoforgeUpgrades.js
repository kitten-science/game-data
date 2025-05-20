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
  blastFurnace: {
    description:
      "Operates on chronoheat. Increases the maximum heat limit by 100.<br>Automation skips one year into the future for each 100% of fuel consumed.",
    effects: {
      heatMax: 100,
      heatPerTick: 0.02,
    },
    heat: 0,
    isAutomationEnabled: false,
    label: "Chrono Furnace",
    name: "blastFurnace",
    on: 0,
    priceRatio: 1.25,
    prices: [
      {
        name: "timeCrystal",
        val: 25,
      },
      {
        name: "relic",
        val: 5,
      },
    ],
    unlocked: true,
    unlocks: {
      chronoforge: ["timeBoiler"],
      upgrades: ["tachyonModerator"],
    },
  },
  controlledDelay: {
    delayTicks: 0,
    description:
      "Each one makes the Chrono Furnace wait 0.2 seconds before firing again.<br>Toggling automation has no gameplay effect.",
    effects: {
      energyConsumption: 0.75,
    },
    isAutomationEnabled: false,
    label: "Controlled Delay",
    limitBuild: 25,
    name: "controlledDelay",
    priceRatio: 1,
    prices: [
      {
        name: "timeCrystal",
        val: 1,
      },
      {
        name: "gear",
        val: 10,
      },
    ],
    unlocked: false,
  },
  ressourceRetrieval: {
    description: "Retrieve part of your yearly resources when you burn TC",
    effects: {
      shatterTCGain: 0.01,
    },
    label: "Resource Retrieval",
    limitBuild: 100,
    name: "ressourceRetrieval",
    priceRatio: 1.3,
    prices: [
      {
        name: "timeCrystal",
        val: 1000,
      },
    ],
    unlocked: false,
  },
  temporalAccelerator: {
    description: "Improves time-related effects by 5%<br>Automation decreases shatter lag",
    effects: {
      timeRatio: 0.05,
    },
    isAutomationEnabled: null,
    label: "Temporal Accelerator",
    name: "temporalAccelerator",
    priceRatio: 1.25,
    prices: [
      {
        name: "timeCrystal",
        val: 10,
      },
      {
        name: "relic",
        val: 1000,
      },
    ],
    unlocked: true,
    upgrades: {
      chronoforge: ["temporalImpedance"],
    },
  },
  temporalBattery: {
    description: "Improves your flux energy capacity by 25%",
    effects: {
      temporalFluxMax: 750,
    },
    label: "Temporal Battery",
    name: "temporalBattery",
    priceRatio: 1.25,
    prices: [
      {
        name: "timeCrystal",
        val: 5,
      },
    ],
    unlocked: true,
  },
  temporalImpedance: {
    description: "Delay effect of Dark Future temporal penalty by 1000 years.",
    effects: {
      timeImpedance: 1000,
    },
    label: "Time Impedance",
    name: "temporalImpedance",
    priceRatio: 1.05,
    prices: [
      {
        name: "timeCrystal",
        val: 100,
      },
      {
        name: "relic",
        val: 250,
      },
    ],
    unlocked: false,
  },
  temporalPress: {
    description: "Allows for fine tuning of shattering",
    effects: {
      energyConsumption: 5,
      shatterYearBoost: 0,
    },
    isAutomationEnabled: null,
    label: "Temporal Press",
    name: "temporalPress",
    priceRatio: 1.1,
    prices: [
      {
        name: "timeCrystal",
        val: 100,
      },
      {
        name: "void",
        val: 10,
      },
    ],
    unlocked: false,
  },
  timeBoiler: {
    description: "Expands the heat capacity of Chrono Furnaces.",
    effects: {
      energyConsumption: 1,
      heatMaxExpansion: 10,
    },
    label: "Time Boiler",
    name: "timeBoiler",
    priceRatio: 1.25,
    prices: [
      {
        name: "timeCrystal",
        val: 25000,
      },
    ],
    unlocked: false,
    upgrades: {
      chronoforge: ["blastFurnace"],
    },
  },
};
