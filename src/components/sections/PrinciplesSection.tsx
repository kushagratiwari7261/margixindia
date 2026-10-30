import { motion } from 'framer-motion';
import { 
  Coins, 
  Smartphone, 
  Languages, 
  Zap, 
  Database, 
  Building,
  CheckCircle2
} from 'lucide-react';

export default function PrinciplesSection() {
  const principles = [
    {
      icon: <Coins size={24} className="text-margix-yellow" />,
      title: "Modular Pay-Per-App",
      desc: "Subscribe only to the apps you need today. Add or remove apps anytime. Pausing an app never deletes your data; all apps share the same core database."
    },
    {
      icon: <Smartphone size={24} className="text-amber-400" />,
      title: "One Login with Mobile OTP",
      desc: "Forget passwords. Fast, secure authentication with mobile number and OTP for every app and every company you own or manage."
    },
    {
      icon: <Languages size={24} className="text-yellow-300" />,
      title: "English & Hindi from Day One",
      desc: "Built for true Indian shopfloors and drivers. Native bilingual user experience from day one, with Marathi, Gujarati, and Tamil rolling out next."
    },
    {
      icon: <Building size={24} className="text-emerald-400" />,
      title: "Built Specifically for India",
      desc: "Native GST calculations, direct e-way bill & e-invoice generation, Indian currency formatting (Lakhs & Crores), and April–March fiscal year closing."
    },
    {
      icon: <Database size={24} className="text-blue-400" />,
      title: "100% Indian Sovereign Cloud",
      desc: "Your data stays strictly within Indian borders on AWS Mumbai data centers. Multi-tenant cryptographic isolation and DPDP Act compliance."
    },
    {
      icon: <Zap size={24} className="text-rose-400" />,
      title: "Sub-2s Speed on 4G & Budget Phones",
      desc: "No heavy bloatware. Ultra-lightweight interfaces optimized for ₹7,000 budget Android smartphones and intermittent 4G cellular signals."
    }
  ];

  return (
    <section id="platform-core" className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
            Guiding Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Built on Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow to-amber-400">Put MSMEs First</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Enterprise software has traditionally been too expensive, too complex, and hosted abroad. Margix is designed from the metal up for Indian entrepreneurs.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-500 font-semibold">
                <CheckCircle2 size={13} className="text-emerald-400" />
                Guaranteed by Margix Core
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
