import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface BusinessSuiteSectionProps {
  onOpenContact?: () => void;
}

const modules = [
  {
    id: 'orders',
    name: 'Order Processing',
    line: 'Enquiry to delivery in one flow.',
    points: [
      'Quotations, approvals, stock allocation, dispatch and invoicing',
      'Multi-tier credit approval with configurable limits',
      'Auto e-way bill generation on dispatch',
    ],
  },
  {
    id: 'ai',
    name: 'AI Copilot & Call Assistant',
    line: 'Voice calls and workflow automation.',
    points: [
      'AI voice follow-ups for overdue receivables',
      'Inbound bot captures dealer re-orders automatically',
      'Daily executive summaries and dead stock alerts',
    ],
  },
  {
    id: 'crm',
    name: 'CRM',
    line: 'Customers, vendors and GSTIN in one directory.',
    points: [
      'Government GSTIN validation on every new party',
      'Configurable credit limits with hard stop rules',
      'Instant ledger statements via WhatsApp',
    ],
  },
  {
    id: 'erp',
    name: 'ERP',
    line: 'Multi-branch operations synchronized.',
    points: [
      'Consolidated P&L across branches and companies',
      'Centralized product master with HSN and GST rates',
      'Inter-branch stock transfers with in-transit tracking',
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Purchase',
    line: '3-way matching before every payment.',
    points: [
      '1-click PO to suppliers via WhatsApp and email',
      'GRN verification with barcode scanning at gates',
      'Automated PO vs GRN vs vendor bill reconciliation',
    ],
  },
  {
    id: 'inventory',
    name: 'Inventory & Warehouse',
    line: 'Multi-godown, batch and expiry tracking.',
    points: [
      'Live stock across all godowns with in-transit status',
      'Batch expiry and machine serial number tracking',
      'Auto reorder triggers on low-stock thresholds',
    ],
  },
  {
    id: 'pos',
    name: 'POS & Counter Billing',
    line: 'Fast checkout with dynamic UPI QR.',
    points: [
      'Sub-second barcode scanning and keyboard shortcuts',
      'UPI QR printed on every bill — auto bank reconciliation',
      'Split payments: cash, UPI, card and credit ledger',
    ],
  },
  {
    id: 'accounting',
    name: 'Accounting & GST',
    line: 'Double-entry books. Replaces Tally.',
    points: [
      '1-click e-Invoice (IRN) and e-Way bill via NIC API',
      'Auto-compiled GSTR-1 and GSTR-3B for CA review',
      'Live P&L, balance sheet and trial balance',
    ],
  },
  {
    id: 'hrms',
    name: 'HRMS & Access Control',
    line: 'Roles, permissions and margin masking.',
    points: [
      'Pre-built roles: Owner, Manager, Clerk, Storekeeper',
      'Hide purchase costs from billing operators',
      'Immutable audit log on every document action',
    ],
  },
  {
    id: 'integrations',
    name: 'Integrations',
    line: 'GST portal, WhatsApp, banking APIs.',
    points: [
      'NIC e-Invoice and e-Way Bill government sync',
      'WhatsApp Business Cloud API for alerts',
      'REST APIs and webhooks for external systems',
    ],
  },
];

export default function BusinessSuiteSection({ onOpenContact }: BusinessSuiteSectionProps) {
  const [active, setActive] = useState(0);
  const current = modules[active];

  return (
    <section id="software-products" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Artistic background — warm golden ambient glow matching Margix logo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-500/5 to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F9CA24]/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FDC101]/6 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-wider text-[#B08D00] uppercase mb-3">
            Platform Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
            Everything your business
            <br />
            <span className="font-serif italic font-normal text-[#D4A800]">needs to operate.</span>
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Activate what you need. Each module connects to the others — data flows, zero manual re-entry.
          </p>
        </div>

        {/* Two-column layout: tabs left, detail right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left: Module tabs */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            {modules.map((mod, idx) => {
              const isActive = active === idx;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActive(idx)}
                  className={`text - left px - 4 py - 3 rounded - xl transition - all cursor - pointer border ${
              isActive
              ? 'bg-neutral-950 text-white border-neutral-900 shadow-md'
                : 'bg-white text-neutral-600 border-neutral-100 hover:bg-amber-50/50 hover:border-amber-200/60 hover:text-neutral-900'
            }`}
                >
                  <span className={`text - sm font - bold ${ isActive? 'text-[#F9CA24]': 'text-neutral-900' }`}>
                    {mod.name}
                  </span>
                  <span className={`block text - xs mt - 0.5 ${ isActive? 'text-neutral-300': 'text-neutral-500' }`}>
                    {mod.line}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detail panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.15 }}
                className="rounded-2xl bg-white border border-neutral-200/80 shadow-sm p-8 sm:p-10"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                  {current.name}
                </h3>
                <p className="mt-1 font-serif italic text-[#B08D00] font-medium text-sm sm:text-base">
                  {current.line}
                </p>

                {/* Clean bullet points */}
                <ul className="mt-8 space-y-4">
                  {current.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#F9CA24]/20 flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} className="text-[#D4A800]" />
                      </span>
                      <span className="text-neutral-700 text-[15px] leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight size={14} />
                  </button>
                  <span className="text-xs text-neutral-400 font-medium">
                    Part of Margix Platform
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
