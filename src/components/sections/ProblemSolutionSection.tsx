import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenContact?: () => void;
}

export default function ProblemSolutionSection({ onOpenContact }: ProblemSolutionProps) {
  const problems = [
    'Tally locked to one desktop — no live view from anywhere',
    'Same data retyped 4 times across billing, e-way bill, LR and accounts',
    'Finding trucks via phone calls and unverified brokers',
    'Billing, inventory, accounting and transport in separate tools',
  ];

  const solutions = [
    'One shared core for billing, stock, accounts and freight',
    'Zero retyping — invoice auto-generates e-way bill and freight booking',
    'Verified fleets with GPS tracking and digital LR bilti',
    'Pay only for the modules you use — turn on or off anytime',
  ];

  return (
    <section id="vision" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-white to-amber-500/8 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F9CA24]/8 rounded-full blur-[100px] -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FDC101]/8 rounded-full blur-[80px] translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-wider text-[#B08D00] uppercase mb-3">
              Why Margix
            </span>
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
                Replace disconnected tools
                <br />
                <span className="font-serif italic font-normal text-[#D4A800]">with one platform.</span>
              </h2>
            </div>

            {/* Side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Before */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 bg-white border border-neutral-200 shadow-sm"
              >
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Before</span>
                <h3 className="mt-1 text-xl font-extrabold text-neutral-900 mb-6">Manual work everywhere</h3>
                <ul className="space-y-4">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-neutral-600 leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-neutral-300 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="rounded-2xl p-8 bg-white border-2 border-[#F9CA24] shadow-sm"
              >
                <span className="text-xs font-bold text-[#B08D00] uppercase tracking-wider">With Margix</span>
                <h3 className="mt-1 text-xl font-extrabold text-neutral-900 mb-6">Connected operations</h3>
                <ul className="space-y-4">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-neutral-700 leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4A800] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenContact}
                  className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Schedule Live Demo</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            </div>

        </div>
    </section>
  );
}
