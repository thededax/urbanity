'use client';

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your request. We will contact you shortly.");
  };

  return (
    <main className="flex-grow pt-[100px] pb-section-padding md:pb-section-padding px-6 md:px-0">
      <div className="max-w-container-max mx-auto w-full">
        {/* Hero Section */}
        <section className="py-stack-lg mb-section-padding flex flex-col items-center justify-center text-center relative mt-12 md:mt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/5 via-background to-background -z-10 w-full h-[150%] pointer-events-none"></div>
          <h2 className="font-section-head text-section-head text-primary-container mb-stack-sm tracking-[0.3em] uppercase">Connect</h2>
          <h1 className="font-h1-editorial text-h1-editorial text-on-surface max-w-3xl leading-tight">Visit Us / Book Your Session</h1>
          <div className="w-16 h-px bg-primary-container/30 mt-stack-md"></div>
        </section>

        {/* Grid Layout for Contact Cards, Form, and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Info & Cards (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-stack-lg">
            {/* Address & Hours Block */}
            <div className="bg-[#141414] border border-[#C9A84C]/10 p-8 flex flex-col gap-stack-md relative overflow-hidden group rounded-sm">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent"></div>
              <h3 className="font-section-head text-section-head text-primary-container tracking-widest uppercase">The Salon</h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-xl mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div>
                  <p className="font-body-main text-body-main text-on-surface">Sumrit Mandal Complex</p>
                  <p className="font-body-main text-body-main text-on-surface-variant">Tilkamanjhi, Bhagalpur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-xl mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <div>
                  <p className="font-body-main text-body-main text-on-surface">Monday – Sunday</p>
                  <p className="font-body-main text-body-main text-on-surface-variant">10:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Cards (Bento Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Call Card */}
              <a href="tel:+918578060606" className="bg-[#141414] border border-[#C9A84C]/10 p-6 flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-background group-hover:border-[#C9A84C] transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary-container">call</span>
                  </div>
                  <div>
                    <p className="font-cta-label text-cta-label text-on-surface-variant mb-1">Call</p>
                    <p className="font-body-main text-body-main text-on-surface tracking-wider">+91 8578060606</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors duration-300 relative z-10">arrow_outward</span>
              </a>

              {/* WhatsApp Card */}
              <a href="https://wa.me/918578060606" target="_blank" rel="noopener noreferrer" className="bg-[#141414] border border-[#C9A84C]/10 p-6 flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-background group-hover:border-[#C9A84C] transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary-container">chat</span>
                  </div>
                  <div>
                    <p className="font-cta-label text-cta-label text-on-surface-variant mb-1">WhatsApp</p>
                    <p className="font-body-main text-body-main text-on-surface tracking-wider">+91 8578060606</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors duration-300 relative z-10">arrow_outward</span>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/urbanity_salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-[#141414] border border-[#C9A84C]/10 p-6 flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden sm:col-span-2 lg:col-span-1 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-background group-hover:border-[#C9A84C] transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary-container">photo_camera</span>
                  </div>
                  <div>
                    <p className="font-cta-label text-cta-label text-on-surface-variant mb-1">Instagram</p>
                    <p className="font-body-main text-body-main text-on-surface tracking-wider">@urbanitysalon</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors duration-300 relative z-10">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form & Map (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-stack-lg">
            {/* Booking Form */}
            <div className="bg-[#141414] p-8 md:p-12 relative overflow-hidden group rounded-sm">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="font-h2-editorial text-h2-editorial text-on-surface mb-stack-lg">Reserve Your Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="font-body-sm text-body-sm text-on-surface-variant block mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="Jane Doe" required className="w-full bg-transparent border-0 border-b border-[#353534] text-on-surface font-body-main text-body-main py-2 px-0 focus:ring-0 focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-surface-variant" />
                  </div>
                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="phone" className="font-body-sm text-body-sm text-on-surface-variant block mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" required className="w-full bg-transparent border-0 border-b border-[#353534] text-on-surface font-body-main text-body-main py-2 px-0 focus:ring-0 focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-surface-variant" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Service */}
                  <div className="relative border-b border-[#353534]">
                    <label htmlFor="service" className="font-body-sm text-body-sm text-on-surface-variant block mb-2">Service</label>
                    <select id="service" name="service" className="w-full bg-transparent border-0 text-on-surface font-body-main text-body-main py-2 px-0 focus:ring-0 focus:border-[#C9A84C] transition-colors duration-300 appearance-none">
                      <option value="" className="bg-surface text-on-surface">Select a service</option>
                      <option value="hair" className="bg-surface text-on-surface">Hair Styling & Color</option>
                      <option value="bridal" className="bg-surface text-on-surface">Bridal Package</option>
                      <option value="makeup" className="bg-surface text-on-surface">Makeup Application</option>
                      <option value="nails" className="bg-surface text-on-surface">Nail Care</option>
                      <option value="consultation" className="bg-surface text-on-surface">Consultation</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 bottom-2 text-on-surface-variant pointer-events-none">expand_more</span>
                  </div>
                  {/* Date */}
                  <div className="relative">
                    <label htmlFor="date" className="font-body-sm text-body-sm text-on-surface-variant block mb-2">Preferred Date</label>
                    <input type="date" id="date" name="date" className="w-full bg-transparent border-0 border-b border-[#353534] text-on-surface font-body-main text-body-main py-2 px-0 focus:ring-0 focus:border-[#C9A84C] transition-colors duration-300 [color-scheme:dark]" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="font-body-sm text-body-sm text-on-surface-variant block mb-2">Message (Optional)</label>
                  <textarea id="message" name="message" rows={3} placeholder="Any specific requests or details we should know?" className="w-full bg-transparent border-0 border-b border-[#353534] text-on-surface font-body-main text-body-main py-2 px-0 focus:ring-0 focus:border-[#C9A84C] transition-colors duration-300 resize-none placeholder:text-surface-variant"></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto bg-primary-container text-background px-12 py-4 rounded font-cta-label text-cta-label tracking-widest hover:bg-white transition-colors duration-500 relative overflow-hidden group/btn font-bold">
                    <span className="relative z-10">Request Booking</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                </div>
              </form>
            </div>

            {/* Map Image Placeholder */}
            <div className="w-full h-80 bg-[#141414] border border-[#C9A84C]/10 relative overflow-hidden group rounded-sm">
              <Image 
                src="https://picsum.photos/seed/map1/800/400" 
                alt="Map of Bhagalpur" 
                fill
                className="object-cover  group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <p className="font-cta-label text-cta-label text-primary-container tracking-widest">Bhagalpur Area</p>
                <div className="w-10 h-10 rounded-full bg-primary-container/20 backdrop-blur-sm border border-primary-container flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-primary-container rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
