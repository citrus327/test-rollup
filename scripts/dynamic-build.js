const { rollup } = require("rollup");
const targetFolder = require("path").basename(__filename).replace(".js", "");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");

/**
 * node api does not support array of input/output
 * see https://rollupjs.org/guide/en/#differences-to-the-javascript-api
 */
const outputOption = [
  /**
   * dynamic import will generate multiple chunks, use `dir` instead of `file`
   */
  {
    // file: `dist/${targetFolder}/index.js`,
    dir: `dist/${targetFolder}/cjs`,
    format: "cjs",
    exports: "auto",
  },
  {
    // file: `dist/${targetFolder}/index.js`,
    dir: `dist/${targetFolder}/esm`,
    format: "esm",
  },
  /**
   * one way to make file work is make `inlineDynamicImports` to be true, which make only one file with dynamic module inline
   */
  {
    // file: `dist/${targetFolder}/index.js`,
    dir: `dist/${targetFolder}/inline-esm`,
    format: "esm",
    inlineDynamicImports: true,
  },
];

rollup({
  input: `./src/${targetFolder}/index.js`,
  plugins: [commonjs(), json()],
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
  })
  .catch(console.error);
