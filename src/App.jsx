// App.js
import React from 'react';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills'
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Hero />
      <ProjectsSection />
      <Skills/>
    </ThemeProvider>
  );
};

export default App;
