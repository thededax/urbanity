import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, DM_Sans, Noto_Serif, Geist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileNav } from '@/components/layout/mobile-nav';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import GsapLenisSetup from '@/components/GsapLenisSetup';
import { MobileStickyCTA } from '@/components/layout/mobile-sticky-cta';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

const cinzel = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const notoSerif = Noto_Serif({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
});

export const metadata: Metadata = {
  title: 'Urbanity Salon | Premium Beauty & Bridal Studio',
  description: 'Premium luxury salon offering curated services and bridal studio packages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${cormorant.variable} ${cinzel.variable} ${dmSans.variable} ${notoSerif.variable} antialiased`} suppressHydrationWarning>
        <ScrollProgress />
        <GsapLenisSetup />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
