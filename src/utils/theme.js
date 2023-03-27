import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#e3464c",
    200: "#ef2727",
    300: "#de1010",
    400: "#be0e0e",
    500: "#a20c0c",
    600: "#860a0a",
    700: "#6f0808",
    800: "#c30c0c",
    900: "#4c0606"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
