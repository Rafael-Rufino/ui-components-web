import typescript from "@rollup/plugin-typescript";
/* eslint-disable import/no-anonymous-default-export */
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss"; // import postcss plugin
import { babel } from "@rollup/plugin-babel";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/main.ts",
    output: [
      {
        file: "public/bundle.js",
        format: "esm",
        banner: "/* eslint-disable */",
        sourcemap: true,
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss(), // use postcss plugin
      del({ targets: ["dist/*", "playground/src/component-lib"] }),
      typescript({
        include: ["src/**/*.ts"],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      production && terser({ format: { comments: false } }),
    ],
  },
];
