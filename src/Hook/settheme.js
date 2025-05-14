import React, { useEffect, useState } from 'react'

const settheme = () => {
    const [darkMode, setDarkMode] = useState(() => {
  // Safely read from localStorage during initial state
  const saved = localStorage.getItem('darkMode');
  return saved ? JSON.parse(saved) : false;
});

useEffect(() => {

  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);

const toggleDarkMode = () => {
  setDarkMode(prev => !prev);
};

  return {
darkMode,
toggleDarkMode
  }
}

export default settheme