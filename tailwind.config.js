module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "small-shadow":
          "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%)",
      },
      boxShadow: {
        tab: "0 1px 3px 0 rgb(0 0 0 / 8%)",
      },
      height: {
        3000: "3000px",
        "arrow-height": "15px",
        tab: "0.22rem",
      },
      width: {
        "arrow-width": "15px",
      },
      minHeight: {
        66: "66px",
        380: "380px",
        1500: "1500px",
      },
      maxHeight: {
        500: "500px",
      },
      flexShrink: {
        4: "4",
      },
      inset: {
        66: "64px",
        drop: "calc(100% + 0.25rem)",
      },
      maxWidth: {
        750: "750px",
      },
      colors: {
        back: "rgba(255, 255, 255, 0.95)",
      },
      fontSize: {
        17: "17px",
      },
      lineHeight: {
        22: "22px",
        48: "48px",
      },
      zIndex: {
        "-1": "-1",
      },
      minWidth: {
        172: "172px",
      },
      transform: {
        "-1": "translateY(-1px)",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
