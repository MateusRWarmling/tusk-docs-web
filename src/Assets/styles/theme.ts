import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  "2sm": "320px",
  md: "768px",
  lg: "960px",
  xl: "1250px",
  "2xl": "1536px",
});

export const theme = extendTheme({
  colors: {
    red: {
      "450": "#E65F5C",
    },
    blue: {
      "850": "#022e57",
    },
    gray: {
      "75": "#FFFFFF",
    },
  },
  fonts: {
    heading: "Mulish",
    body: "Mulish",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.75",
        color: "black",
      },
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: "none",
          cursor: "pointer",
        },
      },
    },
  },
  breakpoints,
});
