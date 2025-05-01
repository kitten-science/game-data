export default {
  calendar: {
    name: "calendar",
    label: "Calendar",
    description:
      "Develops the ability to predict when the seasons will change. This ability is essential for advanced agriculture.",
    effectDesc: "Calendar provides a way of more precise time tracking",
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
    flavor: "What day is it again?",
  },
  agriculture: {
    name: "agriculture",
    label: "Agriculture",
    description:
      "The basis of all civilised life, Agriculture allows the working of land for food. Agriculture can significantly improve your food production.",
    effectDesc: "Unlocks Farmers and Barns",
    prices: [
      {
        name: "science",
        val: 100,
      },
    ],
    unlocks: {
      buildings: ["barn"],
      jobs: ["farmer"],
      tech: ["mining", "archery"],
      tabs: ["queue"],
    },
    flavor: "Best thing since sliced bread!",
  },
  archery: {
    name: "archery",
    label: "Archery",
    description: "Ranged weaponry known as a 'Bow'.",
    effectDesc: "Unlocks Hunters",
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
    flavor: "TBD",
  },
  mining: {
    name: "mining",
    label: "Mining",
    description:
      "Mining develops the ability to extract mineral resources from the bowels of Cath.",
    effectDesc: "You can build Mines",
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
    flavor: "Pickaxes are easier to hold with opposable thumbs",
  },
  metal: {
    name: "metal",
    label: "Metal Working",
    description:
      "The first metal-working technology that provides your civilisation with sturdy, durable tools.",
    effectDesc: "You can construct Smelters that convert ore into metal",
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
  animal: {
    name: "animal",
    label: "Animal Husbandry",
    description:
      "Domestication allows access to various animal resources via the pasture. Improves your food production.",
    effectDesc: "Unlocks Pastures",
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
  brewery: {
    name: "brewery",
    label: "Catnip Processing",
    description:
      "Catnip Processing is a non-mandatory technology which improves the process of converting catnip to catnip wood.",
    effectDesc: "Unlocks Catnip Enrichment.",
    prices: [
      {
        name: "science",
        val: 1200,
      },
    ],
  },
  civil: {
    name: "civil",
    label: "Civil Service",
    description:
      "The creation of the first true state organ provides many benefits related to better management of your population.",
    effectDesc: "Unlocks detailed information about your population",
    prices: [
      {
        name: "science",
        val: 1500,
      },
    ],
    unlocks: {
      tech: ["currency"],
    },
    flavor: "Specialists in Herding Cats",
  },
  math: {
    name: "math",
    label: "Mathematics",
    description:
      "Mathematics is the most basic building block upon which all physical science is based. Improves scientific development.",
    effectDesc: "Allows construction of Academies, very efficient research buildings",
    prices: [
      {
        name: "science",
        val: 1000,
      },
    ],
    unlocks: {
      tabs: ["stats"],
      buildings: ["academy"],
      upgrades: ["celestialMechanics"],
    },
    flavor: "Purr equals Meow times Paw to the square",
  },
  construction: {
    name: "construction",
    label: "Construction",
    description:
      "Construction represents the advancement of the study of masonry, primarily by adding iron and other metals to the builder's toolbox. Benefits hunting and base infrastructure.",
    effectDesc: "Allows your workers to construct the Lumber mill. Unlocks Composite Bows",
    prices: [
      {
        name: "science",
        val: 1300,
      },
    ],
    effects: {
      queueCap: 1,
    },
    unlocks: {
      buildings: ["logHouse", "warehouse", "lumberMill", "ziggurat"],
      tech: ["engineering"],
      upgrades: ["compositeBow", "advancedRefinement", "reinforcedSaw"],
    },
    flavor: "Making pillow forts smart!",
  },
  engineering: {
    name: "engineering",
    label: "Engineering",
    description:
      "Engineering is the science (or art perhaps) of designing complex materials, structures, devices, and systems.",
    effectDesc: "Unlocks Aqueducts",
    prices: [
      {
        name: "science",
        val: 1500,
      },
    ],
    unlocks: {
      buildings: ["aqueduct"],
      tech: ["writing"],
      policies: ["stripMining", "clearCutting", "environmentalism"],
    },
  },
  currency: {
    name: "currency",
    label: "Currency",
    description:
      "Currency represents a certain amount of wealth. Can significantly boost your development in indirect ways.",
    effectDesc: "Unlocks gold and trade",
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
  writing: {
    name: "writing",
    label: "Writing",
    description:
      "Writing is the art of recording information on material. Writing can influence general happiness and cultural progress of your civilization.",
    effectDesc: "Unlocks Amphitheatres",
    prices: [
      {
        name: "science",
        val: 3600,
      },
    ],
    unlocks: {
      buildings: ["amphitheatre"],
      tech: ["philosophy", "machinery", "steel"],
      policies: ["liberty", "tradition"],
      upgrades: ["register"],
      crafts: ["parchment"],
    },
    flavor: "Writing uses less ink than pawprints",
  },
  philosophy: {
    name: "philosophy",
    label: "Philosophy",
    description:
      "Philosophy is the first abstract science developed by catkind. Philosophy is a basis of spiritual and cultural progress.",
    effectDesc: "Unlocks Temples",
    prices: [
      {
        name: "science",
        val: 9500,
      },
    ],
    unlocks: {
      buildings: ["temple"],
      tech: ["theology"],
      policies: ["stoicism", "epicurianism"],
      crafts: ["compedium"],
    },
    flavor: "I purr, therefore I am",
  },
  machinery: {
    name: "machinery",
    label: "Machinery",
    description:
      "Previous advances in metal working and science give birth to the concept of a machine, a device with multiple moving parts. Machinery introduces a concept of automation which reduces routine operations",
    effectDesc: "Unlocks Steamworks, Crossbows, Printing Press and Factory Automation.",
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
  steel: {
    name: "steel",
    label: "Steel",
    description:
      "Development of the new Steel alloy advances further metal working. Benefits most of the aspects of development.",
    effectDesc: "Unlocks Coal and Steel production",
    prices: [
      {
        name: "science",
        val: 12000,
      },
    ],
    unlocks: {
      upgrades: [
        "deepMining",
        "coalFurnace",
        "combustionEngine",
        "reinforcedWarehouses",
        "steelAxe",
        "steelArmor",
      ],
      crafts: ["steel"],
    },
  },
  theology: {
    name: "theology",
    label: "Theology",
    description:
      "Theology is the study of religion. Religion is a key concept affecting cultural, scientific and industrial development.<br>(Hint: You don't need to have all of this culture at once)",
    effectDesc: "Unlocks religion",
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
    flavor: "What is that flaming ball in the sky anyway?",
  },
  astronomy: {
    name: "astronomy",
    label: "Astronomy",
    description: "Astronomy is the study of objects in space. Improves scientific development.",
    effectDesc: "Unlocks Observatory and Starcharts",
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
      tech: ["navigation"],
      policies: ["knowledgeSharing", "culturalExchange", "bigStickPolicy", "cityOnAHill"],
    },
  },
  navigation: {
    name: "navigation",
    label: "Navigation",
    description:
      "Navigation allows serious advancements in sailing and shipbuilding technology. It should benefit economical development and can lead to discovery of new civilizations.<br>(Hint: You don't need to have all of this culture at once)",
    effectDesc: "Unlocks the construction of Trade Ships and overseas trade.",
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
      tech: ["physics", "archeology", "architecture"],
      upgrades: ["caravanserai", "cargoShips", "astrolabe", "titaniumMirrors", "titaniumAxe"],
      crafts: ["ship"],
    },
  },
  architecture: {
    name: "architecture",
    label: "Architecture",
    description: "Architecture allows construction of some new sophisticated structures.",
    effectDesc: "Unlocks Mints and Mansions.",
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
    flavor: "Bigger, better cat towers!",
  },
  physics: {
    name: "physics",
    label: "Physics",
    description:
      "Physics is a study of laws of nature. Mostly improves your machinery effectiveness.",
    effectDesc: "Unlocks some useful upgrades.",
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
      tech: ["chemistry", "electricity", "metaphysics"],
      upgrades: ["pneumaticPress", "pyrolysis", "steelSaw"],
      crafts: ["blueprint"],
    },
  },
  metaphysics: {
    name: "metaphysics",
    label: "Metaphysics",
    description:
      "Metaphysics is a traditional branch of philosophy concerned with explaining the fundamental nature of being and the world that encompasses it. Absolutely useless.",
    effectDesc: "Does nothing.",
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
  chemistry: {
    name: "chemistry",
    label: "Chemistry",
    description:
      "The discovery of Chemistry allows the deeper study and understanding of natural elements and their interaction. As a result new resources may be unlocked.",
    effectDesc: "Unlocks Oil and Oil Wells.",
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
      upgrades: ["alloyAxe", "alloyArmor", "alloyWarehouses", "alloyBarns"],
      crafts: ["alloy"],
    },
  },
  acoustics: {
    name: "acoustics",
    label: "Acoustics",
    description:
      "Acoustics is the study of sound. Though not obviously useful, in a long run it may benefit civilizations thriving for cultural and religious development.",
    effectDesc: "Unlocks Chapels",
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
  drama: {
    name: "drama",
    label: "Drama and Poetry",
    description:
      "Drama and poetry are both forms of artistic expression. Improves cultural progress.",
    effectDesc: "Unlocks Festivals and Cultural artifacts",
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
  archeology: {
    name: "archeology",
    label: "Geology",
    description:
      "Geology is the science comprising of the study of Cath, the rocks of which it is composed, and the processes by which they change. Can potentially benefit your mining industry.",
    effectDesc: "Unlocks Quarries and Geologists",
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
    flavor:
      "Different fossils of giant lizards were discovered. Apparently they all died in a sudden but inevitable betrayal.",
  },
  electricity: {
    name: "electricity",
    label: "Electricity",
    description:
      "Electricity unlocks a new way to automate production, benefiting the catkind in all different areas.",
    effectDesc: "Unlocks Magnetos",
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
    flavor: "Who knew running around on the carpet could generate such power?",
  },
  biology: {
    name: "biology",
    label: "Biology",
    description:
      "Biology deals with living organisms, their characteristics and their use in our society. Improves science and chemistry industry.",
    effectDesc: "Unlocks Bio Labs",
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
    flavor: "The secrets of evolution are time and death",
  },
  biochemistry: {
    name: "biochemistry",
    label: "Biochemistry",
    description: "Improves your chemistry and biology-related technologies.",
    effectDesc: "Unlocks Biofuel Processing",
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
    flavor: "Some of the things that molecules do.",
  },
  genetics: {
    name: "genetics",
    label: "Genetics",
    description:
      "Technology that further improves upon biology and chemistry. Affects your food industry.",
    effectDesc: "Unlocks genetic engineering(?)",
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
    flavor: "There's an unbroken thread that stretches from those first cats to us.",
  },
  industrialization: {
    name: "industrialization",
    label: "Industrialization",
    description:
      "Industrialization represents the concept of mass-producing materials, from food products to machine parts.",
    effectDesc: "Unlocks Advanced Automation and Barges",
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
      tech: ["mechanization", "metalurgy", "combustion"],
      upgrades: ["barges", "advancedAutomation", "logistics"],
      policies: ["sustainability", "fullIndustrialization"],
    },
  },
  mechanization: {
    name: "mechanization",
    label: "Mechanization",
    description:
      "Mechanization provides a lot of ways to automate redundant tasks; hence improving craft, oil pumps and construction technologies.",
    effectDesc: "Unlocks Factories, Pumpjacks and Concrete",
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
      jobs: ["engineer"],
      tech: ["electronics"],
      upgrades: ["pumpjack", "strenghtenBuild"],
      crafts: ["concrate"],
    },
  },
  metalurgy: {
    name: "metalurgy",
    label: "Metallurgy",
    description:
      "Metallurgy improves the process of metal production, benefiting Smelters and Calciners",
    effectDesc: "Unlocks Electrolytic Smelting and Oxidation",
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
  combustion: {
    name: "combustion",
    label: "Combustion",
    description:
      "Combustion provides a number of ways to improve old coal-based automation technologies, such as Steamworks.",
    effectDesc: "Unlocks Offset Printing, Oil Refinery and Fuel Injection",
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
  ecology: {
    name: "ecology",
    label: "Ecology",
    description:
      "Ecology is a technology primarily focused on the search for new cheap and safe energy sources.",
    effectDesc: "Unlocks Solar Farms",
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
      stages: [
        {
          bld: "pasture",
          stage: 1,
        },
      ],
      policies: ["conservation", "openWoodlands"],
      upgrades: ["carbonSequestration"],
    },
    upgrades: {
      buildings: ["mine", "quarry"],
    },
  },
  electronics: {
    name: "electronics",
    label: "Electronics",
    description: "Electronics unlocks some high level upgrades mainly related to science",
    effectDesc: "Unlocks Broadcast Towers, CAD Systems, Refrigeration and SETI",
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
  robotics: {
    name: "robotics",
    label: "Robotics",
    description: "Robotics improves automated structures like Calciners",
    effectDesc: "Unlocks Steel Plants, Hydro Plants, Tankers and Rotary Kilns",
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
      stages: [
        {
          bld: "aqueduct",
          stage: 1,
        },
      ],
      tech: ["ai"],
      upgrades: ["steelPlants", "rotaryKiln", "assistance", "factoryRobotics"],
      crafts: ["tanker"],
    },
  },
  ai: {
    name: "ai",
    label: "Artificial Intelligence",
    description:
      "Artificial Intelligence is an attempt to create a machine capable of reasoning and performing cognitive tasks.",
    effectDesc: "Unlocks Neural Networks and AI Core",
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
  quantumCryptography: {
    name: "quantumCryptography",
    label: "Quantum Cryptography",
    description: "TBD",
    effectDesc: "TBD",
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
  blackchain: {
    name: "blackchain",
    label: "Blackchain",
    description: "All cool cats are mining this, so I think it is some kind of mineral",
    effectDesc: "Unlocks cryptomining and blackcoin exchange",
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
  nuclearFission: {
    name: "nuclearFission",
    label: "Nuclear Fission",
    description: "Nuclear Fission unlocks Nuclear Reactors and nuclear-related upgrades",
    effectDesc: "Unlocks Nuclear Reactors and Nuclear Vessel",
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
  rocketry: {
    name: "rocketry",
    label: "Rocketry",
    description: "Required for space exploration",
    effectDesc: "Unlocks construction of spaceships and oil processing",
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
  oilProcessing: {
    name: "oilProcessing",
    label: "Oil Processing",
    description: "Unlocks advanced options of oil processing",
    effectDesc: "Unlocks kerosene and factory processing",
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
      upgrades: ["factoryProcessing"],
      crafts: ["kerosene"],
    },
  },
  sattelites: {
    name: "sattelites",
    label: "Satellites",
    description: "Satellites are machines that permanently orbit the planet outside its atmosphere",
    effectDesc: "Unlocks deployment of Satellites",
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
      tech: ["orbitalEngineering"],
      upgrades: ["photolithography", "orbitalGeodesy", "uplink", "thinFilm"],
      policies: ["outerSpaceTreaty", "militarizeSpace"],
    },
    flavor: "Spreading cat videos at the speed of light",
  },
  orbitalEngineering: {
    name: "orbitalEngineering",
    label: "Orbital Engineering",
    description:
      "Orbital Engineering allows kitten civilization to develop advanced space projects.",
    effectDesc: "Unlocks Space Stations and the Hubble Telescope",
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
  thorium: {
    name: "thorium",
    label: "Thorium",
    description:
      "Thorium is an extremely radioactive and energy efficient isotope that can be used in various space era upgrades.",
    effectDesc: "Unlocks Thorium Reactors and Thorium Engine",
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
      upgrades: ["thoriumReactors", "thoriumEngine", "qdot"],
      crafts: ["thorium"],
    },
  },
  exogeology: {
    name: "exogeology",
    label: "Exogeology",
    description: "Exogeology or Planetary Geology studies extraterrestrial metals and minerals.",
    effectDesc: "Unlocks various Unobtainium upgrades",
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
  advExogeology: {
    name: "advExogeology",
    label: "Exometallurgy",
    description: "Exometallurgy studies new methods of unobtainium processing",
    effectDesc: "Unlocks Eludium and Eludium upgrades",
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
      upgrades: ["eludiumCracker", "eludiumReflectors", "eludiumHuts", "mWReactor"],
      crafts: ["eludium"],
      stages: [
        {
          bld: "warehouse",
          stage: 1,
        },
      ],
    },
  },
  nanotechnology: {
    name: "nanotechnology",
    label: "Nanotechnology",
    description:
      "Nanotechnology is manipulation of matter on an atomic, molecular, and sub-molecular scale. Can potentially improve your energy and resource production.",
    effectDesc: "Unlocks Nanosuits, FL Reactors, Augmentations and PVC",
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
  superconductors: {
    name: "superconductors",
    label: "Superconductors",
    description:
      "Superconductors are exotic materials that help to optimize energy efficiency of different technologies",
    effectDesc: "Unlocks Cold Fusion and Space Manufacturing",
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
  antimatter: {
    name: "antimatter",
    label: "Antimatter",
    description:
      "Antimatter provides some advanced sources of energy and generally benefits scientific advancement",
    effectDesc: "Unlocks Antimatter Reactors, AM-Drive, AM-Fission and Antimatter Bases",
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
  terraformation: {
    name: "terraformation",
    label: "Terraformation",
    description:
      "Terraformation technology focuses on use of the antimatter to change the climate of the Cath System exoplanets",
    effectDesc: "Unlocks Terraforming Stations",
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
  hydroponics: {
    name: "hydroponics",
    label: "Hydroponics",
    description:
      "A pinnacle of space engineering, hydroponic provides new sources of food supply for our distant colonies.",
    effectDesc: "Unlocks Yarn Hydroponics",
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
  exogeophysics: {
    name: "exogeophysics",
    label: "Exophysics",
    description: "A study of geophysics on a massive scale of planetary bodies",
    effectDesc: "Unlocks Molten Cores",
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
  particlePhysics: {
    name: "particlePhysics",
    label: "Particle Physics",
    description:
      "Particle physics takes us one step deeper into the understanding of the nature of matter and energy than its ancestor, Nuclear Physics",
    effectDesc: "Unlocks Particle Accelerators, Railguns and Enriched Uranium",
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
  dimensionalPhysics: {
    name: "dimensionalPhysics",
    label: "Dimensional Physics",
    description: "Dimensional Physics explores the concepts of space and time",
    effectDesc: "Unlocks Energy Rifts and LHC",
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
  artificialGravity: {
    name: "artificialGravity",
    label: "Artificial Gravity",
    description: "New anti-G engines enable a new form of long-range space travel.",
    effectDesc: "Unlocks Long-range Spaceship upgrade.",
    prices: [
      {
        name: "science",
        val: 320000,
      },
    ],
    unlocks: {
      upgrades: ["spiceNavigation", "longRangeSpaceships"],
    },
    flavor: "The Expawse",
  },
  chronophysics: {
    name: "chronophysics",
    label: "Chronophysics",
    description:
      "Chronophysics studies the nature of time and possibilities of temporal manipulations",
    effectDesc: "Unlocks Chronospheres, Flux Reactors and Stasis Chambers",
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
  tachyonTheory: {
    name: "tachyonTheory",
    label: "Tachyon Theory",
    description:
      "Tachyonic particles are hypothetical particles that always move faster than light.",
    effectDesc: "Unlocks Tachyon Accelerators and Chronoforge",
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
  cryptotheology: {
    name: "cryptotheology",
    label: "Cryptotheology",
    description:
      "Cryptotheology applies the most arcane and unorthodox methods of theology in order to answer the fundamental questions of the universe and reality.",
    effectDesc: "Unlocks Relic Station and Cryptotheology tree",
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
  voidSpace: {
    name: "voidSpace",
    label: "Void Space",
    description: "Under the void",
    effectDesc: "Unlocks Cryochambers",
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
      tech: ["paradoxalKnowledge"],
      upgrades: ["voidAspiration"],
      voidSpace: ["cryochambers"],
      challenges: ["atheism"],
    },
  },
  paradoxalKnowledge: {
    name: "paradoxalKnowledge",
    label: "Paradox Theory",
    description: "TBD",
    effectDesc: "Unlocks Chronocontrol and Resource Retrieval",
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
      upgrades: ["distorsion"],
      chronoforge: ["ressourceRetrieval"],
      voidSpace: ["chronocontrol", "voidResonator"],
    },
  },
};
