export default {
  mineralHoes: {
    name: "mineralHoes",
    label: "Mineral Hoes",
    description: "Your farmers are 50% more effective",
    effects: {
      catnipJobRatio: 0.5,
    },
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
  ironHoes: {
    name: "ironHoes",
    label: "Iron Hoes",
    description: "Your farmers are 30% more effective",
    effects: {
      catnipJobRatio: 0.3,
    },
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
  mineralAxes: {
    name: "mineralAxes",
    label: "Mineral Axe",
    description: "Woodcutters are 70% more effective",
    effects: {
      woodJobRatio: 0.7,
    },
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
  ironAxes: {
    name: "ironAxes",
    label: "Iron Axe",
    description: "Woodcutters are 50% more effective",
    effects: {
      woodJobRatio: 0.5,
    },
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
  steelAxe: {
    name: "steelAxe",
    label: "Steel Axe",
    description: "Very sharp and durable axes. Woodcutters are 50% more effective",
    effects: {
      woodJobRatio: 0.5,
    },
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
  reinforcedSaw: {
    name: "reinforcedSaw",
    label: "Reinforced Saw",
    description: "Improve Lumber Mill efficiency by 20%",
    effects: {
      lumberMillRatio: 0.2,
    },
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
  steelSaw: {
    name: "steelSaw",
    label: "Steel Saw",
    description: "Improve Lumber Mill efficiency by 20%",
    effects: {
      lumberMillRatio: 0.2,
    },
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
    upgrades: {
      buildings: ["lumberMill"],
    },
    unlocks: {
      upgrades: ["titaniumSaw"],
    },
  },
  titaniumSaw: {
    name: "titaniumSaw",
    label: "Titanium Saw",
    description: "Improve Lumber Mill efficiency by 15%",
    effects: {
      lumberMillRatio: 0.15,
    },
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
    upgrades: {
      buildings: ["lumberMill"],
    },
    unlocks: {
      upgrades: ["alloySaw"],
    },
  },
  alloySaw: {
    name: "alloySaw",
    label: "Alloy Saw",
    description: "Improve Lumber Mill efficiency by 15%",
    effects: {
      lumberMillRatio: 0.15,
    },
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
  titaniumAxe: {
    name: "titaniumAxe",
    label: "Titanium Axe",
    description: "Indestructible axes. Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
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
  alloyAxe: {
    name: "alloyAxe",
    label: "Alloy Axe",
    description: "The more you use them, the sharper they are! Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
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
  unobtainiumAxe: {
    name: "unobtainiumAxe",
    label: "Unobtainium Axe",
    description: "Those axes are literally unobtainable! Woodcutters are 50% more effective.",
    effects: {
      woodJobRatio: 0.5,
    },
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
  unobtainiumSaw: {
    name: "unobtainiumSaw",
    label: "Unobtainium Saw",
    description: "Improve Lumber Mill efficiency by 25%",
    effects: {
      lumberMillRatio: 0.25,
    },
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
  stoneBarns: {
    name: "stoneBarns",
    label: "Expanded Barns",
    description: "75% more storage space for wood and iron",
    effects: {
      barnRatio: 0.75,
    },
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
  reinforcedBarns: {
    name: "reinforcedBarns",
    label: "Reinforced Barns",
    description: "80% more storage space for wood and iron",
    effects: {
      barnRatio: 0.8,
    },
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
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
    unlocks: {
      upgrades: ["titaniumBarns"],
    },
  },
  reinforcedWarehouses: {
    name: "reinforcedWarehouses",
    label: "Reinforced Warehouses",
    description: "Storage facilities store 25% more resources",
    effects: {
      warehouseRatio: 0.25,
    },
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
    upgrades: {
      buildings: ["barn", "warehouse", "harbor", "mint"],
    },
    unlocks: {
      upgrades: ["ironwood"],
    },
  },
  titaniumBarns: {
    name: "titaniumBarns",
    label: "Titanium Barns",
    description: "Storage facilities store twice as many resources",
    effects: {
      barnRatio: 1,
    },
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
  alloyBarns: {
    name: "alloyBarns",
    label: "Alloy Barns",
    description: "Storage facilities store twice as many resources",
    effects: {
      barnRatio: 1,
    },
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
  concreteBarns: {
    name: "concreteBarns",
    label: "Concrete Barns",
    description: "Storage facilities store 75% more resources",
    effects: {
      barnRatio: 0.75,
    },
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
  titaniumWarehouses: {
    name: "titaniumWarehouses",
    label: "Titanium Warehouses",
    description: "Storage facilities store 50% more resources",
    effects: {
      warehouseRatio: 0.5,
    },
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
  alloyWarehouses: {
    name: "alloyWarehouses",
    label: "Alloy Warehouses",
    description: "Storage facilities store 45% more resources",
    effects: {
      warehouseRatio: 0.45,
    },
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
  concreteWarehouses: {
    name: "concreteWarehouses",
    label: "Concrete Warehouses",
    description: "Storage facilities store 35% more resources",
    effects: {
      warehouseRatio: 0.35,
    },
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
  storageBunkers: {
    name: "storageBunkers",
    label: "Storage Bunkers",
    description: "Storage facilities store 20% more resources",
    effects: {
      warehouseRatio: 0.2,
    },
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
  energyRifts: {
    name: "energyRifts",
    label: "Energy Rifts",
    description: "Accelerators will now create rifts to a pocket dimension",
    effects: {},
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
  stasisChambers: {
    name: "stasisChambers",
    label: "Stasis Chambers",
    description: "Energy Rifts are twice as effective",
    effects: {
      acceleratorRatio: 0.95,
    },
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
    upgrades: {
      buildings: ["accelerator"],
    },
    unlocks: {
      upgrades: ["voidEnergy"],
    },
  },
  voidEnergy: {
    name: "voidEnergy",
    label: "Void Energy",
    description: "Energy Rifts are even more effective at storing resources.",
    effects: {
      acceleratorRatio: 0.75,
    },
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
    upgrades: {
      buildings: ["accelerator"],
    },
    unlocks: {
      upgrades: ["darkEnergy"],
    },
  },
  darkEnergy: {
    name: "darkEnergy",
    label: "Dark Energy",
    description: "Energy Rifts are 2.5 times as effective at storing resources.",
    effects: {
      acceleratorRatio: 2.5,
    },
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
  chronoforge: {
    name: "chronoforge",
    label: "Chronoforge",
    description: "An alien technology related to time manipulation.",
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
  tachyonModerator: {
    name: "tachyonModerator",
    label: "Tachyon Moderator",
    description:
      "Unlocks more advanced tools to control the Chronoforge, such as pausing in between timeskips.",
    flavor: "It's also capable of automatically synchronizing cardinal grammeters.",
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
  tachyonAccelerators: {
    name: "tachyonAccelerators",
    label: "Tachyon Accelerators",
    description: "Energy Rifts are 5 times as effective",
    effects: {
      acceleratorRatio: 5,
    },
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
  fluxCondensator: {
    name: "fluxCondensator",
    label: "Flux Condensator",
    description: "Chronosphere will now affect craftable resources.",
    effects: {},
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
  lhc: {
    name: "lhc",
    label: "LHC",
    description: "Every Accelerator will provide a bonus to maximum science",
    effects: {},
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
  photovoltaic: {
    name: "photovoltaic",
    label: "Photovoltaic Cells",
    description: "Solar Farms are 50% more effective",
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
    effects: {
      solarFarmRatio: 0.5,
    },
    upgrades: {
      buildings: ["pasture"],
    },
  },
  thinFilm: {
    name: "thinFilm",
    label: "Thin Film Cells",
    description: "Solar Panels are slightly more effective in winter",
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
    effects: {
      solarFarmSeasonRatio: 1,
    },
    upgrades: {
      buildings: ["pasture"],
    },
  },
  qdot: {
    name: "qdot",
    label: "Quantum Dot Cells",
    description: "Solar Panels are slightly more effective all year",
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
    effects: {
      solarFarmSeasonRatio: 1,
    },
    upgrades: {
      buildings: ["pasture"],
    },
  },
  solarSatellites: {
    name: "solarSatellites",
    label: "Solar Satellites",
    description: "Satellites will now generate energy instead of consuming it",
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
  cargoShips: {
    name: "cargoShips",
    label: "Expanded Cargo",
    description: "Every ship will give a 1% bonus to Harbor capacity",
    effects: {
      harborRatio: 0.01,
    },
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
    flavor: "It's like a tuna can, but bigger",
  },
  barges: {
    name: "barges",
    label: "Barges",
    description: "Harbors store more coal",
    effects: {
      harborCoalRatio: 0.5,
    },
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
  reactorVessel: {
    name: "reactorVessel",
    label: "Reactor Vessel",
    description: "Every reactor improves ship potential by 5%",
    effects: {
      shipLimit: 0.05,
    },
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
  ironwood: {
    name: "ironwood",
    label: "Ironwood Huts",
    description: "Hut price ratio reduced by 50%",
    effects: {
      hutPriceRatio: -0.5,
    },
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
  concreteHuts: {
    name: "concreteHuts",
    label: "Concrete Huts",
    description: "Hut price ratio reduced by 30%",
    effects: {
      hutPriceRatio: -0.3,
    },
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
  unobtainiumHuts: {
    name: "unobtainiumHuts",
    label: "Unobtainium Huts",
    description: "Hut price ratio reduced by 25%",
    effects: {
      hutPriceRatio: -0.25,
    },
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
  eludiumHuts: {
    name: "eludiumHuts",
    label: "Eludium Huts",
    description: "Hut price ratio reduced by 10%",
    effects: {
      hutPriceRatio: -0.1,
    },
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
  silos: {
    name: "silos",
    label: "Silos",
    description: "Warehouses can now store catnip",
    effects: {},
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
    upgrades: {
      buildings: ["barn", "warehouse", "harbor"],
    },
    unlocks: {
      upgrades: ["titaniumWarehouses"],
    },
    flavor: "With carpeting and climbing holds of course",
  },
  refrigeration: {
    name: "refrigeration",
    label: "Refrigeration",
    description: "Expands catnip limit by 75%",
    effects: {
      catnipMaxRatio: 0.75,
    },
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
  compositeBow: {
    name: "compositeBow",
    label: "Composite Bow",
    description:
      "An improved version of a bow which provides a permanent +50% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.5,
    },
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
  crossbow: {
    name: "crossbow",
    label: "Crossbow",
    description:
      "An improved version of a bow which provides a permanent +25% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.25,
    },
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
  railgun: {
    name: "railgun",
    label: "Railgun",
    description: "Deadly electromagnetic weapon. +25% boost to catpower production",
    effects: {
      manpowerJobRatio: 0.25,
    },
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
    flavor: "Mice beware",
  },
  bolas: {
    name: "bolas",
    label: "Bolas",
    description: "Throwing weapon made of heavy stone weights. Your hunters are twice as effective",
    effects: {
      hunterRatio: 1,
    },
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
    flavor: "Weaponized yarn",
  },
  huntingArmor: {
    name: "huntingArmor",
    label: "Hunting Armour",
    description: "Hunters are 3 times as effective",
    effects: {
      hunterRatio: 2,
    },
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
    flavor: "At least they are wearing something...",
  },
  steelArmor: {
    name: "steelArmor",
    label: "Steel Armour",
    description: "Hunters are a bit more effective",
    effects: {
      hunterRatio: 0.5,
    },
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
  alloyArmor: {
    name: "alloyArmor",
    label: "Alloy Armour",
    description: "Hunters are a bit more effective",
    effects: {
      hunterRatio: 0.5,
    },
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
  nanosuits: {
    name: "nanosuits",
    label: "Nanosuits",
    description: "Maximum catpower!",
    effects: {
      hunterRatio: 0.5,
    },
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
  caravanserai: {
    name: "caravanserai",
    label: "Caravanserai",
    description: "Your tradeposts have a very minor effect on race standing",
    effects: {},
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
    flavor: "Now hiring: cuter kittens",
  },
  advancedRefinement: {
    name: "advancedRefinement",
    label: "Catnip Enrichment",
    description: "Catnip refines twice as well",
    effects: {},
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
    flavor: "It's all fun and games 'til someone gets pounced",
  },
  goldOre: {
    name: "goldOre",
    label: "Gold Ore",
    description: "Small percentage of ore will be smelted into gold",
    effects: {},
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
    flavor: "Shiny!",
  },
  geodesy: {
    name: "geodesy",
    label: "Geodesy",
    description: "Geologists are more effective and can find gold.",
    effects: {},
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
    flavor: "Gold sniffing cats",
  },
  register: {
    name: "register",
    label: "Register",
    description: "Leader manage jobs depending on experience.",
    effects: {},
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
  strenghtenBuild: {
    name: "strenghtenBuild",
    label: "Concrete Pillars",
    description: "Repair Barn and Warehouse cracks with concrete.",
    effects: {
      barnRatio: 0.05,
      warehouseRatio: 0.05,
    },
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
  miningDrill: {
    name: "miningDrill",
    label: "Mining Drill",
    description: "Geologists are more effective",
    effects: {},
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
  unobtainiumDrill: {
    name: "unobtainiumDrill",
    label: "Unobtainium Drill",
    description: "Geologists are even more effective",
    effects: {},
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
  coalFurnace: {
    name: "coalFurnace",
    label: "Coal Furnace",
    description: "Smelters produce coal while burning wood",
    effects: {},
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
    flavor: "So warm... so sleepy...",
  },
  deepMining: {
    name: "deepMining",
    label: "Deep Mining",
    description: "Mines will also produce coal",
    effects: {},
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
    flavor: "Yummy Canaries!",
  },
  pyrolysis: {
    name: "pyrolysis",
    label: "Pyrolysis",
    description: "Coal output is boosted by 20%",
    effects: {
      coalSuperRatio: 0.2,
    },
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
  electrolyticSmelting: {
    name: "electrolyticSmelting",
    label: "Electrolytic Smelting",
    description: "Smelters are twice as effective",
    effects: {
      smelterRatio: 0.95,
    },
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
  oxidation: {
    name: "oxidation",
    label: "Oxidation",
    description:
      "Calciners are twice as effective at producing iron and 4 times at producing titanium",
    effects: {
      calcinerRatio: 0.95,
    },
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
  steelPlants: {
    name: "steelPlants",
    label: "Steel Plants",
    description: "10% of Calciner iron output will be converted to steel",
    effects: {
      calcinerSteelRatio: 0.1,
    },
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
  automatedPlants: {
    name: "automatedPlants",
    label: "Automated Plants",
    description: "Steel Plants are boosted by 25% of your craft ratio",
    effects: {
      calcinerSteelCraftRatio: 0.25,
    },
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
  nuclearPlants: {
    name: "nuclearPlants",
    label: "Nuclear Plants",
    description: "Steel Plants are additionally boosted by 2% per Reactor",
    effects: {
      calcinerSteelReactorBonus: 0.02,
    },
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
  rotaryKiln: {
    name: "rotaryKiln",
    label: "Rotary Kiln",
    description:
      "Calciners are 75% more effective at producing iron and 3 times at producing titanium",
    effects: {
      calcinerRatio: 0.75,
    },
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
  fluidizedReactors: {
    name: "fluidizedReactors",
    label: "Fluidized Reactors",
    description: "Calciners are twice as effective",
    effects: {
      calcinerRatio: 1,
    },
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
  nuclearSmelters: {
    name: "nuclearSmelters",
    label: "Nuclear Smelters",
    description: "Smelters can now produce titanium",
    effects: {},
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
  orbitalGeodesy: {
    name: "orbitalGeodesy",
    label: "Orbital Geodesy",
    description: "Quarries will now provide a small amount of uranium",
    effects: {},
    upgrades: {
      buildings: ["quarry"],
    },
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
  },
  printingPress: {
    name: "printingPress",
    label: "Printing Press",
    description: "Steamworks automatically print manuscripts",
    effects: {},
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
  offsetPress: {
    name: "offsetPress",
    label: "Offset Press",
    description: "Printing press is 4 times as effective",
    effects: {},
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
    flavor: "Paper goes in, cat pictures come out.",
  },
  photolithography: {
    name: "photolithography",
    label: "Photolithography",
    description: "Printing press is 4 times as effective",
    effects: {},
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
  uplink: {
    name: "uplink",
    label: "Uplink",
    description: "Data Centers and Bio Labs will provide bonus to each other",
    effects: {
      uplinkDCRatio: 0.01,
      uplinkLabRatio: 0.01,
    },
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
  starlink: {
    name: "starlink",
    label: "Starlink",
    description: "Every Data Center will provide an additional 1% bonus to Bio Labs",
    effects: {
      uplinkLabRatio: 0.01,
    },
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
  cryocomputing: {
    name: "cryocomputing",
    label: "Cryocomputing",
    description: "Data Center energy consumption reduced by 50%",
    effects: {},
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
  machineLearning: {
    name: "machineLearning",
    label: "Machine Learning",
    description: "Every active AI Core will increase Data Center effectiveness by 10%",
    effects: {
      dataCenterAIRatio: 0.1,
    },
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
  factoryAutomation: {
    name: "factoryAutomation",
    label: "Workshop Automation",
    description:
      "Once per year Steamworks will refine small quantities of craftable resources when they are at the limit",
    effects: {},
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
    flavor: "Includes autofeeders",
  },
  advancedAutomation: {
    name: "advancedAutomation",
    label: "Advanced Automation",
    description: "Workshop Automation will be activated twice per year.",
    effects: {},
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
  pneumaticPress: {
    name: "pneumaticPress",
    label: "Pneumatic Press",
    description: "Workshop automation will also convert iron to plates",
    effects: {},
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
  combustionEngine: {
    name: "combustionEngine",
    label: "High Pressure Engine",
    description: "Reduces coal consumption of Steamworks by 20%",
    effects: {
      coalRatioGlobalReduction: 0.2,
    },
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
    flavor: "A better mousetrap",
  },
  fuelInjectors: {
    name: "fuelInjectors",
    label: "Fuel Injectors",
    description: "Reduces coal consumption of Steamworks by 20%",
    effects: {
      coalRatioGlobalReduction: 0.2,
    },
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
  factoryLogistics: {
    name: "factoryLogistics",
    label: "Factory Logistics",
    description: "Factories will provide a bigger bonus to craft effectiveness",
    effects: {},
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
  carbonSequestration: {
    name: "carbonSequestration",
    label: "Carbon Sequestration",
    description:
      "Use carbon sequestration to make factories be less polluting. Adds the ability to spend twice as much energy to make factories capture pollution from the atmosphere instead of creating pollution.",
    effects: {},
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
  factoryOptimization: {
    name: "factoryOptimization",
    label: "Factory Optimization",
    description: "Improves Engineer's effectiveness",
    effects: {
      t1CraftRatio: 10,
      t2CraftRatio: 2,
      queueCap: 1,
    },
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
  factoryRobotics: {
    name: "factoryRobotics",
    label: "Factory Robotics",
    description: "Improves Engineer's effectiveness",
    effects: {
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 2,
      queueCap: 2,
    },
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
  spaceEngineers: {
    name: "spaceEngineers",
    label: "Space Engineers",
    description: "Improves Engineer's effectiveness",
    effects: {
      t1CraftRatio: 2,
      t2CraftRatio: 2,
      t3CraftRatio: 2,
      t4CraftRatio: 2,
      queueCap: 2,
    },
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
  aiEngineers: {
    name: "aiEngineers",
    label: "AI Engineers",
    description: "A holy union of feline mind and a machine",
    effects: {
      t1CraftRatio: 10,
      t2CraftRatio: 5,
      t3CraftRatio: 5,
      t4CraftRatio: 2,
      t5CraftRatio: 2,
      queueCap: 3,
    },
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
  chronoEngineers: {
    name: "chronoEngineers",
    label: "Chronoengineers",
    description: "Improves Engineer's effectiveness and make them work during time skip",
    effects: {
      t1CraftRatio: 2,
      t2CraftRatio: 2,
      t3CraftRatio: 2,
      t4CraftRatio: 2,
      t5CraftRatio: 2,
      queueCap: 3,
    },
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
  spaceManufacturing: {
    name: "spaceManufacturing",
    label: "Space Manufacturing",
    description: "Factories provide bonus to space production as 75% of factory craft ratio",
    effects: {},
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
  celestialMechanics: {
    name: "celestialMechanics",
    label: "Celestial Mechanics",
    description: "Celestial events and meteors will generate additional science",
    effects: {},
    prices: [
      {
        name: "science",
        val: 250,
      },
    ],
  },
  astrolabe: {
    name: "astrolabe",
    label: "Astrolabe",
    description: "Improves Observatory's max science bonus by 50%",
    effects: {},
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
  titaniumMirrors: {
    name: "titaniumMirrors",
    label: "Titanium Reflectors",
    description:
      "Improved telescope reflectors. Every Observatory will give 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
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
    flavor: "Did that light spot just move?",
  },
  unobtainiumReflectors: {
    name: "unobtainiumReflectors",
    label: "Unobtainium Reflectors",
    description:
      "Improved telescope reflectors. Every Observatory will give an additional 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
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
  eludiumReflectors: {
    name: "eludiumReflectors",
    label: "Eludium Reflectors",
    description:
      "Improved telescope reflectors. Every Observatory will give an additional 2% to Library/Data Center effectiveness.",
    effects: {
      libraryRatio: 0.02,
    },
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
  hydroPlantTurbines: {
    name: "hydroPlantTurbines",
    label: "Hydro Plant Turbines",
    description: "Unobtainium-based turbines. Hydro Plants are 15% more effective.",
    effects: {
      hydroPlantRatio: 0.15,
    },
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
  amBases: {
    name: "amBases",
    label: "Antimatter Bases",
    description: "Reduce energy consumption for Moon Bases by 50%",
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
    upgrades: {
      spaceBuilding: ["moonBase"],
    },
    unlocks: {
      upgrades: ["aiBases"],
    },
  },
  aiBases: {
    name: "aiBases",
    label: "AI Bases",
    description:
      "AI-powered logistics. Every active AI Core will increase the effectiveness of Moon Bases by 10%",
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
  amFission: {
    name: "amFission",
    label: "Antimatter Fission",
    description: "Engineers are 25% more effective at production of eludium",
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
    effects: {
      eludiumAutomationBonus: 0.25,
    },
  },
  amReactors: {
    name: "amReactors",
    label: "Antimatter Reactors",
    description: "Your Research Vessels and Space Beacons are 95% more effective",
    effects: {
      spaceScienceRatio: 0.95,
    },
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
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
    unlocks: {
      upgrades: ["amReactorsMK2"],
    },
  },
  amReactorsMK2: {
    name: "amReactorsMK2",
    label: "Advanced AM Reactors",
    description: "Your Research Vessels and Space Beacons are ~77% more effective",
    effects: {
      spaceScienceRatio: 1.5,
    },
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
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
  },
  voidReactors: {
    name: "voidReactors",
    label: "Void Reactors",
    description: "Your Research Vessels are ~116% more effective",
    effects: {
      spaceScienceRatio: 4,
    },
    upgrades: {
      spaceBuilding: ["researchVessel", "spaceBeacon"],
    },
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
  },
  relicStation: {
    name: "relicStation",
    label: "Relic Station",
    description:
      "Upgrade Space Beacons with Relic research stations. Every Relic Station will reverse engineer relics yelding 0.01 relic per day",
    effects: {
      beaconRelicsPerDay: 0.01,
    },
    upgrades: {
      spaceBuilding: ["spaceBeacon"],
    },
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
  },
  amDrive: {
    name: "amDrive",
    label: "Antimatter Drive",
    description: "Antimatter-powered rocket engine",
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
    effects: {
      routeSpeed: 25,
    },
  },
  pumpjack: {
    name: "pumpjack",
    label: "Pumpjack",
    description: "Improves effectiveness of Oil Wells by 45%. Every Oil Well will consume 1Wt/t.",
    effects: {
      oilWellRatio: 0.45,
    },
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
  biofuel: {
    name: "biofuel",
    label: "Biofuel Processing",
    description: "Bio Labs will convert catnip into oil. Every Bio Lab will consume 1Wt/t.",
    effects: {},
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
  unicornSelection: {
    name: "unicornSelection",
    label: "Unicorn Selection",
    description: "Improves Unicorn Pasture effectiveness by 25%",
    effects: {
      unicornsGlobalRatio: 0.25,
      unicornsMaxRatio: 0,
    },
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
  gmo: {
    name: "gmo",
    label: "GM Catnip",
    description: "Genetically modified catnip that will improve Bio Lab oil yield by 60%",
    effects: {
      biofuelRatio: 0.6,
    },
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
  cadSystems: {
    name: "cadSystems",
    label: "CAD System",
    description: "All scientific buildings will improve effectiveness of blueprint crafting",
    effects: {
      cadBlueprintCraftRatio: 0.01,
    },
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
  seti: {
    name: "seti",
    label: "SETI",
    description:
      "A large array of electronic telescopes. Makes astronomical events automatic and silent",
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
  logistics: {
    name: "logistics",
    label: "Logistics",
    description: "Kitten skills are 15% more effective",
    effects: {
      skillMultiplier: 0.15,
    },
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
  augumentation: {
    name: "augumentation",
    label: "Augmentations",
    description: "Kitten skills are 100% more effective",
    effects: {
      skillMultiplier: 1,
    },
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
  internet: {
    name: "internet",
    label: "Telecommunication",
    description: "Kittens learn skills with each other",
    effects: {},
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
  neuralNetworks: {
    name: "neuralNetworks",
    label: "Neural Networks",
    description: "Doubles Engineer effectiveness. Kittens learn from the noosphere.",
    effects: {},
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
  assistance: {
    name: "assistance",
    label: "Robotic Assistance",
    description: "Factory robots automating routine tasks. Workers require less catnip.",
    effects: {
      catnipDemandWorkerRatioGlobal: -0.25,
    },
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
  enrichedUranium: {
    name: "enrichedUranium",
    label: "Enriched Uranium",
    description: "Reduce uranium consumption of reactors by 25%",
    effects: {
      uraniumRatio: 0.25,
    },
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
  coldFusion: {
    name: "coldFusion",
    label: "Cold Fusion",
    description: "Increase Reactors energy output by 25%",
    effects: {
      reactorEnergyRatio: 0.25,
    },
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
  thoriumReactors: {
    name: "thoriumReactors",
    label: "Thorium Reactors",
    description: "Increase Reactors energy output by 25% by the addition of thorium",
    effects: {
      reactorThoriumPerTick: -0.05,
      reactorEnergyRatio: 0.25,
    },
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
    upgrades: {
      buildings: ["reactor"],
    },
    unlocks: {
      upgrades: ["enrichedThorium"],
    },
  },
  enrichedThorium: {
    name: "enrichedThorium",
    label: "Enriched Thorium",
    description: "Reactors will now consume 25% less thorium",
    effects: {
      reactorThoriumPerTick: 0.0125,
    },
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
  hubbleTelescope: {
    name: "hubbleTelescope",
    label: "Hubble Space Telescope",
    description: "Improves starchart production by 30%",
    effects: {
      starchartGlobalRatio: 0.3,
    },
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
  satnav: {
    name: "satnav",
    label: "Satellite Navigation",
    description: "Every satellite reduce starchart requirement of ships by 1.25%",
    effects: {
      satnavRatio: 0.0125,
    },
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
  satelliteRadio: {
    name: "satelliteRadio",
    label: "Satellite Radio",
    description: "Every Satellite will boost the effect of Broadcast Towers by 0.5%",
    effects: {
      broadcastTowerRatio: 0.005,
    },
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
  astrophysicists: {
    name: "astrophysicists",
    label: "Astrophysicists",
    description: "Each scholar will now generate starcharts.",
    effects: {},
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
  mWReactor: {
    name: "mWReactor",
    label: "Microwarp Reactors",
    description:
      "A new eludium-based reactor for Lunar Outposts. Unobtainium production is 75% more effective.",
    effects: {
      lunarOutpostRatio: 0.75,
    },
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
  eludiumCracker: {
    name: "eludiumCracker",
    label: "Planet Busters",
    description: "Hissmeowra's output is twice as effective.",
    effects: {
      crackerRatio: 1,
    },
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
  thoriumEngine: {
    name: "thoriumEngine",
    label: "Thorium Drive",
    description: "A new rocket engine to go faster in space.",
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
    effects: {
      routeSpeed: 50,
    },
  },
  spiceNavigation: {
    name: "spiceNavigation",
    label: "Spice Navigation",
    description: "Unlocks Navigation Relay. Enable you to staff kittens to explore space as a crew",
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
    flavor: "A curious melange",
  },
  longRangeSpaceships: {
    name: "longRangeSpaceships",
    label: "Long-range Spaceships",
    description: "Unlocks Space Shuttle. Need to be staffed with a crew of two kittens",
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
    flavor: "A New Frontier",
  },
  oilRefinery: {
    name: "oilRefinery",
    label: "Oil Refinery",
    description: "Improves effectiveness of oil wells by 35%",
    effects: {
      oilWellRatio: 0.35,
    },
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
  oilDistillation: {
    name: "oilDistillation",
    label: "Oil Distillation",
    description: "Oil output is improved by 75%.",
    effects: {
      oilWellRatio: 0.75,
    },
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
  factoryProcessing: {
    name: "factoryProcessing",
    label: "Factory Processing",
    description: "Every factory will increase oil refinement to kerosene effectiveness by 5%.",
    effects: {
      factoryRefineRatio: 0.05,
    },
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
  voidAspiration: {
    name: "voidAspiration",
    label: "Void Aspiration",
    description: "Unlocks Void Hoover and Void Rifts.",
    effects: {},
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
  distorsion: {
    name: "distorsion",
    label: "Distortion",
    description: "Improve Chronocontrol effectiveness.",
    effects: {
      temporalParadoxDayBonus: 2,
    },
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
  turnSmoothly: {
    name: "turnSmoothly",
    label: "Chronosurge",
    description: "Chronospheres will now generate temporal flux.",
    effects: {
      temporalFluxProductionChronosphere: 1,
    },
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
  invisibleBlackHand: {
    name: "invisibleBlackHand",
    label: "Invisible Black Hand",
    description:
      "The Invisible Black Hand (not related to the Invisible Pink Unicorn) is leading the blackcoin market: usually smoothly, but it can punch the market in the face if angry",
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
};
