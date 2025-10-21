import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Campsie Centre Medical Clinic | Quality Healthcare in Campsie, NSW",
  description: "Campsie Centre Medical Clinic provides high quality medical care to individuals and families. Services include general practice, physiotherapy, podiatry, and dietitian consultations. Mixed and bulk billing available.",
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
