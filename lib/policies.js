export default {
  liberty: {
    name: "liberty",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 150,
      },
    ],
    effects: {
      maxKittens: 0,
      happinessKittenProductionRatio: 0.1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["tradition"],
    unlocks: {
      policies: ["authocracy", "republic"],
    },
  },
  tradition: {
    name: "tradition",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 150,
      },
    ],
    effects: {
      cultureFromManuscripts: 1,
      manuscriptParchmentCost: -5,
      manuscriptCultureCost: -100,
    },
    unlocked: false,
    blocked: false,
    blocks: ["liberty"],
    unlocks: {
      policies: ["authocracy", "monarchy"],
    },
  },
  monarchy: {
    name: "monarchy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    effects: {
      goldPolicyRatio: -0.1,
    },
    unlocked: false,
    upgrades: {
      buildings: ["factory"],
    },
    blocked: false,
    blocks: ["authocracy", "republic", "communism"],
    unlocks: {
      policies: ["liberalism", "fascism"],
    },
  },
  authocracy: {
    name: "authocracy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    effects: {
      rankLeaderBonusConversion: 0,
    },
    unlocked: false,
    blocked: false,
    blocks: ["monarchy", "republic", "liberalism"],
    unlocks: {
      policies: ["communism", "fascism", "socialism"],
    },
  },
  republic: {
    name: "republic",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    effects: {
      boostFromLeader: 0.01,
    },
    unlocked: false,
    blocked: false,
    blocks: ["monarchy", "authocracy", "fascism"],
    unlocks: {
      policies: ["liberalism", "communism", "socialism"],
    },
  },
  socialism: {
    name: "socialism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 7500,
      },
    ],
    unlocked: false,
    blocked: false,
    blocks: [],
    effects: {},
    unlocks: {
      policies: ["scientificCommunism"],
    },
  },
  scientificCommunism: {
    name: "scientificCommunism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 8500,
      },
    ],
    unlocked: false,
    blocked: false,
    blocks: [],
    upgrades: {
      policies: ["socialism"],
    },
  },
  liberalism: {
    name: "liberalism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    effects: {
      goldCostReduction: 0.2,
      globalRelationsBonus: 10,
    },
    unlocked: false,
    blocked: false,
    blocks: ["communism", "fascism"],
  },
  communism: {
    name: "communism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    effects: {
      factoryCostReduction: 0.3,
      coalPolicyRatio: 0.25,
      ironPolicyRatio: 0.25,
      titaniumPolicyRatio: 0.25,
    },
    unlocked: false,
    blocked: false,
    blocks: ["liberalism", "fascism"],
  },
  fascism: {
    name: "fascism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    effects: {
      logHouseCostReduction: 0.5,
    },
    unlocked: false,
    blocked: false,
    blocks: ["liberalism", "communism"],
  },
  technocracy: {
    name: "technocracy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    effects: {
      technocracyScienceCap: 0.2,
      antimatterPolicyRatio: 0.0625,
      queueCap: 2,
    },
    unlocked: false,
    blocked: false,
    blocks: ["theocracy", "expansionism"],
  },
  theocracy: {
    name: "theocracy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    effects: {
      faithPolicyRatio: 0.2,
    },
    unlocked: false,
    blocked: false,
    requiredLeaderJob: "priest",
    blocks: ["technocracy", "expansionism"],
  },
  expansionism: {
    name: "expansionism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    effects: {
      unobtainiumPolicyRatio: 0.15,
    },
    unlocked: false,
    blocked: false,
    blocks: ["technocracy", "theocracy"],
  },
  transkittenism: {
    name: "transkittenism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    effects: {
      aiCoreProductivness: 1,
      aiCoreUpgradeBonus: 0.1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["necrocracy", "radicalXenophobia"],
    upgrades: {
      buildings: ["library"],
      spaceBuilding: ["moonBase"],
    },
  },
  necrocracy: {
    name: "necrocracy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    effects: {
      blsProductionBonus: 0.001,
      leviathansEnergyModifier: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["transkittenism", "radicalXenophobia"],
  },
  radicalXenophobia: {
    name: "radicalXenophobia",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    effects: {
      mausoleumBonus: 1,
      pactsAvailable: 5,
    },
    upgrades: {
      transcendenceUpgrades: ["mausoleum"],
    },
    unlocks: {
      pacts: ["pactOfCleansing", "pactOfDestruction", "pactOfExtermination", "pactOfPurity"],
    },
    unlocked: false,
    blocked: false,
    blocks: ["transkittenism", "necrocracy"],
  },
  diplomacy: {
    name: "diplomacy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1600,
      },
    ],
    effects: {
      tradeCatpowerDiscount: 5,
    },
    unlocked: false,
    unlocks: {
      policies: ["knowledgeSharing", "culturalExchange"],
    },
    blocked: false,
    blocks: ["isolationism"],
  },
  isolationism: {
    name: "isolationism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 1600,
      },
    ],
    effects: {
      tradeGoldDiscount: 1,
    },
    unlocked: false,
    unlocks: {
      policies: ["bigStickPolicy", "cityOnAHill"],
    },
    blocked: false,
    blocks: ["diplomacy"],
  },
  zebraRelationsAppeasement: {
    name: "zebraRelationsAppeasement",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 5000,
      },
    ],
    effects: {
      goldPolicyRatio: -0.05,
      zebraRelationModifier: 15,
    },
    unlocked: false,
    blocked: false,
    blocks: ["zebraRelationsBellicosity"],
  },
  zebraRelationsBellicosity: {
    name: "zebraRelationsBellicosity",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 5000,
      },
    ],
    effects: {
      nonZebraRelationModifier: 5,
      zebraRelationModifier: -10,
    },
    unlocked: false,
    blocked: false,
    blocks: ["zebraRelationsAppeasement"],
  },
  knowledgeSharing: {
    name: "knowledgeSharing",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    effects: {
      sciencePolicyRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["culturalExchange"],
  },
  culturalExchange: {
    name: "culturalExchange",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    effects: {
      culturePolicyRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["knowledgeSharing"],
  },
  bigStickPolicy: {
    name: "bigStickPolicy",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    effects: {
      embassyCostReduction: 0.15,
    },
    unlocked: false,
    blocked: false,
    blocks: ["cityOnAHill"],
  },
  cityOnAHill: {
    name: "cityOnAHill",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    effects: {
      onAHillCultureCap: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["bigStickPolicy"],
  },
  outerSpaceTreaty: {
    name: "outerSpaceTreaty",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    effects: {
      globalRelationsBonus: 10,
    },
    unlocked: false,
    blocked: false,
    blocks: ["militarizeSpace"],
  },
  militarizeSpace: {
    name: "militarizeSpace",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    effects: {
      satelliteSynergyBonus: 0.1,
    },
    unlocked: false,
    upgrades: {
      spaceBuilding: ["sattelite"],
      buildings: ["observatory"],
    },
    blocked: false,
    blocks: ["outerSpaceTreaty"],
  },
  lizardRelationsEcologists: {
    name: "lizardRelationsEcologists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    effects: {
      cathPollutionRatio: -0.05,
      solarFarmRatio: 0,
      hydroPlantRatio: 0,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["lizardRelationsPriests", "lizardRelationsDiplomats"],
    upgrades: {
      buildings: ["magneto"],
    },
  },
  lizardRelationsPriests: {
    name: "lizardRelationsPriests",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    effects: {
      cultureFromManuscripts: -0.25,
      faithFromManuscripts: 1,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["lizardRelationsEcologists", "lizardRelationsDiplomats"],
  },
  lizardRelationsDiplomats: {
    name: "lizardRelationsDiplomats",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    effects: {
      neutralRaceEmbassyStanding: 0.001,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["lizardRelationsEcologists", "lizardRelationsPriests"],
  },
  sharkRelationsScribes: {
    name: "sharkRelationsScribes",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    effects: {
      parchmentTradeChanceIncrease: 0.25,
      manuscriptTradeChanceIncrease: 0.15,
      ironBuyRatioIncrease: 0.5,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["sharkRelationsMerchants", "sharkRelationsBotanists"],
  },
  sharkRelationsMerchants: {
    name: "sharkRelationsMerchants",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    effects: {
      tradeRatio: 0,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["sharkRelationsScribes", "sharkRelationsBotanists"],
  },
  sharkRelationsBotanists: {
    name: "sharkRelationsBotanists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    effects: {
      refinePolicyRatio: 0.25,
      biolabEnergyRatio: -0.75,
      breweryPolicyManpowerRatio: 0.01,
      woodRatio: 0,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["sharkRelationsScribes", "sharkRelationsMerchants"],
    upgrades: {
      buildings: ["biolab", "brewery"],
    },
  },
  griffinRelationsMetallurgists: {
    name: "griffinRelationsMetallurgists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    effects: {
      calcinerSteelRatioBonus: 0.15,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["griffinRelationsMachinists", "griffinRelationsScouts"],
  },
  griffinRelationsScouts: {
    name: "griffinRelationsScouts",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    effects: {
      hunterRatio: 0.5,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["griffinRelationsMachinists", "griffinRelationsMetallurgists"],
  },
  griffinRelationsMachinists: {
    name: "griffinRelationsMachinists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    effects: {
      magnetoBoostBonusPolicy: 0.005,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["griffinRelationsMetallurgists", "griffinRelationsScouts"],
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  nagaRelationsMasons: {
    name: "nagaRelationsMasons",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    effects: {
      quarrySlabCraftBonus: 0.025,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    upgrades: {
      buildings: ["quarry"],
    },
    blocks: ["nagaRelationsCultists", "nagaRelationsArchitects"],
  },
  nagaRelationsCultists: {
    name: "nagaRelationsCultists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    effects: {
      zigguratTempleEffectPolicy: 0.1,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    upgrades: {
      buildings: ["ziggurat"],
    },
    blocks: ["nagaRelationsMasons", "nagaRelationsArchitects"],
  },
  nagaRelationsArchitects: {
    name: "nagaRelationsArchitects",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    effects: {
      nagaBlueprintTradeChance: 0,
      blueprintCraftRatio: 0,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["nagaRelationsMasons", "nagaRelationsCultists"],
  },
  spiderRelationsGeologists: {
    name: "spiderRelationsGeologists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    effects: {
      mineralsPolicyRatio: 0,
      coalPolicyRatio: 0,
      goldPolicyRatio: 0,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["spiderRelationsChemists", "spiderRelationsPaleontologists"],
  },
  spiderRelationsChemists: {
    name: "spiderRelationsChemists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["spiderRelationsGeologists", "spiderRelationsPaleontologists"],
  },
  spiderRelationsPaleontologists: {
    name: "spiderRelationsPaleontologists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    effects: {
      mintIvoryRatio: 0.15,
      oilPolicyRatio: 0.1,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["spiderRelationsChemists", "spiderRelationsGeologists"],
  },
  dragonRelationsPhysicists: {
    name: "dragonRelationsPhysicists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    effects: {
      reactorEnergyRatio: 0.25,
      harborLimitRatioPolicy: 0.05,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["dragonRelationsAstrologers", "dragonRelationsDynamicists"],
    upgrades: {
      buildings: ["harbor"],
    },
  },
  dragonRelationsAstrologers: {
    name: "dragonRelationsAstrologers",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    effects: {
      starEventChance: 0.004,
      starchartPolicyRatio: 0.03,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["dragonRelationsPhysicists", "dragonRelationsDynamicists"],
  },
  dragonRelationsDynamicists: {
    name: "dragonRelationsDynamicists",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    effects: {
      tradeCatpowerDiscount: 5,
      huntCatpowerDiscount: 10,
      catpowerReductionRatio: 0.5,
    },
    unlocked: false,
    blocked: false,
    isRelation: true,
    blocks: ["dragonRelationsPhysicists", "dragonRelationsAstrologers"],
  },
  stoicism: {
    name: "stoicism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2500,
      },
    ],
    effects: {
      luxuryDemandRatio: -0.5,
      breweryConsumptionRatio: -0.25,
    },
    unlocked: false,
    blocked: false,
    blocks: ["epicurianism"],
    unlocks: {
      policies: ["rationality", "mysticism", "rationing", "frugality"],
    },
    upgrades: {
      buildings: ["brewery"],
    },
  },
  epicurianism: {
    name: "epicurianism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2500,
      },
    ],
    effects: {
      luxuryHappinessBonus: 1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["stoicism"],
    unlocks: {
      policies: ["rationality", "mysticism", "carnivale", "extravagance"],
    },
  },
  carnivale: {
    name: "carnivale",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    effects: {
      festivalArrivalRatio: 0.3,
      festivalLuxuryConsumptionRatio: 0.3,
    },
    unlocked: false,
    blocked: false,
    blocks: ["extravagance"],
  },
  extravagance: {
    name: "extravagance",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    effects: {
      luxuryDemandRatio: 2,
      consumableLuxuryHappiness: 5,
    },
    unlocked: false,
    blocked: false,
    blocks: ["carnivale"],
  },
  rationing: {
    name: "rationing",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    effects: {
      hapinnessConsumptionRatio: -0.1,
      hunterRatio: 0.1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["frugality"],
  },
  frugality: {
    name: "frugality",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    effects: {
      mintRatio: 0.1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["rationing"],
    upgrades: {
      buildings: ["mint"],
    },
  },
  rationality: {
    name: "rationality",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3000,
      },
    ],
    effects: {
      sciencePolicyRatio: 0.05,
      ironPolicyRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["mysticism"],
  },
  mysticism: {
    name: "mysticism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 3000,
      },
    ],
    effects: {
      culturePolicyRatio: 0.05,
      faithPolicyRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["rationality"],
  },
  stripMining: {
    name: "stripMining",
    label: "",
    description: "",
    prices: [
      {
        name: "science",
        val: 2000,
      },
    ],
    effects: {
      environmentUnhappiness: -2,
      mineralsPolicyRatio: 0.3,
      cathPollutionRatio: 0.05,
    },
    unlocked: false,
    unlocks: {
      policies: ["sustainability", "fullIndustrialization"],
    },
    blocked: false,
    blocks: ["clearCutting", "environmentalism"],
  },
  clearCutting: {
    name: "clearCutting",
    label: "",
    description: "",
    prices: [
      {
        name: "science",
        val: 2000,
      },
    ],
    effects: {
      environmentUnhappiness: -2,
      woodPolicyRatio: 0.3,
      cathPollutionRatio: 0.05,
    },
    unlocked: false,
    unlocks: {
      policies: ["sustainability", "fullIndustrialization"],
    },
    blocked: false,
    blocks: ["stripMining", "environmentalism"],
  },
  environmentalism: {
    name: "environmentalism",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 2000,
      },
    ],
    effects: {
      environmentHappinessBonus: 3,
      cathPollutionRatio: -0.05,
    },
    unlocked: false,
    unlocks: {
      policies: ["conservation", "openWoodlands"],
    },
    blocked: false,
    blocks: ["stripMining", "clearCutting"],
  },
  sustainability: {
    name: "sustainability",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    effects: {
      environmentHappinessBonus: 5,
      cathPollutionRatio: -0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["fullIndustrialization"],
  },
  fullIndustrialization: {
    name: "fullIndustrialization",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    upgrades: {
      buildings: ["factory"],
    },
    effects: {
      environmentFactoryCraftBonus: 0.05,
      cathPollutionRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["sustainability"],
  },
  conservation: {
    name: "conservation",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    effects: {
      environmentHappinessBonus: 5,
      cathPollutionRatio: -0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["openWoodlands"],
  },
  openWoodlands: {
    name: "openWoodlands",
    label: "",
    description: "",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    effects: {
      mineralsPolicyRatio: 0.125,
      woodPolicyRatio: 0.125,
      cathPollutionRatio: 0.05,
    },
    unlocked: false,
    blocked: false,
    blocks: ["conservation"],
  },
  cryochamberExtraction: {
    name: "cryochamberExtraction",
    label: "",
    description: "",
    prices: [
      {
        name: "manpower",
        val: 10000,
      },
    ],
    unlocked: false,
    blocked: false,
    blocks: ["terraformingInsight"],
  },
  terraformingInsight: {
    name: "terraformingInsight",
    label: "",
    description: "",
    prices: [
      {
        name: "manpower",
        val: 10000,
      },
    ],
    effects: {
      terraformingMaxKittensRatio: 0.1,
    },
    unlocked: false,
    blocked: false,
    blocks: ["cryochamberExtraction"],
  },
  siphoning: {
    name: "siphoning",
    label: "",
    description: "",
    prices: [
      {
        name: "necrocorn",
        val: 1,
      },
    ],
    unlocked: false,
    blocked: false,
    blocks: [],
  },
};
