import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Calculator,
  CheckCircle2,
  Clock,
  Truck
} from 'lucide-react';

interface LogisticsHeroProps {
  onOpenContact?: () => void;
}

export default function LogisticsHero({ onOpenContact }: LogisticsHeroProps) {
  // Widget Tab: 'track' or 'quote'
  const [activeWidget, setActiveWidget] = useState<'track' | 'quote'>('track');

  // Tracking State
  const [trackingId, setTrackingId] = useState('MH-12-8921');
  const [trackingResult, setTrackingResult] = useState<null | {
    id: string;
    origin: string;
    destination: string;
    carrier: string;
    status: string;
    progress: number;
    checkpoints: { time: string; loc: string; detail: string; done: boolean }[];
  }>({
    id: 'MH-12-8921',
    origin: 'Mumbai (Nhava Sheva Terminal)',
    destination: 'New Delhi (Okhla Industrial Hub)',
    carrier: '28 MT Multi-Axle Container Trailer',
    status: 'In-Transit on Delhi-Mumbai Expressway',
    progress: 72,
    checkpoints: [
      { time: '06:30 AM', loc: 'Mumbai Terminal', detail: 'Cargo loaded & digital LR #8921 generated', done: true },
      { time: '11:45 AM', loc: 'Surat Gateway', detail: 'E-way bill verified at toll checkpoint', done: true },
      { time: '04:15 PM', loc: 'Vadodara Bypass', detail: 'GPS milestone verified • Speed 58 km/h', done: true },
      { time: '09:00 PM (Est.)', loc: 'New Delhi Depot', detail: 'Consignee OTP & photo POD scheduled', done: false }
    ]
  });

  // Freight Quote State
  const [fromCity, setFromCity] = useState('Mumbai');
  const [toCity, setToCity] = useState('New Delhi');
  const [truckType, setTruckType] = useState('16 MT Taurus');
  const [quoteResult, setQuoteResult] = useState({
    rate: '₹62,000 – ₹65,500',
    distance: '1,420 km',
    transit: '36 – 40 Hours',
    saving: 'Save 16% via Return Backhaul Matching'
  });

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingResult({
      id: trackingId.toUpperCase(),
      origin: 'Bhiwandi Central Godown',
      destination: 'Surat Industrial Estate',
      carrier: '25 MT Multi-Axle (Tata Prima)',
      status: 'In-Transit • Verified GPS',
      progress: 55,
      checkpoints: [
        { time: '07:00 AM', loc: 'Bhiwandi Hub', detail: 'Digital LR generated & invoice auto-linked', done: true },
        { time: '10:30 AM', loc: 'Manor Toll Plaza', detail: 'Toll crossed & consignment verified', done: true },
        { time: '01:45 PM', loc: 'Valsad Corridor', detail: 'Active highway transit milestone', done: true },
        { time: '05:30 PM (Est.)', loc: 'Surat Terminal', detail: 'Delivery arrival & offline driver POD', done: false }
      ]
    });
  };

  const handleQuoteCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const baseRates: Record<string, string> = {
      '16 MT Taurus': '₹34,500 – ₹36,000',
      '25 MT Multi-Axle': '₹48,000 – ₹51,000',
      '32 FT Container': '₹42,000 – ₹44,500'
    };
    setQuoteResult({
      rate: baseRates[truckType] || '₹35,000',
      distance: `${fromCity} to ${toCity} Corridor`,
      transit: '16 – 20 Hours',
      saving: 'Zero Broker Margin • Direct Carrier Quoting'
    });
  };

  const sampleCodes = ['MH-12-8921', 'GJ-01-4410', 'DL-01-9920'];

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 bg-white overflow-hidden border-b border-neutral-200">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Label */}
        <div className="text-center mb-3">
          <span className="text-xs font-bold tracking-widest text-[#B08D00] uppercase">
            Road Logistics
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.14]"
          >
            Pan-India Road Freight &amp; Fleet.
            <br />
            <span className="font-serif italic font-normal text-[#D4A800]">
              Verified Commercial Carriers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            Move full truckloads and parcel consignments across national corridors with verified drivers, digital LR bilti, live GPS milestones, and zero empty return miles.
          </motion.p>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 text-xs text-neutral-700 font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200">
              <CheckCircle2 size={13} className="text-[#B08D00]" />
              Dedicated 16–25 MT FTL
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200">
              <CheckCircle2 size={13} className="text-[#B08D00]" />
              Part-Load Godown Hubs (PTL)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200">
              <CheckCircle2 size={13} className="text-[#B08D00]" />
              Live GPS Toll Milestones
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200">
              <CheckCircle2 size={13} className="text-[#B08D00]" />
              Return Backhaul Matching
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href="#logistics-services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>Explore 6 Freight Services</span>
              <ArrowRight size={15} />
            </a>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 active:translate-y-px text-neutral-800 text-xs sm:text-sm font-semibold border border-neutral-300 transition-all shadow-2xs cursor-pointer"
            >
              Book Freight / Dispatch Truck
            </button>
          </div>
        </div>

        {/* Real Indian Freight Truck Showcase */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xl mb-12 bg-neutral-100">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden">
            <img
              src="/images/ssc-ftl.png"
              alt="Real Indian commercial freight truck in transit on national highway"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <Truck size={15} className="text-[#F9CA24]" />
                <span>Full Truckload Freight &bull; National Interstate Transit</span>
              </span>
              <span className="text-[11px] font-mono text-white/90 bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                Live Highway Dispatch
              </span>
            </div>
          </div>
        </div>

        {/* Live Active Highway Corridors Marquee Ticker */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 mb-12 overflow-hidden shadow-xs">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-[#B08D00] bg-white border border-neutral-200 px-3 py-1 rounded-md z-10 shadow-2xs">
              Live Corridors
            </span>
            <div className="overflow-hidden flex-1 relative">
              <div className="flex items-center gap-8 text-xs text-neutral-700 font-medium whitespace-nowrap animate-marquee">
                <span>Mumbai &rarr; Delhi Expressway (1,420 km) • 98.2% On-Time</span>
                <span>Pune &rarr; Ahmedabad Corridor (660 km) • Verified Backhaul Matched</span>
                <span>Bengaluru &rarr; Chennai Highway (340 km) • Daily FTL Dispatch</span>
                <span>Bhiwandi Godown &rarr; Nagpur Hub (810 km) • Direct Digital LR</span>
                <span>Delhi &rarr; Jaipur Express (280 km) • Real-time GPS Milestone</span>
                <span>Mumbai &rarr; Delhi Expressway (1,420 km) • 98.2% On-Time</span>
                <span>Pune &rarr; Ahmedabad Corridor (660 km) • Verified Backhaul Matched</span>
                <span>Bengaluru &rarr; Chennai Highway (340 km) • Daily FTL Dispatch</span>
                <span>Bhiwandi Godown &rarr; Nagpur Hub (810 km) • Direct Digital LR</span>
                <span>Delhi &rarr; Jaipur Express (280 km) • Real-time GPS Milestone</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Dual-Action Hub: Tracking & Quoting Widget */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
          {/* Top Switcher Tabs */}
          <div className="grid grid-cols-2 bg-neutral-100 border-b border-neutral-200">
            <button
              onClick={() => setActiveWidget('track')}
              className={`py-4 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${activeWidget === 'track'
                ? 'bg-white text-neutral-900 border-b-2 border-[#B08D00] shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
                }`}
            >
              <Search size={16} className={activeWidget === 'track' ? 'text-[#B08D00]' : 'text-neutral-500'} />
              <span>Track Consignment (LR #)</span>
            </button>
            <button
              onClick={() => setActiveWidget('quote')}
              className={`py-4 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${activeWidget === 'quote'
                ? 'bg-white text-neutral-900 border-b-2 border-[#B08D00] shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
                }`}
            >
              <Calculator size={16} className={activeWidget === 'quote' ? 'text-[#B08D00]' : 'text-neutral-500'} />
              <span>Freight Tariff Calculator</span>
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {activeWidget === 'track' ? (
                <motion.div
                  key="track"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder="Enter Lorry Receipt (LR) # or e-Way Bill number"
                        className="w-full pl-4 pr-10 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:border-neutral-900 focus:bg-white outline-none text-sm text-neutral-900 font-semibold"
                        required
                      />
                      <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-6 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white text-sm font-semibold transition-all shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      Track Shipment
                    </button>
                  </form>

                  {/* Sample Query Suggestions */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-neutral-500">
                    <span>Try sample consignments:</span>
                    {sampleCodes.map(code => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setTrackingId(code)}
                        className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-mono font-medium transition-colors cursor-pointer"
                      >
                        {code}
                      </button>
                    ))}
                  </div>

                  {/* Tracking Result Card */}
                  {trackingResult && (
                    <div className="p-4 sm:p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-2">
                        <div>
                          <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                            Consignment Lorry Receipt
                          </div>
                          <div className="text-lg sm:text-xl font-black text-neutral-900 font-mono mt-0.5">
                            {trackingResult.id}
                          </div>
                        </div>
                        <div className="sm:text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-[#B08D00] border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D00] animate-pulse" />
                            {trackingResult.status}
                          </span>
                        </div>
                      </div>

                      {/* Route Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 py-2">
                        <div>
                          <div className="text-[11px] text-neutral-400 font-bold uppercase">Origin Hub</div>
                          <div className="text-sm font-bold text-neutral-800">{trackingResult.origin}</div>
                        </div>
                        <div className="sm:text-center">
                          <div className="text-[11px] text-neutral-400 font-bold uppercase">Carrier Vehicle</div>
                          <div className="text-sm font-bold text-neutral-800">{trackingResult.carrier}</div>
                        </div>
                        <div className="sm:text-right">
                          <div className="text-[11px] text-neutral-400 font-bold uppercase">Destination Terminal</div>
                          <div className="text-sm font-bold text-neutral-800">{trackingResult.destination}</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#B08D00] h-full rounded-full transition-all duration-500"
                            style={{ width: `${trackingResult.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-neutral-500 font-semibold mt-1.5">
                          <span>Loaded & Dispatched</span>
                          <span>Highway Transit NH-48 ({trackingResult.progress}%)</span>
                          <span>Destination Delivery</span>
                        </div>
                      </div>

                      {/* Checkpoint Milestones */}
                      <div className="space-y-3">
                        {trackingResult.checkpoints.map((cp, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {cp.done ? (
                                <CheckCircle2 size={15} className="text-emerald-600" />
                              ) : (
                                <Clock size={15} className="text-neutral-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-neutral-900">{cp.loc}</span>
                                <span className="text-[11px] font-mono text-neutral-500">{cp.time}</span>
                              </div>
                              <p className="text-xs text-neutral-600 mt-0.5">{cp.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="quote"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <form onSubmit={handleQuoteCalculate} className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">From City</label>
                      <input
                        type="text"
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">To City</label>
                      <input
                        type="text"
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Truck Vehicle Type</label>
                      <select
                        value={truckType}
                        onChange={(e) => setTruckType(e.target.value)}
                        className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm font-semibold text-neutral-900 focus:bg-white focus:border-neutral-900 outline-none cursor-pointer"
                      >
                        <option value="16 MT Taurus">16 MT Taurus (10 Wheeler)</option>
                        <option value="25 MT Multi-Axle">25 MT Multi-Axle (12 Wheeler)</option>
                        <option value="32 FT Container">32 FT Multi-Axle Container</option>
                      </select>
                    </div>

                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer h-[42px]"
                      >
                        Estimate Rate
                      </button>
                    </div>
                  </form>

                  {/* Rate Result Card */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-neutral-500 font-semibold">
                        Estimated Tariff for {fromCity} &rarr; {toCity} ({truckType})
                      </div>
                      <div className="text-2xl font-black text-neutral-900 mt-0.5">
                        {quoteResult.rate}
                      </div>
                      <div className="text-xs text-[#B08D00] font-semibold mt-1">
                        {quoteResult.saving}
                      </div>
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="px-5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold"
                    >
                      Post This Load Direct
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

