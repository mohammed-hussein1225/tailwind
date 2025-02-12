/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/html/index.html", "./public/js/*.js"],
  theme: {
    extend: {
      colors: {
        link: "#2c4755",
        text: "#777777",
        icon: "#10cab7",
        bg: "#f6f6f6",
        specail: "#ebeced",
        footer: "#2c4755",
      },
      fontFamily: {
        fontbody: "roboto",
      },
    },
  },
  plugins: [],
};
