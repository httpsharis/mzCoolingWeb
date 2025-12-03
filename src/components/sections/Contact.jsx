import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Send, Check, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetForm = () => {
        setIsSuccess(false);
        document.getElementById('contactForm').reset();
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/20 rounded-l-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-brand-400 font-bold tracking-widest uppercase text-xs mb-3">Contact Us</h2>
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">Let's Keep It Cool.</h3>
                        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                            Ready to upgrade your infrastructure? Our engineers are ready to provide a free site survey and quotation tailored to your specific thermal load requirements.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-lg">Head Office & Factory</h5>
                                    <p className="text-slate-400 mt-1 leading-relaxed">Main Ferozpur Road Bank Stop 2Km,<br />Ashiyana Road, Lahore, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-lg">Direct Line</h5>
                                    <a href="tel:+923214792393" className="block text-slate-300 mt-1 hover:text-white transition-colors">+92-321-4792393</a>
                                    <a href="tel:+923014792393" className="block text-slate-300 hover:text-white transition-colors">+92-301-4792393</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-lg">Email Us</h5>
                                    <a href="mailto:info@mzcoolingtower.com.pk" className="text-slate-400 mt-1 hover:text-white transition-colors">info@mzcoolingtower.com.pk</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900 shadow-2xl relative">
                        <h4 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h4>

                        <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="group focus-within:text-brand-600">
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide transition-colors group-focus-within:text-brand-600">Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium" placeholder="Your Name" />
                                </div>
                                <div className="group focus-within:text-brand-600">
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide transition-colors group-focus-within:text-brand-600">Phone</label>
                                    <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium" placeholder="0300-1234567" />
                                </div>
                            </div>
                            <div className="group focus-within:text-brand-600">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide transition-colors group-focus-within:text-brand-600">Email Address</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium" placeholder="name@company.com" />
                            </div>
                            <div className="group focus-within:text-brand-600">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide transition-colors group-focus-within:text-brand-600">Service Required</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium appearance-none cursor-pointer">
                                        <option>New Cooling Tower Quote</option>
                                        <option>Maintenance & Repair</option>
                                        <option>Spare Parts Inquiry</option>
                                        <option>Consultation / Audit</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                            <div className="group focus-within:text-brand-600">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide transition-colors group-focus-within:text-brand-600">Message</label>
                                <textarea rows="4" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium resize-none" placeholder="Tell us about your project specs (Tons, Flow Rate, etc)..."></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        {isSuccess && (
                            <div className="absolute inset-0 bg-white rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                                <p className="text-slate-600 mb-6">Thank you for contacting MZ Cooling Tower. Our team will get back to you within 24 hours.</p>
                                <button onClick={resetForm} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors">
                                    Send Another
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
