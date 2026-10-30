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

  const apps = [
    {
      id: "marketplace",
      name: "Load Marketplace",
      role: "Verified Freight Bidding for Transporters",
      icon: <Route size={22} />,
      tag: "KYC-Verified Only",
      desc: "Connects shippers directly with verified fleet operators across India. See loads posted by nearby manufacturers and distributors, submit live bids, and secure guaranteed cargo.",
      bullets: [
        "Real-time broadcast of loads posted by vetted trade & manufacturing companies",
        "Instant competitive bidding engine with clear lane pricing transparency",
        "Strict KYC verification: Only transporters with active GST and PAN can quote",
        "Immediate booking confirmation and direct digital consignment dispatch"
      ],
      metric: "Zero Broker Cuts",
      preview: {
        lane: "Pune &rarr; Ahmedabad · 16 MT FTL",
        rate: "₹36,000",
        detail: "Direct from verified manufacturer · 2 competing bids"
      }
    },
    {
      id: "ftl-ops",
      name: "Transport Operations (FTL)",
      role: "Full Truckload Dispatch & Digital LR",
      icon: <Truck size={22} />,
      tag: "Full Truckload Suite",
      desc: "Complete operational management for dedicated full truckloads. Generate sequential digital Lorry Receipts (LR), link e-way bills with one click, track driver advances, and share live trip links.",
      bullets: [
        "Sequential digital Lorry Receipts (LR) with custom transporter branding",
        "Direct e-way bill linking: Sync consignor, consignee, and HSN details in 1 click",
        "Trip expense tracking: Diesel slips, toll receipts, and driver advance ledgers",
        "Live trip tracking link with automated milestone updates to customers"
      ],
      metric: "1-Click LR & E-Way",
      preview: {
        lane: "Digital LR #LR-8921 (MH-12-RN-9942)",
        rate: "25 MT Taurus",
        detail: "E-Way bill auto-synced · Driver advance ₹12,000 paid"
      }
    },
    {
      id: "ptl-godown",
      name: "Branch & Godown (PTL)",
      role: "Part-Truckload, Hubs & Cross-Docking",
      icon: <Warehouse size={22} />,
      tag: "Part-Truckload Network",
      desc: "Purpose-built for Indian parcel, sundries, and PTL logistics. Manage parcel bookings at local branches, cross-dock loading, godown staging, and cash on delivery.",
      bullets: [
        "Branch booking counter: Generate parcel bilti/LR with multi-package weight & volume",
        "Godown staging: Track goods unloaded into hubs and loaded onto outbound trunk routes",
        "Last-mile delivery runs with door-delivery challans and Cash on Delivery (COD)",
        "Demurrage and storage charge automation after specified free storage days",
        "Inter-branch settlement ledgers reconciling freight collections across network hubs"
      ],
      metric: "Godown Traceability",
      preview: {
        lane: "Bhiwandi Hub Godown #3",
        rate: "142 Parcels Staged",
        detail: "COD Pending: ₹84,200 · Storage charges auto-calculated"
      }
    },
    {
      id: "fleet",
      name: "Fleet & Driver Compliance",
      role: "Automatic Expiry Alerts & Dispatch Locks",
      icon: <ShieldCheck size={22} />,
      tag: "Proactive Compliance",
      desc: "Eliminate roadside penalties and challans. Maintain digital records of every truck and driver with automated expiry alerts that block non-compliant vehicles from taking trips.",
      bullets: [
        "Vehicle records: RC, National Permit, State Permits, Fitness, Insurance, PUC",
        "Driver compliance: Driving license verification, Aadhaar check, and medical fitness logs",
        "Automated alerts 30, 15, and 7 days prior to document expiry",
        "Safety compliance gate: Expired vehicles are automatically locked from dispatch"
      ],
      metric: "Zero Fines",
      preview: {
        lane: "Vehicle: NL-01-AF-4120",
        rate: "National Permit Alert",
        detail: "Document expired &bull; Vehicle automatically locked from new trips"
      }
    },
    {
      id: "3pl-pool",
      name: "3PL Capacity Pool",
      role: "Shared Partner Fleet & Backhaul Matching",
      icon: <Share2 size={22} />,
      tag: "Collaborative Logistics",
      desc: "Logistics companies pooling resources to maximize utilization. Exchange excess capacity, book spare space in partner trucks, and eliminate empty deadhead return trips.",
      bullets: [
        "Partner network: Share unutilized trailer space with trusted partner operators",
        "Automated backhaul matching: Fill return trips automatically at your destination",
        "B2B partner rates with transparent revenue-sharing and booking rules",
        "Consolidated partner billing with automated debit/credit reconciliations"
      ],
      metric: "97% Utilization",
      preview: {
        lane: "Bengaluru &rarr; Mumbai Return Match",
        rate: "Deadhead Avoided: 980 km",
        detail: "Partner pool reserved return load &bull; Net extra revenue: ₹42,000"
      }
    },
    {
      id: "driver-app",
      name: "Driver Mobile App",
      role: "Offline-First Mobile Tool for Drivers",
      icon: <Smartphone size={22} />,
      tag: "Works 100% Offline",
      desc: "A clean, simple mobile tool engineered for truck drivers. Delivers step-by-step trip instructions, captures photo proof-of-delivery (POD) and signatures, and works with no cellular network.",
      bullets: [
        "Step-by-step trip checkpoints: Gate entry, loading, toll crossing, and delivery arrival",
        "Geotagged & timestamped photo Proof of Delivery (POD) with consignee signature",
        "On-spot Cash on Delivery (COD) collection logging with instant SMS receipt",
        "Offline-first architecture: Operates without internet; auto-syncs when 4G returns"
      ],
      metric: "Offline-First",
      preview: {
        lane: "Delivery Step 4 of 4: Completed",
        rate: "Photo POD Uploaded",
        detail: "Consignee OTP verified &bull; ₹18,400 COD collected &bull; Auto-synced"
      }
    }
  ];

  const current = apps[activeTab];

  return (
    <section id="logistics" className="py-20 lg:py-28 bg-margix-black text-white relative overflow-hidden border-b border-neutral-800">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-margix-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="fill-margix-yellow" />
            Product Family 2 &bull; Logistics Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Built for Transporters: <span className="text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow to-amber-400">6 Connected Logistics Apps</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            From single-truck operators to national part-truckload (PTL) fleets. Take just 2 apps or deploy all 6 to eliminate deadhead miles, manage godowns, and track your fleet.
          </p>
        </div>

        {/* Responsive App Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {apps.map((app, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-margix-yellow text-margix-black shadow-lg shadow-yellow-500/20'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-850'
                }`}
              >
                <span className={isActive ? 'text-margix-black' : 'text-margix-yellow'}>
                  {app.icon}
                </span>
                <span>{app.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Logistics Feature Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 lg:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-3">
                  {current.tag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-1">
                  {current.name}
                </h3>
                <p className="text-margix-yellow font-semibold text-sm sm:text-base mb-4">
                  {current.role}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {current.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {current.bullets.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-margix-yellow/20 text-margix-yellow flex items-center justify-center shrink-0">
                        <CheckCircle2 size={13} />
                      </div>
                      <span className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Core Guarantee: <span className="text-white font-black">{current.metric}</span>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-all cursor-pointer shadow-md"
                  >
                    <span>Connect Fleet / Book Demo</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-5 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <span className="text-xs font-bold text-neutral-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-margix-yellow animate-pulse"></span>
                      MARGIX LOGISTICS PLATFORM
                    </span>
                    <span className="text-[11px] text-margix-yellow font-mono font-bold">LIVE NETWORK</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-2">
                    <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                      Active Execution
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {current.preview.lane}
                    </div>
                    <div className="text-xl font-black text-margix-yellow">
                      {current.preview.rate}
                    </div>
                    <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-850">
                      {current.preview.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Margix Pvt Ltd Fleet Engine</span>
                  <span>100% Indian Highway Routes</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
