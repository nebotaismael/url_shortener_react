import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // these are the default breakpoints
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: true;
    laptop: true;
    desktop: true; // new breakpoint
    250: string;
  }
}

export const Colors = {
  prmiary: "#4169E1",
  PrimaryDark: "#17637B",
  PrimaryLight: "#05BCF5",
  secondary: "#0B323F",
  secondDark: "#1E70A8",
  secondLight: "#1675B7",
  FaqText: "#828384",
  FaqHeading: "#A8A8A8",
  privacyDetail: "#767676",
  FaqIcon: "#8C8C8C",
  white: "#fff",
  black: "#000",
  sloidText: "#D9D9D9",
  blog: "#1675B7",
  blogHeadings: "#059FD0",
  blogNote: "#05BCF5",
  chip: "#E0E0E0",
  error: "#ABADAF",
  errorLink: "#E09B3D",
  browse: "#FEFEFE",
  backgroundLight: "#FDFDFE",
  backgroundDark: "#202020",
  warning: "rgba(255, 255, 255, 0.6)",
  reset: "#5D5D5D",
  purpose: "#21AAE1",
  mobile: "#444444",
  contact: "#EFEFEF",
  componentBackground: "#F6F6F6",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.prmiary,
      dark: Colors.PrimaryDark,
      light: Colors.PrimaryLight,
    },
    secondary: {
      main: Colors.secondary,
      dark: Colors.secondDark,
      light: Colors.secondLight,
    },
    warning: {
      main: Colors.warning,
      dark: Colors.mobile,
      light: Colors.contact,
    },
    info: {
      main: Colors.blog,
      dark: Colors.blogHeadings,
      light: Colors.blogNote,
    },
    grey: {
      50: Colors.FaqText,
      100: Colors.FaqHeading,
      200: Colors.FaqIcon,
      300: Colors.chip,
      400: Colors.privacyDetail,
      500: Colors.error,
      600: Colors.errorLink,
      700: Colors.browse,
      800: Colors.reset,
      900: Colors.purpose,
    },
    text: {
      primary: Colors.black,
      secondary: Colors.white,
    },
    background: {
      paper: Colors.backgroundLight,
      default: Colors.backgroundDark,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 769, // custom breakpoint
      laptop: 1024, // custom breakpoint
      desktop: 1440, // custom breakpoint
    },
  },
});
export default theme;
export const darkColors = {
  prmiary: "#0b2433",
  PrimaryDark: "#1573AE",
  PrimaryLight: "#05BCF5;",
  secondary: "#1982a5",
  secondDark: "#1E70A8",
  secondLight: "#1675B7",
  FaqText: "#ebe8e8",
  FaqHeading: "#c2c2c2",
  privacyDetail: "#c9c9c9",
  FaqIcon: "#cccaca",
  white: "#ffffff",
  black: "#000",
  sloidText: "#D9D9D9",
  blog: "#0e3552",
  blogHeadings: "#059FD0",
  blogNote: "#05BCF5",
  chip: "#2b2a2a",
  error: "#ABADAF",
  errorLink: "#E09B3D",
  browse: "#FEFEFE",
  backgroundLight: "#202020",
  backgroundDark: "#FDFDFE",
  warning: "#202020",
  reset: "#ebe8e8",
  purpose: "#202020",
  mobile: "#7e7e7e",
  contact: "#292929",
};
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: darkColors.prmiary,
      dark: darkColors.PrimaryDark,
      light: darkColors.PrimaryLight,
    },
    secondary: {
      main: darkColors.secondary,
      dark: darkColors.secondDark,
      light: darkColors.secondLight,
    },
    warning: {
      main: darkColors.warning,
      dark: darkColors.mobile,
      light: darkColors.contact,
    },
    info: {
      main: darkColors.blog,
      dark: darkColors.blogHeadings,
      light: darkColors.blogNote,
    },
    grey: {
      50: darkColors.FaqText,
      100: darkColors.FaqHeading,
      200: darkColors.FaqIcon,
      300: darkColors.chip,
      400: darkColors.privacyDetail,
      500: darkColors.error,
      600: darkColors.errorLink,
      700: darkColors.browse,
      800: darkColors.reset,
      900: darkColors.purpose,
    },
    text: {
      primary: darkColors.white,
      secondary: darkColors.black,
    },
    background: {
      paper: Colors.backgroundDark,
      default: Colors.backgroundDark, // set the default background color to dark
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 769, // custom breakpoint
      laptop: 1024, // custom breakpoint
      desktop: 1440, // custom breakpoint
    },
  },
});
