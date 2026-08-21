
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import MetricsSection from './components/sections/MetricsSection';
import WorkflowSection from './components/sections/WorkflowSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AudienceSection from './components/sections/AudienceSection';
import BackhaulSection from './components/sections/BackhaulSection';
import Footer from './components/layout/Footer';
import ContactModal from './components/modals/ContactModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 400; // Show when within 400px of bottom
      setIsAtBottom(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Custom JS smooth scroll to bypass native sticky section scroll traps
    const startY = window.scrollY;
    const duration = 1500; // slightly longer for full page scroll
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

  return (
    <div className="min-h-screen bg-margix-black text-white font-sans selection:bg-margix-yellow selection:text-black relative">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <MetricsSection />
        <WorkflowSection />
        <FeaturesSection />
        <AudienceSection />
        <BackhaulSection />
      </main>
      <Footer />
      
      <AnimatePresence>
        {isAtBottom && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-margix-yellow text-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
