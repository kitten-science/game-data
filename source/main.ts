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
  const filenameSuffixed = `${filename}.${fileFormat === "esm" ? "js" : "json"}`;
  const payload = fileFormat === "esm" ? `export default ${hashJson};\n` : `${hashJson}\n`;
  writeFileSync(filenameSuffixed, payload);
};

const index = [
  `import crafts from "./crafts.js";`,
  `import policies from "./policies.js";`,
  `import techs from "./techs.js";`,
  `import upgrades from "./upgrades.js";`,
  `import zebraUpgrades from "./zebraUpgrades.js";`,
  `export { crafts,policies,techs,upgrades,zebraUpgrades };\n`,
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
            crafts?: Array<UnsafeCraft>;
            policies?: Array<UnsafePolicy>;
            techs?: Array<UnsafeTech>;
            upgrades?: Array<UnsafeUpgrade>;
            zebraUpgrades?: Array<UnsafeZebraUpgrade>;
          },
        ) => {
          switch (id) {
            case "classes.managers.WorkshopManager":
              dumpAnyToFile("crafts", metadataToHash(mustExist(decl.crafts)));
              dumpAnyToFile("upgrades", metadataToHash(mustExist(decl.upgrades)));
              dumpAnyToFile("zebraUpgrades", metadataToHash(mustExist(decl.zebraUpgrades)));

              break;
            case "classes.managers.ScienceManager":
              dumpAnyToFile("policies", metadataToHash(mustExist(decl.policies)));
              dumpAnyToFile("techs", metadataToHash(mustExist(decl.techs)));
              break;
          }
        },
      },
    },
    shimScience,
  );
  await import(resolve(join(gameRoot, "./js/science.js")));

  await import(resolve(join(gameRoot, "./js/workshop.js")));

  if (fileFormat === "esm") {
    writeFileSync("index.js", index.join("\n"));
  }
  process.stderr.write("Done.\n");
};

main().catch(redirectErrorsToConsole(console));
