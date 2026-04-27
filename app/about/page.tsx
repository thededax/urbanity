import Link from "next/link";
import Image from "next/image";

import { Carousel } from "@/components/ui/carousel";

const carouselImages = [
  {
    src: "https://www.image2url.com/r2/default/images/1777307634569-bea49379-40fc-4802-a92a-32884a979934.png",
    alt: "Salon Interior",
    widthClass: "md:min-w-[600px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACmP_phXBKYX47vr035jkDqvVbVpDvYZ7hYutjJ4lXQxyXrOr0TW0b5Z2kOc908_p6xomVThjC729bQYI-xfS-WiHRgciYYkDy-JSVmde1MENjOrNJaFxIgZeg36jgZGH9QptfhFw1kDZFOXOoXYiNKuXD8Sygob4fn8koNKnACyIIJpkVe-Yrw-1q1q_Ai-TPMsYmjwi6DPgHfJT0HIlCZ-nAlerIKmc2pTTU19e3uyy-8zmebXG_rE-wwkLAevMWoW3NJiwkl46q",
    alt: "Tools Detail",
    widthClass: "md:min-w-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmk2mWGA4-E0YwXccrHGRr8oDfzpSqqybPJspWCzZKZdQ2lgbJa01zgwwob-caZsoxPRZSoIBV-1ohcrMYQdaDK5NqMtMMGjix7V4Pxay6aPKCvN6JFnwYH8-38FBYHhjS9OlY-BMQALLERattCUqombFFX0bSguh8H9u_2Siig0ba6bEH0rVoe3F1pLat0nOTi_xlRehunr3s3hFfCp1SbFHnP_QbWEMY-O2yTa3SKC_z5sc_EORvKY3OXDgdX1IjZCGkA9lRDfQ2",
    alt: "Lounge Area",
    widthClass: "md:min-w-[600px]",
  }
];

export default function AboutPage() {
  return (
    <main className="flex-grow pt-[80px] md:pt-0">
      {/* Hero Section */}
      <section className="py-section-padding px-6 md:px-gutter mx-auto max-w-container-max pt-[140px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[120px] items-center">
          <div className="w-full md:w-5/12 aspect-[3/4] bg-surface-container relative">
            <Image 
              src="https://www.image2url.com/r2/default/images/1777307279699-b39c8f5c-f80f-4dbf-a53f-bf76c40ec46f.png" 
              alt="Founder Portrait" 
              fill
              className="object-cover  opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            <span className="font-section-head text-primary uppercase tracking-[0.3em]">The Founder</span>
            <h1 className="font-h1-editorial text-[48px] md:text-h1-editorial text-on-surface leading-tight text-balance">
              Meet The Vision Behind Urbanity
            </h1>
            <p className="font-body-main text-on-surface-variant max-w-xl mt-4 leading-relaxed font-light">
              Discover the story, passion, and legacy of Kiran Kishore in building Urbanity Salon into a premium grooming destination. A commitment to structural perfection and timeless style.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section-padding bg-surface-container relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/10 -translate-x-1/2 hidden md:block"></div>
        <div className="mx-auto max-w-container-max px-6 md:px-gutter">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-12 relative z-10">
            <span className="material-symbols-outlined text-primary text-6xl mx-auto" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <h2 className="font-h2-editorial text-[36px] md:text-[48px] text-on-surface text-center leading-tight">
              &quot;We believe in crafting not just a look, but an unforgettable legacy of confidence and style.&quot;
            </h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
            <p className="font-body-main text-on-surface-variant text-center max-w-2xl mx-auto font-light leading-relaxed">
              Founded by Kiran Kishore, Urbanity Salon started with a simple yet powerful vision: to create a space where every client experiences the highest standard of grooming. Our professional and legacy-focused approach ensures every visit is more than just a haircut—it&apos;s an editorial experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-section-padding mx-auto max-w-container-max px-6 md:px-gutter">
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <span className="font-section-head text-primary uppercase tracking-[0.3em]">Core Tenets</span>
          <h2 className="font-h2-editorial text-[40px] md:text-h2-editorial text-on-surface leading-tight">Our Mission &amp; Vision</h2>
          <p className="font-body-main text-on-surface-variant font-light">The driving forces behind our legacy of excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-surface-container p-8 md:p-12 border border-white/5 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)] transition-all duration-300 flex flex-col gap-4 relative group overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>track_changes</span>
            <h3 className="font-section-head text-on-surface uppercase text-lg tracking-widest">Mission</h3>
            <p className="font-body-main text-on-surface-variant mt-2 font-light leading-relaxed">
              To provide unparalleled salon experiences through expert craftsmanship and premium service, elevating the standard of personal grooming in an environment of uncompromising luxury.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-surface-container p-8 md:p-12 border border-white/5 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)] transition-all duration-300 flex flex-col gap-4 relative group overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 font-light" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>visibility</span>
            <h3 className="font-section-head text-on-surface uppercase text-lg tracking-widest">Vision</h3>
            <p className="font-body-main text-on-surface-variant mt-2 font-light leading-relaxed">
              To be recognized globally as the ultimate destination for luxury grooming and styling, setting international benchmarks for aesthetic perfection and client discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Atmosphere Horizontal Scroll */}
      <section className="py-section-padding bg-[#111] overflow-hidden">
        <Carousel images={carouselImages} />
      </section>

      {/* Stats Section */}
      <section className="py-24 mx-auto max-w-container-max px-6 md:px-gutter border-t border-white/5 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-h1-editorial text-[64px] text-primary leading-none">10k+</span>
            <span className="font-section-head text-on-surface-variant uppercase text-xs tracking-widest">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-h1-editorial text-[64px] text-primary leading-none">45</span>
            <span className="font-section-head text-on-surface-variant uppercase text-xs tracking-widest">Premium Services</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-h1-editorial text-[64px] text-primary leading-none">4.9</span>
            <span className="font-section-head text-on-surface-variant uppercase text-xs tracking-widest">Average Rating</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-h1-editorial text-[64px] text-primary leading-none">01</span>
            <span className="font-section-head text-on-surface-variant uppercase text-xs tracking-widest">Exclusive Lounge</span>
          </div>
        </div>
      </section>
    </main>
  );
}
