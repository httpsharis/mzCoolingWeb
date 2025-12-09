import { Snowflake, Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import MZLogo from '../../assets/mzLogo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img src={MZLogo} alt="MZ Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-white font-display font-bold text-lg">MZ Cooling Tower</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6">
                                Delivering excellence in industrial cooling solutions since 2003. Certified quality, energy efficiency, and unmatched durability.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" aria-label="Facebook">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" aria-label="Linkedin">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" aria-label="Twitter">
                                    <Twitter className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6">Quick Links</h5>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#home" className="hover:text-brand-400 transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
                                <li><a href="#products" className="hover:text-brand-400 transition-colors">Products</a></li>
                                <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
                                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Get Quote</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6">Our Products</h5>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-brand-400 transition-colors">Bottle Type Cooling Towers</a></li>
                                <li><a href="#" className="hover:text-brand-400 transition-colors">Rectangular Cooling Towers</a></li>
                                <li><a href="#" className="hover:text-brand-400 transition-colors">PVC Fills & Eliminators</a></li>
                                <li><a href="#" className="hover:text-brand-400 transition-colors">Sprinkler Systems</a></li>
                                <li><a href="#" className="hover:text-brand-400 transition-colors">Aluminium Fans</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6">Contact Info</h5>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>Main Ferozpur Road Bank Stop 2Km, Ashiyana Road, Lahore</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>+923214792393, +923014792393</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>mzcoolingtower@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <p>© 2024 MZ Cooling Tower. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>

            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-brand-600 text-white p-3 rounded-full shadow-lg hover:bg-brand-700 z-40 transition-all duration-300 opacity-0 translate-y-10"
                style={{
                    opacity: typeof window !== 'undefined' && window.scrollY > 500 ? 1 : 0,
                    transform: typeof window !== 'undefined' && window.scrollY > 500 ? 'translateY(0)' : 'translateY(2.5rem)'
                }}
                aria-label="Back to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </>
    );
};

export default Footer;
