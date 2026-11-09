import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollOrchestrator(): () => void {
  // Check reduced motion preference
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const mm = gsap.matchMedia();

  // --------------------------------------------------------------------------
  // DESKTOP ORCHESTRATION (>= 1024px)
  // Parallax, Staggered Reveals & Fluid Sequences
  // --------------------------------------------------------------------------
  mm.add('(min-width: 1024px)', () => {

    // 1. HERO PARALLAX SCRUB
    const heroSection = document.getElementById('hero') || document.getElementById('v2-hero');
    if (heroSection) {
      gsap.to(heroSection.querySelectorAll('.hero-product-stage, .v2-hero-product-stage'), {
        y: 90,
        scale: 0.93,
        opacity: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(heroSection.querySelectorAll('.hero-headline-stage, .v2-hero-headline-stage'), {
        y: -45,
        opacity: 0.75,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // 2. MANIFESTO STAGGERED REVEAL
    const manifestoSection = document.getElementById('manifesto') || document.getElementById('v2-manifesto');
    if (manifestoSection) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: manifestoSection,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      });

      tl.fromTo(
        manifestoSection.querySelectorAll('.v2-manifesto-title, .manifesto-title'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
      )
        .fromTo(
          manifestoSection.querySelectorAll('.v2-manifesto-body, .manifesto-body'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          manifestoSection.querySelectorAll('.v2-stat-box, .stat-box'),
          { scale: 0.9, y: 30, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.65, stagger: 0.12, ease: 'back.out(1.4)' },
          '-=0.3'
        );
    }

    // 3. CHEMICAL PARADOX CARDS
    const problemSection = document.getElementById('problem') || document.getElementById('v2-problem');
    if (problemSection) {
      gsap.fromTo(
        problemSection.querySelectorAll('.v2-problem-card, .problem-card'),
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: problemSection,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // 4. PRODUCT DUAL ENTRANCE
    const productsSection = document.getElementById('products') || document.getElementById('v2-products');
    if (productsSection) {
      gsap.fromTo(
        productsSection.querySelectorAll('.v2-product-card-gel, .product-card-gel'),
        { x: -50, opacity: 0, rotateY: 5 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productsSection,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        productsSection.querySelectorAll('.v2-product-card-bar, .product-card-bar'),
        { x: 50, opacity: 0, rotateY: -5 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productsSection,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // 5. HERITAGE STORY
    const heritageSection = document.getElementById('story') || document.getElementById('heritage') || document.getElementById('v2-heritage');
    if (heritageSection) {
      const heritageTl = gsap.timeline({
        scrollTrigger: {
          trigger: heritageSection,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      });

      heritageTl.fromTo(
        heritageSection.querySelectorAll('.v2-heritage-bg-symbol, .heritage-bg-symbol'),
        { rotation: -20, scale: 0.9, opacity: 0 },
        { rotation: 15, scale: 1.1, opacity: 0.04, duration: 1.1, ease: 'power2.out' }
      )
        .fromTo(
          heritageSection.querySelectorAll('.v2-heritage-progress-bar, .heritage-progress-bar'),
          { width: '15%' },
          { width: '100%', duration: 1.0, ease: 'power2.inOut' },
          '-=0.8'
        )
        .fromTo(
          heritageSection.querySelectorAll('.v2-heritage-step-1, .v2-heritage-step-2, .v2-heritage-step-3, .heritage-step-1, .heritage-step-2, .heritage-step-3'),
          { y: 35, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.14, duration: 0.75, ease: 'power3.out' },
          '-=0.7'
        );
    }

    // 6. INGREDIENTS PURITY GRID
    const ingredientsSection = document.getElementById('ingredients') || document.getElementById('v2-ingredients');
    if (ingredientsSection) {
      gsap.fromTo(
        ingredientsSection.querySelectorAll('.v2-ingredient-card, .ingredient-card'),
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ingredientsSection,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // 7. BRAND VALUES 3 CARDS
    const valuesSection = document.getElementById('values') || document.getElementById('v2-values');
    if (valuesSection) {
      gsap.fromTo(
        valuesSection.querySelectorAll('.v2-value-card, .value-card'),
        { y: 35, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: valuesSection,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // 8. QUILATE CARE
    const careSection = document.getElementById('care') || document.getElementById('v2-care');
    if (careSection) {
      const careTl = gsap.timeline({
        scrollTrigger: {
          trigger: careSection,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      careTl.fromTo(
        careSection.querySelectorAll('.v2-care-badge, .care-badge'),
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.6)' }
      )
        .fromTo(
          careSection.querySelectorAll('.v2-care-title, .care-title'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          careSection.querySelectorAll('.v2-care-launch-card, .care-launch-card'),
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          careSection.querySelectorAll('.v2-care-card, .care-card'),
          { y: 35, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.65, ease: 'power2.out' },
          '-=0.3'
        );
    }

    // 9. CLOSING FINALE CLIMAX
    const closingSection = document.getElementById('contact') || document.getElementById('closing') || document.getElementById('v2-closing');
    if (closingSection) {
      gsap.fromTo(
        closingSection.querySelectorAll('.v2-closing-content, .closing-content'),
        { scale: 0.95, y: 35, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: closingSection,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

  });

  // Desktop orchestration only (>= 1024px)
  // On mobile (< 1024px), keep DOM static to achieve 0 CLS, instant FCP/LCP, and 0ms main thread blocking
  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}

export const initV2ScrollOrchestrator = initScrollOrchestrator;

