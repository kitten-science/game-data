import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import {
  UnsafePolicy,
  UnsafeTech,
  UnsafeUpgrade,
} from "@kitten-science/kitten-scientists/types/index.js";
import { mustExist } from "@oliversalzburg/js-utils/data/nil.js";
import { redirectErrorsToConsole } from "@oliversalzburg/js-utils/errors/console.js";
import { shimScience } from "./shim-science.js";

const dumpPolicies = (root: Array<UnsafePolicy>) => {
  dumpAnyToFile("policies.js", Object.fromEntries(root.map(_ => [_.name, _])));
};
const dumpTechs = (root: Array<UnsafeTech>) => {
  dumpAnyToFile("techs.js", Object.fromEntries(root.map(_ => [_.name, _])));
};
const dumpUpgrades = (root: Array<UnsafeUpgrade>) => {
  dumpAnyToFile("upgrades.js", Object.fromEntries(root.map(_ => [_.name, _])));
};
const dumpAnyToFile = (filename: string, content: unknown) => {
  const hashJson = JSON.stringify(content, undefined, 4);
  writeFileSync(filename, `export default ${hashJson};\n`);
};

const index = [
  `import policies from "./policies.js";`,
  `import techs from "./techs.js";`,
  `import upgrades from "./upgrades.js";`,
  `export { policies,techs,updates };\n`,
];

const gameRoot = process.argv[2] ?? process.cwd();

const main = async () => {
  Object.assign(
    globalThis,
    {
      $I: () => "",
      dojo: {
        declare: (
          id: string,
          _supers: unknown,
          decl: {
            policies?: Array<UnsafePolicy>;
            techs?: Array<UnsafeTech>;
            upgrades?: Array<UnsafeUpgrade>;
          },
        ) => {
          switch (id) {
            case "classes.managers.WorkshopManager":
              dumpUpgrades(mustExist(decl.upgrades));
              break;
            case "classes.managers.ScienceManager":
              dumpPolicies(mustExist(decl.policies));
              dumpTechs(mustExist(decl.techs));
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
