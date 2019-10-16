import React from 'react';
import Header from '../header';
import Introduction from '../introduction';
import About from '../about';
import Experience from '../experience';

export default (props) => (
  <>
    {/* React Fragment shorthand */}
    <Header />
    <Introduction />
    <About />
    <Experience />
  </>
);
