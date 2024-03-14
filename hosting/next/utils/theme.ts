import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

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
    custom: Omit<Palette["primary"], "contrastText">;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: Omit<Palette["primary"], "contrastText">;
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
          color: grey[50],
        },
      }),
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    custom: {
      main: "#1c1c21",
      dark: "#131316",
      light: "#26262c",
    },
  },
});

export default theme;
