import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages';
import { lightBlue } from '@material-ui/core/colors';

const App = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const palletType = prefersDarkMode ? 'dark' : 'light';
  const mainPrimaryColor = prefersDarkMode ? '#303030' : lightBlue[500];

  useEffect(() => {
    setPrefersDarkMode(Boolean(localStorage.getItem('prefersDarkMode')) || false);
  }, []);

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    },
    primary: {
      main: mainPrimaryColor
    }
  });
  const handleThemeChange = () => {
    setPrefersDarkMode(!prefersDarkMode);
    localStorage.setItem('prefersDarkMode', String(!prefersDarkMode));
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar handleThemeChange={handleThemeChange} prefersDarkMode={prefersDarkMode} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
