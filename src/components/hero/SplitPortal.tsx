import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import logo from '../../assets/logo.png';

interface SplitPortalProps {
  onSelectDivision: (division: 'software' | 'logistics') => void;
  onOpenContact?: () => void;
}

  export default function SplitPortal({ onSelectDivision, onOpenContact }: SplitPortalProps) {
    const [activeSide, setActiveSide] = useState<'software' | 'logistics' | null>(null);
    const [zooming, setZooming] = useState<'software' | 'logistics' | null>(null);

    const handleClick = useCallback((side: 'software' | 'logistics') => {
      if (zooming) return;
      setZooming(side);

      // After full-screen expansion completes, transition smoothly to the view
      setTimeout(() => {
        onSelectDivision(side);
      }, 620);
    }, [zooming, onSelectDivision]);

    return (
      <div className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#08101d] select-none">

        {/* TOP FLOATING HEADER (LOGO & ALWAYS-VISIBLE APPLY ACTION) */}
        <motion.div
          animate={{
            opacity: zooming ? 0 : 1,
            y: zooming ? -16 : 0,
            scale: zooming ? 0.96 : 1,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute top-5 inset-x-4 sm:inset-x-8 z-30 pointer-events-none flex items-center justify-between"
        >
            <div className="w-24 hidden sm:block pointer-events-none" />

            {/* Centered Logo */}
            <div className="pointer-events-auto flex items-center gap-3 px-6 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:translate-y-px transition-all">
              <img src={logo} alt="Margix" className="h-7 sm:h-8 w-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-wider text-neutral-900">MARGIX</span>
                <span className="text-[9px] tracking-widest text-[#D4A800] font-bold uppercase mt-0.5">Pvt Ltd</span>
              </div>
            </div>

            {/* Always Visible Apply Button */}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-neutral-900 text-xs font-bold border border-amber-300 shadow-xl hover:shadow-2xl hover:scale-105 active:translate-y-px transition-all cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight size={13} className="text-[#D4A800]" />
              </button>
            )}
        </motion.div>

        {/* FULL-SCREEN 50/50 SPLIT PANELS */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full flex flex-col lg:flex-row relative flex-1"
        >

          {/* ──────────────────────────────────────────────────────── */}
          {/* LEFT SLIDE: COMMERCIAL SOFTWARE                         */}
          {/* Crisp, Minimalist, Designer Italic Fonts, Logo Colors    */}
          {/* ──────────────────────────────────────────────────────── */}
          <div
            onClick={() => handleClick('software')}
            onMouseEnter={() => !zooming && setActiveSide('software')}
            onMouseLeave={() => !zooming && setActiveSide(null)}
            className={`relative flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-14 bg-[#FCFCFD] text-neutral-900 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-neutral-200/60 ${zooming === 'software'
              ? 'flex-[1] w-full z-40'
              : zooming === 'logistics'
                ? 'flex-[0.0001] w-0 p-0 opacity-0 pointer-events-none'
                : activeSide === 'software'
                  ? 'lg:flex-[1.24] shadow-2xl z-20'
                  : activeSide === 'logistics'
                    ? 'lg:flex-[0.76] opacity-90'
                    : 'lg:flex-1'
              }`}
          >
            {/* Subtle Margix Golden Ambient Glow */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#F9CA24]/12 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#F9CA24]/20 transition-all duration-700" />
            <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-[#FDC101]/8 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#FDC101]/16 transition-all duration-700" />

            {/* Centered Content Wrapper: Perfectly centered in viewport */}
            <motion.div
              animate={{
                scale: zooming === 'software' ? 1.03 : 1,
                y: zooming === 'software' ? -4 : 0,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-xl mx-auto w-full h-full flex flex-col justify-between"
            >
              {/* Header Block */}
              <div>
                <span className="text-xs font-bold tracking-widest text-[#B08D00] uppercase block mb-3.5">
                  Commercial Software
                </span>

                {/* Headline with Designer Italic Font */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-neutral-950 tracking-tight leading-[1.08]">
                  Run your
                  <br />
                  <span className="font-serif italic font-normal text-[#D4A800] tracking-normal inline-block pr-1">
                    entire business
                  </span>
                  <br />
                  <span className="text-neutral-950">from one place.</span>
                </h1>

                {/* Short, crisp subtitle */}
                <p className="mt-3.5 text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-normal">
                  Sales, inventory, billing, GST accounting and daily operations —{' '}
                  <span className="font-serif italic font-medium text-neutral-900">
                    connected in one unified platform.
                  </span>
                </p>
              </div>

              {/* Dashboard Showcase Card (Balances the truck on the right) */}
              <div className="my-3 flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-neutral-200/90 bg-white p-2.5 shadow-xl group-hover:border-[#D4A800]/50 transition-all duration-500">
                  <div className="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden bg-neutral-50 border border-neutral-200/80">
                    {/* Browser Bar */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-neutral-100/90 backdrop-blur-xs border-b border-neutral-200/70 px-2.5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono font-medium text-neutral-400">
                        app.margix.in
                      </span>
                    </div>
                    {/* Live Margix Dashboard Screenshot */}
                    <img
                      src="/images/margix-dashboard.png"
                      alt="Margix Business Management Suite Dashboard"
                      className="w-full h-full object-cover object-top pt-6 group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Action Pill */}
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-bold group-hover:bg-[#D4A800] group-hover:text-neutral-950 transition-all duration-300 shadow-sm">
                  <span>Explore Software</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                  Click to Enter
                </span>
              </div>
            </motion.div>
          </div>

          {/* ──────────────────────────────────────────────────────── */}
          {/* RIGHT SLIDE: ROAD LOGISTICS                             */}
          {/* Complimenting Luxury Midnight Slate & Margix Amber Gold  */}
          {/* ──────────────────────────────────────────────────────── */}
          <div
            onClick={() => handleClick('logistics')}
            onMouseEnter={() => !zooming && setActiveSide('logistics')}
            onMouseLeave={() => !zooming && setActiveSide(null)}
            className={`relative flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-14 bg-gradient-to-br from-[#0c182c] via-[#0e1d35] to-[#091322] text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group cursor-pointer border-t lg:border-t-0 border-[#1a2f50]/60 ${zooming === 'logistics'
              ? 'flex-[1] w-full z-40'
              : zooming === 'software'
                ? 'flex-[0.0001] w-0 p-0 opacity-0 pointer-events-none'
                : activeSide === 'logistics'
                  ? 'lg:flex-[1.24] shadow-2xl z-20'
                  : activeSide === 'software'
                    ? 'lg:flex-[0.76] opacity-90'
                    : 'lg:flex-1'
              }`}
          >
            {/* Subtle Amber Glow Complimenting Left Side */}
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#F9CA24]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#F9CA24]/20 transition-all duration-700" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-[#FDC101]/6 rounded-full blur-[80px] pointer-events-none" />

            {/* Centered Content Wrapper: Perfectly centered in viewport */}
            <motion.div
              animate={{
                scale: zooming === 'logistics' ? 1.03 : 1,
                y: zooming === 'logistics' ? -4 : 0,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-xl mx-auto w-full h-full flex flex-col justify-between"
            >
              {/* Header Block */}
              <div>
                <span className="text-xs font-bold tracking-widest text-[#F9CA24] uppercase block mb-3.5">
                  Road Logistics
                </span>

                {/* Headline with Designer Italic Font */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-white tracking-tight leading-[1.08]">
                  Road freight
                  <br />
                  <span className="font-serif italic font-normal text-[#F9CA24] tracking-normal inline-block pr-1">
                    across India
                  </span>
                  <br />
                  <span className="text-white">verified fleets.</span>
                </h2>

                {/* Short, crisp subtitle */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
                  Dedicated full truckloads and parcel transport with verified{' '}
                  <span className="font-serif italic font-medium text-white">
                    commercial multi-axle fleets
                  </span>
                  , digital LR bilti, and zero empty returns.
                </p>
              </div>

              {/* Real Indian Truck Showcase Card */}
              <div className="my-3 flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-xl group-hover:border-[#F9CA24]/40 transition-all duration-500">
                  <div className="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden bg-black/40 border border-white/10">
                    <img
                      src="/images/ssc-ftl.png"
                      alt="Real Indian commercial container freight truck on national highway"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-sm flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Truck size={14} className="text-[#F9CA24]" />
                        <span>Full Truckload (FTL)</span>
                      </span>
                      <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 rounded border border-white/20 font-semibold">
                        National Permit
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Pill */}
              <div className="pt-2 flex items-center justify-between border-t border-[#1a2f50]/70">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#132847] text-[#F9CA24] border border-[#1e3d6b] text-xs sm:text-sm font-bold group-hover:bg-[#F9CA24] group-hover:text-neutral-950 group-hover:border-[#F9CA24] transition-all duration-300 shadow-sm">
                  <span>Explore Road Freight</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  Click to Enter
                </span>
              </div>
            </motion.div>
          </div>

        </motion.div >

        {/* FULL-SCREEN TRANSITION CURTAIN */}
        <AnimatePresence>
          {zooming && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.3, ease: 'easeInOut' }}
              className={`fixed inset-0 z-50 pointer-events-none ${zooming === 'software' ? 'bg-[#FCFCFD]' : 'bg-[#08101d]'
                }`}
            />
          )}
        </AnimatePresence>
      </div >
    );
  }
