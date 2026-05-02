import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="font-h1-editorial text-h1-editorial text-primary-container mb-4">404</h2>
      <p className="font-body-main text-body-main text-on-surface mb-8">Page Not Found</p>
      <Link href="/" className="font-cta-label text-cta-label border border-primary-container text-primary-container px-6 py-3 hover:bg-primary-container hover:text-background transition-colors">
        Return Home
      </Link>
    </div>
  );
}
