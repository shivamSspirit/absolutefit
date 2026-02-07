'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface CTABannerProps {
  text: string;
  className?: string;
}

export default function CTABanner({ text, className = '' }: CTABannerProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className={`relative py-14 sm:py-18 md:py-24 lg:py-32 bg-navy-accent overflow-hidden ${className}`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-accent-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-accent-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.p
          style={{ y }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white italic leading-relaxed"
        >
          &ldquo;{text}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
