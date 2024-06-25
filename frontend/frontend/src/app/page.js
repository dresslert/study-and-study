import React from 'react';
import RootLayout from '../app/layout';
import { ThemeProvider } from 'styled-components';

// Definindo o tema diretamente aqui
const theme = {
  colors: {
    primary: '#00ff00',
    background: '#000',
    cardBg: '#111',
    text: '#fff',
    subtext: '#bbb',
    hover: '#7a00ff',
  },
  fonts: ['Roboto', 'Arial', 'sans-serif'],
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
