import React, { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/style.css';
import Contact from './components/Contact';
import Header from './components/Header';
import AboutMe from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function DarkModeToggle({ isDarkMode, toggleMode }) {
  return (
    <div
      className="toggle-btn"
      style={{
        position: 'fixed',
        right: '20px',
        top: '100px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: '0px solid #000',
        borderRadius: '50%'
      }}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </div>
  );
}

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setDarkMode(darkModeEnabled);
  }, []);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div style={{
      background: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? 'green' : '#000',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      
      <Header />
      <DarkModeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />

      <AboutMe />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
