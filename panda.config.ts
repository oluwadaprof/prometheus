import { pandadsui } from "@panda-ds-ui/theme/preset";
import { defineConfig } from "@pandacss/dev";


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: [pandadsui],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // CSS variables prefix
  prefix: "panda-ds",

  // Whether to minify the output
  minify: true,

  // The output directory for your css system
  outdir: "./src/panda-ds-ui/styled-system",

  // Polyfill CSS @layers at-rules for older browsers
  polyfill: true,

  // The output dir map
  importMap: "@panda-ds-ui/styled-system",
});
