/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				"custom-teal": "#3cbdb1",
				"custom-gold": "#c8a217",
			},
			fontFamily: {
				'websiteFont': ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
			}
		},
	},
	plugins: [],
}

