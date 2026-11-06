import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store,
  Factory,
  Globe,
  Coins,
  Network,
  Layers,
  ShieldCheck,
  Package,
  Wrench,
  Truck,
  BarChart,
  Code2,
  ArrowRight,
  Clock
} from 'lucide-react';

interface FutureSolutionsSectionProps {
  onOpenContact?: () => void;
}

export default function FutureSolutionsSection({ onOpenContact }: FutureSolutionsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'software' | 'logistics' | 'fintech'>('all');

  const categories = [
    { id: 'all', label: 'All Expansion Modules' },
    { id: 'software', label: 'Commercial Software' },
    { id: 'logistics', label: 'Road Logistics' },
    { id: 'fintech', label: 'B2B Trade & Financing' },
  ];

  const solutions = [
    // 1. Commercial Software
    {
      category: 'software',
      icon: <Store size={18} className="text-[#FF7D44]" />,
      title: "Point of Sale (POS) for Retail Counters",
      phase: "Q1 2027",
      badge: "Software Suite",
      description: "Counter billing for retail shops, hardware distributors, and trade counters. Features barcode scanning, thermal receipt printing, cash drawer management, and offline transaction syncing."
    },
    {
      category: 'software',
      icon: <Globe size={18} className="text-[#FF7D44]" />,
      title: "ONDC, Amazon & Marketplace Connectors",
      phase: "Q2 2027",
      badge: "Software Suite",
      description: "Two-way integration with ONDC, Amazon India, Flipkart, and proprietary web storefronts. Unified central inventory pool eliminates overselling and routes freight automatically."
    },
    {
      category: 'software',
      icon: <Factory size={18} className="text-[#FF7D44]" />,
      title: "Manufacturing MRP & Production Planning",
      phase: "Q2 2027",
      badge: "Software Suite",
      description: "Multi-level Bills of Materials (BOM), shop-floor work orders, raw material consumption tracking, and scrap accounting tailored for Indian MSME factory operations."
    },
    {
      category: 'software',
      icon: <Layers size={18} className="text-[#FF7D44]" />,
      title: "Field Sales CRM & Dealer Network",
      phase: "Q1 2027",
      badge: "Software Suite",
      description: "Field sales mobile application with geo-fenced dealer visits, instant purchase order collection, outstanding payment collections, and distributor territory mapping."
    },

    // 2. Road Logistics
    {
      category: 'logistics',
      icon: <Package size={18} className="text-[#FF7D44]" />,
      title: "Express Parcel & Surface Courier Integration",
      phase: "Q1 2027",
      badge: "Logistics Service",
      description: "Door-to-door courier booking for small cartons, spare parts, and urgent parcels through leading national carriers alongside dedicated full-truck and part-truck operations."
    },
    {
      category: 'logistics',
      icon: <Truck size={18} className="text-[#FF7D44]" />,
      title: "Fractional Truck-Space Spot Auctions",
      phase: "Q2 2027",
      badge: "Logistics Service",
      description: "Real-time spot auctions for fractional unutilized truck volume. Transporters with partially filled trailers can auction leftover capacity to nearby shippers along active transit lanes."
    },
    {
      category: 'logistics',
      icon: <ShieldCheck size={18} className="text-[#FF7D44]" />,
      title: "Standardized Transit Insurance & Claims",
      phase: "Q1 2027",
      badge: "Logistics Service",
      description: "Single-click transit insurance booking per consignment with standardized digital dispute filing, geotagged incident photos, and fast-track carrier arbitration."
    },
    {
      category: 'logistics',
      icon: <Wrench size={18} className="text-[#FF7D44]" />,
      title: "Warehouse Yard & Dock Door Scheduling",
      phase: "Q3 2027",
      badge: "Logistics Service",
      description: "Dock door appointment booking for large manufacturing depots and 3PL hubs to eliminate truck detention queues, driver idling, and gate congestion."
    },

    // 3. B2B Trade & Financing
    {
      category: 'fintech',
      icon: <Coins size={18} className="text-[#FF7D44]" />,
      title: "Working Capital Invoice Discounting",
      phase: "Q2 2027",
      badge: "Trade Financing",
      description: "Institutional credit lines against verified GST invoices and delivery PODs. Access up to 80% immediate cash advances through RBI-licensed banking partners."
    },
    {
      category: 'fintech',
      icon: <Network size={18} className="text-[#FF7D44]" />,
      title: "Direct B2B Commerce Network",
      phase: "Q3 2027",
      badge: "Trade Network",
      description: "Connect verified manufacturers, distributors, and bulk raw material suppliers on a shared directory with verified GSTIN profiles, trade ratings, and standardized terms."
    },
    {
      category: 'fintech',
      icon: <BarChart size={18} className="text-[#FF7D44]" />,
      title: "Interstate Lane & Commodity Benchmarks",
      phase: "Q2 2027",
      badge: "Market Intelligence",
      description: "Aggregated, anonymized rate intelligence across major Indian freight corridors (e.g. Mumbai-Delhi, Pune-Ahmedabad) and wholesale trade pricing trends."
    },
    {
      category: 'fintech',
      icon: <Code2 size={18} className="text-[#FF7D44]" />,
      title: "Enterprise Open REST APIs & Webhooks",
      phase: "Q1 2027",
      badge: "Developer Platform",
      description: "Comprehensive REST APIs and event webhooks for enterprise ERP integration (SAP, Oracle, custom systems), enabling automated consignment sync and inventory feeds."
    }
  ];

  const filteredSolutions = selectedCategory === 'all'
    ? solutions
    : solutions.filter(s => s.category === selectedCategory);

  return (
        <section id="roadmap" className="py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="inline-block px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
                    Product Roadmap
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
                    Expanding Capabilities for Commerce & Logistics
                  </h2>
                    <p className="text-neutral-600 text-base leading-relaxed">
                      Our active development roadmap extends our commercial software suite and logistics network to support complex manufacturing, retail channels, and trade financing.
                    </p>
                </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id as any)}
                        className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${selectedCategory === cat.id
                            ? 'bg-[#0f172a] text-white border-neutral-900 shadow-sm'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      <AnimatePresence>
                          {
                            filteredSolutions.map((sol, idx) => (
                              <motion.div
                                key={sol.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.15, delay: idx * 0.03 }}
                                className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-6 flex flex-col justify-between hover:border-neutral-300 hover:bg-white transition-all shadow-sm"
                              >
                                <div>
                                      <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="p-2 rounded-lg bg-orange-50 border border-orange-200">
                                          {sol.icon}
                                        </div>
                                          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                                            <Clock size={12} className="text-[#FF7D44]" />
                                            <span>{sol.phase}</span>
                                          </div>
                                        </div>

                                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7D44] block mb-1">
                                            {sol.badge}
                                          </span>
                                          <h4 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                                            {sol.title}
                                          </h4>
                                          <p className="text-xs text-neutral-600 leading-relaxed">
                                            {sol.description}
                                          </p>
                                      </div>
                                    </motion.div>
            ))}
                                  </AnimatePresence>
        </div>

                      {/* Consultation Callout */}
                      <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-base font-bold text-neutral-900">
                              Need custom integration with legacy enterprise ERPs?
                            </h4>
                              <p className="text-xs text-neutral-600 mt-1">
                                We provide dedicated REST APIs and custom connectors for SAP, Oracle, and proprietary legacy databases.
                              </p>
                            </div>
                            <button
                              onClick={onOpenContact}
                              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white font-semibold text-xs transition-all border border-neutral-900 shadow-sm cursor-pointer"
                            >
                              <span>Consult Enterprise Team</span>
                              <ArrowRight size={14} />
                            </button>
                        </div>

                      </div>
                    </section>
                    );
}
