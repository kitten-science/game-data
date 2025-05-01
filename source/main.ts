import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import {
  UnsafeCraft,
  UnsafePolicy,
  UnsafeTech,
  UnsafeUpgrade,
  UnsafeZebraUpgrade,
} from "@kitten-science/kitten-scientists/types/index.js";
import { mustExist } from "@oliversalzburg/js-utils/data/nil.js";
import { redirectErrorsToConsole } from "@oliversalzburg/js-utils/errors/console.js";
import { shimScience } from "./shim-science.js";

const metadataToHash = (
  root: Array<UnsafeCraft | UnsafePolicy | UnsafeTech | UnsafeUpgrade | UnsafeZebraUpgrade>,
) => Object.fromEntries(root.map(_ => [_.name, _]));
const dumpAnyToFile = (filename: string, content: unknown) => {
  const hashJson = JSON.stringify(content, undefined, 4);
  writeFileSync(filename, `export default ${hashJson};\n`);
};

const index = [
  `import crafts from "./crafts.js";`,
  `import policies from "./policies.js";`,
  `import techs from "./techs.js";`,
  `import upgrades from "./upgrades.js";`,
  `import zebraUpgrades from "./zebraUpgrades.js";`,
  `export { crafts,policies,techs,upgrades,zebraUpgrades };\n`,
];

const gameRoot = process.argv[2] ?? process.cwd();

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
            crafts?: Array<UnsafeCraft>;
            policies?: Array<UnsafePolicy>;
            techs?: Array<UnsafeTech>;
            upgrades?: Array<UnsafeUpgrade>;
            zebraUpgrades?: Array<UnsafeZebraUpgrade>;
          },
        ) => {
          switch (id) {
            case "classes.managers.WorkshopManager":
              dumpAnyToFile("crafts.js", metadataToHash(mustExist(decl.crafts)));
              dumpAnyToFile("upgrades.js", metadataToHash(mustExist(decl.upgrades)));
              dumpAnyToFile("zebraUpgrades.js", metadataToHash(mustExist(decl.zebraUpgrades)));

              break;
            case "classes.managers.ScienceManager":
              dumpAnyToFile("policies.js", metadataToHash(mustExist(decl.policies)));
              dumpAnyToFile("techs.js", metadataToHash(mustExist(decl.techs)));
              break;
          }
        },
      },
    },
    shimScience,
  );
  await import(resolve(join(gameRoot, "./js/science.js")));

  await import(resolve(join(gameRoot, "./js/workshop.js")));

  writeFileSync("index.js", index.join("\n"));
  process.stderr.write("Done.\n");
};

main().catch(redirectErrorsToConsole(console));
