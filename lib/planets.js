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
  cath: {
    buildings: [
      {
        description:
          "Every Space Elevator reduces oil requirements for all space projects by 5% and improves all space structures' production efficiency by 1%",
        effects: {
          oilReductionRatio: 0,
          prodTransferBonus: 0,
          spaceRatio: 0,
        },
        label: "Space Elevator",
        name: "spaceElevator",
        priceRatio: 1.15,
        prices: [
          {
            name: "titanium",
            val: 6000,
          },
          {
            name: "unobtainium",
            val: 50,
          },
          {
            name: "science",
            val: 75000,
          },
        ],
        requiredTech: ["orbitalEngineering", "nanotechnology"],
        unlocked: false,
      },
      {
        description:
          "Deploy a Satellite. Satellites improve your Observatory effectiveness by 5% and produce starcharts",
        effects: {
          energyConsumption: 0,
          energyProduction: 0,
          observatoryRatio: 0,
          starchartPerTickBaseSpace: 0,
        },
        label: "Satellite",
        name: "sattelite",
        priceRatio: 1.08,
        prices: [
          {
            name: "titanium",
            val: 2500,
          },
          {
            name: "oil",
            val: 15000,
          },
          {
            name: "science",
            val: 100000,
          },
          {
            name: "starchart",
            val: 325,
          },
        ],
        requiredTech: ["sattelites"],
        unlocked: false,
        unlockScheme: {
          name: "space",
          threshold: 24,
        },
        unlocks: {
          policies: ["outerSpaceTreaty", "militarizeSpace"],
        },
        upgrades: {
          buildings: ["observatory"],
          challenges: ["blackSky"],
        },
      },
      {
        breakIronWill: true,
        description:
          "Deploy a space station. Each station boosts science output and provides space for 2 astronauts",
        effects: {
          energyConsumption: 0,
          maxKittens: 0,
          scienceRatio: 0,
        },
        label: "Space St.",
        name: "spaceStation",
        priceRatio: 1.12,
        prices: [
          {
            name: "oil",
            val: 35000,
          },
          {
            name: "science",
            val: 150000,
          },
          {
            name: "starchart",
            val: 425,
          },
          {
            name: "alloy",
            val: 750,
          },
        ],
        requiredTech: ["orbitalEngineering"],
        unlocked: false,
        unlocks: {
          tabs: ["village"],
        },
      },
    ],
    label: "Cath",
    name: "cath",
    routeDays: 0,
  },
  centaurusSystem: {
    buildings: [
      {
        description: "Rip open the planet near the star Centaurus to collect magma energy.",
        effects: {
          energyProduction: 0,
        },
        label: "Tectonic",
        name: "tectonic",
        priceRatio: 1.25,
        prices: [
          {
            name: "antimatter",
            val: 500,
          },
          {
            name: "thorium",
            val: 75000,
          },
        ],
        requiredTech: ["terraformation"],
        unlocked: false,
      },
      {
        description: "Every level of Molten Core improves Tectonic effectiveness by 5%",
        effects: {
          tectonicBonus: 0.05,
        },
        label: "Molten Core",
        name: "moltenCore",
        priceRatio: 1.25,
        prices: [
          {
            name: "uranium",
            val: 5000000,
          },
          {
            name: "science",
            val: 25000000,
          },
        ],
        requiredTech: ["exogeophysics"],
        unlocked: false,
        upgrades: {
          spaceBuilding: ["tectonic"],
        },
      },
    ],
    label: "Centaurus System",
    name: "centaurusSystem",
    routeDays: 120000,
  },
  charon: {
    buildings: [
      {
        description:
          "Entanglement Station generates a set of entangled particles aka qbits for your quantum computing system. This process requires an enormous amount of processing power, but lets you perform a cryptographic attack on elder encryption algorithms.",
        effects: {
          energyConsumption: 25,
          gflopsConsumption: 0.1,
          hashRateLevel: 0,
          hashrate: 0,
          hrProgress: 0,
          nextHashLevelAt: 0,
        },
        label: "Entanglement St.",
        name: "entangler",
        priceRatio: 1.15,
        prices: [
          {
            name: "antimatter",
            val: 5250,
          },
          {
            name: "relic",
            val: 1250,
          },
          {
            name: "eludium",
            val: 5000,
          },
        ],
        requiredTech: ["quantumCryptography"],
        unlocked: false,
      },
    ],
    label: "Charon",
    name: "charon",
    routeDays: 25000,
  },
  dune: {
    buildings: [
      {
        description: "USS Mining Vessel Hissmeowra that can crack an entire planet",
        effects: {
          uraniumMax: 0,
          uraniumPerTickSpace: 0,
        },
        label: "Planet Cracker",
        name: "planetCracker",
        priceRatio: 1.18,
        prices: [
          {
            name: "science",
            val: 125000,
          },
          {
            name: "starchart",
            val: 2500,
          },
          {
            name: "alloy",
            val: 1750,
          },
          {
            name: "kerosene",
            val: 50,
          },
        ],
        unlocked: false,
      },
      {
        description:
          "Produces a high-pressure stream of oil. Every Space Elevator will boost this production by 0.1% of the global production multiplier.",
        effects: {
          oilPerTickAutoprodSpace: 0,
        },
        label: "Hydraulic Fracturer",
        name: "hydrofracturer",
        priceRatio: 1.18,
        prices: [
          {
            name: "science",
            val: 150000,
          },
          {
            name: "starchart",
            val: 750,
          },
          {
            name: "alloy",
            val: 1025,
          },
          {
            name: "kerosene",
            val: 100,
          },
        ],
        unlocked: false,
        unlockScheme: {
          name: "fluid",
          threshold: 10,
        },
      },
      {
        description:
          "Refines the sand of the Dune into a highly psychoactive substance known as 'Spice'.",
        effects: {
          spicePerTickAutoprodSpace: 0,
        },
        label: "Spice Refinery",
        name: "spiceRefinery",
        priceRatio: 1.15,
        prices: [
          {
            name: "science",
            val: 75000,
          },
          {
            name: "starchart",
            val: 500,
          },
          {
            name: "alloy",
            val: 500,
          },
          {
            name: "kerosene",
            val: 125,
          },
        ],
        unlocked: false,
        unlockScheme: {
          name: "dune",
          threshold: 10,
        },
      },
    ],
    label: "Dune",
    name: "dune",
    routeDays: 356,
  },
  furthestRing: {
    buildings: [],
    label: "Furthest Ring",
    name: "furthestRing",
    routeDays: 725000000,
  },
  helios: {
    buildings: [
      {
        description:
          "Generates antimatter once per year. Inactive if energy production is negative",
        effects: {
          antimatterProduction: 0,
          energyProduction: 0,
        },
        label: "Sunlifter",
        name: "sunlifter",
        priceRatio: 1.15,
        prices: [
          {
            name: "science",
            val: 500000,
          },
          {
            name: "eludium",
            val: 225,
          },
          {
            name: "kerosene",
            val: 2500,
          },
        ],
        unlocked: false,
      },
      {
        description: "Containment Chamber. Increases antimatter storage space by 100.",
        effects: {
          antimatterMax: 0,
          energyConsumption: 0,
        },
        label: "Cont. Chamber",
        name: "containmentChamber",
        priceRatio: 1.125,
        prices: [
          {
            name: "science",
            val: 500000,
          },
          {
            name: "kerosene",
            val: 2500,
          },
        ],
        unlocked: false,
      },
      {
        description:
          "A heat dissipation system. Every Heatsink will increase the power consumption of Containment Chamber by 1% and antimatter storage capacity by 2%",
        effects: {},
        label: "Heatsink",
        name: "heatsink",
        priceRatio: 1.12,
        prices: [
          {
            name: "science",
            val: 125000,
          },
          {
            name: "relic",
            val: 1,
          },
          {
            name: "kerosene",
            val: 5000,
          },
          {
            name: "thorium",
            val: 12500,
          },
        ],
        unlocked: false,
        upgrades: {
          spaceBuilding: ["containmentChamber"],
        },
      },
      {
        description:
          "Uses the heat of the sun to smelt materials into supercondensed plasma. Every level of Sunforge improves the storage space of your base metals by 1%",
        effects: {
          baseMetalMaxRatio: 0.01,
        },
        label: "Sunforge",
        name: "sunforge",
        priceRatio: 1.12,
        prices: [
          {
            name: "antimatter",
            val: 250,
          },
          {
            name: "science",
            val: 100000,
          },
          {
            name: "relic",
            val: 1,
          },
          {
            name: "kerosene",
            val: 1250,
          },
        ],
        unlocked: false,
      },
    ],
    label: "Helios",
    name: "helios",
    routeDays: 1200,
  },
  kairo: {
    buildings: [
      {
        description: "An AM-powered space station used for research and interstellar navigation.",
        effects: {
          relicPerDay: 0,
          scienceMax: 25000,
          starchartPerTickBaseSpace: 0.025,
        },
        label: "Space Beacon",
        name: "spaceBeacon",
        priceRatio: 1.15,
        prices: [
          {
            name: "antimatter",
            val: 50,
          },
          {
            name: "starchart",
            val: 25000,
          },
          {
            name: "alloy",
            val: 25000,
          },
          {
            name: "kerosene",
            val: 7500,
          },
        ],
        unlocked: false,
      },
    ],
    label: "Kairo",
    name: "kairo",
    routeDays: 5000,
  },
  moon: {
    buildings: [
      {
        description: "Deploy a nuclear powered mining outpost on Redmoon",
        effects: {
          energyConsumption: 0,
          unobtainiumPerTickSpace: 0,
          uraniumPerTickCon: 0,
        },
        label: "Lunar Outpost",
        lackResConvert: false,
        name: "moonOutpost",
        priceRatio: 1.12,
        prices: [
          {
            name: "oil",
            val: 55000,
          },
          {
            name: "uranium",
            val: 500,
          },
          {
            name: "science",
            val: 100000,
          },
          {
            name: "starchart",
            val: 650,
          },
          {
            name: "concrate",
            val: 150,
          },
          {
            name: "alloy",
            val: 750,
          },
        ],
        unlocked: false,
      },
      {
        description: "Establish a base on a surface of Redmoon",
        effects: {
          catnipMax: 0,
          coalMax: 0,
          energyConsumption: 0,
          ironMax: 0,
          mineralsMax: 0,
          oilMax: 0,
          titaniumMax: 0,
          unobtainiumMax: 0,
          woodMax: 0,
        },
        label: "Moon Base",
        name: "moonBase",
        priceRatio: 1.12,
        prices: [
          {
            name: "titanium",
            val: 9500,
          },
          {
            name: "oil",
            val: 70000,
          },
          {
            name: "unobtainium",
            val: 50,
          },
          {
            name: "science",
            val: 100000,
          },
          {
            name: "starchart",
            val: 700,
          },
          {
            name: "concrate",
            val: 250,
          },
        ],
        unlocked: false,
      },
    ],
    label: "Redmoon",
    name: "moon",
    routeDays: 30,
  },
  piscine: {
    buildings: [
      {
        description: "Mobile research space vessel.",
        effects: {
          scienceMax: 0,
          starchartPerTickBaseSpace: 0,
        },
        label: "Research Vessel",
        name: "researchVessel",
        priceRatio: 1.15,
        prices: [
          {
            name: "titanium",
            val: 12500,
          },
          {
            name: "starchart",
            val: 100,
          },
          {
            name: "alloy",
            val: 2500,
          },
          {
            name: "kerosene",
            val: 250,
          },
        ],
        unlocked: false,
        unlockScheme: {
          name: "vessel",
          threshold: 20,
        },
      },
      {
        description: "Provide a 2% production bonus to all space structures",
        effects: {
          energyConsumption: 0,
          spaceRatio: 0,
        },
        label: "Orbital Array",
        name: "orbitalArray",
        priceRatio: 1.15,
        prices: [
          {
            name: "science",
            val: 250000,
          },
          {
            name: "starchart",
            val: 2000,
          },
          {
            name: "eludium",
            val: 100,
          },
          {
            name: "kerosene",
            val: 500,
          },
        ],
        unlocked: false,
      },
    ],
    label: "Piscine",
    name: "piscine",
    routeDays: 256,
  },
  terminus: {
    buildings: [
      {
        description: "A vast storage facility complex",
        effects: {
          coalMax: 0,
          ironMax: 0,
          mineralsMax: 0,
          oilMax: 0,
          titaniumMax: 0,
          unobtainiumMax: 0,
          uraniumMax: 0,
          woodMax: 0,
        },
        label: "Cryostation",
        name: "cryostation",
        priceRatio: 1.12,
        prices: [
          {
            name: "science",
            val: 200000,
          },
          {
            name: "concrate",
            val: 1500,
          },
          {
            name: "eludium",
            val: 25,
          },
          {
            name: "kerosene",
            val: 500,
          },
        ],
        unlocked: false,
        unlockScheme: {
          name: "arctic",
          threshold: 10,
        },
      },
    ],
    label: "T-Minus",
    name: "terminus",
    routeDays: 2500,
  },
  umbra: {
    buildings: [
      {
        description:
          "Hawking Radiation Harvester. Operates on the energy of the black hole evaporation. Every HR Harvester generates 1W of energy which slowly increases over time.",
        effects: {
          energyProduction: 1,
        },
        label: "HR Harvester",
        name: "hrHarvester",
        priceRatio: 1.15,
        prices: [
          {
            name: "antimatter",
            val: 1250,
          },
          {
            name: "relic",
            val: 25,
          },
        ],
        unlocked: true,
      },
      {
        description: "Increase your crew cap by one",
        effects: {},
        label: "Navigation Relay",
        name: "navigationRelay",
        priceRatio: 1.2,
        prices: [
          {
            name: "titanium",
            val: 50000,
          },
          {
            name: "concrate",
            val: 5000,
          },
        ],
        requiredTech: false,
        unlocked: false,
      },
      {
        description: "Staffed with science crew",
        effects: {},
        label: "Space Shuttle",
        name: "spaceShuttle",
        priceRatio: 1.15,
        prices: [
          {
            name: "antimatter",
            val: 50,
          },
          {
            name: "eludium",
            val: 500,
          },
        ],
        requiredTech: false,
        unlocked: false,
      },
    ],
    label: "Umbra",
    name: "umbra",
    routeDays: 7500,
  },
  yarn: {
    buildings: [
      {
        breakIronWill: true,
        description:
          "Explode a charge of antimatter to melt yarn ice and throw oxygen into the atmosphere",
        effects: {
          maxKittens: 1,
        },
        label: "Terraforming Station",
        name: "terraformingStation",
        priceRatio: 1.25,
        prices: [
          {
            name: "uranium",
            val: 5000,
          },
          {
            name: "antimatter",
            val: 25,
          },
          {
            name: "kerosene",
            val: 5000,
          },
        ],
        requiredTech: ["terraformation"],
        unlocked: false,
        unlocks: {
          tabs: ["village"],
        },
      },
      {
        description:
          "State of the art automated hydroponic system. Increase catnip limit by 10%. Increase catnip production by 2.5%",
        effects: {
          catnipMaxRatio: 0.1,
          catnipRatio: 0.025,
          terraformingMaxKittensRatio: 0,
        },
        label: "Hydroponics",
        name: "hydroponics",
        priceRatio: 1.15,
        prices: [
          {
            name: "unobtainium",
            val: 1,
          },
          {
            name: "kerosene",
            val: 500,
          },
        ],
        requiredTech: ["hydroponics"],
        unlocked: false,
        upgrades: {
          spaceBuilding: ["terraformingStation"],
        },
      },
    ],
    label: "Yarn",
    name: "yarn",
    routeDays: 3800,
  },
};
