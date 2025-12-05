import React from 'react';
import { ArrowRight } from 'lucide-react';

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{prefix}{count}{suffix}</>;
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "linear-gradient(to right bottom, rgba(69, 10, 10, 0.9), rgba(24, 24, 27, 0.95)), url('https://images.unsplash.com/photo-1565610850-2d8c36236b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
            <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>

            <div className="grow flex items-center relative z-10 w-full pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <div className="mt-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 text-brand-300 text-sm font-semibold mb-8 fade-in-up">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                            </span>
                            Since 2003
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 fade-in-up delay-100 tracking-tight">
                            Engineered for <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-500 via-brand-400 to-brand-300">Maximum Cooling.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-light leading-relaxed fade-in-up delay-200">
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
            </div>

            <div className="w-full border-t border-white/10 bg-zinc-950/40 backdrop-blur-md hidden md:block relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-4 gap-12">
                        <div className="text-center group">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                                <Counter end={20} suffix="+" />
                            </p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Years Excellence</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                                <Counter end={10} suffix="k+" />
                            </p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Projects Delivered</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                                <Counter end={100} suffix="%" />
                            </p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Client Satisfaction</p>
                        </div>
                        <div className="text-center group border-l border-white/10">
                            <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                                <Counter end={24} suffix="/7" />
                            </p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
