//
// Kitten game is licensed under a WET PAWS LICENSE.
//
// You are free to make any changes in the code for personal or educational purpose.
// Using the game code for commercial gain or creation of derivative works is not permitted.
//
// Hosting a translated version of the game is permitted as long as the game retains all links.
// And for god's sake please don't make huge idiotic red logos of your website. (Yes, u77 folks, I am talking about you).
//
// Kitten Science Game Data Exporter © 2025 by Oliver Salzburg is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
//

export default {
  acoustics: {
    description:
      "Acoustics is the study of sound. Though not obviously useful, in a long run it may benefit civilizations thriving for cultural and religious development.",
    effectDesc: "Unlocks Chapels",
    label: "Acoustics",
    name: "acoustics",
    prices: [
      {
        name: "science",
        val: 60000,
      },
      {
        name: "compedium",
        val: 60,
      },
    ],
    unlocks: {
      buildings: ["chapel"],
      tech: ["drama"],
    },
  },
  advExogeology: {
    description: "Exometallurgy studies new methods of unobtainium processing",
    effectDesc: "Unlocks Eludium and Eludium upgrades",
    label: "Exometallurgy",
    name: "advExogeology",
    prices: [
      {
        name: "science",
        val: 325000,
      },
      {
        name: "blueprint",
        val: 350,
      },
    ],
    unlocks: {
      crafts: ["eludium"],
      stages: [
        {
          bld: "warehouse",
          stage: 1,
        },
      ],
      upgrades: ["eludiumCracker", "eludiumReflectors", "eludiumHuts", "mWReactor"],
    },
  },
  agriculture: {
    description:
      "The basis of all civilised life, Agriculture allows the working of land for food. Agriculture can significantly improve your food production.",
    effectDesc: "Unlocks Farmers and Barns",
    flavor: "Best thing since sliced bread!",
    label: "Agriculture",
    name: "agriculture",
    prices: [
      {
        name: "science",
        val: 100,
      },
    ],
    unlocks: {
      buildings: ["barn"],
      jobs: ["farmer"],
      tabs: ["queue"],
      tech: ["mining", "archery"],
    },
  },
  ai: {
    description:
      "Artificial Intelligence is an attempt to create a machine capable of reasoning and performing cognitive tasks.",
    effectDesc: "Unlocks Neural Networks and AI Core",
    label: "Artificial Intelligence",
    name: "ai",
    prices: [
      {
        name: "science",
        val: 250000,
      },
      {
        name: "blueprint",
        val: 150,
      },
    ],
    unlocks: {
      buildings: ["aiCore"],
      tech: ["quantumCryptography"],
      upgrades: ["neuralNetworks", "aiEngineers", "machineLearning"],
    },
  },
  animal: {
    description:
      "Domestication allows access to various animal resources via the pasture. Improves your food production.",
    effectDesc: "Unlocks Pastures",
    label: "Animal Husbandry",
    name: "animal",
    prices: [
      {
        name: "science",
        val: 500,
      },
    ],
    unlocks: {
      buildings: ["pasture", "unicornPasture"],
      tech: ["civil", "math", "construction"],
    },
  },
  antimatter: {
    description:
      "Antimatter provides some advanced sources of energy and generally benefits scientific advancement",
    effectDesc: "Unlocks Antimatter Reactors, AM-Drive, AM-Fission and Antimatter Bases",
    label: "Antimatter",
    name: "antimatter",
    prices: [
      {
        name: "science",
        val: 500000,
      },
      {
        name: "relic",
        val: 1,
      },
    ],
    unlocks: {
      tech: ["terraformation"],
      upgrades: ["amReactors", "amBases", "amDrive", "amFission"],
    },
  },
  archeology: {
    description:
      "Geology is the science comprising of the study of Cath, the rocks of which it is composed, and the processes by which they change. Can potentially benefit your mining industry.",
    effectDesc: "Unlocks Quarries and Geologists",
    flavor:
      "Different fossils of giant lizards were discovered. Apparently they all died in a sudden but inevitable betrayal.",
    label: "Geology",
    name: "archeology",
    prices: [
      {
        name: "science",
        val: 65000,
      },
      {
        name: "compedium",
        val: 65,
      },
    ],
    unlocks: {
      buildings: ["quarry"],
      jobs: ["geologist"],
      tech: ["biology"],
      upgrades: ["geodesy"],
      zebraUpgrades: ["minerologyDepartment"],
    },
  },
  archery: {
    description: "Ranged weaponry known as a 'Bow'.",
    effectDesc: "Unlocks Hunters",
    flavor: "TBD",
    label: "Archery",
    name: "archery",
    prices: [
      {
        name: "science",
        val: 300,
      },
    ],
    unlocks: {
      buildings: ["zebraOutpost", "zebraWorkshop", "zebraForge"],
      jobs: ["hunter"],
      tech: ["animal"],
    },
  },
  architecture: {
    description: "Architecture allows construction of some new sophisticated structures.",
    effectDesc: "Unlocks Mints and Mansions.",
    flavor: "Bigger, better cat towers!",
    label: "Architecture",
    name: "architecture",
    prices: [
      {
        name: "science",
        val: 42000,
      },
      {
        name: "compedium",
        val: 10,
      },
    ],
    unlocks: {
      buildings: ["mansion", "mint"],
      tech: ["acoustics"],
    },
  },
  artificialGravity: {
    description: "New anti-G engines enable a new form of long-range space travel.",
    effectDesc: "Unlocks Long-range Spaceship upgrade.",
    flavor: "The Expawse",
    label: "Artificial Gravity",
    name: "artificialGravity",
    prices: [
      {
        name: "science",
        val: 320000,
      },
    ],
    unlocks: {
      upgrades: ["spiceNavigation", "longRangeSpaceships"],
    },
  },
  astronomy: {
    description: "Astronomy is the study of objects in space. Improves scientific development.",
    effectDesc: "Unlocks Observatory and Starcharts",
    label: "Astronomy",
    name: "astronomy",
    prices: [
      {
        name: "science",
        val: 28000,
      },
      {
        name: "manuscript",
        val: 65,
      },
    ],
    unlocks: {
      buildings: ["observatory"],
      policies: ["knowledgeSharing", "culturalExchange", "bigStickPolicy", "cityOnAHill"],
      tech: ["navigation"],
    },
  },
  biochemistry: {
    description: "Improves your chemistry and biology-related technologies.",
    effectDesc: "Unlocks Biofuel Processing",
    flavor: "Some of the things that molecules do.",
    label: "Biochemistry",
    name: "biochemistry",
    prices: [
      {
        name: "science",
        val: 145000,
      },
      {
        name: "compedium",
        val: 500,
      },
    ],
    unlocks: {
      tech: ["genetics"],
      upgrades: ["biofuel"],
    },
  },
  biology: {
    description:
      "Biology deals with living organisms, their characteristics and their use in our society. Improves science and chemistry industry.",
    effectDesc: "Unlocks Bio Labs",
    flavor: "The secrets of evolution are time and death",
    label: "Biology",
    name: "biology",
    prices: [
      {
        name: "science",
        val: 85000,
      },
      {
        name: "compedium",
        val: 100,
      },
    ],
    unlocks: {
      buildings: ["biolab"],
      tech: ["biochemistry"],
    },
  },
  blackchain: {
    description: "All cool cats are mining this, so I think it is some kind of mineral",
    effectDesc: "Unlocks cryptomining and blackcoin exchange",
    label: "Blackchain",
    name: "blackchain",
    prices: [
      {
        name: "science",
        val: 5000000,
      },
      {
        name: "relic",
        val: 4096,
      },
    ],
    unlocks: {
      upgrades: ["invisibleBlackHand"],
    },
  },
  brewery: {
    description:
      "Catnip Processing is a non-mandatory technology which improves the process of converting catnip to catnip wood.",
    effectDesc: "Unlocks Catnip Enrichment.",
    label: "Catnip Processing",
    name: "brewery",
    prices: [
      {
        name: "science",
        val: 1200,
      },
    ],
  },
  calendar: {
    description:
      "Develops the ability to predict when the seasons will change. This ability is essential for advanced agriculture.",
    effectDesc: "Calendar provides a way of more precise time tracking",
    flavor: "What day is it again?",
    label: "Calendar",
    name: "calendar",
    prices: [
      {
        name: "science",
        val: 30,
      },
    ],
    unlocks: {
      tabs: ["time"],
      tech: ["agriculture"],
    },
  },
  chemistry: {
    description:
      "The discovery of Chemistry allows the deeper study and understanding of natural elements and their interaction. As a result new resources may be unlocked.",
    effectDesc: "Unlocks Oil and Oil Wells.",
    label: "Chemistry",
    name: "chemistry",
    prices: [
      {
        name: "science",
        val: 60000,
      },
      {
        name: "compedium",
        val: 50,
      },
    ],
    unlocks: {
      buildings: ["calciner", "oilWell"],
      crafts: ["alloy"],
      upgrades: ["alloyAxe", "alloyArmor", "alloyWarehouses", "alloyBarns"],
    },
  },
  chronophysics: {
    description:
      "Chronophysics studies the nature of time and possibilities of temporal manipulations",
    effectDesc: "Unlocks Chronospheres, Flux Reactors and Stasis Chambers",
    label: "Chronophysics",
    name: "chronophysics",
    prices: [
      {
        name: "science",
        val: 250000,
      },
      {
        name: "timeCrystal",
        val: 5,
      },
    ],
    unlocks: {
      buildings: ["chronosphere"],
      tech: ["tachyonTheory"],
      upgrades: ["stasisChambers", "fluxCondensator"],
    },
  },
  civil: {
    description:
      "The creation of the first true state organ provides many benefits related to better management of your population.",
    effectDesc: "Unlocks detailed information about your population",
    flavor: "Specialists in Herding Cats",
    label: "Civil Service",
    name: "civil",
    prices: [
      {
        name: "science",
        val: 1500,
      },
    ],
    unlocks: {
      tech: ["currency"],
    },
  },
  combustion: {
    description:
      "Combustion provides a number of ways to improve old coal-based automation technologies, such as Steamworks.",
    effectDesc: "Unlocks Offset Printing, Oil Refinery and Fuel Injection",
    label: "Combustion",
    name: "combustion",
    prices: [
      {
        name: "science",
        val: 115000,
      },
      {
        name: "blueprint",
        val: 45,
      },
    ],
    unlocks: {
      tech: ["ecology"],
      upgrades: ["offsetPress", "fuelInjectors", "oilRefinery"],
    },
  },
  construction: {
    description:
      "Construction represents the advancement of the study of masonry, primarily by adding iron and other metals to the builder's toolbox. Benefits hunting and base infrastructure.",
    effectDesc: "Allows your workers to construct the Lumber mill. Unlocks Composite Bows",
    effects: {
      queueCap: 1,
    },
    flavor: "Making pillow forts smart!",
    label: "Construction",
    name: "construction",
    prices: [
      {
        name: "science",
        val: 1300,
      },
    ],
    unlocks: {
      buildings: ["logHouse", "warehouse", "lumberMill", "ziggurat"],
      tech: ["engineering"],
      upgrades: ["compositeBow", "advancedRefinement", "reinforcedSaw"],
    },
  },
  cryptotheology: {
    description:
      "Cryptotheology applies the most arcane and unorthodox methods of theology in order to answer the fundamental questions of the universe and reality.",
    effectDesc: "Unlocks Relic Station and Cryptotheology tree",
    label: "Cryptotheology",
    name: "cryptotheology",
    prices: [
      {
        name: "science",
        val: 650000,
      },
      {
        name: "relic",
        val: 5,
      },
    ],
    unlocks: {
      upgrades: ["relicStation"],
    },
  },
  currency: {
    description:
      "Currency represents a certain amount of wealth. Can significantly boost your development in indirect ways.",
    effectDesc: "Unlocks gold and trade",
    label: "Currency",
    name: "currency",
    prices: [
      {
        name: "science",
        val: 2200,
      },
    ],
    unlocks: {
      buildings: ["tradepost"],
      policies: ["diplomacy", "isolationism"],
      upgrades: ["goldOre"],
    },
  },
  dimensionalPhysics: {
    description: "Dimensional Physics explores the concepts of space and time",
    effectDesc: "Unlocks Energy Rifts and LHC",
    label: "Dimensional Physics",
    name: "dimensionalPhysics",
    prices: [
      {
        name: "science",
        val: 235000,
      },
    ],
    unlocks: {
      upgrades: ["energyRifts", "lhc"],
    },
  },
  drama: {
    description:
      "Drama and poetry are both forms of artistic expression. Improves cultural progress.",
    effectDesc: "Unlocks Festivals and Cultural artifacts",
    label: "Drama and Poetry",
    name: "drama",
    prices: [
      {
        name: "science",
        val: 90000,
      },
      {
        name: "parchment",
        val: 5000,
      },
    ],
    unlocks: {
      buildings: ["brewery"],
    },
  },
  ecology: {
    description:
      "Ecology is a technology primarily focused on the search for new cheap and safe energy sources.",
    effectDesc: "Unlocks Solar Farms",
    label: "Ecology",
    name: "ecology",
    prices: [
      {
        name: "science",
        val: 125000,
      },
      {
        name: "blueprint",
        val: 55,
      },
    ],
    unlocks: {
      policies: ["conservation", "openWoodlands"],
      stages: [
        {
          bld: "pasture",
          stage: 1,
        },
      ],
      upgrades: ["carbonSequestration"],
    },
    upgrades: {
      buildings: ["mine", "quarry"],
    },
  },
  electricity: {
    description:
      "Electricity unlocks a new way to automate production, benefiting the catkind in all different areas.",
    effectDesc: "Unlocks Magnetos",
    flavor: "Who knew running around on the carpet could generate such power?",
    label: "Electricity",
    name: "electricity",
    prices: [
      {
        name: "science",
        val: 75000,
      },
      {
        name: "compedium",
        val: 85,
      },
    ],
    unlocks: {
      buildings: ["magneto"],
      tech: ["industrialization"],
    },
  },
  electronics: {
    description: "Electronics unlocks some high level upgrades mainly related to science",
    effectDesc: "Unlocks Broadcast Towers, CAD Systems, Refrigeration and SETI",
    label: "Electronics",
    name: "electronics",
    prices: [
      {
        name: "science",
        val: 135000,
      },
      {
        name: "blueprint",
        val: 70,
      },
    ],
    unlocks: {
      stages: [
        {
          bld: "library",
          stage: 1,
        },
        {
          bld: "amphitheatre",
          stage: 1,
        },
      ],
      tech: ["nuclearFission", "rocketry", "robotics"],
      upgrades: [
        "cadSystems",
        "refrigeration",
        "seti",
        "factoryLogistics",
        "factoryOptimization",
        "internet",
      ],
    },
  },
  engineering: {
    description:
      "Engineering is the science (or art perhaps) of designing complex materials, structures, devices, and systems.",
    effectDesc: "Unlocks Aqueducts",
    label: "Engineering",
    name: "engineering",
    prices: [
      {
        name: "science",
        val: 1500,
      },
    ],
    unlocks: {
      buildings: ["aqueduct"],
      policies: ["stripMining", "clearCutting", "environmentalism"],
      tech: ["writing"],
    },
  },
  exogeology: {
    description: "Exogeology or Planetary Geology studies extraterrestrial metals and minerals.",
    effectDesc: "Unlocks various Unobtainium upgrades",
    label: "Exogeology",
    name: "exogeology",
    prices: [
      {
        name: "science",
        val: 275000,
      },
      {
        name: "blueprint",
        val: 250,
      },
    ],
    unlocks: {
      tech: ["advExogeology"],
      upgrades: [
        "unobtainiumReflectors",
        "unobtainiumHuts",
        "unobtainiumDrill",
        "hydroPlantTurbines",
        "storageBunkers",
      ],
    },
  },
  exogeophysics: {
    description: "A study of geophysics on a massive scale of planetary bodies",
    effectDesc: "Unlocks Molten Cores",
    label: "Exophysics",
    name: "exogeophysics",
    prices: [
      {
        name: "science",
        val: 25000000,
      },
      {
        name: "relic",
        val: 500,
      },
    ],
  },
  genetics: {
    description:
      "Technology that further improves upon biology and chemistry. Affects your food industry.",
    effectDesc: "Unlocks genetic engineering(?)",
    flavor: "There's an unbroken thread that stretches from those first cats to us.",
    label: "Genetics",
    name: "genetics",
    prices: [
      {
        name: "science",
        val: 190000,
      },
      {
        name: "compedium",
        val: 1500,
      },
    ],
    unlocks: {
      upgrades: ["unicornSelection", "gmo"],
    },
  },
  hydroponics: {
    description:
      "A pinnacle of space engineering, hydroponic provides new sources of food supply for our distant colonies.",
    effectDesc: "Unlocks Yarn Hydroponics",
    label: "Hydroponics",
    name: "hydroponics",
    prices: [
      {
        name: "science",
        val: 1000000,
      },
      {
        name: "relic",
        val: 25,
      },
    ],
    unlocks: {
      tech: ["exogeophysics"],
    },
  },
  industrialization: {
    description:
      "Industrialization represents the concept of mass-producing materials, from food products to machine parts.",
    effectDesc: "Unlocks Advanced Automation and Barges",
    label: "Industrialization",
    name: "industrialization",
    prices: [
      {
        name: "science",
        val: 100000,
      },
      {
        name: "blueprint",
        val: 25,
      },
    ],
    unlocks: {
      policies: ["sustainability", "fullIndustrialization"],
      tech: ["mechanization", "metalurgy", "combustion"],
      upgrades: ["barges", "advancedAutomation", "logistics"],
    },
  },
  machinery: {
    description:
      "Previous advances in metal working and science give birth to the concept of a machine, a device with multiple moving parts. Machinery introduces a concept of automation which reduces routine operations",
    effectDesc: "Unlocks Steamworks, Crossbows, Printing Press and Factory Automation.",
    label: "Machinery",
    name: "machinery",
    prices: [
      {
        name: "science",
        val: 15000,
      },
    ],
    unlocks: {
      buildings: ["steamworks"],
      upgrades: ["printingPress", "factoryAutomation", "crossbow"],
    },
  },
  math: {
    description:
      "Mathematics is the most basic building block upon which all physical science is based. Improves scientific development.",
    effectDesc: "Allows construction of Academies, very efficient research buildings",
    flavor: "Purr equals Meow times Paw to the square",
    label: "Mathematics",
    name: "math",
    prices: [
      {
        name: "science",
        val: 1000,
      },
    ],
    unlocks: {
      buildings: ["academy"],
      tabs: ["stats"],
      upgrades: ["celestialMechanics"],
    },
  },
  mechanization: {
    description:
      "Mechanization provides a lot of ways to automate redundant tasks; hence improving craft, oil pumps and construction technologies.",
    effectDesc: "Unlocks Factories, Pumpjacks and Concrete",
    label: "Mechanization",
    name: "mechanization",
    prices: [
      {
        name: "science",
        val: 115000,
      },
      {
        name: "blueprint",
        val: 45,
      },
    ],
    unlocks: {
      buildings: ["factory"],
      crafts: ["concrate"],
      jobs: ["engineer"],
      tech: ["electronics"],
      upgrades: ["pumpjack", "strenghtenBuild"],
    },
  },
  metal: {
    description:
      "The first metal-working technology that provides your civilisation with sturdy, durable tools.",
    effectDesc: "You can construct Smelters that convert ore into metal",
    label: "Metal Working",
    name: "metal",
    prices: [
      {
        name: "science",
        val: 900,
      },
    ],
    unlocks: {
      buildings: ["smelter"],
      upgrades: ["huntingArmor"],
    },
  },
  metalurgy: {
    description:
      "Metallurgy improves the process of metal production, benefiting Smelters and Calciners",
    effectDesc: "Unlocks Electrolytic Smelting and Oxidation",
    label: "Metallurgy",
    name: "metalurgy",
    prices: [
      {
        name: "science",
        val: 125000,
      },
      {
        name: "blueprint",
        val: 60,
      },
    ],
    unlocks: {
      upgrades: ["electrolyticSmelting", "oxidation", "miningDrill"],
    },
  },
  metaphysics: {
    description:
      "Metaphysics is a traditional branch of philosophy concerned with explaining the fundamental nature of being and the world that encompasses it. Absolutely useless.",
    effectDesc: "Does nothing.",
    label: "Metaphysics",
    name: "metaphysics",
    prices: [
      {
        name: "unobtainium",
        val: 5,
      },
      {
        name: "science",
        val: 55000,
      },
    ],
  },
  mining: {
    description:
      "Mining develops the ability to extract mineral resources from the bowels of Cath.",
    effectDesc: "You can build Mines",
    flavor: "Pickaxes are easier to hold with opposable thumbs",
    label: "Mining",
    name: "mining",
    prices: [
      {
        name: "science",
        val: 500,
      },
    ],
    unlocks: {
      buildings: ["mine", "workshop"],
      tech: ["metal"],
      upgrades: ["bolas"],
    },
  },
  nanotechnology: {
    description:
      "Nanotechnology is manipulation of matter on an atomic, molecular, and sub-molecular scale. Can potentially improve your energy and resource production.",
    effectDesc: "Unlocks Nanosuits, FL Reactors, Augmentations and PVC",
    label: "Nanotechnology",
    name: "nanotechnology",
    prices: [
      {
        name: "science",
        val: 200000,
      },
      {
        name: "blueprint",
        val: 150,
      },
    ],
    unlocks: {
      tech: ["superconductors"],
      upgrades: ["augumentation", "nanosuits", "photovoltaic", "fluidizedReactors"],
    },
  },
  navigation: {
    description:
      "Navigation allows serious advancements in sailing and shipbuilding technology. It should benefit economical development and can lead to discovery of new civilizations.<br>(Hint: You don't need to have all of this culture at once)",
    effectDesc: "Unlocks the construction of Trade Ships and overseas trade.",
    label: "Navigation",
    name: "navigation",
    prices: [
      {
        name: "science",
        val: 35000,
      },
      {
        name: "manuscript",
        val: 100,
      },
    ],
    unlocks: {
      buildings: ["harbor"],
      crafts: ["ship"],
      tech: ["physics", "archeology", "architecture"],
      upgrades: ["caravanserai", "cargoShips", "astrolabe", "titaniumMirrors", "titaniumAxe"],
    },
  },
  nuclearFission: {
    description: "Nuclear Fission unlocks Nuclear Reactors and nuclear-related upgrades",
    effectDesc: "Unlocks Nuclear Reactors and Nuclear Vessel",
    label: "Nuclear Fission",
    name: "nuclearFission",
    prices: [
      {
        name: "science",
        val: 150000,
      },
      {
        name: "blueprint",
        val: 100,
      },
    ],
    unlocks: {
      buildings: ["reactor"],
      tech: ["nanotechnology", "particlePhysics"],
      upgrades: ["reactorVessel", "nuclearSmelters"],
    },
  },
  oilProcessing: {
    description: "Unlocks advanced options of oil processing",
    effectDesc: "Unlocks kerosene and factory processing",
    label: "Oil Processing",
    name: "oilProcessing",
    prices: [
      {
        name: "science",
        val: 215000,
      },
      {
        name: "blueprint",
        val: 150,
      },
    ],
    unlocks: {
      crafts: ["kerosene"],
      upgrades: ["factoryProcessing"],
    },
  },
  orbitalEngineering: {
    description:
      "Orbital Engineering allows kitten civilization to develop advanced space projects.",
    effectDesc: "Unlocks Space Stations and the Hubble Telescope",
    label: "Orbital Engineering",
    name: "orbitalEngineering",
    prices: [
      {
        name: "science",
        val: 250000,
      },
      {
        name: "blueprint",
        val: 250,
      },
    ],
    unlocks: {
      tech: ["exogeology", "thorium"],
      upgrades: [
        "hubbleTelescope",
        "satelliteRadio",
        "astrophysicists",
        "solarSatellites",
        "spaceEngineers",
        "starlink",
      ],
    },
  },
  paradoxalKnowledge: {
    description: "TBD",
    effectDesc: "Unlocks Chronocontrol and Resource Retrieval",
    label: "Paradox Theory",
    name: "paradoxalKnowledge",
    prices: [
      {
        name: "science",
        val: 1000000,
      },
      {
        name: "timeCrystal",
        val: 40,
      },
      {
        name: "void",
        val: 250,
      },
    ],
    unlocks: {
      chronoforge: ["ressourceRetrieval"],
      upgrades: ["distorsion"],
      voidSpace: ["chronocontrol", "voidResonator"],
    },
  },
  particlePhysics: {
    description:
      "Particle physics takes us one step deeper into the understanding of the nature of matter and energy than its ancestor, Nuclear Physics",
    effectDesc: "Unlocks Particle Accelerators, Railguns and Enriched Uranium",
    label: "Particle Physics",
    name: "particlePhysics",
    prices: [
      {
        name: "science",
        val: 185000,
      },
      {
        name: "blueprint",
        val: 135,
      },
    ],
    unlocks: {
      buildings: ["accelerator"],
      tech: ["chronophysics", "dimensionalPhysics"],
      upgrades: ["enrichedUranium", "railgun"],
    },
  },
  philosophy: {
    description:
      "Philosophy is the first abstract science developed by catkind. Philosophy is a basis of spiritual and cultural progress.",
    effectDesc: "Unlocks Temples",
    flavor: "I purr, therefore I am",
    label: "Philosophy",
    name: "philosophy",
    prices: [
      {
        name: "science",
        val: 9500,
      },
    ],
    unlocks: {
      buildings: ["temple"],
      crafts: ["compedium"],
      policies: ["stoicism", "epicurianism"],
      tech: ["theology"],
    },
  },
  physics: {
    description:
      "Physics is a study of laws of nature. Mostly improves your machinery effectiveness.",
    effectDesc: "Unlocks some useful upgrades.",
    label: "Physics",
    name: "physics",
    prices: [
      {
        name: "science",
        val: 50000,
      },
      {
        name: "compedium",
        val: 35,
      },
    ],
    unlocks: {
      crafts: ["blueprint"],
      tech: ["chemistry", "electricity", "metaphysics"],
      upgrades: ["pneumaticPress", "pyrolysis", "steelSaw"],
    },
  },
  quantumCryptography: {
    description: "TBD",
    effectDesc: "TBD",
    label: "Quantum Cryptography",
    name: "quantumCryptography",
    prices: [
      {
        name: "science",
        val: 1250000,
      },
      {
        name: "relic",
        val: 1024,
      },
    ],
    unlocks: {
      tech: ["blackchain"],
    },
  },
  robotics: {
    description: "Robotics improves automated structures like Calciners",
    effectDesc: "Unlocks Steel Plants, Hydro Plants, Tankers and Rotary Kilns",
    label: "Robotics",
    name: "robotics",
    prices: [
      {
        name: "science",
        val: 140000,
      },
      {
        name: "blueprint",
        val: 80,
      },
    ],
    unlocks: {
      crafts: ["tanker"],
      stages: [
        {
          bld: "aqueduct",
          stage: 1,
        },
      ],
      tech: ["ai"],
      upgrades: ["steelPlants", "rotaryKiln", "assistance", "factoryRobotics"],
    },
  },
  rocketry: {
    description: "Required for space exploration",
    effectDesc: "Unlocks construction of spaceships and oil processing",
    label: "Rocketry",
    name: "rocketry",
    prices: [
      {
        name: "science",
        val: 175000,
      },
      {
        name: "blueprint",
        val: 125,
      },
    ],
    unlocks: {
      tabs: ["space"],
      tech: ["sattelites", "oilProcessing"],
      upgrades: ["oilDistillation"],
    },
    upgrades: {
      planet: ["cath"],
    },
  },
  sattelites: {
    description: "Satellites are machines that permanently orbit the planet outside its atmosphere",
    effectDesc: "Unlocks deployment of Satellites",
    flavor: "Spreading cat videos at the speed of light",
    label: "Satellites",
    name: "sattelites",
    prices: [
      {
        name: "science",
        val: 190000,
      },
      {
        name: "blueprint",
        val: 125,
      },
    ],
    unlocks: {
      policies: ["outerSpaceTreaty", "militarizeSpace"],
      tech: ["orbitalEngineering"],
      upgrades: ["photolithography", "orbitalGeodesy", "uplink", "thinFilm"],
    },
  },
  steel: {
    description:
      "Development of the new Steel alloy advances further metal working. Benefits most of the aspects of development.",
    effectDesc: "Unlocks Coal and Steel production",
    label: "Steel",
    name: "steel",
    prices: [
      {
        name: "science",
        val: 12000,
      },
    ],
    unlocks: {
      crafts: ["steel"],
      upgrades: [
        "deepMining",
        "coalFurnace",
        "combustionEngine",
        "reinforcedWarehouses",
        "steelAxe",
        "steelArmor",
      ],
    },
  },
  superconductors: {
    description:
      "Superconductors are exotic materials that help to optimize energy efficiency of different technologies",
    effectDesc: "Unlocks Cold Fusion and Space Manufacturing",
    label: "Superconductors",
    name: "superconductors",
    prices: [
      {
        name: "science",
        val: 225000,
      },
      {
        name: "blueprint",
        val: 175,
      },
    ],
    unlocks: {
      tech: ["antimatter"],
      upgrades: ["coldFusion", "spaceManufacturing", "cryocomputing"],
    },
  },
  tachyonTheory: {
    description:
      "Tachyonic particles are hypothetical particles that always move faster than light.",
    effectDesc: "Unlocks Tachyon Accelerators and Chronoforge",
    label: "Tachyon Theory",
    name: "tachyonTheory",
    prices: [
      {
        name: "science",
        val: 750000,
      },
      {
        name: "timeCrystal",
        val: 25,
      },
      {
        name: "relic",
        val: 1,
      },
    ],
    unlocks: {
      tech: ["voidSpace"],
      upgrades: ["tachyonAccelerators", "chronoforge", "chronoEngineers"],
    },
  },
  terraformation: {
    description:
      "Terraformation technology focuses on use of the antimatter to change the climate of the Cath System exoplanets",
    effectDesc: "Unlocks Terraforming Stations",
    label: "Terraformation",
    name: "terraformation",
    prices: [
      {
        name: "science",
        val: 750000,
      },
      {
        name: "relic",
        val: 5,
      },
    ],
    unlocks: {
      tech: ["hydroponics"],
    },
  },
  theology: {
    description:
      "Theology is the study of religion. Religion is a key concept affecting cultural, scientific and industrial development.<br>(Hint: You don't need to have all of this culture at once)",
    effectDesc: "Unlocks religion",
    flavor: "What is that flaming ball in the sky anyway?",
    label: "Theology",
    name: "theology",
    prices: [
      {
        name: "science",
        val: 20000,
      },
      {
        name: "manuscript",
        val: 35,
      },
    ],
    unlocks: {
      jobs: ["priest"],
      tech: ["astronomy", "cryptotheology"],
    },
    upgrades: {
      buildings: ["temple"],
    },
  },
  thorium: {
    description:
      "Thorium is an extremely radioactive and energy efficient isotope that can be used in various space era upgrades.",
    effectDesc: "Unlocks Thorium Reactors and Thorium Engine",
    label: "Thorium",
    name: "thorium",
    prices: [
      {
        name: "science",
        val: 375000,
      },
      {
        name: "blueprint",
        val: 375,
      },
    ],
    unlocks: {
      crafts: ["thorium"],
      upgrades: ["thoriumReactors", "thoriumEngine", "qdot"],
    },
  },
  voidSpace: {
    description: "Under the void",
    effectDesc: "Unlocks Cryochambers",
    label: "Void Space",
    name: "voidSpace",
    prices: [
      {
        name: "science",
        val: 800000,
      },
      {
        name: "timeCrystal",
        val: 30,
      },
      {
        name: "void",
        val: 100,
      },
    ],
    unlocks: {
      challenges: ["atheism"],
      tech: ["paradoxalKnowledge"],
      upgrades: ["voidAspiration"],
      voidSpace: ["cryochambers"],
    },
  },
  writing: {
    description:
      "Writing is the art of recording information on material. Writing can influence general happiness and cultural progress of your civilization.",
    effectDesc: "Unlocks Amphitheatres",
    flavor: "Writing uses less ink than pawprints",
    label: "Writing",
    name: "writing",
    prices: [
      {
        name: "science",
        val: 3600,
      },
    ],
    unlocks: {
      buildings: ["amphitheatre"],
      crafts: ["parchment"],
      policies: ["liberty", "tradition"],
      tech: ["philosophy", "machinery", "steel"],
      upgrades: ["register"],
    },
  },
};
