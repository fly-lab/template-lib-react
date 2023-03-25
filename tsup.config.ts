import type { Options } from "tsup";

const config: Options = {
	entry: ["src/index.tsx"],
	dts: true,
	minify: "terser",
	format: ["iife", "cjs", "esm"],
};

export default config;
