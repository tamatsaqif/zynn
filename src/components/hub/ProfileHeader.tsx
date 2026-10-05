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
        // Fallback to copy
      }
    }

    const url = window.location.href;
    let copiedSuccess = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(url);
        copiedSuccess = true;
      } catch (e) {
        copiedSuccess = fallbackCopy(url);
      }
    } else {
      copiedSuccess = fallbackCopy(url);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const fallbackCopy = (text: string): boolean => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      return false;
    }
  };

  return (
    <>
      <header className="flex flex-col items-center text-center pt-8 pb-4">
        {/* Avatar Monogram with Dual Gold Halo & Shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
          className="relative mb-6 group cursor-default"
        >
          {/* Animated Gold Aura Background */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold-400/50 via-twilight-200/60 to-gold-300/50 blur-[10px] opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-gold" />

          {/* Avatar Outer Shell with Metallic Gold Border */}
          <div className="relative w-24 h-24 rounded-full p-[2.5px] bg-gradient-to-b from-gold-300 via-white to-gold-500 shadow-gold-glow-lg transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FAF8F5] to-[#F2EDF8] flex items-center justify-center border border-white shadow-inner">
              <span className="text-3xl font-bold tracking-tight text-[#1A191E] select-none font-sans drop-shadow-sm">
                {profile.avatarText}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name & Verified Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <h1 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1A191E]">
            {profile.name}
          </h1>
          {profile.isVerified && (
            <div className="flex items-center" title="Verified">
              <VerifiedCheckIcon className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" />
            </div>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-sm md:text-[15px] text-[#6E687A] font-medium tracking-normal max-w-sm px-4 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Share Button (Refined Floating Pill) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.28,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4"
        >
          <button
            onClick={handleShare}
            aria-label="Share profile"
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-[#5A5467] hover:text-[#1A191E] bg-white/80 hover:bg-white border border-gold-400/30 hover:border-gold-500/60 shadow-[0_2px_12px_rgba(212,175,55,0.08)] hover:shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-gold-600 stroke-[2.5]" />
                <span className="text-gold-700">Tautan Disalin</span>
              </>
            ) : (
              <>
                <ShareIcon className="w-3.5 h-3.5 text-gold-600 group-hover:text-gold-700 transition-colors" />
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
