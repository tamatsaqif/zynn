import React from "react";
import { profileData, linksData } from "@/content/links.data";
import { ProfileHeader } from "@/components/hub/ProfileHeader";
import { LinkCard } from "@/components/hub/LinkCard";
import { Footer } from "@/components/hub/Footer";
import { BackgroundGlow } from "@/components/hub/BackgroundGlow";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 py-6 md:py-10 selection:bg-gold-200 selection:text-gold-900">
      {/* Soft Pearl & Twilight Background Ambient */}
      <BackgroundGlow />

      {/* Main Content Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col">
        {/* Profile Section */}
        <ProfileHeader profile={profileData} />

        {/* 4 Core Links */}
        <section aria-label="Links Hub" className="mt-6 flex flex-col space-y-3.5">
          {linksData.map((item, index) => (
            <LinkCard key={item.id} item={item} index={index} />
          ))}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
