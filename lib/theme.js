import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        light: "#FCD8AA",
        main: "#E9B97D",
        dark: "#CB9756",
      },
      background: {
        paper: "#1F1F27",
        default: "#35353D",
      },
      text: {
        primary: "#F1EBE6",
        secondary: "#B1ABA5",
      },
    },
  })
);

export default theme;
