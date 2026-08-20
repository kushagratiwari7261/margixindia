import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const vendorsList = [
  { title: "Instant Capacity Sourcing", desc: "Quickly find reliable, verified trucks when you need them." },
  { title: "Cost Optimization", desc: "Lower transportation spend through AI-driven route and load matching." },
  { title: "Real-Time Tracking", desc: "Complete visibility from pickup to final delivery." },
  { title: "Streamlined Operations", desc: "Automate bookings, documentation, and compliance in one dashboard." }
];

const fleetList = [
  { title: "Zero Empty Miles", desc: "Automated backhaul matching ensures your trucks never run empty." },
  { title: "Maximized Earnings", desc: "Increase load utilization to generate more revenue per trip." },
  { title: "Faster Payments", desc: "Quick, reliable settlements to keep your cash flow healthy." },
  { title: "Fleet Management", desc: "Smart tools to track performance, manage drivers, and optimize routing." }
];

export default function AudienceSection() {
  // 'vendor', 'fleet', or 'none' (50/50 split)
  const [hovered, setHovered] = useState<'vendor' | 'fleet' | 'none'>('none');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[#F7F7F8] text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-amber-500 fill-amber-400" />
            Tailored Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Engineered for <span className="relative inline-block px-2 bg-margix-yellow text-margix-black rounded-md">Every Stakeholder</span>
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
            Hover over your role to discover purpose-built workflows designed to maximize your profitability.
          </p>
        </div>

        {/* Dynamic Flex Accordion (Desktop) / Stacked Cards (Mobile) */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px] items-stretch">
          
          {/* Card 1: Vendors (Shippers & Brands) */}
          <motion.div
            onMouseEnter={() => setHovered('vendor')}
            onMouseLeave={() => setHovered('none')}
            initial={false}
            animate={{ 
              width: isDesktop ? (hovered === 'vendor' ? '65%' : hovered === 'fleet' ? '35%' : '50%') : '100%'
            }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
            className="group relative bg-white rounded-[2.5rem] border-2 border-amber-300/60 shadow-xl overflow-hidden flex flex-col p-8 md:p-12 cursor-pointer w-full"
          >
            {/* Ambient internal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 bg-neutral-100">
                  <img src="/images/audience_vendor.jpg" alt="Vendor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 block w-max mb-2">
                    Shippers & Brands
                  </span>
                  <h3 className="text-3xl font-black text-neutral-900">
                    For Vendors
                  </h3>
                </div>
              </div>

              {/* Collapsible Content */}
              <div className="flex-1 overflow-hidden relative">
                <AnimatePresence>
                  {(hovered === 'vendor' || hovered === 'none') && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 pt-4"
                    >
                      <div className="space-y-6">
                        {vendorsList.map((item, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.1) }}
                            className="flex items-start gap-4"
                          >
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                              <CheckCircle2 size={16} className="text-amber-800" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-neutral-900 leading-snug">{item.title}</h4>
                              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-1">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button 
                animate={{ 
                  opacity: hovered === 'vendor' ? 1 : 0.7,
                  scale: hovered === 'vendor' ? 1 : 0.95 
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 w-max py-4 px-8 rounded-2xl bg-margix-yellow text-margix-black font-bold text-base hover:bg-yellow-400 shadow-xl shadow-yellow-500/20 transition-all z-20"
              >
                <span>Optimize Your Shipments</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2: Fleet Owners (Transporters & Carriers) */}
          <motion.div
            onMouseEnter={() => setHovered('fleet')}
            onMouseLeave={() => setHovered('none')}
            initial={false}
            animate={{ 
              width: isDesktop ? (hovered === 'fleet' ? '65%' : hovered === 'vendor' ? '35%' : '50%') : '100%'
            }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
            className="group relative bg-margix-black rounded-[2.5rem] border-2 border-neutral-800 shadow-2xl overflow-hidden flex flex-col p-8 md:p-12 cursor-pointer w-full"
          >
            {/* Ambient internal gradient */}
            <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full border-4 border-neutral-800 shadow-2xl overflow-hidden shrink-0 bg-neutral-900">
                  <img src="/images/audience_fleet.jpg" alt="Fleet Owner" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-margix-yellow bg-white/5 px-3 py-1 rounded-full border border-white/10 block w-max mb-2">
                    Transporters & Carriers
                  </span>
                  <h3 className="text-3xl font-black text-white">
                    For Fleet Owners
                  </h3>
                </div>
              </div>

              {/* Collapsible Content */}
              <div className="flex-1 overflow-hidden relative">
                <AnimatePresence>
                  {(hovered === 'fleet' || hovered === 'none') && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 pt-4"
                    >
                      <div className="space-y-6">
                        {fleetList.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.1) }} 
                            className="flex items-start gap-4"
                          >
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-margix-yellow/20 flex items-center justify-center">
                              <CheckCircle2 size={16} className="text-margix-yellow" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white leading-snug">{item.title}</h4>
                              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mt-1">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button 
                animate={{ 
                  opacity: hovered === 'fleet' ? 1 : 0.7,
                  scale: hovered === 'fleet' ? 1 : 0.95 
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 w-max py-4 px-8 rounded-2xl bg-white text-margix-black font-bold text-base hover:bg-neutral-200 shadow-xl transition-all z-20"
              >
                <span>Onboard Your Fleet</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
