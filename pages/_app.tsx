import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import client from "../lib/graphql";

import 'tailwindcss/tailwind.css'
import {ChakraProvider} from "@chakra-ui/provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
