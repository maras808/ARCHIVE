"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme({
  colors: {
    dark: {
      100: "#323234",
      200: "#28282A",
      300: "#1E1E1F",
      400: "#141415", //bgc
      500: "#0A0A0A",
    },
    text: "#F8F9FA",
    link: {
      100: "#8EBEF6",
      200: "#3189ED",
    },
    primary: {
      100: "#E26575",
      200: "#DE5466",
      300: "#DB4357",
      400: "#D83148", //main
      500: "#CE273D",
      600: "#BC2438",
    },
  },
  styles: {
    global: {
      body: {
        maxWidth: `100vw`,
        color: "text",
        bg: "dark.400",
      },
      html: {
        colorScheme: "dark !important",
        scrollSnapType: "y proximity",
      },
      "*": {
        boxSizing: "borderBox",
        padding: 0,
        margin: 0,
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "link.100",
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
          color: "link.200",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "8xl",
        px: 8,
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bgColor: "dark.300",
          border: "solid 1px",
          borderColor: "dark.100",
          a: {
            w: "100%",
            color: "text",
            _hover: { color: "text" },
          },
        },
        item: {
          bgColor: "dark.300",
          _hover: {
            bgColor: "dark.200",
          },
        },
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "2xl",
          p: 5,
        },
        md: {
          fontSize: "xl",
          p: 4,
        },
        sm: {
          fontSize: "lg",
          p: 3,
        },
      },
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
