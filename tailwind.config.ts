import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Sans"],
      },
      colors: {
        primary: colors.rose,
        secondary: colors.pink,
        gray: colors.gray,
      },
    },
  },
};
