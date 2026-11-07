import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}

export const useV2ReducedMotion = useReducedMotion;

export function useGsapContext(
  animationCreator: (ctx: gsap.Context) => void,
  scope?: RefObject<HTMLElement | null> | HTMLElement | null,
  deps: unknown[] = []
) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const targetScope = scope && 'current' in scope ? scope.current : scope;
    const ctx = gsap.context((self) => {
      animationCreator(self);
    }, targetScope || undefined);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...deps]);
}

export const useV2GsapContext = useGsapContext;

