'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-8 sm:py-10 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-bold tracking-wide">
                <span className="text-white">ABSOLUTE</span>{' '}
                <span className="text-accent-red">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
              The Complete Health & Fitness Centre
            </p>
          </div>

          {/* Instagram */}
          <div className="flex justify-center">
            <Link
              href="https://instagram.com/absolutefit_jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-accent-red transition-colors duration-300 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">@absolutefit_jaipur</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Absolute Fitness.
            </p>
            <p className="text-gray-600 text-[10px] sm:text-xs mt-1">
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5 flex justify-center">
          <Link
            href="https://twitter.com/ShivamSspirit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group"
          >
            <span className="text-gray-600 text-[10px] sm:text-xs">Developed by</span>
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden ring-1 ring-accent-red/50 group-hover:ring-accent-red transition-all">
              <Image
                src="/clawshi.jpg"
                alt="Clawshi"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-accent-red text-[10px] sm:text-xs font-medium group-hover:text-white transition-colors">
              Clawshi
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
