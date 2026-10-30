import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetY: number, duration = 900) => {
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
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 85;
    smoothScrollTo(targetY);
  };

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
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b-[3px] border-margix-yellow shadow-md py-3' 
          : 'bg-gradient-to-r from-white via-white to-yellow-50/90 backdrop-blur-sm border-b-[3px] border-margix-yellow shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Company Name */}
            <a 
              href="#platform" 
              onClick={(e) => handleNavClick(e, 'platform')} 
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Margix Logo" 
                className="h-10 sm:h-11 w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-102" 
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-black tracking-wider text-margix-black">
                  MARGIX
                </span>
                <span className="text-[10px] tracking-widest text-amber-700 font-bold uppercase mt-0.5">
                  Pvt Ltd
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-bold text-neutral-700">
              <a 
                href="#platform" 
                onClick={(e) => handleNavClick(e, 'platform')} 
                className="hover:text-amber-600 transition-colors"
              >
                Platform
              </a>
              <a 
                href="#business-suite" 
                onClick={(e) => handleNavClick(e, 'business-suite')} 
                className="hover:text-amber-600 transition-colors"
              >
                Business Suite
              </a>
              <a 
                href="#logistics" 
                onClick={(e) => handleNavClick(e, 'logistics')} 
                className="hover:text-amber-600 transition-colors"
              >
                Logistics
              </a>
              <a 
                href="#unified-flow" 
                onClick={(e) => handleNavClick(e, 'unified-flow')} 
                className="hover:text-amber-600 transition-colors"
              >
                Unified Flow
              </a>
              <a 
                href="#future-solutions" 
                onClick={(e) => handleNavClick(e, 'future-solutions')} 
                className="hover:text-amber-600 transition-colors text-amber-800 flex items-center gap-1.5"
              >
                Upcoming Solutions
                <span className="w-1.5 h-1.5 rounded-full bg-margix-yellow"></span>
              </a>
              <a 
                href="#who-its-for" 
                onClick={(e) => handleNavClick(e, 'who-its-for')} 
                className="hover:text-amber-600 transition-colors"
              >
                Who It's For
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="bg-gradient-to-r from-margix-yellow to-yellow-400 text-margix-black px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenContact}
                className="md:hidden bg-margix-yellow text-margix-black px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-sm"
              >
                Pilot
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-900 hover:text-amber-600 p-2 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 text-left text-base mt-4 pb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Navigation</span>
              <a 
                href="#platform" 
                onClick={(e) => handleNavClick(e, 'platform')} 
                className="text-neutral-900 font-bold py-2.5 border-b border-neutral-100"
              >
                Platform Overview
              </a>
              <a 
                href="#business-suite" 
                onClick={(e) => handleNavClick(e, 'business-suite')} 
                className="text-neutral-900 font-bold py-2.5 border-b border-neutral-100 flex justify-between items-center"
              >
                <span>Business Suite</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">9 Apps</span>
              </a>
              <a 
                href="#logistics" 
                onClick={(e) => handleNavClick(e, 'logistics')} 
                className="text-neutral-900 font-bold py-2.5 border-b border-neutral-100 flex justify-between items-center"
              >
                <span>Logistics Platform</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">6 Apps</span>
              </a>
              <a 
                href="#unified-flow" 
                onClick={(e) => handleNavClick(e, 'unified-flow')} 
                className="text-neutral-900 font-bold py-2.5 border-b border-neutral-100"
              >
                7-Step Unified Order Flow
              </a>
              <a 
                href="#future-solutions" 
                onClick={(e) => handleNavClick(e, 'future-solutions')} 
                className="text-amber-800 font-bold py-2.5 border-b border-neutral-100 flex justify-between items-center"
              >
                <span>All Upcoming Solutions</span>
                <span className="text-xs bg-margix-yellow text-margix-black px-2 py-0.5 rounded-full font-bold">POS, AI, MRP</span>
              </a>
              <a 
                href="#who-its-for" 
                onClick={(e) => handleNavClick(e, 'who-its-for')} 
                className="text-neutral-900 font-bold py-2.5 border-b border-neutral-100"
              >
                Who It's For (Manufacturers, FMCG, Fleet)
              </a>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-margix-yellow text-margix-black py-4 rounded-xl font-black text-base shadow-lg shadow-yellow-500/20 text-center cursor-pointer"
                >
                  Join Closed Pilot Program
                </button>
              </div>

              <div className="pt-6 text-center text-xs text-neutral-400">
                Margix Pvt Ltd &bull; The Operating System for Indian Business & Freight
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
