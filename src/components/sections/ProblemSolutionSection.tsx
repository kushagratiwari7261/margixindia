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
      icon: <FileText className="text-red-500 shrink-0" size={20} />,
      title: "Tally Locked to a Single Desktop",
      desc: "Accounts and GST locked in an office computer. Branch managers and owners have no live view of cash, receivables, or stock without asking for manual exports."
    },
    {
      icon: <Repeat className="text-red-500 shrink-0" size={20} />,
      title: "Data Retyped 4 Different Times",
      desc: "A buyer sends a PO; seller retypes it as a sales order; staff retype it for an e-way bill; transporter retypes it into an LR; accountant re-enters it into Tally."
    },
    {
      icon: <PhoneCall className="text-red-500 shrink-0" size={20} />,
      title: "Chaotic Logistics by WhatsApp & Calls",
      desc: "Finding trucks relies on frantic phone calls and unverified brokers. High empty return miles (deadhead), zero real-time tracking, and lost paper LRs."
    },
    {
      icon: <Database className="text-red-500 shrink-0" size={20} />,
      title: "Separate Software for Every Department",
      desc: "Billing in one tool, inventory on Excel, accounting in Tally, transport on paper. None of them talk to each other, leading to costly stockouts and errors."
    }
  ];

  const solutions = [
    {
      icon: <Layers className="text-emerald-500 shrink-0" size={20} />,
      title: "One Shared Core for Business & Freight",
      desc: "All apps share identical customers, items, ledgers, and godowns. Run billing, stock, purchases, accounts, and trucks on one unified account."
    },
    {
      icon: <FileCheck2 className="text-emerald-500 shrink-0" size={20} />,
      title: "Zero Retyping Across Businesses",
      desc: "A buyer's PO lands as a draft sales order at the seller. An invoice auto-generates e-way bills and pushes a freight booking directly to verified truckers."
    },
    {
      icon: <Truck className="text-emerald-500 shrink-0" size={20} />,
      title: "Integrated FTL, PTL & Driver Mobile App",
      desc: "Full truckloads and part-truckload godown networks with digital LR, live GPS tracking, and offline driver proof-of-delivery (POD) with photo & signature."
    },
    {
      icon: <Coins className="text-emerald-500 shrink-0" size={20} />,
      title: "Modular Pay-Per-App Flexibility",
      desc: "Subscribe only to the apps you need today. Turn on or off anytime. Pausing an app never deletes your data, and nothing is typed twice."
    }
  ];

  return (
    <section id="vision" className="py-24 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            The Vision & The Shift
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4"
          >
            Why Indian Commerce Needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">A Unified Platform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-600 text-base sm:text-lg leading-relaxed"
          >
            Until now, running a trade or manufacturing business required juggling Tally, multiple spreadsheets, and disconnected trucking brokers. Margix bridges that chasm.
          </motion.p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Old Broken Reality */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 sm:p-10 bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  <XCircle size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest block">The Broken Reality</span>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900">Disconnected Apps & Manual Retyping</h3>
                </div>
              </div>

              <div className="space-y-6">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 p-1.5 rounded-lg bg-red-50 border border-red-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-base">{item.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
              Result: 15–20 hours wasted weekly on manual entry, lost shipments, and accounting reconciliation lag.
            </div>
          </motion.div>

          {/* Margix Unified Core */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 sm:p-10 bg-neutral-950 text-white border-2 border-margix-yellow/60 shadow-2xl shadow-yellow-500/10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-margix-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 text-margix-yellow flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-margix-yellow uppercase tracking-widest block">The Margix Solution</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">One Shared Core: Business + Logistics</h3>
                </div>
              </div>

              <div className="space-y-6">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                Full replacement for Tally, Excel sheets, and freight brokers.
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-colors cursor-pointer shadow-md"
              >
                Join Early Pilot
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

