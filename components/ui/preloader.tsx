"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show preloader on first visit in this session
    if (sessionStorage.getItem("urbanity-loaded")) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("urbanity-loaded", "true");
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none">
          {/* Split Background Layers */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#080808] z-10"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#080808] z-10"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Logo & Content Container */}
          <div className="relative z-30 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-24 h-24 sm:w-32 sm:h-32"
            >
              <Image
                src="/logo.png"
                alt="Urbanity Salon Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                priority
              />
            </motion.div>

            {/* Subtle Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6"
            >
              <span className="font-h1-editorial text-[14px] sm:text-[18px] tracking-[0.5em] uppercase text-[#e5e2e1] opacity-60">
                urbanity | salon
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
