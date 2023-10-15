/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient': 'linear-gradient(138deg, rgba(16,29,70,1) 0%, rgba(0,2,30,1) 100%)',
			},
			maxWidth: {
				'fit-content': 'min(100vw - 1.5rem, 100%)',
			},
		},
	},
	plugins: [],
}
