import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
