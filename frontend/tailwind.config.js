module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#6c757d",
        pink_900: "#9a2a3e",
        gray_900: "#2a2a2a",
        bluegray_100: "#d9d9d9",
        black_900_3f: "#0000003f",
        gray_300: "#dadada",
        gray_50: "#f8f9fa",
        teal_400: "#2a9a86",
        gray_600_a2: "#6c757da2",
        black_900: "#000000",
        bluegray_400: "#8c9399",
        cyan_800: "#1b728e",
        indigo_700: "#2b579a",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius4: "4px",
        radius7: "7px",
        radius25: "2.5px",
        radius50: "50%",
        radius75: "7.5px",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};