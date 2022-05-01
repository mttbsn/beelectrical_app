import React from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

function App() {
  return (
    <>
    <ThemeProvider>
      <CSSReset>
      <p> hola mundo < /p>
    </ThemeProvider>
  );
}

export default App;
