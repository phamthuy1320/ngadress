import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import { CartContextProvider } from "../src/contexts/CartContext";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
