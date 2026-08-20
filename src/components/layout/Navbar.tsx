import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
import ContactModal from '../modals/ContactModal';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScrollTo = (targetY: number, duration = 1200) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diff * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const target = document.getElementById(id);
    if (!target) return;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
    smoothScrollTo(targetY);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="absolute w-full z-50 bg-gradient-to-r from-white via-white to-yellow-50/80 backdrop-blur-md border-b-[3px] border-margix-yellow shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Margix Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#platform" onClick={(e) => handleNavClick(e, 'platform')} className="text-gray-700 hover:text-yellow-600 text-sm font-bold transition-colors">Platform</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-gray-700 hover:text-yellow-600 text-sm font-bold transition-colors">How It Works</a>
              <a href="#load-optimization" onClick={(e) => handleNavClick(e, 'load-optimization')} className="text-gray-700 hover:text-yellow-600 text-sm font-bold transition-colors">Load Optimization</a>
              <a href="#backhauling" onClick={(e) => handleNavClick(e, 'backhauling')} className="text-gray-700 hover:text-yellow-600 text-sm font-bold transition-colors">Backhauling</a>
              <a href="#analytics" onClick={(e) => handleNavClick(e, 'analytics')} className="text-gray-700 hover:text-yellow-600 text-sm font-bold transition-colors">Analytics</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-margix-yellow to-yellow-400 text-margix-black px-6 py-2.5 rounded-md font-bold text-sm hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-yellow-600 p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center text-lg mt-8">
              <a href="#platform" onClick={(e) => handleNavClick(e, 'platform')} className="text-gray-900 font-bold border-b border-gray-100 pb-4">Platform</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-gray-900 font-bold border-b border-gray-100 pb-4">How It Works</a>
              <a href="#load-optimization" onClick={(e) => handleNavClick(e, 'load-optimization')} className="text-gray-900 font-bold border-b border-gray-100 pb-4">Load Optimization</a>
              <a href="#backhauling" onClick={(e) => handleNavClick(e, 'backhauling')} className="text-gray-900 font-bold border-b border-gray-100 pb-4">Backhauling</a>
              <a href="#analytics" onClick={(e) => handleNavClick(e, 'analytics')} className="text-gray-900 font-bold border-b border-gray-100 pb-4">Analytics</a>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="bg-margix-yellow text-margix-black px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-yellow-500/20 mt-4"
              >
                Get Started Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
