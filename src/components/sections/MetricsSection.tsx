import { motion } from 'framer-motion';
import { PackageCheck, Fuel, IndianRupee, RefreshCw } from 'lucide-react';

const metrics = [
  {
    label: 'Load Utilization',
    value: '97',
    suffix: '%',
    description: 'Maximize trailer space on every trip, significantly increasing the volume of freight transported per truck.',
    icon: <PackageCheck size={22} strokeWidth={1.8} />,
    accentColor: 'text-margix-yellow',
    bgColor: 'bg-margix-yellow/8',
    borderHover: 'hover:border-margix-yellow/30',
  },
  {
    label: 'Empty Capacity',
    value: '3',
    suffix: '%',
    description: 'Drastically reduce deadhead miles and eliminate wasted capacity by seamlessly matching return loads.',
    icon: <Fuel size={22} strokeWidth={1.8} />,
    accentColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/8',
    borderHover: 'hover:border-emerald-500/30',
  },
  {
    label: 'Cost Savings',
    value: '24',
    suffix: '%',
    description: 'Lower overall operational costs and transport spend through intelligent route and load optimization.',
    icon: <IndianRupee size={22} strokeWidth={1.8} />,
    accentColor: 'text-blue-500',
    bgColor: 'bg-blue-500/8',
    borderHover: 'hover:border-blue-500/30',
  },
  {
    label: 'Backhaul Match',
    value: '85',
    suffix: '%',
    description: 'Guarantee automated return trips and seamless return routing with instant verified transporter matches.',
    icon: <RefreshCw size={22} strokeWidth={1.8} />,
    accentColor: 'text-violet-500',
    bgColor: 'bg-violet-500/8',
    borderHover: 'hover:border-violet-500/30',
  },
];

export default function MetricsSection() {
  return (
    <section className="relative z-20 bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 lg:mb-18 max-w-2xl"
        >
          <p className="text-sm font-semibold text-margix-yellow uppercase tracking-widest mb-3">Performance</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-margix-black tracking-tight leading-tight">
            Numbers that speak
            <br className="hidden sm:block" />
            for themselves.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
            Every metric below is a result of our intelligent matching engine working on real loads, real routes, across India.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45, ease: "easeOut" }}
              className={`group relative rounded-2xl border border-gray-100 bg-white p-6 lg:p-7 transition-all duration-300 ${metric.borderHover} hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${metric.bgColor} ${metric.accentColor} mb-5`}>
                {metric.icon}
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-4xl lg:text-5xl font-bold text-margix-black tracking-tight leading-none">
                  {metric.value}
                </span>
                <span className={`text-2xl lg:text-3xl font-bold ${metric.accentColor} leading-none`}>
                  {metric.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-margix-black mb-3">
                {metric.label}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {metric.description}
              </p>

              {/* Subtle bottom accent line */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${metric.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
