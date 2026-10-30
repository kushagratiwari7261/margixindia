import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface RoadmapSectionProps {
  onOpenContact?: () => void;
}

export default function RoadmapSection({ onOpenContact }: RoadmapSectionProps) {
  const phases = [
    {
      phase: "Phase 1",
      timing: "Day-One Release · Q1 2027",
      status: "In Development & Pilot",
      statusColor: "text-amber-500 bg-amber-50 border-amber-200",
      title: "Core Business Suite + Logistics Platform",
      description: "The complete foundation connecting daily MSME business operations with freight transport.",
      deliverables: [
        "9 Business Apps (Sales, Purchase, Inventory, Accounts/GST replacing Tally, Parties, Reports, Admin, Ship by Truck, WhatsApp Catalogue)",
        "6 Logistics Apps (Load Marketplace, FTL Ops, Branch & Godown PTL, Fleet, 3PL Pool, Driver App)",
        "2 Offline-First Android Mobile Apps (Business & Driver)",
        "Automated 1-Click Data Migration from Tally & Excel",
        "Direct E-Invoice, E-Way Bill & Dynamic UPI QR integration"
      ]
    },
    {
      phase: "Phase 2",
      timing: "Post-Launch Expansion",
      status: "Architected",
      statusColor: "text-blue-500 bg-blue-50 border-blue-200",
      title: "Retail POS, Multilingual AI Copilot & E-Commerce",
      description: "Extending reach to retail counters, consumer channels, and conversational intelligence.",
      deliverables: [
        "Point of Sale (POS) for fast retail counters with barcode thermal printing",
        "Margix AI Copilot: Conversational voice & text in English, Hindi & regional languages with human-in-the-loop confirmation",
        "Full CRM, HR & Employee Payroll modules",
        "Direct E-Commerce Sync: Amazon, Flipkart, ONDC, and branded online stores",
        "Manufacturing MRP: Bills of materials, job work, and production planning",
        "Courier & express parcel integrations for small shipments"
      ]
    },
    {
      phase: "Phase 3",
      timing: "Ecosystem Opportunities",
      status: "Vision & Network",
      statusColor: "text-purple-500 bg-purple-50 border-purple-200",
      title: "Margix Business Network & Working Capital",
      description: "Transforming Margix from software into an interconnected Indian trade network.",
      deliverables: [
        "Margix B2B Network: Instant trade credit check and zero-delay document exchange between verified businesses",
        "Working Capital Finance: Invoice discounting & freight advances through RBI-licensed banking & NBFC partners",
        "Equipment Rental & Dealer Portals for machinery & construction",
        "Anonymized industry benchmarking for freight rates and inventory turns",
        "Open API Marketplace for third-party logistics and ERP connectors"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#FAFAFA] text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-amber-600" />
            Product Roadmap & Future Scope
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            A Clear Vision for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">Long-Term Growth</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Margix is built on an extensible micro-kernel. After day-one launch, each new module is added as an independent team and service on the shared core without disrupting live customers.
          </p>
        </div>

        {/* 3 Phases Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {phases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 flex flex-col justify-between border-2 transition-all duration-300 ${
                idx === 0 
                  ? 'bg-white border-margix-yellow shadow-xl shadow-yellow-500/10' 
                  : 'bg-white/70 border-neutral-200 hover:border-neutral-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                    {item.phase}
                  </span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-700 mb-2">
                  {item.timing}
                </div>
                <h3 className="text-xl font-black text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Scope
                </h4>
                <div className="space-y-2.5 mb-6">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} className="text-amber-800" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-700 leading-snug">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {idx === 0 && (
                <div className="pt-4 border-t border-neutral-100">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 rounded-xl bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Apply for Phase 1 Pilot</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-margix-yellow uppercase tracking-widest block mb-1">
              Engineered by Margix Pvt Ltd
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Shape the Future of Indian Business Operations?
            </h4>
            <p className="text-neutral-400 text-sm mt-1 max-w-2xl">
              We are onboarding 5–10 pioneering manufacturing & trading businesses and 2–3 transport operators for our closed pilot before general launch.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-8 py-4 rounded-2xl bg-margix-yellow text-margix-black font-black text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all cursor-pointer shadow-lg shadow-yellow-500/20"
          >
            Join the Closed Pilot
          </button>
        </div>

      </div>
    </section>
  );
}
