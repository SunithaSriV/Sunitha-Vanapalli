import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages';
import { lightBlue, orange } from '@material-ui/core/colors';

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? '#303030' : lightBlue[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    },
    primary: {
      main: mainPrimaryColor
    }
  });
  const handleThemChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar handleThemeChange={handleThemChange} darkState={darkState} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
