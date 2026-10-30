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
  QrCode,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface BusinessSuiteSectionProps {
  onOpenContact?: () => void;
}

export default function BusinessSuiteSection({ onOpenContact }: BusinessSuiteSectionProps) {
  const [activeApp, setActiveApp] = useState(0);

  const businessApps = [
    {
      id: "sales",
      name: "Sales & Billing",
      subtitle: "Sells to customers & gets paid faster",
      icon: <Receipt size={24} />,
      badge: "Fastest Billing in India",
      description: "Complete sales lifecycle management from quote to cash. Generate GST-compliant invoices in seconds with pre-printed dynamic UPI QR codes and automated payment reminders.",
      features: [
        "Quotations, proforma invoices, sales orders, and delivery challans",
        "GST tax invoices with instant B2B e-invoice generation and IRN lookup",
        "Dynamic UPI QR code and payment link printed directly on every invoice",
        "Automated WhatsApp & SMS reminders for overdue accounts receivable",
        "Credit notes, debit notes, and customer returns with automatic ledger updates"
      ],
      stats: { primary: "100%", label: "GST Compliant", secondary: "Zero Manual Reconciliation" }
    },
    {
      id: "purchase",
      name: "Purchase",
      subtitle: "Buys from suppliers with complete control",
      icon: <ShoppingCart size={24} />,
      badge: "3-Way Matching",
      description: "Manage your supply chain from purchase orders to payments. Ensure you only pay for goods actually received and inspected with automated 3-way reconciliation.",
      features: [
        "Purchase orders (PO) with automated email & WhatsApp sharing to vendors",
        "Goods Received Notes (GRN) with barcode scanning at warehouse gates",
        "Vendor bills with automatic rate variance checks against original POs",
        "Supplier payment tracking with partial payments and ledger aging",
        "Vendor debit notes for rejected material or pricing adjustments"
      ],
      stats: { primary: "3-Way", label: "Invoice Matching", secondary: "Zero Duplicate Payments" }
    },
    {
      id: "inventory",
      name: "Inventory",
      subtitle: "Knows what stock is where across godowns",
      icon: <Boxes size={24} />,
      badge: "Multi-Godown",
      description: "Real-time visibility across all warehouses and shops. Track items with industry-specific attributes like batch numbers, expiry dates, serials, and multi-piece carton labels.",
      features: [
        "Multi-warehouse, multi-godown, and retail outlet tracking in one view",
        "Stock transfers with in-transit tracking between branch godowns",
        "Batch and expiry tracking for food, pharma, and chemical goods",
        "Individual machine serial number tracking for electronics and machinery",
        "Instant generation of product barcodes and shipping package labels ('Package 2 of 5')",
        "Automated low-stock threshold alerts to prevent stockouts"
      ],
      stats: { primary: "Real-Time", label: "Stock Visibility", secondary: "Multi-Location Transfers" }
    },
    {
      id: "accounts",
      name: "Accounts & GST",
      subtitle: "Keeps the books; 100% replaces Tally",
      icon: <Calculator size={24} />,
      badge: "Complete Tally Replacement",
      highlight: true,
      description: "A complete double-entry accounting engine designed specifically for Indian tax laws. Say goodbye to manual Tally exports, desktop file syncs, and expensive CA re-entry.",
      features: [
        "Comprehensive Chart of Accounts, Cash book, and Bank ledgers",
        "Direct one-click e-Invoice & e-Way bill generation without external portals",
        "Bank statement reconciliation with auto-matching rules",
        "TDS deduction rules and automated compliance ledgers",
        "Auto-compiled GSTR-1 and GSTR-3B data ready for CA sign-off",
        "Real-time Profit & Loss statement, Balance Sheet, and Trial Balance",
        "Indian financial year closing (April 1 to March 31) with audit locks"
      ],
      stats: { primary: "100%", label: "Replaces Tally", secondary: "CA-Signed Compliance" }
    },
    {
      id: "parties",
      name: "Parties Master",
      subtitle: "One directory of customers, suppliers & truckers",
      icon: <Users size={24} />,
      badge: "Automated GSTIN Verification",
      description: "Centralized stakeholder directory. All apps share the same verified party records with automatic GSTIN verification, credit limit controls, and live outstanding statements.",
      features: [
        "Unified directory: Customers, suppliers, distributors, and transporters",
        "Live GSTIN verification via government database to catch invalid tax IDs",
        "Enforceable credit limits and credit day boundaries for buyers",
        "Live ledger statements shareable via WhatsApp or PDF in one click",
        "Consolidated balance view showing net creditor/debtor positions"
      ],
      stats: { primary: "1-Click", label: "GSTIN Check", secondary: "Enforced Credit Limits" }
    },
    {
      id: "reports",
      name: "Reports & Owner Dashboard",
      subtitle: "Live bird's-eye view of your entire business",
      icon: <BarChart3 size={24} />,
      badge: "Instant Decision Making",
      description: "Business intelligence built for Indian owners. Know your sales, cash position, unpaid bills, and top-selling products in real time on your phone or laptop.",
      features: [
        "Owner daily dashboard: Today's sales, cash collections, and pending payouts",
        "Aging analysis of debtors: Know exactly who owes money and for how long",
        "Real-time stock valuation based on FIFO / weighted average methods",
        "Top-selling products and highest-margin customer analytics",
        "One-click export of any report to Microsoft Excel or PDF"
      ],
      stats: { primary: "<2 sec", label: "Report Generation", secondary: "Excel & PDF Ready" }
    },
    {
      id: "admin",
      name: "Team Administration",
      subtitle: "Controls who can do what with strict audit logs",
      icon: <ShieldCheck size={24} />,
      badge: "Role-Based Security",
      description: "Give staff the access they need without risking sensitive financial data. Ensure billing clerks only bill, warehouse staff only handle stock, and profit numbers stay private.",
      features: [
        "Granular role-based permissions (Owner, Manager, Billing Clerk, Storekeeper)",
        "Financial data masking: Hide profit margins and purchase costs from billing clerks",
        "Branch-wise access restrictions: Staff only see their assigned location",
        "Tamper-evident audit trail recording every invoice edit, deletion, or adjustment",
        "Instant remote logout for lost or stolen staff mobile devices"
      ],
      stats: { primary: "100%", label: "Audit Traceability", secondary: "Branch-Isolated Views" }
    },
    {
      id: "ship",
      name: "Ship by Truck",
      subtitle: "Bridges your invoices directly into freight",
      icon: <Truck size={24} />,
      badge: "Direct Freight Integration",
      highlight: true,
      description: "The direct bridge connecting your Business Suite to logistics. Book a truck directly from any sales order or invoice, compare quotes, and watch the freight bill auto-post to your books.",
      features: [
        "One-click 'Post Load' directly from a generated GST sales invoice",
        "Compare live bids from verified transporters on the Margix network",
        "Real-time GPS trip tracking and milestone notifications",
        "Digital Proof of Delivery (POD) with photo and consignee signature",
        "Freight bill automatically posts to your accounts ledger upon delivery"
      ],
      stats: { primary: "0 Retyping", label: "Invoice to Freight", secondary: "Automatic Freight Ledger" }
    },
    {
      id: "whatsapp",
      name: "WhatsApp Catalogue (Lite)",
      subtitle: "Lets customers order directly from a shared link",
      icon: <MessageSquare size={24} />,
      badge: "Mobile Commerce",
      description: "Turn WhatsApp into a sales channel. Share your live digital product catalogue with retail buyers. Their selections land instantly in Margix as draft sales orders.",
      features: [
        "Share an interactive product catalogue link via WhatsApp in one tap",
        "Customers browse items with live availability, pictures, and prices",
        "Placed orders land straight inside Margix as draft sales orders for approval",
        "Automated WhatsApp order confirmation and dispatch notifications",
        "Simple follow-up payment reminders with pre-filled payment links"
      ],
      stats: { primary: "1-Tap", label: "WhatsApp Ordering", secondary: "Draft SO Auto-Created" }
    }
  ];

  const current = businessApps[activeApp];

  return (
    <section id="business-suite" className="py-24 bg-[#F8F9FA] text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-amber-600 fill-amber-500" />
            Product Family 1 · First Release
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            The Business Suite: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">9 Modular Apps</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Everything a trading or manufacturing company needs from first quote to final audited balance sheet. All 9 apps share the same database and pay-per-app freedom.
          </p>
        </div>

        {/* Desktop App Navigator Pills */}
        <div className="hidden lg:grid grid-cols-9 gap-2 mb-10 bg-white p-2 rounded-2xl border border-neutral-200 shadow-sm">
          {businessApps.map((app, idx) => {
            const isActive = activeApp === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveApp(idx)}
                className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-neutral-900 text-white shadow-md' 
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <div className={`mb-1.5 ${isActive ? 'text-margix-yellow' : 'text-neutral-500'}`}>
                  {app.icon}
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1">{app.name}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile App Selector */}
        <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 mb-6 custom-scrollbar">
          {businessApps.map((app, idx) => {
            const isActive = activeApp === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveApp(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap text-xs font-bold cursor-pointer transition-all ${
                  isActive 
                    ? 'bg-neutral-900 text-white shadow-md' 
                    : 'bg-white text-neutral-700 border border-neutral-200'
                }`}
              >
                <span className={isActive ? 'text-margix-yellow' : 'text-neutral-500'}>{app.icon}</span>
                {app.name}
              </button>
            );
          })}
        </div>

        {/* Active App Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Details & Key Features */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                      {current.badge}
                    </span>
                    {current.highlight && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                        ★ Flagship Day-One Feature
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2">
                    {current.name}
                  </h3>
                  <p className="text-amber-700 font-semibold text-sm sm:text-base mb-4">
                    {current.subtitle}
                  </p>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                    {current.description}
                  </p>

                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                    Key Included Capabilities
                  </h4>
                  <div className="space-y-3 mb-8">
                    {current.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={13} className="text-amber-800" />
                        </div>
                        <span className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-neutral-900">{current.stats.primary}</div>
                      <div className="text-xs text-neutral-500 font-semibold uppercase">{current.stats.label}</div>
                    </div>
                    <div className="w-[1px] h-8 bg-neutral-200"></div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-700">
                      {current.stats.secondary}
                    </div>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-margix-yellow text-margix-black font-bold text-sm hover:bg-yellow-400 transition-all cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>Request App Demo</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup / Interface Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-margix-yellow/20 text-margix-yellow flex items-center justify-center font-bold">
                        {current.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">Margix Business Core</div>
                        <div className="text-[11px] text-neutral-400">{current.name} Module</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE IN V1
                    </span>
                  </div>

                  {/* Dynamic simulated interface element based on active app */}
                  <div className="space-y-4">
                    {activeApp === 0 && (
                      <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400">Tax Invoice #INV-2026-0842</span>
                          <span className="text-emerald-400 font-bold">GSTIN Verified</span>
                        </div>
                        <div className="text-xl font-bold text-white">₹1,84,500.00</div>
                        <div className="flex items-center gap-3 p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                          <QrCode className="text-margix-yellow shrink-0" size={32} />
                          <div className="text-xs text-neutral-300">
                            Dynamic UPI QR printed on invoice. Instant settlement into bank ledger.
                          </div>
                        </div>
                      </div>
                    )}

                    {activeApp === 3 && (
                      <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400">Real-Time Financial Statement</span>
                          <span className="text-amber-400 font-bold">Tally Compatible</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between py-1 border-b border-neutral-800">
                            <span className="text-neutral-400">Revenue (Gross Sales)</span>
                            <span className="font-mono text-emerald-400">₹48,20,000</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-neutral-800">
                            <span className="text-neutral-400">Direct Cost & Logistics</span>
                            <span className="font-mono text-red-400">₹32,15,400</span>
                          </div>
                          <div className="flex justify-between py-1 font-bold">
                            <span className="text-white">Net Operating Profit</span>
                            <span className="font-mono text-margix-yellow">₹16,04,600</span>
                          </div>
                        </div>
                        <div className="text-[11px] text-neutral-400 pt-1">
                          Includes GSTR-1 & GSTR-3B auto-compilation and TDS ledger entries.
                        </div>
                      </div>
                    )}

                    {activeApp === 7 && (
                      <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400">One-Click Dispatch</span>
                          <span className="text-emerald-400 font-bold">Freight Bridge</span>
                        </div>
                        <p className="text-xs text-neutral-300">
                          Invoice #842 automatically generates an e-way bill and publishes load dimensions to verified transporters on the network.
                        </p>
                        <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-neutral-400 block text-[10px]">BEST CARRIER BID</span>
                            <span className="text-white font-bold">Om Logistics · 18 MT FTL</span>
                          </div>
                          <span className="text-margix-yellow font-bold">₹24,500</span>
                        </div>
                      </div>
                    )}

                    {activeApp !== 0 && activeApp !== 3 && activeApp !== 7 && (
                      <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400">Unified Schema</span>
                          <span className="text-emerald-400 font-bold">Single Sign-On</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed">
                          All data is synchronized across mobile and web. Subscribing to or pausing this app preserves all historical ledger integrity.
                        </p>
                        <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                          <FileSpreadsheet size={16} className="text-margix-yellow shrink-0" />
                          <span>Direct 1-click import from Tally XML & Excel backups.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Part of Margix Day-One Core</span>
                  <span>Hosted in AWS Mumbai</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

