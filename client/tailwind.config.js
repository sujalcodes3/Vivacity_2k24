/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                mabry: ['Mabry Pro', 'sans-serif'],
                grobold: ['Grobold', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                rocketship : ['Supersonic Rocketship','sans-serif']
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(400%)' },
                    '100%': { transform: 'translateX(800%)' },
                },
            },
            animation: {
                slide: 'slide 1s linear infinite',
            },
            colors: {
                navButtonYellow: '#FFF6A2',
                actionButtonYellow: '#FFE500',
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
