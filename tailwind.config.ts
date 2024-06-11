import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#6259E8',
				['primary-text']: '#BFECFF'
			},
			container: {
				center: true,
				padding: '1rem'
			}
		}
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		nextui()
	]
}
export default config
