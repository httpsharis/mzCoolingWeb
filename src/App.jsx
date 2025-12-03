import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans text-slate-600 antialiased selection:bg-brand-500 selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
