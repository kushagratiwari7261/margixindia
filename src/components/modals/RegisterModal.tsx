import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import logo from '../../assets/logo.png';
import { supabase } from '../../lib/supabase';

interface RegisterModalProps {
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
  'Manufacturer (Steel, Auto, Food, Chemicals)',
  'Distributor / Wholesaler (FMCG, Hardware)',
  'Retailer (Garment, Hardware, General)',
  'Transport Operator / Fleet Owner (FTL / PTL)',
  '3PL Partner'
];

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].code);
  const [businessRole, setBusinessRole] = useState(BUSINESS_ROLES[0]);
  const [step, setStep] = useState<'form' | 'sending' | 'success' | 'error'>('form');

  const isValid = phone.trim().length >= 10 && email.trim().includes('@') && name.trim().length >= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStep('sending');

    try {
      const formattedName = `${name.trim()} [${businessRole}] (Pilot Application)`;
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
      localStorage.setItem('isRegistered', 'true');
      setStep('success');
    } catch (err) {
      console.error('Error saving contact:', err);
      setStep('error');
    }
  };

  const handleClose = () => {
    sessionStorage.setItem('hasDismissedRegister', 'true');
    onClose();
    setTimeout(() => {
      setStep('form');
      setPhone('');
      setEmail('');
      setName('');
      setSelectedCountry(COUNTRIES[0].code);
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
                aria-label="Dismiss Modal"
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
                        EARLY ADOPTER ACCESS
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                      Experience Margix First
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Join the select group of 5–10 Indian businesses trying our 15-app integrated suite. Replace Tally and streamline truck freight with zero retyping.
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
                        placeholder="e.g. Sunil Kumar, Prime Logistics"
                        required
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Business Type
                      </label>
                      <select
                        value={businessRole}
                        onChange={(e) => setBusinessRole(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-neutral-300 rounded-xl focus:border-black outline-none text-xs sm:text-sm text-neutral-900"
                      >
                        {BUSINESS_ROLES.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
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
                        placeholder="sunil@primelogistics.in"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5 block">
                        Phone Number
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

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isValid
                            ? 'bg-neutral-950 text-white hover:bg-black shadow-md'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        <span>Reserve Early Access</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-500 text-center leading-tight">
                      Margix Pvt Ltd &bull; Pilot begins January 2027
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
                  <Loader2 size={36} className="text-black animate-spin mb-4" strokeWidth={2.5} />
                  <p className="text-sm font-bold text-neutral-700">
                    Reserving your spot...
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
                    Spot Reserved!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
                    Thank you, {name}. We have reserved your early access for Margix. You will receive onboarding documentation shortly.
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
                    Application Logged
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mb-6">
                    We will be in touch with you directly, or contact us at <a href="mailto:contact@margixindia.com" className="text-amber-700 font-bold underline">contact@margixindia.com</a>.
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
