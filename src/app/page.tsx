import React from "react";
import { profileData, linksData } from "@/content/links.data";
import { ProfileHeader } from "@/components/hub/ProfileHeader";
import { LinkCard } from "@/components/hub/LinkCard";
import { Footer } from "@/components/hub/Footer";
import { BackgroundGlow } from "@/components/hub/BackgroundGlow";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 md:py-16 selection:bg-gold-200 selection:text-gold-900 overflow-x-hidden">
      {/* Dynamic Putih Lembayung & Gold Shader Background */}
      <BackgroundGlow />

      {/* Main Luxury Stage Container */}
      <div className="relative z-10 w-full max-w-[440px] flex flex-col items-center">
        {/* Stage Card with Refined Frosted Glass & Gold Rim */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.12),0_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-500">
          {/* Profile Header */}
          <ProfileHeader profile={profileData} />

          {/* 4 Core Links */}
          <section aria-label="Links Hub" className="mt-7 flex flex-col space-y-3.5">
            {linksData.map((item, index) => (
              <LinkCard key={item.id} item={item} index={index} />
            ))}
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
