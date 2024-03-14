"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme({
  colors: {
    text: "#F8F9FA",
    textDark: "#000000",
    main: {
      100: "#454E5F",
      200: "#3C4453",
      300: "#333A47",
      400: "#2B303A", //bg
      500: "#22272F",
      600: "#1A1D23",
      700: "#111317",
    },
  },
  styles: {
    global: {
      "*": {
        boxSizing: "borderBox",
        padding: 0,
        margin: 0,
      },
      body: {
        color: "text",
        backgroundColor: "main.400",
      },
      html: {
        scrollSnapType: "y proximity",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: "8xl",
        paddingX: 2,
      },
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
