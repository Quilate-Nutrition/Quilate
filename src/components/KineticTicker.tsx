import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useMotion';

gsap.registerPlugin(ScrollTrigger);

export interface KineticTickerProps {
  items?: string[];
  speed?: number; // duration in seconds
  reverse?: boolean;
  className?: string;
  theme?: 'dark' | 'gold' | 'heritage';
}

export const KineticTicker: React.FC<KineticTickerProps> = ({
  items = [
    'ALFARROBA DO ALGARVE',
    'PURE GOLD NUTRITION',
    '100% NATURAL',
    'ZERO QUÍMICOS INDUSTRIAIS',
    'GEL ENERGÉTICO & BARRA PROTEICA',
    'HERANÇA PORTUGUESA',
    'FEITO PARA ATLETAS QUE VÃO MAIS LONGE',
  ],
  speed = 28,
  reverse = false,
  className = '',
  theme = 'dark',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Dynamically accelerate CSS animation playback rate on high scroll velocity
  useEffect(() => {
    if (reducedMotion || !containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    let animFrame: number;
    let targetRate = 1;
    let currentRate = 1;

    // Smoothly interpolate playback rate
    const updatePlayback = () => {
      currentRate += (targetRate - currentRate) * 0.1;
      if (Math.abs(currentRate - targetRate) > 0.01) {
        // Apply to any Web Animations API player on this element
        const animations = track.getAnimations();
        if (animations && animations.length > 0) {
          animations.forEach((anim) => {
            anim.playbackRate = currentRate;
          });
        }
      }
      animFrame = requestAnimationFrame(updatePlayback);
    };

    animFrame = requestAnimationFrame(updatePlayback);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        targetRate = gsap.utils.clamp(1, 2.8, 1 + velocity / 1000);
      },
    });

    return () => {
      cancelAnimationFrame(animFrame);
      st.kill();
    };
  }, [reducedMotion]);

  // Color themes
  const themeClasses = {
    dark: 'bg-[#24150D] text-[#FAF4EB] border-[#361B12]',
    gold: 'bg-[#C6AA7A] text-[#24150D] border-[#B88528]',
    heritage: 'bg-[#F4EDE2] text-[#361B12] border-[#E8DEC9]',
  }[theme];

  // Repeat items 3 times per half to ensure seamless coverage on any screen resolution (including 4K)
  const singleHalfItems = [...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden border-y py-3.5 select-none z-10 ${themeClasses} ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className={`flex w-max will-change-transform ${
          reverse ? 'ticker-track-right' : 'ticker-track-left'
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Track Half A */}
        <div className="flex shrink-0 items-center">
          {singleHalfItems.map((text, idx) => (
            <span key={`a-${idx}`} className="inline-flex items-center">
              <span className="font-condensed font-bold uppercase tracking-[0.25em] text-xs sm:text-sm whitespace-nowrap">
                {text}
              </span>
              <span className="mx-4 sm:mx-6 text-[10px] opacity-40 select-none">•</span>
            </span>
          ))}
        </div>

        {/* Track Half B (Exact Clone for 100% Mathematically Seamless Infinite Loop) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {singleHalfItems.map((text, idx) => (
            <span key={`b-${idx}`} className="inline-flex items-center">
              <span className="font-condensed font-bold uppercase tracking-[0.25em] text-xs sm:text-sm whitespace-nowrap">
                {text}
              </span>
              <span className="mx-4 sm:mx-6 text-[10px] opacity-40 select-none">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const V2KineticTicker = KineticTicker;
export type V2KineticTickerProps = KineticTickerProps;
