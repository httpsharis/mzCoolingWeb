import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import RactangleCooler from "../assets/ractangularCooler.png";
import CircularCooler from "../assets/CircularCooler.png";

import FanImage from "../assets/fan.png";
import MotorImage from "../assets/mzMotor.png";
import JunctionImage from "../assets/junction.png";
import FilterImage from "../assets/filter.png";

import FillsImage from "../assets/mzFills.png";

const AllProducts = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            title: "Bottle Type Cooling Tower",
            desc: "High-efficiency counter-flow design with fiberglass body. Ideal for industrial applications requiring compact footprint and corrosion resistance.",
            image: CircularCooler,
            tag: "Best Seller"
        },
        {
            title: "Rectangular Cooling Tower",
            desc: "Large capacity cross-flow or counter-flow designs. Perfect for heavy industrial use, power plants, and large HVAC systems.",
            image: RactangleCooler
        }
    ];

    const accessories = [
        {
            title: "Cooling Tower Net",
            desc: "Durable protective nets to prevent debris accumulation and ensure smooth operation.",
            image: FilterImage
        },
        {
            title: "PVC Fills",
            desc: "High-performance honeycomb PVC fills for maximum heat transfer efficiency.",
            image: FillsImage
        },
        {
            title: "Aluminium Fans",
            desc: "Aerodynamically designed alloy fans for low noise and high airflow.",
            image: FanImage
        },
        {
            title: "Electric Motors",
            desc: "High-efficiency motors designed specifically for cooling tower applications.",
            image: MotorImage
        },
        {
            title: "Junction Box",
            desc: "Weather-proof junction boxes for safe electrical connections.",
            image: JunctionImage
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans text-zinc-600 antialiased selection:bg-brand-500 selection:text-white bg-white">
            <Navbar />
            <main className="pt-20 grow">
                {/* Header */}
                <section className="bg-zinc-900 py-20 text-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Products & Accessories
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Comprehensive cooling solutions and high-quality spare parts for your industrial needs.
                        </p>
                    </div>
                </section>

                {/* Products Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 border-b border-zinc-100 pb-4">
                            <h2 className="text-3xl font-display font-bold text-zinc-900">Cooling Towers</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-zinc-200/60 flex flex-col h-full">
                                    <div className="aspect-4/3 bg-zinc-200 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition-colors z-10"></div>
                                        <img
                                            src={product.image}
                                            loading="lazy"
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {product.tag && (
                                            <div className="absolute bottom-4 left-4 z-20">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                                    {product.tag}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-brand-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-zinc-600 mb-4 text-sm leading-relaxed grow">
                                            {product.desc}
                                        </p>
                                        <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold text-sm group/link">
                                            Get Quote <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Accessories Section */}
                <section className="py-20 bg-zinc-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 border-b border-zinc-200 pb-4">
                            <h2 className="text-3xl font-display font-bold text-zinc-900">Spare Parts & Accessories</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {accessories.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-zinc-100">
                                    <div className="mb-4 bg-brand-50 w-24 h-24 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 mb-2 text-center">{item.title}</h3>
                                    <p className="text-sm text-zinc-600 text-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AllProducts;
