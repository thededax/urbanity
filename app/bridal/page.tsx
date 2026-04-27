import Image from "next/image"
import Link from "next/link"

export default function BridalPage() {
  return (
    <main className="flex-grow pt-[80px] md:pt-0">
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background">
          <Image 
            src="https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png"
            alt="Stunning bride in a luxury dark atmospheric setting" 
            fill
            className="object-cover object-center "
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4 max-w-2xl text-center">
            <span className="font-section-head text-section-head text-primary tracking-[0.3em] uppercase">Bridal Studio</span>
            <h1 className="font-h1-editorial text-[48px] md:text-h1-editorial text-on-background leading-tight text-balance">
              Your Most Beautiful Day Starts Here
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant max-w-lg mt-4 font-light mx-auto">
              Curated luxury packages designed to elevate your wedding experience. Meticulous artistry in a serene environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
            <Link href="/contact" className="bg-primary text-on-primary font-cta-label text-cta-label px-10 py-5 rounded-DEFAULT shimmer-btn tracking-[0.15em] hover:scale-105 transition-transform w-full sm:w-auto text-center inline-block">
              EXPLORE PACKAGES
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-section-padding bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-section-head text-section-head text-primary block mb-4 uppercase">The Journey</span>
            <h2 className="font-h2-editorial text-h2-editorial text-on-background">A seamless process to your perfect look.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[48px] left-0 w-full h-[1px] bg-primary/20 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-surface">
              <div className="w-24 h-24 rounded-full border border-primary/30 bg-surface flex items-center justify-center mb-8 text-primary group-hover:border-primary transition-colors">
                <span className="font-h2-editorial text-3xl">01</span>
              </div>
              <h3 className="font-cta-label text-lg text-on-background mb-4 uppercase tracking-[0.15em]">Inquiry</h3>
              <p className="font-body-main text-sm text-on-surface-variant leading-relaxed">Secure your date and discuss initial visions, themes, and aspirations for your big day.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-surface">
              <div className="w-24 h-24 rounded-full border border-primary/30 bg-surface flex items-center justify-center mb-8 text-primary group-hover:border-primary transition-colors">
                <span className="font-h2-editorial text-3xl">02</span>
              </div>
              <h3 className="font-cta-label text-lg text-on-background mb-4 uppercase tracking-[0.15em]">Consultation</h3>
              <p className="font-body-main text-sm text-on-surface-variant leading-relaxed">In-depth style analysis, skin preparation plan, and tailored aesthetic recommendations.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-surface">
              <div className="w-24 h-24 rounded-full border border-primary/30 bg-surface flex items-center justify-center mb-8 text-primary group-hover:border-primary transition-colors">
                <span className="font-h2-editorial text-3xl">03</span>
              </div>
              <h3 className="font-cta-label text-lg text-on-background mb-4 uppercase tracking-[0.15em]">Trial Session</h3>
              <p className="font-body-main text-sm text-on-surface-variant leading-relaxed">Preview and perfect your complete look in the privacy of our exclusive boutique studio.</p>
            </div>
            
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-surface">
              <div className="w-24 h-24 rounded-full border border-primary/30 bg-surface flex items-center justify-center mb-8 text-primary group-hover:border-primary transition-colors">
                <span className="font-h2-editorial text-3xl">04</span>
              </div>
              <h3 className="font-cta-label text-lg text-on-background mb-4 uppercase tracking-[0.15em]">Wedding Day</h3>
              <p className="font-body-main text-sm text-on-surface-variant leading-relaxed">Flawless, relaxed, and timely execution by our senior artists on your most important day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
