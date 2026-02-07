'use client';

import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: {
      text: 'text-base sm:text-base md:text-lg',
      icon: 'w-8 h-8 sm:w-8 sm:h-8',
      iconText: 'text-[11px] sm:text-[11px]'
    },
    md: {
      text: 'text-lg sm:text-lg md:text-xl',
      icon: 'w-9 h-9 sm:w-9 sm:h-9',
      iconText: 'text-xs sm:text-xs'
    },
    lg: {
      text: 'text-xl sm:text-2xl md:text-3xl',
      icon: 'w-10 h-10 sm:w-10 sm:h-10',
      iconText: 'text-sm sm:text-sm'
    },
  };

  return (
    <Link href="/" className={`group flex items-center gap-2 sm:gap-2.5 ${className}`}>
      {/* Icon - Simple AF mark */}
      <div className={`${sizes[size].icon} rounded bg-accent-red flex items-center justify-center shadow-md`}>
        <span className={`text-white font-bold ${sizes[size].iconText}`}>AF</span>
      </div>

      {/* Text */}
      <div className="flex items-baseline">
        {/* Mobile: Show short version */}
        <span className={`${sizes[size].text} font-bold tracking-tight sm:hidden`}>
          <span className="text-white">A</span>
          <span className="text-accent-red">F</span>
        </span>

        {/* Tablet+: Show full version */}
        <span className={`${sizes[size].text} font-bold tracking-tight hidden sm:inline`}>
          <span className="text-white group-hover:text-white/90 transition-colors">ABSOLUTE</span>
          <span className="text-accent-red ml-1.5">FIT</span>
        </span>
      </div>
    </Link>
  );
}
