const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                // background: "var(--background)",
                // foreground: "var(--foreground)",
                blue: "#5296C6",
                black: "#1F1F1F",
                white: "#FFFFFF",
                bgBase: "#E5EFF6",
                txtColor: "#9F9F9F",
                dotColor: "#CFE0EB"
            },
            backgroundImage: {
                callBg: "url('/assets/call-bg.png')"
            }
        },
    },
    darkMode: "class",
    important: true,
    plugins: [
        nextui({
            themes: {
                light: {
                    // ...
                    colors: {
                        white: "#FFFFFF",
                        default: "#fff"
                    },
                },
                dark: {
                    // ...
                    colors: {
                        white: "#FFFFFF",
                        default: "#fff"
                    },
                    
                },
            },
        }),
    ],
};
