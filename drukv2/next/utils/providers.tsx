"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
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
        img: {
          objectFit: "cover",
          objectPosition: "center",
          userSelect: "none",
          pointerEvents: "none",
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
      Menu: {
        baseStyle: {
          list: {
            bgColor: "main.300",
            border: "solid 1px",
            borderColor: "main.100",
            a: {
              w: "100%",
              color: "text",
              _hover: { color: "text" },
            },
          },
          item: {
            bgColor: "main.300",
            color: "text",
            _hover: {
              bgColor: "main.200",
            },
          },
        },
      },
    },
  },
  config
);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        ></ColorModeScript>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
