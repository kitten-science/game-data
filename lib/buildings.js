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
  academy: {
    description:
      "Improves your research ratio and the speed of your kitten skills growth. Each upgrade level improves your science output by 20%",
    effects: {
      academyMeteorBonus: 0,
      cultureMax: 25,
      scienceMax: 500,
      scienceRatio: 0.2,
      skillXP: 0.0005,
    },
    flavor: "Curiosity is the basis of science. Our cats died nobly",
    label: "Academy",
    name: "academy",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 50,
      },
      {
        name: "minerals",
        val: 70,
      },
      {
        name: "science",
        val: 100,
      },
    ],
    unlockRatio: 0.3,
    unlockScheme: {
      name: "school",
      threshold: 68,
    },
  },
  accelerator: {
    description: "Converts titanium to the uranium (sic)",
    effects: {
      catnipMax: 0,
      coalMax: 0,
      energyConsumption: 0,
      goldMax: 0,
      ironMax: 0,
      mineralsMax: 0,
      scienceMax: 0,
      titaniumMax: 0,
      titaniumPerTickCon: -0.015,
      uraniumPerTickAutoprod: 0.0025,
      woodMax: 0,
    },
    flavor: "Large Catron Collider",
    label: "Accelerator",
    lackResConvert: false,
    name: "accelerator",
    priceRatio: 1.15,
    prices: [
      {
        name: "titanium",
        val: 7500,
      },
      {
        name: "uranium",
        val: 25,
      },
      {
        name: "concrate",
        val: 125,
      },
    ],
  },
  aiCore: {
    description:
      "FelineOS, a state of the art artificial intelligence. Absolutely harmless. Every level of upgrade will increase Core energy consumption by 75%.",
    effects: {
      energyConsumption: 2,
      gflopsPerTickBase: 0.02,
    },
    flavor: "I think we can purr our differences behind us. For science.",
    label: "AI Core",
    name: "aiCore",
    priceRatio: 1.15,
    prices: [
      {
        name: "antimatter",
        val: 125,
      },
      {
        name: "science",
        val: 500000,
      },
    ],
    unlockRatio: 0.01,
    unlockScheme: {
      name: "cyber",
      threshold: 5,
    },
    upgrades: {
      buildings: ["library"],
      spaceBuilding: ["moonBase"],
    },
  },
  amphitheatre: {
    effects: {
      cultureMax: 0,
      culturePerTickBase: 0,
      unhappinessRatio: 0,
    },
    name: "amphitheatre",
    stages: [
      {
        description:
          "Reduces negative effects of overpopulation by 5%. This effect stacks but has diminishing return. Produces culture.",
        effects: {
          cultureMax: 50,
          culturePerTickBase: 0.005,
          unhappinessRatio: -0.048,
        },
        flavor: "Daily 'All Dogs Go to Heaven' showings",
        label: "Amphitheatre",
        priceRatio: 1.15,
        prices: [
          {
            name: "wood",
            val: 200,
          },
          {
            name: "minerals",
            val: 1200,
          },
          {
            name: "parchment",
            val: 3,
          },
        ],
        stageUnlocked: true,
      },
      {
        description: "Generates culture and happiness. More effective with high energy production.",
        effects: {
          cultureMax: 300,
          culturePerTickBase: 1,
          unhappinessRatio: -0.75,
        },
        label: "Broadcast Tower",
        priceRatio: 1.18,
        prices: [
          {
            name: "iron",
            val: 1250,
          },
          {
            name: "titanium",
            val: 75,
          },
        ],
        stageUnlocked: false,
      },
    ],
  },
  aqueduct: {
    effects: {
      catnipRatio: 0,
      energyProduction: 0,
    },
    name: "aqueduct",
    stages: [
      {
        description: "+3% to catnip production",
        effects: {
          catnipRatio: 0.03,
        },
        flavor: "No Swimming",
        label: "Aqueduct",
        priceRatio: 1.12,
        prices: [
          {
            name: "minerals",
            val: 75,
          },
        ],
        stageUnlocked: true,
      },
      {
        description: "A modern source of power production",
        effects: {
          energyProduction: 5,
        },
        label: "Hydro Plant",
        priceRatio: 1.15,
        prices: [
          {
            name: "titanium",
            val: 2500,
          },
          {
            name: "concrate",
            val: 100,
          },
        ],
        stageUnlocked: false,
      },
    ],
    unlockRatio: 0.3,
    upgrades: {
      buildings: ["magneto"],
    },
  },
  barn: {
    description: "Provides a space to store your resources.",
    effects: {
      catnipMax: 0,
      coalMax: 0,
      goldMax: 0,
      ironMax: 0,
      mineralsMax: 0,
      titaniumMax: 0,
      woodMax: 0,
    },
    flavor: "Rats ain't a problem for us!",
    label: "Barn",
    name: "barn",
    priceRatio: 1.75,
    prices: [
      {
        name: "wood",
        val: 50,
      },
    ],
    unlockRatio: 0.3,
  },
  biolab: {
    description: "Improves effectiveness of catnip refinement by 10%. More effective if powered.",
    effects: {
      catnipPerTickCon: 0,
      energyConsumption: 0,
      oilPerTickProd: 0,
      refineRatio: 0.1,
      scienceMax: 0,
      scienceRatio: 0.35,
    },
    effectsCalculated: {},
    flavor: "New postdoc positions available.",
    label: "Bio Lab",
    lackResConvert: false,
    name: "biolab",
    priceRatio: 1.1,
    prices: [
      {
        name: "science",
        val: 1500,
      },
      {
        name: "slab",
        val: 100,
      },
      {
        name: "alloy",
        val: 25,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  brewery: {
    description: "Brew catnip into a spicy drink. Boosts festival effects.",
    effects: {
      catnipPerTickCon: -1,
      festivalArrivalRatio: 0.001,
      festivalRatio: 0.01,
      manpowerRatio: 0,
      spicePerTickCon: -0.1,
    },
    effectsCalculated: {},
    flavor: "Sir! Want some nip' in ya milk?",
    label: "Brewery",
    lackResConvert: false,
    name: "brewery",
    priceRatio: 1.5,
    prices: [
      {
        name: "wood",
        val: 1000,
      },
      {
        name: "culture",
        val: 750,
      },
      {
        name: "spice",
        val: 5,
      },
      {
        name: "parchment",
        val: 375,
      },
    ],
    togglable: true,
    unlockRatio: 0.2,
    unlockScheme: {
      name: "chocolate",
      threshold: 10,
    },
    unlocks: {
      zebraUpgrades: ["darkBrew"],
    },
  },
  calciner: {
    description:
      "A highly effective source of metal. Consumes 1.5 minerals and 0.02 oil per tick. Produces iron and a small amount of titanium",
    effects: {
      cathPollutionPerTickProd: 1,
      coalPerTickCon: 0,
      energyConsumption: 1,
      ironPerTickAutoprod: 0.15,
      ironPerTickCon: 0,
      mineralsPerTickCon: -1.5,
      oilPerTickCon: -0.024,
      steelPerTickProd: 0,
      titaniumPerTickAutoprod: 0.0005,
    },
    effectsCalculated: {},
    isAutomationEnabled: null,
    label: "Calciner",
    lackResConvert: false,
    name: "calciner",
    priceRatio: 1.15,
    prices: [
      {
        name: "titanium",
        val: 15,
      },
      {
        name: "oil",
        val: 500,
      },
      {
        name: "steel",
        val: 100,
      },
      {
        name: "blueprint",
        val: 1,
      },
    ],
  },
  chapel: {
    description:
      "Produces a bit of culture and faith per tick. May be improved with religious upgrades",
    effects: {
      cultureMax: 0,
      culturePerTickBase: 0,
      faithPerTickBase: 0,
    },
    label: "Chapel",
    name: "chapel",
    priceRatio: 1.15,
    prices: [
      {
        name: "minerals",
        val: 2000,
      },
      {
        name: "culture",
        val: 250,
      },
      {
        name: "parchment",
        val: 250,
      },
    ],
  },
  chronosphere: {
    description:
      "Relocates small amount of resources through time. Can be upgraded further. Every Chronosphere increases the chance of Temporal Paradox.",
    effects: {
      energyConsumption: 0,
      resStasisRatio: 0.015,
      temporalFluxProduction: 0,
      temporalParadoxChance: 0.01,
    },
    label: "Chronosphere",
    name: "chronosphere",
    priceRatio: 1.25,
    prices: [
      {
        name: "unobtainium",
        val: 2500,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "timeCrystal",
        val: 1,
      },
      {
        name: "blueprint",
        val: 100,
      },
    ],
    upgrades: {
      voidSpace: ["cryochambers"],
    },
  },
  factory: {
    description: "Improves craft effectiveness",
    effects: {
      cathPollutionPerTickCon: 0,
      cathPollutionPerTickProd: 0,
      craftRatio: 0,
      energyConsumption: 0,
    },
    isAutomationEnabled: null,
    label: "Factory",
    name: "factory",
    priceRatio: 1.15,
    prices: [
      {
        name: "titanium",
        val: 2000,
      },
      {
        name: "plate",
        val: 2500,
      },
      {
        name: "concrate",
        val: 15,
      },
    ],
    unlockScheme: {
      name: "factory",
      threshold: 20,
    },
    unlocks: {
      policies: ["liberalism", "communism", "fascism"],
    },
  },
  field: {
    defaultUnlockable: true,
    description:
      "Plant some catnip to grow in the village. Fields have +50% production in Spring and -75% production in Winter",
    effects: {
      catnipPerTickBase: 0.125,
    },
    flavor: "'Nip as far as the eye can see.",
    label: "Catnip Field",
    name: "field",
    priceRatio: 1.12,
    prices: [
      {
        name: "catnip",
        val: 10,
      },
    ],
    unlockRatio: 0.3,
    unlockScheme: {
      name: "catnip",
      threshold: 56,
    },
  },
  harbor: {
    description: "Provides a space to store your resources",
    effects: {
      catnipMax: 0,
      coalMax: 0,
      goldMax: 0,
      ironMax: 0,
      mineralsMax: 0,
      titaniumMax: 0,
      woodMax: 0,
    },
    flavor: "Ahoy, landlubbers!",
    label: "Harbour",
    name: "harbor",
    priceRatio: 1.15,
    prices: [
      {
        name: "slab",
        val: 50,
      },
      {
        name: "plate",
        val: 75,
      },
      {
        name: "scaffold",
        val: 5,
      },
    ],
  },
  hut: {
    almostLimited: false,
    breakIronWill: true,
    defaultUnlockable: true,
    description:
      "Build a hut (each has a space for 2 kittens). Kittens need catnip to eat, or they will die.<br>Every kitten consumes about 4 catnip/s",
    effects: {
      manpowerMax: 75,
      maxKittens: 2,
    },
    flavor: "The Nation of Two",
    label: "Hut",
    name: "hut",
    priceRatio: 2.5,
    prices: [
      {
        name: "wood",
        val: 5,
      },
    ],
    unlockRatio: 0.3,
    unlocks: {
      tabs: ["village"],
    },
    upgrades: {
      policies: ["authocracy"],
    },
  },
  ivoryTemple: {
    defaultUnlockable: true,
    description: "Mystical temple where ivory is converted into minerals",
    effects: {
      alicornPerTickCon: 0,
      ivoryPerTickCon: 0,
      manpowerMax: 10,
      mineralsPerTickProd: 0,
      titaniumPerTickCon: 0,
      tMythrilPerTick: 0,
    },
    label: "Ivory Temple",
    lackResConvert: false,
    name: "ivoryTemple",
    priceRatio: 1.15,
    prices: [
      {
        name: "tMythril",
        val: 1,
      },
      {
        name: "ivory",
        val: 100,
      },
    ],
    togglable: true,
    unlockRatio: 0.1,
  },
  library: {
    defaultUnlockable: true,
    name: "library",
    priceRatio: 1.15,
    stages: [
      {
        description:
          "Build a Library to store sacred catkind knowledge. Each upgrade level improves your science output by 10%",
        effects: {
          cultureMax: 0,
          scienceMax: 0,
          scienceRatio: 0,
        },
        flavor: "All in Catonese",
        label: "Library",
        prices: [
          {
            name: "wood",
            val: 25,
          },
        ],
        stageUnlocked: true,
        unlockRatio: 0.3,
      },
      {
        description: "Increases total effect of compendia on your max science",
        effects: {
          cultureMax: 25,
          energyConsumption: 2,
          scienceMaxCompendia: 1000,
        },
        label: "Data Center",
        prices: [
          {
            name: "steel",
            val: 100,
          },
          {
            name: "concrate",
            val: 10,
          },
        ],
        stageUnlocked: false,
        unlockScheme: {
          name: "computer",
          threshold: 100,
        },
      },
    ],
    unlocks: {
      jobs: ["scholar"],
      tabs: ["science"],
    },
    upgrades: {
      buildings: ["biolab", "observatory"],
    },
  },
  logHouse: {
    almostLimited: false,
    breakIronWill: true,
    description: "Build a house (each has a space for 1 kitten)",
    effects: {
      manpowerMax: 50,
      maxKittens: 1,
    },
    flavor: "The Cabin in the Woods",
    label: "Log House",
    name: "logHouse",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 200,
      },
      {
        name: "minerals",
        val: 250,
      },
    ],
    unlockRatio: 0.3,
    unlocks: {
      tabs: ["village"],
    },
    upgrades: {
      policies: ["authocracy"],
    },
  },
  lumberMill: {
    description: "Improves wood production by 10%",
    effects: {
      woodRatio: 0,
    },
    flavor: "Best log analysing tool",
    label: "Lumber Mill",
    name: "lumberMill",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 100,
      },
      {
        name: "minerals",
        val: 250,
      },
      {
        name: "iron",
        val: 50,
      },
    ],
    unlockRatio: 0.3,
  },
  magneto: {
    description:
      "Improves your total resource production by 2%. Every Steamworks will boost this effect by 15%. Consumes oil.",
    effects: {
      cathPollutionPerTickProd: 5,
      energyProduction: 5,
      magnetoRatio: 0.02,
      oilPerTick: -0.05,
    },
    label: "Magneto",
    name: "magneto",
    priceRatio: 1.25,
    prices: [
      {
        name: "gear",
        val: 5,
      },
      {
        name: "alloy",
        val: 10,
      },
      {
        name: "blueprint",
        val: 1,
      },
    ],
  },
  mansion: {
    almostLimited: false,
    breakIronWill: true,
    description: "A spacy mansion (each has a space for 1 kitten)",
    effects: {
      manpowerMax: 50,
      maxKittens: 1,
    },
    flavor: "The best shipping container available",
    label: "Mansion",
    name: "mansion",
    priceRatio: 1.15,
    prices: [
      {
        name: "titanium",
        val: 25,
      },
      {
        name: "slab",
        val: 185,
      },
      {
        name: "steel",
        val: 75,
      },
    ],
    unlocks: {
      tabs: ["village"],
    },
    upgrades: {
      policies: ["authocracy"],
    },
  },
  mine: {
    description: "Unlocks the miner job. Each upgrade level improves your mineral output by 20%",
    effects: {
      cathPollutionPerTickProd: 0,
      coalPerTickBase: 0,
      mineralsRatio: 0,
    },
    flavor: "100 days without diggor mortis",
    label: "Mine",
    name: "mine",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 100,
      },
    ],
    unlockRatio: 0.15,
    unlockScheme: {
      name: "anthracite",
      threshold: 92,
    },
    unlocks: {
      jobs: ["miner"],
    },
  },
  mint: {
    description:
      "Produces luxurious resources proportional to your max catpower. Consumes catpower and a bit of gold.",
    effects: {
      fursPerTickProd: 0.00875,
      goldMax: 100,
      goldPerTickCon: -0.005,
      ivoryPerTickProd: 0.0021,
      manpowerPerTickCon: -0.75,
    },
    label: "Mint",
    lackResConvert: false,
    name: "mint",
    priceRatio: 1.15,
    prices: [
      {
        name: "minerals",
        val: 5000,
      },
      {
        name: "gold",
        val: 500,
      },
      {
        name: "plate",
        val: 200,
      },
    ],
    unlockScheme: {
      name: "gold",
      threshold: 24,
    },
  },
  observatory: {
    description: "Increases the chance of astronomical events by 0.2%",
    effects: {
      starAutoSuccessChance: 0.01,
      starEventChance: 0.002,
    },
    flavor: "Yearning to one day catch the red light fairy",
    label: "Observatory",
    name: "observatory",
    priceRatio: 1.1,
    prices: [
      {
        name: "iron",
        val: 750,
      },
      {
        name: "science",
        val: 1000,
      },
      {
        name: "slab",
        val: 35,
      },
      {
        name: "scaffold",
        val: 50,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  oilWell: {
    description: "Produces a bit of oil, +1500 to maximum oil limit",
    effects: {
      cathPollutionPerTickProd: 0,
      energyConsumption: 0,
      oilMax: 1500,
      oilPerTickBase: 0.02,
    },
    flavor: "Rise early, work hard, strike oil.",
    isAutomationEnabled: null,
    label: "Oil Well",
    name: "oilWell",
    priceRatio: 1.15,
    prices: [
      {
        name: "steel",
        val: 50,
      },
      {
        name: "gear",
        val: 25,
      },
      {
        name: "scaffold",
        val: 25,
      },
    ],
    unlockScheme: {
      name: "oil",
      threshold: 73,
    },
  },
  pasture: {
    effects: {},
    name: "pasture",
    stages: [
      {
        description: "Provides an alternative source of food, which reduces catnip consumption.",
        effects: {
          catnipDemandRatio: -0.005,
        },
        flavor: "Take a pint o' milk, Sir!",
        label: "Pasture",
        priceRatio: 1.15,
        prices: [
          {
            name: "catnip",
            val: 100,
          },
          {
            name: "wood",
            val: 10,
          },
        ],
        stageUnlocked: true,
      },
      {
        description: "Provides an additional source of energy depending on the seasons.",
        label: "Solar Farm",
        priceRatio: 1.15,
        prices: [
          {
            name: "titanium",
            val: 250,
          },
        ],
        stageUnlocked: false,
      },
    ],
    unlockRatio: 0.3,
  },
  quarry: {
    description: "Quarries each improve your mining efficiency by 35% and produce a bit of coal",
    effects: {
      cathPollutionPerTickProd: 0.25,
      coalPerTickBase: 0.015,
      mineralsRatio: 0.35,
      slabCraftRatio: 0,
      uraniumPerTickBase: 0,
    },
    flavor: "It's full of mice! Wait, wrong 'quarry'",
    label: "Quarry",
    name: "quarry",
    priceRatio: 1.15,
    prices: [
      {
        name: "slab",
        val: 1000,
      },
      {
        name: "steel",
        val: 125,
      },
      {
        name: "scaffold",
        val: 50,
      },
    ],
    unlockRatio: 0.3,
  },
  reactor: {
    description: "Provides a 5% boost to production while active. Requires uranium to operate.",
    effects: {
      energyProduction: 10,
      productionRatio: 0.05,
      thoriumPerTick: 0,
      uraniumMax: 250,
      uraniumPerTick: -0.001,
    },
    flavor: "Glowing mice are much easier to catch!",
    isAutomationEnabled: null,
    label: "Reactor",
    name: "reactor",
    priceRatio: 1.15,
    prices: [
      {
        name: "titanium",
        val: 3500,
      },
      {
        name: "plate",
        val: 5000,
      },
      {
        name: "concrate",
        val: 50,
      },
      {
        name: "blueprint",
        val: 25,
      },
    ],
    upgrades: {
      buildings: ["harbor"],
    },
  },
  smelter: {
    description: "Smelts ore into metal",
    effects: {
      cathPollutionPerTickProd: 0.15,
      coalPerTickAutoprod: 0,
      goldPerTickAutoprod: 0,
      ironPerTickAutoprod: 0,
      mineralsPerTickCon: 0,
      titaniumPerTickAutoprod: 0,
      woodPerTickCon: 0,
    },
    effectsCalculated: {},
    flavor: "Watch your whiskers!",
    label: "Smelter",
    lackResConvert: false,
    name: "smelter",
    priceRatio: 1.15,
    prices: [
      {
        name: "minerals",
        val: 200,
      },
    ],
    unlockRatio: 0.3,
  },
  steamworks: {
    description:
      "When active, significantly reduces your coal production. Does nothing useful by default, but can do a lot of cool stuff once upgraded.",
    effects: {
      cathPollutionPerTickProd: 1,
      coalRatioGlobal: 0,
      energyProduction: 1,
      magnetoBoostRatio: 0.15,
      manuscriptPerTickProd: 0,
    },
    flavor: "I just nap here and it looks like I'm working",
    isAutomationEnabled: null,
    jammed: false,
    label: "Steamworks",
    name: "steamworks",
    priceRatio: 1.25,
    prices: [
      {
        name: "steel",
        val: 65,
      },
      {
        name: "gear",
        val: 20,
      },
      {
        name: "blueprint",
        val: 1,
      },
    ],
    togglableOnOff: true,
  },
  temple: {
    description: "Temple of light. Produces culture. May be improved with Theology.",
    effects: {
      cultureMax: 0,
      culturePerTickBase: 0,
      faithMax: 0,
      faithPerTickBase: 0,
      happiness: 0,
      manpowerMax: 0,
      scienceMax: 0,
    },
    flavor: "All praise Ceiling Cat!",
    label: "Temple",
    name: "temple",
    priceRatio: 1.15,
    prices: [
      {
        name: "gold",
        val: 50,
      },
      {
        name: "slab",
        val: 25,
      },
      {
        name: "plate",
        val: 15,
      },
      {
        name: "manuscript",
        val: 10,
      },
    ],
    upgrades: {
      buildings: ["ziggurat"],
    },
  },
  tradepost: {
    description:
      "The heart of your trading empire. Improves trade effectiveness by 1.5%, reduces rare resource consumption by 4%",
    effects: {
      fursDemandRatio: -0.04,
      ivoryDemandRatio: -0.04,
      spiceDemandRatio: -0.04,
      standingRatio: 0,
      tradeRatio: 0.015,
    },
    flavor: "I hope they have yarn",
    label: "Tradepost",
    name: "tradepost",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 500,
      },
      {
        name: "minerals",
        val: 200,
      },
      {
        name: "gold",
        val: 10,
      },
    ],
    unlockRatio: 0.3,
    upgrades: {
      challenges: ["pacifism"],
    },
  },
  unicornPasture: {
    description: "Allows the taming of unicorns. Reduces catnip consumption by 0.15%",
    effects: {
      catnipDemandRatio: -0.0015,
      unicornsMax: 0,
      unicornsPerTickBase: 0.001,
    },
    flavor: "We glue horns on horses",
    label: "Unic. Pasture",
    name: "unicornPasture",
    priceRatio: 1.75,
    prices: [
      {
        name: "unicorns",
        val: 2,
      },
    ],
    unlockRatio: 0.3,
  },
  warehouse: {
    flavor: "All our stocks are scratched",
    name: "warehouse",
    stages: [
      {
        description: "Provides a space to store your resources",
        effects: {
          catnipMax: 0,
          coalMax: 0,
          goldMax: 0,
          ironMax: 0,
          mineralsMax: 0,
          titaniumMax: 0,
          woodMax: 0,
        },
        flavor: "All our stocks are scratched",
        label: "Warehouse",
        priceRatio: 1.15,
        prices: [
          {
            name: "beam",
            val: 1.5,
          },
          {
            name: "slab",
            val: 2,
          },
        ],
        stageUnlocked: true,
        togglable: false,
      },
      {
        description:
          "Increases the storage capacity of buildings in space. Does not affect science or antimatter.",
        effects: {
          cryostationStorageBonus: 0,
          energyConsumption: 0,
          moonBaseStorageBonus: 0,
          planetCrackerStorageBonus: 0,
        },
        flavor: "I want the fancy yarn imported from Yarn.",
        label: "Spaceport",
        priceRatio: 1.15,
        prices: [
          {
            name: "titanium",
            val: 10000,
          },
          {
            name: "eludium",
            val: 500,
          },
          {
            name: "kerosene",
            val: 1000,
          },
          {
            name: "blueprint",
            val: 500,
          },
          {
            name: "starchart",
            val: 100000,
          },
        ],
        stageUnlocked: true,
        togglable: true,
      },
    ],
    unlockScheme: {
      name: "minimalist",
      threshold: 10,
    },
    upgrades: {
      spaceBuilding: ["moonBase", "planetCracker", "cryostation"],
    },
  },
  workshop: {
    defaultUnlockable: true,
    description: "Provides a vast variety of upgrades. Improves craft effectiveness by 6%",
    effects: {
      craftRatio: 0.06,
    },
    flavor: "Free toys for workers",
    label: "Workshop",
    name: "workshop",
    priceRatio: 1.15,
    prices: [
      {
        name: "wood",
        val: 100,
      },
      {
        name: "minerals",
        val: 400,
      },
    ],
    unlockRatio: 0.0025,
    unlocks: {
      tabs: ["workshop"],
    },
  },
  zebraForge: {
    description: "Unlocks the craft of bloodstones and t-mythril.",
    effects: {
      manpowerMax: 50,
      tMythrilCraftRatio: 0.01,
    },
    label: "Zebra Forge",
    name: "zebraForge",
    priceRatio: 1.15,
    prices: [
      {
        name: "bloodstone",
        val: 50,
      },
    ],
    unlockRatio: 0.01,
    unlocks: {
      crafts: ["bloodstone", "tMythril"],
      zebraUpgrades: ["whispers"],
    },
    zebraRequired: 50,
  },
  zebraOutpost: {
    description:
      "Provides a base for the hunting expeditions. Every level of upgrade improves expedition effectiveness by 5%",
    effects: {
      hunterRatio: 0.05,
      manpowerMax: 5,
      zebraPreparations: 0,
    },
    jammed: false,
    label: "Zebra Outpost",
    name: "zebraOutpost",
    priceRatio: 1.35,
    prices: [
      {
        name: "bloodstone",
        val: 1,
      },
    ],
    unlockRatio: 0.01,
    upgrades: {
      buildings: ["zebraWorkshop"],
    },
    zebraRequired: 5,
  },
  zebraWorkshop: {
    description: "Unlocks various zebra upgrades",
    effects: {
      bloodstoneRatio: 0,
      manpowerMax: 25,
    },
    label: "Zebra Workshop",
    name: "zebraWorkshop",
    priceRatio: 1.15,
    prices: [
      {
        name: "bloodstone",
        val: 5,
      },
    ],
    unlockRatio: 0.01,
    unlocks: {
      zebraUpgrades: ["darkRevolution"],
    },
    upgrades: {
      buildings: ["zebraWorkshop"],
    },
    zebraRequired: 10,
  },
  ziggurat: {
    description:
      "The dark legacy of the lost race. Every Ziggurat will improve your culture limits by 8%.<br>May have special usage once Theology is researched.",
    effects: {
      cultureMaxRatio: 0.08,
      tearsMax: 0,
      unicornsMax: 0,
    },
    label: "Ziggurat",
    name: "ziggurat",
    priceRatio: 1.25,
    prices: [
      {
        name: "scaffold",
        val: 50,
      },
      {
        name: "blueprint",
        val: 1,
      },
      {
        name: "megalith",
        val: 50,
      },
    ],
    unlockRatio: 0.01,
    upgrades: {
      buildings: ["temple"],
    },
  },
};
