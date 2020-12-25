import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages';

const App = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const palletType = prefersDarkMode ? 'dark' : 'light';
  const mainPrimaryColor = prefersDarkMode ? '#222831' : '#459d72';
  const secondaryPrimaryColor = prefersDarkMode ? '#393e46' : '#90d26d';
  useEffect(() => {
    setPrefersDarkMode(Boolean(localStorage.getItem('prefersDarkMode')) || false);
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: secondaryPrimaryColor
      }
    }
  });
  const handleThemeChange = () => {
    const isDarkMode = !prefersDarkMode;
    setPrefersDarkMode(isDarkMode);
    localStorage.setItem('prefersDarkMode', String(isDarkMode));
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar handleThemeChange={handleThemeChange} prefersDarkMode={prefersDarkMode} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
