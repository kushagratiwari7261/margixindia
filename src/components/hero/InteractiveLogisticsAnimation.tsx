import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';

export default function InteractiveLogisticsAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [stage, setStage] = useState<'loading' | 'inefficient' | 'optimizing' | 'optimized' | 'transit' | 'backhaul'>('loading');
  const [utilization, setUtilization] = useState(24);

  const truckControls = useAnimation();

  useEffect(() => {
    if (!isPlaying) return;

    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted && isPlaying) {
        // Stage 1: Loading Initial Consignment
        setStage('loading');
        setUtilization(28);
        await new Promise(r => setTimeout(r, 1400));
        if (!isMounted || !isPlaying) break;

        // Stage 2: Inefficient Partial Load
        setStage('inefficient');
        setUtilization(62);
        await new Promise(r => setTimeout(r, 1800));
        if (!isMounted || !isPlaying) break;

        // Stage 3: Volumetric Optimization
        setStage('optimizing');
          for (let i = 62; i <= 97; i += 3) {
            if (!isMounted || !isPlaying) break;
            setUtilization(i > 97 ? 97 : i);
            await new Promise(r => setTimeout(r, 90));
          }
          setUtilization(97);
          if (!isMounted || !isPlaying) break;

          // Stage 4: Optimized Trailer Space
          setStage('optimized');
          await new Promise(r => setTimeout(r, 2000));
          if (!isMounted || !isPlaying) break;

          // Stage 5: Highway Dispatch
          setStage('transit');
          await truckControls.start({ x: 260, opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } });
          if (!isMounted || !isPlaying) break;

          // Stage 6: Return Backhaul Load Matched
          setStage('backhaul');
          truckControls.set({ x: -260, opacity: 0 });
          await truckControls.start({ x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } });

          await new Promise(r => setTimeout(r, 2200));
        }
      };

      runAnimation();

      return () => { isMounted = false; };
    }, [isPlaying, truckControls]);

    const handleManualOptimize = () => {
      setIsPlaying(true);
      setStage('optimizing');
      setUtilization(62);
    };

    const handleReset = () => {
      truckControls.set({ x: 0, opacity: 1 });
      setStage('loading');
      setUtilization(28);
      setIsPlaying(true);
    };

    return (
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 shadow-sm">
                {/* Top Telemetry Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B08D00]" />
                    <span className="text-xs sm:text-sm font-bold text-neutral-800">
                      {stage === 'loading' && 'Stage 1: Scanning Billable Consignment Items...'}
                      {stage === 'inefficient' && 'Stage 2: Partial Load Detected (Space Wasted)'}
                      {stage === 'optimizing' && 'Stage 3: Packing 3D Cargo Volumes...'}
                      {stage === 'optimized' && 'Stage 4: Maximum Trailer Capacity Achieved'}
                      {stage === 'transit' && 'Stage 5: Highway Corridor Dispatch Active'}
                      {stage === 'backhaul' && 'Stage 6: Destination Backhaul Cargo Reserved'}
                    </span>
                  </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                            Trailer Volume
                          </span>
                          <div className="text-xl sm:text-2xl font-black text-neutral-900 leading-none">
                            {utilization}%
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-[#B08D00] border border-amber-200">
                          {utilization >= 90 ? 'Optimized' : 'Staging'}
                        </span>
                      </div>
                    </div>

                      {/* Main Truck Canvas */}
                      <div className="py-8 sm:py-12 relative flex items-center justify-center overflow-hidden min-h-[220px]">
                        {/* Highway markings backdrop */}
                        <div className="absolute inset-x-0 bottom-6 h-0.5 bg-neutral-200 flex justify-around">
                          <span className="w-8 h-1 bg-neutral-300 -translate-y-0.5" />
                          <span className="w-8 h-1 bg-neutral-300 -translate-y-0.5" />
                          <span className="w-8 h-1 bg-neutral-300 -translate-y-0.5" />
                          <span className="w-8 h-1 bg-neutral-300 -translate-y-0.5" />
                          <span className="w-8 h-1 bg-neutral-300 -translate-y-0.5" />
                        </div>

                        {/* Animated Truck Trailer Container */}
                        <motion.div
                          animate={truckControls}
                          className="relative flex items-end z-10"
                        >
                            {/* Trailer Bed (Transparent cross-section) */}
                            <div className="relative w-64 sm:w-80 h-32 rounded-lg border-2 border-dashed border-neutral-400 bg-neutral-50/80 p-1.5 flex items-end overflow-hidden shadow-inner">
                              {/* Volume Guidelines */}
                              <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 font-bold uppercase">
                                16 MT FTL Bay
                              </div>

                              {/* Cargo Box 1: Base Pallet */}
                              <motion.div
                                className="absolute bg-neutral-800 border border-neutral-700 rounded-sm text-[9px] font-bold text-white flex items-center justify-center"
                                animate={{
                                  width: 60,
                                  height: 50,
                                  bottom: 4,
                                  left: stage === 'loading' ? -80 : 8,
                                  opacity: 1
                                }}
                              transition={{ type: 'spring', stiffness: 90 }}
            >
                              Lot A
                            </motion.div>

                            {/* Cargo Box 2: Secondary Pallet */}
                            <motion.div
                              className="absolute bg-neutral-700 border border-neutral-600 rounded-sm text-[9px] font-bold text-white flex items-center justify-center"
                              animate={{
                                width: 70,
                                height: 40,
                                bottom: 4,
                                left: stage === 'loading' ? -80 : 72,
                                opacity: stage === 'loading' ? 0 : 1
                              }}
                            transition={{ type: 'spring', stiffness: 85, delay: 0.1 }}
            >
                            Lot B
                        </motion.div>

                        {/* Cargo Box 3: Stacked Pallet */}
                        <motion.div
                          className="absolute bg-amber-600 border border-amber-500 rounded-sm text-[9px] font-bold text-white flex items-center justify-center"
                          animate={{
                            width: 55,
                            height: 45,
                            bottom: stage === 'inefficient' ? 4 : 58,
                            left: stage === 'inefficient' ? 146 : 8,
                            opacity: stage === 'loading' ? 0 : 1
                          }}
                          transition={{ type: 'spring', stiffness: 80, delay: 0.15 }}
                        >
                          Lot C
                        </motion.div>

                        {/* Cargo Box 4: Optimization Filler Pallet */}
                        <motion.div
                          className="absolute bg-[#fdc101] border border-amber-400 rounded-sm text-[9px] font-bold text-neutral-900 flex items-center justify-center shadow-xs"
                          animate={{
                            width: 80,
                            height: 50,
                            bottom: (stage === 'optimizing' || stage === 'optimized' || stage === 'transit') ? 4 : 80,
                            left: (stage === 'optimizing' || stage === 'optimized' || stage === 'transit') ? 146 : 146,
                            opacity: (stage === 'optimizing' || stage === 'optimized' || stage === 'transit') ? 1 : 0
                          }}
                        transition={{ type: 'spring', stiffness: 90, delay: 0.2 }}
            >
                        Backhaul D
                      </motion.div>

                      {/* Cargo Box 5: Upper Tier Filler */}
                      <motion.div
                        className="absolute bg-amber-550 bg-[#e0aa00] border border-amber-300 rounded-sm text-[9px] font-bold text-neutral-900 flex items-center justify-center"
                        animate={{
                          width: 90,
                          height: 40,
                          bottom: 58,
                          left: 72,
                          opacity: (stage === 'optimized' || stage === 'transit') ? 1 : 0
                        }}
                      transition={{ type: 'spring', stiffness: 95, delay: 0.25 }}
            >
                      97% Full
                    </motion.div>
                  </div>

                  {/* Truck Front Cabin */}
                  <div className="relative -ml-1 w-16 sm:w-20 h-24 bg-neutral-900 rounded-tr-2xl rounded-br-md border-t-2 border-r-2 border-b-2 border-neutral-800 flex flex-col justify-between p-2 shadow-sm">
                    <div className="w-8 h-8 rounded-tr-lg bg-neutral-800/90 border border-neutral-700" />
                    <div className="w-3 h-2 rounded bg-amber-400 self-end shadow-xs" />
                  </div>

                  {/* Truck Wheels */}
                  <div className="absolute left-8 -bottom-3 w-7 h-7 rounded-full bg-neutral-900 border-2 border-neutral-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                  <div className="absolute left-36 -bottom-3 w-7 h-7 rounded-full bg-neutral-900 border-2 border-neutral-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                  <div className="absolute right-5 -bottom-3 w-7 h-7 rounded-full bg-neutral-900 border-2 border-neutral-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                </motion.div>
              </div>

                {/* Human-designed Controls Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 size={14} className="text-[#B08D00]" />
                    <span>Real-time dynamic packing & deadhead elimination</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 active:translate-y-px text-xs font-semibold text-neutral-700 shadow-2xs transition-all cursor-pointer"
                    >
                      {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                      <span>{isPlaying ? 'Pause' : 'Resume'}</span>
                    </button>
                    <button
                      onClick={handleManualOptimize}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-xs font-semibold text-white shadow-2xs transition-all cursor-pointer"
                    >
                      <span>Optimize Load Now</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="p-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 active:translate-y-px text-neutral-700 shadow-2xs transition-all cursor-pointer"
                      title="Reset Simulation"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>
                </div>
              </div>
              );
}
