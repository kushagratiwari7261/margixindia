import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import MetricsSection from './components/sections/MetricsSection';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import BusinessSuiteSection from './components/sections/BusinessSuiteSection';
import LogisticsSuiteSection from './components/sections/LogisticsSuiteSection';
import UnifiedFlowSection from './components/sections/UnifiedFlowSection';
import MobileAppsSection from './components/sections/MobileAppsSection';
import WorkflowSection from './components/sections/WorkflowSection';
import BackhaulSection from './components/sections/BackhaulSection';
import FutureSolutionsSection from './components/sections/FutureSolutionsSection';
import IndustrySection from './components/sections/IndustrySection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import RoadmapSection from './components/sections/RoadmapSection';
import Footer from './components/layout/Footer';
import ContactModal from './components/modals/ContactModal';
import RegisterModal from './components/modals/RegisterModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    const hasDismissed = sessionStorage.getItem('hasDismissedRegister') === 'true';
    
    if (!isRegistered && !hasDismissed) {
      const timer = setTimeout(() => {
        setIsRegisterOpen(true);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 500;
      setIsAtBottom(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 1200;
    let startTime: number | null = null;

    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY - startY * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const handleOpenContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-margix-yellow selection:text-black relative">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        {/* 1. Hero: Vision, 15 apps, Replaces Tally, Zero Retyping */}
        <HeroSection onOpenContact={handleOpenContact} />
        
        {/* 2. Key Metrics: Business & Freight Impact */}
        <MetricsSection />

        {/* 3. The Shift: The Broken Reality vs Margix Unified Core */}
        <ProblemSolutionSection onOpenContact={handleOpenContact} />

        {/* 4. Product Family 1: Business Suite (9 Modular Day-One Apps) */}
        <BusinessSuiteSection onOpenContact={handleOpenContact} />

        {/* 5. Product Family 2: Logistics Suite (6 Connected Apps) */}
        <LogisticsSuiteSection onOpenContact={handleOpenContact} />

        {/* 6. The 7-Step Unified Order Flow: Retailer -> Distributor -> Transporter */}
        <UnifiedFlowSection />

        {/* 7. Field Operations: 2 Offline Android Mobile Apps */}
        <MobileAppsSection onOpenContact={handleOpenContact} />

        {/* 8. Intelligent Operations: 3D Packing & Route Intelligence */}
        <WorkflowSection />

        {/* 9. Backhaul Advantage: Interactive Video & Deadhead Elimination */}
        <BackhaulSection />

        {/* 10. All Further Solutions: Retail POS, Multilingual AI Copilot, ONDC, MRP, HR/Payroll, B2B Network, Working Capital */}
        <FutureSolutionsSection onOpenContact={handleOpenContact} />

        {/* 11. Industry Solutions: Auto-configured fields for Steel, Garments, FMCG, etc. */}
        <IndustrySection onOpenContact={handleOpenContact} />

        {/* 12. Core Principles: Built for India, Pay per app, Phone OTP, AWS Mumbai */}
        <PrinciplesSection />

        {/* 13. Product Roadmap: Phase 1, Phase 2, Phase 3 Delivery Timeline */}
        <RoadmapSection onOpenContact={handleOpenContact} />
      </main>

      {/* Corporate Footer: Margix Pvt Ltd */}
      <Footer />
      
      {/* Smooth Scroll to Top Button */}
      <AnimatePresence>
        {isAtBottom && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-margix-yellow text-black shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pilot & Contact Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}

export default App;
