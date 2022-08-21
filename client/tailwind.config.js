/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      main: "#699BF7",
      indigo: "#6366F1",
      "prpl-button": "#7e5bef",
      "bg-red": "#e39695",
      "font-red": "#d7263d",
      "bg-green": "#9ef01a",
      "font-green": "#008000",
      "gray-dark": "#111827",
      gray: "#6B7280",
      "gray-light": "#E5E7EB",
      "gray-xlight": "#F9FAFB",
    },
    extend: {
      backgroundImage: {
        banner:
          "url('https://res.cloudinary.com/dgn4bscl4/image/upload/v1660900370/1152-blue-waves_th7lql.gif')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
