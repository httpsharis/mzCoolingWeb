import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

// Lazy load non-critical sections
const About = React.lazy(() => import('./components/sections/About'));
const Products = React.lazy(() => import('./components/sections/Products'));
const Services = React.lazy(() => import('./components/sections/Services'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <div className="font-sans text-slate-600 antialiased selection:bg-brand-500 selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <About />
          <Products />
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
