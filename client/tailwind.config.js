/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                /* Hide scrollbar for Chrome, Safari and Opera */
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none',
                },

                /* Hide scrollbar for IE, Edge and Firefox */
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none' /* IE and Edge */,
                    'scrollbar-width': 'none' /* Firefox */,
                },
            });
        }),
    ],
};
