export default {
  mineralHoes: {
    name: "mineralHoes",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
    flavor: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  barges: {
    name: "barges",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  refrigeration: {
    name: "refrigeration",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  bolas: {
    name: "bolas",
    label: "",
    description: "",
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
    flavor: "",
  },
  huntingArmor: {
    name: "huntingArmor",
    label: "",
    description: "",
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
    flavor: "",
  },
  steelArmor: {
    name: "steelArmor",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  advancedRefinement: {
    name: "advancedRefinement",
    label: "",
    description: "",
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
    flavor: "",
  },
  goldOre: {
    name: "goldOre",
    label: "",
    description: "",
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
    flavor: "",
  },
  geodesy: {
    name: "geodesy",
    label: "",
    description: "",
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
    flavor: "",
  },
  register: {
    name: "register",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  deepMining: {
    name: "deepMining",
    label: "",
    description: "",
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
    flavor: "",
  },
  pyrolysis: {
    name: "pyrolysis",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  photolithography: {
    name: "photolithography",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  advancedAutomation: {
    name: "advancedAutomation",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  fuelInjectors: {
    name: "fuelInjectors",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  unobtainiumReflectors: {
    name: "unobtainiumReflectors",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    flavor: "",
  },
  longRangeSpaceships: {
    name: "longRangeSpaceships",
    label: "",
    description: "",
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
    flavor: "",
  },
  oilRefinery: {
    name: "oilRefinery",
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
    label: "",
    description: "",
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
