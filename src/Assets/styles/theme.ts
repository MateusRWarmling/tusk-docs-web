import { extendTheme } from "@chakra-ui/react";

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
});
