import { motion } from 'framer-motion';
import { ArrowRight, Layers, Receipt, Truck, RefreshCw } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="platform" className="relative min-h-screen w-full overflow-hidden bg-margix-black">
      {/* Background Image with slow zoom (Ken Burns effect) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-0 origin-center opacity-35 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2800&q=80" 
          alt="Indian logistics and business commerce" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-margix-black z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 min-h-screen flex flex-col justify-between">
        
        {/* Main hero body */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl my-auto">
          
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-margix-yellow/40 bg-margix-yellow/10 text-xs sm:text-sm text-yellow-300 font-bold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-margix-yellow animate-pulse"></span>
              Margix Pvt Ltd &bull; Unified Business Suite & Freight Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Run your business.
            <br />
            Move your freight.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow via-yellow-300 to-amber-400">
                On one platform.
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 bg-margix-yellow/20 -z-0 rounded-sm"></span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            One online platform where Indian businesses run daily operations (billing, stock, purchases, accounts & GST — replacing Tally) and move goods by truck with zero retyping. 15 modular apps on a shared core. Pay only for what you use.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-margix-yellow text-margix-black rounded-xl font-bold text-base hover:bg-yellow-400 transition-all duration-200 shadow-xl shadow-yellow-500/20 cursor-pointer"
            >
              <span>Join Closed Pilot</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#business-suite"
              className="inline-flex items-center justify-center px-7 py-3.5 text-white font-semibold text-base rounded-xl border border-white/20 hover:border-margix-yellow hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              Explore 15 Modular Apps
            </a>
            <a
              href="#unified-flow"
              className="inline-flex items-center justify-center text-sm font-semibold text-neutral-300 hover:text-margix-yellow transition-colors pt-2 sm:pt-0"
            >
              See 7-Step Zero Retyping Flow &rarr;
            </a>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="border-t border-neutral-800 pt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-margix-yellow/15 text-margix-yellow flex items-center justify-center">
                  <Layers size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">15 Apps</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Day-One Core</div>
                  <p className="text-xs text-neutral-400 mt-0.5 hidden sm:block">9 Business + 6 Logistics apps</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-margix-yellow/15 text-margix-yellow flex items-center justify-center">
                  <Receipt size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Replaces Tally</div>
                  <p className="text-xs text-neutral-400 mt-0.5 hidden sm:block">Double-entry, GST & e-invoicing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-margix-yellow/15 text-margix-yellow flex items-center justify-center">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">0 Retyping</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Unified Flow</div>
                  <p className="text-xs text-neutral-400 mt-0.5 hidden sm:block">Buyer PO to Seller Invoice to Truck</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-margix-yellow/15 text-margix-yellow flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">97%</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Load Utilization</div>
                  <p className="text-xs text-neutral-400 mt-0.5 hidden sm:block">Near-zero deadhead return trips</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
