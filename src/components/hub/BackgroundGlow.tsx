"use client";

import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft twilight / lembayung subtle glow orb */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full blur-[120px] opacity-60 animate-pulse-gold"
        style={{
          background:
            "radial-gradient(circle, rgba(235, 222, 248, 0.7) 0%, rgba(248, 241, 230, 0.4) 50%, transparent 70%)",
        }}
      />

      {/* Warm champagne gold micro accent */}
      <div
        className="absolute top-[35%] right-[-10%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 220, 155, 0.5) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(230, 220, 245, 0.5) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
