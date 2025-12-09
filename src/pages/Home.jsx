import React, { Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';

// Lazy load non-critical sections
const About = React.lazy(() => import('../components/sections/About'));
const Products = React.lazy(() => import('../components/sections/Products'));
const Services = React.lazy(() => import('../components/sections/Services'));
const Contact = React.lazy(() => import('../components/sections/Contact'));

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">
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
};

export default Home;
