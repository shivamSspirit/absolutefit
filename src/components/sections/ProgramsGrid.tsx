'use client';

import { motion } from 'framer-motion';
import PackageCard from '@/components/ui/PackageCard';
import { Package } from '@/types';
import { images } from '@/lib/images';

const packages: Package[] = [
  {
    id: 'drop-in',
    name: 'Drop-In Session',
    price: 500,
    image: images.package1,
    description: 'Single session access to all facilities',
  },
  {
    id: '5-session',
    name: '5-Session Pack',
    price: 2250,
    originalPrice: 2500,
    image: images.package2,
    description: 'Perfect for beginners',
  },
  {
    id: '10-session',
    name: '10-Session Pack',
    price: 4000,
    originalPrice: 5000,
    image: images.package3,
    description: 'Popular choice for regular gym-goers',
  },
  {
    id: '15-session',
    name: '15-Session Pack',
    price: 5500,
    originalPrice: 7500,
    image: images.package4,
    description: 'Great value for committed fitness enthusiasts',
  },
  {
    id: '20-session',
    name: '20-Session Pack',
    price: 7000,
    originalPrice: 10000,
    image: images.package5,
    description: 'Best savings for dedicated members',
  },
  {
    id: 'monthly',
    name: 'Monthly Unlimited',
    price: 3500,
    image: images.package6,
    description: 'Unlimited access for 30 days',
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-body-text mb-3 sm:mb-4">
            Our Membership & Training Packages
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Choose the package that fits your fitness goals. All packages include access to our
            state-of-the-art facilities and expert trainer support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
