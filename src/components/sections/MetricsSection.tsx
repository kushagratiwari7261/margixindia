
import { motion } from 'framer-motion';
import { Activity, Battery, TrendingDown, Repeat } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const metrics = [
  { label: 'LOAD UTILIZATION', value: '97%', subtext: 'Maximize trailer space on every trip, significantly increasing the volume of freight transported per truck.', icon: <Activity className="text-margix-yellow" size={24} /> },
  { label: 'EMPTY CAPACITY', value: '3%', subtext: 'Drastically reduce deadhead miles and eliminate wasted capacity by seamlessly matching return loads.', icon: <Battery className="text-gray-400" size={24} /> },
  { label: 'COST SAVINGS', value: '24%', subtext: 'Lower overall operational costs and transport spend through intelligent route and load optimization.', icon: <TrendingDown className="text-green-400" size={24} /> },
  { label: 'BACKHAUL MATCH', value: '85%', subtext: 'Guarantee automated return trips and seamless return routing with instant verified transporter matches.', icon: <Repeat className="text-blue-400" size={24} /> },
];

export default function MetricsSection() {
  return (
    <section className="py-24 relative z-20 bg-gradient-to-b from-margix-black via-[#111111] to-white overflow-hidden">
      {/* Interactive Swarm of Fast Yellow Particles */}
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pointer-events-auto">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#111111] border border-white/5 rounded-2xl p-5 lg:p-6 flex flex-col items-center justify-start lg:justify-center text-center hover:border-margix-yellow/30 transition-all duration-500 shadow-2xl overflow-hidden min-h-[250px] lg:min-h-[300px]"
            >
              {/* Card hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-margix-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Core Content Wrapper - Slides UP on hover (Desktop) or always shifted up (Mobile) */}
              <div className="relative z-10 flex flex-col items-center justify-center transform lg:translate-y-0 lg:group-hover:-translate-y-10 transition-all duration-500 w-full flex-1">
                <div className="mb-2 p-3 lg:mb-4 lg:p-4 bg-white/5 rounded-full lg:group-hover:scale-110 lg:group-hover:bg-margix-yellow/10 transition-all duration-500">
                  {metric.icon}
                </div>
                
                <div className="text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-1 lg:mb-2 lg:group-hover:from-margix-yellow lg:group-hover:to-yellow-200 transition-all duration-500">
                  {metric.value}
                </div>
                
                <div className="text-[10px] lg:text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] lg:tracking-[0.2em] lg:group-hover:text-gray-300 transition-colors mb-4 lg:mb-0">
                  {metric.label}
                </div>
              </div>
              
              {/* Subtext - Fades in and slides UP into the freed space (Desktop) or always visible (Mobile) */}
              <div className="relative lg:absolute lg:bottom-8 lg:left-6 lg:right-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 z-10 transform translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 text-xs lg:text-sm text-gray-400 font-medium lg:group-hover:text-yellow-100/90 leading-relaxed pointer-events-none mt-auto">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
