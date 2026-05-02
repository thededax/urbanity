"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  { icon: "content_cut", title: "Precision Haircut", desc: "Masterfully executed cuts tailored to your unique features and style.", price: "₹500+", category: "hair" },
  { icon: "face", title: "Hydra-Radiance Facial", desc: "Advanced hydration treatment for an instant, healthy glow and deep cellular renewal.", price: "₹2,500+", category: "skin" },
  { icon: "pan_tool", title: "Luxury Gel Manicure", desc: "Flawless, long-lasting color with meticulous cuticle care and hand massage.", price: "₹1,200+", category: "nails" },
  { icon: "brush", title: "Evening Glamour", desc: "High-definition makeup for special events, designed to look stunning in any light.", price: "₹3,500+", category: "makeup" },
  { icon: "spa", title: "Swedish Massage", desc: "Full-body relaxation therapy to melt away stress and improve circulation.", price: "₹4,000+", category: "body" },
  { icon: "waves", title: "Keratin Therapy", desc: "Advanced smoothing treatment for frizz-free, silky hair that lasts for months.", price: "₹6,000+", category: "hair" },
];

const categories = ["all", "hair", "skin", "nails", "makeup", "body"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? services : services.filter(s => s.category === activeFilter);

  return (
    <main className="pt-[100px] md:pt-[120px] pb-24 max-w-container-max mx-auto px-6 md:px-12 flex-grow">
      {/* Hero Section */}
      <motion.header 
        className="text-center py-section-padding mb-16 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-h1-editorial text-h1-editorial text-on-background mb-6">Our Services</h1>
        <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto">
          Discover a curated selection of premium treatments designed to elevate your natural beauty. Experience artistry in every detail.
        </p>
      </motion.header>

      {/* Sticky Filter */}
      <motion.div 
        className="sticky top-[80px] md:top-[100px] z-40 bg-background/90 backdrop-blur-md py-4 mb-16 border-b border-surface-container-high -mx-6 px-6 md:mx-0 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ul className="flex overflow-x-auto hide-scrollbar gap-8 md:justify-center items-center font-cta-label text-cta-label whitespace-nowrap">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveFilter(cat)}
                className={`pb-2 uppercase tracking-widest cursor-pointer transition-colors ${
                  activeFilter === cat 
                    ? 'text-primary-container border-b-2 border-primary-container' 
                    : 'text-on-surface-variant hover:text-primary-container'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Services Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {filtered.map((service, i) => (
            <motion.article 
              key={service.title} 
              variants={itemVariants} 
              className="bg-surface-variant p-8 card-glow flex flex-col justify-between group overflow-hidden relative min-h-[300px] hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary-container mb-6 text-3xl font-light icon-light">{service.icon}</span>
                <h3 className="font-section-head text-section-head text-on-background uppercase mb-4">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3">
                  {service.desc}
                </p>
              </div>
              <div className="relative z-10 flex justify-between items-end mt-8 border-t border-outline/20 pt-6">
                <span className="font-h2-editorial text-2xl text-primary-container">{service.price}</span>
                <Link href="/contact" className="font-cta-label text-cta-label text-on-background border border-primary-container px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">Book Now</Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Consultation Section */}
      <motion.section 
        className="mt-section-padding text-center bg-surface-container-high py-20 px-8 rounded-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-h2-editorial text-h2-editorial text-on-background mb-6">Need Advice?</h2>
          <p className="font-body-main text-body-main text-on-surface-variant mb-10">
            Unsure which treatment suits you best? Connect with our master stylists for a personalized consultation to curate your bespoke salon experience.
          </p>
          <Link href="https://wa.me/918578060606" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container font-cta-label text-cta-label px-8 py-4 rounded shimmer-hover transition-all">
            <span className="material-symbols-outlined icon-filled">chat</span>
            Consult via WhatsApp
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
