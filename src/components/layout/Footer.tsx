import { ShieldCheck, MapPin, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-12 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-lg">
                <img src={logo} alt="Margix Logo" className="h-9 w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-wider text-white">MARGIX</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-margix-yellow/20 text-margix-yellow border border-margix-yellow/30">
                    PVT LTD
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-neutral-500 font-bold uppercase mt-0.5">
                  Business + Freight
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              One online platform where an Indian business runs its daily work (billing, stock, purchases, accounts, GST) and moves goods by truck, without Tally or disconnected software.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2 text-xs">
              <div className="text-white font-bold">
                Margix Pvt Ltd
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin size={14} className="text-margix-yellow shrink-0" />
                <span>Incorporated in India &bull; AWS Mumbai Hosted</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>DPDP Act Compliant &bull; 100% Data Residency in India</span>
              </div>
            </div>
          </div>
          
          {/* Business Suite Apps */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-margix-yellow"></span>
              Business Suite (9 Apps)
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Sales & Billing</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Purchase Management</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Multi-Godown Inventory</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors font-semibold text-neutral-200">Accounts & GST (Replaces Tally)</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Parties Master (GSTIN Check)</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Owner Dashboard & Reports</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Team Administration & Roles</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">Ship by Truck (Freight Bridge)</a></li>
              <li><a href="#business-suite" className="hover:text-margix-yellow transition-colors">WhatsApp Catalogue (Lite)</a></li>
            </ul>
          </div>

          {/* Logistics Suite Apps */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Logistics Suite (6 Apps)
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">Load Marketplace</a></li>
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">Transport Operations (FTL)</a></li>
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">Branch & Godown (PTL)</a></li>
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">Fleet & Driver Compliance</a></li>
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">3PL Capacity Pool</a></li>
              <li><a href="#logistics" className="hover:text-margix-yellow transition-colors">Offline Driver Mobile App</a></li>
              <li className="pt-2"><a href="#backhauling" className="hover:text-white transition-colors text-neutral-500">Backhaul AI Matching</a></li>
              <li><a href="#unified-flow" className="hover:text-white transition-colors text-neutral-500">7-Step Order Flow</a></li>
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-600"></span>
              Industries & Roadmap
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              <li><a href="#industries" className="hover:text-margix-yellow transition-colors">Manufacturers (Steel, Auto, Food)</a></li>
              <li><a href="#industries" className="hover:text-margix-yellow transition-colors">Distributors & Wholesalers</a></li>
              <li><a href="#industries" className="hover:text-margix-yellow transition-colors">Retailers & Hardware Stores</a></li>
              <li><a href="#industries" className="hover:text-margix-yellow transition-colors">Transport Operators (FTL/PTL)</a></li>
              <li><a href="#future-solutions" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">All Upcoming Solutions &rarr;</a></li>
              <li><a href="#roadmap" className="hover:text-margix-yellow transition-colors">Roadmap: Phase 1, 2 & 3</a></li>
            </ul>

            <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">Connect</h5>
            <div className="space-y-1.5 text-xs">
              <a href="mailto:contact@margixindia.com" className="hover:text-white flex items-center gap-1.5">
                <Mail size={13} className="text-margix-yellow" />
                contact@margixindia.com
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom strip */}
        <div className="border-t border-neutral-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Margix Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <span className="text-neutral-600">Made for India</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security & Audit Model</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
