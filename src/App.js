import React from 'react';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainScreen from './screens/MainScreen';

// Extend the theme with the colors you specified
const theme = extendTheme({
  colors: {
    primary: {
      500: "#2F855A" 
    },
    secondary: {
      500: "#A0AEC0" 
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
});

// Initialize react-query client
const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <QueryClientProvider client={queryClient}>
        <MainScreen />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
