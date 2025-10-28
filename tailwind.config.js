/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
                "dance-all": "dance-all 1s ease-in-out infinite",
                "page-flip": "page-flip 3s ease-in-out forwards",
                "slide": "slide 9s linear infinite",
            },
            keyframes: {
                "text-reveal": {
                    "0%": {
                        transform: "translateY(100%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                },
                "dance-all": {
                    "0%, 100%": { transform: "translate(0, 0)" },
                    "25%": { transform: "translate(10px, -10px)" },
                    "50%": { transform: "translate(-10px, 10px)" },
                    "75%": { transform: "translate(-10px, -10px)" },
                },
                "page-flip": {
                    "0%, 100%": {
                        transform: "rotateY(0deg)",
                        opacity: 1,
                    },
                    "50%": {
                        transform: "rotateY(180deg)",
                        opacity: 0.5,
                    },
                },
                "slide": {
                    "0%, 33%": { transform: "translateY(100%)", opacity: 0.1 },
                    "38%, 62%": { transform: "translateY(0)", opacity: 1 },
                    "67%, 100%": { transform: "translateY(-100%)", opacity: 0.1 },
                },
            },
            opacity: {
                15: '0.15',
            },
        },
    },
    plugins: [],
};
