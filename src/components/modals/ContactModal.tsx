import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4 overflow-y-auto"
          >
            <div className="relative bg-white shadow-xl w-full max-w-lg overflow-hidden border border-neutral-200 rounded-2xl my-8">

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors z-20 rounded-lg hover:bg-neutral-100 cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Form Step */}
              {step === 'form' && (
                <div className="flex flex-col h-full">
                  <div className="px-6 pt-6 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={logo} alt="Margix" className="h-6 w-auto object-contain" />
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                        APPLY & SCHEDULE DEMO
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                      Apply for Access & Product Demo
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      Join pilot operations in New Delhi & Mumbai or see a live walkthrough of the Margix business suite and freight network.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3.5 bg-neutral-50/40">

                    {/* Name */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 block">
                        Full Name & Company
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
                        placeholder="e.g. Ramesh Shah, Apex Steel Works"
                        required
                      />
                    </div>

                    {/* Business Role */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 block">
                        Your Industry / Business Type
                      </label>
                      <select
                        value={businessRole}
                        onChange={(e) => setBusinessRole(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none transition-colors text-xs sm:text-sm text-neutral-900"
                      >
                        {BUSINESS_ROLES.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    {/* Suite Interest */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 block">
                        Primary Interest
                      </label>
                      <select
                        value={suiteInterest}
                        onChange={(e) => setSuiteInterest(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none transition-colors text-xs sm:text-sm text-neutral-900"
                      >
                        <option value="Both Business Suite & Logistics">Both Software Products + Logistics Services</option>
                        <option value="Business Suite Only (Replaces Tally)">Software Products Only (Billing, Stock, Accounts/GST)</option>
                        <option value="Logistics Platform Only">Logistics Services Only (Marketplace, FTL/PTL, Driver App)</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 block">
                        Phone Number (Mobile OTP Ready)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-24 px-2 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-xs text-neutral-900"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:border-neutral-900 outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400"
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
                        className={`w-full py-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${isValid
                          ? 'bg-[#0f172a] hover:bg-[#1e293b] text-white active:translate-y-px shadow-sm'
                          : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                          }`}
                      >
                        <span>Submit Application & Schedule Demo</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-500 text-center">
                      Operations in New Delhi & Mumbai &bull; 100% Data Residency in AWS Mumbai &bull; No spam policy.
                    </p>
                  </form>
                </div>
              )}

              {/* Sending Step with Animated Logo */}
              {step === 'sending' && (
                    <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                      <div className="relative flex items-center justify-center mb-6">
                        {/* Pulsing Aura */}
                        <motion.div
                          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-24 h-24 rounded-full bg-amber-400/25 blur-md pointer-events-none"
                        />
                        {/* Spinning Border Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute w-20 h-20 rounded-full border-2 border-transparent border-t-[#D4A800] border-r-amber-300"
                        />
                        {/* Animated Margix Logo */}
                        <motion.div
                          animate={{ scale: [0.95, 1.05, 0.95] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-neutral-200/80 shadow-md p-2.5 flex items-center justify-center"
                        >
                          <img src={logo} alt="Margix" className="h-full w-auto object-contain" />
                        </motion.div>
                      </div>
                      <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                        Submitting Application...
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        Connecting to Margix secure servers
                      </p>
                    </div>
              )}

                    {/* Success Step with Animated Margix Logo */}
                    {step === 'success' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-12 px-6 sm:px-8 text-center"
                          >
                            {/* Hero Animated Logo with Pulse Rings & Success Badge */}
                            <div className="relative flex items-center justify-center mb-6">
                              {/* Radiating Expanding Ripple 1 */}
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0.8 }}
                                animate={{ scale: [0.8, 1.45, 1.7], opacity: [0.8, 0.35, 0] }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute w-28 h-28 rounded-full bg-[#F9CA24]/30 pointer-events-none"
                              />
                              {/* Radiating Expanding Ripple 2 */}
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0.8 }}
                                animate={{ scale: [0.8, 1.25, 1.5], opacity: [0.8, 0.25, 0] }}
                                transition={{ duration: 2.2, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
                                className="absolute w-28 h-28 rounded-full bg-emerald-400/20 pointer-events-none"
                              />

                              {/* Logo Card with Spring Entrance */}
                              <motion.div
                                initial={{ scale: 0, rotate: -12, opacity: 0 }}
                                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 280,
                                  damping: 18,
                                  delay: 0.1
                                }}
                                className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-amber-300 shadow-xl p-3 flex items-center justify-center"
                              >
                                <img
                                  src={logo}
                                  alt="Margix Logo"
                                  className="h-full w-auto object-contain filter drop-shadow-xs"
                                />
                              </motion.div>

                              {/* Checkmark Badge on Corner */}
                              <motion.div
                                initial={{ scale: 0, opacity: 0, y: 6 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 20,
                                  delay: 0.35
                                }}
                                className="absolute -bottom-1 -right-1 z-20 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md border-2 border-white"
                              >
                                <CheckCircle2 size={16} strokeWidth={3} />
                              </motion.div>
                            </div>

                            {/* Status Pill */}
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.25 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3"
                            >
                              <Sparkles size={12} className="text-emerald-600" />
                              <span>Application Confirmed</span>
                            </motion.div>

                              <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="text-2xl font-black text-neutral-900 tracking-tight mb-2"
                            >
                              You're On The List!
                            </motion.h3>

                            <motion.p
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.35 }}
                              className="text-xs sm:text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed"
                            >
                              Thank you, <span className="font-bold text-neutral-900">{name}</span>. Your application for Margix has been received. Our operations team in <span className="font-semibold text-neutral-900">New Delhi & Mumbai</span> will reach out to you at <span className="font-mono font-bold text-neutral-900">{selectedCountry} {phone}</span> to schedule your live walkthrough.
                            </motion.p>

                            <motion.button
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              onClick={handleClose}
                              className="px-8 py-3 bg-[#0f172a] hover:bg-[#1e293b] active:scale-98 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer"
                            >
                        Back to Margix
                      </motion.button>
                </motion.div>
              )}

                  {/* Error Step */}
                  {step === 'error' && (
                    <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        Request Recorded
                      </h3>
                      <p className="text-xs text-neutral-600 max-w-sm mb-5">
                        Your details were saved. You can also contact us directly at <a href="mailto:contact@margixindia.com" className="text-[#B08D00] font-semibold underline">contact@margixindia.com</a>.
                      </p>

                      <button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  )}

                </div>
          </motion.div>
        </>
      )}
    </AnimatePresence >
  );
}
