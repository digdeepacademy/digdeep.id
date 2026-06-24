import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'Academy — Corporate Training & Professional Upskilling",
  description:
    "Platform pelatihan korporat premium: AI Training, Data Analytics, Power BI, Workflow Automation, dan program upskilling profesional untuk perusahaan dan institusi.",
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
