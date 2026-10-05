"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-12 mb-8 text-center"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-300/20 bg-white/40 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
        <span className="text-[11px] font-medium text-[#8A8596] tracking-wider uppercase">
          Zynn © {currentYear}
        </span>
      </div>
    </motion.footer>
  );
}
