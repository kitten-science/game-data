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
  engineer: {
    description:
      "Engineers can automate resource crafting (once per 10 minute). Every factory unlocks one engineer slot",
    modifiers: {},
    name: "engineer",
    title: "Engineer",
    unlocked: false,
    value: 0,
  },
  farmer: {
    description: "+5 catnip per second",
    modifiers: {
      catnip: 1,
    },
    name: "farmer",
    title: "Farmer",
    unlocked: false,
    value: 0,
  },
  geologist: {
    description: "+0.075 coal per second (may be upgraded)",
    modifiers: {},
    name: "geologist",
    title: "Geologist",
    unlocked: false,
    value: 0,
  },
  hunter: {
    description: "+0.3 catpower per second",
    flavor: "We're so cute we purr at our prey until it dies",
    modifiers: {
      manpower: 0.06,
    },
    name: "hunter",
    title: "Hunter",
    unlocked: false,
    value: 0,
  },
  miner: {
    description: "+0.25 mineral per second",
    flavor: "I don't really understand how can I hold a pick with my paws",
    modifiers: {
      minerals: 0.05,
    },
    name: "miner",
    title: "Miner",
    unlocked: false,
    value: 0,
  },
  priest: {
    description: "+0.0075 faith per second",
    modifiers: {
      faith: 0.0015,
    },
    name: "priest",
    title: "Priest",
    unlocked: false,
    value: 0,
  },
  scholar: {
    description: "+0.175 science per second",
    modifiers: {},
    name: "scholar",
    title: "Scholar",
    unlocked: false,
    value: 0,
  },
  woodcutter: {
    defaultUnlocked: true,
    description: "+0.09 wood per second",
    flavor: "Must. Not. Scratch.",
    modifiers: {
      wood: 0.018,
    },
    name: "woodcutter",
    title: "Woodcutter",
    unlocked: true,
    value: 0,
  },
};
