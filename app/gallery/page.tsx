'use client';

import Image from "next/image"
import { useState } from "react"

const galleryItems = [
  { src: "/gallery/hair1.png", alt: "Hair Styling", category: "hair", title: "Signature Blowout" },
  { src: "/gallery/hair2.png", alt: "Hair Cut", category: "hair", title: "Precision Cut" },
  { src: "/gallery/hair3.png", alt: "Hair Color", category: "hair", title: "Color Transformation" },
  { src: "/gallery/hair4.png", alt: "Hair Treatment", category: "hair", title: "Nourishing Treatment" },
  { src: "/gallery/image1.png", alt: "Salon Environment", category: "interior", title: "Our Space" },
  { src: "/gallery/image2.png", alt: "Salon Ambiance", category: "interior", title: "The Lounge" },
  { src: "/gallery/image3.png", alt: "Salon Details", category: "interior", title: "Atelier Details", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/image4.png", alt: "Salon Environment", category: "interior", title: "Styling Stations" },
  { src: "/gallery/image5.png", alt: "Salon Experience", category: "interior", title: "The Experience" },
  { src: "https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png", alt: "Salon Interior", category: "interior", title: "The Atelier Space" },
  { src: "https://i.ibb.co/cc7W5wWV/Chat-GPT-Image-Apr-28-2026-12-25-17-AM.png", alt: "Team Photo", category: "interior", title: "Our Team", span: "md:col-span-2 md:row-span-2" },
  { src: "https://i.ibb.co/7NjTLpFP/Chat-GPT-Image-Apr-27-2026-10-16-43-PM.png", alt: "Nail Art", category: "nails", title: "Gilded Minimalism" },
  { src: "https://i.ibb.co/ycKGwDwr/Chat-GPT-Image-Apr-27-2026-10-16-59-PM.png", alt: "Salon Lounge", category: "interior", title: "Premium Lounge" },
  { src: "https://i.ibb.co/qMrGgvMZ/Chat-GPT-Image-Apr-28-2026-12-22-32-AM.png", alt: "Styling Station", category: "hair", title: "Styling Suite" },
  { src: "https://www.image2url.com/r2/default/images/1777307741859-556a190c-8262-40d2-9daa-a8bd69a11415.png", alt: "Editorial Hair", category: "hair", title: "Sleek Silhouette", span: "md:col-span-2 md:row-span-2" },
  { src: "https://www.image2url.com/r2/default/images/1777307940632-eb03efd8-14bd-4785-9f08-b041a273d709.png", alt: "Bridal Look", category: "bridal", title: "Modern Romantic" },
  { src: "https://i.ibb.co/d4pJKsDN/Chat-GPT-Image-Apr-28-2026-12-31-58-AM.png", alt: "Bridal Portrait", category: "bridal", title: "Bridal Elegance" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD78n7N3qsVDKwH-jXLdL2sJ3NYN54lTnQ3-0FMrZJDET1vXOo3c24_lQQ8mIr4oCQRyUThyAG8RqSu8eQh844rx2EPKU1kuIoS_6YEz6zW3Ix7r3ALHPnucDD9HTMW-LZWqjVO9aBIcBy4TiEqquwkZW1ZYyuEWIL3T2Aee-Elx6WYAbmwfn11V-lfUbd56oNcZP2XdCeQzB9T36HnzksHkj0xhgaxyEgTcIZ3wPa-xoQ3HEvctllYw4h-bjR4Mag3uMynk4k1ERGD", alt: "Salon Interior", category: "interior", title: "Luxury Ambiance" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5NyEn-sRUuZNzN3y7uUD85bki8aUv5ePT_EICP_0hbFo5hhxltKdKB-Byrd_w3DKE25KAyDxUhwHDxmU7FKpMNWGxMZEXRXstokN90nbflJHt8MFvYR7fahCI9b4ILnLlbmJm6vVdFUWoKJe3KGUpL5WQ81Qo4SOZfYt986rtw4hFNC5QCTl2Pvui_jxJHImtJpQeR2cKnQgf2NsNyhaUmQqy2ymqd0rQhs5boK-EDK5mfcLZ0JyJKak5_hVGalxGBGynWIq4DV3X", alt: "Nail Art Close-up", category: "nails", title: "Precision Nail Art", span: "md:col-span-2" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVkZY5PTLAST6nZ2lQhM7JA6Cov3RTzCtHEqpjC8iH508bqmdCstd0VSgCrXjsoKk9qc4BAi3TH4Vc60T5P5hDhc0QTlEtkDxZSAEiW84FPSel9vBu1ULZHCBP9BiGBHkSPAoJ4OjPPdWRsRFBK4-EecX7tFmpyIxuO2HiiWCWNkrRLVr-ENCBEul1H7A-xi9F5-IGaucCwVR1H_4GoZ5boYySa5fk3yPWkJQFc2V2fujRIRv-SxxQMKTgbW61z0VNa7FjYhAEF4pQ", alt: "After Makeup", category: "makeup", title: "Editorial Glamour" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACmP_phXBKYX47vr035jkDqvVbVpDvYZ7hYutjJ4lXQxyXrOr0TW0b5Z2kOc908_p6xomVThjC729bQYI-xfS-WiHRgciYYkDy-JSVmde1MENjOrNJaFxIgZeg36jgZGH9QptfhFw1kDZFOXOoXYiNKuXD8Sygob4fn8koNKnACyIIJpkVe-Yrw-1q1q_Ai-TPMsYmjwi6DPgHfJT0HIlCZ-nAlerIKmc2pTTU19e3uyy-8zmebXG_rE-wwkLAevMWoW3NJiwkl46q", alt: "Tools Detail", category: "interior", title: "Premium Tools" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVnxn7Wz1qSws85JW55_CA_1OSXN_Xa8cxH0z4ZvXflc1_rKXl6AJxRBruq1vWmONMRUoxvj2R5ix1C43wQNsJGDFk_Omkvnyft2-4NIGTia6Z45Obi6D3I0Oi3TbakeoDiQn81_gMqI4Kudbb3OcryrzmhcqXeCIc17ewp9Tpg8mWDdwZETc2wHzKrc4z5hlT3PFoYpkwMz1bELZiDcg2-4GrAHj2abwA4U1AttzEt4DQD8K2TgFdR-crjoEv8_lZ96gnxF8jMHMb", alt: "Before Hair", category: "hair", title: "Dimensional Balayage" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe2ZL5rDlI821m1xZEtqr4rwDgbxfm3Oi_W3-oaVCac3o2uLL7H3nxmQjJ4fHPkYDAqZEhUEg9JqC2ZCIBgmX75hieZgs71wqfh4AiSzzja9AUqj6-bMBTZdl5itQx0c7wE8H-icRdZI8bgfcVmKSgg2BYb2plt8l5gbPUojqxIxpc_vhe6umdQgbfweu6x9KWh7JkWaJmoucH2e4Fg5_Izgbr2kIq8E4mR8hy4-qrKcXUNFGS67KUUHN7JTmtrsaPrK-SZn-HNxzB", alt: "Makeup Application", category: "makeup", title: "Flawless Finish" },
];

const categories = ["all", "hair", "makeup", "nails", "bridal", "interior"];
const INITIAL_COUNT = 8;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <main className="flex-grow pt-[80px] md:pt-[100px] pb-section-padding">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-6 md:px-gutter pt-8 md:pt-24 pb-stack-lg text-center">
        <span className="font-section-head text-section-head text-primary mb-stack-sm uppercase tracking-widest block">Curated Portfolio</span>
        <h1 className="font-h1-editorial text-[36px] md:text-h1-editorial text-on-background mb-stack-md leading-tight">The Urbanity Experience</h1>
        <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto font-light">
           A visual journey through our artistry. Explore our curated collection of transformations, editorial looks, and the refined ambiance of our salon.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-container-max mx-auto px-6 md:px-gutter pb-stack-lg">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-b border-surface-variant pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              className={`font-cta-label text-cta-label pb-2 tracking-widest uppercase transition-colors ${activeFilter === cat ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-container-max mx-auto px-4 md:px-gutter pb-section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[180px] md:auto-rows-[250px]">
          {displayed.map((item, i) => (
            <div key={i} className={`group relative overflow-hidden bg-surface-container cursor-pointer rounded-lg ${item.span || ''}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-3 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-cta-label text-[9px] md:text-cta-label text-primary uppercase tracking-widest mb-1 block">{item.category}</span>
                <h3 className="font-h2-editorial text-sm md:text-xl text-on-background">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="border border-primary text-primary font-cta-label text-cta-label px-8 py-3 hover:bg-primary/10 transition-all duration-300 tracking-[0.2em] uppercase rounded-DEFAULT inline-flex items-center gap-2"
            >
              Show More
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        )}

        {showAll && filtered.length > INITIAL_COUNT && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-on-surface-variant font-cta-label text-cta-label px-8 py-3 hover:text-primary transition-all duration-300 tracking-[0.2em] uppercase inline-flex items-center gap-2"
            >
              Show Less
              <span className="material-symbols-outlined text-sm">expand_less</span>
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
