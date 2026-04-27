import Link from 'next/link';

export function FloatingWhatsApp() {
  return (
    <Link 
      href="https://wa.me/918578060606"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-primary-container rounded-full items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:scale-110 transition-transform duration-300 z-40 group"
    >
      <span className="material-symbols-outlined text-background text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
    </Link>
  );
}
