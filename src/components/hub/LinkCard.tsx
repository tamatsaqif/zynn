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
  const getIcon = () => {
    switch (item.iconType) {
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-[#E1306C]" />;
      case "discord":
        return <DiscordIcon className="w-5 h-5 text-[#5865F2]" />;
      case "tiktok":
        return <TikTokIcon className="w-5 h-5 text-[#111111]" />;
      case "webkelas":
        return <S2HubIcon className="w-5 h-5 text-gold-600" />;
      default:
        return <S2HubIcon className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      className="group relative block w-full p-4 md:p-5 rounded-2xl bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-gold-400/20 hover:border-gold-500/50 shadow-subtle-card hover:shadow-subtle-card-hover transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Icon & Text */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-b from-pearl-50 to-twilight-100 flex items-center justify-center border border-gold-300/30 group-hover:border-gold-400/60 shadow-[0_2px_8px_rgba(0,0,0,0.03)] group-hover:shadow-gold-glow transition-all duration-300">
            {getIcon()}
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-medium text-[#1A191E] tracking-tight truncate group-hover:text-gold-700 transition-colors duration-200">
              {item.title}
            </h2>
            <p className="text-xs text-[#7B7687] truncate font-normal tracking-wide mt-0.5">
              {item.handle}
            </p>
          </div>
        </div>

        {/* Right: Arrow Icon */}
        <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[#9E9AA8] group-hover:text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
          <ArrowUpRightIcon className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}
