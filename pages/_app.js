import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ 
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    heading: `'CraftworkSans-Bold', sans-serif`,
    body: `'CraftworkSans-Regular', sans-serif`
  }
})

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp;
