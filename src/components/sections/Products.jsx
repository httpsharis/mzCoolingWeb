import { ArrowRight } from 'lucide-react';
import RactangleCooler from "../../assets/ractangularCooler.png";
import CircularCooler from "../../assets/CircularCooler.png";
import SquareCooler from "../../assets/squareCooler.jpg";

const Products = () => {
    return (
        <section id="products" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Our Product Range
                    </h2>
                    <p className="text-lg text-slate-600">
                        Specialized cooling solutions designed for maximum efficiency and durability in Pakistan's climate.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-4/3 bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src={CircularCooler}
                                loading="lazy"
                                alt="Round Bottle Type Cooling Tower Pakistan"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                    Best Seller
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                                Bottle Type Cooling Tower
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
                                High-efficiency counter-flow design with fiberglass body. Ideal for industrial applications requiring compact footprint and corrosion resistance.
                            </p>
                            <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold text-sm group/link">
                                Get Specifications <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-4/3 bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src={RactangleCooler}
                                loading="lazy"
                                alt="Rectangular Industrial Cooling Tower in Lahore"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                                Rectangular Cooling Tower
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
                                Large capacity cross-flow or counter-flow designs. Perfect for heavy industrial use, power plants, and large HVAC systems.
                            </p>
                            <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold text-sm group/link">
                                Get Specifications <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-200/60 flex flex-col h-full">
                        <div className="aspect-4/3 bg-slate-200 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                            <img
                                src={SquareCooler}
                                loading="lazy"
                                alt="Square Type Cooling Tower"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                                Square Cooling Tower
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
                                Durable square design for efficient cooling in various industrial settings.
                            </p>
                            <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold text-sm group/link">
                                Get Specifications <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
