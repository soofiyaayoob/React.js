import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import Hero from './components/Hero-section/hero';
import About from './components/About/about';
import LogoCarousal from './components/LogoCarousal/LogoCarousal';

function App() {
  return ( <>
    <div className="app">

<Navbar />
 <Hero />
 <About />
 <LogoCarousal/>
 <Hero />

    </div>
  </> );
}

export default App;