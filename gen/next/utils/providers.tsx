"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme({
  colors: {
    text: "#F8F9FA",
    textDark: "#000000",
    bg: "#E18D66",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "borderBox",
        padding: 0,
        margin: 0,
      },
      body: {
        color: "textDark",
        backgroundColor: "bg",
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
