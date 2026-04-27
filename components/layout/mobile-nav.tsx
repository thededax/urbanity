'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Global Mobile Navigation" className="md:hidden bg-[#141414] shadow-[0_-10px_20px_rgba(0,0,0,0.5)] border-t border-[#C9A84C]/20 fixed bottom-0 w-full z-50 flex justify-around items-center py-3 px-4 pb-safe">
      <Link href="tel:+918578060606" className="text-stone-500 flex flex-col items-center gap-1 active:bg-[#C9A84C]/10 scale-95 transition-transform p-2 rounded">
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>call</span>
        <span className="font-noto-serif uppercase text-[10px] tracking-widest">Call</span>
      </Link>
      <Link href="/services" className={`${pathname === '/services' ? 'text-[#C9A84C]' : 'text-stone-500'} flex flex-col items-center gap-1 active:bg-[#C9A84C]/10 scale-95 transition-transform p-2 rounded`}>
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>spa</span>
        <span className="font-noto-serif uppercase text-[10px] tracking-widest">Services</span>
      </Link>
      <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#C9A84C]' : 'text-stone-500'} flex flex-col items-center gap-1 active:bg-[#C9A84C]/10 scale-95 transition-transform p-2 rounded`}>
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>calendar_month</span>
        <span className="font-noto-serif uppercase text-[10px] tracking-widest">Book Now</span>
      </Link>
    </nav>
  );
}
