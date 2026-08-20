

export default function Footer() {
  return (
    <footer className="bg-margix-black pt-20 pb-10 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* New Logo Mark */}
              <svg width="32" height="26" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="40" width="20" height="6" rx="3" fill="#FFC107" />
                <rect x="20" y="55" width="15" height="6" rx="3" fill="#FFC107" />
                <rect x="5" y="70" width="25" height="6" rx="3" fill="#FFC107" />
                <path d="M35 85 L55 20 L75 55" stroke="#FFC107" strokeWidth="18" strokeLinejoin="miter" />
                <path d="M60 70 L100 20" stroke="#FFC107" strokeWidth="18" />
                <polygon points="85,15 115,5 105,35" fill="#FFC107" />
                <path d="M70 50 L95 85 L75 85 L60 62 Z" fill="#222" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-wider text-white">MARGIX</span>
                <span className="text-[9px] tracking-[0.25em] text-gray-500 font-bold">INDIA</span>
              </div>
            </div>
            <p className="max-w-xs text-sm">
              Intelligent logistics optimization platform. Reduce costs, increase efficiency, and eliminate empty miles.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-margix-yellow transition-colors">Load Optimization</a></li>
              <li><a href="#" className="hover:text-margix-yellow transition-colors">Route Intelligence</a></li>
              <li><a href="#" className="hover:text-margix-yellow transition-colors">Backhauling</a></li>
              <li><a href="#" className="hover:text-margix-yellow transition-colors">Fleet Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Margix India. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
