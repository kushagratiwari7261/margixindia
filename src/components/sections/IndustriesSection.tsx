import {
  Factory,
  Car,
  ShoppingBag,
  Pill,
  Shirt,
  Cpu,
  ArrowRight,
  Check
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenContact?: () => void;
}

export default function IndustriesSection({ onOpenContact }: IndustriesSectionProps) {
  const industries = [
    {
      id: "auto",
      title: "Automotive & Heavy Engineering",
      icon: <Car size={20} className="text-[#B08D00]" />,
      image: "/images/ssc-ftl.png",
      tag: "Assembly & OEM",
      desc: "Synchronized JIT supply runs between component vendors and auto assembly plants. Multi-piece carton shipping labels and serial number tracking.",
      points: ["Tier-1 & Tier-2 vendor part tracking", "Zero line-stoppage emergency hot-shot runs", "Returnable packaging & crate reconciliation"]
    },
    {
      id: "steel",
      title: "Steel, Metals & Heavy Machinery",
      icon: <Factory size={20} className="text-[#B08D00]" />,
      image: "/images/stitch-truck-highway.png",
      tag: "Heavy Haulage",
      desc: "Grade, heat, and weight tracking in bills. Heavy-payload multi-axle Taurus trailers for coils, billets, angles, and industrial fabrications.",
      points: ["Weight slip & weighbridge integration", "Direct e-way bill generation for high-value metal", "Driver advance and toll reconciliation"]
    },
    {
      id: "fmcg",
      title: "FMCG, Food & Agro Commodities",
      icon: <ShoppingBag size={20} className="text-[#B08D00]" />,
      image: "/images/ssc-distribution.png",
      tag: "Rapid Distribution",
      desc: "Batch and expiry tracking, distributor rate schemes, primary factory-to-godown freight, and secondary door delivery with cash on delivery.",
      points: ["Batch & expiry date threshold locks", "WhatsApp catalogue for retail dealer orders", "Multi-godown FIFO inventory valuation"]
    },
    {
      id: "pharma",
      title: "Pharmaceuticals & Healthcare",
      icon: <Pill size={20} className="text-[#B08D00]" />,
      image: "/images/ssc-warehousing.png",
      tag: "Regulated Quality",
      desc: "Strict batch accountability, salt formula tracking, compliant GST invoicing, and sealed parcel transit through verified courier hubs.",
      points: ["Complete batch audit trail for drug inspectors", "Dynamic UPI QR for instant distributor collections", "Tamper-evident consignment handling"]
    },
    {
      id: "textiles",
      title: "Textiles, Yarns & Garments",
      icon: <Shirt size={20} className="text-[#B08D00]" />,
      image: "/images/ssc-ptl.png",
      tag: "Piece & Carton",
      desc: "Size, color, and fabric master records. Parcel booking from manufacturing hubs (Surat, Tirupur, Ludhiana) to wholesale trade markets.",
      points: ["Multi-piece bale & carton bilti generation", "Demurrage automation for transit godowns", "Direct customer ledger statements on WhatsApp"]
    },
    {
      id: "electronics",
      title: "Electrical, Tools & Hardware",
      icon: <Cpu size={20} className="text-[#B08D00]" />,
      image: "/images/stitch-software-3d-truck.png",
      tag: "Serial Tracking",
      desc: "Individual tool serial warranty tracking, fast retail counter POS, multi-branch inventory transfers, and parcel distribution networks.",
      points: ["Machine serial tracking prevents false warranty", "3-way supplier matching prevents duplicate payment", "Inter-branch in-transit godown status"]
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Target Segments
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
            Industries We Power Across India
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            From raw material procurement and factory accounting to highway truck dispatch and customer delivery proof.
          </p>
        </div>

        {/* 6 Industry Cards with Rich Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative w-full h-44 overflow-hidden bg-neutral-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-neutral-900 border border-neutral-200 shadow-2xs">
                    {ind.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200">
                      {ind.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B08D00]">Specialized Fit</span>
                  </div>

                  <h3 className="text-lg font-black text-neutral-900 group-hover:text-amber-800 transition-colors mb-2 leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {ind.desc}
                  </p>

                  <ul className="space-y-1.5 border-t border-neutral-200/70 pt-3">
                    {ind.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check size={13} className="text-[#B08D00] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-neutral-100/60 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={onOpenContact}
                  className="text-xs font-bold text-neutral-800 group-hover:text-amber-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Industry Blueprint</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}