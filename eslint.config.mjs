import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The purchased template is read-only vendor code (AGENTS.md: never edit
    // anything inside /template) and public/ holds byte-identical copies of its
    // stylesheets. Linting either only produces noise about code we must not
    // touch — it was drowning the project's own findings ~100:1.
    "template/**",
    "public/**",
  ]),
]);

export default eslintConfig;
