import React from 'react';
import { Award, Zap } from 'lucide-react';
import AboutImage from '../../assets/about.png';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 relative z-10 shadow-2xl">
                            <img
                                src={AboutImage}
                                loading="lazy"
                                alt="MZ Cooling Tower manufacturing facility in Lahore"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-brand-100 rounded-3xl z-0"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl z-0"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">About MZ Cooling Tower</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-6 leading-tight">
                            Pioneering Industrial <br />Cooling Since 2003
                        </h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                            MZ Cooling Tower stands at the forefront of industrial cooling technology in Pakistan. We don't just assemble parts; we engineer high-efficiency ecosystems designed to withstand the rigorous demands of Pakistani industries.
                        </p>
                        <p className="text-zinc-600 mb-8 leading-relaxed">
                            From textile mills in Faisalabad to power plants in Karachi, our commitment to quality engineering, sustainable water usage, and thermal efficiency has made us the trusted partner for thousands of businesses.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-brand-200 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900">Certified Quality</h4>
                                    <p className="text-sm text-zinc-600">Manufactured using premium FRP materials resistant to corrosion and harsh weather conditions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-brand-200 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900">Energy Efficient</h4>
                                    <p className="text-sm text-zinc-600">Aerodynamic designs that reduce fan power consumption while maximizing heat transfer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
