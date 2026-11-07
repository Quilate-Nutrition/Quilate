import React from 'react';

interface LogoProps {
  className?: string;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({ className = '', withTagline = true, size = 'md' }) => {
  return (
    <div className={`inline-flex flex-col items-start leading-none select-none ${className}`}>
      <div className="relative inline-flex items-center">
        {/* The 3-leaf carob seed "K" symbol */}
        <span className="font-condensed font-extrabold tracking-tight text-[#F4EAD8] uppercase flex items-center"
          style={{
            fontSize: size === 'sm' ? '1.5rem' : size === 'md' ? '2.1rem' : size === 'lg' ? '3.2rem' : '4.5rem',
            letterSpacing: '0.04em'
          }}
        >
          QU
          {/* Letter I with the botanical K leaf crown */}
          <span className="relative inline-block mx-[1px]">
            <svg 
              className="absolute -top-[0.45em] left-1/2 -translate-x-1/2 w-[0.42em] h-[0.42em] text-[#D9A84A]" 
              viewBox="0 0 100 100" 
              fill="currentColor"
            >
              {/* Left curved stem leaf */}
              <path d="M38,20 C42,42 42,58 38,80 C48,60 48,40 38,20 Z" fill="#F4EAD8" />
              {/* Upper right leaf */}
              <path d="M46,46 C64,28 76,24 88,28 C74,40 64,50 46,46 Z" fill="#D9A84A" />
              {/* Lower right leaf */}
              <path d="M46,52 C64,54 74,66 88,78 C70,76 58,68 46,52 Z" fill="#E2B65A" />
            </svg>
            I
          </span>
          LATE
        </span>
      </div>

      {withTagline && (
        <span 
          className="font-script text-[#E2B65A] -mt-1 transform -rotate-1 origin-left"
          style={{
            fontSize: size === 'sm' ? '0.9rem' : size === 'md' ? '1.25rem' : size === 'lg' ? '1.8rem' : '2.4rem'
          }}
        >
          Pure Gold
        </span>
      )}
    </div>
  );
};

export const CarobLeafIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path d="M36,18 C40,42 40,58 36,82 C48,60 48,40 36,18 Z" fill="#F4EAD8" />
    <path d="M44,46 C64,26 78,22 90,26 C75,40 64,50 44,46 Z" fill="#D9A84A" />
    <path d="M44,52 C64,54 75,66 90,80 C71,78 58,70 44,52 Z" fill="#E2B65A" />
  </svg>
);
