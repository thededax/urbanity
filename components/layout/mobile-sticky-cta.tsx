'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 2.5s delay
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full h-[52px] bg-primary-container z-[100] md:hidden transition-transform duration-500 ease-out ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="grid grid-cols-3 h-full divide-x divide-background/20 text-background font-bold text-[11px] uppercase tracking-wider items-center justify-center text-center">
        <a href="tel:+918578060606" className="flex items-center justify-center gap-1.5 h-full w-full hover:bg-black/10 transition-colors">
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span className="font-cta-label text-[11px] uppercase tracking-wider font-semibold">Call</span>
        </a>
        <a href="https://wa.me/918578060606" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 h-full w-full hover:bg-black/10 transition-colors">
          <span className="material-symbols-outlined text-[16px]">chat</span>
          WhatsApp
        </a>
        <Link href="/contact" className="flex items-center justify-center gap-1.5 h-full w-full hover:bg-black/10 transition-colors">
          <span className="material-symbols-outlined text-[16px]">calendar_month</span>
          Book
        </Link>
      </div>
    </div>
  );
}
