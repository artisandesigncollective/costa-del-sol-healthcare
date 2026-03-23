import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Costa del Sol Healthcare Directory | Private Hospitals & English-Speaking Doctors",
  description: "Find private hospitals, dental clinics, and English-speaking doctors in Costa del Sol. Comprehensive healthcare directory for expats in Marbella, Málaga, Estepona & Fuengirola.",
  keywords: "private healthcare costa del sol, english speaking doctors marbella, private hospitals malaga, dental clinics spain, expat healthcare spain",
  authors: [{ name: "Costa del Sol Healthcare Directory" }],
  openGraph: {
    title: "Costa del Sol Healthcare Directory",
    description: "Your complete guide to private healthcare on Spain's Costa del Sol",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa del Sol Healthcare Directory",
    description: "Find trusted healthcare providers in Spain",
  },
  alternates: {
    canonical: "https://costadelsolhealthcare.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
