export default {
  centaurusSystemMission: {
    description: "Centaurus System is a warm faraway star system.",
    label: "Centaurus System Mission",
    name: "centaurusSystemMission",
    prices: [
      {
        name: "titanium",
        val: 40000,
      },
      {
        name: "science",
        val: 800000,
      },
      {
        name: "starchart",
        val: 100000,
      },
      {
        name: "kerosene",
        val: 50000,
      },
      {
        name: "thorium",
        val: 50000,
      },
    ],
    unlocks: {
      challenges: ["energy"],
      planet: ["centaurusSystem"],
      spaceMission: ["furthestRingMission"],
    },
  },
  charonMission: {
    description:
      "Charon is small, incredibly dense and distant dwarf planet on the far edge of the Helios system. It is so hostile and barren that it is sometimes referred as 'The Gates of Death'",
    label: "Charon Mission",
    name: "charonMission",
    prices: [
      {
        name: "science",
        val: 750000,
      },
      {
        name: "starchart",
        val: 75000,
      },
      {
        name: "kerosene",
        val: 35000,
      },
      {
        name: "thorium",
        val: 35000,
      },
    ],
    unlocks: {
      planet: ["charon"],
      spaceMission: ["charonMission"],
    },
  },
  duneMission: {
    description: "Dune is a large and lifeless planet covered by sand and volcanic rock.",
    label: "Dune Mission",
    name: "duneMission",
    prices: [
      {
        name: "titanium",
        val: 7000,
      },
      {
        name: "science",
        val: 175000,
      },
      {
        name: "starchart",
        val: 1000,
      },
      {
        name: "kerosene",
        val: 75,
      },
    ],
    unlocks: {
      planet: ["dune"],
      policies: ["technocracy", "theocracy", "expansionism"],
      spaceMission: ["heliosMission"],
    },
  },
  furthestRingMission: {
    description: "The end of the universe.",
    label: "Furthest Ring",
    name: "furthestRingMission",
    prices: [
      {
        name: "science",
        val: 1250000,
      },
      {
        name: "starchart",
        val: 500000,
      },
      {
        name: "kerosene",
        val: 75000,
      },
      {
        name: "thorium",
        val: 75000,
      },
    ],
    unlocks: {
      planet: ["furthestRing"],
    },
  },
  heliosMission: {
    description: "Helios is a G2V spectral type star in the center of Cath's solar system.",
    label: "Helios Mission",
    name: "heliosMission",
    prices: [
      {
        name: "titanium",
        val: 15000,
      },
      {
        name: "science",
        val: 250000,
      },
      {
        name: "starchart",
        val: 3000,
      },
      {
        name: "kerosene",
        val: 1250,
      },
    ],
    unlocks: {
      planet: ["helios"],
      spaceMission: ["yarnMission"],
    },
  },
  kairoMission: {
    description: "Kairo is a dwarf planet in the far end of Cath's solar system.",
    label: "Kairo Mission",
    name: "kairoMission",
    prices: [
      {
        name: "titanium",
        val: 20000,
      },
      {
        name: "science",
        val: 300000,
      },
      {
        name: "starchart",
        val: 5000,
      },
      {
        name: "kerosene",
        val: 7500,
      },
    ],
    unlocks: {
      planet: ["kairo"],
      spaceMission: ["rorschachMission"],
    },
  },
  moonMission: {
    description: "Launch a rocket to Redmoon, a Cath planet satellite",
    label: "Moon Mission",
    name: "moonMission",
    prices: [
      {
        name: "titanium",
        val: 5000,
      },
      {
        name: "oil",
        val: 45000,
      },
      {
        name: "science",
        val: 125000,
      },
      {
        name: "starchart",
        val: 500,
      },
    ],
    unlocks: {
      planet: ["moon"],
      spaceMission: ["duneMission", "piscineMission"],
    },
  },
  orbitalLaunch: {
    description: "Launch a rocket into space.",
    label: "Orbital Launch",
    name: "orbitalLaunch",
    prices: [
      {
        name: "oil",
        val: 15000,
      },
      {
        name: "manpower",
        val: 5000,
      },
      {
        name: "science",
        val: 100000,
      },
      {
        name: "starchart",
        val: 250,
      },
    ],
    unlocks: {
      planet: ["cath"],
      spaceMission: ["moonMission"],
    },
  },
  piscineMission: {
    description:
      "Piscine is a gigantic aquatic planet composed of an acid body and a methane atmosphere",
    label: "Piscine Mission",
    name: "piscineMission",
    prices: [
      {
        name: "titanium",
        val: 9000,
      },
      {
        name: "science",
        val: 200000,
      },
      {
        name: "starchart",
        val: 1500,
      },
      {
        name: "kerosene",
        val: 250,
      },
    ],
    unlocks: {
      planet: ["piscine"],
      spaceMission: ["terminusMission"],
    },
  },
  rorschachMission: {
    description: "Rorschach is the biggest comet near Helios.",
    label: "Rorschach",
    name: "rorschachMission",
    prices: [
      {
        name: "titanium",
        val: 80000,
      },
      {
        name: "science",
        val: 500000,
      },
      {
        name: "starchart",
        val: 15000,
      },
      {
        name: "kerosene",
        val: 25000,
      },
    ],
    unlocks: {
      spaceMission: ["centaurusSystemMission"],
    },
  },
  terminusMission: {
    description: "Terminus is a supermassive ice giant at the far end of Cath's solar system.",
    label: "T-minus Mission",
    name: "terminusMission",
    prices: [
      {
        name: "titanium",
        val: 12000,
      },
      {
        name: "science",
        val: 225000,
      },
      {
        name: "starchart",
        val: 2500,
      },
      {
        name: "kerosene",
        val: 750,
      },
    ],
    unlocks: {
      planet: ["terminus"],
      spaceMission: ["heliosMission", "kairoMission"],
    },
  },
  umbraMission: {
    description: "Umbra is a supermassive black hole at the heart of the Helios system",
    label: "Umbra Mission",
    name: "umbraMission",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "starchart",
        val: 25000,
      },
      {
        name: "kerosene",
        val: 25000,
      },
      {
        name: "thorium",
        val: 15000,
      },
    ],
    unlocks: {
      planet: ["umbra"],
      spaceMission: ["charonMission"],
    },
  },
  yarnMission: {
    description: "Yarn is a class M planet with high moderate climate, seas and oxygen atmosphere.",
    label: "Yarn Mission",
    name: "yarnMission",
    prices: [
      {
        name: "titanium",
        val: 35000,
      },
      {
        name: "science",
        val: 350000,
      },
      {
        name: "starchart",
        val: 7500,
      },
      {
        name: "kerosene",
        val: 12000,
      },
    ],
    unlocks: {
      planet: ["yarn"],
      spaceMission: ["umbraMission"],
    },
  },
};
