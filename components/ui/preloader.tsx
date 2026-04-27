"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total animation duration before hiding preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // 3.2s total (0.3s delay + 1s logo + 0.5s hold + 0.8s text + 0.6s hold)

    return () => clearTimeout(timer);
  }, []);

  const text = "urbanity | salon";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Logo Reveal */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1.02 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1], // Custom cinematic easing
            }}
            className="relative flex flex-col items-center"
          >
            {/* Subtle glow behind logo */}
            <div className="absolute inset-0 bg-[#C9A84C]/10 blur-2xl rounded-full scale-150" />
            
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6">
              <Image
                src="/logo.png"
                alt="Urbanity Salon Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                priority
              />
            </div>
          </motion.div>

          {/* Text Reveal */}
          <motion.div 
            className="flex space-x-[2px] mt-2 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 1.6, // Wait for logo + hold
                  staggerChildren: 0.04, // Smooth left-to-right cascade
                }
              }
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                className="font-h1-editorial text-[14px] sm:text-[18px] tracking-[0.3em] uppercase text-[#e5e2e1]"
                variants={{
                  hidden: { opacity: 0, filter: "blur(4px)" },
                  visible: { 
                    opacity: 1, 
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
