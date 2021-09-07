import { extendTheme, Theme } from "@chakra-ui/react";
import { customColors } from "./colors";
import { components } from "./components";

export const theme: Theme = extendTheme({
  colors: {
    ...customColors,
  },
  components: {
    ...components,
  },
  styles: {
    global: ({ colorMode }) => ({
      "*": {
        fontFamily: "'Open Sans', sans-serif",
      },
      body: {
        background: `background.${colorMode}.main`,
      },
      ul: {
        background: `background.${colorMode}.card`,
      },
    }),
  },
});
