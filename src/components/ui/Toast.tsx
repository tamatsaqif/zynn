"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "../icons/PlatformIcons";

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A191E]/90 text-white text-xs font-medium backdrop-blur-md border border-gold-400/30 shadow-gold-glow"
        >
          <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center">
            <CheckIcon className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
