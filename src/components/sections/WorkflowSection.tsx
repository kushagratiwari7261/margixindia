import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const stages = [
  {
    num: '01',
    title: 'Shipment Data',
    desc: 'Seamlessly integrate order volumes, delivery windows, and operational constraints directly into the platform via API.',
    image: '/assets/shipment.png'
  },
  {
    num: '02',
    title: 'Load Analysis',
    desc: 'Margix AI evaluates cargo dimensions, weight limits, and available vehicle capacities in real-time.',
    image: '/assets/analysis.png'
  },
  {
    num: '03',
    title: 'Route Optimization',
    desc: 'Calculate the most efficient multi-stop delivery paths to reduce fuel consumption and transit time.',
    image: '/assets/route.png'
  },
  {
    num: '04',
    title: 'Load Optimization',
    desc: 'Generate intelligent 3D packing plans to maximize cubic utilization and reduce empty space.',
    image: '/assets/load.png'
  },
  {
    num: '05',
    title: 'Backhaul Matching',
    desc: 'Automatically scan the broader logistics network to secure profitable return loads for your empty assets.',
    image: '/assets/backhaul.png'
  },
  {
    num: '06',
    title: 'Performance Insights',
    desc: 'Track fleet efficiency, utilization rates, and overall cost savings through our comprehensive analytics suite.',
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
    handleResize(); // Initial check
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
      
      // Calculate the absolute position of the section in the document
      const absoluteTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      
      // The exact scroll position where the next section begins
      const targetScroll = absoluteTop + sectionHeight;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      // Reset the skip flag after the smooth scroll finishes
      setTimeout(() => {
        isSkippingRef.current = false;
        setActiveStage(stages.length - 1);
      }, 1000);
    }
  };

  return (
    <section ref={sectionRef} id="how-it-works" className="h-auto lg:h-[400vh] bg-margix-light relative">
      <div className="lg:sticky lg:top-0 h-auto lg:h-screen lg:overflow-hidden flex flex-col justify-center py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-h-full flex flex-col">
          <div className="text-center mb-8 lg:mb-12 shrink-0">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6">
              <span className="bg-margix-yellow text-margix-black px-3 py-1 lg:px-4 lg:py-1 inline-block">From Shipment to Smarter Logistics</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-lg">Our intelligent workflow seamlessly transforms raw data into highly optimized, cost-efficient logistics operations.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start flex-1 min-h-0 pt-4">

            {/* Left: Dynamic Dashboard Image (Desktop Only) */}
            <div className="hidden lg:flex w-full lg:w-1/2 relative flex-1 min-h-0 items-start">
              <motion.div
                className="relative w-full h-[25vh] md:h-[40vh] lg:h-[60vh] flex items-center justify-center [perspective:1200px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Brand Logo Overlay to cover generated text */}
                <div className="absolute top-4 left-4 z-20 bg-[#111] backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 L25 20 L10 30 Z" fill="#FFC107" />
                    <path d="M20 10 L35 20 L20 30 Z" fill="#B08D00" fillOpacity="0.8" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[12px] font-bold tracking-wider text-white">MARGIX</span>
                    <span className="text-[7px] tracking-[0.25em] text-margix-yellow font-bold">INDIA</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStage}
                    src={stages[activeStage].image}
                    alt={stages[activeStage].title}
                    initial={{ opacity: 0, rotateY: 90, transformOrigin: "left" }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90, transformOrigin: "right" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-10 w-64 h-64 bg-margix-yellow/20 rounded-full blur-3xl"></div>
            </div>

            {/* Right: Interactive Stages List */}
            <div className="w-full lg:w-1/2 flex flex-col relative h-auto lg:h-auto overflow-visible pr-0 lg:pr-2 custom-scrollbar">
              {/* Continuous Vertical Line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gray-200 hidden md:block"></div>

              {/* Skip Button */}
              <div className="hidden lg:flex absolute top-0 right-0 z-50 justify-end pointer-events-none">
                <button
                  onClick={handleSkip}
                  className="pointer-events-auto bg-margix-yellow text-margix-black px-4 py-2 text-sm lg:text-base lg:px-6 lg:py-3 rounded-full font-bold shadow-lg shadow-yellow-500/20 hover:scale-105 transition-transform flex items-center gap-2 group"
                >
                  Skip Workflow
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>

              <div className="mt-8 lg:mt-0 pb-12 lg:pb-24">
                {stages.map((stage, idx) => {
                  const isActive = !isDesktop || activeStage === idx;

                  return (
                    <motion.div
                      key={idx}
                      className="relative pl-0 md:pl-16 py-6 lg:py-4 flex flex-col transition-all duration-500"
                      initial={!isDesktop ? { opacity: 0, y: 40 } : undefined}
                      whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      animate={isDesktop ? {
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1.02 : 1
                      } : undefined}
                    >
                      {/* Timeline dot */}
                      <div className={`hidden md:flex absolute left-[0px] top-[20px] lg:top-[24px] w-6 h-6 rounded-full border-4 border-margix-light items-center justify-center transition-all duration-300 z-10 ${isActive ? 'bg-margix-yellow scale-110 shadow-[0_0_0_4px_rgba(249,249,249,1)]' : 'bg-gray-200'}`}>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className={`text-xl md:text-3xl font-black transition-colors duration-300 ${isActive ? 'text-margix-yellow' : 'text-gray-200'}`}>
                            {stage.num}
                          </span>
                          <h3 className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-margix-black' : 'text-gray-500'}`}>
                            {stage.title}
                          </h3>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={isDesktop ? { opacity: 0, height: 0 } : false}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={isDesktop ? { opacity: 0, height: 0 } : undefined}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-1 md:pt-3 pb-2 ml-0 md:ml-[52px]">
                                {stage.desc}
                              </p>
                              
                              {/* Mobile Image */}
                              {!isDesktop && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  className="mt-4 mb-2 w-full h-[25vh] sm:h-[35vh] rounded-xl overflow-hidden relative shadow-md bg-white"
                                >
                                  <img src={stage.image} alt={stage.title} className="w-full h-full object-contain mix-blend-multiply" />
                                </motion.div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Precision Scroll Anchors */}
      <div id="analytics" className="absolute top-[300vh] w-full h-1 pointer-events-none"></div>
    </section>
  );
}