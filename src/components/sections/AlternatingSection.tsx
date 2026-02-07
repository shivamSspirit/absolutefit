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
  const textClass = darkBackground ? 'text-gray-200' : 'text-gray-700';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center ${
            imageOnRight ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={`relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-2xl ${
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
              <div className="absolute inset-0 bg-navy-dark/20" />
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
            <div className={`${textClass} text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-5 font-normal`}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
