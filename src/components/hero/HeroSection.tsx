export default function HeroSection() {
  return (
    <section id="platform" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center pt-24 pb-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/29726641/12780046_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-margix-black/70 z-10"></div>
      
      {/* Bottom fade to seamlessly blend into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-margix-black to-transparent z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Margix Logo */}
        <div className="mb-8 flex flex-col items-center">
            <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-12 md:w-[100px] md:h-[80px] mb-4">
              {/* Speed lines */}
              <rect x="10" y="40" width="20" height="6" rx="3" fill="#FFC107" />
              <rect x="20" y="55" width="15" height="6" rx="3" fill="#FFC107" />
              <rect x="5" y="70" width="25" height="6" rx="3" fill="#FFC107" />
              
              {/* M Shape */}
              <path d="M35 85 L55 20 L75 55" stroke="#FFC107" strokeWidth="18" strokeLinejoin="miter" />
              <path d="M60 70 L100 20" stroke="#FFC107" strokeWidth="18" />
              
              {/* Arrow Head */}
              <polygon points="85,15 115,5 105,35" fill="#FFC107" />
              
              {/* Dark Overlap */}
              <path d="M70 50 L95 85 L75 85 L60 62 Z" fill="#222" />
            </svg>
            <div className="flex items-baseline leading-none mb-2">
              <span className="text-3xl md:text-6xl font-bold text-white tracking-tight">Margix</span>
              <span className="text-3xl md:text-6xl font-bold text-margix-yellow tracking-tight">India</span>
            </div>
            <div className="flex items-center justify-between text-[10px] md:text-sm tracking-[0.3em] text-gray-300 font-bold w-full">
              <span>MOVE</span>
              <span className="text-margix-yellow scale-150 leading-none">•</span>
              <span>CONNECT</span>
              <span className="text-margix-yellow scale-150 leading-none">•</span>
              <span>GROW</span>
            </div>
        </div>

        {/* Quotation similar to BlackBuck */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 lg:mb-6">
          India’s Intelligent <span className="text-margix-yellow">Transportation Platform</span>
        </h1>

        <p className="text-sm md:text-2xl text-gray-300 mb-8 lg:mb-10 max-w-4xl">
          One platform to manage fleets, shipments, transporters, and logistics operations. Optimize costs, reduce empty miles, gain real-time visibility, and access verified transportation capacity
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a href="#platform" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-margix-yellow text-margix-black rounded-lg font-bold text-base md:text-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 cursor-pointer">
            Optimize a Shipment
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-base md:text-lg hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
