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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetY: number, duration = 1000) => {
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
    const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
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
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-xl py-3' 
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Tagline */}
            <a href="#platform" onClick={(e) => handleNavClick(e, 'platform')} className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-lg">
                <img src={logo} alt="Margix Logo" className="h-9 md:h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-wider text-white">MARGIX</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-margix-yellow/20 text-margix-yellow border border-margix-yellow/30">
                    PVT LTD
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-neutral-400 font-semibold uppercase mt-0.5">
                  Business + Freight
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-5 text-sm font-semibold text-neutral-300">
              <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')} className="hover:text-margix-yellow transition-colors">Why Margix</a>
              <a href="#business-suite" onClick={(e) => handleNavClick(e, 'business-suite')} className="hover:text-margix-yellow transition-colors flex items-center gap-1">
                Business Suite
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded">9</span>
              </a>
              <a href="#logistics" onClick={(e) => handleNavClick(e, 'logistics')} className="hover:text-margix-yellow transition-colors flex items-center gap-1">
                Logistics
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded">6</span>
              </a>
              <a href="#unified-flow" onClick={(e) => handleNavClick(e, 'unified-flow')} className="hover:text-margix-yellow transition-colors">7-Step Flow</a>
              <a href="#future-solutions" onClick={(e) => handleNavClick(e, 'future-solutions')} className="hover:text-margix-yellow transition-colors text-amber-300 flex items-center gap-1">
                Upcoming Solutions
                <span className="w-1.5 h-1.5 rounded-full bg-margix-yellow animate-pulse"></span>
              </a>
              <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="hover:text-margix-yellow transition-colors">Industries</a>
              <a href="#platform-core" onClick={(e) => handleNavClick(e, 'platform-core')} className="hover:text-margix-yellow transition-colors">Principles</a>
              <a href="#roadmap" onClick={(e) => handleNavClick(e, 'roadmap')} className="hover:text-margix-yellow transition-colors">Roadmap</a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="bg-margix-yellow text-margix-black px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-all duration-200 shadow-md hover:shadow-yellow-500/20 cursor-pointer flex items-center gap-1.5"
              >
                <span>Join Closed Pilot</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={onOpenContact}
                className="md:hidden bg-margix-yellow text-margix-black px-3.5 py-1.5 rounded-lg font-bold text-xs"
              >
                Pilot
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-margix-yellow p-2 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-2xl xl:hidden pt-24 px-6 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 text-left text-base mt-4 pb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Navigation</span>
              <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')} className="text-white font-bold py-2 border-b border-neutral-800">Why Margix (The Vision)</a>
              <a href="#business-suite" onClick={(e) => handleNavClick(e, 'business-suite')} className="text-white font-bold py-2 border-b border-neutral-800 flex justify-between items-center">
                <span>Business Suite</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">9 Apps (Replaces Tally)</span>
              </a>
              <a href="#logistics" onClick={(e) => handleNavClick(e, 'logistics')} className="text-white font-bold py-2 border-b border-neutral-800 flex justify-between items-center">
                <span>Logistics Platform</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">6 Apps (FTL, PTL, Fleet)</span>
              </a>
              <a href="#unified-flow" onClick={(e) => handleNavClick(e, 'unified-flow')} className="text-white font-bold py-2 border-b border-neutral-800">7-Step Order Flow (Zero Retyping)</a>
              <a href="#future-solutions" onClick={(e) => handleNavClick(e, 'future-solutions')} className="text-amber-300 font-bold py-2 border-b border-neutral-800 flex justify-between items-center">
                <span>Upcoming Solutions</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">POS, AI, MRP, Fintech</span>
              </a>
              <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="text-white font-bold py-2 border-b border-neutral-800">Industries (Manufacturers, FMCG, Retail)</a>
              <a href="#platform-core" onClick={(e) => handleNavClick(e, 'platform-core')} className="text-white font-bold py-2 border-b border-neutral-800">Built for India (Principles)</a>
              <a href="#roadmap" onClick={(e) => handleNavClick(e, 'roadmap')} className="text-white font-bold py-2 border-b border-neutral-800">Roadmap (Phase 1, 2 & 3)</a>
              
              <div className="pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-margix-yellow text-margix-black py-4 rounded-xl font-black text-base shadow-lg shadow-yellow-500/20 text-center"
                >
                  Join Closed Pilot Program
                </button>
              </div>

              <div className="pt-4 text-center text-xs text-neutral-500">
                Margix Pvt Ltd &bull; The Operating System for Indian Business & Freight
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
