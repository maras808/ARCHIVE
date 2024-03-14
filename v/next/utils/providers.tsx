"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme({
  textStyles: {
    headingoversize: {
      fontSize: { base: "6xl", md: "7xl", lg: "8xl" },
    },
    headingbig: {
      fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
    },
    headingmidbig: {
      fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
    },
    headingmid: {
      fontSize: { base: "2xl", md: "3xl", lg: "4xl" },
    },
    headingsmall: {
      fontSize: { base: "lg", md: "xl", lg: "2xl" },
    },
    textbig: {
      fontSize: { base: "md", md: "lg", lg: "xl" },
    },
    textmid: {
      fontSize: { md: "md", lg: "lg" },
    },
    textsmall: {
      fontSize: { md: "sm", lg: "md" },
    },
  },

  // layerStyles: {
  //   rdisplay: {
  //     display: { base: "none !important", md: "block !important" },
  //     bg: "blue",
  //   },
  // },

  colors: {
    dark: {
      100: "#323234",
      200: "#28282A",
      300: "#1E1E1F",
      400: "#141415", //bgc
      500: "#0A0A0A",
    },
    text: "#F8F9FA",
    blue: {
      100: "#8EBEF6",
      200: "#7CB4F4",
      300: "#69A9F2",
      400: "#4895EF",
      500: "#3189ED",
      600: "#1E7EEB",
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
      a: {
        color: "blue.100",
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
          color: "blue.500",
        },
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
        color: "blue.100",
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
          color: "blue.500",
        },
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "2xl",
          p: 6,
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
