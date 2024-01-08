/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: {
            80: "hsla(0, 0%, 80%, 1)",
          },
          navbar: {
            background: "#1E2640",
            wallet: {
              icon_bg: "hsla(0, 0%, 100%, 0.1)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
