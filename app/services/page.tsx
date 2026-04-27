import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="pt-[100px] md:pt-[120px] pb-24 max-w-container-max mx-auto px-6 md:px-12 flex-grow">
      {/* Hero Section */}
      <header className="text-center py-section-padding mb-16 relative">
        <h1 className="font-h1-editorial text-h1-editorial text-on-background mb-6">Our Services</h1>
        <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto">
          Discover a curated selection of premium treatments designed to elevate your natural beauty. Experience artistry in every detail.
        </p>
      </header>

      {/* Sticky Filter */}
      <div className="sticky top-[80px] md:top-[100px] z-40 bg-background/90 backdrop-blur-md py-4 mb-16 border-b border-surface-container-high -mx-6 px-6 md:mx-0 md:px-0">
        <ul className="flex overflow-x-auto hide-scrollbar gap-8 md:justify-center items-center font-cta-label text-cta-label whitespace-nowrap">
          <li><button className="text-primary-container border-b-2 border-primary-container pb-2 uppercase tracking-widest cursor-pointer">All</button></li>
          <li><button className="text-on-surface-variant hover:text-primary-container transition-colors pb-2 uppercase tracking-widest cursor-pointer">Hair</button></li>
          <li><button className="text-on-surface-variant hover:text-primary-container transition-colors pb-2 uppercase tracking-widest cursor-pointer">Skin</button></li>
          <li><button className="text-on-surface-variant hover:text-primary-container transition-colors pb-2 uppercase tracking-widest cursor-pointer">Nails</button></li>
          <li><button className="text-on-surface-variant hover:text-primary-container transition-colors pb-2 uppercase tracking-widest cursor-pointer">Makeup</button></li>
          <li><button className="text-on-surface-variant hover:text-primary-container transition-colors pb-2 uppercase tracking-widest cursor-pointer">Body</button></li>
        </ul>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkilCSCtdE__1e8CtL41jKpY2RvjUmhL9Dy18FQOcJGvsctFqVU5yFiVOR_HdF5Cn-pkl677qF4Zy_Q_hA-fh7cpNu0apETDpZPPC3_moFAT6ULE6wJsDyCMO33i0hQH8pIbpYZLKa4NSHqI3LjHYjWveSS_Z1dJioTqmkSIjDGVOjy89e5QvLoBQutLy8XVlpBAv707ijEGGI4XE_TPIAu4ORZsn_p1NbNnFoB5KjKjhFQuJfjzpuMKXy2ZBF97CfuCEokLDZmfVI')" }}></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>content_cut</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Precision Haircut</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              Tailored cuts that complement your face shape and lifestyle, executed with masterful precision and styling advice.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹500+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>

        {/* Service Card 2 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdLrcZE_aotKPZyGP36lbQJDymRe-i-ju9eLGmjRI_BZAzMIE8lQSZnwH8NI_UCAne9e-oMfgvOH-qgKiG5BnJszJauQGJ81zIEu30oboQw7mpV139UkpEmW1sVfgDX9Bi15ykT07_1t3KKei_GVEIe1nX0K17D2smwZEEBZaAXRqiQPICOIlrVf5J2RChgpKon4XTmXonFS3A434i54t1Duww-lg03Z2smzuBkkfcAWdRpl1TFpi8A-xHrIGhF4jERNrTaw8tt6Ev')" }}></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>spa</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Restorative Hair Spa</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              Deep conditioning treatments to revive damaged hair, restoring intense moisture, shine, and structural integrity.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹1,500+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>

        {/* Service Card 3 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvWVdZ1JGz7gMbNbzo_kF2GTEYovTI-rZMOmvMLR8SInU9eRFje4x4MtWfHGDSRrwaWAGlV1FIPCMVtPgVFgizJs1npXC1Vg31UViahl_hVpW0z0ac2TobjXCJpjukfKl_oklC_bOjnI6RGtS20wmS2TbBx-jVXD_vFNGcWHdvzS_uDxDbgNtmBJY4ELaPBtp9UpAGJWYJbOobqsl6RpWcFoYF8afl2aqbY8SluSD9ZA0FSMWt_RMDuIZLBYB7ApdVGSxbleSPNSDo')" }}></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>face</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Signature Facial</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              A bespoke facial experience utilizing premium botanical extracts to deeply cleanse, exfoliate, and illuminate your complexion.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹2,000+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>

        {/* Service Card 4 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>pan_tool</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Avant-Garde Nail Art</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              Intricate, custom-designed nail artistry using high-pigment gel lacquers and meticulous attention to detail.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹800+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>

        {/* Service Card 5 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>brush</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Bridal Elegance Makeup</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              Flawless, long-lasting bridal makeup artistry designed to enhance your natural features for your most important day.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹15,000+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>

        {/* Service Card 6 */}
        <article className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>face_retouching_natural</span>
            <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">Grooming &amp; Styling</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
              Refined grooming services including beard sculpting, subtle skin enhancement, and sophisticated hairstyling.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
            <span className="font-h2-editorial text-2xl text-primary-container">₹1,000+</span>
            <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
          </div>
        </article>
      </div>

      {/* Consultation Section */}
      <section className="mt-section-padding text-center bg-surface-container-high py-20 px-8 rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-h2-editorial text-h2-editorial text-on-background mb-6">Need Advice?</h2>
          <p className="font-body-main text-body-main text-on-surface-variant mb-10">
            Unsure which treatment suits you best? Connect with our master stylists for a personalized consultation to curate your bespoke salon experience.
          </p>
          <Link href="https://wa.me/918578060606" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container font-cta-label text-cta-label px-8 py-4 rounded shimmer-hover transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Consult via WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
