/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1f33",
        paper: "#eef4f8",
        line: "#c9d8e4",
        brand: "#1d63ed",
        ok: "#1f8f5f",
      },
      fontFamily: {
        display: ['"Trebuchet MS"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-24px) scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
