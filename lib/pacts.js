export default {
  fractured: {
    description: "You have broken the deal... now you will pay",
    effects: {
      pactsAvailable: 0,
      pyramidFaithRatio: -0.5,
      pyramidGlobalProductionRatio: -0.5,
      pyramidGlobalResourceRatio: -0.5,
    },
    label: "Fractured",
    limitBuild: 1,
    name: "fractured",
    prices: [
      {
        name: "catnip",
        val: 1,
      },
    ],
    special: true,
    unlocked: false,
  },
  pactOfCleansing: {
    description: "Cleanse the mortal plane of trash! Increase global resource limits.",
    effects: {
      necrocornPerDay: 0,
      pactDeficitRecoveryRatio: 0.003,
      pactGlobalResourceRatio: 0.0005,
      pactsAvailable: -1,
    },
    label: "Pact of Cleansing",
    name: "pactOfCleansing",
    priceRatio: 1,
    prices: [
      {
        name: "relic",
        val: 100,
      },
    ],
    unlocked: false,
    unlocks: {},
  },
  pactOfDestruction: {
    description: "Utterly destroy parts of reality in order to gain resources.",
    effects: {
      necrocornPerDay: 0,
      pactDeficitRecoveryRatio: -0.0001,
      pactGlobalProductionRatio: 0.0005,
      pactsAvailable: -1,
    },
    label: "Pact of Destruction",
    name: "pactOfDestruction",
    priceRatio: 1,
    prices: [
      {
        name: "relic",
        val: 100,
      },
    ],
    unlocked: false,
    unlocks: {},
  },
  pactOfExtermination: {
    description: "Exterminate evil! Increase faith production",
    effects: {
      necrocornPerDay: 0,
      pactFaithRatio: 0.001,
      pactsAvailable: -1,
    },
    label: "Pact of Extermination",
    name: "pactOfExtermination",
    priceRatio: 1.02,
    prices: [
      {
        name: "relic",
        val: 100,
      },
    ],
    unlocked: false,
  },
  pactOfPurity: {
    description:
      "Purify the mortal plane, gaining insight into secrets of the universe and clearing reality from strains of darkness.",
    effects: {
      necrocornPerDay: 0,
      pactBlackLibraryBoost: 0.0005,
      pactDeficitRecoveryRatio: 0.005,
      pactSpaceCompendiumRatio: 0.001,
      pactsAvailable: -1,
    },
    label: "Pact of Purity",
    name: "pactOfPurity",
    priceRatio: 1,
    prices: [
      {
        name: "relic",
        val: 100,
      },
    ],
    unlocked: false,
  },
  payDebt: {
    description: "Get rid of Necrocorn Deficit by giving up enough necrocorns",
    effects: {
      pactsAvailable: 0,
    },
    label: "Pay the debt",
    limitBuild: 1,
    name: "payDebt",
    notAddDeficit: true,
    priceRatio: 1,
    prices: [
      {
        name: "necrocorn",
        val: 0,
      },
    ],
    special: true,
    unlocked: false,
    upgrades: {
      pacts: ["payDebt"],
    },
  },
};
