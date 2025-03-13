import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        Button: path.resolve(__dirname, "src/components/Button.ts"),
      },
      formats: ["es"], // Only ES module
      fileName: (format, entry) => `${entry}.mjs`,
    },
  },
});
