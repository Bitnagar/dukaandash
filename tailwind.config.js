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
          black: {
            12: "#1A181E",
            30: "#4D4D4D",
            90: "#E6E6E6",
            95: "#F2F2F2",
          },
          blue: "#146EB4",
          navbar: {
            background: "#1E2640",
            wallet: {
              DEFAULT: "#353C53",
              icon: "hsla(0, 0%, 100%, 0.1)",
            },
          },
        },
      },
    },
    boxShadow: {
      box_1: "0px 2px 6px 0px rgba(26, 24, 30, 0.04);",
    },

    borderColor: {
      black: {
        85: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
