import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
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
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container with Nice Curved Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4 sm:p-6 overflow-y-auto"
          >
            <div className="relative bg-white shadow-2xl w-full max-w-lg overflow-hidden border border-neutral-200/90 rounded-[28px] my-6">

              {/* Close Button with Curved Circle */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 transition-colors z-20 rounded-full hover:bg-neutral-100 cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={19} />
              </button>

              {/* Form Step */}
              {step === 'form' && (
                <div className="flex flex-col h-full">
                  {/* Header Box */}
                  <div className="px-7 pt-7 pb-5 border-b border-neutral-100 bg-gradient-to-b from-neutral-50/50 to-white">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <img src={logo} alt="Margix" className="h-6 w-auto object-contain" />
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80">
                        EARLY ACCESS
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-neutral-950 tracking-tight">
                      Apply for Access & Demo
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      Onboarding for Indian manufacturers, wholesalers, and transporters. Operations in New Delhi & Mumbai.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4 bg-white">

                    {/* Name Input in Curved Box */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5 block">
                        Full Name & Company
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none transition-all text-sm text-neutral-900 placeholder:text-neutral-400 font-medium"
                        placeholder="e.g. Ramesh Shah, Apex Steel Works"
                        required
                      />
                    </div>

                    {/* Business Role in Curved Box */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5 block">
                        Your Industry / Business Type
                      </label>
                      <select
                        value={businessRole}
                        onChange={(e) => setBusinessRole(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none transition-all text-xs sm:text-sm text-neutral-900 font-medium cursor-pointer"
                      >
                        {BUSINESS_ROLES.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    {/* Suite Interest in Curved Box */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5 block">
                        Primary Interest
                      </label>
                      <select
                        value={suiteInterest}
                        onChange={(e) => setSuiteInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none transition-all text-xs sm:text-sm text-neutral-900 font-medium cursor-pointer"
                      >
                        <option value="Both Business Suite & Logistics">Both Commercial Software + Road Logistics</option>
                        <option value="Business Suite Only (Replaces Tally)">Commercial Software Only (Billing, Stock, Accounts, GST)</option>
                        <option value="Logistics Platform Only">Road Logistics Only (Marketplace, FTL/PTL, Driver App)</option>
                      </select>
                    </div>

                    {/* Email in Curved Box */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5 block">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none transition-all text-sm text-neutral-900 placeholder:text-neutral-400 font-medium"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    {/* Phone in Curved Box */}
                    <div>
                      <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5 block">
                        Phone Number (Mobile OTP Ready)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-28 px-3 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none text-xs sm:text-sm text-neutral-900 font-medium cursor-pointer"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 px-4 py-3 bg-neutral-50/70 hover:bg-neutral-50 focus:bg-white border border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 rounded-2xl outline-none transition-all text-sm text-neutral-900 placeholder:text-neutral-400 font-medium"
                          placeholder="98765 43210"
                          required
                        />
                      </div>
                    </div>

                    {/* Animated Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={!isValid}
                        whileHover={isValid ? { scale: 1.015, y: -1 } : {}}
                        whileTap={isValid ? { scale: 0.985, y: 1 } : {}}
                        transition={{ duration: 0.15 }}
                        className={`w-full py-3.5 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer group shadow-sm ${
                          isValid
                            ? 'bg-neutral-950 hover:bg-black text-white hover:shadow-xl hover:shadow-neutral-950/20 active:translate-y-px border border-neutral-900'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        <span>Submit Application</span>
                        <ArrowRight size={16} className="text-[#F9CA24] group-hover:translate-x-1.5 transition-transform duration-200" />
                      </motion.button>
                    </div>

                    {/* Curved Info Box */}
                    <div className="rounded-2xl p-3 bg-neutral-50 border border-neutral-200/70 text-center">
                      <p className="text-[11px] text-neutral-600 font-medium leading-normal">
                        Operations in New Delhi & Mumbai &bull; 100% Data Residency in India
                      </p>
                    </div>
                  </form>
                </div>
              )}

              {/* Sending Step with Curved Box Logo */}
              {step === 'sending' && (
                <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                  <div className="relative flex items-center justify-center mb-6">
                    <motion.div
                      animate={{ scale: [0.98, 1.02, 0.98] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 shadow-md p-3 flex items-center justify-center"
                    >
                      <img src={logo} alt="Margix" className="h-full w-auto object-contain" />
                    </motion.div>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                    Submitting Application...
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Direct dispatch to Margix operations in New Delhi & Mumbai
                  </p>
                </div>
              )}

              {/* Success Step with Curved Box Logo */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-14 px-7 sm:px-9 text-center"
                >
                  {/* Logo Card in Curved Box with Spring Entrance */}
                  <div className="relative flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -8, opacity: 0 }}
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
                        className="h-full w-auto object-contain"
                      />
                    </motion.div>

                    {/* Checkmark Badge on Corner */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                        delay: 0.3
                      }}
                      className="absolute -bottom-1 -right-1 z-20 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md border-2 border-white"
                    >
                      <CheckCircle2 size={16} strokeWidth={3} />
                    </motion.div>
                  </div>

                  {/* Status Pill in Curved Box */}
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                    Application Confirmed
                  </div>

                  <h3 className="text-2xl font-black text-neutral-900 tracking-tight mb-2">
                    Application Received
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="font-bold text-neutral-900">{name}</span>. Our operations team in <span className="font-semibold text-neutral-900">New Delhi & Mumbai</span> will contact you at <span className="font-mono font-bold text-neutral-900">{selectedCountry} {phone}</span> to schedule your live walkthrough.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleClose}
                    className="px-8 py-3 bg-neutral-950 hover:bg-black text-white text-xs sm:text-sm font-bold rounded-2xl transition-all shadow-md cursor-pointer"
                  >
                    Done
                  </motion.button>
                </motion.div>
              )}

              {/* Error Step */}
              {step === 'error' && (
                <div className="flex flex-col items-center justify-center py-14 px-7 text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Application Recorded
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-sm mb-6 leading-relaxed">
                    Your details were saved. You can also contact our team directly at <a href="mailto:contact@margixindia.com" className="text-[#B08D00] font-semibold underline">contact@margixindia.com</a>.
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-neutral-950 hover:bg-black text-white text-xs sm:text-sm font-bold rounded-2xl transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
