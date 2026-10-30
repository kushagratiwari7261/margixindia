import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import logo from '../../assets/logo.png';
import { supabase } from '../../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRIES = [
  { code: '+91', name: 'IN' },
  { code: '+1', name: 'US' },
  { code: '+44', name: 'UK' },
  { code: '+971', name: 'UAE' },
  { code: '+966', name: 'SA' },
  { code: '+65', name: 'SG' },
  { code: '+61', name: 'AU' },
  { code: '+49', name: 'DE' },
  { code: '+33', name: 'FR' },
];

const BUSINESS_ROLES = [
  'Manufacturer (Steel, Auto Parts, Food, Machinery)',
  'Distributor & Wholesaler (FMCG, Building Materials)',
  'Retailer (Garment, Hardware, Storefront)',
  'Transport Operator / Fleet Owner (FTL / PTL)',
  '3PL Logistics Partner'
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].code);
  const [businessRole, setBusinessRole] = useState(BUSINESS_ROLES[0]);
  const [suiteInterest, setSuiteInterest] = useState('Both Business Suite & Logistics');
  const [step, setStep] = useState<'form' | 'sending' | 'success' | 'error'>('form');

  const isValid = phone.trim().length >= 10 && email.trim().includes('@') && name.trim().length >= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStep('sending');

    try {
      const formattedName = `${name.trim()} [${businessRole}] (Interest: ${suiteInterest})`;
      const { error } = await supabase
        .from('margixindia_contacts')
        .insert([
          { 
            name: formattedName, 
            email: email.trim(), 
            phone: `${selectedCountry} ${phone.trim()}`
          }
        ]);

      if (error) throw error;
      setStep('success');
    } catch (err) {
      console.error('Error saving contact:', err);
      setStep('error');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setPhone('');
      setEmail('');
      setName('');
      setSelectedCountry(COUNTRIES[0].code);
      setBusinessRole(BUSINESS_ROLES[0]);
      setSuiteInterest('Both Business Suite & Logistics');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Stark dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4 overflow-y-auto"
          >
            <div className="relative bg-white shadow-2xl w-full max-w-lg overflow-hidden border border-neutral-200 rounded-3xl my-8">
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-colors z-20 rounded-full hover:bg-neutral-100 cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={20} strokeWidth={2} />
              </button>

              {/* ═══════════ FORM STEP ═══════════ */}
              {step === 'form' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  <div className="px-8 pt-8 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2 mb-3">
                      <img src={logo} alt="Margix" className="h-6 w-auto object-contain" />
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-margix-yellow/20 text-neutral-900 border border-margix-yellow/40">
                        PILOT ONBOARDING
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                      Join the Closed Pilot Program
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      By Margix Pvt Ltd. Get early access to the 15-app Margix core, free migration from Tally/Excel, and dedicated onboarding support.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4 bg-neutral-50/50">
                    
                    {/* Name */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Full Name & Company
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
                        placeholder="e.g. Ramesh Shah, Apex Steel Works"
                        required
                      />
                    </div>

                    {/* Business Role */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Your Industry / Role
                      </label>
                      <select
                        value={businessRole}
                        onChange={(e) => setBusinessRole(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none transition-colors text-xs sm:text-sm text-neutral-900"
                      >
                        {BUSINESS_ROLES.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    {/* Suite Interest */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Primary Interest
                      </label>
                      <select
                        value={suiteInterest}
                        onChange={(e) => setSuiteInterest(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none transition-colors text-xs sm:text-sm text-neutral-900"
                      >
                        <option value="Both Business Suite & Logistics">Both Business Suite + Logistics (Unified Core)</option>
                        <option value="Business Suite Only (Replaces Tally)">Business Suite Only (Billing, Stock, Accounts/GST)</option>
                        <option value="Logistics Platform Only">Logistics Platform Only (Marketplace, FTL/PTL, Driver App)</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Phone Number (Mobile OTP Ready)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-24 px-2 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none text-xs text-neutral-900"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
                          placeholder="98765 43210"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isValid
                            ? 'bg-margix-yellow text-margix-black hover:bg-yellow-400 shadow-md'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        <span>Apply for Pilot Access</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-500 text-center leading-tight">
                      Your data is secure and hosted in AWS Mumbai. No spam guarantee.
                    </p>
                  </form>
                </motion.div>
              )}

              {/* ═══════════ SENDING STEP ═══════════ */}
              {step === 'sending' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-28 px-10"
                >
                  <Loader2 size={36} className="text-margix-yellow animate-spin mb-4" strokeWidth={2.5} />
                  <p className="text-sm font-bold text-neutral-700">
                    Submitting your pilot application...
                  </p>
                </motion.div>
              )}

              {/* ═══════════ SUCCESS STEP ═══════════ */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 px-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-neutral-900 mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
                    Thank you, {name}. The Margix Pvt Ltd team will review your application and contact you on <span className="font-semibold text-neutral-900">{selectedCountry} {phone}</span> with your pilot sandbox access.
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-neutral-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </motion.div>
              )}

              {/* ═══════════ ERROR STEP ═══════════ */}
              {step === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 px-8 text-center"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Notice
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mb-6">
                    We recorded your request, or you can write directly to <a href="mailto:contact@margixindia.com" className="text-amber-700 font-bold underline">contact@margixindia.com</a>.
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-neutral-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
