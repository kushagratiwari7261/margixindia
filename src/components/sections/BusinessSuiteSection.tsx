import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Receipt, 
  ShoppingCart, 
  Boxes, 
  Calculator, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Truck, 
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  QrCode
} from 'lucide-react';

interface BusinessSuiteSectionProps {
  onOpenContact?: () => void;
}

export default function BusinessSuiteSection({ onOpenContact }: BusinessSuiteSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const apps = [
    {
      id: "sales",
      name: "Sales & Billing",
      subtitle: "Quotations, GST Invoices & Payment QR",
      icon: <Receipt size={22} />,
      tag: "Fastest Billing in India",
      desc: "Complete sales lifecycle management from quote to cash. Generate GST-compliant invoices in seconds with dynamic UPI QR codes and automated payment reminders.",
      bullets: [
        "GST tax invoices with instant B2B e-invoice generation (IRN)",
        "Dynamic UPI QR code and payment link printed directly on every invoice",
        "Quotations, proforma invoices, delivery challans, and credit notes",
        "Automated WhatsApp & SMS reminders for overdue receivables"
      ],
      metric: "100% GST Ready",
      simulated: {
        title: "Tax Invoice #INV-2026-0842",
        amount: "₹1,84,500.00",
        note: "Dynamic UPI QR printed on bill. Instant ledger reconciliation."
      }
    },
    {
      id: "purchase",
      name: "Purchase Management",
      subtitle: "3-Way Matching & Supplier Control",
      icon: <ShoppingCart size={22} />,
      tag: "Zero Duplicate Bills",
      desc: "Control your procurement from purchase orders to payments. Ensure you only pay for goods actually received and inspected at your warehouse gate.",
      bullets: [
        "Purchase orders (PO) shared via WhatsApp & email in 1 click",
        "Goods Received Notes (GRN) with barcode scanning at gates",
        "Automated 3-way reconciliation (PO vs. GRN vs. Supplier Bill)",
        "Supplier payment aging with partial payment tracking"
      ],
      metric: "3-Way Matching",
      simulated: {
        title: "Goods Received Note #GRN-441",
        amount: "Verified: 240 Units",
        note: "Quantities auto-matched with vendor invoice before payment release."
      }
    },
    {
      id: "inventory",
      name: "Multi-Godown Inventory",
      subtitle: "Batch, Expiry, Serial & Shipping Labels",
      icon: <Boxes size={22} />,
      tag: "Live Stock Visibility",
      desc: "Real-time visibility across all godowns and branch stores. Track items with industry-specific fields, batch expiry dates, serials, and multi-piece carton labels.",
      bullets: [
        "Multi-warehouse tracking with inter-godown in-transit status",
        "Batch & expiry date tracking for food, pharma, and chemicals",
        "Individual machine serial number tracking for electronics & tools",
        "Product barcodes & carton shipping labels ('Package 2 of 5')",
        "Low-stock threshold alerts to prevent stockouts"
      ],
      metric: "Multi-Godown",
      simulated: {
        title: "Bhiwandi Central Godown",
        amount: "Live Stock: ₹42.8 Lakh",
        note: "Inter-branch transfer in transit: 45 cartons to Pune depot."
      }
    },
    {
      id: "accounts",
      name: "Accounts & GST",
      subtitle: "Double-Entry Books — Replaces Tally",
      icon: <Calculator size={22} />,
      tag: "Complete Tally Replacement",
      desc: "Full double-entry accounting engine designed specifically for Indian tax laws. Say goodbye to manual Tally exports, desktop file backups, and delayed CA reconciliations.",
      bullets: [
        "Complete Chart of Accounts, Cash books, and Bank ledgers",
        "Direct one-click e-Invoice & e-Way bill generation",
        "Auto-compiled GSTR-1 and GSTR-3B data ready for filing",
        "Real-time Profit & Loss statement, Balance Sheet, and Trial Balance",
        "TDS deduction ledgers and financial year-end closing locks"
      ],
      metric: "Replaces Tally",
      simulated: {
        title: "Real-Time Balance Sheet",
        amount: "Operating Profit: ₹16.04L",
        note: "Auto-compiled GSTR-1/3B data ready for CA sign-off."
      }
    },
    {
      id: "parties",
      name: "Parties Master",
      subtitle: "Verified Customers, Suppliers & Transporters",
      icon: <Users size={22} />,
      tag: "Automated GSTIN Verification",
      desc: "Centralized stakeholder directory. All apps share the same verified party records with automatic GSTIN verification, credit limit controls, and live outstanding statements.",
      bullets: [
        "Unified directory for buyers, vendors, distributors, and truckers",
        "Instant government GSTIN verification to eliminate invalid tax IDs",
        "Enforceable credit limits and credit day boundaries for buyers",
        "Ledger statements shareable via WhatsApp or PDF in one tap"
      ],
      metric: "1-Click Check",
      simulated: {
        title: "Party: Apex Steel Traders",
        amount: "Credit Limit: ₹15 Lakh",
        note: "GSTIN verified active. Outstanding ledger: ₹4.8 Lakh."
      }
    },
    {
      id: "reports",
      name: "Owner Dashboard & Reports",
      subtitle: "Live Cash, Collections & Excel Export",
      icon: <BarChart3 size={22} />,
      tag: "Instant Intelligence",
      desc: "Bird's-eye view for business owners. Monitor daily sales, cash position, unpaid receivables, and top-moving inventory in real time on mobile or desktop.",
      bullets: [
        "Daily dashboard: Today's sales, collections, and pending payouts",
        "Aging analysis of debtors: Know who owes money and for how long",
        "Live stock valuation using FIFO / weighted average methods",
        "Instant one-click export of any report to Microsoft Excel or PDF"
      ],
      metric: "<2 sec Reports",
      simulated: {
        title: "Today's Collections",
        amount: "₹6,42,800 Collected",
        note: "Debtor aging: 88% within credit period. 1-click Excel export."
      }
    },
    {
      id: "admin",
      name: "Team Administration",
      subtitle: "Role-Based Access & Tamper-Evident Audit",
      icon: <ShieldCheck size={22} />,
      tag: "Data Security",
      desc: "Give staff the tools they need without exposing sensitive profit numbers. Ensure billing clerks only bill, storekeepers only handle stock, and all edits are logged.",
      bullets: [
        "Granular roles (Owner, Manager, Billing Clerk, Storekeeper)",
        "Financial data masking: Hide profit margins from billing staff",
        "Branch-wise access restrictions: Staff only see their location",
        "Immutable audit log recording every invoice edit or deletion"
      ],
      metric: "100% Audit Trail",
      simulated: {
        title: "Role: Billing Clerk (Pune)",
        amount: "Profit Margins: Masked",
        note: "Branch-isolated view. Complete tamper-evident audit history."
      }
    },
    {
      id: "ship",
      name: "Ship by Truck",
      subtitle: "Direct Bridge from Sales Invoice to Freight",
      icon: <Truck size={22} />,
      tag: "Direct Freight Bridge",
      desc: "The direct bridge connecting your Business Suite to logistics. Post a freight load directly from any sales invoice, compare transporter bids, and auto-book into accounts.",
      bullets: [
        "One-click 'Post Load' directly from a generated GST sales invoice",
        "Compare live bids from verified transporters on the network",
        "Real-time GPS trip tracking and milestone notifications",
        "Freight bill automatically posts to your accounts ledger upon delivery"
      ],
      metric: "Zero Retyping",
      simulated: {
        title: "Invoice #842 Freight Post",
        amount: "Best Bid: ₹24,500 (16 MT)",
        note: "Accepted quote auto-links LR and records freight expense in books."
      }
    },
    {
      id: "whatsapp",
      name: "WhatsApp Catalogue (Lite)",
      subtitle: "Mobile Commerce Link & Draft Sales Orders",
      icon: <MessageSquare size={22} />,
      tag: "Mobile Ordering",
      desc: "Turn WhatsApp into a sales channel. Share your live digital product catalogue with retail buyers. Placed orders land straight inside Margix as draft sales orders.",
      bullets: [
        "Share interactive product catalogue link via WhatsApp in one tap",
        "Customers browse items with live availability, pictures, and prices",
        "Orders arrive inside Margix as draft sales orders for approval",
        "Automated WhatsApp order confirmation and dispatch updates"
      ],
      metric: "1-Tap Commerce",
      simulated: {
        title: "WhatsApp Order #WA-109",
        amount: "Draft Sales Order Created",
        note: "3 items ordered by retailer. 1-click convert to GST invoice."
      }
    }
  ];

  const current = apps[activeTab];

  return (
    <section id="business-suite" className="py-20 lg:py-28 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Product Family 1 &bull; Day-One Core
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            The Business Suite: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">9 Modular Apps</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Everything an Indian trading or manufacturing company needs from first quote to final balance sheet. 100% replaces Tally and spreadsheets, on a modular pay-per-app basis.
          </p>
        </div>

        {/* Responsive App Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {apps.map((app, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-margix-black text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <span className={isActive ? 'text-margix-yellow' : 'text-neutral-500'}>
                  {app.icon}
                </span>
                <span>{app.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active App Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-10 lg:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: App Capabilities */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                    {current.tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-1">
                    {current.name}
                  </h3>
                  <p className="text-amber-800 font-semibold text-sm sm:text-base mb-4">
                    {current.subtitle}
                  </p>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                    {current.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {current.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={13} />
                        </div>
                        <span className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Badge: <span className="text-neutral-900 font-black">{current.metric}</span>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-all cursor-pointer shadow-md"
                  >
                    <span>Request Demo for {current.name}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Counterpart Dark Interface Preview */}
              <div className="lg:col-span-5 bg-margix-black text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between min-h-[340px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-margix-yellow/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-margix-yellow/20 text-margix-yellow flex items-center justify-center font-bold">
                        {current.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">Margix Business Core</div>
                        <div className="text-[11px] text-neutral-400">{current.name}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-margix-yellow border border-amber-400/30">
                      LIVE IN V1
                    </span>
                  </div>

                  <div className="bg-neutral-900/90 rounded-xl p-4 border border-neutral-800 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-400">{current.simulated.title}</span>
                      <span className="text-margix-yellow font-bold">Active Ledger</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      {current.simulated.amount}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black rounded-lg border border-neutral-800">
                      <QrCode className="text-margix-yellow shrink-0" size={28} />
                      <p className="text-xs text-neutral-300 leading-snug">
                        {current.simulated.note}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Part of Margix Pvt Ltd Core</span>
                  <span>AWS Mumbai Sovereign Cloud</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
