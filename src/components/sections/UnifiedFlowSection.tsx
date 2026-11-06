import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UnifiedFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      who: 'Buyer',
      action: 'Places order via digital catalogue',
      detail: 'Order lands as a draft sales order — zero retyping.',
    },
    {
      num: '02',
      who: 'Seller',
      action: 'Generates GST invoice and e-way bill',
      detail: 'IRN and e-way bill auto-generated via government API.',
    },
    {
      num: '03',
      who: 'Seller',
      action: 'Posts freight from the invoice screen',
      detail: 'One click extracts weight, volume, pickup and delivery address.',
    },
    {
      num: '04',
      who: 'Transporter',
      action: 'Submits quote and dispatches truck',
      detail: 'Digital LR initialized. GPS tracking begins.',
    },
    {
      num: '05',
      who: 'Driver',
      action: 'Delivers and captures photo POD',
      detail: 'Offline app records checkpoints, signature and proof of delivery.',
    },
    {
      num: '06',
      who: 'Buyer',
      action: 'Pays via dynamic UPI QR on invoice',
      detail: 'Payment auto-reconciles in both parties\' ledgers.',
    },
    {
      num: '07',
      who: 'All parties',
      action: 'Ledgers and GST records auto-reconcile',
      detail: 'Revenue, freight expense, GSTR-1 and input credit — all settled.',
    },
  ];

  return (
    <section id="unified-flow" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-500/5 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#F9CA24]/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-wider text-[#B08D00] uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
            One order flows across
            <br />
            <span className="font-serif italic font-normal text-[#D4A800]">3 businesses. Zero retyping.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-4 rounded-xl border transition-all cursor-pointer ${isActive
                  ? 'bg-white border-amber-400 shadow-md'
                  : 'bg-white/60 border-neutral-100 hover:border-neutral-200'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-bold font-mono ${isActive ? 'text-[#D4A800]' : 'text-neutral-300'}`}>
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isActive ? 'text-[#B08D00] bg-amber-50 border border-amber-200' : 'text-neutral-400 bg-neutral-50'
                        }`}>
                      {step.who}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 mt-1">
                    {step.action}
                  </h4>
                </div>
              </div>

        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.15 }}
            className="mt-3 pt-3 border-t border-neutral-100 text-sm text-neutral-500 leading-relaxed pl-9"
          >
            {step.detail}
          </motion.p>
        )}
      </div>
      );
          })}
        </div >

    </div >
    </section >
  );
}
