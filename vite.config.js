import { defineConfig } from "vite";
import atomico from "@atomico/plugin-vite";

export default defineConfig({
	base: "/schedule-register-app/",
	build: {
		target: "esnext",
	},
	plugins: [
		atomico({
			jsx: true, // default true
			cssLiterals: {
				minify: true, // default false
				postcss: true, // default false
			},
		}),
	],
});
