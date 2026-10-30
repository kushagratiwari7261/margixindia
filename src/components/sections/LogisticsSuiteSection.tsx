import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  Warehouse, 
  ShieldCheck, 
  Share2, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Route,
  Sparkles
} from 'lucide-react';

interface LogisticsSuiteSectionProps {
  onOpenContact?: () => void;
}

export default function LogisticsSuiteSection({ onOpenContact }: LogisticsSuiteSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const logisticsApps = [
    {
      id: "marketplace",
      name: "Load Marketplace",
      role: "Finds business for transporters",
      icon: <Route size={22} />,
      badge: "Verified Freight Exchange",
      desc: "Connects shippers with verified fleet operators across India. See loads posted by nearby manufacturers and distributors, submit live bids, and secure guaranteed cargo.",
      features: [
        "Real-time broadcast of loads posted by vetted trade & manufacturing companies",
        "Instant competitive bidding engine with clear lane pricing benchmarks",
        "Strict KYC verification: Only verified transporters with active GST and PAN can quote",
        "Automated booking confirmation and immediate digital consignment dispatch"
      ],
      metric: "Zero Broker Margins",
      metricLabel: "Direct Shippers"
    },
    {
      id: "ftl-ops",
      name: "Transport Operations (FTL)",
      role: "Runs each trip end-to-end",
      icon: <Truck size={22} />,
      badge: "Full Truckload Engine",
      desc: "Complete operational suite for dedicated full truckloads. Generate GST-compliant Lorry Receipts (LR), link e-way bills automatically, track driver advances, and share live trip links.",
      features: [
        "Sequential digital Lorry Receipts (LR) with customizable company branding",
        "Direct e-way bill linking: Sync consignor, consignee, and HSN details with 1 click",
        "Trip expense tracking: Diesel slips, toll receipts, driver advance, and en-route repair costs",
        "Live trip tracking link with automated milestone SMS/WhatsApp updates to customers"
      ],
      metric: "1-Click",
      metricLabel: "LR & E-Way Link"
    },
    {
      id: "ptl-godown",
      name: "Branch & Godown (PTL)",
      role: "Handles complex part truckloads",
      icon: <Warehouse size={22} />,
      badge: "Part-Truckload & Hubs",
      desc: "Designed specifically for Indian parcel, sundries, and PTL logistics. Manage parcel bookings at local branches, cross-dock loading, godown staging, and cash on delivery.",
      features: [
        "Branch booking counter: Generate parcel bilti/LR with multi-package weight & volume",
        "Godown staging: Track goods unloaded into hubs and loaded onto outbound trunk routes",
        "Last-mile delivery runs with door-delivery challans and Cash on Delivery (COD) collection",
        "Demurrage and storage charge automation after specified free storage days",
        "Inter-branch settlement ledgers reconciling freight collections across network hubs"
      ],
      metric: "100% Tracking",
      metricLabel: "Last Known Godown"
    },
    {
      id: "fleet",
      name: "Fleet & Driver Compliance",
      role: "Keeps trucks & drivers road-ready",
      icon: <ShieldCheck size={22} />,
      badge: "Automated Compliance Gate",
      desc: "Eliminate roadside penalties and challans. Maintain digital records of every truck and driver with automated expiry alerts that block non-compliant vehicles from taking trips.",
      features: [
        "Comprehensive vehicle records: RC, National Permit, State Permits, Fitness, Insurance, PUC",
        "Driver compliance: Driving license verification, Aadhaar check, and medical fitness logs",
        "Automated WhatsApp & SMS alerts 30, 15, and 7 days prior to document expiry",
        "Safety compliance gate: Expired vehicles are automatically locked from new trip dispatch"
      ],
      metric: "Zero Fines",
      metricLabel: "Proactive Expiry Locks"
    },
    {
      id: "3pl-pool",
      name: "3PL Capacity Pool",
      role: "Shares trucks between partners",
      icon: <Share2 size={22} />,
      badge: "Collaborative Logistics",
      desc: "Logistics companies pooling resources to maximize utilization. Exchange excess capacity, book spare space in partner trucks, and eliminate empty deadhead return trips.",
      features: [
        "Partner network: Share unutilized trailer space with trusted partner operators",
        "Automated backhaul matching: Fill return trips automatically at your destination",
        "B2B partner rates with transparent commission and revenue-sharing rules",
        "Consolidated partner billing with automated debit/credit reconciliations"
      ],
      metric: "97% Utilization",
      metricLabel: "Near-Zero Deadhead"
    },
    {
      id: "driver-app",
      name: "Driver Mobile App",
      role: "Driver's offline phone companion",
      icon: <Smartphone size={22} />,
      badge: "Works 100% Offline",
      desc: "A clean, simple mobile tool engineered for truck drivers. Delivers step-by-step trip instructions, captures photo proof-of-delivery (POD) and signatures, and works with no cellular network.",
      features: [
        "Step-by-step trip checkpoints: Gate entry, loading, toll crossing, and delivery arrival",
        "Geotagged & timestamped photo Proof of Delivery (POD) with consignee digital signature",
        "On-spot Cash on Delivery (COD) collection logging with instant SMS receipt to customer",
        "Offline-first architecture: Operates without internet; auto-syncs the moment network returns"
      ],
      metric: "Offline-First",
      metricLabel: "Works Everywhere"
    }
  ];

  const current = logisticsApps[activeTab];

  return (
    <section id="logistics" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="fill-margix-yellow" />
            Product Family 2 · Logistics Suite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Built for Transporters: <span className="text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow to-amber-400">6 Connected Logistics Apps</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            From single-truck owners to multi-branch part-truckload (PTL) fleets. Take just 2 apps or deploy all 6 to eliminate empty miles, manage godowns, and secure your fleet.
          </p>
        </div>

        {/* Tab Grid Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {logisticsApps.map((app, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-neutral-900 border-margix-yellow shadow-lg shadow-yellow-500/10'
                    : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900/80 hover:border-neutral-700'
                }`}
              >
                <div className={`p-2 rounded-xl w-max mb-3 ${isActive ? 'bg-margix-yellow text-margix-black' : 'bg-neutral-800 text-neutral-300'}`}>
                  {app.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${isActive ? 'text-white' : 'text-neutral-300'}`}>{app.name}</h4>
                  <p className="text-[11px] text-neutral-500 line-clamp-1">{app.role}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Logistics Feature Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-900/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
                  {current.badge}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-2">
                  {current.name}
                </h3>
                <p className="text-margix-yellow font-medium text-sm sm:text-base mb-4">
                  {current.role}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                  {current.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {current.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-amber-400/10 text-margix-yellow flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">{current.metric}</div>
                    <div className="text-xs text-neutral-400 font-semibold uppercase">{current.metricLabel}</div>
                  </div>
                  <div className="w-[1px] h-8 bg-neutral-800"></div>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-all cursor-pointer shadow-md"
                  >
                    <span>Connect Fleet / Book Demo</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Visual Simulated Screen */}
              <div className="lg:col-span-5 bg-black rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between min-h-[360px] shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <span className="text-xs font-bold text-neutral-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      MARGIX LOGISTICS NETWORK
                    </span>
                    <span className="text-[11px] text-margix-yellow font-mono">KYC ENFORCED</span>
                  </div>

                  {activeTab === 0 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                        <div className="flex justify-between items-center text-neutral-400 mb-1">
                          <span>Pune &rarr; Ahmedabad</span>
                          <span className="text-white font-mono font-bold">₹36,000</span>
                        </div>
                        <div className="text-white font-bold text-sm mb-1">Auto Parts Consignment · 16 MT FTL</div>
                        <div className="text-[11px] text-emerald-400">Direct from Manufacturer · 2 Verified Bids</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                        <div className="flex justify-between items-center text-neutral-400 mb-1">
                          <span>Delhi NCR &rarr; Ludhiana</span>
                          <span className="text-white font-mono font-bold">₹22,500</span>
                        </div>
                        <div className="text-white font-bold text-sm mb-1">FMCG Secondary Distribution · 9 MT</div>
                        <div className="text-[11px] text-margix-yellow">Immediate Loading Available</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-neutral-400">
                          <span>Digital Lorry Receipt #LR-8921</span>
                          <span className="text-emerald-400 font-bold">E-Way Connected</span>
                        </div>
                        <div className="text-white font-bold">Truck: MH-12-RN-9942 (Taurus 25 MT)</div>
                        <div className="text-neutral-400 text-[11px]">Consignor: Tata Steel Processing Unit</div>
                        <div className="text-neutral-400 text-[11px]">Consignee: Precision Heavy Engg Pvt Ltd</div>
                        <div className="p-2 bg-black rounded border border-neutral-800 text-[11px] text-margix-yellow">
                          Driver: Ramesh Kumar · Advance ₹12,000 paid via UPI
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-neutral-400">
                          <span>Bhiwandi Hub Godown #3</span>
                          <span className="text-emerald-400 font-bold">142 Parcels Staged</span>
                        </div>
                        <p className="text-neutral-300 text-xs">
                          Cross-dock unloaded from Surat feeder truck; loaded onto 3 outbound delivery tempos.
                        </p>
                        <div className="p-2.5 bg-black rounded border border-neutral-800 text-[11px] space-y-1">
                          <div className="flex justify-between text-neutral-300">
                            <span>COD Pending Collection:</span>
                            <span className="text-emerald-400 font-bold">₹84,200</span>
                          </div>
                          <div className="flex justify-between text-neutral-400">
                            <span>Demurrage/Storage Rate:</span>
                            <span>₹50 / day after 3 free days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-neutral-400">
                          <span>Safety & Document Guard</span>
                          <span className="text-red-400 font-bold">Automated Lock</span>
                        </div>
                        <div className="text-white font-bold">Vehicle: NL-01-AF-4120</div>
                        <div className="p-2.5 bg-red-950/40 rounded border border-red-800/50 text-[11px] text-red-300">
                          ⚠️ National Permit expired on 28 Oct. Vehicle blocked from new trip dispatch until renewal slip is verified.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 4 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-neutral-400">
                          <span>Backhaul Match Engine</span>
                          <span className="text-margix-yellow font-bold">85% Match Rate</span>
                        </div>
                        <p className="text-neutral-300 text-xs">
                          Your truck unloads in Bengaluru on Friday morning. Margix partner pool automatically reserves a return load to Mumbai at 14:00.
                        </p>
                        <div className="p-2 bg-black rounded text-[11px] text-emerald-400">
                          Deadhead avoided: 980 km · Extra net earnings: ₹42,000
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 5 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-neutral-400">
                          <span>Margix Driver Mobile (Android)</span>
                          <span className="text-emerald-400 font-bold">Offline Ready</span>
                        </div>
                        <div className="p-2.5 bg-black rounded border border-neutral-800 text-[11px] space-y-1">
                          <div className="text-white font-bold">Delivery Step 4 of 4: Unloading Completed</div>
                          <div className="text-neutral-400">Receiver: Ramesh Patel · Verified via OTP & Signature</div>
                          <div className="text-margix-yellow">Photo POD Uploaded · ₹18,400 COD Collected</div>
                        </div>
                        <div className="text-[10px] text-neutral-500">
                          Syncs automatically when driver enters 4G range.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Every Package Tracked with Last-Known Location</span>
                  <span>100% Indian Routes</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
