import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    desktop: true;
  }
}
const Colors = {
  primary: "hsl(180, 66%, 49%)",
  primaryDark: "hsl(257, 27%, 26%)",
  secondary: "hsl(0, 87%, 67%)",
  neutralGray: "hsl(0, 0%, 75%)",
  neutralGrayishViolet: "hsl(257, 7%, 63%)",
  neutralVeryDarkBlue: "hsl(255, 11%, 22%)",
  neutralVeryDarkViolet: "hsl(260, 8%, 14%)",
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    body1: {
      fontSize: '18px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 500,
    },
    h1: {
      fontSize: '40px',
      fontWeight: 900,
    },
    h2: {
      fontSize: '35px',
      fontWeight: 900,
    },
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.black,
      secondary: Colors.white,
    },
    background: {
      paper: Colors.neutralGray,
      default: Colors.neutralVeryDarkViolet,
    },
    grey: {
      500: Colors.neutralGrayishViolet,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      desktop: 1440,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: Colors.primaryDark,
      dark: Colors.primary,
      light: Colors.neutralGray,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.white,
      secondary: Colors.black,
    },
    background: {
      paper: Colors.neutralVeryDarkBlue,
      default: Colors.neutralVeryDarkViolet,
    },
    grey: {
      500: Colors.neutralGrayishViolet,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      desktop: 1440,
    },
  },
});

export default theme;