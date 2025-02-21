/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['active'],    // add active variant
        },
    },
    plugins: [
        require('tailwindcss-dark-mode')(),
    ],
}
