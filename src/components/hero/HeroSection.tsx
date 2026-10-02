import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Truck, Route } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="platform" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with slow zoom (Ken Burns effect) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-0 origin-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2800&q=80" 
          alt="Logistics background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Layered overlay for depth — not flat black */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-margix-black via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 min-h-screen flex flex-col justify-between">
        
        {/* Upper content area */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 lg:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-gray-300 font-medium tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              India's logistics infrastructure, reimagined
            </span>
          </motion.div>

          {/* Main heading — editorial, not template */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-6 lg:mb-8"
          >
            Move freight
            <br />
            smarter across
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">India.</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-margix-yellow/30 -z-0 rounded-sm"></span>
            </span>
          </motion.h1>

          {/* Subtext — concise, not a wall of text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 lg:mb-10 max-w-xl"
          >
            One platform to manage fleets, match loads, and optimize every mile. 
            Real-time visibility. Verified capacity. Zero empty trucks.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-margix-yellow text-margix-black rounded-lg font-semibold text-base hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-yellow-500/15 cursor-pointer"
            >
              Optimize a Shipment
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 text-white font-semibold text-base rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Bottom stats strip — compact, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-0"
        >
          <div className="border-t border-white/10 pt-8 lg:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-margix-yellow/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-margix-yellow" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">97%</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-0.5">Load utilization</div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-snug hidden lg:block">
                    Maximize every trailer, every trip. More freight per truck.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Truck size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">3%</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-0.5">Empty capacity</div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-snug hidden lg:block">
                    Near-zero deadhead miles. Every return trip matched.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Route size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">24%</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-0.5">Cost savings</div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-snug hidden lg:block">
                    Intelligent routing cuts spend by a quarter.
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
