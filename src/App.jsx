// App.js
import React from 'react';
import Hero from './components/Hero';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
};

export default App;
