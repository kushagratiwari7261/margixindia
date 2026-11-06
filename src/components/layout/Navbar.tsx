import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

interface NavbarProps {
  activeView: 'software' | 'logistics';
  onNavigate: (view: 'portal' | 'software' | 'logistics') => void;
  onOpenContact: () => void;
}

export default function Navbar({ activeView, onNavigate, onOpenContact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm py-2.5'
          : 'bg-white border-b border-neutral-200/80 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo and Back to Portal Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('portal')}
                className="flex items-center gap-2.5 group focus:outline-none cursor-pointer"
                title="Back to Home Portal"
              >
                <img
                  src={logo}
                  alt="Margix"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <div className="flex flex-col leading-none text-left">
                  <span className="text-base font-black tracking-wider text-neutral-900 group-hover:text-amber-800 transition-colors">
                    MARGIX
                  </span>
                  <span className="text-[9px] tracking-widest text-[#B08D00] font-bold uppercase mt-0.5">
                    {activeView === 'software' ? 'Software Division' : 'Logistics Division'}
                  </span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('portal')}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-[11px] font-semibold text-neutral-600 transition-colors cursor-pointer ml-1"
              >
                <ArrowLeft size={12} />
                <span>Portal</span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-neutral-600">
              {activeView === 'software' ? (
                <>
                  <a
                    href="#software-products"
                    onClick={(e) => handleNavClick(e, 'software-products')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    9 ERP Apps
                  </a>
                  <a
                    href="#vision"
                    onClick={(e) => handleNavClick(e, 'vision')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Operational Reality
                  </a>
                  <a
                    href="#unified-flow"
                    onClick={(e) => handleNavClick(e, 'unified-flow')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Zero-Retyping Flow
                  </a>
                  <a
                    href="#industries"
                    onClick={(e) => handleNavClick(e, 'industries')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Industries
                  </a>
                  <a
                    href="#who-its-for"
                    onClick={(e) => handleNavClick(e, 'who-its-for')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Who It's For
                  </a>
                  <a
                    href="#roadmap"
                    onClick={(e) => handleNavClick(e, 'roadmap')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Roadmap
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#logistics-services"
                    onClick={(e) => handleNavClick(e, 'logistics-services')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    6 Freight Services
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleNavClick(e, 'how-it-works')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Corridor Lifecycle
                  </a>
                  <a
                    href="#backhaul"
                    onClick={(e) => handleNavClick(e, 'backhaul')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Return Backhauls
                  </a>
                  <a
                    href="#industries"
                    onClick={(e) => handleNavClick(e, 'industries')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Industries
                  </a>
                  <a
                    href="#who-its-for"
                    onClick={(e) => handleNavClick(e, 'who-its-for')}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    Fleet Owners
                  </a>
                </>
              )}
            </nav>

            {/* Desktop Actions & Division Switcher */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => onNavigate(activeView === 'software' ? 'logistics' : 'software')}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-all cursor-pointer"
              >
                <span>{activeView === 'software' ? 'Road Logistics' : 'Software ERP'}</span>
                <ArrowRight size={13} />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white text-xs font-bold transition-all border border-[#D4A800]/40 shadow-sm cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9CA24] animate-pulse" />
                <span>Apply / Demo</span>
                <ArrowRight size={14} className="text-[#F9CA24]" />
              </button>
            </div>

            {/* Mobile Actions: Always-visible Apply + Switcher + Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0f172a] text-white text-xs font-bold border border-[#D4A800]/50 shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9CA24] animate-pulse" />
                <span>Apply</span>
              </button>
              <button
                onClick={() => onNavigate(activeView === 'software' ? 'logistics' : 'software')}
                className="px-2.5 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-[11px] font-bold"
              >
                {activeView === 'software' ? 'Logistics' : 'Software'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-800 p-2 rounded-lg hover:bg-neutral-100 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header >

      {/* Mobile Menu */}
      <AnimatePresence>
        {
          isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-white lg:hidden pt-20 px-6 flex flex-col h-screen overflow-y-auto"
            >
              <div className="flex flex-col space-y-4 text-left text-base pb-12">
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Navigation
                  </span>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate('portal');
                    }}
                    className="text-xs font-bold text-[#B08D00] flex items-center gap-1"
                  >
                    <ArrowLeft size={12} />
                    <span>Return to Home Portal</span>
                  </button>
                </div>

                {activeView === 'software' ? (
                  <>
                    <a
                      href="#software-products"
                      onClick={(e) => handleNavClick(e, 'software-products')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      9 ERP Apps (Replaces Tally)
                    </a>
                    <a
                      href="#vision"
                      onClick={(e) => handleNavClick(e, 'vision')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Operational Reality
                    </a>
                    <a
                      href="#unified-flow"
                      onClick={(e) => handleNavClick(e, 'unified-flow')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Zero-Retyping Flow
                    </a>
                    <a
                      href="#industries"
                      onClick={(e) => handleNavClick(e, 'industries')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Industries Powered
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#logistics-services"
                      onClick={(e) => handleNavClick(e, 'logistics-services')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      6 Freight Services
                    </a>
                    <a
                      href="#how-it-works"
                      onClick={(e) => handleNavClick(e, 'how-it-works')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Corridor Lifecycle
                    </a>
                    <a
                      href="#backhaul"
                      onClick={(e) => handleNavClick(e, 'backhaul')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Return Backhauls
                    </a>
                    <a
                      href="#industries"
                      onClick={(e) => handleNavClick(e, 'industries')}
                      className="text-neutral-900 font-semibold py-2.5 border-b border-neutral-100"
                    >
                      Industries Powered
                    </a>
                  </>
                )}

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate(activeView === 'software' ? 'logistics' : 'software');
                    }}
                    className="w-full bg-neutral-100 text-neutral-900 py-3 rounded-lg font-bold text-xs"
                  >
                    {activeView === 'software' ? 'Switch to Road Logistics →' : 'Switch to Software ERP →'}
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="w-full bg-[#0f172a] text-white py-3 rounded-lg font-semibold text-xs shadow-sm"
                  >
                    {activeView === 'software' ? 'Schedule Software Demo' : 'Book Freight / Dispatch Truck'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}
