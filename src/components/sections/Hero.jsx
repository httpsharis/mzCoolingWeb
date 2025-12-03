import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[650px] flex items-center bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "linear-gradient(to right bottom, rgba(8, 47, 73, 0.9), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1565610850-2d8c36236b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 text-brand-300 text-sm font-semibold mb-8 fade-in-up">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                        </span>
                        ISO 9001:2015 Certified Manufacturer
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 fade-in-up delay-100 tracking-tight">
                        Engineered for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-teal-200">Maximum Cooling.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed fade-in-up delay-200">
                        Pakistan's premier manufacturer of high-efficiency Induced Draft Bottle & Rectangular Cooling Towers. Delivering robust thermal solutions to Lahore, Karachi, and Islamabad since 2003.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
                        <a href="#contact" className="group px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg shadow-lg shadow-brand-900/50 transition-all text-center flex items-center justify-center gap-2">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#products" className="px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-all text-center">
                            Explore Products
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full border-t border-white/10 bg-slate-950/40 backdrop-blur-md hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-4 gap-12">
                        <div className="text-center group">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">20+</p>
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Years Excellence</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">10k+</p>
                            <p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Projects Delivered</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">100%</p>
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Client Satisfaction</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">24/7</p>
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
