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
      icon: <Smartphone size={24} className="text-margix-yellow" />,
      title: "One Login with Mobile OTP",
      desc: "Forget passwords. Fast, secure authentication with mobile number and OTP for every app and every company you own or manage."
    },
    {
      icon: <Languages size={24} className="text-margix-yellow" />,
      title: "English & Hindi from Day One",
      desc: "Built for true Indian shopfloors and drivers. Native bilingual user experience from day one, with Marathi, Gujarati, and Tamil rolling out next."
    },
    {
      icon: <Building size={24} className="text-margix-yellow" />,
      title: "Built Specifically for India",
      desc: "Native GST calculations, direct e-way bill & e-invoice generation, Indian currency formatting (Lakhs & Crores), and April–March fiscal year closing."
    },
    {
      icon: <Database size={24} className="text-margix-yellow" />,
      title: "100% Indian Sovereign Cloud",
      desc: "Your data stays strictly within Indian borders on AWS Mumbai data centers. Multi-tenant cryptographic isolation and DPDP Act compliance."
    },
    {
      icon: <Zap size={24} className="text-margix-yellow" />,
      title: "Sub-2s Speed on 4G & Budget Phones",
      desc: "No heavy bloatware. Ultra-lightweight interfaces optimized for budget Android smartphones and intermittent 4G cellular signals."
    }
  ];

  return (
    <section id="platform-core" className="py-20 lg:py-28 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Guiding Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Built on Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">Put MSMEs First</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Enterprise software has traditionally been too expensive, too complex, and hosted abroad. Margix Pvt Ltd is designed from the metal up for Indian businesses.
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
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-margix-yellow hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-margix-yellow/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-[11px] text-amber-800 font-bold">
                <CheckCircle2 size={13} className="text-amber-700" />
                Guaranteed by Margix Core
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
