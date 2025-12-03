import React from 'react';
import { Wrench, RefreshCw, BarChart2 } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Services</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Beyond Manufacturing</h3>
                    </div>
                    <p className="max-w-md text-slate-500 text-sm leading-relaxed pb-2">
                        We don't just sell products; we provide a complete lifecycle of support ensuring your cooling systems operate at maximum efficiency for decades.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                            <Wrench className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Maintenance & Repair</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Scheduled preventive maintenance and 24/7 emergency repairs to minimize downtime and extend equipment life.</p>
                    </div>

                    {/* Service 2 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                            <RefreshCw className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Overhauling & Upgrades</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Revitalize aging cooling towers with modern PVC fills and high-efficiency motors to restore original performance.</p>
                    </div>

                    {/* Service 3 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                            <BarChart2 className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Efficiency Audit</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Detailed thermal analysis and water quality testing to identify inefficiencies and recommend cost-saving optimizations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
