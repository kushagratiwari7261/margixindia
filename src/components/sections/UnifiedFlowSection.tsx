import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Building2, 
  Truck, 
  BookOpenCheck,
  Sparkles
} from 'lucide-react';

export default function UnifiedFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      actor: "Retailer (Buyer)",
      action: "Places an Order via WhatsApp",
      detail: "Browses the distributor's live WhatsApp catalogue on mobile and selects items. The order instantly arrives as a verified draft sales order at the distributor — zero retyping.",
      badge: "WhatsApp Catalogue"
    },
    {
      num: "02",
      actor: "Distributor (Seller)",
      action: "Bills Order with GST & Auto E-Way",
      detail: "Reviews the draft sales order, approves it, and generates the GST tax invoice. The e-way bill and IRN are generated automatically via direct government API integration.",
      badge: "Automated E-Invoice"
    },
    {
      num: "03",
      actor: "Distributor (Seller)",
      action: "Books a Truck on Margix",
      detail: "Clicks 'Ship by Truck' directly from the invoice screen. Margix automatically extracts package weight, dimensions, pickup, and delivery coordinates, publishing the load to nearby truckers.",
      badge: "1-Click Freight Post"
    },
    {
      num: "04",
      actor: "Transport Company",
      action: "Quotes & Wins the Load",
      detail: "Verified transporters receive the load notification, submit their quote, and the distributor accepts the best bid. A digital Lorry Receipt (LR) is automatically initialized.",
      badge: "Verified Marketplace"
    },
    {
      num: "05",
      actor: "Transporter & Driver",
      action: "Picks Up & Delivers Consignment",
      detail: "The assigned truck driver uses the Margix Driver App to navigate checkpoints, record goods loading, and capture consignee photo proof-of-delivery (POD) and digital signature upon delivery.",
      badge: "Offline Driver POD"
    },
    {
      num: "06",
      actor: "Retailer (Buyer)",
      action: "Receives Goods & Pays by UPI",
      detail: "The purchase bill lands automatically in the retailer's Margix books. The retailer scans the dynamic UPI QR printed on the invoice to settle payment instantly into the seller's bank.",
      badge: "Instant Reconciliation"
    },
    {
      num: "07",
      actor: "All Three Parties",
      action: "Books Update Themselves Automatically",
      detail: "Distributor's ledgers show sales revenue, payment received, freight cost, and GSTR-1 data. Retailer's books record purchase inventory & GST input credit. Transporter's freight bill is settled.",
      badge: "Zero Manual Tally Entry"
    }
  ];

  return (
    <section id="unified-flow" className="py-20 lg:py-28 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            End-To-End Synchronization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            One Order Moves Through 3 Businesses <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              With Zero Retyping
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Witness how buyer, seller, and transporter operate on one connected thread. An order flows seamlessly from WhatsApp checkout all the way to bank settlement and tax filing.
          </p>
        </div>

        {/* The 3 Stakeholder Columns Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Store size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Stakeholder 1</span>
              <h4 className="text-base font-bold text-neutral-900">Retailer (Buyer)</h4>
              <p className="text-xs text-neutral-600 mt-0.5">WhatsApp orders, auto-purchase bills, UPI settlements</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-margix-yellow/20 text-margix-black flex items-center justify-center shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Stakeholder 2</span>
              <h4 className="text-base font-bold text-neutral-900">Distributor (Seller)</h4>
              <p className="text-xs text-neutral-600 mt-0.5">GST billing, auto e-way bill, instant truck booking</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Stakeholder 3</span>
              <h4 className="text-base font-bold text-neutral-900">Transport Operator</h4>
              <p className="text-xs text-neutral-600 mt-0.5">Bidding, digital LR, driver tracking, photo POD</p>
            </div>
          </div>
        </div>

        {/* Interactive Steps List */}
        <div className="space-y-3 mb-12">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-neutral-950 text-white border-margix-yellow shadow-xl' 
                    : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <span className={`text-xl sm:text-2xl font-black font-mono transition-colors ${
                      isSelected ? 'text-margix-yellow' : 'text-neutral-400'
                    }`}>
                      {step.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isSelected 
                            ? 'bg-white/10 text-margix-yellow' 
                            : 'bg-amber-100 text-amber-900'
                        }`}>
                          {step.actor}
                        </span>
                        <span className="text-xs opacity-60 hidden sm:inline">&bull;</span>
                        <span className="text-xs opacity-70 hidden sm:inline">{step.badge}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold">
                        {step.action}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      isSelected ? 'bg-neutral-800 text-neutral-300' : 'bg-white text-neutral-600 border border-neutral-200'
                    }`}>
                      Step {step.num} of 07
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 pt-4 border-t border-neutral-800 text-sm text-neutral-300 leading-relaxed pl-0 sm:pl-10"
                  >
                    <p>{step.detail}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Compatibility Assurance */}
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-amber-800 shrink-0 shadow-sm">
              <BookOpenCheck size={20} />
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-base">
                Works Even If Other Parties Are Not on Margix
              </h5>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                If your supplier, customer, or transporter is not yet on Margix, the platform automatically exports standard PDF tax invoices, printable LRs, and Excel files with zero compatibility friction.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-4 py-2 rounded-xl">
            100% Industry Compatible
          </div>
        </div>

      </div>
    </section>
  );
}
