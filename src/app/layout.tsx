import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAF9F8",
};

export const metadata: Metadata = {
  title: "Zynn",
  description: "Don't follow your dream, follow my instagram",
  metadataBase: new URL("https://zynn.link"),
  openGraph: {
    title: "Zynn",
    description: "Don't follow your dream, follow my instagram",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Zynn",
    description: "Don't follow your dream, follow my instagram",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-pearl-100 text-foreground selection:bg-gold-200">
        {children}
      </body>
    </html>
  );
}
