"use client";

import React from "react";
import { ShaderBackground } from "@/components/ui/adisyon-shader";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Dynamic WebGL Shader Fluid Waves in Putih Lembayung & Gold */}
      <div className="absolute inset-0 opacity-75">
        <ShaderBackground className="w-full h-full" />
      </div>

      {/* Subtle pearlescent luminous gradient overlay for refined depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F8]/60 via-transparent to-[#FAF9F8]/80 backdrop-blur-[1px]" />

      {/* Ambient gold edge vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(212,175,55,0.08)] pointer-events-none" />
    </div>
  );
}
