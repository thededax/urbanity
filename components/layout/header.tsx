'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/bridal', label: 'Bridal' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav aria-label="Global Navigation" className={`fixed top-0 w-full z-[150] transition-all duration-500 ease-out ${menuOpen ? 'bg-background' : scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex justify-between items-center px-4 md:px-12 h-[56px] md:h-[72px] w-full max-w-[1280px] mx-auto">
          <Link href="/" className="font-h1-editorial tracking-widest text-primary text-[16px] md:text-[24px]">
            URBANITY SALON
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-noto-serif text-[12px] tracking-[0.2em] leading-none uppercase ${
                    isActive ? 'text-primary' : 'text-stone-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="shimmer-btn font-cta-label text-cta-label bg-primary text-background px-6 py-3 rounded uppercase tracking-[0.15em] transition-all hover:bg-white text-center font-bold">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 my-[3px] ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-2xl z-[140] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col items-center justify-center ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-6 text-center mt-12 w-full px-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-h2-editorial text-4xl transition-all duration-300 relative group flex items-center ${
                  isActive ? 'text-primary translate-x-2' : 'text-on-background hover:text-primary hover:translate-x-2'
                }`}
              >
                <span className={`absolute -left-8 w-4 h-[2px] bg-primary rounded-full transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-50'}`} />
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="shimmer-btn font-cta-label text-cta-label bg-primary text-background px-8 py-4 w-full max-w-[280px] rounded uppercase tracking-[0.15em] transition-all hover:bg-white mt-8 text-center font-bold">
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}

