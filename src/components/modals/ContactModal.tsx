
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import logo from '../../assets/logo.png';

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

import { supabase } from '../../lib/supabase';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].code);
  const [step, setStep] = useState<'form' | 'sending' | 'success' | 'error'>('form');

  const isValid = phone.trim().length >= 10 && email.trim().includes('@') && name.trim().length >= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStep('sending');

    try {
      const { error } = await supabase
        .from('margixindia_contacts')
        .insert([
          { 
            name, 
            email, 
            phone: `${selectedCountry} ${phone}`
          }
        ]);

      if (error) throw error;
      setStep('success');
    } catch (err) {
      console.error('Error saving contact:', err);
      // In a real app we might show an error message, but for now we'll just log it
      // and maybe show a generic failure if needed. For now, let's keep it simple.
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
            className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
          >
            <div className="relative bg-white shadow-2xl w-full max-w-lg overflow-hidden border border-neutral-200">
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors z-20"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* ═══════════ FORM STEP ═══════════ */}
              {step === 'form' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  <div className="px-10 pt-10 pb-6 border-b border-neutral-100">
                    <img src={logo} alt="Margix" className="h-6 w-auto object-contain mb-6 grayscale opacity-80" />
                    <h3 className="text-2xl font-normal text-neutral-900 tracking-tight mb-2">
                      Contact Sales
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Please provide your details below. A representative will contact you shortly to discuss enterprise logistics solutions.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-10 py-8 space-y-6 bg-neutral-50/50">
                    
                    {/* Name */}
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-600 uppercase tracking-widest mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-0 py-2 bg-transparent border-b border-neutral-300 focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400 rounded-none"
                        placeholder="Jane Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-600 uppercase tracking-widest mb-2 block">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-0 py-2 bg-transparent border-b border-neutral-300 focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400 rounded-none"
                        placeholder="jane@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-600 uppercase tracking-widest mb-2 block">
                        Phone Number
                      </label>
                      <div className="flex gap-4">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-24 px-0 py-2 bg-transparent border-b border-neutral-300 focus:border-black outline-none transition-colors text-sm text-neutral-900 appearance-none rounded-none cursor-pointer"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 px-0 py-2 bg-transparent border-b border-neutral-300 focus:border-black outline-none transition-colors text-sm text-neutral-900 placeholder:text-neutral-400 rounded-none"
                          placeholder="98765 43210"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${
                          isValid
                            ? 'bg-black text-white hover:bg-neutral-800'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        Submit Request
                        <ArrowRight size={16} className={isValid ? 'opacity-100' : 'opacity-0'} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* ═══════════ SENDING STEP ═══════════ */}
              {step === 'sending' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-32 px-10"
                >
                  <Loader2 size={32} className="text-black animate-spin mb-6" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-neutral-600 tracking-wide">
                    Processing your request...
                  </p>
                </motion.div>
              )}

              {/* ═══════════ SUCCESS STEP ═══════════ */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 px-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                    className="relative mb-8"
                  >
                    {/* The Logo */}
                    <img
                      src={logo}
                      alt="Margix"
                      className="h-16 w-16 object-contain"
                    />
                    
                    {/* Professional Checkmark Overlay */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, delay: 0.4 }}
                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center ring-2 ring-white"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-normal text-neutral-900 mb-2"
                  >
                    Request Received
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-neutral-500 max-w-sm mb-10"
                  >
                    Thank you. A member of our sales team will review your details and contact you shortly.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleClose}
                    className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Close Window
                  </motion.button>
                </motion.div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
