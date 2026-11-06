import { Check, ArrowRight } from 'lucide-react';

interface AudienceSectionProps {
  onOpenContact?: () => void;
}

const vendorsList = [
  {
    title: "Industry-Specific Master Fields",
    desc: "Grade & weight for steel, size & color for garments, serial numbers for machinery, batch & expiry for food and chemical products."
  },
  {
    title: "100% Replaces Tally & Spreadsheets",
    desc: "Complete double-entry accounting, direct e-way bills & e-invoices, and auto-compiled GSTR-1 and GSTR-3B tax data."
  },
  {
    title: "1-Click Freight Dispatch from Invoices",
    desc: "Post loads directly from approved sales orders to verified truckers without middleman phone calls."
  },
  {
    title: "Real-Time Tracking & Digital Proof of Delivery",
    desc: "Monitor consignments live, receive geotagged photo proof of delivery, and watch the freight bill auto-post to your books."
  }
];

const fleetList = [
  {
    title: "Zero Empty Miles (Return Backhaul Match)",
    desc: "Collaborative partner pooling and return-trip matching ensure your trucks minimize empty deadhead return miles."
  },
  {
    title: "Full Truckload (FTL) & Digital LR",
    desc: "Generate sequential digital Lorry Receipts with 1-click e-way bill linking and driver advance expense tracking."
  },
  {
    title: "Part-Truckload (PTL) Branch Godowns",
    desc: "Manage hub parcel bookings, cross-dock loading, local delivery runs, and Cash on Delivery (COD) collections."
  },
  {
    title: "Offline Driver Mobile App",
    desc: "Turn-by-turn checkpoints, photo proof of delivery (POD), and digital signature — operates 100% without cellular internet."
  }
];

export default function AudienceSection({ onOpenContact }: AudienceSectionProps) {
  return (
        <section id="who-its-for" className="py-20 lg:py-24 bg-neutral-50/70 text-neutral-900 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="inline-block px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
                    Target Audiences
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
                    Engineered for Both Sides of Indian Commerce
                  </h2>
                    <p className="text-neutral-600 text-base leading-relaxed">
                      Whether you manufacture goods or transport them by truck, Margix provides tailored workflows built to eliminate administrative friction and maximize margins.
                    </p>
                </div>

                  {/* 2 Symmetrical Light Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                            {/* Card 1: For Shippers & Traders */}
                            <div className="rounded-2xl bg-white border border-neutral-200 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-neutral-100">
                                  <div className="w-14 h-14 rounded-xl border border-neutral-200 overflow-hidden shrink-0 bg-neutral-100">
                                    <img
                                      src="/images/audience_vendor.jpg"
                                      alt="Shippers and Manufacturers"
                                      loading="lazy"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                    <div>
                                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7D44] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 block w-max mb-1">
                                        Software Products
                                      </span>
                                      <h3 className="text-xl font-bold text-neutral-900">
                                        For Shippers, Manufacturers & Traders
                                      </h3>
                                    </div>
                                  </div>

                                    <div className="space-y-4">
                                      {vendorsList.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                          <div className="mt-1 w-4 h-4 rounded-full bg-orange-100 text-[#FF7D44] flex items-center justify-center shrink-0">
                                            <Check size={11} strokeWidth={3} />
                                          </div>
                                          <div>
                                            <h4 className="text-sm font-bold text-neutral-900 leading-snug">{item.title}</h4>
                                            <p className="text-neutral-600 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="pt-8 border-t border-neutral-100 mt-8">
                                    <button
                                      onClick={onOpenContact}
                                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white font-semibold text-xs transition-all border border-neutral-900 shadow-sm cursor-pointer"
                                    >
                                      <span>Demo for Shippers & Traders</span>
                                      <ArrowRight size={14} />
                                    </button>
                                  </div>
                              </div>

                                    {/* Card 2: For Fleet Owners & Transporters */}
                                    <div className="rounded-2xl bg-white border border-neutral-200 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                                      <div>
                                        <div className="flex items-center gap-4 mb-6 pb-5 border-b border-neutral-100">
                                          <div className="w-14 h-14 rounded-xl border border-neutral-200 overflow-hidden shrink-0 bg-neutral-100">
                                            <img
                                              src="/images/audience_fleet.jpg"
                                              alt="Fleet Owners and Transporters"
                                              loading="lazy"
                                              className="w-full h-full object-cover"
                                            />
                                          </div>
                                            <div>
                                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7D44] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 block w-max mb-1">
                                                Logistics Services
                                              </span>
                                              <h3 className="text-xl font-bold text-neutral-900">
                                                For Fleet Owners & Transporters
                                              </h3>
                                            </div>
                                          </div>

                                            <div className="space-y-4">
                                              {fleetList.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                  <div className="mt-1 w-4 h-4 rounded-full bg-orange-100 text-[#FF7D44] flex items-center justify-center shrink-0">
                                                    <Check size={11} strokeWidth={3} />
                                                  </div>
                                                  <div>
                                                    <h4 className="text-sm font-bold text-neutral-900 leading-snug">{item.title}</h4>
                                                    <p className="text-neutral-600 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>

                                        <div className="pt-8 border-t border-neutral-100 mt-8">
                                          <button
                                            onClick={onOpenContact}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] active:translate-y-px text-white font-semibold text-xs transition-all border border-neutral-900 shadow-sm cursor-pointer"
                                          >
                                            <span>Onboard Your Fleet</span>
                                            <ArrowRight size={14} />
                                          </button>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </section>
                                );
}
