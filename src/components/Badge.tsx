import React from 'react';

export interface BadgeProps {
  variant?: 'gold' | 'pulse' | 'wiggle' | 'heritage' | 'faint';
  label: string;
  icon?: React.ReactNode;
  sublabel?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  label,
  icon,
  sublabel,
  className = '',
}) => {
  const isWiggle = variant === 'wiggle';
  const isPulse = variant === 'pulse';

  const variantStyles = {
    gold: 'bg-[#24150D] text-[#F0C975] border-[#D9A84A]/30',
    pulse: 'bg-[#1A0F09] text-[#D9A84A] border-[#D9A84A]/40',
    wiggle: 'bg-[#24150D] text-[#F5EBDC] border-[#D9A84A]/50',
    heritage: 'bg-[#FAF3E8] text-[#1A0F09] border-[#E8D5BE]',
    faint: 'bg-[#1A0F09]/80 text-[#C4B29E] border-[#382116]',
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[0.5em] border text-xs font-condensed font-bold uppercase tracking-[0.2em] shadow-sm select-none ${variantStyles} ${
        isWiggle ? 'v2-is-wiggle' : ''
      } ${className}`}
    >
      {isPulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A84A] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9A84A]" />
        </span>
      )}

      {icon && <span className="shrink-0">{icon}</span>}

      <span>{label}</span>

      {sublabel && (
        <>
          <span className="text-[#382116]">•</span>
          <span className="text-[#C4B29E] font-medium tracking-normal">{sublabel}</span>
        </>
      )}
    </div>
  );
};

export const V2Badge = Badge;
export type V2BadgeProps = BadgeProps;

