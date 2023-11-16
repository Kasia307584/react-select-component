import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  external: ["react"],
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    globals: {
      react: "React",
    },
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
