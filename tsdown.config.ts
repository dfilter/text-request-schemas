import { defineConfig } from "tsdown";

export default defineConfig([
  {
    external: ["zod", "uuid"],
    entry: ["./src/index.ts"],
    platform: "neutral",
    dts: true,
  },
]);
