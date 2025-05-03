import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path/posix";
import { pathToFileURL } from "node:url";
import type {
  UnsafeAchievement,
  UnsafeBadge,
  UnsafeBuilding,
  UnsafeChronoForgeUpgrade,
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
  UnsafeVoidSpaceUpgrade,
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
    | UnsafeChronoForgeUpgrade
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
    | UnsafeVoidSpaceUpgrade
    | UnsafeZebraUpgrade
    | UnsafeZigguratUpgrade
  >,
) => Object.fromEntries(root.map(_ => [_.name, _]));

const licenseRaw = readFileSync("../LICENSE", "utf8");
const dumpAnyToFile = (filename: string, content: Record<string, unknown>) => {
  const hashJson = JSON.stringify(content, undefined, 4);
  const filenameSuffixed = `${filename}.js`;
  const payload = `// \n${licenseRaw
    .split("\n")
    .map(_ => `// ${_}`)
    .join("\n")}\n\nexport default ${hashJson};\n`;
  writeFileSync(filenameSuffixed, payload);
};

const fragments = [
  "achievements",
  "badges",
  "buildings",
  "chronoforgeUpgrades",
  "crafts",
  "jobs",
  "perks",
  "planets",
  "policies",
  "programs",
  "races",
  "religionUpgrades",
  "techs",
  "transcendenceUpgrades",
  "upgrades",
  "voidspaceUpgrades",
  "zebraUpgrades",
  "zigguratUpgrades",
];

const index = [
  ...fragments.map(_ => `import ${_} from "./${_}.js";`),
  `export { ${fragments.join(",")} };\n`,
];

const gameRoot = process.argv[2];
const args = process.argv.slice(3);

const main = async () => {
  const literalsRaw = readFileSync(join(gameRoot, "./res/i18n/en.json"), "utf8");
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
            chronoforgeUpgrades?: Array<UnsafeChronoForgeUpgrade>;
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
            transcendenceUpgrades?: Array<UnsafeTranscendenceUpgrade>;
            upgrades?: Array<UnsafeUpgrade>;
            voidspaceUpgrades?: Array<UnsafeVoidSpaceUpgrade>;
            zebraUpgrades?: Array<UnsafeZebraUpgrade>;
            zigguratUpgrades?: Array<UnsafeZigguratUpgrade>;
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

            case "classes.managers.TimeManager":
              dumpAnyToFile(
                "chronoforgeUpgrades",
                metadataToHash(mustExist(decl.chronoforgeUpgrades)),
              );
              dumpAnyToFile("voidspaceUpgrades", metadataToHash(mustExist(decl.voidspaceUpgrades)));
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

  const processModule = async (entrypoint: string) => {
    const subject = pathToFileURL(join(gameRoot, entrypoint)).toString();
    process.stderr.write(`Loading '${subject}'...\n`);
    await import(subject);
  };

  await processModule("js/achievements.js");
  await processModule("js/buildings.js");
  await processModule("js/diplomacy.js");
  await processModule("js/prestige.js");
  await processModule("js/religion.js");
  await processModule("js/science.js");
  await processModule("js/space.js");
  await processModule("js/time.js");
  await processModule("js/village.js");
  await processModule("js/workshop.js");

  writeFileSync("index.js", index.join("\n"));
  process.stderr.write("Done.\n");
};

main().catch(e => {
  throw e;
});
