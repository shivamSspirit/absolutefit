'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.heroGym}
          alt="Gym atmosphere"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/40 to-navy-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-transparent to-navy-dark/80" />
        {/* Red accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-red/20 blur-[150px] rounded-full" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-[1px] bg-gradient-to-b from-transparent via-accent-red to-transparent"
        />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-[1px] bg-gradient-to-b from-transparent via-accent-red to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
            ABSOLUTE
          </h1>
          <div className="relative inline-block">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-accent-red leading-none tracking-tight">
              FITNESS
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-1 left-0 right-0 h-1 md:h-1.5 bg-accent-red origin-left"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.2em] sm:tracking-widest uppercase mb-6 sm:mb-8 md:mb-10"
        >
          The Complete Health & Fitness Centre
        </motion.p>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light italic leading-relaxed">
            &ldquo;Your Body Can Stand Almost Anything.{' '}
            <span className="text-accent-red font-normal not-italic">It&apos;s Your Mind</span>{' '}
            You Have To Convince.&rdquo;
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link
            href="/programs"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-accent-red text-white font-bold text-sm sm:text-base tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-red-dark hover:shadow-lg hover:shadow-accent-red/30 text-center"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Link>
          <Link
            href="/about"
            className="group flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-medium text-sm sm:text-base tracking-wider uppercase hover:border-accent-red hover:text-accent-red transition-all duration-300"
          >
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Watch Story</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
      >
        <span className="text-white/50 text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-accent-red" />
        </motion.div>
      </motion.div>

      {/* Side Stats - Hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute left-4 xl:left-8 bottom-16 xl:bottom-20 hidden lg:block"
      >
        <div className="flex flex-col gap-4 xl:gap-6 text-left">
          <div>
            <p className="text-2xl xl:text-4xl font-bold text-white">500+</p>
            <p className="text-[10px] xl:text-xs text-gray-500 tracking-widest uppercase">Active Members</p>
          </div>
          <div>
            <p className="text-2xl xl:text-4xl font-bold text-white">15+</p>
            <p className="text-[10px] xl:text-xs text-gray-500 tracking-widest uppercase">Expert Trainers</p>
          </div>
        </div>
      </motion.div>

      {/* Side Social - Hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-4 xl:right-8 bottom-16 xl:bottom-20 hidden lg:block"
      >
        <Link
          href="https://instagram.com/absolutefit_jaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-accent-red transition-colors"
        >
          <span className="text-[10px] xl:text-xs tracking-widest uppercase">@absolutefit_jaipur</span>
        </Link>
      </motion.div>
    </section>
  );
}
