"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProfileData } from "@/types";
import { VerifiedCheckIcon, ShareIcon, CheckIcon } from "../icons/PlatformIcons";
import { Toast } from "../ui/Toast";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Zynn",
          text: profile.tagline,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <header className="flex flex-col items-center text-center pt-8 pb-4">
        {/* Avatar Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group cursor-default"
        >
          {/* Subtle Outer Halo Ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gold-400/40 via-twilight-200/50 to-gold-300/40 blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Avatar Container */}
          <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-b from-gold-300/80 via-white to-gold-400/60 shadow-gold-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FAF8F5] to-[#F1ECF7] flex items-center justify-center border border-white/80">
              <span className="text-3xl font-semibold tracking-tight text-[#1A191E] select-none font-sans">
                {profile.avatarText}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name & Verified Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <h1 className="text-2xl font-semibold tracking-tight text-[#1A191E]">
            {profile.name}
          </h1>
          {profile.isVerified && (
            <div className="flex items-center" title="Verified">
              <VerifiedCheckIcon className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]" />
            </div>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-[15px] text-[#706B7D] font-normal tracking-normal max-w-sm px-4"
        >
          {profile.tagline}
        </motion.p>

        {/* Share Button (Clean & Minimal) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4"
        >
          <button
            onClick={handleShare}
            aria-label="Share profile"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#706B7D] hover:text-[#1A191E] bg-white/70 hover:bg-white border border-gold-400/20 hover:border-gold-400/50 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-200"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-gold-600 stroke-[2.5]" />
                <span className="text-gold-700">Tautan Disalin</span>
              </>
            ) : (
              <>
                <ShareIcon className="w-3.5 h-3.5 opacity-80" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </motion.div>
      </header>

      <Toast show={copied} message="Tautan profil berhasil disalin" />
    </>
  );
}
