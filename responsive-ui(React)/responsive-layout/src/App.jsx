import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import Hero from './components/Hero-section/hero';
import About from './components/About/about';
function App() {
  return ( <>
    <div className="app">

<Navbar />
 <Hero />
 <About />
    </div>
  </> );
}

export default App;