import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  preserveModules: true,
  input: require.resolve("crocks"),
  output: {
    dir: ".",
    format: "esm",
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
