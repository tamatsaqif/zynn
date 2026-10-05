import { LinkItem, ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Zynn",
  tagline: "Don't follow your dream, follow my instagram",
  isVerified: true,
  avatarText: "Z",
  shareUrl: "https://zynn.link",
};

export const linksData: LinkItem[] = [
  {
    id: "instagram",
    title: "Instagram",
    handle: "@nath.isme",
    url: "https://instagram.com/nath.isme",
    iconType: "instagram",
    isPrimary: true,
  },
  {
    id: "discord",
    title: "Discord",
    handle: "Tinggi Badan",
    url: "https://dsc.gg/tinggi-badan",
    iconType: "discord",
  },
  {
    id: "tiktok",
    title: "TikTok",
    handle: "@z.zayyant",
    url: "https://tiktok.com/@z.zayyant",
    iconType: "tiktok",
  },
  {
    id: "s2hub",
    title: "S2Hub",
    handle: "science2hub.vercel.app",
    url: "https://science2hub.vercel.app",
    iconType: "webkelas",
  },
];
