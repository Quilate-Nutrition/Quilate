import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'dark' | 'outline' | 'heritage' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: '0.5em' | '2em' | 'full';
  showDualIcon?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  rounded = '0.5em',
  showDualIcon = true,
  icon,
  children,
  className = '',
  as = 'button',
  href,
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-4 py-2 min-h-[38px] gap-2',
    md: 'text-sm px-6 py-3.5 min-h-[48px] gap-2.5',
    lg: 'text-base sm:text-lg px-8 py-4 min-h-[56px] gap-3',
  }[size];

  // Border radius classes
  const roundedClasses = {
    '0.5em': 'rounded-[0.5em]',
    '2em': 'rounded-[2em]',
    'full': 'rounded-full',
  }[rounded];

  // Variant classes
  const variantClasses = {
    gold: 'bg-[#C6AA7A] text-[#24150D] font-condensed font-bold uppercase tracking-wider shadow-md shadow-[#C6AA7A]/25 hover:bg-[#D4B27A] border border-[#B88528]',
    dark: 'bg-[#361B12] text-[#FAF4EB] font-condensed font-bold uppercase tracking-wider border border-[#361B12] hover:bg-[#452D23] shadow-lg shadow-[#361B12]/20',
    outline: 'bg-transparent text-[#361B12] font-condensed font-bold uppercase tracking-wider border border-[#361B12] hover:bg-[#361B12]/5',
    heritage: 'bg-[#FFFFFF] text-[#361B12] font-condensed font-bold uppercase tracking-wider border border-[#E8DEC9] hover:bg-[#F4EDE2] shadow-sm',
    ghost: 'bg-transparent text-[#594738] font-condensed font-semibold uppercase tracking-wider hover:text-[#361B12]',
  }[variant];

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {icon ? (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      ) : showDualIcon && variant !== 'ghost' ? (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  const combinedClasses = `inline-flex items-center justify-center font-sans transition-all duration-300 active:scale-95 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88528] ${sizeClasses} ${roundedClasses} ${variantClasses} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export const V2Button = Button;
export type V2ButtonProps = ButtonProps;

