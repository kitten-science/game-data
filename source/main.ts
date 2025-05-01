import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { cwd } from "node:process";
import { UnsafeTech, UnsafeUpgrade } from "@kitten-science/kitten-scientists/types/index.js";
import { mustExist } from "@oliversalzburg/js-utils/data/nil.js";
import { redirectErrorsToConsole } from "@oliversalzburg/js-utils/errors/console.js";
import { shimScience } from "./shim-science.js";

const dumpTechs = (techs: Array<UnsafeTech>) => {
  const hash = Object.fromEntries(techs.map(_ => [_.name, _]));
  const hashJson = JSON.stringify(hash);
  writeFileSync("techs.json", hashJson + "\n");
};
const dumpUpgrades = (upgrades: Array<UnsafeUpgrade>) => {
  const hash = Object.fromEntries(upgrades.map(_ => [_.name, _]));
  const hashJson = JSON.stringify(hash);
  writeFileSync("upgrades.json", hashJson + "\n");
};

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
          decl: { techs?: Array<UnsafeTech>; upgrades?: Array<UnsafeUpgrade> },
        ) => {
          switch (id) {
            case "classes.managers.WorkshopManager":
              dumpUpgrades(mustExist(decl.upgrades));
              break;
            case "classes.managers.ScienceManager":
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
  process.stderr.write("Done.\n");
};

main().catch(redirectErrorsToConsole(console));
