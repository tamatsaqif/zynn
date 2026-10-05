export interface ProfileData {
  name: string;
  tagline: string;
  isVerified: boolean;
  avatarText: string;
  shareUrl?: string;
}

export interface LinkItem {
  id: string;
  title: string;
  handle: string;
  url: string;
  iconType: "instagram" | "discord" | "tiktok" | "webkelas";
  isPrimary?: boolean;
}
