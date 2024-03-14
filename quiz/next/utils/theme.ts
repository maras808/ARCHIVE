import { createTheme } from "@mui/material";

import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: "400",
  fallback: ["roboto", "system-ui", "arial"],
  adjustFontFallback: false,
  display: "swap",
  variable: "--font-montserrat",
});

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: Palette["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          margin: 0,
          boxSizing: "border-box",
          backgroundColor: theme.palette.custom.main,
        },
      }),
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    custom: {
      main: "#3e4451",
      dark: "#2b303a",
      light: "#4e5767",
      contrastText: "#F8F9FA",
    },
  },
});

export default theme;
