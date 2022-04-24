function virtual() {
  return {
    name: "rollup-my-virtual", // this name will show up in warnings and errors
    resolveId(source) {
      if (source === "virtual:batman") {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      if (id === "virtual:batman") {
        return 'export default "This is batman!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    },
  };
}

exports.virtual = virtual;
