'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

interface AlternatingSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  darkBackground?: boolean;
  className?: string;
}

export default function AlternatingSection({
  title,
  children,
  imageSrc,
  imageAlt,
  imageOnRight = false,
  darkBackground = false,
  className = '',
}: AlternatingSectionProps) {
  const bgClass = darkBackground ? 'bg-navy-secondary' : 'bg-light-bg';
  const textClass = darkBackground ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-10 sm:py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
            imageOnRight ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={`relative h-56 sm:h-72 md:h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-2xl ${
              imageOnRight ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            {darkBackground && (
              <div className="absolute inset-0 bg-navy-dark/30" />
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: imageOnRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}
          >
            <SectionHeading title={title} light={darkBackground} />
            <div className={`${textClass} text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4`}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
