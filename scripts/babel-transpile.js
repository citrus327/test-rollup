const { rollup } = require("rollup");
const targetFolder = require("path").basename(__filename).replace(".js", "");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");

/**
 * node api does not support array of input/output
 * see https://rollupjs.org/guide/en/#differences-to-the-javascript-api
 */
const outputOption = [
  {
    file: `dist/${targetFolder}/index.js`,
    format: "cjs",
    exports: "auto",
  },
  {
    file: `dist/${targetFolder}/index.esm.js`,
    format: "esm",
  },
];

rollup({
  input: `./src/${targetFolder}/index.js`,
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
      ],
      targets: "chrome >= 38",
    }),
  ],
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
