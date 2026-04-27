import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#070707] w-full border-t border-stone-800 pb-20 md:pb-0">
      <div className="w-full py-20 px-10 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="text-2xl font-serif italic text-[#C9A84C] mb-4">URBANITY SALON</div>
          <p className="font-noto-serif font-light tracking-wide text-stone-500 text-sm leading-relaxed">
            Artistry in every detail. Elevating your natural beauty with premium treatments and unparalleled service.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 md:pl-8">
          <h4 className="text-stone-300 font-noto-serif uppercase tracking-[0.2em] text-xs mb-2">Explore</h4>
          <Link href="/" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Home</Link>
          <Link href="/services" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Services</Link>
          <Link href="/bridal" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Bridal</Link>
          <Link href="/gallery" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Gallery</Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-stone-300 font-noto-serif uppercase tracking-[0.2em] text-xs mb-2">Legal</h4>
          <Link href="/" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Privacy Policy</Link>
          <Link href="/" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Terms of Service</Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-stone-300 font-noto-serif uppercase tracking-[0.2em] text-xs mb-2">Company</h4>
          <Link href="/about" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">About Us</Link>
          <Link href="/" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Careers</Link>
          <Link href="/" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Sustainability</Link>
          <Link href="/contact" className="font-noto-serif font-light tracking-wide text-stone-500 hover:text-[#C9A84C] transition-colors opacity-80 text-sm">Contact</Link>
        </div>
      </div>
      <div className="w-full border-t border-stone-800/50 py-6 text-center">
        <p className="font-noto-serif font-light tracking-wide text-stone-600 text-xs uppercase">© {new Date().getFullYear()} URBANITY SALON. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
