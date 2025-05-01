export default {
  blackPyramid: {
    description: "A dark relic of unspeakable horrors.",
    effects: {
      blackLibraryBonus: 0,
      deficitRecoveryRatio: 0,
      pyramidFaithRatio: 0,
      pyramidGlobalProductionRatio: 0,
      pyramidGlobalResourceRatio: 0,
      pyramidSpaceCompendiumRatio: 0,
    },
    effectsPreDeficit: {},
    flavor: "What have we done?!",
    jammed: false,
    label: "Black Pyramid",
    name: "blackPyramid",
    priceRatio: 1.15,
    prices: [
      {
        name: "unobtainium",
        val: 5000,
      },
      {
        name: "spice",
        val: 150000,
      },
      {
        name: "sorrow",
        val: 5,
      },
      {
        name: "megalith",
        val: 2500,
      },
    ],
    simpleEffectNames: [
      "GlobalResourceRatio",
      "RecoveryRatio",
      "GlobalProductionRatio",
      "FaithRatio",
      "SpaceCompendiumRatio",
    ],
    unlocked: false,
    upgrades: {
      spaceBuilding: ["spaceBeacon"],
    },
  },
  ivoryCitadel: {
    defaultUnlocked: false,
    description: "Improves your unicorns generation by 25%, summons Ivory Meteors",
    effects: {
      ivoryMeteorChance: 0.0005,
      tearsMax: 0,
      unicornsMax: 0,
      unicornsRatioReligion: 0.25,
    },
    label: "Ivory Citadel",
    name: "ivoryCitadel",
    priceRatio: 1.15,
    prices: [
      {
        name: "ivory",
        val: 50000,
      },
      {
        name: "tears",
        val: 50,
      },
    ],
    unlocked: false,
    unlocks: {
      zigguratUpgrades: ["skyPalace"],
    },
  },
  ivoryTower: {
    defaultUnlocked: false,
    description: "Improves your unicorns generation by 10%, unlocks Unicorn Rifts",
    effects: {
      riftChance: 0.0005,
      tearsMax: 0,
      unicornsRatioReligion: 0.1,
    },
    label: "Ivory Tower",
    name: "ivoryTower",
    priceRatio: 1.15,
    prices: [
      {
        name: "ivory",
        val: 25000,
      },
      {
        name: "tears",
        val: 25,
      },
    ],
    unlocked: false,
    unlocks: {
      zigguratUpgrades: ["ivoryCitadel"],
    },
  },
  marker: {
    description: "A strange structure made of unknown metal and serving an unidentified purpose.",
    effects: {
      corruptionRatio: 0.000001,
    },
    flavor: "A twisted spire points the way.",
    label: "Marker",
    name: "marker",
    priceRatio: 1.15,
    prices: [
      {
        name: "unobtainium",
        val: 2500,
      },
      {
        name: "spice",
        val: 50000,
      },
      {
        name: "tears",
        val: 5000,
      },
      {
        name: "megalith",
        val: 750,
      },
    ],
    unlocked: false,
  },
  skyPalace: {
    defaultUnlocked: false,
    description:
      "Improves your unicorns generation by 50%. There was a legend of ancient and mysterious beings living in this place long ago. Every Sky Palace level improves your total gold cap by 1%",
    effects: {
      alicornChance: 0,
      alicornMax: 0,
      alicornPerTick: 0,
      goldMaxRatio: 0,
      ivoryMeteorRatio: 0,
      tearsMax: 0,
      unicornsMax: 0,
      unicornsRatioReligion: 0,
    },
    label: "Sky Palace",
    name: "skyPalace",
    priceRatio: 1.15,
    prices: [
      {
        name: "ivory",
        val: 125000,
      },
      {
        name: "tears",
        val: 500,
      },
      {
        name: "megalith",
        val: 5,
      },
    ],
    unlocked: false,
    unlocks: {
      zigguratUpgrades: ["unicornUtopia"],
    },
  },
  sunspire: {
    defaultUnlocked: false,
    description:
      "Improves your unicorns generation by 500%. Increase alicorn summon chance by significant amount. Improves TC refine ratio by 10%",
    effects: {
      alicornChance: 0,
      alicornMax: 0,
      alicornPerTick: 0,
      ivoryMeteorRatio: 0,
      tcRefineRatio: 0,
      tearsMax: 0,
      unicornsMaxRatio: 0,
      unicornsRatioReligion: 0,
    },
    label: "Sunspire",
    name: "sunspire",
    priceRatio: 1.15,
    prices: [
      {
        name: "gold",
        val: 1250,
      },
      {
        name: "ivory",
        val: 750000,
      },
      {
        name: "tears",
        val: 25000,
      },
    ],
    unlocked: false,
  },
  unicornGraveyard: {
    description: "Grave of the fireflies.",
    effects: {
      blackLibraryBonus: 0.02,
      cultureMaxRatioBonus: 0.01,
    },
    label: "Unicorn Graveyard",
    name: "unicornGraveyard",
    priceRatio: 1.15,
    prices: [
      {
        name: "necrocorn",
        val: 5,
      },
      {
        name: "megalith",
        val: 1000,
      },
    ],
    unlocked: false,
    unlocks: {
      zigguratUpgrades: ["unicornNecropolis"],
    },
    upgrades: {
      buildings: ["ziggurat"],
    },
  },
  unicornNecropolis: {
    description: "The ocean of blood at the end of the lane",
    effects: {
      corruptionBoostRatio: 0.1,
    },
    label: "Unicorn Necropolis",
    name: "unicornNecropolis",
    priceRatio: 1.15,
    prices: [
      {
        name: "alicorn",
        val: 100,
      },
      {
        name: "necrocorn",
        val: 15,
      },
      {
        name: "void",
        val: 5,
      },
      {
        name: "megalith",
        val: 2500,
      },
    ],
    unlocked: false,
  },
  unicornTomb: {
    defaultUnlocked: true,
    description: "Improves your unicorns generation by 5%",
    effects: {
      faithMax: 0,
      tearsMax: 0,
      unicornsRatioReligion: 0.05,
    },
    label: "Unicorn Tomb",
    name: "unicornTomb",
    priceRatio: 1.15,
    prices: [
      {
        name: "ivory",
        val: 500,
      },
      {
        name: "tears",
        val: 5,
      },
    ],
    unlocked: true,
    unlocks: {
      zigguratUpgrades: ["ivoryTower"],
    },
  },
  unicornUtopia: {
    defaultUnlocked: false,
    description:
      "Improves your unicorns generation by 250%. Increase alicorn summon chance. Improves TC refine ratio by 5%",
    effects: {
      alicornChance: 0,
      alicornMax: 0,
      alicornPerTick: 0,
      ivoryMeteorRatio: 0,
      tcRefineRatio: 0,
      tearsMax: 0,
      unicornsMax: 0,
      unicornsRatioReligion: 0,
    },
    label: "Unicorn Utopia",
    name: "unicornUtopia",
    priceRatio: 1.15,
    prices: [
      {
        name: "gold",
        val: 500,
      },
      {
        name: "ivory",
        val: 1000000,
      },
      {
        name: "tears",
        val: 5000,
      },
    ],
    unlocked: false,
    unlockScheme: {
      name: "unicorn",
      threshold: 1,
    },
    unlocks: {
      zigguratUpgrades: ["sunspire"],
    },
  },
};
