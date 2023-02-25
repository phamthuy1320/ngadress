import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const sizes = {
  sm: "10px",
  md: "14px",
  lg: "16px",
};

const Icon = defineStyleConfig({
  baseStyle: {
    background: "transparent",
    padding: "0",
  },
});

const components = {
  Icon,
};
const theme = extendTheme({
  sizes,
  components,
});

export default theme;
