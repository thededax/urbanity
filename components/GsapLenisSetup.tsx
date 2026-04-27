'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function GsapLenisSetup() {
  useEffect(() => {
    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    document.documentElement.classList.add('js-loaded');

    const setupAnimations = () => {
      // ============================================================
      // OPENING ENTRANCE — Nav only (hero is handled by Framer Motion)
      // ============================================================
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('nav', { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1);

      // ============================================================
      // SCROLL-TRIGGERED SECTION ANIMATIONS
      // ============================================================

      // --- Section headings (skip hero h1 — it uses Framer Motion) ---
      const scrollSections = document.querySelectorAll('section');
      scrollSections.forEach((section) => {
        const heading = section.querySelector('h2');
        if (heading) {
          gsap.fromTo(heading,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { trigger: heading, start: 'top 82%', once: true }
            }
          );
        }

        // Section subheadings (h3s within sections)
        const subheadings = section.querySelectorAll('h3');
        subheadings.forEach((sh) => {
          gsap.fromTo(sh,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
              scrollTrigger: { trigger: sh, start: 'top 82%', once: true }
            }
          );
        });

        // Section paragraphs
        const paras = section.querySelectorAll('p');
        paras.forEach((p) => {
          gsap.fromTo(p,
            { opacity: 0, y: 20 },
            {
              opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 85%', once: true }
            }
          );
        });

        // Section eyebrows (span.font-section-head)
        const eyebrows = section.querySelectorAll('.font-section-head');
        eyebrows.forEach((eb) => {
          gsap.fromTo(eb,
            { opacity: 0, y: 15 },
            {
              opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
              scrollTrigger: { trigger: eb, start: 'top 85%', once: true }
            }
          );
        });
      });

      // --- Signature Process Steps (alternating slide-in) ---
      const processSteps = document.querySelectorAll('.space-y-24 > div');
      processSteps.forEach((step, index) => {
        const direction = index % 2 === 0 ? -60 : 60;
        const textContent = step.querySelector(':scope > div:first-child');
        const imageContent = step.querySelector('.h-64')?.parentElement;
        const dot = step.querySelector('.rounded-full.ring-4');

        if (textContent) {
          gsap.fromTo(textContent,
            { opacity: 0, x: direction },
            {
              opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { trigger: step, start: 'top 75%', once: true }
            }
          );
        }

        if (imageContent) {
          gsap.fromTo(imageContent,
            { opacity: 0, x: -direction, scale: 0.95 },
            {
              opacity: 1, x: 0, scale: 1, duration: 0.9, delay: 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: step, start: 'top 75%', once: true }
            }
          );
        }

        if (dot) {
          gsap.fromTo(dot,
            { scale: 0 },
            {
              scale: 1, duration: 0.5, delay: 0.3, ease: 'back.out(1.7)',
              scrollTrigger: { trigger: step, start: 'top 75%', once: true }
            }
          );
        }
      });

      // --- Signature Process vertical connecting line grow ---
      const connectingLine = document.querySelector('.bg-gradient-to-b.from-transparent.via-primary\\/30');
      if (connectingLine) {
        gsap.fromTo(connectingLine,
          { scaleY: 0 },
          {
            scaleY: 1, ease: 'none',
            scrollTrigger: {
              trigger: connectingLine.parentElement,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1.5,
            }
          }
        );
      }

      // --- Atelier Shop product cards (staggered entrance with subtle rotation) ---
      const atelierGrid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-12');
      if (atelierGrid) {
        const cards = atelierGrid.querySelectorAll(':scope > article, :scope > div');
        gsap.fromTo(cards,
          { opacity: 0, y: 60, rotateX: 3 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.9, stagger: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: atelierGrid, start: 'top 78%', once: true }
          }
        );
      }

      // --- Testimonial section: parallax on portrait image ---
      const testimonialImage = document.querySelector('.aspect-\\[3\\/4\\]');
      if (testimonialImage) {
        gsap.fromTo(testimonialImage,
          { y: 60 },
          {
            y: -60, ease: 'none',
            scrollTrigger: {
              trigger: testimonialImage,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            }
          }
        );
      }

      // --- Testimonial quote reveal ---
      const testimonialQuote = document.querySelector('blockquote');
      if (testimonialQuote) {
        gsap.fromTo(testimonialQuote,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: testimonialQuote, start: 'top 78%', once: true }
          }
        );
      }

      // --- Social Gallery: staggered scale-up entrance ---
      const socialGrid = document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4');
      if (socialGrid) {
        const tiles = socialGrid.querySelectorAll(':scope > div');
        gsap.fromTo(tiles,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.7, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: socialGrid, start: 'top 80%', once: true }
          }
        );
      }

      // --- Footer gentle fade-in with column stagger ---
      const footer = document.querySelector('footer');
      if (footer) {
        const footerCols = footer.querySelectorAll('.grid > div');
        if (footerCols.length > 0) {
          gsap.fromTo(footerCols,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
              scrollTrigger: { trigger: footer, start: 'top 88%', once: true }
            }
          );
        } else {
          gsap.fromTo(footer,
            { opacity: 0, y: 20 },
            {
              opacity: 1, y: 0, duration: 0.6,
              scrollTrigger: { trigger: footer, start: 'top 88%', once: true }
            }
          );
        }
      }

      // --- Decorative section dividers: horizontal rules ---
      const dividers = document.querySelectorAll('.border-t, .w-12.h-\\[1px\\], .w-24.h-px, .w-16.h-px');
      dividers.forEach((divider) => {
        // Skip hero dividers
        if (divider.closest('header')) return;
        gsap.fromTo(divider,
          { scaleX: 0 },
          {
            scaleX: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: divider, start: 'top 88%', once: true }
          }
        );
      });

      // Refresh ScrollTrigger after fonts load
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);
    };

    // Execute animations
    setupAnimations();

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
