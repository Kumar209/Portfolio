import React from 'react';
import './App.css';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Features from './Component/Features/Features';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App