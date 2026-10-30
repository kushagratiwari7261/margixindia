import { motion } from 'framer-motion';
import { 
  Smartphone, 
  WifiOff, 
  Zap, 
  ScanBarcode, 
  Camera, 
  CheckCircle2, 
  Lock,
  ArrowRight
} from 'lucide-react';

interface MobileAppsSectionProps {
  onOpenContact?: () => void;
}

export default function MobileAppsSection({ onOpenContact }: MobileAppsSectionProps) {
  return (
    <section className="py-24 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone size={14} className="text-amber-600" />
            Field & Road Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            Two Mobile Apps Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">Indian Ground Realities</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Real work happens in dusty godowns, highway toll booths, and remote retail counters. Margix mobile apps are engineered to work effortlessly on affordable Android phones, even when network signals drop completely.
          </p>
        </div>

        {/* 2 Apps Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* App 1: Margix Business App */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-neutral-200 bg-neutral-50/60 p-8 sm:p-10 flex flex-col justify-between hover:border-margix-yellow/60 transition-all duration-300 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                    <ScanBarcode size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">For Staff & Operations</span>
                    <h3 className="text-2xl font-black text-neutral-900">Margix Business App</h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                  Android (iOS later)
                </span>
              </div>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                One unified mobile workspace serving your entire operational team in the field:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <div className="font-bold text-neutral-900 text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-amber-600" />
                    Field Salespeople
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                    Book orders directly at customer counters using live stock availability and negotiated price lists. No pen-and-paper ordering.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <div className="font-bold text-neutral-900 text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-amber-600" />
                    Godown Storekeepers
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                    Scan barcodes for inwards and dispatches, verify physical inventory against the system, and flag stock discrepancies instantly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  <div className="font-bold text-neutral-900 text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-amber-600" />
                    Delivery Personnel
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                    Deliver consignments, capture recipient photo proof and digital signatures, and record cash/UPI collections on the spot.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} className="text-amber-600" /> Works completely offline
              </span>
              <span className="flex items-center gap-1.5">
                <Lock size={14} className="text-neutral-500" /> Remote device logout
              </span>
            </div>
          </motion.div>

          {/* App 2: Margix Driver App */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-neutral-900 bg-neutral-950 text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-margix-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-margix-yellow/20 text-margix-yellow flex items-center justify-center font-bold">
                    <Camera size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-margix-yellow uppercase tracking-widest block">For Truck Drivers</span>
                    <h3 className="text-2xl font-black text-white">Margix Driver App</h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-neutral-800 text-white border border-neutral-700 rounded-full">
                  Works on Any Fleet
                </span>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Purpose-built with ultra-large touch targets and simple vernacular flows for drivers across India:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-margix-yellow" />
                    Trip Steps & Milestones
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                    Follow straightforward checkpoints: loading verification, toll checkpoints, en-route halts, and gate delivery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-margix-yellow" />
                    Geotagged Photo POD & Signature
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                    Snap crystal-clear photos of signed physical challans and take consignee signatures directly on the phone screen.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-margix-yellow" />
                    Cash Collection Logging
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                    Instantly log Cash on Delivery (COD) received from customers, generating an instant SMS payment confirmation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-emerald-400" /> Sub-2 sec response on 4G
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} className="text-margix-yellow" /> Zero data loss offline
              </span>
            </div>
          </motion.div>

        </div>

        {/* Technical Highlights Banner */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-margix-yellow text-margix-black flex items-center justify-center shrink-0 font-bold shadow-md">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                Offline-First Data Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Work completed offline is safely encrypted on the handset. The second cellular connectivity returns, every transaction synchronizes automatically without double-counting.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-sm hover:bg-black transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Learn About Mobile Apps</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
