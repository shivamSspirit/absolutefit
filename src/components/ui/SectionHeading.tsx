'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-4 sm:mb-6 md:mb-8 ${alignClasses[align]} ${className}`}
    >
      <h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-body-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
