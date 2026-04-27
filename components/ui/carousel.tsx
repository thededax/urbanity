'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  widthClass: string;
}

export function Carousel({ images }: { images: CarouselImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="px-6 md:px-gutter mb-12 max-w-container-max mx-auto flex justify-between items-end">
        <div className="flex flex-col gap-4">
          <span className="font-section-head text-primary uppercase tracking-[0.3em]">The Space</span>
          <h2 className="font-h2-editorial text-[32px] md:text-[40px] text-on-surface leading-tight">Curated Atmosphere</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors rounded-full" 
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined font-light">arrow_back</span>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors rounded-full" 
            aria-label="Next image"
          >
            <span className="material-symbols-outlined font-light">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-8 px-6 md:px-gutter overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory hide-scroll-bar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, i) => (
          <div key={i} className={`min-w-[80vw] ${img.widthClass} h-[400px] bg-surface-container relative snap-start rounded-lg overflow-hidden shrink-0`}>
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500  hover:mix-blend-normal"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </>
  );
}
