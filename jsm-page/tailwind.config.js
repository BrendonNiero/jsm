/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,razor}",
  ],
  theme: {
    colors: {
      "ashen-black" : "#323635",
      "white" : "#fff",
      "misty-blue" : "#7289b9",
      "bright-azure" : "#397efc",
      "azure-depths" : "#2355da",
      "deep-sea" : "#041740",
      "cloud-white" : "#f2f8f8",
      "smoke" : "#5d5d5d",
      "light-gray" : "#d3d3d3",
      "black" : "#000",
      "davys-gray" : "#595959"
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}

