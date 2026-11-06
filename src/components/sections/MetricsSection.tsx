import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { PackageCheck, Layers, Receipt, RefreshCw } from 'lucide-react';

const metrics = [
  {
    label: 'Modular Day-One Apps',
    value: 15,
    suffix: '',
    decimals: 0,
    description: '9 Business Suite apps + 6 Logistics apps sharing one core customer and ledger database.',
    icon: <Layers size={22} strokeWidth={2} />,
  },
  {
    label: 'Tally & GST Replacement',
    value: 100,
    suffix: '%',
    decimals: 0,
    description: 'Double-entry accounting, real-time P&L, balance sheet, TDS, e-way bills, and GSTR-1/3B data.',
    icon: <Receipt size={22} strokeWidth={2} />,
  },
  {
    label: 'Manual Retyping',
    value: 0,
    suffix: '%',
    decimals: 0,
    description: 'Buyer PO becomes seller sales order, invoice auto-generates e-way bills and pushes freight to truckers.',
    icon: <RefreshCw size={22} strokeWidth={2} />,
  },
  {
    label: 'Fleet Load Utilization',
    value: 97,
    suffix: '%',
    decimals: 0,
    description: 'Maximizes trailer volume and eliminates empty deadhead miles with automated backhaul return matching.',
    icon: <PackageCheck size={22} strokeWidth={2} />,
  },
];

function AnimatedValue({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const display = useTransform(
    motionValue,
    (v) => v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration: 2, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function MetricsSection() {
  return (
    <section className="relative z-20 bg-[#F7F7F7] py-20 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-bold text-[#E85D1F] uppercase tracking-widest mb-2">Platform Impact</p>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
            Designed to Cut Cost & Time <br className="hidden sm:block" />
            Across Every Department.
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            From the accounting desk to the highway truck cabin, Margix Pvt Ltd delivers verified operational efficiency on real Indian trade routes.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45, ease: "easeOut" }}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-7 shadow-sm transition-all duration-300 hover:border-[#FF7D44] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FF7D44]/15 text-[#E85D1F] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {metric.icon}
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-none">
                  <AnimatedValue value={metric.value} decimals={metric.decimals} />
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#FF7D44] leading-none">
                  {metric.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="text-sm font-bold text-neutral-900 mb-2">
                {metric.label}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {metric.description}
              </p>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#FF7D44] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
