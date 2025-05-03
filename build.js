import { redirectErrorsToConsole } from "@oliversalzburg/js-utils/errors/console.js";
import esbuild from "esbuild";

esbuild
  .build({
    bundle: true,
    entryPoints: ["./source/main.ts"],
    external: ["os", "./js/*"],
    format: "esm",
    outfile: "./output/main.js",
    platform: "node",
    target: "node18",
  })
  .catch(redirectErrorsToConsole(console));
