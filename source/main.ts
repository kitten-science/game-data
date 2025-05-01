import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type {
  UnsafeAchievement,
  UnsafeBadge,
  UnsafeBuilding,
  UnsafeCraft,
  UnsafePolicy,
  UnsafeReligionUpgrade,
  UnsafeTech,
  UnsafeTranscendenceUpgrade,
  UnsafeUpgrade,
  UnsafeZebraUpgrade,
  UnsafeZigguratUpgrade,
} from "@kitten-science/kitten-scientists/types/index.js";
import { mustExist } from "@oliversalzburg/js-utils/data/nil.js";
import { shimScience } from "./shim-science.js";

const metadataToHash = (
  root: Array<
    | UnsafeAchievement
    | UnsafeBadge
    | UnsafeBuilding
    | UnsafeCraft
    | UnsafePolicy
    | UnsafeReligionUpgrade
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

const index = [
  `import achievements from "./achievements.js";`,
  `import badges from "./badges.js";`,
  `import buildings from "./buildings.js";`,
  `import crafts from "./crafts.js";`,
  `import policies from "./policies.js";`,
  `import religionUpgrades from "./religionUpgrades.js";`,
  `import techs from "./techs.js";`,
  `import transcendenceUpgrades from "./transcendenceUpgrades.js";`,
  `import upgrades from "./upgrades.js";`,
  `import zebraUpgrades from "./zebraUpgrades.js";`,
  `import zigguratUpgrades from "./zigguratUpgrades.js";`,
  "export { achievements, badges, buildings, crafts, policies, religionUpgrades, techs, transcendenceUpgrades, upgrades, zebraUpgrades, zigguratUpgrades };\n",
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
            policies?: Array<UnsafePolicy>;
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

            case "classes.managers.WorkshopManager":
              dumpAnyToFile("crafts", metadataToHash(mustExist(decl.crafts)));
              dumpAnyToFile("upgrades", metadataToHash(mustExist(decl.upgrades)));
              dumpAnyToFile("zebraUpgrades", metadataToHash(mustExist(decl.zebraUpgrades)));
              break;
          }
        },
      },
    },
    shimScience,
  );

  await import(resolve(join(gameRoot, "./js/achievements.js")));
  await import(resolve(join(gameRoot, "./js/buildings.js")));
  await import(resolve(join(gameRoot, "./js/religion.js")));
  await import(resolve(join(gameRoot, "./js/science.js")));
  await import(resolve(join(gameRoot, "./js/workshop.js")));

  if (fileFormat === "esm") {
    writeFileSync("index.js", index.join("\n"));
  }
  process.stderr.write("Done.\n");
};

main().catch(e => {
  throw e;
});
