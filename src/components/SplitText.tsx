import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapContext, useReducedMotion } from '../hooks/useMotion';

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  stagger?: number;
  delay?: number;
  scrub?: boolean | number;
  triggerHook?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  tag: Tag = 'div',
  stagger = 0.04,
  delay = 0,
  scrub = false,
  triggerHook = 'top 85%',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  // Split text by words
  const words = children.split(' ');

  useGsapContext(
    () => {
      const container = containerRef.current;
      if (!container || reducedMotion) return;

      const wordSpans = container.querySelectorAll('.v2-split-word');
      if (!wordSpans.length) return;

      if (scrub) {
        gsap.fromTo(
          wordSpans,
          {
            yPercent: 120,
            opacity: 0,
            rotate: 2.5,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            stagger,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: triggerHook,
              end: 'bottom 60%',
              scrub: typeof scrub === 'number' ? scrub : 0.4,
            },
          }
        );
      } else {
        gsap.fromTo(
          wordSpans,
          {
            yPercent: 120,
            opacity: 0,
            rotate: 2,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.85,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: triggerHook,
              toggleActions: 'play none none none',
            },
          }
        );
      }
    },
    containerRef,
    [children, reducedMotion]
  );

  return (
    // @ts-expect-error - dynamic tag ref binding
    <Tag ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom mr-[0.26em] last:mr-0"
        >
          <span className="v2-split-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};



export const V2SplitText = SplitText;
export type V2SplitTextProps = SplitTextProps;
