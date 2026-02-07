'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center bg-navy-dark pt-20 sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.heroGym}
          alt="Gym atmosphere"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/50 to-navy-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-transparent to-navy-dark/90" />
        {/* Red accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[600px] sm:max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-accent-red/15 blur-[80px] sm:blur-[120px] md:blur-[150px] rounded-full" />
      </div>

      {/* Decorative Lines - Desktop only */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-[1px] bg-gradient-to-b from-transparent via-accent-red to-transparent"
        />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
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
          className="mb-3 sm:mb-4"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tight drop-shadow-lg">
            ABSOLUTE
          </h1>
          <div className="relative inline-block">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-accent-red leading-[0.9] tracking-tight drop-shadow-lg">
              FITNESS
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-accent-red origin-left"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 md:mb-10 font-medium"
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
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/95 font-light italic leading-relaxed">
            &ldquo;Your Body Can Stand Almost Anything.{' '}
            <span className="text-accent-red font-semibold not-italic">It&apos;s Your Mind</span>{' '}
            You Have To Convince.&rdquo;
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <Link
            href="/programs"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-accent-red text-white font-semibold text-sm sm:text-base tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-accent-red-dark hover:shadow-lg hover:shadow-accent-red/30 text-center rounded-sm"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Link>
          <Link
            href="/about"
            className="group flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white font-semibold text-sm sm:text-base tracking-wide uppercase hover:border-accent-red hover:text-accent-red transition-all duration-300 rounded-sm"
          >
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Watch Story</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2"
      >
        <span className="text-white/60 text-[10px] sm:text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-accent-red" />
        </motion.div>
      </motion.div>

      {/* Side Stats - Desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute left-6 xl:left-10 bottom-20 xl:bottom-24 hidden lg:block"
      >
        <div className="flex flex-col gap-5 xl:gap-6 text-left">
          <div>
            <p className="text-2xl xl:text-4xl font-bold text-white">500+</p>
            <p className="text-[10px] xl:text-xs text-gray-400 tracking-widest uppercase font-medium">Active Members</p>
          </div>
          <div>
            <p className="text-2xl xl:text-4xl font-bold text-white">15+</p>
            <p className="text-[10px] xl:text-xs text-gray-400 tracking-widest uppercase font-medium">Expert Trainers</p>
          </div>
        </div>
      </motion.div>

      {/* Side Social - Desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-6 xl:right-10 bottom-20 xl:bottom-24 hidden lg:block"
      >
        <Link
          href="https://instagram.com/absolutefit_jaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-accent-red transition-colors font-medium"
        >
          <span className="text-[10px] xl:text-xs tracking-widest uppercase">@absolutefit_jaipur</span>
        </Link>
      </motion.div>
    </section>
  );
}
