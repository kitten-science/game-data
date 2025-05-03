export default {
  adjustmentBureau: {
    defaultUnlocked: true,
    description: "Unlocks additional game challenges.",
    label: "Adjustment Bureau",
    name: "adjustmentBureau",
    prices: [
      {
        name: "paragon",
        val: 5,
      },
    ],
    researched: false,
    unlocked: true,
    unlocks: {
      perks: ["ascoh"],
      tabs: ["challenges"],
    },
  },
  anachronomancy: {
    description: "Time crystals and chronophysics will be saved across resets.",
    label: "Anachronomancy",
    name: "anachronomancy",
    prices: [
      {
        name: "paragon",
        val: 125,
      },
    ],
    researched: false,
    unlocked: false,
  },
  ascoh: {
    defaultUnlocked: false,
    description: "A Secret Council Of Hats",
    label: "ASCOH",
    name: "ascoh",
    prices: [
      {
        name: "paragon",
        val: 5,
      },
    ],
    researched: false,
    unlocked: false,
  },
  astromancy: {
    description: "Star events chance and Observatory effectiveness are doubled",
    label: "Astromancy",
    name: "astromancy",
    prices: [
      {
        name: "paragon",
        val: 50,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {},
  },
  binah: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Binah",
    name: "binah",
    prices: [
      {
        name: "paragon",
        val: 15000,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["chokhmah"],
    },
  },
  blackCodex: {
    description: "Unlocks unicorn graveyards.",
    label: "Black Codex",
    name: "blackCodex",
    prices: [
      {
        name: "paragon",
        val: 25,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      zigguratUpgrades: ["unicornGraveyard"],
    },
  },
  carnivals: {
    defaultUnlocked: true,
    description: "Festivals can now stack in duration.",
    label: "Carnivals",
    name: "carnivals",
    prices: [
      {
        name: "paragon",
        val: 25,
      },
    ],
    researched: false,
    unlocked: true,
    unlocks: {
      perks: ["numerology"],
    },
  },
  chesed: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Chesed",
    name: "chesed",
    prices: [
      {
        name: "paragon",
        val: 7500,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["binah"],
    },
  },
  chokhmah: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Chokhmah",
    name: "chokhmah",
    prices: [
      {
        name: "paragon",
        val: 30000,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["keter"],
    },
  },
  chronomancy: {
    defaultUnlocked: true,
    description: "Meteor and star events will happen faster.",
    label: "Chronomancy",
    name: "chronomancy",
    prices: [
      {
        name: "paragon",
        val: 25,
      },
    ],
    researched: false,
    unlocked: true,
    unlocks: {
      perks: ["astromancy", "anachronomancy", "unicornmancy"],
    },
  },
  codexAgrum: {
    description: "Improves blueprint craft ratio by 25%.",
    effects: {
      blueprintCraftRatio: 0.25,
      blueprintGlobalCraftRatio: 0.05,
      compediumGlobalCraftRatio: 0.05,
      manuscriptGlobalCraftRatio: 0.05,
    },
    label: "Codex Agrum",
    name: "codexAgrum",
    prices: [
      {
        name: "paragon",
        val: 75,
      },
    ],
    researched: false,
    unlocked: false,
  },
  codexLeviathanianus: {
    description: "Increases compendia cut-off limit by 5% per transcendence tier",
    label: "Codex Leviathanianus",
    name: "codexLeviathanianus",
    prices: [
      {
        name: "paragon",
        val: 75,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {},
  },
  codexLogos: {
    description: "Improves compendium craft ratio by 25%.",
    effects: {
      compediumCraftRatio: 0.25,
      compediumGlobalCraftRatio: 0.05,
      manuscriptGlobalCraftRatio: 0.05,
    },
    label: "Codex Logos",
    name: "codexLogos",
    prices: [
      {
        name: "paragon",
        val: 50,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["codexAgrum", "codexLeviathanianus"],
    },
  },
  codexVox: {
    description: "Improves manuscript craft ratio by 25%.",
    effects: {
      manuscriptCraftRatio: 0.25,
      manuscriptGlobalCraftRatio: 0.05,
    },
    label: "Codex Vox",
    name: "codexVox",
    prices: [
      {
        name: "paragon",
        val: 25,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["codexLogos"],
    },
  },
  diplomacy: {
    defaultUnlocked: true,
    description:
      "Races will be discovered earlier and with better standing. Unlocks more trade upgrades and policies.",
    effects: {
      standingRatio: 0.1,
    },
    label: "Diplomacy",
    name: "diplomacy",
    prices: [
      {
        name: "paragon",
        val: 5,
      },
    ],
    researched: false,
    unlocked: true,
    unlocks: {
      perks: ["zebraDiplomacy"],
    },
    upgrades: {
      policies: ["lizardRelationsEcologists"],
    },
  },
  divineProportion: {
    description: "Reduce all price ratios by 1.7%",
    effects: {
      priceRatio: -0.017777777777777778,
      queueCap: 2,
    },
    label: "Divine Proportion",
    name: "divineProportion",
    prices: [
      {
        name: "paragon",
        val: 100,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["vitruvianFeline"],
    },
  },
  engeneering: {
    defaultUnlocked: true,
    description:
      "Reduce all price ratios by 1% (The price will grow up much slower). Unlocks more price upgrades.",
    effects: {
      priceRatio: -0.01,
    },
    label: "Enlightenment",
    name: "engeneering",
    prices: [
      {
        name: "paragon",
        val: 5,
      },
    ],
    researched: false,
    unlocked: true,
    unlocks: {
      perks: ["megalomania", "goldenRatio", "codexVox"],
    },
  },
  gevurah: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Gevurah",
    name: "gevurah",
    prices: [
      {
        name: "paragon",
        val: 5000,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["chesed"],
    },
  },
  goldenRatio: {
    description: "Reduce all price ratios by ~1.618%",
    effects: {
      priceRatio: -0.016180339887498948,
      queueCap: 1,
    },
    label: "Golden Ratio",
    name: "goldenRatio",
    prices: [
      {
        name: "paragon",
        val: 50,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["divineProportion"],
    },
  },
  hod: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Hod",
    name: "hod",
    prices: [
      {
        name: "paragon",
        val: 1250,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["netzach"],
    },
  },
  keter: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Keter",
    name: "keter",
    prices: [
      {
        name: "paragon",
        val: 60000,
      },
    ],
    researched: false,
    unlocked: false,
  },
  malkuth: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Malkuth",
    name: "malkuth",
    prices: [
      {
        name: "paragon",
        val: 500,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["yesod"],
    },
  },
  megalomania: {
    description: "Unlocks additional megastructures.",
    label: "Megalomania",
    name: "megalomania",
    prices: [
      {
        name: "paragon",
        val: 10,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["blackCodex"],
      zigguratUpgrades: ["marker", "blackPyramid"],
    },
  },
  navigationDiplomacy: {
    description: "Races can be discovered once you have ships.",
    label: "Navigation Diplomacy",
    name: "navigationDiplomacy",
    prices: [
      {
        name: "paragon",
        val: 300,
      },
    ],
    researched: false,
    unlocked: false,
  },
  netzach: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Netzach",
    name: "netzach",
    prices: [
      {
        name: "paragon",
        val: 1750,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["tiferet"],
    },
  },
  numerology: {
    description: "Certain years will have special effects.",
    label: "Numerology",
    name: "numerology",
    prices: [
      {
        name: "paragon",
        val: 50,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["numeromancy", "willenfluff", "voidOrder"],
    },
  },
  numeromancy: {
    description: "Certain years will have extra effects during Festivals.",
    label: "Numeromancy",
    name: "numeromancy",
    prices: [
      {
        name: "paragon",
        val: 250,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["malkuth"],
    },
  },
  pawgan: {
    description: "Kittens will arrive an additional 150% faster.",
    effects: {
      kittenGrowthRatio: 1.5,
    },
    label: "Pawgan Rituals",
    name: "pawgan",
    prices: [
      {
        name: "paragon",
        val: 400,
      },
    ],
    researched: false,
    unlocked: false,
  },
  renaissance: {
    description: "Reduce all price ratios by 2.25%",
    effects: {
      priceRatio: -0.0225,
      queueCap: 2,
    },
    label: "Renaissance",
    name: "renaissance",
    prices: [
      {
        name: "paragon",
        val: 750,
      },
    ],
    researched: false,
    unlocked: false,
  },
  tiferet: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Tiferet",
    name: "tiferet",
    prices: [
      {
        name: "paragon",
        val: 2500,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["gevurah"],
    },
  },
  unicornmancy: {
    defaultUnlocked: true,
    description: "Unicorn rifts and ivory meteors are more frequent.",
    label: "Unicornmancy",
    name: "unicornmancy",
    prices: [
      {
        name: "paragon",
        val: 125,
      },
    ],
    researched: false,
    unlocked: true,
  },
  vitruvianFeline: {
    description: "Reduce all price ratios by 2%",
    effects: {
      priceRatio: -0.02,
    },
    label: "Vitruvian Feline",
    name: "vitruvianFeline",
    prices: [
      {
        name: "paragon",
        val: 250,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["renaissance"],
    },
  },
  voidOrder: {
    description: "Adds 10% produced faith, which is automatically converted as worship.",
    label: "Order of the Void",
    name: "voidOrder",
    prices: [
      {
        name: "paragon",
        val: 75,
      },
    ],
    researched: false,
    unlocked: false,
  },
  willenfluff: {
    description: "Kittens will arrive 75% faster.",
    effects: {
      kittenGrowthRatio: 0.75,
    },
    label: "Venus of Willenfluff",
    name: "willenfluff",
    prices: [
      {
        name: "paragon",
        val: 150,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["pawgan"],
    },
  },
  yesod: {
    description: "Improves paragon effect and scaling by 5%",
    effects: {
      paragonRatio: 0.05,
    },
    label: "Yesod",
    name: "yesod",
    prices: [
      {
        name: "paragon",
        val: 750,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["hod"],
    },
  },
  zebraCovenant: {
    description: "More zebras will stay with you.",
    label: "Zebra Covenant",
    name: "zebraCovenant",
    prices: [
      {
        name: "paragon",
        val: 75,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["navigationDiplomacy"],
    },
  },
  zebraDiplomacy: {
    description:
      "Some zebras hunters will stay in the village. (You need to unlock zebra hunters first to use this upgrade).",
    label: "Zebra Diplomacy",
    name: "zebraDiplomacy",
    prices: [
      {
        name: "paragon",
        val: 35,
      },
    ],
    researched: false,
    unlocked: false,
    unlocks: {
      perks: ["zebraCovenant"],
    },
  },
};
