import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, 
  Bot, 
  Users, 
  Factory, 
  Globe, 
  Coins, 
  Network, 
  Sparkles, 
  PhoneCall, 
  Layers, 
  ShieldCheck, 
  Package, 
  Wrench, 
  Truck, 
  BarChart, 
  Code2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface FutureSolutionsSectionProps {
  onOpenContact?: () => void;
}

export default function FutureSolutionsSection({ onOpenContact }: FutureSolutionsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'retail' | 'ai' | 'operations' | 'ecosystem'>('all');

  const categories = [
    { id: 'all', label: 'All Upcoming Solutions' },
    { id: 'retail', label: 'Retail & Omnichannel' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'operations', label: 'Manufacturing & HR' },
    { id: 'ecosystem', label: 'Network & Fintech' },
  ];

  const solutions = [
    // 1. Retail & Omnichannel
    {
      category: 'retail',
      icon: <Store size={22} className="text-amber-500" />,
      title: "Point of Sale (POS) for Retail Counters",
      phase: "Phase 2",
      badge: "Retail Operations",
      description: "Fast counter billing designed for hardware stores, supermarkets, and garment retailers. Features rapid barcode scanning, thermal receipt printing, cash drawer reconciliation, and offline transaction buffering."
    },
    {
      category: 'retail',
      icon: <Globe size={22} className="text-blue-500" />,
      title: "ONDC, Amazon & Flipkart E-Commerce Sync",
      phase: "Phase 2",
      badge: "Omnichannel Commerce",
      description: "Direct bi-directional sync with government-backed ONDC, Amazon India, Flipkart, and your branded online store. Unified inventory pool prevents overselling and auto-books courier or truck dispatch."
    },
    {
      category: 'retail',
      icon: <Package size={22} className="text-emerald-500" />,
      title: "Express Parcel & Courier Shipping",
      phase: "Phase 2",
      badge: "Multi-Modal Freight",
      description: "Seamless door-to-door courier integration for envelopes, cartons, and small parcels through India's premier courier partners alongside full-truck (FTL) and part-truck (PTL) operations."
    },

    // 2. AI & Automation
    {
      category: 'ai',
      icon: <Bot size={22} className="text-purple-500" />,
      title: "Multilingual AI Copilot (Voice & Chat)",
      phase: "Phase 2",
      badge: "Conversational AI",
      description: "Voice and chat assistant fluent in English, Hindi, and regional Indian languages. Query inventory, draft orders, summarize debtor aging, and execute actions with strict human-in-the-loop confirmation."
    },
    {
      category: 'ai',
      icon: <PhoneCall size={22} className="text-amber-500" />,
      title: "AI Voice-Calling Customer Agents",
      phase: "Phase 2",
      badge: "Autonomous Telephony",
      description: "Smart outbound AI calling agents speaking Indian languages. Automatically calls retail buyers for payment reminders, confirms delivery addresses, and notifies consignees when trucks arrive at gates."
    },
    {
      category: 'ai',
      icon: <Truck size={22} className="text-rose-500" />,
      title: "Spare Truck-Space Spot Bidding",
      phase: "Phase 2",
      badge: "Dynamic Capacity",
      description: "Real-time spot auctions for fractional unutilized truck capacity. Transporters with partially filled trucks can auction leftover space to nearby shippers along their active route."
    },
    {
      category: 'ai',
      icon: <ShieldCheck size={22} className="text-teal-500" />,
      title: "Full Transit Claims & Dispute Arbitration",
      phase: "Phase 2",
      badge: "Risk & Compliance",
      description: "Standardized digital incident handling for in-transit damages, shortages, or delays. Captures geotagged photo evidence, insurance claims documentation, and fast-track dispute settlement."
    },

    // 3. Manufacturing & Operations
    {
      category: 'operations',
      icon: <Factory size={22} className="text-indigo-500" />,
      title: "Manufacturing MRP & Production Planning",
      phase: "Phase 2",
      badge: "Industrial Production",
      description: "Full industrial MRP with multi-level Bills of Materials (BOM), shop-floor routing, work orders, job work outsourcing tracking, scrap accounting, and automated raw material replenishment."
    },
    {
      category: 'operations',
      icon: <Users size={22} className="text-sky-500" />,
      title: "CRM (Customer Relationship Management)",
      phase: "Phase 2",
      badge: "Sales Growth",
      description: "Track prospective buyers from first lead to recurring orders. Manage deal pipelines, customer interaction histories, quote follow-ups, and sales team target achievement."
    },
    {
      category: 'operations',
      icon: <Layers size={22} className="text-orange-500" />,
      title: "HR & Employee Payroll Management",
      phase: "Phase 2",
      badge: "Workforce",
      description: "Integrated biometric and mobile check-in attendance, shift management, leave approvals, automated salary slips, PF/ESI statutory compliance, and one-click bank disbursement files."
    },

    // 4. Ecosystem & Fintech
    {
      category: 'ecosystem',
      icon: <Network size={22} className="text-emerald-500" />,
      title: "Margix B2B Business Network",
      phase: "Phase 3",
      badge: "Connected Trade",
      description: "Interconnect thousands of verified Indian manufacturers, distributors, and logistics partners. Discover reliable trade partners, check trust ratings, and exchange purchase orders and invoices with zero latency."
    },
    {
      category: 'ecosystem',
      icon: <Coins size={22} className="text-amber-500" />,
      title: "Embedded Working Capital & Invoice Financing",
      phase: "Phase 3",
      badge: "Fintech Partnerships",
      description: "Instant invoice discounting and freight advances provided via RBI-regulated banking and NBFC partners directly inside Margix. Accelerate cash flow based on verified ledger transactions (Margix facilitates, does not lend)."
    },
    {
      category: 'ecosystem',
      icon: <Wrench size={22} className="text-cyan-500" />,
      title: "Post-Sales Service & Warranty Tracking",
      phase: "Phase 3",
      badge: "After-Sales Lifecycle",
      description: "Lifecycle tracking for machines, appliances, and industrial assets. Manage annual maintenance contracts (AMC), schedule field technician visits, and track customer replacement parts."
    },
    {
      category: 'ecosystem',
      icon: <Truck size={22} className="text-yellow-500" />,
      title: "Equipment & Vehicle Rental Management",
      phase: "Phase 3",
      badge: "Asset Leasing",
      description: "Built for equipment rental providers and specialized fleet leasing. Log operating hours, track equipment location via IoT, manage return condition reports, and automate recurring rental invoices."
    },
    {
      category: 'ecosystem',
      icon: <Globe size={22} className="text-blue-500" />,
      title: "Dealer & Franchise Self-Service Portals",
      phase: "Phase 3",
      badge: "Channel Portals",
      description: "White-labeled, mobile-friendly web portals where authorized dealers and stockists can independently check inventory availability, download tax invoices, view ledger statements, and submit bulk orders."
    },
    {
      category: 'ecosystem',
      icon: <BarChart size={22} className="text-violet-500" />,
      title: "Anonymized Industry Efficiency Benchmarks",
      phase: "Phase 3",
      badge: "Market Intelligence",
      description: "Benchmark your freight costs per ton-kilometer, inventory turnaround days, and debtor collection periods against real, anonymized industry peers across India."
    },
    {
      category: 'ecosystem',
      icon: <Code2 size={22} className="text-pink-500" />,
      title: "Open API Marketplace & Developer SDKs",
      phase: "Phase 3",
      badge: "Extensible Platform",
      description: "Enterprise REST & GraphQL APIs, webhooks, and SDKs. Seamlessly integrate Margix with legacy ERPs (SAP, Oracle), custom IoT GPS trackers, and proprietary warehouse hardware."
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  return (
    <section id="future-solutions" className="py-24 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-margix-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="fill-margix-yellow" />
            Full Product Horizon · Margix Pvt Ltd
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            All Upcoming Solutions & Products <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow to-amber-400">
              We Are Delivering
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Margix Pvt Ltd is built on a shared, modular micro-kernel. Beyond our 15 Day-One apps, here is the complete spectrum of advanced solutions engineered for subsequent releases.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-margix-yellow text-neutral-950 shadow-lg shadow-yellow-500/20'
                    : 'bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Solutions Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredSolutions.map((item, idx) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                        {item.phase}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-margix-yellow border border-amber-400/20">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-margix-yellow transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Part of Product Horizon
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400">Margix Pvt Ltd</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-margix-yellow uppercase tracking-widest block mb-1">
              Have Specific Enterprise or Custom Requirements?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Partner with Margix Pvt Ltd for Your Digital Transformation
            </h4>
            <p className="text-neutral-400 text-sm mt-1 max-w-2xl">
              Whether you need POS counter hardware integration, custom ERP hooks, or early access to our AI copilot, our product engineering team works directly with our clients.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-8 py-4 rounded-xl bg-margix-yellow text-neutral-950 font-black text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all cursor-pointer shadow-lg shadow-yellow-500/20 flex items-center gap-2"
          >
            <span>Request Roadmap Briefing</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

