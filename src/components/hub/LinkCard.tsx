"use client";

import React from "react";
import { motion } from "framer-motion";
import { LinkItem } from "@/types";
import {
  InstagramIcon,
  DiscordIcon,
  TikTokIcon,
  S2HubIcon,
  ArrowUpRightIcon,
} from "../icons/PlatformIcons";

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

export function LinkCard({ item, index }: LinkCardProps) {
  const getIconConfig = () => {
    switch (item.iconType) {
      case "instagram":
        return {
          icon: <InstagramIcon className="w-5 h-5 text-[#E1306C]" />,
          accentGlow: "group-hover:shadow-[0_0_20px_rgba(225,48,108,0.25)]",
          borderAccent: "group-hover:border-[#E1306C]/30",
        };
      case "discord":
        return {
          icon: <DiscordIcon className="w-5 h-5 text-[#5865F2]" />,
          accentGlow: "group-hover:shadow-[0_0_20px_rgba(88,101,242,0.25)]",
          borderAccent: "group-hover:border-[#5865F2]/30",
        };
      case "tiktok":
        return {
          icon: <TikTokIcon className="w-5 h-5 text-[#111111]" />,
          accentGlow: "group-hover:shadow-[0_0_20px_rgba(17,17,17,0.15)]",
          borderAccent: "group-hover:border-[#111111]/30",
        };
      case "webkelas":
        return {
          icon: <S2HubIcon className="w-5 h-5 text-[#B88E1C]" />,
          accentGlow: "group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
          borderAccent: "group-hover:border-[#D4AF37]/50",
        };
      default:
        return {
          icon: <S2HubIcon className="w-5 h-5 text-[#B88E1C]" />,
          accentGlow: "group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
          borderAccent: "group-hover:border-[#D4AF37]/50",
        };
    }
  };

  const config = getIconConfig();

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: 0.15 + index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.012,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 500, damping: 30 },
      }}
      className="group relative block w-full rounded-2xl p-[1.5px] transition-all duration-300"
    >
      {/* Dynamic Gold Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-300/30 via-white/80 to-gold-400/30 group-hover:from-gold-400/70 group-hover:via-gold-200/90 group-hover:to-gold-500/70 transition-all duration-500 blur-[0.5px] group-hover:blur-[2px] opacity-80 group-hover:opacity-100 shadow-[0_4px_20px_rgba(212,175,55,0.06)] group-hover:shadow-gold-glow" />

      {/* Card Inner Body */}
      <div className="relative flex items-center justify-between gap-4 p-4 sm:p-4.5 rounded-[15px] bg-white/85 group-hover:bg-white/95 backdrop-blur-2xl transition-all duration-300">
        {/* Left: Platform Icon & Details */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-b from-pearl-50 to-twilight-100 flex items-center justify-center border border-gold-300/40 ${config.borderAccent} shadow-[0_2px_10px_rgba(0,0,0,0.03)] ${config.accentGlow} transition-all duration-300 group-hover:scale-105`}
          >
            {config.icon}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-[#1A191E] tracking-tight truncate group-hover:text-gold-700 transition-colors duration-200">
                {item.title}
              </h2>
              {item.isPrimary && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-gradient-to-r from-gold-100 to-pearl-100 border border-gold-400/40 text-gold-700 shadow-sm">
                  Featured
                </span>
              )}
            </div>
            <p className="text-xs text-[#7B7687] truncate font-normal tracking-wide mt-0.5 group-hover:text-[#4A4556] transition-colors">
              {item.handle}
            </p>
          </div>
        </div>

        {/* Right: Modern Arrow with Glow */}
        <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-transparent group-hover:bg-gold-50/60 border border-transparent group-hover:border-gold-300/40 text-[#A09CAE] group-hover:text-gold-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRightIcon className="w-4 h-4 stroke-[2.2]" />
        </div>
      </div>
    </motion.a>
  );
}
