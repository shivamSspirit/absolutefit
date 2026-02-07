'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Package } from '@/types';

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        {pkg.originalPrice && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-accent-red text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            SAVE {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-body-text text-center mb-2">
          {pkg.name}
        </h3>

        <div className="text-center">
          {pkg.originalPrice ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400 line-through text-xs sm:text-sm">
                {formatPrice(pkg.originalPrice)}
              </span>
              <span className="text-lg sm:text-xl font-bold text-accent-red">
                {formatPrice(pkg.price)}
              </span>
            </div>
          ) : (
            <span className="text-lg sm:text-xl font-bold text-body-text">
              {formatPrice(pkg.price)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
