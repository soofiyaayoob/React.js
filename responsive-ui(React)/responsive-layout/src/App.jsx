import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import Hero from './components/Hero-section/hero';
import About from './components/About/about';
import LogoCarousal from './components/LogoCarousal/LogoCarousal';
import WorkFlow from './components/WorkFlow/WorkFlow';
import Portfolio from './components/portfolio/Portfolio';
import Benefits from './components/Benefits/Benefits';
import Services from './components/service/Services';
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/Testmonials/Testimonial';
import FaqSection from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
Pricing
function App() {
  return ( <>
    <div className="app">

<Navbar />
 <Hero />
 <About />
 <LogoCarousal/>
 <WorkFlow/>
<Portfolio/>
<Benefits/>
<Services/>
<Pricing/>

<Testimonial/>
<FaqSection/>
<Footer/>
    </div>
  </> );
}

export default App;