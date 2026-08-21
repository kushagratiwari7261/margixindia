
import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`relative bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-margix-yellow/10 hover:border-margix-yellow/50 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section id="load-optimization" className="py-24 bg-[#FAFAFA] text-neutral-900 relative overflow-hidden scroll-mt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full border-[1px] border-margix-yellow/20 border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -left-[20%] w-[1000px] h-[1000px] rounded-full border-[1px] border-neutral-300/50 border-dashed"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-amber-700 font-bold tracking-widest text-xs uppercase mb-6"
          >
            Intelligent Core
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6"
          >
            Capabilities that <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">Move Freight</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          
          {/* Card 1: Load Optimization (2 columns wide) */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:p-10 flex-1 z-10 bg-gradient-to-r from-white via-white to-transparent">
                <h3 className="text-3xl font-black mb-4">Load Optimization</h3>
                <p className="text-neutral-500 font-medium leading-relaxed max-w-sm mb-8">
                  Maximize every cubic inch. Our 3D spatial algorithms simulate and pack trailers to 98% efficiency before a single box is loaded.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-lg border border-amber-100 text-amber-800 font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Live Payload Density: 98.4%
                </div>
              </div>

              {/* Realistic Image: Load Optimization */}
              <div className="absolute bottom-0 right-0 w-full h-1/2 md:w-1/2 md:h-full pointer-events-none rounded-b-3xl md:rounded-r-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/80 md:via-white/50 to-transparent z-10" />
                <img src="/images/feature_load.jpg" alt="Load Optimization" className="w-full h-full object-cover object-left" />
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Route Intelligence (1 column wide) */}
          <BentoCard className="md:col-span-1" delay={0.2}>
            <div className="flex flex-col h-full p-6 md:p-8 pb-48 md:pb-48 relative">
              <h3 className="text-2xl font-black mb-3 relative z-10">Route Intelligence</h3>
              <p className="text-neutral-500 font-medium text-sm relative z-10 mb-8">
                Dynamic dispatch balancing distance, tolls, and time constraints.
              </p>

              {/* Realistic Image: Route Intelligence */}
              <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none overflow-hidden rounded-b-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src="/images/feature_route.jpg" alt="Route Intelligence" className="w-full h-full object-cover object-bottom" />
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Backhaul Optimization (3 columns wide) */}
          <BentoCard className="md:col-span-3 min-h-[350px] md:min-h-0 md:h-auto" delay={0.3}>
            <div className="flex flex-col md:flex-row h-full items-start md:items-center p-6 md:p-10 relative overflow-hidden">
              <div className="md:w-1/2 relative z-20 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 md:p-0 rounded-2xl md:rounded-none shadow-xl md:shadow-none mb-32 md:mb-0">
                <h3 className="text-3xl font-black mb-3">Backhaul Optimization</h3>
                <p className="text-neutral-500 font-medium leading-relaxed max-w-md">
                  Eliminate empty miles. Our AI matches available capacity with return loads instantly, turning deadhead into profit.
                </p>
              </div>

              {/* Realistic Image: Backhaul */}
              <div className="absolute bottom-0 left-0 md:top-0 md:left-1/2 w-full md:w-1/2 h-48 md:h-full pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 md:hidden" />
                <img src="/images/feature_backhaul.jpg" alt="Backhaul Optimization" className="w-full h-full object-cover object-right" />
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
