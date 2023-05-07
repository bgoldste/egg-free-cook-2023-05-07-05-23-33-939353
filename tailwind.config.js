/** @type {import('tailwindcss').Config} */
import siteData from "./src/data/site_data.json";
console.log("HI");
console.log(siteData["color"]);
module.exports = {
  darkMode: 'mytheme',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [ siteData['theme'], "emerald"],
  },
  // daisyui: {
  //   themes: [
  //
  //     {
  //       mytheme: {
  //
  //         "primary": "#a8bcea",
  //
  //         "secondary": "#c067ea",
  //
  //         "accent": "#5329a0",
  //
  //         "neutral": "#242D33",
  //
  //         "base-100": "#2C3149",
  //
  //         "info": "#265AE8",
  //
  //         "success": "#19E173",
  //
  //         "warning": "#C48508",
  //
  //         "error": "#F24640",
  //
  //         // "primary": siteData['color'],
  //       },
  //     },
  //   ],
  // },
};
