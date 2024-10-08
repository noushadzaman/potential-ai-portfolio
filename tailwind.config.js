/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#FD6F00",
        p2: "#FFEBDB ",
        s1: "#000000",
        s2: "#1E1E1E",
        s3: "#424242",
        s4: "#545454",
        s5: "#AFAFAF",
        s6: "#EDECEC ",
        s7: "#F8F8F8 ",
        black: {
          DEFAULT: "#000000",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
