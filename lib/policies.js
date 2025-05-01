export default {
  authocracy: {
    blocked: false,
    blocks: ["monarchy", "republic", "liberalism"],
    description:
      "Best for societies with highly promoted kittens. Makes the leader twice as good at their job. Leader increases conversion production based on uncapped housing buildings.",
    effects: {
      rankLeaderBonusConversion: 0,
    },
    label: "Autocracy",
    name: "authocracy",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["communism", "fascism", "socialism"],
    },
  },
  bigStickPolicy: {
    blocked: false,
    blocks: ["cityOnAHill"],
    description: "Speak softly, but beat up your neighbors when necessary. Embassies are cheaper.",
    effects: {
      embassyCostReduction: 0.15,
    },
    label: "Big Stick Policy",
    name: "bigStickPolicy",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    unlocked: false,
  },
  carnivale: {
    blocked: false,
    blocks: ["extravagance"],
    description:
      "A contingent of epicurean philosophers branches off into party planning. Embrace this school of thought, boosting kitten arrival speed during festivals in exchange for increasing luxury resource consumption during them.",
    effects: {
      festivalArrivalRatio: 0.3,
      festivalLuxuryConsumptionRatio: 0.3,
    },
    label: "Carnivale",
    name: "carnivale",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    unlocked: false,
  },
  cityOnAHill: {
    blocked: false,
    blocks: ["bigStickPolicy"],
    description: "Be a shining example to the world you hate. Culture cap is slightly increased.",
    effects: {
      onAHillCultureCap: 0.05,
    },
    label: "City On A Hill",
    name: "cityOnAHill",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    unlocked: false,
  },
  clearCutting: {
    blocked: false,
    blocks: ["stripMining", "environmentalism"],
    description: "Totally destroy the forest in an effort to improve your wood production.",
    effects: {
      cathPollutionRatio: 0.05,
      environmentUnhappiness: -2,
      woodPolicyRatio: 0.3,
    },
    label: "Clear Cutting",
    name: "clearCutting",
    prices: [
      {
        name: "science",
        val: 2000,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["sustainability", "fullIndustrialization"],
    },
  },
  communism: {
    blocked: false,
    blocks: ["liberalism", "fascism"],
    description:
      "Industrialization at all costs. Increases production of coal, iron, and titanium, and makes factories cheaper.",
    effects: {
      coalPolicyRatio: 0.25,
      factoryCostReduction: 0.3,
      ironPolicyRatio: 0.25,
      titaniumPolicyRatio: 0.25,
    },
    label: "Communism",
    name: "communism",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    unlocked: false,
  },
  conservation: {
    blocked: false,
    blocks: ["openWoodlands"],
    description: "Keep actively protecting the environment, increasing happiness from environment.",
    effects: {
      cathPollutionRatio: -0.05,
      environmentHappinessBonus: 5,
    },
    label: "Conservation",
    name: "conservation",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  cryochamberExtraction: {
    blocked: false,
    blocks: ["terraformingInsight"],
    description: "Extract cryochambers (?)",
    label: "Immortalism",
    name: "cryochamberExtraction",
    prices: [
      {
        name: "manpower",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  culturalExchange: {
    blocked: false,
    blocks: ["knowledgeSharing"],
    description:
      "Your poets and actors will travel to foreign lands, slightly increasing culture income.",
    effects: {
      culturePolicyRatio: 0.05,
    },
    label: "Cultural Exchange",
    name: "culturalExchange",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    unlocked: false,
  },
  diplomacy: {
    blocked: false,
    blocks: ["isolationism"],
    description:
      "Build good relationships with your neighbors, making trades cheaper in terms of catpower.",
    effects: {
      tradeCatpowerDiscount: 5,
    },
    label: "Diplomacy",
    name: "diplomacy",
    prices: [
      {
        name: "culture",
        val: 1600,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["knowledgeSharing", "culturalExchange"],
    },
  },
  dragonRelationsAstrologers: {
    blocked: false,
    blocks: ["dragonRelationsPhysicists", "dragonRelationsDynamicists"],
    description:
      "The dragons have a long standing tradition of studying celestial objects. Work together with dragon astrologers to study the stars and get a look into their unique understanding of them.<br>Each year spent in a cycle increases starchart production",
    effects: {
      starchartPolicyRatio: 0.03,
      starEventChance: 0.004,
    },
    isRelation: true,
    label: "Dragon Relations: Astrologers",
    name: "dragonRelationsAstrologers",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    unlocked: false,
  },
  dragonRelationsDynamicists: {
    blocked: false,
    blocks: ["dragonRelationsPhysicists", "dragonRelationsAstrologers"],
    description:
      "Motion is an important concept in dragon society. For that reason they have a whole branch of scientists who study specifically locomotion and its intricacies. Dragons can improve your varying forms of travel.",
    effects: {
      catpowerReductionRatio: 0.5,
      huntCatpowerDiscount: 10,
      tradeCatpowerDiscount: 5,
    },
    isRelation: true,
    label: "Dragon Relations: Dynamicists",
    name: "dragonRelationsDynamicists",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    unlocked: false,
  },
  dragonRelationsPhysicists: {
    blocked: false,
    blocks: ["dragonRelationsAstrologers", "dragonRelationsDynamicists"],
    description:
      "Dragon physicists are experts on nuclear energy. They can help by improving your reactors.",
    effects: {
      harborLimitRatioPolicy: 0.05,
      reactorEnergyRatio: 0.25,
    },
    isRelation: true,
    label: "Dragon Relations: Physicists",
    name: "dragonRelationsPhysicists",
    prices: [
      {
        name: "culture",
        val: 30000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["harbor"],
    },
  },
  environmentalism: {
    blocked: false,
    blocks: ["stripMining", "clearCutting"],
    description:
      "Preserve the natural beauty of your village, slightly improving kittens' happiness.",
    effects: {
      cathPollutionRatio: -0.05,
      environmentHappinessBonus: 3,
    },
    label: "Environmentalism",
    name: "environmentalism",
    prices: [
      {
        name: "culture",
        val: 2000,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["conservation", "openWoodlands"],
    },
  },
  epicurianism: {
    blocked: false,
    blocks: ["stoicism"],
    description:
      "Epicurean kittens believe that pleasure is the highest good. Luxury resources will provide slightly more happiness.",
    effects: {
      luxuryHappinessBonus: 1,
    },
    label: "Epicurianism",
    name: "epicurianism",
    prices: [
      {
        name: "culture",
        val: 2500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["rationality", "mysticism", "carnivale", "extravagance"],
    },
  },
  expansionism: {
    blocked: false,
    blocks: ["technocracy", "theocracy"],
    description:
      "Privatize the moon! Nothing changes on Cath, but unobtainium production will be increased.",
    effects: {
      unobtainiumPolicyRatio: 0.15,
    },
    label: "Cosmological Libertarianism",
    name: "expansionism",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    unlocked: false,
  },
  extravagance: {
    blocked: false,
    blocks: ["carnivale"],
    description:
      "A faction of epicurean philosophers holds that society ought to double down on its current philosophy. Consumable luxury resources increase happiness even more, but are consumed three times as quickly.",
    effects: {
      consumableLuxuryHappiness: 5,
      luxuryDemandRatio: 2,
    },
    label: "Extravagance",
    name: "extravagance",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    unlocked: false,
  },
  fascism: {
    blocked: false,
    blocks: ["liberalism", "communism"],
    description:
      "Lebensraum! Population penalties to happiness are eliminated, and log cabins cost half as much.",
    effects: {
      logHouseCostReduction: 0.5,
    },
    label: "Fascism",
    name: "fascism",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    unlocked: false,
  },
  frugality: {
    blocked: false,
    blocks: ["rationing"],
    description:
      "Stoic philosophers are placed in charge of the mints, making them more effective by reducing corruption.",
    effects: {
      mintRatio: 0.1,
    },
    label: "Frugality",
    name: "frugality",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["mint"],
    },
  },
  fullIndustrialization: {
    blocked: false,
    blocks: ["sustainability"],
    description:
      "Take the advice of your new captains of industry, slightly improving the crafting bonus each factory provides.",
    effects: {
      cathPollutionRatio: 0.05,
      environmentFactoryCraftBonus: 0.05,
    },
    label: "Full Industrialization",
    name: "fullIndustrialization",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["factory"],
    },
  },
  griffinRelationsMachinists: {
    blocked: false,
    blocks: ["griffinRelationsMetallurgists", "griffinRelationsScouts"],
    description:
      "Griffins understand aerodynamics well and their machinists can improve your steamworks effectiveness.",
    effects: {
      magnetoBoostBonusPolicy: 0.005,
    },
    isRelation: true,
    label: "Griffin Relations: Machinists",
    name: "griffinRelationsMachinists",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["steamworks"],
    },
  },
  griffinRelationsMetallurgists: {
    blocked: false,
    blocks: ["griffinRelationsMachinists", "griffinRelationsScouts"],
    description:
      "Griffins have a very good understanding of steelmaking and its intricate processes. Their metallurgists can help you by improving steel plants.",
    effects: {
      calcinerSteelRatioBonus: 0.15,
    },
    isRelation: true,
    label: "Griffin Relations: Metallurgists",
    name: "griffinRelationsMetallurgists",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    unlocked: false,
  },
  griffinRelationsScouts: {
    blocked: false,
    blocks: ["griffinRelationsMachinists", "griffinRelationsMetallurgists"],
    description:
      "Flight is very beneficial when looking for game. Propose collaborating with griffin scouts during hunts to improve its effectiveness.",
    effects: {
      hunterRatio: 0.5,
    },
    isRelation: true,
    label: "Griffin Relations: Scouts",
    name: "griffinRelationsScouts",
    prices: [
      {
        name: "culture",
        val: 16000,
      },
    ],
    unlocked: false,
  },
  isolationism: {
    blocked: false,
    blocks: ["diplomacy"],
    description: "Engage in protectionism of all types, making trades cheaper in terms of gold.",
    effects: {
      tradeGoldDiscount: 1,
    },
    label: "Isolationism",
    name: "isolationism",
    prices: [
      {
        name: "culture",
        val: 1600,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["bigStickPolicy", "cityOnAHill"],
    },
  },
  knowledgeSharing: {
    blocked: false,
    blocks: ["culturalExchange"],
    description:
      "Your scientists will travel to foreign lands, slightly increasing science income.",
    effects: {
      sciencePolicyRatio: 0.05,
    },
    label: "Knowledge Sharing",
    name: "knowledgeSharing",
    prices: [
      {
        name: "culture",
        val: 4000,
      },
    ],
    unlocked: false,
  },
  liberalism: {
    blocked: false,
    blocks: ["communism", "fascism"],
    description:
      "A peaceful and open society. Gains better relations with all trade partners and makes buildings require less gold.",
    effects: {
      globalRelationsBonus: 10,
      goldCostReduction: 0.2,
    },
    label: "Liberalism",
    name: "liberalism",
    prices: [
      {
        name: "culture",
        val: 15000,
      },
    ],
    unlocked: false,
  },
  liberty: {
    blocked: false,
    blocks: ["tradition"],
    description:
      "Good for societies focused on happiness. Increases the effect happiness has on kitten production. This will affect what policies are available in the future!",
    effects: {
      happinessKittenProductionRatio: 0.1,
      maxKittens: 0,
    },
    label: "Liberty",
    name: "liberty",
    prices: [
      {
        name: "culture",
        val: 150,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["authocracy", "republic"],
    },
  },
  lizardRelationsDiplomats: {
    blocked: false,
    blocks: ["lizardRelationsEcologists", "lizardRelationsPriests"],
    description:
      "Lizards are a peaceful race. If you want to befriend the races of Cath, they are more than willing to contribute.<br>Embassies built with neutral races will have a small effect on their attitude towards your people. With enough bonuses, they may become friendly.",
    effects: {
      neutralRaceEmbassyStanding: 0.001,
    },
    isRelation: true,
    label: "Lizard Relations: Diplomats",
    name: "lizardRelationsDiplomats",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    unlocked: false,
  },
  lizardRelationsEcologists: {
    blocked: false,
    blocks: ["lizardRelationsPriests", "lizardRelationsDiplomats"],
    description:
      "The lizards love nature and want to protect it. Their ecologists are experts on operating green energy buildings. Depending on how many Hydro Plants are active, some of your Magnetos will still boost resource production even if turned off.",
    effects: {
      cathPollutionRatio: -0.05,
      hydroPlantRatio: 0,
      solarFarmRatio: 0,
    },
    isRelation: true,
    label: "Lizard Relations: Ecologists",
    name: "lizardRelationsEcologists",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["magneto"],
    },
  },
  lizardRelationsPriests: {
    blocked: false,
    blocks: ["lizardRelationsEcologists", "lizardRelationsDiplomats"],
    description:
      "The lizards share the kittens' love of the sun. Their priests would be happy to help The Order of the Sun.<br>Manuscripts will grant a small bonus to faith.",
    effects: {
      cultureFromManuscripts: -0.25,
      faithFromManuscripts: 1,
    },
    isRelation: true,
    label: "Lizard Relations: Priests",
    name: "lizardRelationsPriests",
    prices: [
      {
        name: "culture",
        val: 2100,
      },
    ],
    unlocked: false,
  },
  militarizeSpace: {
    blocked: false,
    blocks: ["outerSpaceTreaty"],
    description:
      "Try to take over the skies. Your satellites science bonus to observatories is 10% more powerful.",
    effects: {
      satelliteSynergyBonus: 0.1,
    },
    label: "Militarize Space",
    name: "militarizeSpace",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["observatory"],
      spaceBuilding: ["sattelite"],
    },
  },
  monarchy: {
    blocked: false,
    blocks: ["authocracy", "republic", "communism"],
    description:
      "Best for societies benefiting from past experiences. Makes the leader's trait twice as powerful. Maintaining the royal court takes 10% of gold production.",
    effects: {
      goldPolicyRatio: -0.1,
    },
    label: "Monarchy",
    name: "monarchy",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["liberalism", "fascism"],
    },
    upgrades: {
      buildings: ["factory"],
    },
  },
  mysticism: {
    blocked: false,
    blocks: ["rationality"],
    description:
      "Accept the view that there are forces beyond the comprehension of kittens. Gain a small bonus to culture and faith production, though you might look silly for a while.",
    effects: {
      culturePolicyRatio: 0.05,
      faithPolicyRatio: 0.05,
    },
    label: "Mysticism",
    name: "mysticism",
    prices: [
      {
        name: "culture",
        val: 3000,
      },
    ],
    unlocked: false,
  },
  nagaRelationsArchitects: {
    blocked: false,
    blocks: ["nagaRelationsMasons", "nagaRelationsCultists"],
    description:
      "Naga architects know some unique building techniques kittens do not possess, come to a trade agreement with them to obtain blueprints and study them.<br><br>Building Naga embassies will increase the chance to get blueprints from nagas by 0.25%, by up to 10%. Once the maximum bonus is achieved, they will improve the blueprint crafting ratio instead",
    effects: {
      blueprintCraftRatio: 0,
      nagaBlueprintTradeChance: 0,
    },
    isRelation: true,
    label: "Naga Relations: Architects",
    name: "nagaRelationsArchitects",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    unlocked: false,
  },
  nagaRelationsCultists: {
    blocked: false,
    blocks: ["nagaRelationsMasons", "nagaRelationsArchitects"],
    description:
      "Nagas have very different religious traditions. Study naga cultist rituals and employ them during religious services.<br>Ziggurats will now be slightly affected by Order of the Sun upgrades.",
    effects: {
      zigguratTempleEffectPolicy: 0.1,
    },
    isRelation: true,
    label: "Naga Relations: Cultists",
    name: "nagaRelationsCultists",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["ziggurat"],
    },
  },
  nagaRelationsMasons: {
    blocked: false,
    blocks: ["nagaRelationsCultists", "nagaRelationsArchitects"],
    description:
      "Nagas almost exclusively use minerals as building materials, so they have a lot of experience extracting and processing it. They can show you the secrets of efficiently crafting slabs using quarries.",
    effects: {
      quarrySlabCraftBonus: 0.025,
    },
    isRelation: true,
    label: "Naga Relations: Masons",
    name: "nagaRelationsMasons",
    prices: [
      {
        name: "culture",
        val: 8000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["quarry"],
    },
  },
  necrocracy: {
    blocked: false,
    blocks: ["transkittenism", "radicalXenophobia"],
    description:
      "Your society offers itself to the elders, they will take over and bring dark times, but you will get a production bonus from BLS.",
    effects: {
      blsProductionBonus: 0.001,
      leviathansEnergyModifier: 0.05,
    },
    label: "Necrocracy",
    name: "necrocracy",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    unlocked: false,
  },
  openWoodlands: {
    blocked: false,
    blocks: ["conservation"],
    description:
      "Allow some limited development of nearby lands, increasing wood and mineral production.",
    effects: {
      cathPollutionRatio: 0.05,
      mineralsPolicyRatio: 0.125,
      woodPolicyRatio: 0.125,
    },
    label: "Open Woodlands",
    name: "openWoodlands",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  outerSpaceTreaty: {
    blocked: false,
    blocks: ["militarizeSpace"],
    description:
      "Agree that space is the domain of all of Cath's races, improving relations with all trading partners.",
    effects: {
      globalRelationsBonus: 10,
    },
    label: "Outer Space Treaty",
    name: "outerSpaceTreaty",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  radicalXenophobia: {
    blocked: false,
    blocks: ["transkittenism", "necrocracy"],
    description: "Reject both evil aliens and evil robots. Mausoleum is twice as effective.",
    effects: {
      mausoleumBonus: 1,
      pactsAvailable: 5,
    },
    label: "Radical Xenophobia",
    name: "radicalXenophobia",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    unlocked: false,
    unlocks: {
      pacts: ["pactOfCleansing", "pactOfDestruction", "pactOfExtermination", "pactOfPurity"],
    },
    upgrades: {
      transcendenceUpgrades: ["mausoleum"],
    },
  },
  rationality: {
    blocked: false,
    blocks: ["mysticism"],
    description:
      "Accept the view that the world can be fundamentally understood. Gain a small bonus to science and iron production, though you might look silly later.",
    effects: {
      ironPolicyRatio: 0.05,
      sciencePolicyRatio: 0.05,
    },
    label: "Rationality",
    name: "rationality",
    prices: [
      {
        name: "culture",
        val: 3000,
      },
    ],
    unlocked: false,
  },
  rationing: {
    blocked: false,
    blocks: ["frugality"],
    description:
      "Stoic philosophers encourage restraint and saving, making hunting more effective and reducing the effect of happiness on catnip consumption.",
    effects: {
      hapinnessConsumptionRatio: -0.1,
      hunterRatio: 0.1,
    },
    label: "Rationing",
    name: "rationing",
    prices: [
      {
        name: "culture",
        val: 3500,
      },
    ],
    unlocked: false,
  },
  republic: {
    blocked: false,
    blocks: ["monarchy", "authocracy", "fascism"],
    description:
      "Best for large societies. Highly promoted leaders will provide a small bonus to the production of all kittens.",
    effects: {
      boostFromLeader: 0.01,
    },
    label: "Republic",
    name: "republic",
    prices: [
      {
        name: "culture",
        val: 1500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["liberalism", "communism", "socialism"],
    },
  },
  scientificCommunism: {
    blocked: false,
    blocks: [],
    description: "Increases all effects of Socialism by 25%",
    label: "Scientific Communism",
    name: "scientificCommunism",
    prices: [
      {
        name: "culture",
        val: 8500,
      },
    ],
    unlocked: false,
    upgrades: {
      policies: ["socialism"],
    },
  },
  sharkRelationsBotanists: {
    blocked: false,
    blocks: ["sharkRelationsScribes", "sharkRelationsMerchants"],
    description:
      "The sharks cultivate a lot of catnip, so their botanists have a good understanding of it. Collaborate with them to study and improve catnip refinement and conversion processes.",
    effects: {
      biolabEnergyRatio: -0.75,
      breweryPolicyManpowerRatio: 0.01,
      refinePolicyRatio: 0.25,
      woodRatio: 0,
    },
    isRelation: true,
    label: "Shark Relations: Botanists",
    name: "sharkRelationsBotanists",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["biolab", "brewery"],
    },
  },
  sharkRelationsMerchants: {
    blocked: false,
    blocks: ["sharkRelationsScribes", "sharkRelationsBotanists"],
    description:
      "The sharks are experts of traveling through water, but not so much on land. Work together with their merchants to discover and share trade routes through water and land.<br>The more you trade, the more effective it becomes",
    effects: {
      tradeRatio: 0,
    },
    isRelation: true,
    label: "Shark Relations: Merchants",
    name: "sharkRelationsMerchants",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    unlocked: false,
  },
  sharkRelationsScribes: {
    blocked: false,
    blocks: ["sharkRelationsMerchants", "sharkRelationsBotanists"],
    description:
      "The shark scribes are keen on recording Cath's history and you can help each other in the form of a trade deal. If you give them more resources in trade, they are willing to share more of their recordings.",
    effects: {
      ironBuyRatioIncrease: 0.5,
      manuscriptTradeChanceIncrease: 0.15,
      parchmentTradeChanceIncrease: 0.25,
    },
    isRelation: true,
    label: "Shark Relations: Scribes",
    name: "sharkRelationsScribes",
    prices: [
      {
        name: "culture",
        val: 2200,
      },
    ],
    unlocked: false,
  },
  siphoning: {
    blocked: false,
    blocks: [],
    description:
      "Pacts slow down necrocorn corruption and consume alicorns, instead of directly consuming necrocorns. Lack of alicorns or corruption is compensated by consuming necrocorns.",
    label: "Siphoning",
    name: "siphoning",
    prices: [
      {
        name: "necrocorn",
        val: 1,
      },
    ],
    unlocked: false,
  },
  socialism: {
    blocked: false,
    blocks: [],
    description: "Has no effect",
    effects: {},
    label: "Socialism",
    name: "socialism",
    prices: [
      {
        name: "culture",
        val: 7500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["scientificCommunism"],
    },
  },
  spiderRelationsChemists: {
    blocked: false,
    blocks: ["spiderRelationsGeologists", "spiderRelationsPaleontologists"],
    description:
      "While spiders have abundant oil, they do not have the means to create kerosene yet. Your chemists can help them study chemical processes.<br><br> Spiders will now sell kerosene",
    isRelation: true,
    label: "Spider Relations: Chemists",
    name: "spiderRelationsChemists",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    unlocked: false,
  },
  spiderRelationsGeologists: {
    blocked: false,
    blocks: ["spiderRelationsChemists", "spiderRelationsPaleontologists"],
    description:
      "The spiders are willing to help you find and exploit good mineral deposits in exchange for your continued partnership.<br>Each embassy you have with spiders will improve your mining industry by 0.2%, up to a maximum of 15%",
    effects: {
      coalPolicyRatio: 0,
      goldPolicyRatio: 0,
      mineralsPolicyRatio: 0,
    },
    isRelation: true,
    label: "Spider Relations: Geologists",
    name: "spiderRelationsGeologists",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    unlocked: false,
  },
  spiderRelationsPaleontologists: {
    blocked: false,
    blocks: ["spiderRelationsChemists", "spiderRelationsGeologists"],
    description:
      "Paleontology is the study of ancient life through fossil records. The spider paleontologists can help you discover these fossils. They can also give you a better understanding of how and where oil was formed, improving the oil industry",
    effects: {
      mintIvoryRatio: 0.15,
      oilPolicyRatio: 0.1,
    },
    isRelation: true,
    label: "Spider Relations: Paleontologists",
    name: "spiderRelationsPaleontologists",
    prices: [
      {
        name: "culture",
        val: 20000,
      },
    ],
    unlocked: false,
  },
  stoicism: {
    blocked: false,
    blocks: ["epicurianism"],
    description:
      "The stoics teach that kittens ought to endure hardship without complaint. Halve consumption of luxury resources, and breweries will consume less resources.",
    effects: {
      breweryConsumptionRatio: -0.25,
      luxuryDemandRatio: -0.5,
    },
    label: "Stoicism",
    name: "stoicism",
    prices: [
      {
        name: "culture",
        val: 2500,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["rationality", "mysticism", "rationing", "frugality"],
    },
    upgrades: {
      buildings: ["brewery"],
    },
  },
  stripMining: {
    blocked: false,
    blocks: ["clearCutting", "environmentalism"],
    description: "Decapitate the hills in an effort to improve your mineral production.",
    effects: {
      cathPollutionRatio: 0.05,
      environmentUnhappiness: -2,
      mineralsPolicyRatio: 0.3,
    },
    label: "Strip Mining",
    name: "stripMining",
    prices: [
      {
        name: "science",
        val: 2000,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["sustainability", "fullIndustrialization"],
    },
  },
  sustainability: {
    blocked: false,
    blocks: ["fullIndustrialization"],
    description:
      "Start taking the environmentalists' advice, removing the happiness penalty from strip mining/clear cutting and even improve it thanks to sustainable future.",
    effects: {
      cathPollutionRatio: -0.05,
      environmentHappinessBonus: 5,
    },
    label: "Sustainability",
    name: "sustainability",
    prices: [
      {
        name: "culture",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  technocracy: {
    blocked: false,
    blocks: ["theocracy", "expansionism"],
    description: "Your government is taken over by scientists, increasing your science cap.",
    effects: {
      antimatterPolicyRatio: 0.0625,
      queueCap: 2,
      technocracyScienceCap: 0.2,
    },
    label: "Technocracy",
    name: "technocracy",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    unlocked: false,
  },
  terraformingInsight: {
    blocked: false,
    blocks: ["cryochamberExtraction"],
    description: "Terraforming efficiency is increased",
    effects: {
      terraformingMaxKittensRatio: 0.1,
    },
    label: "Space expansionism",
    name: "terraformingInsight",
    prices: [
      {
        name: "manpower",
        val: 10000,
      },
    ],
    unlocked: false,
  },
  theocracy: {
    blocked: false,
    blocks: ["technocracy", "expansionism"],
    description:
      "Your astronauts have seen horrible things in the distant skies. Let the priests take over, increasing faith production.",
    effects: {
      faithPolicyRatio: 0.2,
    },
    label: "Order of the Stars",
    name: "theocracy",
    prices: [
      {
        name: "culture",
        val: 150000,
      },
    ],
    requiredLeaderJob: "priest",
    unlocked: false,
  },
  tradition: {
    blocked: false,
    blocks: ["liberty"],
    description:
      "Good for culture-oriented societies. Reduces manuscript price and increases their effect. This will affect what policies are available in the future!",
    effects: {
      cultureFromManuscripts: 1,
      manuscriptCultureCost: -100,
      manuscriptParchmentCost: -5,
    },
    label: "Tradition",
    name: "tradition",
    prices: [
      {
        name: "culture",
        val: 150,
      },
    ],
    unlocked: false,
    unlocks: {
      policies: ["authocracy", "monarchy"],
    },
  },
  transkittenism: {
    blocked: false,
    blocks: ["necrocracy", "radicalXenophobia"],
    description:
      "Give up kittenhood and merge with the AI. AI cores will be twice as effective, and there is no downside to AI level.",
    effects: {
      aiCoreProductivness: 1,
      aiCoreUpgradeBonus: 0.1,
    },
    label: "Transkittenism",
    name: "transkittenism",
    prices: [
      {
        name: "culture",
        val: 1500000,
      },
    ],
    unlocked: false,
    upgrades: {
      buildings: ["library"],
      spaceBuilding: ["moonBase"],
    },
  },
  zebraRelationsAppeasement: {
    blocked: false,
    blocks: ["zebraRelationsBellicosity"],
    description:
      "Try to befriend the zebras, even though they hate you. The terms of trade will be less harsh, but gold income will be slightly lower.",
    effects: {
      goldPolicyRatio: -0.05,
      zebraRelationModifier: 15,
    },
    label: "Zebra Relations: Appeasement",
    name: "zebraRelationsAppeasement",
    prices: [
      {
        name: "culture",
        val: 5000,
      },
    ],
    unlocked: false,
  },
  zebraRelationsBellicosity: {
    blocked: false,
    blocks: ["zebraRelationsAppeasement"],
    description:
      "Stand up to the zebras, making trades with them worse but gaining the respect of other races.",
    effects: {
      nonZebraRelationModifier: 5,
      zebraRelationModifier: -10,
    },
    label: "Zebra Relations: Bellicosity",
    name: "zebraRelationsBellicosity",
    prices: [
      {
        name: "culture",
        val: 5000,
      },
    ],
    unlocked: false,
  },
};
