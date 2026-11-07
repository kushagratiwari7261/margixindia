import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import SplitPortal from './components/hero/SplitPortal';
import SoftwareHero from './components/hero/SoftwareHero';
import LogisticsHero from './components/hero/LogisticsHero';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import BusinessSuiteSection from './components/sections/BusinessSuiteSection';
import LogisticsSuiteSection from './components/sections/LogisticsSuiteSection';
import IndustriesSection from './components/sections/IndustriesSection';
import UnifiedFlowSection from './components/sections/UnifiedFlowSection';
import WorkflowSection from './components/sections/WorkflowSection';
import BackhaulSection from './components/sections/BackhaulSection';
import AudienceSection from './components/sections/AudienceSection';
import FutureSolutionsSection from './components/sections/FutureSolutionsSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import Footer from './components/layout/Footer';
import ContactModal from './components/modals/ContactModal';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type DivisionView = 'portal' | 'software' | 'logistics';

function App() {
  const [view, setView] = useState<DivisionView>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('software')) return 'software';
    if (hash.includes('logistics')) return 'logistics';
    return 'portal';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync state with browser hash history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('software')) setView('software');
      else if (hash.includes('logistics')) setView('logistics');
      else setView('portal');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll position: arrow button for going up is visible whenever scrolled down
  useEffect(() => {
    if (view === 'portal') {
      setShowScrollTop(false);
      return;
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 220);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const navigateTo = (newView: DivisionView) => {
    setView(newView);
    if (newView === 'portal') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = newView;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => setIsContactOpen(true);

  // --------------------------------------------------------------------------
  // VIEW 1: HOME PORTAL (FULL SCREEN, NO SCROLL, ONLY THE SPLIT SLIDE)
  // --------------------------------------------------------------------------
  if (view === 'portal') {
    return (
  <div className="h-screen w-screen overflow-hidden bg-[#08101d] font-sans selection:bg-amber-100 selection:text-amber-900">
    <SplitPortal onSelectDivision={navigateTo} onOpenContact={handleOpenContact} />
    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
  </div>
    );
}

// --------------------------------------------------------------------------
// VIEW 2: COMMERCIAL SOFTWARE PAGE
// --------------------------------------------------------------------------
if (view === 'software') {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
      <Navbar
        activeView="software"
        onNavigate={navigateTo}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Software Hero Banner */}
        <SoftwareHero onOpenContact={handleOpenContact} />

        {/* 9 Modular ERP Apps Replacing Desktop Tally */}
        <BusinessSuiteSection onOpenContact={handleOpenContact} />

        {/* Operational Reality vs Unified Solution */}
        <ProblemSolutionSection onOpenContact={handleOpenContact} />

        {/* The Zero-Retyping Bridge: Invoice directly to Truck Dispatch */}
        <UnifiedFlowSection />

        {/* Target Industries Powered Across India */}
        <IndustriesSection onOpenContact={handleOpenContact} />

        {/* Tailored for Shippers, Traders & Manufacturers */}
        <AudienceSection onOpenContact={handleOpenContact} />

        {/* Product Expansion & Roadmap */}
        <FutureSolutionsSection onOpenContact={handleOpenContact} />

        {/* Core Engineering Principles */}
        <PrinciplesSection />
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Floating Action Controls: Always-Visible Apply Button & Scroll-to-Top Arrow */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-center gap-2.5 pointer-events-auto">
        {/* Always Visible Floating Apply Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenContact}
          className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white border border-[#D4A800]/50 shadow-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer group"
          aria-label="Apply Now"
        >
          
          <span>Apply Now</span>
          <ArrowRight size={14} className="text-[#F9CA24] group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Scroll-to-Top Arrow: Visible in all pages when scrolled down */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="p-2.5 sm:p-2.5 rounded-full bg-white text-neutral-800 border border-neutral-300 shadow-xl hover:bg-neutral-100 hover:text-black active:translate-y-px transition-all cursor-pointer"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={18} strokeWidth={2.5} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

// --------------------------------------------------------------------------
// VIEW 3: ROAD LOGISTICS PAGE
// --------------------------------------------------------------------------
return (
  <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
    <Navbar
      activeView="logistics"
      onNavigate={navigateTo}
      onOpenContact={handleOpenContact}
    />

    <main>
      {/* Logistics Hero Banner with Live Tracking & Freight Tariff Estimator */}
      <LogisticsHero onOpenContact={handleOpenContact} />

      {/* 6 Connected Freight Apps + Interactive 3D Trailer Volumetric Packing Simulator */}
      <LogisticsSuiteSection onOpenContact={handleOpenContact} />

      {/* Route & Freight Optimization Lifecycle */}
      <WorkflowSection />

      {/* Deadhead Elimination & Return Backhaul Matching */}
      <BackhaulSection />

      {/* Target Industries Powered Across India */}
      <IndustriesSection onOpenContact={handleOpenContact} />

      {/* Tailored for Transporters & Fleet Owners */}
      <AudienceSection onOpenContact={handleOpenContact} />

      {/* Fleet Reliability & Safety Principles */}
      <PrinciplesSection />
    </main>

    <Footer onNavigate={navigateTo} />

    {/* Floating Action Controls: Always-Visible Apply Button & Scroll-to-Top Arrow */}
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-center gap-2.5 pointer-events-auto">
      {/* Always Visible Floating Apply Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpenContact}
        className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white border border-[#D4A800]/50 shadow-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer group"
        aria-label="Apply Now"
      >
        
        <span>Apply Now</span>
        <ArrowRight size={14} className="text-[#F9CA24] group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Scroll-to-Top Arrow: Visible in all pages when scrolled down */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="p-2.5 sm:p-2.5 rounded-full bg-white text-neutral-800 border border-neutral-300 shadow-xl hover:bg-neutral-100 hover:text-black active:translate-y-px transition-all cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>

    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
  </div>
);
}

export default App;
