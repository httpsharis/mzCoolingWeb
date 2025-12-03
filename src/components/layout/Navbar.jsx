import React, { useState, useEffect } from 'react';
import { Snowflake, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md' : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <a href="#home" className="flex-shrink-0 flex items-center gap-2 group" aria-label="MZ Cooling Tower Home">
                        <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
                            <Snowflake className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl text-slate-900 leading-none tracking-tight">MZ</span>
                            <span className="text-[10px] font-bold text-brand-600 tracking-[0.2em] uppercase">Cooling Tower</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="px-6 py-2.5 rounded-full bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5">
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-900 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl origin-top animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-brand-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block mt-4 px-5 py-3 text-center rounded-lg bg-brand-600 text-white font-semibold shadow-md active:scale-95 transition-transform"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;