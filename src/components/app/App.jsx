import React from 'react';
import Header from '../header';
import Introduction from '../introduction';
import About from '../about';
import Experience from '../experience';
import Work from '../work';
import Contact from '../contact';
import Footer from '../footer';

export default (props) => (
  <>
    {/* React Fragment shorthand */}
    <Header />
    <Introduction />
    <About />
    <Experience />
    <Work />
    <Contact />
    <Footer />
  </>
);
