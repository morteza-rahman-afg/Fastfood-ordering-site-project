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
    },
  },
  plugins: [],
};
