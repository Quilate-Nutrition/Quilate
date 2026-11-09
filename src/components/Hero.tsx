import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Language } from '../types';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// CONFIGURATION & TUNING CONSTANTS
// ============================================================================
// SCRUB_SMOOTHING: GSAP scrub smoothing factor when scrolling UP in reverse
const SCRUB_SMOOTHING = 0.35;

import { getAssetUrl } from '../utils/asset';

// ASSET PATHS
const VIDEO_SRC = getAssetUrl('assets/hero.mp4');
const POSTER_SRC = getAssetUrl('assets/hero_poster.webp');

interface HeroProps {
  language: Language;
  onExploreProducts: () => void;
  onOurStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreProducts, onOurStory }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoLoadError, setVideoLoadError] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // High-performance seeking coordination refs
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const isAmbientPlayingRef = useRef<boolean>(true);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // --------------------------------------------------------------------------
  // 1. Deferred Video Loading Strategy:
  //    - Does not request hero.mp4 during critical page load
  //    - Waits for window 'load' event AND main-thread idle callback
  //    - Respects prefers-reduced-motion and Save-Data / 2G mobile connections
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // A. Accessibility: Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // B. Mobile Network Safeguard: Honor Save-Data and slow 2G connections
    const nav = navigator as unknown as {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    };
    if (nav.connection) {
      if (nav.connection.saveData === true) {
        return; // User has data saver enabled; keep static poster
      }
      if (nav.connection.effectiveType === 'slow-2g' || nav.connection.effectiveType === '2g') {
        return; // Slow cellular connection; preserve user bandwidth
      }
    }

    // C. Deferral until window 'load' + requestIdleCallback
    let isCancelled = false;
    let idleHandle: number | ReturnType<typeof setTimeout> | null = null;

    const scheduleDeferredVideo = () => {
      const attachVideoSource = () => {
        if (!isCancelled) {
          setVideoSrc(VIDEO_SRC);
        }
      };

      if ('requestIdleCallback' in window) {
        idleHandle = (window as unknown as {
          requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number;
        }).requestIdleCallback(attachVideoSource, { timeout: 2500 });
      } else {
        idleHandle = setTimeout(attachVideoSource, 400);
      }
    };

    if (document.readyState === 'complete') {
      scheduleDeferredVideo();
    } else {
      const handleWindowLoad = () => {
        scheduleDeferredVideo();
      };
      window.addEventListener('load', handleWindowLoad, { once: true });

      return () => {
        isCancelled = true;
        window.removeEventListener('load', handleWindowLoad);
        if (idleHandle !== null) {
          if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
            (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleHandle);
          } else {
            clearTimeout(idleHandle as ReturnType<typeof setTimeout>);
          }
        }
      };
    }

    return () => {
      isCancelled = true;
      if (idleHandle !== null) {
        if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleHandle);
        } else {
          clearTimeout(idleHandle as ReturnType<typeof setTimeout>);
        }
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // 2. Ambient Autoplay vs Interactive Scroll Control
  // --------------------------------------------------------------------------
  const startAmbientPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.src || video.readyState < 1) return;
    isAmbientPlayingRef.current = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy deferred until user interaction
      });
    }
  }, []);

  const pauseAmbientPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    isAmbientPlayingRef.current = false;
    video.loop = false;
    video.pause();
  }, []);

  // --------------------------------------------------------------------------
  // 3. Core Scrub Controller: Backpressure-Controlled Video Seeking
  // --------------------------------------------------------------------------
  const applyVideoTime = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.src || video.readyState < 1 || !video.duration || isNaN(video.duration)) {
      return;
    }

    const duration = video.duration;
    const maxTarget = Math.max(0, duration - 0.04);
    const safeTarget = Math.min(Math.max(0, targetTimeRef.current), maxTarget);
    
    video.pause();
    isSeekingRef.current = true;
    video.currentTime = safeTarget;
  }, []);

  // --------------------------------------------------------------------------
  // 4. Video Lifecycle & Event Handlers (Active only after videoSrc is assigned)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (!isAmbientPlayingRef.current) {
        const duration = video.duration || 10;
        const maxTarget = Math.max(0, duration - 0.04);
        const safeTarget = Math.min(Math.max(0, targetTimeRef.current), maxTarget);
        if (Math.abs(video.currentTime - safeTarget) > 0.015) {
          applyVideoTime();
        }
      }
    };

    const handleLoadedMetadata = () => {
      setIsVideoReady(true);
      setVideoLoadError(false);
      startAmbientPlayback();
      ScrollTrigger.refresh();
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
      setVideoLoadError(false);
      startAmbientPlayback();
    };

    const handleError = () => {
      setVideoLoadError(true);
      setIsVideoReady(false);
    };

    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.load();
    }

    return () => {
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      const resumeTimeout = resumeTimeoutRef.current;
      if (resumeTimeout) clearTimeout(resumeTimeout);
      // oxlint-disable-next-line react-hooks/exhaustive-deps
      const rafId = rafIdRef.current;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [videoSrc, applyVideoTime, startAmbientPlayback]);

  // --------------------------------------------------------------------------
  // 5. Viewport Visibility Management (Pause off-screen to preserve battery & CPU)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const heroEl = heroRef.current;
    const video = videoRef.current;
    if (!heroEl || !video || !isVideoReady || videoLoadError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          if (!video.paused) {
            pauseAmbientPlayback();
          }
        } else {
          if (video.paused && isAmbientPlayingRef.current) {
            startAmbientPlayback();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isVideoReady, videoLoadError, pauseAmbientPlayback, startAmbientPlayback]);

  // --------------------------------------------------------------------------
  // 3. Mouse Parallax for Subtle Depth on Floating Elements
  // --------------------------------------------------------------------------
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --------------------------------------------------------------------------
  // 4. GSAP ScrollTrigger: Natural Scroll Down & Reverse Video on Scroll UP
  // --------------------------------------------------------------------------
  useEffect(() => {
    const heroEl = heroRef.current;
    const video = videoRef.current;
    if (!heroEl) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // Natural page scrolling on scroll down, video rewinds only on scroll UP
      ScrollTrigger.create({
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: SCRUB_SMOOTHING,
        onUpdate: (self) => {
          const isScrollingUp = self.direction === -1;
          const p = self.progress;

          if (isScrollingUp) {
            // SCROLL UP: Animate / scrub backwards frame-by-frame
            if (resumeTimeoutRef.current) {
              clearTimeout(resumeTimeoutRef.current);
              resumeTimeoutRef.current = null;
            }
            if (isAmbientPlayingRef.current) {
              pauseAmbientPlayback();
            }

            const duration = video?.duration || 10;
            targetTimeRef.current = Math.max(0, p * duration);
            applyVideoTime();
          } else {
            // SCROLL DOWN: No animation override!
            // Video plays forward naturally at 1x speed, page scrolls freely
            if (!isAmbientPlayingRef.current && (!video || video.paused)) {
              startAmbientPlayback();
            }
          }

          // When reaching the top, resume ambient loop
          if (p <= 0.02 && !isAmbientPlayingRef.current) {
            startAmbientPlayback();
          }
        },
      });
    }, heroRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [applyVideoTime, isVideoReady, pauseAmbientPlayback, startAmbientPlayback]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#120905] select-none"
    >
      {/* =====================================================================
          1. CINEMATIC SCROLL-CONTROLLED VIDEO & POSTER FALLBACK
          ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Static Poster Fallback (Loaded immediately, fades once video metadata is ready) */}
        <img
          src={POSTER_SRC}
          alt={language === 'pt' ? 'Embalagem de gel e barra proteica Quilate em fundo escuro com alfarroba' : 'Quílate energy gel and protein bar packshot with carob on dark background'}
          width="1280"
          height="720"
          fetchPriority="high"
          decoding="sync"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoReady && !videoLoadError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            objectPosition: 'center center',
          }}
        />

        {/* Scroll-Scrubbed & Ambient Autoplay HTML5 Video Element (Completely deferred) */}
        <video
          ref={videoRef}
          src={videoSrc || undefined}
          poster={POSTER_SRC}
          muted
          loop
          playsInline
          preload={videoSrc ? 'auto' : 'none'}
          aria-label={language === 'pt' ? 'Vídeo cinemático do produto Quilate' : 'Quilate cinematic product video'}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isVideoReady && !videoLoadError ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            objectPosition: 'center center',
            filter: 'contrast(1.08) brightness(1.02)',
          }}
        />

        {/* Ambient Subtle Golden Lighting / Hearth Glows */}
        <div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D9A84A]/10 blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] rounded-full bg-[#D2723A]/12 blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`,
          }}
        />
      </div>

      {/* =====================================================================
          2. FOREGROUND HTML/CSS CONTENT & TYPOGRAPHY
          ===================================================================== */}
      <div
        ref={contentRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* -----------------------------------------------------------------
              LEFT COLUMN: Authentic Brand Typography & Narrative
              ----------------------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Main Brand Title Lockup with Botanical Leaf Crown */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="font-condensed font-extrabold tracking-tight text-[#F4EAD8] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] drop-shadow-md">
                  QU<span className="relative inline-block mx-[2px]">
                    {/* Crown Botanical Leaf K */}
                    <svg 
                      className="absolute -top-[0.30em] left-1/2 -translate-x-1/2 w-[0.38em] h-[0.38em] text-[#D9A84A] drop-shadow-md" 
                      viewBox="0 0 100 100" 
                      fill="currentColor"
                    >
                      <path d="M38,20 C42,42 42,58 38,80 C48,60 48,40 38,20 Z" fill="#F4EAD8" />
                      <path d="M46,46 C64,28 76,24 88,28 C74,40 64,50 46,46 Z" fill="#D9A84A" />
                      <path d="M46,52 C64,54 74,66 88,78 C70,76 58,68 46,52 Z" fill="#E2B65A" />
                    </svg>
                    I
                  </span>LATE
                </h1>
              </div>

              {/* Signature Yellowtail script */}
              <div className="font-script text-[#E2B65A] text-4xl sm:text-5xl md:text-6xl -mt-2 sm:-mt-4 transform -rotate-1 origin-left select-none drop-shadow-lg">
                Pure Gold
              </div>
            </div>

            {/* Authentic Brand Subtitle */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#CDBBA4] max-w-xl font-normal leading-relaxed">
              {language === 'pt' ? (
                <>
                  A alfarroba portuguesa transformada em combustível.{' '}
                  <span className="text-[#F4EAD8] font-medium">Um gel energético para a prova, uma barra proteica para a recuperação.</span>
                </>
              ) : (
                <>
                  Portuguese carob turned into fuel.{' '}
                  <span className="text-[#F4EAD8] font-medium">An energy gel for the race, a protein bar for recovery.</span>
                </>
              )}
            </p>

            {/* Accent Script Line */}
            <p className="font-script text-[#E2B65A] text-2xl sm:text-3xl">
              {language === 'pt' ? 'Feito para ti.' : 'Made for you.'}
            </p>

            {/* Interactive CTAs with minimum 44px height and accessible focus rings */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="group min-h-[48px] flex items-center gap-3 px-8 py-4 rounded-full bg-[#D9A84A] hover:bg-[#E2B65A] text-[#120905] font-condensed font-bold uppercase tracking-wider text-sm sm:text-base shadow-xl shadow-[#D9A84A]/25 hover:shadow-[#D9A84A]/40 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120905] transition-all duration-300"
              >
                <span>{language === 'pt' ? 'Descobrir os Produtos' : 'Explore the Fuel'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button
                onClick={onOurStory}
                className="min-h-[48px] flex items-center gap-2 px-7 py-4 rounded-full bg-[#1E120B]/90 backdrop-blur-md border border-[#472C24] text-[#F4EAD8] font-condensed font-semibold uppercase tracking-wider text-sm sm:text-base hover:border-[#D9A84A] hover:bg-[#2E1B11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120905] transition-all duration-300"
              >
                <span>{language === 'pt' ? 'A Nossa Origem' : 'Our Heritage'}</span>
              </button>
            </div>

            {/* Academic Credential & Origin Stamp */}
            <div className="pt-4 border-t border-[#472C24]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-condensed tracking-wider text-[#A89683] uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A84A]" aria-hidden="true" />
                <span>Algarve, Portugal · 100% Natural</span>
              </div>
              <div>PROJECT APPRAISAL · GROUP 5 · M.EGI</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
