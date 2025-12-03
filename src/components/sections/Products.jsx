import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
    return (
        <section id="products" className="py-24 bg-slate-50 relative">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Core Product Line</h3>
                    <p className="text-slate-600 text-lg">Engineered for durability, maintenance ease, and optimal thermal exchange.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1563200922-4416568297b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                loading="lazy"
                                alt="Round Bottle Type Cooling Tower Pakistan"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Best Seller</span>
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h4 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Bottle Type Tower</h4>
                            <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">Round induced draft design optimized for uniform water distribution. Ideal for small to medium industrial applications requiring compact footprints.</p>

                            <div className="border-t border-slate-100 pt-6 mt-auto">
                                <a href="#contact" className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 group/link">
                                    Request Specs <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661876547604-f87c47019623?q=80&w=2914&auto=format&fit=crop"
                                loading="lazy"
                                alt="Rectangular Industrial Cooling Tower in Lahore"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h4 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Rectangular Tower</h4>
                            <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">Heavy-duty rectangular design perfect for large scale industrial plants. Features modular construction allowing for easy capacity expansion.</p>

                            <div className="border-t border-slate-100 pt-6 mt-auto">
                                <a href="#contact" className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 group/link">
                                    Request Specs <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                loading="lazy"
                                alt="Cooling Tower Spare Parts and PVC Fills"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h4 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Parts & Accessories</h4>
                            <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">Comprehensive inventory of PVC fills, drift eliminators, sprinkler heads, aluminum fans, and IP55 motors.</p>

                            <div className="border-t border-slate-100 pt-6 mt-auto">
                                <a href="#contact" className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 group/link">
                                    View Catalog <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
