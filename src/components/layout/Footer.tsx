import { ShieldCheck, MapPin, Mail, Home } from 'lucide-react';
import logo from '../../assets/logo.png';

interface FooterProps {
  onNavigate?: (view: 'portal' | 'software' | 'logistics') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 pt-16 pb-12 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => onNavigate && onNavigate('portal')}
                className="bg-white p-1 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                title="Return to Home Portal"
              >
                <img src={logo} alt="Margix Logo" className="h-8 w-auto object-contain" />
              </button>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-wider text-white">MARGIX</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-[#fdc101] border border-amber-400/30">
                    PVT LTD
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-neutral-400 font-bold uppercase mt-0.5">
                  Commerce Software & Road Freight
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Margix delivers commercial software to run business operations (billing, stock, purchases, accounts, GST) and road logistics services to dispatch freight by truck across India.
            </p>

            {onNavigate && (
              <button
                onClick={() => onNavigate('portal')}
                className="mb-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold border border-neutral-700 transition-colors cursor-pointer"
              >
                <Home size={13} className="text-[#fdc101]" />
                <span>Return to Split Home Portal</span>
              </button>
            )}

            <div className="p-3.5 rounded-lg bg-neutral-800/80 border border-neutral-700/80 space-y-2 text-xs">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>Margix Pvt Ltd</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">Active Operations</span>
                </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <MapPin size={13} className="text-[#fdc101] shrink-0" />
                    <span>Operations: New Delhi &bull; Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                    <span>DPDP Act Compliant &bull; AWS Mumbai Cloud Hosted</span>
                  </div>
                </div>
              </div>

              {/* Business Suite Apps */}
              <div>
                <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fdc101]"></span>
                  Software Products (9)
                </h4>
                <ul className="space-y-2 text-xs">
                  {onNavigate && (
                    <li>
                      <button
                        onClick={() => onNavigate('software')}
                        className="text-[#fdc101] hover:underline font-bold transition-colors cursor-pointer"
                      >
                        Open Software Page &rarr;
                      </button>
                    </li>
                  )}
                  <li><a href="#software-products" className="hover:text-white transition-colors">Sales & Billing</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Purchase Management</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Multi-Godown Inventory</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors font-medium text-neutral-300">Accounts & GST (Replaces Tally)</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Parties Master (GSTIN Check)</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Owner Dashboard & Reports</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Team Administration & Roles</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">Ship by Truck Bridge</a></li>
                  <li><a href="#software-products" className="hover:text-white transition-colors">WhatsApp Catalogue</a></li>
                </ul>
              </div>

              {/* Logistics Suite Apps */}
              <div>
                <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fdc101]"></span>
                  Logistics Services (6)
                </h4>
                <ul className="space-y-2 text-xs">
                  {onNavigate && (
                    <li>
                      <button
                        onClick={() => onNavigate('logistics')}
                        className="text-[#fdc101] hover:underline font-bold transition-colors cursor-pointer"
                      >
                        Open Logistics Page &rarr;
                      </button>
                    </li>
                  )}
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">Load Marketplace</a></li>
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">Full Truckload Dispatch (FTL)</a></li>
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">Branch & Godown Hubs (PTL)</a></li>
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">Fleet & Driver Compliance</a></li>
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">3PL Capacity Pool</a></li>
                  <li><a href="#logistics-services" className="hover:text-white transition-colors">Offline Driver Mobile App</a></li>
                  <li><a href="#unified-flow" className="hover:text-white transition-colors text-neutral-400">Zero-Retyping Order Flow</a></li>
                </ul>
              </div>

              {/* Corporate & Connect */}
              <div>
                <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                  Corporate
                </h4>
                <ul className="space-y-2 text-xs mb-6">
                  <li><a href="#industries" className="hover:text-white transition-colors">Industries Powered</a></li>
                  <li><a href="#who-its-for" className="hover:text-white transition-colors">For Shippers & Traders</a></li>
                  <li><a href="#who-its-for" className="hover:text-white transition-colors">For Transporters & Fleet Owners</a></li>
                  <li><a href="#roadmap" className="hover:text-white transition-colors">Product Roadmap</a></li>
                  <li><a href="#principles" className="hover:text-white transition-colors">Architecture & Principles</a></li>
                </ul>

                    <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">Operations & Contact</h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <MapPin size={12} className="text-[#fdc101] shrink-0" />
                        <span>New Delhi &bull; Mumbai</span>
                      </div>
                      <a href="mailto:contact@margixindia.com" className="hover:text-white flex items-center gap-1.5 text-neutral-300 transition-colors">
                        <Mail size={12} className="text-[#fdc101] shrink-0" />
                        contact@margixindia.com
                      </a>
                    </div>
                </div>

              </div>

              {/* Bottom strip */}
              <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                <p>
                  &copy; {new Date().getFullYear()} Margix Pvt Ltd. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-5">
                  <span className="text-neutral-500">Built for Indian Commerce</span>
                  <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-neutral-300 transition-colors">Data Security</a>
                </div>
              </div>

            </div>
          </footer>
          );
  }
