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
      indigo: "#125ec0",
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
          "url('https://res.cloudinary.com/dmpn6t2jn/image/upload/v1661246827/animation_640_l75xxtyb_sk2rcl.gif')",
        gradient:
          "url('https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif')",
      },
      gradient:
        "url('https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif')",
      heroBanner: "url('./src/assets/images/hero.svg')",
      dropShadow: {
        '3xl': '2px 5px 6px #000000',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
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
