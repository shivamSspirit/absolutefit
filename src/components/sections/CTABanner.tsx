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
      className={`relative py-12 sm:py-16 md:py-20 lg:py-28 bg-navy-accent overflow-hidden ${className}`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          style={{ y }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white italic leading-relaxed"
        >
          &ldquo;{text}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
