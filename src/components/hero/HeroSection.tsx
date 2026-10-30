import { motion } from 'framer-motion';
import { ArrowRight, Layers, Receipt, Truck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="platform" className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      {/* Background Image with slow zoom (Ken Burns effect) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-0 origin-center opacity-40"
      >
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2800&q=80" 
          alt="Indian logistics and enterprise commerce" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-neutral-950/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 min-h-screen flex flex-col justify-between">
        
        {/* Upper content area */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 lg:mb-8 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-margix-yellow/40 bg-margix-yellow/10 text-xs sm:text-sm text-yellow-300 font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-margix-yellow animate-pulse"></span>
              Margix Pvt Ltd · Operating System for Indian Business & Freight
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-xs text-neutral-300 font-medium">
              Pilot Program Open
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black text-white leading-[1.08] tracking-tight mb-6 lg:mb-8"
          >
            Run your business.
            <br />
            Move your freight.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow via-yellow-300 to-amber-400">
                On one unified platform.
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-margix-yellow/20 -z-0 rounded-sm"></span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8 lg:mb-10 max-w-2xl font-normal"
          >
            Margix is one online platform where Indian businesses run their daily work (billing, stock, purchases, accounts, GST) and move goods by truck — without Tally or disconnected software. 15 modular apps on one shared core. Pay only for what you use.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-margix-yellow text-margix-black rounded-xl font-bold text-base hover:bg-yellow-400 transition-all duration-200 shadow-xl shadow-yellow-500/20 cursor-pointer"
            >
              Apply for Closed Pilot
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="#business-suite"
              className="inline-flex items-center justify-center px-7 py-4 text-white font-semibold text-base rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              Explore 15 Modular Apps
            </a>
            <a
              href="#unified-flow"
              className="inline-flex items-center justify-center px-6 py-4 text-neutral-300 font-semibold text-sm hover:text-white transition-colors"
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
          className="mt-12 lg:mt-0"
        >
          <div className="border-t border-neutral-800 pt-8 lg:pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              
              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-margix-yellow/10 flex items-center justify-center text-margix-yellow">
                  <Layers size={20} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">15 Apps</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Day-One Core</div>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug hidden lg:block">
                    9 Business + 6 Logistics apps on one account.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Receipt size={20} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">100%</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Replaces Tally</div>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug hidden lg:block">
                    Full double-entry books, native GST & e-invoices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">0 Retyping</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Unified Flow</div>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug hidden lg:block">
                    Buyer PO to Seller Invoice to Truck to Books.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">&lt;2 sec</div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">Speed on 4G</div>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug hidden lg:block">
                    Lightweight Android apps work 100% offline.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
