export default {
  liberty: {
    name: "liberty",
    label: "Liberty",
    description:
      "Good for societies focused on happiness. Increases the effect happiness has on kitten production. This will affect what policies are available in the future!",
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
    label: "Tradition",
    description:
      "Good for culture-oriented societies. Reduces manuscript price and increases their effect. This will affect what policies are available in the future!",
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
    label: "Monarchy",
    description:
      "Best for societies benefiting from past experiences. Makes the leader's trait twice as powerful. Maintaining the royal court takes 10% of gold production.",
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
    label: "Autocracy",
    description:
      "Best for societies with highly promoted kittens. Makes the leader twice as good at their job. Leader increases conversion production based on uncapped housing buildings.",
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
    label: "Republic",
    description:
      "Best for large societies. Highly promoted leaders will provide a small bonus to the production of all kittens.",
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
    label: "Socialism",
    description: "Has no effect",
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
    label: "Scientific Communism",
    description: "Increases all effects of Socialism by 25%",
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
    label: "Liberalism",
    description:
      "A peaceful and open society. Gains better relations with all trade partners and makes buildings require less gold.",
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
    label: "Communism",
    description:
      "Industrialization at all costs. Increases production of coal, iron, and titanium, and makes factories cheaper.",
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
    label: "Fascism",
    description:
      "Lebensraum! Population penalties to happiness are eliminated, and log cabins cost half as much.",
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
    label: "Technocracy",
    description: "Your government is taken over by scientists, increasing your science cap.",
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
    label: "Order of the Stars",
    description:
      "Your astronauts have seen horrible things in the distant skies. Let the priests take over, increasing faith production.",
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
    label: "Cosmological Libertarianism",
    description:
      "Privatize the moon! Nothing changes on Cath, but unobtainium production will be increased.",
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
    label: "Transkittenism",
    description:
      "Give up kittenhood and merge with the AI. AI cores will be twice as effective, and there is no downside to AI level.",
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
    label: "Necrocracy",
    description:
      "Your society offers itself to the elders, they will take over and bring dark times, but you will get a production bonus from BLS.",
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
    label: "Radical Xenophobia",
    description: "Reject both evil aliens and evil robots. Mausoleum is twice as effective.",
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
    label: "Diplomacy",
    description:
      "Build good relationships with your neighbors, making trades cheaper in terms of catpower.",
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
    label: "Isolationism",
    description: "Engage in protectionism of all types, making trades cheaper in terms of gold.",
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
    label: "Zebra Relations: Appeasement",
    description:
      "Try to befriend the zebras, even though they hate you. The terms of trade will be less harsh, but gold income will be slightly lower.",
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
    label: "Zebra Relations: Bellicosity",
    description:
      "Stand up to the zebras, making trades with them worse but gaining the respect of other races.",
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
    label: "Knowledge Sharing",
    description:
      "Your scientists will travel to foreign lands, slightly increasing science income.",
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
    label: "Cultural Exchange",
    description:
      "Your poets and actors will travel to foreign lands, slightly increasing culture income.",
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
    label: "Big Stick Policy",
    description: "Speak softly, but beat up your neighbors when necessary. Embassies are cheaper.",
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
    label: "City On A Hill",
    description: "Be a shining example to the world you hate. Culture cap is slightly increased.",
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
    label: "Outer Space Treaty",
    description:
      "Agree that space is the domain of all of Cath's races, improving relations with all trading partners.",
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
    label: "Militarize Space",
    description:
      "Try to take over the skies. Your satellites science bonus to observatories is 10% more powerful.",
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
    label: "Lizard Relations: Ecologists",
    description:
      "The lizards love nature and want to protect it. Their ecologists are experts on operating green energy buildings. Depending on how many Hydro Plants are active, some of your Magnetos will still boost resource production even if turned off.",
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
    label: "Lizard Relations: Priests",
    description:
      "The lizards share the kittens' love of the sun. Their priests would be happy to help The Order of the Sun.<br>Manuscripts will grant a small bonus to faith.",
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
    label: "Lizard Relations: Diplomats",
    description:
      "Lizards are a peaceful race. If you want to befriend the races of Cath, they are more than willing to contribute.<br>Embassies built with neutral races will have a small effect on their attitude towards your people. With enough bonuses, they may become friendly.",
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
    label: "Shark Relations: Scribes",
    description:
      "The shark scribes are keen on recording Cath's history and you can help each other in the form of a trade deal. If you give them more resources in trade, they are willing to share more of their recordings.",
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
    label: "Shark Relations: Merchants",
    description:
      "The sharks are experts of traveling through water, but not so much on land. Work together with their merchants to discover and share trade routes through water and land.<br>The more you trade, the more effective it becomes",
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
    label: "Shark Relations: Botanists",
    description:
      "The sharks cultivate a lot of catnip, so their botanists have a good understanding of it. Collaborate with them to study and improve catnip refinement and conversion processes.",
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
    label: "Griffin Relations: Metallurgists",
    description:
      "Griffins have a very good understanding of steelmaking and its intricate processes. Their metallurgists can help you by improving steel plants.",
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
    label: "Griffin Relations: Scouts",
    description:
      "Flight is very beneficial when looking for game. Propose collaborating with griffin scouts during hunts to improve its effectiveness.",
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
    label: "Griffin Relations: Machinists",
    description:
      "Griffins understand aerodynamics well and their machinists can improve your steamworks effectiveness.",
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
    label: "Naga Relations: Masons",
    description:
      "Nagas almost exclusively use minerals as building materials, so they have a lot of experience extracting and processing it. They can show you the secrets of efficiently crafting slabs using quarries.",
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
    label: "Naga Relations: Cultists",
    description:
      "Nagas have very different religious traditions. Study naga cultist rituals and employ them during religious services.<br>Ziggurats will now be slightly affected by Order of the Sun upgrades.",
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
    label: "Naga Relations: Architects",
    description:
      "Naga architects know some unique building techniques kittens do not possess, come to a trade agreement with them to obtain blueprints and study them.<br><br>Building Naga embassies will increase the chance to get blueprints from nagas by 0.25%, by up to 10%. Once the maximum bonus is achieved, they will improve the blueprint crafting ratio instead",
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
    label: "Spider Relations: Geologists",
    description:
      "The spiders are willing to help you find and exploit good mineral deposits in exchange for your continued partnership.<br>Each embassy you have with spiders will improve your mining industry by 0.2%, up to a maximum of 15%",
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
    label: "Spider Relations: Chemists",
    description:
      "While spiders have abundant oil, they do not have the means to create kerosene yet. Your chemists can help them study chemical processes.<br><br> Spiders will now sell kerosene",
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
    label: "Spider Relations: Paleontologists",
    description:
      "Paleontology is the study of ancient life through fossil records. The spider paleontologists can help you discover these fossils. They can also give you a better understanding of how and where oil was formed, improving the oil industry",
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
    label: "Dragon Relations: Physicists",
    description:
      "Dragon physicists are experts on nuclear energy. They can help by improving your reactors.",
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
    label: "Dragon Relations: Astrologers",
    description:
      "The dragons have a long standing tradition of studying celestial objects. Work together with dragon astrologers to study the stars and get a look into their unique understanding of them.<br>Each year spent in a cycle increases starchart production",
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
    label: "Dragon Relations: Dynamicists",
    description:
      "Motion is an important concept in dragon society. For that reason they have a whole branch of scientists who study specifically locomotion and its intricacies. Dragons can improve your varying forms of travel.",
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
    label: "Stoicism",
    description:
      "The stoics teach that kittens ought to endure hardship without complaint. Halve consumption of luxury resources, and breweries will consume less resources.",
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
    label: "Epicurianism",
    description:
      "Epicurean kittens believe that pleasure is the highest good. Luxury resources will provide slightly more happiness.",
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
    label: "Carnivale",
    description:
      "A contingent of epicurean philosophers branches off into party planning. Embrace this school of thought, boosting kitten arrival speed during festivals in exchange for increasing luxury resource consumption during them.",
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
    label: "Extravagance",
    description:
      "A faction of epicurean philosophers holds that society ought to double down on its current philosophy. Consumable luxury resources increase happiness even more, but are consumed three times as quickly.",
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
    label: "Rationing",
    description:
      "Stoic philosophers encourage restraint and saving, making hunting more effective and reducing the effect of happiness on catnip consumption.",
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
    label: "Frugality",
    description:
      "Stoic philosophers are placed in charge of the mints, making them more effective by reducing corruption.",
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
    label: "Rationality",
    description:
      "Accept the view that the world can be fundamentally understood. Gain a small bonus to science and iron production, though you might look silly later.",
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
    label: "Mysticism",
    description:
      "Accept the view that there are forces beyond the comprehension of kittens. Gain a small bonus to culture and faith production, though you might look silly for a while.",
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
    label: "Strip Mining",
    description: "Decapitate the hills in an effort to improve your mineral production.",
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
    label: "Clear Cutting",
    description: "Totally destroy the forest in an effort to improve your wood production.",
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
    label: "Environmentalism",
    description:
      "Preserve the natural beauty of your village, slightly improving kittens' happiness.",
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
    label: "Sustainability",
    description:
      "Start taking the environmentalists' advice, removing the happiness penalty from strip mining/clear cutting and even improve it thanks to sustainable future.",
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
    label: "Full Industrialization",
    description:
      "Take the advice of your new captains of industry, slightly improving the crafting bonus each factory provides.",
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
    label: "Conservation",
    description: "Keep actively protecting the environment, increasing happiness from environment.",
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
    label: "Open Woodlands",
    description:
      "Allow some limited development of nearby lands, increasing wood and mineral production.",
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
    label: "Immortalism",
    description: "Extract cryochambers (?)",
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
    label: "Space expansionism",
    description: "Terraforming efficiency is increased",
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
    label: "Siphoning",
    description:
      "Pacts slow down necrocorn corruption and consume alicorns, instead of directly consuming necrocorns. Lack of alicorns or corruption is compensated by consuming necrocorns.",
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
