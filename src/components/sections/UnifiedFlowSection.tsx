import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Building2, 
  Truck, 
  CheckCircle2, 
  FileText, 
  QrCode, 
  BookOpenCheck,
  Sparkles
} from 'lucide-react';

export default function UnifiedFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      actor: "Retailer (Buyer)",
      actorType: "buyer",
      action: "Places an Order",
      detail: "Browses the distributor's live WhatsApp catalogue on mobile and selects items. The order instantly arrives as a verified draft sales order at the distributor — zero retyping.",
      icon: <Store size={22} />,
      badge: "WhatsApp Catalogue"
    },
    {
      num: "02",
      actor: "Distributor (Seller)",
      actorType: "seller",
      action: "Bills Order with GST & E-Way",
      detail: "Reviews the draft sales order, approves it, and generates the GST tax invoice. The e-way bill and IRN are generated automatically via direct government API integration.",
      icon: <FileText size={22} />,
      badge: "Automated E-Invoice"
    },
    {
      num: "03",
      actor: "Distributor (Seller)",
      actorType: "seller",
      action: "Books a Truck on Margix",
      detail: "Clicks 'Ship by Truck' directly from the invoice screen. Margix automatically extracts package weight, dimensions, pickup, and delivery coordinates, publishing the load to nearby truckers.",
      icon: <Truck size={22} />,
      badge: "1-Click Freight Post"
    },
    {
      num: "04",
      actor: "Transport Company",
      actorType: "transporter",
      action: "Quotes & Wins the Load",
      detail: "Verified transporters receive the load notification, submit their quote, and the distributor accepts the best bid. A digital Lorry Receipt (LR) is automatically initialized.",
      icon: <CheckCircle2 size={22} />,
      badge: "Verified Marketplace"
    },
    {
      num: "05",
      actor: "Transporter & Driver",
      actorType: "transporter",
      action: "Picks Up & Delivers",
      detail: "The assigned truck driver uses the Margix Driver App to navigate checkpoints, record goods loading, and capture consignee photo proof-of-delivery (POD) and digital signature upon delivery.",
      icon: <Truck size={22} />,
      badge: "Offline Driver POD"
    },
    {
      num: "06",
      actor: "Retailer (Buyer)",
      actorType: "buyer",
      action: "Receives Goods & Pays by UPI",
      detail: "The purchase bill lands automatically in the retailer's Margix books. The retailer scans the dynamic UPI QR printed on the invoice to settle payment instantly into the seller's bank.",
      icon: <QrCode size={22} />,
      badge: "Instant Reconciliation"
    },
    {
      num: "07",
      actor: "All Three Parties",
      actorType: "shared",
      action: "Books Update Themselves",
      detail: "Distributor's ledgers show sales revenue, payment received, freight cost, and GSTR-1 data. Retailer's books record purchase inventory & GST input credit. Transporter's freight bill is settled.",
      icon: <BookOpenCheck size={22} />,
      badge: "Zero Manual Tally Entry"
    }
  ];

  return (
    <section id="unified-flow" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-margix-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="fill-margix-yellow" />
            End-To-End Synchronization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            One Order Moves Through 3 Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-margix-yellow to-amber-400">With Zero Retyping</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Witness how buyer, seller, and transporter operate on one connected thread. An order flows seamlessly from WhatsApp checkout all the way to bank settlement and tax filing.
          </p>
        </div>

        {/* The 3 Stakeholder Columns Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold shrink-0">
              <Store size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">Stakeholder 1</span>
              <h4 className="text-base font-bold text-white">Retailer (Buyer)</h4>
              <p className="text-xs text-neutral-400 mt-0.5">WhatsApp orders, auto-purchase bills, UPI settlements</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-margix-yellow flex items-center justify-center font-bold shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-margix-yellow block">Stakeholder 2</span>
              <h4 className="text-base font-bold text-white">Distributor (Seller)</h4>
              <p className="text-xs text-neutral-400 mt-0.5">GST billing, auto e-way bill, instant truck booking</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Stakeholder 3</span>
              <h4 className="text-base font-bold text-white">Transport Company</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Bidding, LR dispatch, driver tracking, digital POD</p>
            </div>
          </div>
        </div>

        {/* Interactive Steps Grid */}
        <div className="space-y-3 mb-12">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'bg-neutral-950 border-margix-yellow shadow-xl shadow-yellow-500/10' 
                    : 'bg-neutral-950/40 border-neutral-800 hover:bg-neutral-950/80 hover:border-neutral-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <span className={`text-xl sm:text-2xl font-black font-mono transition-colors ${
                      isSelected ? 'text-margix-yellow' : 'text-neutral-600'
                    }`}>
                      {step.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          step.actorType === 'buyer' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : step.actorType === 'seller'
                            ? 'bg-amber-500/20 text-margix-yellow'
                            : step.actorType === 'transporter'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {step.actor}
                        </span>
                        <span className="text-neutral-500 text-xs hidden sm:inline">&bull;</span>
                        <span className="text-xs text-neutral-400 hidden sm:inline">{step.badge}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {step.action}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
                      Step {step.num} of 07
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neutral-800 text-sm text-neutral-300 leading-relaxed pl-0 sm:pl-10"
                  >
                    <p>{step.detail}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Compatibility Assurance Box */}
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-margix-yellow shrink-0">
              <BookOpenCheck size={20} />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm sm:text-base">
                Works Even If Other Parties Are Not on Margix
              </h5>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                If your supplier, customer, or transporter is not yet on Margix, the platform automatically generates standard PDF tax invoices, printable LRs, and Excel files with zero compatibility friction.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-bold text-margix-yellow bg-margix-yellow/10 border border-margix-yellow/30 px-4 py-2 rounded-xl">
            100% Industry Compatible
          </div>
        </div>

      </div>
    </section>
  );
}
