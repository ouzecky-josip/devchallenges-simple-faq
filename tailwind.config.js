/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                main: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
            },
            colors: {
                'text-color': '#030616',
                'link-color': '#4E80EE',
                'gray-light': '#D2D5DA',
                'gray-lighter': '#F8FAFC',
            },
        },
    },
    plugins: [],
};
