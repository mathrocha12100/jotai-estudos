import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rawPlugin from 'vite-raw-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		rawPlugin({
			fileRegex: /\.txt$/i,
		}),
	],
});
