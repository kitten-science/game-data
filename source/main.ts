import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type {
  UnsafeAchievement,
  UnsafeBadge,
  UnsafeBuilding,
  UnsafeCraft,
  UnsafeJob,
  UnsafePact,
  UnsafePerk,
  UnsafePlanet,
  UnsafePolicy,
  UnsafeRace,
  UnsafeReligionUpgrade,
  UnsafeSpaceProgram,
  UnsafeTech,
  UnsafeTranscendenceUpgrade,
  UnsafeUpgrade,
  UnsafeZebraUpgrade,
  UnsafeZigguratUpgrade,
} from "@kitten-science/kitten-scientists/types/index.js";
import { mustExist } from "@oliversalzburg/js-utils/data/nil.js";
import { shim } from "./shim.js";

const metadataToHash = (
  root: Array<
    | UnsafeAchievement
    | UnsafeBadge
    | UnsafeBuilding
    | UnsafeCraft
    | UnsafeJob
    | UnsafePact
    | UnsafePerk
    | UnsafePlanet
    | UnsafePolicy
    | UnsafeRace
    | UnsafeReligionUpgrade
    | UnsafeSpaceProgram
    | UnsafeTech
    | UnsafeTranscendenceUpgrade
    | UnsafeUpgrade
    | UnsafeZebraUpgrade
    | UnsafeZigguratUpgrade
  >,
) => Object.fromEntries(root.map(_ => [_.name, _]));
const dumpAnyToFile = (filename: string, content: unknown) => {
  const hashJson = JSON.stringify(content, undefined, 4);
  const filenameSuffixed = `${filename}.${fileFormat === "esm" ? "js" : "json"}`;
  const payload = fileFormat === "esm" ? `export default ${hashJson};\n` : `${hashJson}\n`;
  writeFileSync(filenameSuffixed, payload);
};

const fragments = [
  "achievements",
  "badges",
  "buildings",
  "crafts",
  "jobs",
  "races",
  "perks",
  "planets",
  "policies",
  "programs",
  "religionUpgrades",
  "techs",
  "transcendenceUpgrades",
  "upgrades",
  "zebraUpgrades",
  "zigguratUpgrades",
];

const index = [
  ...fragments.map(_ => `import ${_} from "./${_}.js";`),
  `export { ${fragments.join(",")} };\n`,
];

const gameRoot = process.argv[2];
const args = process.argv.slice(3);
const fileFormat = args.includes("--json") ? "json" : "esm";

const main = async () => {
  const literalsRaw = readFileSync(resolve(join(gameRoot, "./res/i18n/en.json")), "utf8");
  const literals = JSON.parse(literalsRaw);

  Object.assign(
    globalThis,
    {
      $I: (literal: string, ..._args: Array<unknown>) => literals[literal] ?? "",
      dojo: {
        declare: (
          id: string,
          _supers: unknown,
          decl: {
            achievements?: Array<UnsafeAchievement>;
            badges?: Array<UnsafeBadge>;
            buildingsData?: Array<UnsafeBuilding>;
            crafts?: Array<UnsafeCraft>;
            jobs?: Array<UnsafeJob>;
            pacts?: Array<UnsafePact>;
            perks?: Array<UnsafePerk>;
            planets?: Array<UnsafePlanet>;
            policies?: Array<UnsafePolicy>;
            programs?: Array<UnsafeSpaceProgram>;
            races?: Array<UnsafeRace>;
            religionUpgrades?: Array<UnsafeReligionUpgrade>;
            techs?: Array<UnsafeTech>;
            upgrades?: Array<UnsafeUpgrade>;
            zebraUpgrades?: Array<UnsafeZebraUpgrade>;
            zigguratUpgrades?: Array<UnsafeZigguratUpgrade>;
            transcendenceUpgrades?: Array<UnsafeTranscendenceUpgrade>;
          },
        ) => {
          switch (id) {
            case "classes.managers.Achievements":
              dumpAnyToFile("achievements", metadataToHash(mustExist(decl.achievements)));
              dumpAnyToFile("badges", metadataToHash(mustExist(decl.badges)));
              break;

            case "classes.managers.BuildingsManager":
              dumpAnyToFile("buildings", metadataToHash(mustExist(decl.buildingsData)));
              break;

            case "classes.managers.DiplomacyManager":
              dumpAnyToFile("races", metadataToHash(mustExist(decl.races)));
              break;

            case "classes.religion.pactsManager":
              dumpAnyToFile("pacts", metadataToHash(mustExist(decl.pacts)));
              break;

            case "classes.managers.PrestigeManager":
              dumpAnyToFile("perks", metadataToHash(mustExist(decl.perks)));
              break;

            case "classes.managers.ReligionManager":
              dumpAnyToFile("zigguratUpgrades", metadataToHash(mustExist(decl.zigguratUpgrades)));
              dumpAnyToFile("religionUpgrades", metadataToHash(mustExist(decl.religionUpgrades)));
              dumpAnyToFile(
                "transcendenceUpgrades",
                metadataToHash(mustExist(decl.transcendenceUpgrades)),
              );
              break;

            case "classes.managers.ScienceManager":
              dumpAnyToFile("policies", metadataToHash(mustExist(decl.policies)));
              dumpAnyToFile("techs", metadataToHash(mustExist(decl.techs)));
              break;

            case "classes.managers.SpaceManager":
              dumpAnyToFile("programs", metadataToHash(mustExist(decl.programs)));
              dumpAnyToFile("planets", metadataToHash(mustExist(decl.planets)));
              break;

            case "classes.managers.VillageManager":
              dumpAnyToFile("jobs", metadataToHash(mustExist(decl.jobs)));
              break;

            case "classes.managers.WorkshopManager":
              dumpAnyToFile("crafts", metadataToHash(mustExist(decl.crafts)));
              dumpAnyToFile("upgrades", metadataToHash(mustExist(decl.upgrades)));
              dumpAnyToFile("zebraUpgrades", metadataToHash(mustExist(decl.zebraUpgrades)));
              break;
          }
        },
      },
    },
    shim,
  );

  await import(resolve(join(gameRoot, "./js/achievements.js")));
  await import(resolve(join(gameRoot, "./js/buildings.js")));
  await import(resolve(join(gameRoot, "./js/diplomacy.js")));
  await import(resolve(join(gameRoot, "./js/prestige.js")));
  await import(resolve(join(gameRoot, "./js/religion.js")));
  await import(resolve(join(gameRoot, "./js/science.js")));
  await import(resolve(join(gameRoot, "./js/space.js")));
  await import(resolve(join(gameRoot, "./js/village.js")));
  await import(resolve(join(gameRoot, "./js/workshop.js")));

  if (fileFormat === "esm") {
    writeFileSync("index.js", index.join("\n"));
  }
  process.stderr.write("Done.\n");
};

main().catch(e => {
  throw e;
});
