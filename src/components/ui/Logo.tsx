'use client';

import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: {
      text: 'text-base sm:text-lg',
      compact: 'text-lg',
      icon: 'w-5 h-5 sm:w-6 sm:h-6'
    },
    md: {
      text: 'text-lg sm:text-xl',
      compact: 'text-xl',
      icon: 'w-6 h-6 sm:w-7 sm:h-7'
    },
    lg: {
      text: 'text-2xl sm:text-3xl',
      compact: 'text-2xl',
      icon: 'w-8 h-8 sm:w-9 sm:h-9'
    },
  };

  return (
    <Link href="/" className={`group flex items-center gap-1.5 sm:gap-2 ${className}`}>
      {/* Icon - Simple AF mark */}
      <div className={`${sizes[size].icon} rounded bg-accent-red flex items-center justify-center`}>
        <span className="text-white font-bold text-[10px] sm:text-xs">AF</span>
      </div>

      {/* Text - Hidden on very small screens, compact on small, full on medium+ */}
      <div className="flex items-baseline">
        {/* Mobile: Show short version */}
        <span className={`${sizes[size].text} font-bold tracking-tight sm:hidden`}>
          <span className="text-white">A</span>
          <span className="text-accent-red">F</span>
        </span>

        {/* Tablet+: Show full version */}
        <span className={`${sizes[size].text} font-bold tracking-tight hidden sm:inline`}>
          <span className="text-white group-hover:text-white/90 transition-colors">ABSOLUTE</span>
          <span className="text-accent-red ml-1">FIT</span>
        </span>
      </div>
    </Link>
  );
}
