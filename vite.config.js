import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	base: '/meme-generator/',
	build: {
		outDir: 'dist',
		assetsDir: 'assets', 
	},
	plugins: [
		react()
	]
})