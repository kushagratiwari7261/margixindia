import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SoftwareHeroProps {
  onOpenContact?: () => void;
}

export default function SoftwareHero({ onOpenContact }: SoftwareHeroProps) {
  return (
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-amber-500/8 via-white to-white">

        {/* Artistic ambient golden glow matching Margix logo */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F9CA24]/12 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#FDC101]/8 rounded-full blur-[100px] translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[300px] bg-[#F9CA24]/8 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Content — Left-aligned with clean typography */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-bold tracking-widest text-[#B08D00] uppercase block mb-3.5">
                  Commercial Software
                </span>

                  <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-neutral-950 leading-[1.08] tracking-tight">
                    Run your
                    <br />
                    <span className="font-serif italic font-normal text-[#D4A800] tracking-normal inline-block pr-1">
                      entire business
                    </span>
                    <br />
                    from one place.
                  </h1>

                    <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-md leading-relaxed font-normal">
                      Sales, purchases, inventory, billing, accounting and operations —{' '}
                      <span className="font-serif italic text-neutral-900 font-medium">
                        connected on one platform.
                      </span>
                    </p>

                    {/* Modules list — clean inline */}
                      <div className="mt-5 text-xs sm:text-sm text-neutral-600 font-semibold leading-loose">
                        CRM · ERP · Sales &amp; Purchase · Orders · Inventory · POS · Accounting &amp; GST · HRMS · Order Processing · Analytics
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3 mt-8">
                        <a
                          href="#software-products"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
                        >
                          <span>Explore Modules</span>
                          <ArrowRight size={16} />
                        </a>
                        <button
                          onClick={onOpenContact}
                          className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 text-sm font-semibold border border-neutral-300 transition-all cursor-pointer"
                        >
                          Book Live Demo
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right: Dashboard Screenshot */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative"
                  >
                    {/* Decorative ring behind */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#F9CA24]/30 via-[#A29BFE]/20 to-transparent blur-xl pointer-events-none" />

                    {/* Browser frame */}
                    <div className="relative rounded-2xl border border-neutral-200/80 bg-white shadow-2xl overflow-hidden">
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-50 border-b border-neutral-100">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F9CA24]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex-1 ml-3 px-3 py-1 rounded-md bg-white border border-neutral-200 text-[11px] text-neutral-400 font-mono">
                          app.margix.in
                        </div>
                      </div>
                      {/* Screenshot */}
                      <img
                        src="/images/margix-dashboard.png"
                        alt="Margix Dashboard"
                        className="w-full h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                  </motion.div>
                </div>

            </div>
          </section>
          );
}
