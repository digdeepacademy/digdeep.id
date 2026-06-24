import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'Academy — Akademi Digital Profesional",
  description:
    "D'Academy — Akademi digital profesional untuk mengembangkan karier dan keterampilan masa depan Anda.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
