/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DanaBold: "dana bold",
        DanaMedium: "dana medium",
        DanaRegular: "dana regular",
      },
      colors: {
        textColor: "#242424",
        bg1: "#D21919",
      },
      boxShadow: {
        Normul: "0 0 5px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
