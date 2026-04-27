"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image 
            src="https://i.ibb.co/dwfWDqpj/Chat-GPT-Image-Apr-28-2026-12-58-09-AM.png" 
            alt="Premium salon interior with luxurious ambiance" 
            fill
            className="object-cover" 
            referrerPolicy="no-referrer"
            priority
          />
          {/* Enhanced gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-[#131313]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/90 via-[#131313]/20 to-[#131313]/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#131313_100%)] opacity-40"></div>
        </motion.div>

        {/* Location Badge — Bhagalpur Premium Positioning */}
        <motion.div 
          className="absolute top-32 left-12 z-20 hidden md:flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          <span className="font-cta-label text-[10px] text-on-surface tracking-[0.2em] uppercase">Bhagalpur&apos;s Premium Salon Experience</span>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center md:items-start gap-8">
          <motion.div 
            className="flex flex-col gap-5 max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <span className="font-section-head text-section-head text-primary tracking-[0.3em] uppercase">URBANITY SALON &amp; LOUNGE</span>
            <h1 className="font-h1-editorial text-h1-editorial text-on-background leading-tight">
              Redefine Your <br/>
              <span className="italic text-primary">Elegance</span>
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant max-w-lg mt-2 font-light leading-relaxed">
              Trusted by 2,500+ clients — experience artistry, precision, and luxury that elevates your natural beauty. Every visit, a masterpiece.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col items-center sm:items-start gap-2">
              <Link href="/contact" className="bg-primary text-on-primary font-cta-label text-cta-label px-10 py-5 rounded-DEFAULT shimmer-btn cta-glow tracking-[0.15em] w-full sm:w-auto text-center inline-block">
                Book Appointment
              </Link>
              <span className="urgency-label font-body-main">Limited Slots Available Today</span>
            </div>
            <Link href="/services" className="text-on-surface-variant font-cta-label text-cta-label px-6 py-5 hover:text-primary transition-colors w-full sm:w-auto text-center tracking-[0.15em] inline-flex items-center justify-center gap-2 group">
              View Services <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/bridal" className="border border-white/15 text-on-surface-variant font-cta-label text-[10px] px-6 py-3 rounded-DEFAULT hover:border-primary hover:text-primary transition-all uppercase tracking-[0.15em] flex-1 sm:flex-none text-center inline-block">
              Bridal Studio
            </Link>
            <Link href="/gallery" className="border border-white/15 text-on-surface-variant font-cta-label text-[10px] px-6 py-3 rounded-DEFAULT hover:border-primary hover:text-primary transition-all uppercase tracking-[0.15em] flex-1 sm:flex-none text-center inline-block">
              Gallery
            </Link>
            <Link href="/about" className="border border-white/15 text-on-surface-variant font-cta-label text-[10px] px-6 py-3 rounded-DEFAULT hover:border-primary hover:text-primary transition-all uppercase tracking-[0.15em] flex-1 sm:flex-none text-center inline-block">
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Rating Strip — Enhanced Trust Signal */}
        <motion.div 
          className="absolute bottom-10 left-0 w-full z-20 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="flex items-center gap-6 py-4 border-t border-white/10">
              <div className="flex -space-x-3">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERiM8Tev2_qA3S7n6EeXkT0Dq5t4qBgtgsV0KBOjPI6_D8u-SX9-5zFIzeY2JvfulM11NmKt4nFihBf5awB2KeA-9yTfzQOhb91S6sPoEpLQ8W4Bib4lE5gu_ZsO-fZ0KCpR1FiLT_HVwdzEAbU4O9xcee-SIZXKrQALKQdJpHMDPv-A906-zras0-DHT9Sps-icyBik3_idFPX-fuaZ12Z77rnCkEw9fFNsmMoQwvtolTQJTcRhG4hg3_BFve-hbyT-GmJJfd5gC" alt="user" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-[#131313] object-cover" referrerPolicy="no-referrer" />
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzyhOmsm-QTvRK0r0qKbnhy4gG67KFAa1vGp_pl5UHA-4h1rkYRknwBpfGYWG6XnfK8h_T33kfnq1KwuYnOYiwfPGuApgC-718SNEx7WK-p73Ao5F8ORrhPiFuLAdYHAt78LcJb9i27BGNOLqTeWoomSY9wQZ91hzIV5OmB4fIlrq1PfH5cVa19yBiZkpH4PGqI6DbEEz4VI3Yrx1DBFpwI82jVBQX3NoU5b0lW5h8IiD6O6rZauldslFJdGiLZexjuqzUnxMttqLw" alt="user" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-[#131313] object-cover" referrerPolicy="no-referrer" />
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbi5uiG7xzbuU1t1QJ7i2bpa4_wpe51ZvvmJWLkaDUaMxZO999t6VTJHgQb_HTRhBfRQnRv2nqRT89PuwqzmAuxp_1t_TyKY1KKzZIH08lW1saFCbxTfgI8zNg7XKmIqPtd-69UPJypdMJ0qDRFdQWSPkaWv_W4pv1ukVpArXTNfDzb-HyLLZg7fxBtr5S_hakat2vrV4-XvZnkmQvJSKq7bbnehSEVhxKsjDWUHKofYU-0eqwMjg4B-LS_7Y33j0GD9N7jUbMr4bA" alt="user" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-[#131313] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5 star-pulse">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="text-[11px] text-on-surface-variant font-cta-label tracking-[0.15em] uppercase">4.9/5 Rating</span>
                <span className="text-on-surface-variant/30">•</span>
                <span className="text-[11px] text-on-surface-variant font-cta-label tracking-[0.15em] uppercase">2,500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* The Atelier Shop */}
      <section className="py-section-padding px-6">
        <motion.div 
          className="max-w-container-max mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-stack-md">
            <div className="max-w-lg">
              <span className="font-section-head text-section-head text-primary block mb-stack-sm uppercase">Curated Collection</span>
              <h2 className="font-h2-editorial text-h2-editorial text-on-background">The Atelier Shop</h2>
            </div>
            <Link href="/services" className="font-cta-label text-cta-label text-primary hover:text-primary-fixed transition-colors flex items-center gap-2 uppercase">
              Explore Full Range <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 }
            }}
          >
            {/* Featured Product (Spans 8 cols) */}
            <motion.article 
              className="md:col-span-8 group relative bg-surface-container-low rounded-lg overflow-hidden card-glow-hover transition-all duration-500 h-[500px]"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU3Bj8k_u9yzYse3MSMm1u49F1s-T8UgdtmzfJy9d2Vsv4mr55Ky1gB04Wq9Cz8tf40su-slxGzo6kNxogcMSe1BlaRLscoktNwWR6sJGe-DOi7t_VmM9I84dKT8WqcyPoHVoV11FSCcM3_2FRO0WTgWM8Jfx37DLor-rcBrhfo0Evow49FbG-0aVvES2zKsxg2vB3C7rvdEm7oteM4mFTlew8HkCAzzQL7sEIeb7OfnNyxco5kfm8W6iB0RanvulPMvumSXL2Bwo" 
                alt="Featured premium hair oil" 
                fill
                className="object-cover group-hover:opacity-80 transition-opacity duration-700 opacity-90" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <h3 className="font-h2-editorial text-3xl text-on-background mb-2">Noir Elixir</h3>
                  <p className="font-body-main text-sm text-on-surface-variant max-w-sm">Signature restorative hair oil crafted with rare botanicals and infused with liquid amber.</p>
                </div>
                <Link href="/contact" className="font-cta-label text-cta-label px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors uppercase rounded-DEFAULT whitespace-nowrap inline-block">
                  Shop — $120
                </Link>
              </div>
            </motion.article>

            {/* Secondary Product Stack (Spans 4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-gutter h-[500px]">
              <motion.article 
                className="flex-1 group relative bg-surface-container-low rounded-lg overflow-hidden card-glow-hover transition-all duration-500"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOhFFmKjs7i-Bcgpu8S4vvW9dgAENGpLDCs7f4RSniALCzIWt7d691xorn9MrS8Abd5i1koCc6IoNgGyyQHirrOUT8iapV2Qy8iKwd0ysSbUKWuTi2VnLt2qZwlM1hQKvzVLLUr_irqm2kNGdCe__3XEk9V71V7qDsjDgDFxAekhJ7SibrZRYa-TWfRDioYuLVpLc0iqc4S8S4pXEMY_-5422qpQhQMFDK8We0Q77ybCG7MqBjcv8-6TH7OCaZYBrH0pSBNIrHwfUC" 
                  alt="Styling Cream" 
                  fill
                  className="object-cover  group-hover:opacity-70 transition-opacity duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-h2-editorial text-2xl text-on-background mb-1">Matte Clay</h3>
                  <p className="font-body-main text-xs text-on-surface-variant mb-4">Sculpting finish.</p>
                  <span className="font-cta-label text-xs text-primary">$45</span>
                </div>
              </motion.article>
              <motion.article 
                className="flex-1 group relative bg-surface-container-low rounded-lg overflow-hidden card-glow-hover transition-all duration-500"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpELuncbgZ5k7JfWN9sAL-1uEC_fDC9QjCv8qKA6yHWMMlD809j4_MLCPIX30yXWZEymAt9rTTDk5sTc_b3dTZoWFOAox0PgoycspUZc1fbNEsRkHJWce0889GwrWEpkLMR7v1Y1c7JLGJQWpBHkdJmSLZPGc_Rau2nVCgnQ5_biz2064opiFyAJ_mIam8TiXPeBXrxdTnMFsRWrlOkE1ZBGV2J8YbB-A7cA-fhX3xhVzBTmFfRkNrV05JcmItJdbWR2-AEztv7iuq" 
                  alt="Botanical Wash" 
                  fill
                  className="object-cover opacity-50  group-hover:opacity-70 transition-opacity duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-h2-editorial text-2xl text-on-background mb-1">Purifying Wash</h3>
                  <p className="font-body-main text-xs text-on-surface-variant mb-4">Daily cleanse.</p>
                  <span className="font-cta-label text-xs text-primary">$60</span>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Signature Process */}
      <section className="py-section-padding px-6 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-section-padding">
            <span className="font-section-head text-section-head text-primary block mb-stack-sm uppercase">The Journey</span>
            <h2 className="font-h2-editorial text-h2-editorial text-on-background">The Signature Process</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line connecting steps */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform md:-translate-x-1/2 hidden sm:block"></div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="md:w-1/2 flex justify-end md:pr-12 w-full text-left md:text-right">
                  <div>
                    <span className="font-cta-label text-primary mb-2 block">Phase 01</span>
                    <h3 className="font-h2-editorial text-3xl text-on-background mb-4">The Consultation</h3>
                    <p className="font-body-main text-on-surface-variant">An intimate dialogue to decode your personal aesthetic and architectural facial structure before scissors touch hair.</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 hidden sm:block shadow-[0_0_15px_rgba(230,195,100,0.5)]"></div>
                <div className="md:w-1/2 md:pl-12 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-64 bg-surface-container-low rounded-lg overflow-hidden relative">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHASK7qOj12V65qXvlMyYC2iNMWsOLyaAeyE76nk_0nWiicyo38jzuPdcp_LVpylTAd-6pCRCDdzp1f9PIeTcytUwKJrvKEfEUto1a_2H87_loJnGs-OPKnMnK-ot1oZi5KyWyzK-KT6hf3hQWZPc93-x8_rJZEsGvAo6DLLAReWKxvcxS5syQ3kSVW9nDPwABR0tIV2BaJS9t6e9sc4gwcrjWJGFrGtLVBhZea5pCpvIdO5ONw5cxg0VzJfad99ENcv1D5j75Ekv" 
                      alt="Consultation" 
                      fill
                      className="object-cover mix-blend-luminosity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="md:w-1/2 flex justify-start md:pl-12 w-full text-left">
                  <div>
                    <span className="font-cta-label text-primary mb-2 block">Phase 02</span>
                    <h3 className="font-h2-editorial text-3xl text-on-background mb-4">The Ritual</h3>
                    <p className="font-body-main text-on-surface-variant">A sensorial cleansing experience utilizing our bespoke Atelier products, focusing on scalp health and complete relaxation.</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-surface-variant rounded-full ring-4 ring-background z-10 hidden sm:block group-hover:bg-primary transition-colors"></div>
                <div className="md:w-1/2 md:pr-12 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-64 bg-surface-container-low rounded-lg overflow-hidden relative">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1I8pumfzbtkWuIOgX35symE5-SSMgjDOz-SpXP8xaojDqic2kw9ixzrDFm_vN1RJLx9ZHArH6Tj5MD7Snpd4M7TdBcidFaOdkxh9yyyy-HIcusMst3gDXwGWIHJh3NZp2RA-w11IEaAmZ-0Xve-imxhW2MwtuGa2nUJh09JV7UDx5koDIgbBfQmY_xfkCRnN_xolcdtu0plgRMqtwhtT7G5wZ9ov4imebvOiLS9nh0kgdMpc5cO6FsY2yMmwhf7h18baZxLzsHAka" 
                      alt="The Ritual Wash" 
                      fill
                      className="object-cover mix-blend-luminosity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="md:w-1/2 flex justify-end md:pr-12 w-full text-left md:text-right">
                  <div>
                    <span className="font-cta-label text-primary mb-2 block">Phase 03</span>
                    <h3 className="font-h2-editorial text-3xl text-on-background mb-4">Transformation</h3>
                    <p className="font-body-main text-on-surface-variant">Precision cutting and structural styling tailored to enhance your natural movement, sealed with a signature finish.</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-surface-variant rounded-full ring-4 ring-background z-10 hidden sm:block group-hover:bg-primary transition-colors"></div>
                <div className="md:w-1/2 md:pl-12 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-64 bg-surface-container-low rounded-lg overflow-hidden relative">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_lpy4VjhY0AMbKAUYENzJWw_0T7tfIZIK10Vzo5-ZJBOOjT6EtMOeGeSe40J5-k4xZECDV4C9zEpx8YcPIi-4Ov0-IIqDQXhcB_QZKydhyUyQQodhs0hMtMrTcan2i-KdRj6x8DN8Qwe1q96ByQKqA8uzEqXnNfytzGziAaHHelhgP_Dxmqvek1MiU8JYzvp-AyLT5NepWVoG7eA_DzgCaA0X7mRXyYQnFH4XSOwdJXoGQfZI7AmfLJ9o2gBcFeEXk1MJw8shSDP" 
                      alt="Transformation Haircut" 
                      fill
                      className="object-cover mix-blend-luminosity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Urbanity (Testimonials) */}
      <section className="py-section-padding px-6">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image 
                src="https://i.ibb.co/d4pJKsDN/Chat-GPT-Image-Apr-28-2026-12-31-58-AM.png" 
                alt="Client Portrait" 
                fill
                className="object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <span className="font-section-head text-section-head text-primary block mb-stack-lg uppercase">Voices of Urbanity</span>
              <blockquote className="mb-12 relative">
                <span className="absolute -top-10 -left-6 text-7xl font-serif text-surface-bright leading-none opacity-50 select-none">&quot;</span>
                <p className="font-h2-editorial text-[32px] md:text-h2-editorial text-on-background leading-tight relative z-10">
                  They don&apos;t just alter your hair; they architect a silhouette that completely reframes how the world perceives you. An absolute masterclass in quiet luxury.
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-primary"></div>
                <div>
                  <h4 className="font-cta-label text-cta-label text-on-surface uppercase">Eleanor V.</h4>
                  <p className="font-body-main text-sm text-on-surface-variant">Editorial Director</p>
                </div>
              </div>
              
              {/* Navigation dots fake */}
              <div className="flex gap-2 mt-16">
                <div className="w-8 h-1 bg-primary rounded-full"></div>
                <div className="w-8 h-1 bg-surface-bright rounded-full"></div>
                <div className="w-8 h-1 bg-surface-bright rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Social */}
      <section className="py-section-padding bg-surface-container-lowest">
        <motion.div 
          className="max-w-container-max mx-auto px-6 mb-12 flex justify-between items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className="font-section-head text-section-head text-primary block mb-stack-sm uppercase">Social</span>
            <h2 className="font-h2-editorial text-h2-editorial text-on-background">Follow the Journey</h2>
          </div>
          <span className="font-cta-label text-cta-label text-on-surface flex items-center gap-2 uppercase">
            @UrbanityAtelier
          </span>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 px-2 md:px-6 max-w-container-max mx-auto">
          <div className="group relative aspect-square block overflow-hidden bg-surface">
            <Image 
              src="https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png" 
              alt="Gallery image" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="group relative aspect-square block overflow-hidden bg-surface md:col-span-2 md:row-span-2">
            <Image 
              src="https://i.ibb.co/cc7W5wWV/Chat-GPT-Image-Apr-28-2026-12-25-17-AM.png" 
              alt="Gallery image" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="group relative aspect-square block overflow-hidden bg-surface">
            <Image 
              src="https://i.ibb.co/7NjTLpFP/Chat-GPT-Image-Apr-27-2026-10-16-43-PM.png" 
              alt="Gallery image" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="group relative aspect-square block overflow-hidden bg-surface">
            <Image 
              src="https://i.ibb.co/ycKGwDwr/Chat-GPT-Image-Apr-27-2026-10-16-59-PM.png" 
              alt="Gallery image" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="group relative aspect-square block overflow-hidden bg-surface">
            <Image 
              src="https://i.ibb.co/qMrGgvMZ/Chat-GPT-Image-Apr-28-2026-12-22-32-AM.png" 
              alt="Gallery image" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
