const { rollup } = require("rollup");
const targetFolder = require("path").basename(__filename).replace(".js", "");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

/**
 * node api does not support array of input/output
 * see https://rollupjs.org/guide/en/#differences-to-the-javascript-api
 */
const outputOption = [
  {
    file: `dist/${targetFolder}/index.js`,
    format: "cjs",
  },
  {
    file: `dist/${targetFolder}/index.esm.js`,
    format: "esm",
  },
];

rollup({
  input: `./src/${targetFolder}/index.js`,
  plugins: [nodeResolve(), commonjs()],
})
  .then(async (bundle) => {
    await Promise.all(
      outputOption.map(async (o) => {
        return await bundle.write(o);
      })
    );
    await bundle.close();
  })
  .then(() => {
    console.log("Done!");
  });

/**
 * bundle result
 * import { get } from "lodash-es"; // 511
 * import get from "lodash-es/get"; // 27
 * import { get } from "lodash"; // 561
 * import get from "lodash/get"; // 32
 */
