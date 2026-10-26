import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { redact } from "@tanstack/redact/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

const config = defineConfig({
  lint: {
    categories: { correctness: "deny" },
    plugins: ["eslint", "typescript", "oxc"],
    options: { reportUnusedDisableDirectives: "warn" },
    rules: {
      "oxc/no-accumulating-spread": "error",
      "eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "typescript/no-explicit-any": "allow",
      "typescript/no-non-null-assertion": "warn",
    },
    ignorePatterns: [
      "**/routeTree.gen.ts",
      "worker-configuration.d.ts",
      "**/dist/**",
      "**/.wrangler/**",
      "**/.output/**",
    ],
  },
  fmt: {
    printWidth: 100,
    semi: true,
    singleQuote: false,
    sortImports: true,
    sortPackageJson: true,
    trailingComma: "all",
    ignorePatterns: [
      "**/*.md",
      "**/routeTree.gen.ts",
      "worker-configuration.d.ts",
      "**/src/styles.css",
      "**/dist/**",
      "**/.wrangler/**",
      "**/.output/**",
    ],
  },

  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    noExternal: true,
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    viteReact(),
    redact(),
  ],
});

export default config;
