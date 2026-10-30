import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Store, 
  Building2, 
  Truck, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface IndustrySectionProps {
  onOpenContact?: () => void;
}

export default function IndustrySection({ onOpenContact }: IndustrySectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: "manufacturers",
      title: "Manufacturers",
      subtitle: "Steel, auto parts, machinery, chemicals & food",
      icon: <Factory size={24} />,
      mainlyUses: "Sales, purchase, multi-warehouse inventory, double-entry accounts & GST",
      autoFields: "Grade & weight for steel, serial numbers for machinery, batch & expiry dates for food/chemicals",
      highlights: [
        "Track raw materials from purchase order to finished goods delivery",
        "Capture mill test certificates, heat numbers, and exact technical grades",
        "Automated e-invoice & e-way bill generation for heavy industrial shipments",
        "One-click freight dispatch straight to FTL fleet operators"
      ]
    },
    {
      id: "distributors",
      title: "Distributors & Wholesalers",
      subtitle: "FMCG, hardware, electronics & building materials",
      icon: <Building2 size={24} />,
      mainlyUses: "Sales, field-sales mobile app, stock ledger, accounts, ship by truck",
      autoFields: "Carton/case pack ratios, secondary distribution channels, dealer commission tiering",
      highlights: [
        "Equip field sales reps to take orders at retail counters with live stock lookup",
        "Multi-godown inventory management with cross-town transfer tracking",
        "WhatsApp digital product catalogues for instant retail re-ordering",
        "Direct load posting to verified transporters with live freight quotes"
      ]
    },
    {
      id: "retailers",
      title: "Retailers",
      subtitle: "Garment shops, hardware merchants & specialty stores",
      icon: <Store size={24} />,
      mainlyUses: "Fast billing, barcode scanning, stock tracking, accounts & UPI QR",
      autoFields: "Size & color matrices for apparel, warranty periods for appliances, barcode tagging",
      highlights: [
        "Rapid counter billing with pre-printed dynamic UPI QR codes",
        "Automatic purchase bills directly received from Margix distributors",
        "Low-stock alerts preventing missed retail sales",
        "Counter POS interface launching in Phase 2"
      ]
    },
    {
      id: "transporters",
      title: "Transport Companies",
      subtitle: "Full-truckload (FTL) and part-truckload (PTL) fleet operators",
      icon: <Truck size={24} />,
      mainlyUses: "Load marketplace, trips, digital LR, branches & godowns, fleet compliance, driver app",
      autoFields: "Vehicle RC, National & State permits, insurance, fitness, driver DL & Aadhaar",
      highlights: [
        "Generate sequential digital Lorry Receipts (LR) with 1-click e-way bill sync",
        "Run multi-branch part-truckload (PTL) parcel networks with godown cross-dock tracking",
        "Block non-compliant vehicles with automated document expiry locks",
        "Equip drivers with the offline-first Margix Driver App for photo POD & COD logging"
      ]
    },
    {
      id: "3pl",
      title: "3PL & Logistics Partners",
      subtitle: "Collaborative fleet operators pooling cargo and trailers",
      icon: <Share2 size={24} />,
      mainlyUses: "Shared capacity exchange, backhaul route optimization, partner billing",
      autoFields: "Trailer dimensions, cubic capacity, pallet compatibility, partner settlement ledgers",
      highlights: [
        "Monetize empty return trips by bidding on verified return freight",
        "Pool trailer capacity across trusted partner logistics networks",
        "Consolidated partner billing with transparent revenue-sharing ledgers",
        "Cut empty deadhead miles to near zero with AI backhaul routing"
      ]
    }
  ];

  const current = industries[selectedIndustry];

  return (
    <section id="industries" className="py-24 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-amber-600" />
            Zero Custom Coding Required
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Tailored for Your Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">From Day One</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            When you sign up, select your business type and sector. Margix automatically activates the exact product attributes, taxation rules, and logistics workflows you need.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, idx) => {
            const isActive = selectedIndustry === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <span className={isActive ? 'text-margix-yellow' : 'text-neutral-500'}>
                  {ind.icon}
                </span>
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Active Industry Card */}
        <motion.div
          key={selectedIndustry}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border-2 border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700">
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900">{current.title}</h3>
                  <p className="text-sm font-semibold text-amber-800">{current.subtitle}</p>
                </div>
              </div>

              <div className="my-6 p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Auto-Configured Product Fields
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900 flex items-start gap-2">
                  <Layers size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  {current.autoFields}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Operational Strengths
                </div>
                {current.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={13} className="text-amber-800" />
                    </div>
                    <span className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-all cursor-pointer shadow-md"
              >
                <span>Talk to an Industry Specialist</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Column: Key Apps Package */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Recommended Apps Bundle
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-4">
                What They Mainly Use
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed p-4 rounded-xl bg-neutral-50 border border-neutral-200 mb-6">
                {current.mainlyUses}
              </p>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Pay Only For What You Use
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Start with just 2 apps (e.g. Sales & Billing + Ship by Truck) and activate Inventory or Accounts when your volume grows.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

