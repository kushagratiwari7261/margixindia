import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface AudienceSectionProps {
  onOpenContact?: () => void;
}

const vendorsList = [
  { 
    title: "Auto-Configured Industry Fields", 
    desc: "Grade & weight for steel, size & color for garments, serial numbers for machinery, batch & expiry for food and chemicals." 
  },
  { 
    title: "100% Replaces Tally & Spreadsheets", 
    desc: "Complete double-entry accounting, direct e-way bills & e-invoices, and auto-compiled GSTR-1 and GSTR-3B data." 
  },
  { 
    title: "1-Click Freight from Invoices", 
    desc: "Post loads directly from approved sales orders to verified truckers without middleman phone calls." 
  },
  { 
    title: "Real-Time Tracking & Digital POD", 
    desc: "Monitor consignments live, receive geotagged photo proof of delivery, and watch the freight bill auto-post to your books." 
  }
];

const fleetList = [
  { 
    title: "Zero Empty Miles (Backhaul Match)", 
    desc: "AI return-trip matching and 3PL partner pooling ensure your trucks never run deadhead." 
  },
  { 
    title: "Full Truckload (FTL) & Digital LR", 
    desc: "Generate sequential digital Lorry Receipts with 1-click e-way bill linking and driver advance ledgers." 
  },
  { 
    title: "Part-Truckload (PTL) Branch Godowns", 
    desc: "Manage hub parcel bookings, cross-dock loading, local delivery runs, and Cash on Delivery (COD) collection." 
  },
  { 
    title: "Offline Driver Mobile App", 
    desc: "Turn-by-turn checkpoints, photo proof of delivery (POD), and digital signature — works 100% without network." 
  }
];

export default function AudienceSection({ onOpenContact }: AudienceSectionProps) {
  // 'vendor', 'fleet', or 'none' (50/50 split)
  const [hovered, setHovered] = useState<'vendor' | 'fleet' | 'none'>('none');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="who-its-for" className="py-20 lg:py-28 bg-[#F7F7F8] text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-amber-500 fill-amber-400" />
            Tailored Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Engineered for <span className="relative inline-block px-2 bg-margix-yellow text-margix-black rounded-md">Every Stakeholder</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Hover over your role to discover purpose-built workflows designed to maximize your efficiency and profitability.
          </p>
        </div>

        {/* Dynamic Flex Accordion (Desktop) / Stacked Cards (Mobile) */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[620px] items-stretch">
          
          {/* Card 1: Vendors (Shippers, Manufacturers & Traders) */}
          <motion.div
            onMouseEnter={() => setHovered('vendor')}
            onMouseLeave={() => setHovered('none')}
            initial={false}
            animate={{ 
              width: isDesktop ? (hovered === 'vendor' ? '65%' : hovered === 'fleet' ? '35%' : '50%') : '100%'
            }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
            className="group relative bg-white rounded-[2.5rem] border-2 border-amber-300/60 shadow-xl overflow-hidden flex flex-col p-7 md:p-10 cursor-pointer w-full"
          >
            {/* Ambient internal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 bg-neutral-100">
                    <img src="/images/audience_vendor.jpg" alt="Shippers and Manufacturers" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 block w-max mb-1.5">
                      Manufacturers & Shippers
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-900">
                      For Shippers & Traders
                    </h3>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className="overflow-hidden">
                  <div className="space-y-4">
                    {vendorsList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                          <CheckCircle2 size={13} className="text-amber-800" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">{item.title}</h4>
                          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 shadow-lg shadow-yellow-500/20 transition-all cursor-pointer"
                >
                  <span>Optimize Your Operations</span>
                  <ArrowRight size={16} />
                </button>
              </div>
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
            className="group relative bg-margix-black rounded-[2.5rem] border-2 border-neutral-800 shadow-2xl overflow-hidden flex flex-col p-7 md:p-10 cursor-pointer w-full"
          >
            {/* Ambient internal gradient */}
            <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-neutral-800 shadow-2xl overflow-hidden shrink-0 bg-neutral-900">
                    <img src="/images/audience_fleet.jpg" alt="Fleet Owners and Transporters" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-margix-yellow bg-white/5 px-3 py-1 rounded-full border border-white/10 block w-max mb-1.5">
                      Transporters & Carriers
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      For Fleet Owners
                    </h3>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className="overflow-hidden">
                  <div className="space-y-4">
                    {fleetList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-margix-yellow/20 flex items-center justify-center">
                          <CheckCircle2 size={13} className="text-margix-yellow" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">{item.title}</h4>
                          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-white text-margix-black font-bold text-sm hover:bg-neutral-200 shadow-xl transition-all cursor-pointer"
                >
                  <span>Onboard Your Fleet</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
