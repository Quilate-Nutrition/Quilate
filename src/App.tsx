import React, { useState, useEffect } from 'react';
import type { Language } from './types';
import './styles/theme.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KineticTicker } from './components/KineticTicker';
import { Manifesto } from './sections/Manifesto';
import { TheProblem } from './sections/TheProblem';
import { ProductShowcase } from './sections/ProductShowcase';
import { HeritageStory } from './sections/HeritageStory';
import { IngredientPurity } from './sections/IngredientPurity';
import { BrandValues } from './sections/BrandValues';
import { TeamSection } from './sections/TeamSection';
import { QuilateCare } from './sections/QuilateCare';
import { ClosingFinale } from './sections/ClosingFinale';
import { Footer } from './sections/Footer';
import { ModalWaitlist } from './components/ModalWaitlist';
import { initScrollOrchestrator } from './animations/scrollOrchestrator';

import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    // If URL contains /v2 or #v2, gracefully normalize to root /
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/v2' || path.startsWith('/v2/') || hash === '#/v2' || hash === '#v2') {
        window.history.replaceState(null, '', import.meta.env.BASE_URL);
      }
    }

    // Set canonical page title
    document.title = 'QUÍLATE | Pure Gold Sports Nutrition';

    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize premium GSAP animations orchestrator
    const cleanupOrchestrator = initScrollOrchestrator();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanupOrchestrator();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el =
      document.getElementById(id) ||
      (id === 'story' ? document.getElementById('heritage') : null) ||
      (id === 'contact' ? document.getElementById('closing') : null) ||
      document.getElementById(`v2-${id}`);

    if (el) {
      const navbarOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="quilate-root v2-root min-h-screen bg-[#FAF4EB] text-[#361B12] selection:bg-[#C6AA7A] selection:text-[#361B12] flex flex-col justify-between overflow-x-hidden">

      {/* Skip Link for Keyboard / Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-[#361B12] focus:text-[#FAF4EB] focus:font-condensed focus:font-bold focus:uppercase focus:rounded-[0.5em]"
      >
        {language === 'pt' ? 'Saltar para o conteúdo principal' : 'Skip to main content'}
      </a>

      {/* Signature Dark Luxury Sticky Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
        navLinks={[
          { id: 'hero', label: 'Quilate' },
          { id: 'problem', label: language === 'pt' ? 'O Problema' : 'The Problem' },
          { id: 'products', label: language === 'pt' ? 'Produtos' : 'Products' },
          { id: 'story', label: language === 'pt' ? 'Origem' : 'Heritage' },
          { id: 'values', label: language === 'pt' ? 'Valores' : 'Values' },
          { id: 'team', label: language === 'pt' ? 'Equipa' : 'Team' },
          { id: 'care', label: 'Quilate Care' },
        ]}
      />

      {/* Main Sequential Journey */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">

        {/* Section 1: Hero Cover (Cinematic Video Hero) */}
        <Hero
          language={language}
          onExploreProducts={() => scrollTo('products')}
          onOurStory={() => scrollTo('story')}
        />

        {/* Kinetic Ticker 1 (Dark Theme) */}
        <KineticTicker
          theme="dark"
          speed={30}
          items={[
            language === 'pt' ? 'ALFARROBA DO ALGARVE' : 'ALGARVE CAROB',
            'PURE GOLD SPORTS NUTRITION',
            language === 'pt' ? '100% NATURAL' : '100% NATURAL FUEL',
            language === 'pt' ? 'ZERO QUÍMICOS SINTÉTICOS' : 'ZERO SYNTHETIC ADDITIVES',
            language === 'pt' ? 'GEL ENERGÉTICO & BARRA PROTEICA' : 'ENERGY GEL & PROTEIN BAR',
            'ENGENHARIA E GESTÃO INDUSTRIAL · M.EGI',
            language === 'pt' ? 'FEITO EM PORTUGAL' : 'MADE IN PORTUGAL',
          ]}
        />

        {/* Section 2: Statement Manifesto */}
        <Manifesto language={language} />

        {/* Section 3: The Chemical Paradox */}
        <TheProblem language={language} />

        {/* Kinetic Ticker 2 (Gold Inverted) */}
        <KineticTicker
          theme="gold"
          speed={34}
          reverse={true}
          items={[
            language === 'pt' ? 'SEM MALTODEXTRINA' : 'NO MALTODEXTRIN',
            language === 'pt' ? 'SEM SORBATO DE POTÁSSIO' : 'NO POTASSIUM SORBATE',
            language === 'pt' ? 'DIGESTÃO SUAVE EM ULTRA-TRAIL' : 'EFFORTLESS DIGESTION IN ULTRA-TRAIL',
            language === 'pt' ? 'ENERGIA ESTÁVEL E PURA' : 'STEADY BIO-AVAILABLE ENERGY',
            language === 'pt' ? 'TESTADO EM PROVAS DE MONTANHA' : 'FIELD-TESTED IN MOUNTAIN RACES',
          ]}
        />

        {/* Section 4: Dual Product Range (Gel & Bar) */}
        <ProductShowcase
          language={language}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* Section 5: Origin & Etymology */}
        <HeritageStory language={language} />

        {/* Section 6: Transparent Recipe & Pure Botanical Ingredients */}
        <IngredientPurity language={language} />

        {/* Section 7: Brand Values */}
        <BrandValues language={language} />

        {/* Section 8: Engineering Leadership Team & Objectives */}
        <TeamSection language={language} />

        {/* Section 9: Quilate Care (Coming Soon Initiative) */}
        <QuilateCare language={language} />

        {/* Section 10: Climax & Club / Partner Portal */}
        <ClosingFinale language={language} />

      </main>

      {/* Brand Footer */}
      <Footer language={language} />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {/* Floating Scroll Up Button */}
        {showScrollUp && (
          <button
            onClick={() => scrollTo('hero')}
            className="min-h-[44px] min-w-[44px] flex items-center gap-2 px-4 py-2.5 rounded-[0.5em] bg-[#361B12] text-[#FAF4EB] hover:bg-[#452D23] shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88528] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
            aria-label={language === 'pt' ? 'Voltar ao topo' : 'Scroll to top'}
          >
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#FAF4EB]">
              {language === 'pt' ? 'Topo' : 'Top'}
            </span>
            <ArrowUp className="w-4 h-4 text-[#C6AA7A] transition-transform group-hover:-translate-y-0.5" />
          </button>
        )}
      </div>

      {/* Waitlist Modal */}
      <ModalWaitlist
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        language={language}
      />

    </div>
  );
};

export default App;
