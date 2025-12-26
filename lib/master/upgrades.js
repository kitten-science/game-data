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
  advancedAutomation: {
    description: "Workshop Automation will be activated twice per year.",
    effects: {},
    label: "Advanced Automation",
    name: "advancedAutomation",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 75,
      },
      {
        name: "blueprint",
        val: 25,
      },
    ],
  },
  advancedRefinement: {
    description: "Catnip refines twice as well",
    effects: {},
    flavor: "It's all fun and games 'til someone gets pounced",
    label: "Catnip Enrichment",
    name: "advancedRefinement",
    prices: [
      {
        name: "catnip",
        val: 5000,
      },
      {
        name: "science",
        val: 500,
      },
    ],
  },
  aiBases: {
    description:
      "AI-powered logistics. Every active AI Core will increase the effectiveness of Moon Bases by 10%",
    label: "AI Bases",
    name: "aiBases",
    prices: [
      {
        name: "antimatter",
        val: 7500,
      },
      {
        name: "science",
        val: 750000,
      },
    ],
    upgrades: {
      spaceBuilding: ["moonBase"],
    },
  },
  aiEngineers: {
    description: "A holy union of feline mind and a machine",
    effects: {
      queueCap: 3,
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 5,
      t4CraftRatio: 2,
      t5CraftRatio: 2,
    },
    label: "AI Engineers",
    name: "aiEngineers",
    prices: [
      {
        name: "antimatter",
        val: 500,
      },
      {
        name: "science",
        val: 35000,
      },
      {
        name: "eludium",
        val: 50,
      },
    ],
  },
  alloyArmor: {
    description: "Hunters are a bit more effective",
    effects: {
      hunterRatio: 0.5,
    },
    label: "Alloy Armour",
    name: "alloyArmor",
    prices: [
      {
        name: "science",
        val: 50000,
      },
      {
        name: "alloy",
        val: 25,
      },
    ],
  },
  alloyAxe: {
    description: "The more you use them, the sharper they are! Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
    label: "Alloy Axe",
    name: "alloyAxe",
    prices: [
      {
        name: "science",
        val: 70000,
      },
      {
        name: "alloy",
        val: 25,
      },
    ],
  },
  alloyBarns: {
    description: "Storage facilities store twice as many resources",
    effects: {
      barnRatio: 1,
    },
    label: "Alloy Barns",
    name: "alloyBarns",
    prices: [
      {
        name: "science",
        val: 75000,
      },
      {
        name: "plate",
        val: 750,
      },
      {
        name: "alloy",
        val: 20,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  alloySaw: {
    description: "Improve Lumber Mill efficiency by 15%",
    effects: {
      lumberMillRatio: 0.15,
    },
    label: "Alloy Saw",
    name: "alloySaw",
    prices: [
      {
        name: "science",
        val: 85000,
      },
      {
        name: "alloy",
        val: 75,
      },
    ],
    upgrades: {
      buildings: ["lumberMill"],
    },
  },
  alloyWarehouses: {
    description: "Storage facilities store 45% more resources",
    effects: {
      warehouseRatio: 0.45,
    },
    label: "Alloy Warehouses",
    name: "alloyWarehouses",
    prices: [
      {
        name: "titanium",
        val: 750,
      },
      {
        name: "science",
        val: 90000,
      },
      {
        name: "alloy",
        val: 50,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  amBases: {
    description: "Reduce energy consumption for Moon Bases by 50%",
    label: "Antimatter Bases",
    name: "amBases",
    prices: [
      {
        name: "antimatter",
        val: 250,
      },
      {
        name: "eludium",
        val: 15,
      },
    ],
    unlocks: {
      upgrades: ["aiBases"],
    },
    upgrades: {
      spaceBuilding: ["moonBase"],
    },
  },
  amDrive: {
    description: "Antimatter-powered rocket engine",
    effects: {
      routeSpeed: 25,
    },
    label: "Antimatter Drive",
    name: "amDrive",
    prices: [
      {
        name: "antimatter",
        val: 125,
      },
      {
        name: "science",
        val: 450000,
      },
    ],
  },
  amFission: {
    description: "Engineers are 25% more effective at production of eludium",
    effects: {
      eludiumAutomationBonus: 0.25,
    },
    label: "Antimatter Fission",
    name: "amFission",
    prices: [
      {
        name: "antimatter",
        val: 175,
      },
      {
        name: "science",
        val: 525000,
      },
      {
        name: "thorium",
        val: 7500,
      },
    ],
  },
  amReactors: {
    description: "Your Research Vessels and Space Beacons are 95% more effective",
    effects: {
      spaceScienceRatio: 0.95,
    },
    label: "Antimatter Reactors",
    name: "amReactors",
    prices: [
      {
        name: "antimatter",
        val: 750,
      },
      {
        name: "eludium",
        val: 35,
      },
    ],
    unlocks: {
      upgrades: ["amReactorsMK2"],
    },
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
  },
  amReactorsMK2: {
    description: "Your Research Vessels and Space Beacons are ~77% more effective",
    effects: {
      spaceScienceRatio: 1.5,
    },
    label: "Advanced AM Reactors",
    name: "amReactorsMK2",
    prices: [
      {
        name: "antimatter",
        val: 1750,
      },
      {
        name: "eludium",
        val: 70,
      },
    ],
    unlocks: {
      upgrades: ["voidReactors"],
    },
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
  },
  assistance: {
    description: "Factory robots automating routine tasks. Workers require less catnip.",
    effects: {
      catnipDemandWorkerRatioGlobal: -0.25,
    },
    label: "Robotic Assistance",
    name: "assistance",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "steel",
        val: 10000,
      },
      {
        name: "gear",
        val: 250,
      },
    ],
  },
  astrolabe: {
    description: "Improves Observatory's max science bonus by 50%",
    effects: {},
    label: "Astrolabe",
    name: "astrolabe",
    prices: [
      {
        name: "titanium",
        val: 5,
      },
      {
        name: "science",
        val: 25000,
      },
      {
        name: "starchart",
        val: 75,
      },
    ],
    upgrades: {
      buildings: ["observatory"],
    },
  },
  astrophysicists: {
    description: "Each scholar will now generate starcharts.",
    effects: {},
    label: "Astrophysicists",
    name: "astrophysicists",
    prices: [
      {
        name: "unobtainium",
        val: 350,
      },
      {
        name: "science",
        val: 250000,
      },
    ],
    upgrades: {
      jobs: ["scholar"],
    },
  },
  augumentation: {
    description: "Kitten skills are 100% more effective",
    effects: {
      skillMultiplier: 1,
    },
    label: "Augmentations",
    name: "augumentation",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "uranium",
        val: 50,
      },
      {
        name: "science",
        val: 150000,
      },
    ],
  },
  automatedPlants: {
    description: "Steel Plants are boosted by 25% of your craft ratio",
    effects: {
      calcinerSteelCraftRatio: 0.25,
    },
    label: "Automated Plants",
    name: "automatedPlants",
    prices: [
      {
        name: "science",
        val: 200000,
      },
      {
        name: "alloy",
        val: 750,
      },
    ],
    unlocks: {
      upgrades: ["nuclearPlants"],
    },
  },
  barges: {
    description: "Harbors store more coal",
    effects: {
      harborCoalRatio: 0.5,
    },
    label: "Barges",
    name: "barges",
    prices: [
      {
        name: "titanium",
        val: 1500,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "blueprint",
        val: 30,
      },
    ],
    upgrades: {
      buildings: ["harbor"],
    },
  },
  biofuel: {
    description: "Bio Labs will convert catnip into oil. Every Bio Lab will consume 1Wt/t.",
    effects: {},
    label: "Biofuel Processing",
    name: "biofuel",
    prices: [
      {
        name: "titanium",
        val: 1250,
      },
      {
        name: "science",
        val: 150000,
      },
    ],
    upgrades: {
      buildings: ["biolab"],
    },
  },
  bolas: {
    description: "Throwing weapon made of heavy stone weights. Your hunters are twice as effective",
    effects: {
      hunterRatio: 1,
    },
    flavor: "Weaponized yarn",
    label: "Bolas",
    name: "bolas",
    prices: [
      {
        name: "wood",
        val: 50,
      },
      {
        name: "minerals",
        val: 250,
      },
      {
        name: "science",
        val: 1000,
      },
    ],
  },
  cadSystems: {
    description: "All scientific buildings will improve effectiveness of blueprint crafting",
    effects: {
      cadBlueprintCraftRatio: 0.01,
    },
    label: "CAD System",
    name: "cadSystems",
    prices: [
      {
        name: "titanium",
        val: 750,
      },
      {
        name: "science",
        val: 125000,
      },
    ],
  },
  caravanserai: {
    description: "Your tradeposts have a very minor effect on race standing",
    effects: {},
    flavor: "Now hiring: cuter kittens",
    label: "Caravanserai",
    name: "caravanserai",
    prices: [
      {
        name: "gold",
        val: 250,
      },
      {
        name: "science",
        val: 25000,
      },
      {
        name: "ivory",
        val: 10000,
      },
    ],
    upgrades: {
      buildings: ["tradepost"],
    },
  },
  carbonSequestration: {
    description:
      "Use carbon sequestration to make factories be less polluting. Adds the ability to spend twice as much energy to make factories capture pollution from the atmosphere instead of creating pollution.",
    effects: {},
    label: "Carbon Sequestration",
    name: "carbonSequestration",
    prices: [
      {
        name: "titanium",
        val: 1250,
      },
      {
        name: "science",
        val: 75000,
      },
      {
        name: "gear",
        val: 125,
      },
      {
        name: "steel",
        val: 4000,
      },
      {
        name: "alloy",
        val: 1000,
      },
    ],
    upgrades: {
      buildings: ["factory"],
    },
  },
  cargoShips: {
    description: "Every ship will give a 1% bonus to Harbor capacity",
    effects: {
      harborRatio: 0.01,
    },
    flavor: "It's like a tuna can, but bigger",
    label: "Expanded Cargo",
    name: "cargoShips",
    prices: [
      {
        name: "science",
        val: 55000,
      },
      {
        name: "blueprint",
        val: 15,
      },
    ],
    upgrades: {
      buildings: ["harbor"],
    },
  },
  celestialMechanics: {
    description: "Celestial events and meteors will generate additional science",
    effects: {},
    label: "Celestial Mechanics",
    name: "celestialMechanics",
    prices: [
      {
        name: "science",
        val: 250,
      },
    ],
  },
  chronoEngineers: {
    description: "Improves Engineer's effectiveness and make them work during time skip",
    effects: {
      queueCap: 3,
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 2,
      t4CraftRatio: 2,
      t5CraftRatio: 2,
    },
    label: "Chronoengineers",
    name: "chronoEngineers",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "timeCrystal",
        val: 5,
      },
      {
        name: "eludium",
        val: 100,
      },
    ],
  },
  chronoforge: {
    description: "An alien technology related to time manipulation.",
    label: "Chronoforge",
    name: "chronoforge",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "timeCrystal",
        val: 10,
      },
      {
        name: "relic",
        val: 5,
      },
    ],
  },
  coalFurnace: {
    description: "Smelters produce coal while burning wood",
    effects: {},
    flavor: "So warm... so sleepy...",
    label: "Coal Furnace",
    name: "coalFurnace",
    prices: [
      {
        name: "minerals",
        val: 5000,
      },
      {
        name: "iron",
        val: 2000,
      },
      {
        name: "science",
        val: 5000,
      },
      {
        name: "beam",
        val: 35,
      },
    ],
    upgrades: {
      buildings: ["smelter"],
    },
  },
  coldFusion: {
    description: "Increase Reactors energy output by 25%",
    effects: {
      reactorEnergyRatio: 0.25,
    },
    label: "Cold Fusion",
    name: "coldFusion",
    prices: [
      {
        name: "science",
        val: 200000,
      },
      {
        name: "eludium",
        val: 25,
      },
    ],
    upgrades: {
      buildings: ["reactor"],
    },
  },
  combustionEngine: {
    description: "Reduces coal consumption of Steamworks by 20%",
    effects: {
      coalRatioGlobalReduction: 0.2,
    },
    flavor: "A better mousetrap",
    label: "High Pressure Engine",
    name: "combustionEngine",
    prices: [
      {
        name: "science",
        val: 20000,
      },
      {
        name: "gear",
        val: 25,
      },
      {
        name: "blueprint",
        val: 5,
      },
    ],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  compositeBow: {
    description:
      "An improved version of a bow which provides a permanent +50% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.5,
    },
    label: "Composite Bow",
    name: "compositeBow",
    prices: [
      {
        name: "wood",
        val: 200,
      },
      {
        name: "iron",
        val: 100,
      },
      {
        name: "science",
        val: 500,
      },
    ],
  },
  concreteBarns: {
    description: "Storage facilities store 75% more resources",
    effects: {
      barnRatio: 0.75,
    },
    label: "Concrete Barns",
    name: "concreteBarns",
    prices: [
      {
        name: "titanium",
        val: 2000,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "concrate",
        val: 45,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  concreteHuts: {
    description: "Hut price ratio reduced by 30%",
    effects: {
      hutPriceRatio: -0.3,
    },
    label: "Concrete Huts",
    name: "concreteHuts",
    prices: [
      {
        name: "titanium",
        val: 3000,
      },
      {
        name: "science",
        val: 125000,
      },
      {
        name: "concrate",
        val: 45,
      },
    ],
  },
  concreteWarehouses: {
    description: "Storage facilities store 35% more resources",
    effects: {
      warehouseRatio: 0.35,
    },
    label: "Concrete Warehouses",
    name: "concreteWarehouses",
    prices: [
      {
        name: "titanium",
        val: 1250,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "concrate",
        val: 35,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  crossbow: {
    description:
      "An improved version of a bow which provides a permanent +25% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.25,
    },
    label: "Crossbow",
    name: "crossbow",
    prices: [
      {
        name: "iron",
        val: 1500,
      },
      {
        name: "science",
        val: 12000,
      },
    ],
  },
  cryocomputing: {
    description: "Data Center energy consumption reduced by 50%",
    effects: {},
    label: "Cryocomputing",
    name: "cryocomputing",
    prices: [
      {
        name: "science",
        val: 125000,
      },
      {
        name: "eludium",
        val: 15,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  darkEnergy: {
    description: "Energy Rifts are 2.5 times as effective at storing resources.",
    effects: {
      acceleratorRatio: 2.5,
    },
    label: "Dark Energy",
    name: "darkEnergy",
    prices: [
      {
        name: "science",
        val: 350000,
      },
      {
        name: "timeCrystal",
        val: 3,
      },
      {
        name: "eludium",
        val: 75,
      },
    ],
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  deepMining: {
    description: "Mines will also produce coal",
    effects: {},
    flavor: "Yummy Canaries!",
    label: "Deep Mining",
    name: "deepMining",
    prices: [
      {
        name: "iron",
        val: 1200,
      },
      {
        name: "science",
        val: 5000,
      },
      {
        name: "beam",
        val: 50,
      },
    ],
    upgrades: {
      buildings: ["mine"],
    },
  },
  distorsion: {
    description: "Improve Chronocontrol effectiveness.",
    effects: {
      temporalParadoxDayBonus: 2,
    },
    label: "Distortion",
    name: "distorsion",
    prices: [
      {
        name: "antimatter",
        val: 2000,
      },
      {
        name: "science",
        val: 300000,
      },
      {
        name: "timeCrystal",
        val: 25,
      },
      {
        name: "void",
        val: 1000,
      },
    ],
    upgrades: {
      voidSpace: ["chronocontrol"],
    },
  },
  electrolyticSmelting: {
    description: "Smelters are twice as effective",
    effects: {
      smelterRatio: 0.95,
    },
    label: "Electrolytic Smelting",
    name: "electrolyticSmelting",
    prices: [
      {
        name: "titanium",
        val: 2000,
      },
      {
        name: "science",
        val: 100000,
      },
    ],
    upgrades: {
      buildings: ["smelter"],
    },
  },
  eludiumCracker: {
    description: "Hissmeowra's output is twice as effective.",
    effects: {
      crackerRatio: 1,
    },
    label: "Planet Busters",
    name: "eludiumCracker",
    prices: [
      {
        name: "science",
        val: 275000,
      },
      {
        name: "eludium",
        val: 250,
      },
    ],
    upgrades: {
      spaceBuilding: ["planetCracker"],
    },
  },
  eludiumHuts: {
    description: "Hut price ratio reduced by 10%",
    effects: {
      hutPriceRatio: -0.1,
    },
    label: "Eludium Huts",
    name: "eludiumHuts",
    prices: [
      {
        name: "science",
        val: 275000,
      },
      {
        name: "eludium",
        val: 125,
      },
    ],
  },
  eludiumReflectors: {
    description:
      "Improved telescope reflectors. Every Observatory will give an additional 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
    label: "Eludium Reflectors",
    name: "eludiumReflectors",
    prices: [
      {
        name: "science",
        val: 250000,
      },
      {
        name: "eludium",
        val: 15,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  energyRifts: {
    description: "Accelerators will now create rifts to a pocket dimension",
    effects: {},
    label: "Energy Rifts",
    name: "energyRifts",
    prices: [
      {
        name: "titanium",
        val: 7500,
      },
      {
        name: "uranium",
        val: 250,
      },
      {
        name: "science",
        val: 200000,
      },
    ],
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  enrichedThorium: {
    description: "Reactors will now consume 25% less thorium",
    effects: {
      reactorThoriumPerTick: 0.0125,
    },
    label: "Enriched Thorium",
    name: "enrichedThorium",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "thorium",
        val: 12500,
      },
    ],
    upgrades: {
      buildings: ["reactor"],
    },
  },
  enrichedUranium: {
    description: "Reduce uranium consumption of reactors by 25%",
    effects: {
      uraniumRatio: 0.25,
    },
    label: "Enriched Uranium",
    name: "enrichedUranium",
    prices: [
      {
        name: "titanium",
        val: 7500,
      },
      {
        name: "uranium",
        val: 150,
      },
      {
        name: "science",
        val: 175000,
      },
    ],
    upgrades: {
      buildings: ["reactor"],
    },
  },
  factoryAutomation: {
    description:
      "Once per year Steamworks will refine small quantities of craftable resources when they are at the limit",
    effects: {},
    flavor: "Includes autofeeders",
    label: "Workshop Automation",
    name: "factoryAutomation",
    prices: [
      {
        name: "science",
        val: 10000,
      },
      {
        name: "gear",
        val: 25,
      },
    ],
  },
  factoryLogistics: {
    description: "Factories will provide a bigger bonus to craft effectiveness",
    effects: {},
    label: "Factory Logistics",
    name: "factoryLogistics",
    prices: [
      {
        name: "titanium",
        val: 2000,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 250,
      },
    ],
    upgrades: {
      buildings: ["factory"],
    },
  },
  factoryOptimization: {
    description: "Improves Engineer's effectiveness",
    effects: {
      queueCap: 1,
      t1CraftRatio: 10,
      t2CraftRatio: 2,
    },
    label: "Factory Optimization",
    name: "factoryOptimization",
    prices: [
      {
        name: "titanium",
        val: 1250,
      },
      {
        name: "science",
        val: 75000,
      },
      {
        name: "gear",
        val: 125,
      },
    ],
  },
  factoryProcessing: {
    description: "Every factory will increase oil refinement to kerosene effectiveness by 5%.",
    effects: {
      factoryRefineRatio: 0.05,
    },
    label: "Factory Processing",
    name: "factoryProcessing",
    prices: [
      {
        name: "titanium",
        val: 7500,
      },
      {
        name: "science",
        val: 195000,
      },
      {
        name: "concrate",
        val: 125,
      },
    ],
  },
  factoryRobotics: {
    description: "Improves Engineer's effectiveness",
    effects: {
      queueCap: 2,
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 2,
    },
    label: "Factory Robotics",
    name: "factoryRobotics",
    prices: [
      {
        name: "titanium",
        val: 2500,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 250,
      },
    ],
  },
  fluidizedReactors: {
    description: "Calciners are twice as effective",
    effects: {
      calcinerRatio: 1,
    },
    label: "Fluidized Reactors",
    name: "fluidizedReactors",
    prices: [
      {
        name: "science",
        val: 175000,
      },
      {
        name: "alloy",
        val: 200,
      },
    ],
    upgrades: {
      buildings: ["calciner"],
    },
  },
  fluxCondensator: {
    description: "Chronosphere will now affect craftable resources.",
    effects: {},
    label: "Flux Condensator",
    name: "fluxCondensator",
    prices: [
      {
        name: "unobtainium",
        val: 5000,
      },
      {
        name: "timeCrystal",
        val: 5,
      },
      {
        name: "alloy",
        val: 250,
      },
    ],
  },
  fuelInjectors: {
    description: "Reduces coal consumption of Steamworks by 20%",
    effects: {
      coalRatioGlobalReduction: 0.2,
    },
    label: "Fuel Injectors",
    name: "fuelInjectors",
    prices: [
      {
        name: "oil",
        val: 20000,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 250,
      },
    ],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  geodesy: {
    description: "Geologists are more effective and can find gold.",
    effects: {},
    flavor: "Gold sniffing cats",
    label: "Geodesy",
    name: "geodesy",
    prices: [
      {
        name: "titanium",
        val: 250,
      },
      {
        name: "science",
        val: 90000,
      },
      {
        name: "starchart",
        val: 500,
      },
    ],
    upgrades: {
      jobs: ["geologist"],
    },
  },
  gmo: {
    description: "Genetically modified catnip that will improve Bio Lab oil yield by 60%",
    effects: {
      biofuelRatio: 0.6,
    },
    label: "GM Catnip",
    name: "gmo",
    prices: [
      {
        name: "catnip",
        val: 1000000,
      },
      {
        name: "titanium",
        val: 1500,
      },
      {
        name: "science",
        val: 175000,
      },
    ],
    upgrades: {
      buildings: ["biolab"],
    },
  },
  goldOre: {
    description: "Small percentage of ore will be smelted into gold",
    effects: {},
    flavor: "Shiny!",
    label: "Gold Ore",
    name: "goldOre",
    prices: [
      {
        name: "minerals",
        val: 800,
      },
      {
        name: "iron",
        val: 100,
      },
      {
        name: "science",
        val: 1000,
      },
    ],
    upgrades: {
      buildings: ["smelter"],
    },
  },
  hubbleTelescope: {
    description: "Improves starchart production by 30%",
    effects: {
      starchartGlobalRatio: 0.3,
    },
    label: "Hubble Space Telescope",
    name: "hubbleTelescope",
    prices: [
      {
        name: "oil",
        val: 50000,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "alloy",
        val: 1250,
      },
    ],
    unlocks: {
      upgrades: ["satnav"],
    },
  },
  huntingArmor: {
    description: "Hunters are 3 times as effective",
    effects: {
      hunterRatio: 2,
    },
    flavor: "At least they are wearing something...",
    label: "Hunting Armour",
    name: "huntingArmor",
    prices: [
      {
        name: "iron",
        val: 750,
      },
      {
        name: "science",
        val: 2000,
      },
    ],
  },
  hydroPlantTurbines: {
    description: "Unobtainium-based turbines. Hydro Plants are 15% more effective.",
    effects: {
      hydroPlantRatio: 0.15,
    },
    label: "Hydro Plant Turbines",
    name: "hydroPlantTurbines",
    prices: [
      {
        name: "unobtainium",
        val: 125,
      },
      {
        name: "science",
        val: 250000,
      },
    ],
    upgrades: {
      buildings: ["aqueduct"],
    },
  },
  internet: {
    description: "Kittens learn skills with each other",
    effects: {},
    label: "Telecommunication",
    name: "internet",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "uranium",
        val: 50,
      },
      {
        name: "science",
        val: 150000,
      },
    ],
  },
  invisibleBlackHand: {
    description:
      "The Invisible Black Hand (not related to the Invisible Pink Unicorn) is leading the blackcoin market: usually smoothly, but it can punch the market in the face if angry",
    label: "Invisible Black Hand",
    name: "invisibleBlackHand",
    prices: [
      {
        name: "temporalFlux",
        val: 4096,
      },
      {
        name: "timeCrystal",
        val: 128,
      },
      {
        name: "void",
        val: 32,
      },
      {
        name: "blackcoin",
        val: 64,
      },
    ],
    unlocks: {},
  },
  ironAxes: {
    description: "Woodcutters are 50% more effective",
    effects: {
      woodJobRatio: 0.5,
    },
    label: "Iron Axe",
    name: "ironAxes",
    prices: [
      {
        name: "iron",
        val: 50,
      },
      {
        name: "science",
        val: 200,
      },
    ],
  },
  ironHoes: {
    description: "Your farmers are 30% more effective",
    effects: {
      catnipJobRatio: 0.3,
    },
    label: "Iron Hoes",
    name: "ironHoes",
    prices: [
      {
        name: "iron",
        val: 25,
      },
      {
        name: "science",
        val: 200,
      },
    ],
  },
  ironwood: {
    description: "Hut price ratio reduced by 50%",
    effects: {
      hutPriceRatio: -0.5,
    },
    label: "Ironwood Huts",
    name: "ironwood",
    prices: [
      {
        name: "wood",
        val: 15000,
      },
      {
        name: "iron",
        val: 3000,
      },
      {
        name: "science",
        val: 30000,
      },
    ],
    unlocks: {
      upgrades: ["silos"],
    },
  },
  lhc: {
    description: "Every Accelerator will provide a bonus to maximum science",
    effects: {},
    label: "LHC",
    name: "lhc",
    prices: [
      {
        name: "unobtainium",
        val: 100,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "alloy",
        val: 150,
      },
    ],
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  logistics: {
    description: "Kitten skills are 15% more effective",
    effects: {
      skillMultiplier: 0.15,
    },
    label: "Logistics",
    name: "logistics",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 100,
      },
      {
        name: "scaffold",
        val: 1000,
      },
    ],
  },
  longRangeSpaceships: {
    description: "Unlocks Space Shuttle. Need to be staffed with a crew of two kittens",
    flavor: "A New Frontier",
    label: "Long-range Spaceships",
    name: "longRangeSpaceships",
    prices: [
      {
        name: "science",
        val: 440000,
      },
      {
        name: "gear",
        val: 90000,
      },
      {
        name: "alloy",
        val: 3500,
      },
      {
        name: "tanker",
        val: 500,
      },
    ],
    unlocks: {
      spaceBuilding: ["spaceShuttle"],
    },
  },
  machineLearning: {
    description: "Every active AI Core will increase Data Center effectiveness by 10%",
    effects: {
      dataCenterAIRatio: 0.1,
    },
    label: "Machine Learning",
    name: "machineLearning",
    prices: [
      {
        name: "antimatter",
        val: 125,
      },
      {
        name: "science",
        val: 175000,
      },
      {
        name: "eludium",
        val: 25,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  mineralAxes: {
    description: "Woodcutters are 70% more effective",
    effects: {
      woodJobRatio: 0.7,
    },
    label: "Mineral Axe",
    name: "mineralAxes",
    prices: [
      {
        name: "minerals",
        val: 500,
      },
      {
        name: "science",
        val: 100,
      },
    ],
    unlocks: {
      upgrades: ["ironAxes"],
    },
  },
  mineralHoes: {
    description: "Your farmers are 50% more effective",
    effects: {
      catnipJobRatio: 0.5,
    },
    label: "Mineral Hoes",
    name: "mineralHoes",
    prices: [
      {
        name: "minerals",
        val: 275,
      },
      {
        name: "science",
        val: 100,
      },
    ],
    unlocks: {
      upgrades: ["ironHoes"],
    },
  },
  miningDrill: {
    description: "Geologists are more effective",
    effects: {},
    label: "Mining Drill",
    name: "miningDrill",
    prices: [
      {
        name: "titanium",
        val: 1750,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "steel",
        val: 750,
      },
    ],
    upgrades: {
      jobs: ["geologist"],
    },
  },
  mWReactor: {
    description:
      "A new eludium-based reactor for Lunar Outposts. Unobtainium production is 75% more effective.",
    effects: {
      lunarOutpostRatio: 0.75,
    },
    label: "Microwarp Reactors",
    name: "mWReactor",
    prices: [
      {
        name: "science",
        val: 150000,
      },
      {
        name: "eludium",
        val: 50,
      },
    ],
  },
  nanosuits: {
    description: "Maximum catpower!",
    effects: {
      hunterRatio: 0.5,
    },
    label: "Nanosuits",
    name: "nanosuits",
    prices: [
      {
        name: "science",
        val: 185000,
      },
      {
        name: "alloy",
        val: 250,
      },
    ],
  },
  neuralNetworks: {
    description: "Doubles Engineer effectiveness. Kittens learn from the noosphere.",
    effects: {},
    label: "Neural Networks",
    name: "neuralNetworks",
    prices: [
      {
        name: "titanium",
        val: 7500,
      },
      {
        name: "science",
        val: 200000,
      },
    ],
    unlocks: {},
    upgrades: {
      buildings: ["factory"],
    },
  },
  nuclearPlants: {
    description: "Steel Plants are additionally boosted by 2% per Reactor",
    effects: {
      calcinerSteelReactorBonus: 0.02,
    },
    label: "Nuclear Plants",
    name: "nuclearPlants",
    prices: [
      {
        name: "uranium",
        val: 10000,
      },
      {
        name: "science",
        val: 250000,
      },
    ],
  },
  nuclearSmelters: {
    description: "Smelters can now produce titanium",
    effects: {},
    label: "Nuclear Smelters",
    name: "nuclearSmelters",
    prices: [
      {
        name: "uranium",
        val: 250,
      },
      {
        name: "science",
        val: 165000,
      },
    ],
    upgrades: {
      buildings: ["smelter"],
    },
  },
  offsetPress: {
    description: "Printing press is 4 times as effective",
    effects: {},
    flavor: "Paper goes in, cat pictures come out.",
    label: "Offset Press",
    name: "offsetPress",
    prices: [
      {
        name: "oil",
        val: 15000,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 250,
      },
    ],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  oilDistillation: {
    description: "Oil output is improved by 75%.",
    effects: {
      oilWellRatio: 0.75,
    },
    label: "Oil Distillation",
    name: "oilDistillation",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "science",
        val: 175000,
      },
    ],
    upgrades: {
      buildings: ["oilWell"],
    },
  },
  oilRefinery: {
    description: "Improves effectiveness of oil wells by 35%",
    effects: {
      oilWellRatio: 0.35,
    },
    label: "Oil Refinery",
    name: "oilRefinery",
    prices: [
      {
        name: "titanium",
        val: 1250,
      },
      {
        name: "science",
        val: 125000,
      },
      {
        name: "gear",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["oilWell"],
    },
  },
  orbitalGeodesy: {
    description: "Quarries will now provide a small amount of uranium",
    effects: {},
    label: "Orbital Geodesy",
    name: "orbitalGeodesy",
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
        name: "alloy",
        val: 1000,
      },
    ],
    upgrades: {
      buildings: ["quarry"],
    },
  },
  oxidation: {
    description:
      "Calciners are twice as effective at producing iron and 4 times at producing titanium",
    effects: {
      calcinerRatio: 0.95,
    },
    label: "Oxidation",
    name: "oxidation",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "steel",
        val: 5000,
      },
    ],
    upgrades: {
      buildings: ["calciner"],
    },
  },
  photolithography: {
    description: "Printing press is 4 times as effective",
    effects: {},
    label: "Photolithography",
    name: "photolithography",
    prices: [
      {
        name: "oil",
        val: 50000,
      },
      {
        name: "uranium",
        val: 250,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "alloy",
        val: 1250,
      },
    ],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  photovoltaic: {
    description: "Solar Farms are 50% more effective",
    effects: {
      solarFarmRatio: 0.5,
    },
    label: "Photovoltaic Cells",
    name: "photovoltaic",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "science",
        val: 75000,
      },
    ],
    upgrades: {
      buildings: ["pasture"],
    },
  },
  pneumaticPress: {
    description: "Workshop automation will also convert iron to plates",
    effects: {},
    label: "Pneumatic Press",
    name: "pneumaticPress",
    prices: [
      {
        name: "science",
        val: 20000,
      },
      {
        name: "gear",
        val: 30,
      },
      {
        name: "blueprint",
        val: 5,
      },
    ],
  },
  printingPress: {
    description: "Steamworks automatically print manuscripts",
    effects: {},
    label: "Printing Press",
    name: "printingPress",
    prices: [
      {
        name: "science",
        val: 7500,
      },
      {
        name: "gear",
        val: 45,
      },
    ],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  pumpjack: {
    description: "Improves effectiveness of Oil Wells by 45%. Every Oil Well will consume 1Wt/t.",
    effects: {
      oilWellRatio: 0.45,
    },
    label: "Pumpjack",
    name: "pumpjack",
    prices: [
      {
        name: "titanium",
        val: 250,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "gear",
        val: 125,
      },
    ],
    upgrades: {
      buildings: ["oilWell"],
    },
  },
  pyrolysis: {
    description: "Coal output is boosted by 20%",
    effects: {
      coalSuperRatio: 0.2,
    },
    label: "Pyrolysis",
    name: "pyrolysis",
    prices: [
      {
        name: "science",
        val: 35000,
      },
      {
        name: "compedium",
        val: 5,
      },
    ],
  },
  qdot: {
    description: "Solar Panels are slightly more effective all year",
    effects: {
      solarFarmSeasonRatio: 1,
    },
    label: "Quantum Dot Cells",
    name: "qdot",
    prices: [
      {
        name: "science",
        val: 175000,
      },
      {
        name: "eludium",
        val: 200,
      },
      {
        name: "thorium",
        val: 1000,
      },
    ],
    upgrades: {
      buildings: ["pasture"],
    },
  },
  railgun: {
    description: "Deadly electromagnetic weapon. +25% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.25,
    },
    flavor: "Mice beware",
    label: "Railgun",
    name: "railgun",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "science",
        val: 150000,
      },
      {
        name: "blueprint",
        val: 25,
      },
    ],
  },
  reactorVessel: {
    description: "Every reactor improves ship potential by 5%",
    effects: {
      shipLimit: 0.05,
    },
    label: "Reactor Vessel",
    name: "reactorVessel",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "uranium",
        val: 125,
      },
      {
        name: "science",
        val: 135000,
      },
    ],
    upgrades: {
      buildings: ["harbor"],
    },
  },
  refrigeration: {
    description: "Expands catnip limit by 75%",
    effects: {
      catnipMaxRatio: 0.75,
    },
    label: "Refrigeration",
    name: "refrigeration",
    prices: [
      {
        name: "titanium",
        val: 2500,
      },
      {
        name: "science",
        val: 125000,
      },
      {
        name: "blueprint",
        val: 15,
      },
    ],
  },
  register: {
    description: "Leader manage jobs depending on experience.",
    effects: {},
    label: "Register",
    name: "register",
    prices: [
      {
        name: "gold",
        val: 10,
      },
      {
        name: "science",
        val: 500,
      },
    ],
  },
  reinforcedBarns: {
    description: "80% more storage space for wood and iron",
    effects: {
      barnRatio: 0.8,
    },
    label: "Reinforced Barns",
    name: "reinforcedBarns",
    prices: [
      {
        name: "iron",
        val: 100,
      },
      {
        name: "science",
        val: 800,
      },
      {
        name: "beam",
        val: 25,
      },
      {
        name: "slab",
        val: 10,
      },
    ],
    unlocks: {
      upgrades: ["titaniumBarns"],
    },
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  reinforcedSaw: {
    description: "Improve Lumber Mill efficiency by 20%",
    effects: {
      lumberMillRatio: 0.2,
    },
    label: "Reinforced Saw",
    name: "reinforcedSaw",
    prices: [
      {
        name: "iron",
        val: 1000,
      },
      {
        name: "science",
        val: 2500,
      },
    ],
    upgrades: {
      buildings: ["lumberMill"],
    },
  },
  reinforcedWarehouses: {
    description: "Storage facilities store 25% more resources",
    effects: {
      warehouseRatio: 0.25,
    },
    label: "Reinforced Warehouses",
    name: "reinforcedWarehouses",
    prices: [
      {
        name: "science",
        val: 15000,
      },
      {
        name: "plate",
        val: 50,
      },
      {
        name: "steel",
        val: 50,
      },
      {
        name: "scaffold",
        val: 25,
      },
    ],
    unlocks: {
      upgrades: ["ironwood"],
    },
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  relicStation: {
    description:
      "Upgrade Space Beacons with Relic research stations. Every Relic Station will reverse engineer relics yelding 0.01 relic per day",
    effects: {
      beaconRelicsPerDay: 0.01,
    },
    label: "Relic Station",
    name: "relicStation",
    prices: [
      {
        name: "antimatter",
        val: 5000,
      },
      {
        name: "eludium",
        val: 100,
      },
    ],
    upgrades: {
      spaceBuilding: ["spaceBeacon"],
    },
  },
  rotaryKiln: {
    description:
      "Calciners are 75% more effective at producing iron and 3 times at producing titanium",
    effects: {
      calcinerRatio: 0.75,
    },
    label: "Rotary Kiln",
    name: "rotaryKiln",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "science",
        val: 145000,
      },
      {
        name: "gear",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["calciner"],
    },
  },
  satelliteRadio: {
    description: "Every Satellite will boost the effect of Broadcast Towers by 0.5%",
    effects: {
      broadcastTowerRatio: 0.005,
    },
    label: "Satellite Radio",
    name: "satelliteRadio",
    prices: [
      {
        name: "science",
        val: 225000,
      },
      {
        name: "alloy",
        val: 5000,
      },
    ],
  },
  satnav: {
    description: "Every satellite reduce starchart requirement of ships by 1.25%",
    effects: {
      satnavRatio: 0.0125,
    },
    label: "Satellite Navigation",
    name: "satnav",
    prices: [
      {
        name: "science",
        val: 200000,
      },
      {
        name: "alloy",
        val: 750,
      },
    ],
  },
  seti: {
    description:
      "A large array of electronic telescopes. Makes astronomical events automatic and silent",
    label: "SETI",
    name: "seti",
    prices: [
      {
        name: "titanium",
        val: 250,
      },
      {
        name: "science",
        val: 125000,
      },
    ],
  },
  silos: {
    description: "Warehouses can now store catnip",
    effects: {},
    flavor: "With carpeting and climbing holds of course",
    label: "Silos",
    name: "silos",
    prices: [
      {
        name: "science",
        val: 50000,
      },
      {
        name: "steel",
        val: 125,
      },
      {
        name: "blueprint",
        val: 5,
      },
    ],
    unlocks: {
      upgrades: ["titaniumWarehouses"],
    },
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  solarSatellites: {
    description: "Satellites will now generate energy instead of consuming it",
    label: "Solar Satellites",
    name: "solarSatellites",
    prices: [
      {
        name: "science",
        val: 225000,
      },
      {
        name: "alloy",
        val: 750,
      },
    ],
    upgrades: {
      spaceBuilding: ["sattelite"],
    },
  },
  spaceEngineers: {
    description: "Improves Engineer's effectiveness",
    effects: {
      queueCap: 2,
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 2,
      t4CraftRatio: 2,
    },
    label: "Space Engineers",
    name: "spaceEngineers",
    prices: [
      {
        name: "science",
        val: 225000,
      },
      {
        name: "alloy",
        val: 500,
      },
    ],
  },
  spaceManufacturing: {
    description: "Factories provide bonus to space production as 75% of factory craft ratio",
    effects: {},
    label: "Space Manufacturing",
    name: "spaceManufacturing",
    prices: [
      {
        name: "titanium",
        val: 125000,
      },
      {
        name: "science",
        val: 250000,
      },
    ],
    upgrades: {
      buildings: ["factory"],
    },
  },
  spiceNavigation: {
    description: "Unlocks Navigation Relay. Enable you to staff kittens to explore space as a crew",
    flavor: "A curious melange",
    label: "Spice Navigation",
    name: "spiceNavigation",
    prices: [
      {
        name: "science",
        val: 350000,
      },
      {
        name: "starchart",
        val: 500000,
      },
    ],
    unlocks: {
      spaceBuilding: ["navigationRelay"],
    },
  },
  starlink: {
    description: "Every Data Center will provide an additional 1% bonus to Bio Labs",
    effects: {
      uplinkLabRatio: 0.01,
    },
    label: "Starlink",
    name: "starlink",
    prices: [
      {
        name: "oil",
        val: 25000,
      },
      {
        name: "science",
        val: 175000,
      },
      {
        name: "alloy",
        val: 5000,
      },
    ],
    upgrades: {
      buildings: ["library", "biolab"],
    },
  },
  stasisChambers: {
    description: "Energy Rifts are twice as effective",
    effects: {
      acceleratorRatio: 0.95,
    },
    label: "Stasis Chambers",
    name: "stasisChambers",
    prices: [
      {
        name: "uranium",
        val: 2000,
      },
      {
        name: "science",
        val: 235000,
      },
      {
        name: "timeCrystal",
        val: 1,
      },
      {
        name: "alloy",
        val: 200,
      },
    ],
    unlocks: {
      upgrades: ["voidEnergy"],
    },
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  steelArmor: {
    description: "Hunters are a bit more effective",
    effects: {
      hunterRatio: 0.5,
    },
    label: "Steel Armour",
    name: "steelArmor",
    prices: [
      {
        name: "science",
        val: 10000,
      },
      {
        name: "steel",
        val: 50,
      },
    ],
  },
  steelAxe: {
    description: "Very sharp and durable axes. Woodcutters are 50% more effective",
    effects: {
      woodJobRatio: 0.5,
    },
    label: "Steel Axe",
    name: "steelAxe",
    prices: [
      {
        name: "science",
        val: 20000,
      },
      {
        name: "steel",
        val: 75,
      },
    ],
  },
  steelPlants: {
    description: "10% of Calciner iron output will be converted to steel",
    effects: {
      calcinerSteelRatio: 0.1,
    },
    label: "Steel Plants",
    name: "steelPlants",
    prices: [
      {
        name: "titanium",
        val: 3500,
      },
      {
        name: "science",
        val: 140000,
      },
      {
        name: "gear",
        val: 750,
      },
    ],
    unlocks: {
      upgrades: ["automatedPlants"],
    },
  },
  steelSaw: {
    description: "Improve Lumber Mill efficiency by 20%",
    effects: {
      lumberMillRatio: 0.2,
    },
    label: "Steel Saw",
    name: "steelSaw",
    prices: [
      {
        name: "science",
        val: 52000,
      },
      {
        name: "steel",
        val: 750,
      },
    ],
    unlocks: {
      upgrades: ["titaniumSaw"],
    },
    upgrades: {
      buildings: ["lumberMill"],
    },
  },
  stoneBarns: {
    description: "75% more storage space for wood and iron",
    effects: {
      barnRatio: 0.75,
    },
    label: "Expanded Barns",
    name: "stoneBarns",
    prices: [
      {
        name: "wood",
        val: 1000,
      },
      {
        name: "minerals",
        val: 750,
      },
      {
        name: "iron",
        val: 50,
      },
      {
        name: "science",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  storageBunkers: {
    description: "Storage facilities store 20% more resources",
    effects: {
      warehouseRatio: 0.2,
    },
    label: "Storage Bunkers",
    name: "storageBunkers",
    prices: [
      {
        name: "unobtainium",
        val: 500,
      },
      {
        name: "science",
        val: 25000,
      },
      {
        name: "concrate",
        val: 1250,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  strenghtenBuild: {
    description: "Repair Barn and Warehouse cracks with concrete.",
    effects: {
      barnRatio: 0.05,
      warehouseRatio: 0.05,
    },
    label: "Concrete Pillars",
    name: "strenghtenBuild",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "concrate",
        val: 50,
      },
    ],
    unlocks: {
      upgrades: ["concreteWarehouses", "concreteBarns", "concreteHuts"],
    },
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  tachyonAccelerators: {
    description: "Energy Rifts are 5 times as effective",
    effects: {
      acceleratorRatio: 5,
    },
    label: "Tachyon Accelerators",
    name: "tachyonAccelerators",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "timeCrystal",
        val: 10,
      },
      {
        name: "eludium",
        val: 125,
      },
    ],
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  tachyonModerator: {
    description:
      "Unlocks more advanced tools to control the Chronoforge, such as pausing in between timeskips.",
    flavor: "It's also capable of automatically synchronizing cardinal grammeters.",
    label: "Tachyon Moderator",
    name: "tachyonModerator",
    prices: [
      {
        name: "science",
        val: 16000,
      },
      {
        name: "gear",
        val: 500,
      },
      {
        name: "titanium",
        val: 250,
      },
    ],
    unlocks: {
      chronoforge: ["controlledDelay"],
    },
  },
  thinFilm: {
    description: "Solar Panels are slightly more effective in winter",
    effects: {
      solarFarmSeasonRatio: 1,
    },
    label: "Thin Film Cells",
    name: "thinFilm",
    prices: [
      {
        name: "uranium",
        val: 1000,
      },
      {
        name: "unobtainium",
        val: 200,
      },
      {
        name: "science",
        val: 125000,
      },
    ],
    upgrades: {
      buildings: ["pasture"],
    },
  },
  thoriumEngine: {
    description: "A new rocket engine to go faster in space.",
    effects: {
      routeSpeed: 50,
    },
    label: "Thorium Drive",
    name: "thoriumEngine",
    prices: [
      {
        name: "science",
        val: 400000,
      },
      {
        name: "gear",
        val: 40000,
      },
      {
        name: "alloy",
        val: 2000,
      },
      {
        name: "ship",
        val: 10000,
      },
      {
        name: "thorium",
        val: 100000,
      },
    ],
  },
  thoriumReactors: {
    description: "Increase Reactors energy output by 25% by the addition of thorium",
    effects: {
      reactorEnergyRatio: 0.25,
      reactorThoriumPerTick: -0.05,
    },
    label: "Thorium Reactors",
    name: "thoriumReactors",
    prices: [
      {
        name: "science",
        val: 400000,
      },
      {
        name: "thorium",
        val: 10000,
      },
    ],
    unlocks: {
      upgrades: ["enrichedThorium"],
    },
    upgrades: {
      buildings: ["reactor"],
    },
  },
  titaniumAxe: {
    description: "Indestructible axes. Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
    label: "Titanium Axe",
    name: "titaniumAxe",
    prices: [
      {
        name: "titanium",
        val: 10,
      },
      {
        name: "science",
        val: 38000,
      },
    ],
  },
  titaniumBarns: {
    description: "Storage facilities store twice as many resources",
    effects: {
      barnRatio: 1,
    },
    label: "Titanium Barns",
    name: "titaniumBarns",
    prices: [
      {
        name: "titanium",
        val: 25,
      },
      {
        name: "science",
        val: 60000,
      },
      {
        name: "steel",
        val: 200,
      },
      {
        name: "scaffold",
        val: 250,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
  },
  titaniumMirrors: {
    description:
      "Improved telescope reflectors. Every Observatory will give 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
    flavor: "Did that light spot just move?",
    label: "Titanium Reflectors",
    name: "titaniumMirrors",
    prices: [
      {
        name: "titanium",
        val: 15,
      },
      {
        name: "science",
        val: 20000,
      },
      {
        name: "starchart",
        val: 20,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  titaniumSaw: {
    description: "Improve Lumber Mill efficiency by 15%",
    effects: {
      lumberMillRatio: 0.15,
    },
    label: "Titanium Saw",
    name: "titaniumSaw",
    prices: [
      {
        name: "titanium",
        val: 500,
      },
      {
        name: "science",
        val: 70000,
      },
    ],
    unlocks: {
      upgrades: ["alloySaw"],
    },
    upgrades: {
      buildings: ["lumberMill"],
    },
  },
  titaniumWarehouses: {
    description: "Storage facilities store 50% more resources",
    effects: {
      warehouseRatio: 0.5,
    },
    label: "Titanium Warehouses",
    name: "titaniumWarehouses",
    prices: [
      {
        name: "titanium",
        val: 50,
      },
      {
        name: "science",
        val: 70000,
      },
      {
        name: "steel",
        val: 500,
      },
      {
        name: "scaffold",
        val: 500,
      },
    ],
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
  },
  turnSmoothly: {
    description: "Chronospheres will now generate temporal flux.",
    effects: {
      temporalFluxProductionChronosphere: 1,
    },
    label: "Chronosurge",
    name: "turnSmoothly",
    prices: [
      {
        name: "unobtainium",
        val: 100000,
      },
      {
        name: "temporalFlux",
        val: 6500,
      },
      {
        name: "timeCrystal",
        val: 25,
      },
      {
        name: "void",
        val: 750,
      },
    ],
    upgrades: {
      buildings: ["chronosphere"],
    },
  },
  unicornSelection: {
    description: "Improves Unicorn Pasture effectiveness by 25%",
    effects: {
      unicornsGlobalRatio: 0.25,
      unicornsMaxRatio: 0,
    },
    label: "Unicorn Selection",
    name: "unicornSelection",
    prices: [
      {
        name: "titanium",
        val: 1500,
      },
      {
        name: "science",
        val: 175000,
      },
    ],
  },
  unobtainiumAxe: {
    description: "Those axes are literally unobtainable! Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
    label: "Unobtainium Axe",
    name: "unobtainiumAxe",
    prices: [
      {
        name: "unobtainium",
        val: 75,
      },
      {
        name: "science",
        val: 125000,
      },
    ],
  },
  unobtainiumDrill: {
    description: "Geologists are even more effective",
    effects: {},
    label: "Unobtainium Drill",
    name: "unobtainiumDrill",
    prices: [
      {
        name: "unobtainium",
        val: 250,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "alloy",
        val: 1250,
      },
    ],
    upgrades: {
      jobs: ["geologist"],
    },
  },
  unobtainiumHuts: {
    description: "Hut price ratio reduced by 25%",
    effects: {
      hutPriceRatio: -0.25,
    },
    label: "Unobtainium Huts",
    name: "unobtainiumHuts",
    prices: [
      {
        name: "titanium",
        val: 15000,
      },
      {
        name: "unobtainium",
        val: 350,
      },
      {
        name: "science",
        val: 200000,
      },
    ],
  },
  unobtainiumReflectors: {
    description:
      "Improved telescope reflectors. Every Observatory will give an additional 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
    label: "Unobtainium Reflectors",
    name: "unobtainiumReflectors",
    prices: [
      {
        name: "unobtainium",
        val: 75,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "starchart",
        val: 750,
      },
    ],
    upgrades: {
      buildings: ["library"],
    },
  },
  unobtainiumSaw: {
    description: "Improve Lumber Mill efficiency by 25%",
    effects: {
      lumberMillRatio: 0.25,
    },
    label: "Unobtainium Saw",
    name: "unobtainiumSaw",
    prices: [
      {
        name: "unobtainium",
        val: 125,
      },
      {
        name: "science",
        val: 145000,
      },
    ],
    upgrades: {
      buildings: ["lumberMill"],
    },
  },
  uplink: {
    description: "Data Centers and Bio Labs will provide bonus to each other",
    effects: {
      uplinkDCRatio: 0.01,
      uplinkLabRatio: 0.01,
    },
    label: "Uplink",
    name: "uplink",
    prices: [
      {
        name: "science",
        val: 75000,
      },
      {
        name: "alloy",
        val: 1750,
      },
    ],
    upgrades: {
      buildings: ["library", "biolab"],
    },
  },
  voidAspiration: {
    description: "Unlocks Void Hoover and Void Rifts.",
    effects: {},
    label: "Void Aspiration",
    name: "voidAspiration",
    prices: [
      {
        name: "antimatter",
        val: 2000,
      },
      {
        name: "timeCrystal",
        val: 15,
      },
    ],
    unlocks: {
      voidSpace: ["voidHoover", "voidRift"],
    },
  },
  voidEnergy: {
    description: "Energy Rifts are even more effective at storing resources.",
    effects: {
      acceleratorRatio: 0.75,
    },
    label: "Void Energy",
    name: "voidEnergy",
    prices: [
      {
        name: "uranium",
        val: 2500,
      },
      {
        name: "science",
        val: 275000,
      },
      {
        name: "timeCrystal",
        val: 2,
      },
      {
        name: "alloy",
        val: 250,
      },
    ],
    unlocks: {
      upgrades: ["darkEnergy"],
    },
    upgrades: {
      buildings: ["accelerator"],
    },
  },
  voidReactors: {
    description: "Your Research Vessels are ~116% more effective",
    effects: {
      spaceScienceRatio: 4,
    },
    label: "Void Reactors",
    name: "voidReactors",
    prices: [
      {
        name: "antimatter",
        val: 2500,
      },
      {
        name: "void",
        val: 250,
      },
    ],
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
  },
};
