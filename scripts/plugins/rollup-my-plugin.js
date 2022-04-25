/**
 * @returns {import("rollup").Plugin}
 */
function myPlugin() {
  let ctx = null;
  return {
    name: "rollup-my-plugin",
    buildStart() {
      console.log("build-start");
      ctx = this;
    },
    resolveId(source, importer, options) {
      console.log("-------------------------");
      console.log("resolve-id", source);
      // console.log("resolve-id", { source, importer, options });
      // console.log(ctx);
      return null;
    },
    load(id) {
      console.log("load", { id });
      // console.log(ctx);
      return null;
    },
    transform(code, id) {
      console.log("transform", id);
      console.log("-------------------------");
      // console.log("transform", { code, id });
      // console.log(code, id);
      return null;
    },

    moduleParsed() {
      console.log("module-parsed", this.getModuleInfo());
    },
    resolveDynamicImport(specifier, importer) {
      console.log("resolveDynamicImport", specifier, importer);
    },
    buildEnd() {
      console.log("build-end");
      // console.log(ctx);
    },
  };
}

exports.myPlugin = myPlugin;
