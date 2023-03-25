import type { Options } from 'tsup';

const config: Options = {
	entry: ["src/index.ts"],
	dts: true,
    minify: "terser",
};

export default config;