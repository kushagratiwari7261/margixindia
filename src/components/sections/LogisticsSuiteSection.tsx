import { useState } from 'react';
import {
  Truck,
  Warehouse,
  ShieldCheck,
  Share2,
  Smartphone,
  Route,
  ArrowRight,
  Check,
  MapPin
} from 'lucide-react';
import InteractiveLogisticsAnimation from '../hero/InteractiveLogisticsAnimation';

interface LogisticsSuiteSectionProps {
  onOpenContact?: () => void;
}

export default function LogisticsSuiteSection({ onOpenContact }: LogisticsSuiteSectionProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: "ftl",
      title: "Full Truck Load (FTL) Transportation",
      subtitle: "Dedicated multi-axle freight with verified carriers",
      image: "/images/ssc-ftl.png",
      tag: "Pan-India FTL",
      icon: <Truck size={20} className="text-[#B08D00]" />,
      summary: "End-to-end dedicated truckload logistics across national interstate corridors with sequential digital LRs and live GPS milestone updates.",
      points: [
        "Dedicated multi-axle container trailer fleet allocation",
        "Direct one-click e-way bill linking and automated consignee alerts",
        "Diesel slips, toll receipts, and driver advance ledgers recorded per trip",
        "Transparent lane pricing with guaranteed vehicle placement"
      ]
    },
    {
      id: "ptl",
      title: "Part Truck Load (PTL) & Parcel Network",
      subtitle: "Branch booking, hub cross-docking & cash on delivery",
      image: "/images/ssc-ptl.png",
      tag: "Parcel Logistics",
      icon: <Route size={20} className="text-[#B08D00]" />,
      summary: "Cost-effective transportation for fractional cargo and industrial parcel consignments across networked hub godowns.",
      points: [
        "Local branch booking counter with bilti generation in 30 seconds",
        "Cross-dock hub staging with volumetric weight & carton tracking",
        "Door-delivery challans and Cash on Delivery (COD) collection logs",
        "Automated demurrage rules and storage fee calculation"
      ]
    },
    {
      id: "warehousing",
      title: "Warehousing & Godown Staging",
      subtitle: "Strategic multi-city inventory depots and cross-dock hubs",
      image: "/images/ssc-warehousing.png",
      tag: "Godown Hubs",
      icon: <Warehouse size={20} className="text-[#B08D00]" />,
      summary: "Multi-godown visibility with batch-level tracking, serial numbers, and inter-branch in-transit transfers across India.",
      points: [
        "Bhiwandi, Pune, Gurugram, and Bengaluru transit hubs",
        "Goods Received Notes (GRN) with barcode scanning at entry gates",
        "FIFO stock valuation and automated low-threshold stockout alerts",
        "Direct export of stock valuation ledgers for balance sheet reporting"
      ]
    },
    {
      id: "fleet-compliance",
      title: "Fleet & Driver Safety Compliance",
      subtitle: "Digital document records with automated dispatch locks",
      image: "/images/stitch-trucks-hub.png",
      tag: "Zero Challans",
      icon: <ShieldCheck size={20} className="text-[#B08D00]" />,
      summary: "Maintain complete digital compliance for every vehicle and driver. Eliminate roadside fines with automatic expiry locks.",
      points: [
        "National Permit, State Permits, RC, Fitness, Insurance, and PUC",
        "Driver license verification, Aadhaar check, and medical fitness logs",
        "Automated warning alerts 30, 15, and 7 days prior to expiry",
        "Safety compliance gate locks expired vehicles from new load assignment"
      ]
    },
    {
      id: "3pl-pool",
      title: "3PL Capacity Pool & Return Backhauls",
      subtitle: "Collaborative fleet sharing eliminating deadhead miles",
      image: "/images/stitch-software-3d-truck.png",
      tag: "97% Utilization",
      icon: <Share2 size={20} className="text-[#B08D00]" />,
      summary: "Partner network allowing transport operators to exchange excess capacity and secure return loads at delivery destinations.",
      points: [
        "Automated backhaul matching fills return trips at your destination",
        "Shared partner trailer capacity reduces vacant deadhead miles",
        "Pre-negotiated B2B partner rates with transparent revenue sharing",
        "Consolidated partner billing with automated debit/credit ledgers"
      ]
    },
    {
      id: "driver-app",
      title: "Offline-First Driver Mobile App",
      subtitle: "Turn-by-turn checkpoints and digital photo POD",
      image: "/images/ssc-distribution.png",
      tag: "Works Offline",
      icon: <Smartphone size={20} className="text-[#B08D00]" />,
      summary: "Simple, rugged mobile tool for truck drivers that operates 100% without internet and syncs when 4G connectivity returns.",
      points: [
        "Step-by-step trip checkpoints: Gate in, loading, toll, gate arrival",
        "Geotagged & timestamped photo Proof of Delivery (POD) with signature",
        "On-spot Cash on Delivery (COD) collection receipt via instant SMS",
        "Offline-first local cache ensures drivers are never stranded by poor signal"
      ]
    }
  ];

  return (
    <section id="logistics-services" className="py-20 lg:py-24 bg-neutral-50/70 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-neutral-900 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B08D00]" />
              <span>Road Freight Division</span>
              <span className="text-neutral-400 font-normal">•</span>
              <span className="text-[#B08D00]">Pan-India Logistics & Fleet Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
              Pan-India Road Freight & Fleet Operations
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Move full truckload shipments or manage regional parcel branch networks. Real vehicles, verified drivers, transparent lane pricing, and zero deadhead return miles.
            </p>
          </div>

                      {/* 6 High-Impact Visual Cards Grid (Inspired by smartsupplychain.in design) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {services.map((item, idx) => (
                          <div
                            key={item.id}
                            className="group relative rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                            onClick={() => setSelectedService(selectedService === idx ? null : idx)}
                          >
                            <div>
                              {/* Image Container with Zoom Animation */}
                              <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                  loading="lazy"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-neutral-900 border border-neutral-200 shadow-2xs">
                                  {item.tag}
                                </div>
                              </div>

                              {/* Content Body */}
                              <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                                    {item.icon}
                                  </div>
                                  <span className="text-xs font-semibold text-neutral-500">{item.subtitle}</span>
                                </div>

                                  <h3 className="text-lg font-black text-neutral-900 group-hover:text-[#B08D00] transition-colors leading-snug mb-2.5">
                                    {item.title}
                                  </h3>

                                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                                    {item.summary}
                                  </p>

                                  {/* Bullet points */}
                                  <ul className="space-y-2 border-t border-neutral-100 pt-3">
                                    {item.points.slice(0, 3).map((pt, pIdx) => (
                                      <li key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                                        <Check size={13} className="text-[#B08D00] shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                    {/* Bottom Card Action Strip */}
                    <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-800 group-hover:text-amber-900 transition-colors flex items-center gap-1.5">
                        <span>Explore Workflow</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                        Pan-India Transit
                      </span>
                    </div>
                  </div>
          ))}
              </div>

        {/* Interactive Volumetric Packing & Backhaul Simulator */ }
              < div className = "mt-14" >
          <div className="mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#B08D00] text-[11px] font-bold uppercase tracking-wider mb-2">
                Live Interactive Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                Trailer Volume Packing & Return Backhaul Matching
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                See how Margix scans consignment lots, fills empty trailer capacity from 28% to 97%, and eliminates deadhead miles on return trips.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Interactive Model Active</span>
            </div>
          </div>

          <InteractiveLogisticsAnimation />
        </div>

          {/* Action Strip */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B08D00] shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-900">
                  Operating on 500+ Interstate Indian Highway Corridors
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  From Gujarat and Maharashtra industrial belts to Tamil Nadu and NCR manufacturing hubs.
                </p>
              </div>
            </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#08101d] hover:bg-[#112038] active:translate-y-px text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <span>Book Freight / Dispatch Truck</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
