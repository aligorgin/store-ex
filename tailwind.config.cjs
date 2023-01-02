/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'hue-animation': 'huer 2s linear infinite'
			},
			keyframes: {
				huer: {
					'0%': { filter: 'hue-rotate(-1turn)' },
					'100%': { filter: 'hue-rotate(1turn)' },
				}
			}
		}
	},
	plugins: []
};
