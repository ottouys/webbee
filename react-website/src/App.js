import React, { Fragment } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Footer } from './components/layout/Footer';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {  

  return (
    <div className="App">
      <Navbar/>
      <Fragment>
        <Hero />
        <About />
        <WhyChooseUs />
      </Fragment>
      <Footer />
    </div>
  );
}

export default App;
