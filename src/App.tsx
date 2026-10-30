import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import MetricsSection from './components/sections/MetricsSection';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import BusinessSuiteSection from './components/sections/BusinessSuiteSection';
import LogisticsSuiteSection from './components/sections/LogisticsSuiteSection';
import UnifiedFlowSection from './components/sections/UnifiedFlowSection';
import WorkflowSection from './components/sections/WorkflowSection';
import BackhaulSection from './components/sections/BackhaulSection';
import AudienceSection from './components/sections/AudienceSection';
import FutureSolutionsSection from './components/sections/FutureSolutionsSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
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
      }, 10000);
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
    const duration = 1000;
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
    <div className="min-h-screen bg-margix-black text-white font-sans selection:bg-margix-yellow selection:text-black relative">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        {/* 1. Hero: Vision, 15 apps, Replaces Tally, Zero Retyping */}
        <HeroSection onOpenContact={handleOpenContact} />
        
        {/* 2. Key Metrics: Business & Freight Transformation */}
        <MetricsSection />

        {/* 3. The Core Shift: The Broken Reality vs Margix Unified Core */}
        <ProblemSolutionSection onOpenContact={handleOpenContact} />

        {/* 4. Product Family 1: Business Suite (9 Modular Apps) */}
        <BusinessSuiteSection onOpenContact={handleOpenContact} />

        {/* 5. Product Family 2: Logistics Platform (6 Connected Apps) */}
        <LogisticsSuiteSection onOpenContact={handleOpenContact} />

        {/* 6. The 7-Step Unified Order Flow: Zero Retyping between Buyer, Seller & Trucker */}
        <UnifiedFlowSection />

        {/* 7. Intelligent Route & Load Optimization with Real Illustrations */}
        <WorkflowSection />

        {/* 8. The Backhaul Advantage & Video Demonstration */}
        <BackhaulSection />

        {/* 9. Tailored for Every Stakeholder (Shippers & Fleet Owners) with Real Photography */}
        <AudienceSection onOpenContact={handleOpenContact} />

        {/* 10. All Further & Upcoming Solutions We Are Delivering */}
        <FutureSolutionsSection onOpenContact={handleOpenContact} />

        {/* 11. Guiding Principles Built for Indian MSMEs */}
        <PrinciplesSection />
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
