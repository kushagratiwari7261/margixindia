import { motion } from 'framer-motion';
import { 
  XCircle, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  Repeat, 
  Database, 
  Layers, 
  FileCheck2, 
  Truck, 
  Coins, 
  ArrowRight
} from 'lucide-react';

interface ProblemSolutionProps {
  onOpenContact?: () => void;
}

export default function ProblemSolutionSection({ onOpenContact }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <FileText className="text-neutral-700 shrink-0" size={20} />,
      title: "Tally Locked to Desktop Office PCs",
      desc: "Accounts and GST locked in a single computer. Branch managers and owners have no live view of cash, receivables, or stock without manual exports."
    },
    {
      icon: <Repeat className="text-neutral-700 shrink-0" size={20} />,
      title: "Data Retyped 4 Different Times",
      desc: "A buyer sends a PO; seller retypes it as a sales order; staff retype it for an e-way bill; transporter retypes it into an LR; accountant re-enters it into Tally."
    },
    {
      icon: <PhoneCall className="text-neutral-700 shrink-0" size={20} />,
      title: "Logistics Chaos via Phone Calls & WhatsApp",
      desc: "Finding trucks relies on frantic phone calls and unverified brokers. High empty return miles (deadhead), zero real-time tracking, and lost paper LRs."
    },
    {
      icon: <Database className="text-neutral-700 shrink-0" size={20} />,
      title: "Disconnected Department Software",
      desc: "Billing in one tool, inventory on Excel, accounting in Tally, transport on paper. None of them talk to each other, leading to costly stockouts and errors."
    }
  ];

  const solutions = [
    {
      icon: <Layers className="text-margix-yellow shrink-0" size={20} />,
      title: "One Shared Core for Business & Freight",
      desc: "All apps share identical customers, items, ledgers, and godowns. Run billing, stock, purchases, accounts, and trucks on one unified account."
    },
    {
      icon: <FileCheck2 className="text-margix-yellow shrink-0" size={20} />,
      title: "Zero Retyping Across Trade Partners",
      desc: "A buyer's PO lands as a draft sales order at the seller. An invoice auto-generates e-way bills and pushes freight booking directly to verified truckers."
    },
    {
      icon: <Truck className="text-margix-yellow shrink-0" size={20} />,
      title: "Integrated FTL, PTL & Driver Mobile App",
      desc: "Full truckloads and part-truckload godown networks with digital LR, live GPS tracking, and offline driver proof-of-delivery (POD) with photo & signature."
    },
    {
      icon: <Coins className="text-margix-yellow shrink-0" size={20} />,
      title: "Modular Pay-Per-App Flexibility",
      desc: "Subscribe only to the apps you need today. Turn on or off anytime. Pausing an app never deletes your data, and nothing is typed twice."
    }
  ];

  return (
    <section id="vision" className="py-20 lg:py-28 bg-[#FAFAFA] text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            The Shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Why Indian Commerce Needs <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              A Unified Operating Platform
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Until now, running a trade or manufacturing business meant juggling Tally, multiple spreadsheets, and disconnected trucking brokers. Margix Pvt Ltd bridges that divide.
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Old Broken Reality (White Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 sm:p-10 bg-white border border-neutral-200 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <XCircle size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest block">The Broken Reality</span>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900">Disconnected Tools & Retyping</h3>
                </div>
              </div>

              <div className="space-y-6">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-xl bg-neutral-100 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-base leading-snug">{item.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-500">
              Result: 15–20 hours wasted weekly on manual entry, lost shipments, and accounting reconciliation lag.
            </div>
          </motion.div>

          {/* Margix Unified Core (Dark Counterpart Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 sm:p-10 bg-margix-black text-white border-2 border-margix-yellow shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-margix-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-margix-yellow/20 text-margix-yellow flex items-center justify-center">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-margix-yellow uppercase tracking-widest block">The Margix Way</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">One Shared Core: Business + Freight</h3>
                </div>
              </div>

              <div className="space-y-6">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base leading-snug">{item.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Full replacement for Tally, Excel sheets, and phone brokers.
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-colors cursor-pointer shadow-md"
              >
                Join Closed Pilot
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
