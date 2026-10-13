/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index-en.html"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        mist: "#a1a1aa",
        frost: "rgba(255,255,255,0.06)",
        line: "rgba(255,255,255,0.10)",
        glow: "#34d399"
      },
      fontFamily: {
        sans: ["Vazirmatn", "Inter", "system-ui", "sans-serif"],
        en: ["Inter", "Vazirmatn", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};
