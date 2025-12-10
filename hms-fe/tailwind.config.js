/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'body': ['Poppins', 'sans-serif'],
                'sans': ['Poppins', 'sans-serif'],
                'heading': ['Merriweather', 'serif'],
            },
            colors: {
                primary: {
                    '50': '#f0fdfa',
                    '100': '#ccfbf1',
                    '200': '#99f6e4',
                    '300': '#5eead4',
                    '400': '#2dd4bf',
                    '500': '#14b8a6',
                    '600': '#0d9488',
                    '700': '#0f766e',
                    '800': '#115e59',
                    '900': '#134e4a',
                    '950': '#042f2e',
                },
                'neutral': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#000000',

                },
                'dark': "#212529",
                'light': "#F0F3FB"
            }
        },
    },
    plugins: [],
}