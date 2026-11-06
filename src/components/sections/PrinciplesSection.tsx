import { motion } from 'framer-motion';
import {
  Coins,
  Smartphone,
  Languages,
  Zap,
  Database,
  Building,
  Check
} from 'lucide-react';

export default function PrinciplesSection() {
  const principles = [
    {
      icon: <Coins size={20} className="text-[#B08D00]" />,
      title: "Modular Pay-Per-App Architecture",
      desc: "Subscribe only to the applications your business requires today. Add or remove apps anytime without losing data; all apps share the same verified core ledger."
    },
    {
      icon: <Smartphone size={20} className="text-[#B08D00]" />,
      title: "Fast Authentication with Mobile OTP",
      desc: "Forget complex passwords. Secure authentication with registered mobile numbers and OTP verification across all modules and companies you manage."
    },
    {
      icon: <Languages size={20} className="text-[#B08D00]" />,
      title: "Bilingual English & Hindi from Day One",
      desc: "Engineered for real Indian factory floors, godowns, and truck cabs. Full bilingual user interface designed for frontline operators."
    },
    {
      icon: <Building size={20} className="text-[#B08D00]" />,
      title: "Built Specifically for Indian Tax Regulations",
      desc: "Automated GST calculations, direct e-way bill & e-invoice IRN generation, Indian currency notation (Lakhs & Crores), and standard April–March fiscal closing."
    },
    {
      icon: <Database size={20} className="text-[#B08D00]" />,
      title: "100% Indian Sovereign Cloud Infrastructure",
      desc: "Business data remains within Indian national borders on AWS Mumbai data centers with cryptographic tenant isolation and DPDP Act compliance."
    },
    {
      icon: <Zap size={20} className="text-[#B08D00]" />,
      title: "Sub-2s Response on 4G & Mobile Devices",
      desc: "Zero bloated scripts. Lightweight user interfaces optimized for budget Android devices and intermittent highway cellular coverage."
    }
  ];

  return (
        <section id="principles" className="py-20 lg:py-24 bg-neutral-50/70 text-neutral-900 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                    Core Foundations
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
                    Engineered on Principles That Put Indian MSMEs First
                  </h2>
                    <p className="text-neutral-600 text-base leading-relaxed">
                      Enterprise systems have historically been too cumbersome, expensive, and difficult to deploy. Margix is built from the ground up to solve daily friction for Indian commerce.
                    </p>
                </div>

                {/* 6 Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {principles.map((p, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04, duration: 0.3 }}
                      className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                            {p.icon}
                          </div>
                            <h3 className="text-base font-bold text-neutral-900 mb-2">
                              {p.title}
                            </h3>
                              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                                {p.desc}
                              </p>
                            </div>

                              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#B08D00] font-semibold">
                                <Check size={12} strokeWidth={3} />
                                <span>Verified Standard</span>
                              </div>
                            </motion.div>
          ))}
                        </div>

                      </div>
                    </section>
                  );
}
