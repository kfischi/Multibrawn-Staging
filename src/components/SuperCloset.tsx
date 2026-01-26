'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Package } from 'lucide-react';

export default function SuperCloset() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* כפתור הפתיחה הצף */}
      <motion.button
        layoutId="closet-trigger"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] z-50 flex items-center justify-center text-black hover:bg-neutral-200 transition-colors"
      >
        <ShoppingBag size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 w-full md:w-[450px] h-full bg-neutral-950 border-l border-neutral-800 z-50 p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
                <h2 className="text-3xl font-bold text-white tracking-tighter">MY VAULT</h2>
                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center h-[60%] text-neutral-600">
                <Package size={64} className="mb-4 opacity-20" />
                <p className="text-lg">Vault Initialized</p>
                <p className="text-sm opacity-50">Collect items to store them here.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
