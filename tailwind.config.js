/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bl-primary": "#121212",
        "bl-10": "#2c2c2c",
        "bl-30": "#151515",
        "bl-50": "##F2F1F2",
        "bl-80": "0D0D0D",
        "bl-100": "#040404",
        "wh-50": "#FBFCF8",
        "wh-100": "#FFFFFF",
        "wh-10": "#e4ddf4",
        "accent-red": "#EA9648",
        "hot-red" : "#c80815",
        "accent-orange": "#F6CF68",
        "accent-green": "#00FF00",
        "accent-gold" : '#D4AF37'
      },
      backgroundImage: (theme) => ({
        "gradient-gradual":
          "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
      }),
      backgroundImage: (theme) => ({
        "gradient-black":
          "linear-gradient(180deg, #121212 66.15%, #000000 100%)",
      }),
    },
    //The gradient starts with a transparent color (rgba(116, 116, 116, 0)) at 0% opacity and gradually transitions to a solid black color (#000000) at 100% opacity. The 180deg specifies the angle of the gradient, making it a vertical gradient from top to bottom.
    // By defining this custom background image variant, you can use it in your HTML or JSX code by applying the corresponding class name, like bg-gradient-gradual. This will add the defined gradient as the background image for the element using that class.
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    //This plugin adds utility classes for truncating multiline text with an ellipsis (...). It provides a convenient way to limit the number of lines displayed and show an ellipsis when the text exceeds the specified number of lines. For example, you can use the .line-clamp-2 class to truncate text after two lines.
    require("@tailwindcss/typography"),
    //This plugin enhances the typography-related styles in Tailwind CSS. It provides a set of utility classes for styling typography elements such as headings, paragraphs, lists, and more. It helps you quickly apply consistent and visually pleasing typography styles to your content.
    //Specially for html markup taht comes from backend as it cannot be styled with normal tailwind
  ],
};
