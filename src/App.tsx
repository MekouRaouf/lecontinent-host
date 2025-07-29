import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingPlans from './components/PricingPlans';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PricingPlans />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;