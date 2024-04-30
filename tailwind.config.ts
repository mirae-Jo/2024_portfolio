import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in-slow": "fade-in 1.5s 1s forwards",
        "bounce-horizontal": "bounce-horizontal 1s 0.75s infinite",
      },
      colors: {
        "main-blue": "#0077B9",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        "bounce-horizontal": {
          "0%,100%": {
            transform: "translateX(-1rem)",
          },
          "50%": {
            transform: "translateX(1rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
