const colors = require('tailwindcss/colors');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'custom-green': '#87ae73',
				'custom-text-green': '#e3efde',
				'custom-footer-blue': '#f3f7f2',
				'custom-lightest-green': '#cdddc0'
			}
		}
	},

	plugins: []
};

module.exports = config;
