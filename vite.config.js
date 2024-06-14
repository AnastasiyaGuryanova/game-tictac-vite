import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@helpers": "/src/helpers",
			"@constants": "/src/constants",
			"@actions": "/src/actions/actions.js",
			"@reduser": "/src/reducer/reducer.js",
			"@store": "/src/store/store.js",
		},
	},
});
