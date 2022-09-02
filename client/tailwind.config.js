module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "3xl": "0 4px 20px 2px rgba(0, 0, 0, 0.05)",
      },
    },
    colors: {
      "primary-color": "#43cfd9",
      "secondary-color": "#74d14c",
      transparent: "transparent",
      main: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
