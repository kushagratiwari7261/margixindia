import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'Shipment Data Ingestion',
    desc: 'Integrate consignment volumes, delivery windows, and godown constraints directly from sales orders into the platform.',
    image: '/assets/shipment.png'
  },
  {
    num: '02',
    title: 'Load & Capacity Analysis',
    desc: 'Margix calculates cargo dimensions, axle weight limits, and vehicle volume capacities in real-time.',
    image: '/assets/analysis.png'
  },
  {
    num: '03',
    title: 'Corridor Route Optimization',
    desc: 'Calculate the most efficient multi-depot transit corridors across Indian highways to reduce toll fees and fuel consumption.',
    image: '/assets/route.png'
  },
  {
    num: '04',
    title: 'Volumetric Load Planning',
    desc: 'Calculate exact 3D trailer packing arrangements to maximize cubic freight utilization and reduce damaged stock in transit.',
    image: '/assets/load.png'
  },
  {
    num: '05',
    title: 'Backhaul Return Matching',
    desc: 'Scan the verified logistics network at the delivery terminal to secure profitable return loads for your empty assets.',
    image: '/assets/backhaul.png'
  },
  {
    num: '06',
    title: 'Performance & Cost Analytics',
    desc: 'Track fleet turn-around time, trip profitability, fuel consumption, and deadhead reduction through structured dashboards.',
    image: '/assets/dashboard-mockup.png'
  }
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSkippingRef = useRef(false);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isSkippingRef.current || !isDesktop) return;
    let index = Math.floor(latest * stages.length);
    if (index >= stages.length) index = stages.length - 1;
    setActiveStage(index);
  });

  const handleSkip = () => {
    const section = sectionRef.current;
    if (section) {
      isSkippingRef.current = true;
      const absoluteTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const targetScroll = absoluteTop + sectionHeight;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isSkippingRef.current = false;
        setActiveStage(stages.length - 1);
    }, 900);
  }
};

return (
      <section ref={sectionRef} id="how-it-works" className="h-auto lg:h-[350vh] bg-white border-b border-neutral-200 relative">
        <div className="lg:sticky lg:top-0 h-auto lg:h-screen lg:overflow-hidden flex flex-col justify-center py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-h-full flex flex-col">

                {/* Header */}
                <div className="text-center mb-8 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                    Logistics Intelligence
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                    Route & Freight Optimization Lifecycle
                  </h2>
                  <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base mt-2">
                    How consignment data converts into optimized trailer space, verified highway dispatch, and return loads.
                  </p>
                </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center flex-1 min-h-0 pt-2">

                          {/* Left: Diagram View (Desktop Only) */}
                          <div className="hidden lg:flex w-full lg:w-1/2 relative flex-1 min-h-0 items-center justify-center">
                            <div className="relative w-full h-[45vh] lg:h-[55vh] flex items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-200 p-6 shadow-sm overflow-hidden">
                              <div className="absolute top-3 left-3 z-10 bg-white border border-neutral-200 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-xs">
                                <span className="text-[11px] font-bold text-neutral-900">STAGE {stages[activeStage].num}</span>
                                <span className="text-[10px] text-[#B08D00] font-semibold uppercase">{stages[activeStage].title}</span>
                              </div>

                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={activeStage}
                                  src={stages[activeStage].image}
                                  alt={stages[activeStage].title}
                                  initial={{ opacity: 0, scale: 0.98 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 1.02 }}
                                  transition={{ duration: 0.2 }}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </AnimatePresence>
                          </div>
                        </div>

                          {/* Right: Stages List */}
                          <div className="w-full lg:w-1/2 flex flex-col relative h-auto overflow-visible pr-0 lg:pr-2">
                            {/* Skip Button */}
                              <div className="hidden lg:flex justify-end mb-4">
                                <button
                                  onClick={handleSkip}
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold border border-neutral-300 shadow-2xs transition-all cursor-pointer"
                                >
                                  <span>Skip Steps</span>
                                  <ArrowDown size={13} />
                                </button>
                              </div>

                                <div className="space-y-3">
                                  {stages.map((stage, idx) => {
                                    const isActive = !isDesktop || activeStage === idx;

                                    return (
                                        <div
                      key={idx}
                                        className={`p-4 rounded-xl border transition-all ${isActive
                                            ? 'bg-neutral-50 border-neutral-900 shadow-xs'
                                            : 'bg-white border-neutral-200 opacity-60'
                                          }`}
                                      >
                                          <div className="flex items-center gap-3">
                                            <span className={`text-base font-bold font-mono ${isActive ? 'text-[#B08D00]' : 'text-neutral-400'
                                              }`}>
                                              {stage.num}
                                            </span>
                                            <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                                              {stage.title}
                                            </h3>
                                          </div>

                                              {isActive && (
                                                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2 pl-7">
                                                  {stage.desc}
                                                </p>
                                              )}

                                              {/* Mobile Image */}
                                              {!isDesktop && (
                        <div className="mt-3 w-full h-44 rounded-lg overflow-hidden bg-neutral-50 border border-neutral-200 p-2">
                          <img src={stage.image} alt={stage.title} loading="lazy" className="w-full h-full object-contain" />
                        </div>
                      )}
                                        </div>
                                        );
                })}
                                      </div>
            </div>

                              </div>
                            </div>
                          </div>

                          <div id="analytics" className="absolute top-[250vh] w-full h-1 pointer-events-none"></div>
                        </section>
                        );
}
