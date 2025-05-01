export default {
  alloy: {
    description:
      "A durable alloy of steel and titanium. Required for advanced buildings and upgrades.",
    label: "Alloy",
    name: "alloy",
    prices: [
      {
        name: "titanium",
        val: 10,
      },
      {
        name: "steel",
        val: 75,
      },
    ],
    progressHandicap: 7,
    tier: 4,
  },
  beam: {
    description: "Simple support structure made of a wood. Required for advanced construction.",
    label: "Wooden Beam",
    name: "beam",
    prices: [
      {
        name: "wood",
        val: 175,
      },
    ],
    progressHandicap: 1,
    tier: 1,
  },
  bloodstone: {
    description: "A strange jewelry claimed to be made of time and a blood of elder gods",
    label: "Bloodstone",
    name: "bloodstone",
    prices: [
      {
        name: "timeCrystal",
        val: 5000,
      },
      {
        name: "relic",
        val: 10000,
      },
    ],
    progressHandicap: 7500,
    tier: 5,
  },
  blueprint: {
    description: "Strange piece of paper with blue lines.",
    label: "Blueprint",
    name: "blueprint",
    prices: [
      {
        name: "science",
        val: 25000,
      },
      {
        name: "compedium",
        val: 25,
      },
    ],
    progressHandicap: 10,
    tier: 3,
  },
  compedium: {
    description:
      "A sum of all modern knowledge of catkind. Every compendium will give +10 to max science. (This bonus can't be greater than max science from your buildings)",
    label: "Compendium",
    name: "compedium",
    prices: [
      {
        name: "science",
        val: 10000,
      },
      {
        name: "manuscript",
        val: 50,
      },
    ],
    progressHandicap: 5,
    tier: 3,
  },
  concrate: {
    description: "A block of reinforced concrete.",
    label: "Concrete",
    name: "concrate",
    prices: [
      {
        name: "slab",
        val: 2500,
      },
      {
        name: "steel",
        val: 25,
      },
    ],
    progressHandicap: 9,
    tier: 4,
  },
  eludium: {
    description: "Extremely rare and expensive alloy of unobtanium and titanium.",
    label: "Eludium",
    name: "eludium",
    prices: [
      {
        name: "unobtainium",
        val: 1000,
      },
      {
        name: "alloy",
        val: 2500,
      },
    ],
    progressHandicap: 300,
    tier: 5,
  },
  gear: {
    description: "An integral part of automated structures.",
    label: "Gear",
    name: "gear",
    prices: [
      {
        name: "steel",
        val: 15,
      },
    ],
    progressHandicap: 5,
    tier: 3,
  },
  kerosene: {
    description: "A rocket fuel processed from oil",
    label: "Kerosene",
    name: "kerosene",
    prices: [
      {
        name: "oil",
        val: 7500,
      },
    ],
    progressHandicap: 5,
    tier: 2,
  },
  manuscript: {
    description:
      "Written document required for technological advancement. Every manuscript will give a minor bonus to a maximum culture (this effect has a diminishing return)",
    label: "Manuscript",
    name: "manuscript",
    prices: [
      {
        name: "culture",
        val: 400,
      },
      {
        name: "parchment",
        val: 25,
      },
    ],
    progressHandicap: 2,
    tier: 2,
  },
  megalith: {
    description: "A massive block that can be used to construct enormous structures",
    label: "Megalith",
    name: "megalith",
    prices: [
      {
        name: "beam",
        val: 25,
      },
      {
        name: "slab",
        val: 50,
      },
      {
        name: "plate",
        val: 5,
      },
    ],
    progressHandicap: 5,
    tier: 3,
  },
  parchment: {
    description:
      "A material for writing on made from animal skin, required for cultural buildings.",
    label: "Parchment",
    name: "parchment",
    prices: [
      {
        name: "furs",
        val: 175,
      },
    ],
    progressHandicap: 1,
    tier: 1,
  },
  plate: {
    description: "A metal plate. Required for advanced construction.",
    label: "Metal Plate",
    name: "plate",
    prices: [
      {
        name: "iron",
        val: 125,
      },
    ],
    progressHandicap: 4,
    tier: 1,
  },
  scaffold: {
    description:
      "A large structure made of wood beams required for construction of very complex buildings and objects",
    label: "Scaffold",
    name: "scaffold",
    prices: [
      {
        name: "beam",
        val: 50,
      },
    ],
    progressHandicap: 2,
    tier: 2,
  },
  ship: {
    description:
      "Ships can be used to discover new civilisations. May improve chances of getting certain rare resources",
    label: "Trade Ship",
    name: "ship",
    prices: [
      {
        name: "starchart",
        val: 25,
      },
      {
        name: "plate",
        val: 150,
      },
      {
        name: "scaffold",
        val: 100,
      },
    ],
    progressHandicap: 20,
    tier: 3,
    upgrades: {
      buildings: ["harbor"],
    },
  },
  slab: {
    description: "A small slab composed of minerals. Required for advanced construction.",
    label: "Stone Slab",
    name: "slab",
    prices: [
      {
        name: "minerals",
        val: 250,
      },
    ],
    progressHandicap: 1,
    tier: 1,
  },
  steel: {
    description:
      "A durable metal made by smelting iron and coal. Required for construction of gears and complex machinery.",
    label: "Steel",
    name: "steel",
    prices: [
      {
        name: "coal",
        val: 100,
      },
      {
        name: "iron",
        val: 100,
      },
    ],
    progressHandicap: 4,
    tier: 2,
  },
  tanker: {
    description: "Increase maximum oil capacity by 500",
    label: "Tanker",
    name: "tanker",
    prices: [
      {
        name: "alloy",
        val: 1250,
      },
      {
        name: "ship",
        val: 200,
      },
      {
        name: "blueprint",
        val: 5,
      },
    ],
    progressHandicap: 20,
    tier: 5,
    upgrades: {
      buildings: ["harbor"],
    },
  },
  thorium: {
    description: "A highly radioactive and unstable fuel",
    label: "Thorium",
    name: "thorium",
    prices: [
      {
        name: "uranium",
        val: 250,
      },
    ],
    progressHandicap: 5,
    tier: 3,
  },
  tMythril: {
    description: "T-Mythril (tbd)",
    label: "T-Mythril",
    name: "tMythril",
    prices: [
      {
        name: "bloodstone",
        val: 5,
      },
      {
        name: "ivory",
        val: 1000,
      },
      {
        name: "titanium",
        val: 500,
      },
    ],
    progressHandicap: 10000,
    tier: 7,
  },
  wood: {
    description:
      "A sturdy block of catnip wood. Difficult to process, but great building material.",
    ignoreBonuses: true,
    label: "Refine Catnip",
    name: "wood",
    prices: [
      {
        name: "catnip",
        val: 100,
      },
    ],
    progressHandicap: 1,
    tier: 1,
  },
};
