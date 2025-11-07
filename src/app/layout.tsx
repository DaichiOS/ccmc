import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Campsie Centre Medical Clinic | GP, Physio, Podiatry & Dietitian | Bulk Billing NSW",
  description: "Your trusted medical clinic in Campsie Centre, NSW. Experienced GPs, physiotherapy, podiatry, dietitian & fertility telehealth services. Bulk billing available. Open Mon-Fri 9am-5pm, Sun 9am-3pm. Multilingual staff: English, Mandarin, Cantonese, Teochew. Book online or call (02) 9718 1888.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "medical clinic Campsie",
    "GP Campsie",
    "bulk billing doctor Campsie",
    "physiotherapy Campsie",
    "podiatry Campsie",
    "dietitian Campsie",
    "Campsie Centre Medical",
    "doctor Campsie NSW",
    "family doctor Campsie",
    "medical centre Campsie",
    "Chinese speaking doctor Campsie",
    "Mandarin GP Campsie",
    "Cantonese doctor Sydney",
    "fertility specialist referral",
    "telehealth fertility NSW",
    "Sunday doctor Campsie",
    "weekend GP Campsie",
    "Amy Street medical clinic",
    "Campsie bulk billing",
    "psychology services 2026",
  ],
  authors: [{ name: "Campsie Centre Medical Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://campsiecmc.com.au",
    siteName: "Campsie Centre Medical Clinic",
    title: "Campsie Centre Medical Clinic | Quality Healthcare in Campsie, NSW",
    description: "Comprehensive medical care with experienced doctors and allied health professionals. GP, physiotherapy, podiatry, dietitian services. Bulk billing available.",
    images: [
      {
        url: "/CampsieCentreMedicalLogo.png",
        width: 1200,
        height: 630,
        alt: "Campsie Centre Medical Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campsie Centre Medical Clinic | Quality Healthcare in Campsie, NSW",
    description: "Comprehensive medical care with experienced doctors and allied health professionals. Bulk billing available.",
    images: ["/CampsieCentreMedicalLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-karla)' }}
      >
        {children}
      </body>
    </html>
  );
}
