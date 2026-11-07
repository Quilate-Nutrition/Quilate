import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import type { Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenWaitlist: () => void;
  navLinks?: Array<{ id: string; label: string }>;
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  navLinks: customNavLinks,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const defaultNavLinks = [
    { id: 'hero', label: 'Quilate' },
    { id: 'problem', label: language === 'pt' ? 'O Problema' : 'The Problem' },
    { id: 'products', label: language === 'pt' ? 'Produtos' : 'Products' },
    { id: 'story', label: language === 'pt' ? 'Origem' : 'Heritage' },
    { id: 'values', label: language === 'pt' ? 'Valores' : 'Values' },
    { id: 'team', label: language === 'pt' ? 'Equipa' : 'Team' },
    { id: 'care', label: 'Quilate Care' },
  ];

  const links = customNavLinks || defaultNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;

      for (const link of links) {
        const el =
          document.getElementById(link.id) ||
          (link.id === 'story' ? document.getElementById('heritage') : null) ||
          (link.id === 'contact' ? document.getElementById('closing') : null) ||
          document.getElementById(`v2-${link.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, links]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element =
      document.getElementById(id) ||
      (id === 'story' ? document.getElementById('heritage') : null) ||
      (id === 'contact' ? document.getElementById('closing') : null) ||
      document.getElementById(`v2-${id}`);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#120905]/90 backdrop-blur-md border-b border-[#472C24]/60 shadow-2xl shadow-black/80'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120905] rounded-xl transition-transform hover:scale-[1.02]"
          aria-label={language === 'pt' ? 'Página Inicial da Quilate' : 'Quilate Home'}
        >
          <Logo size="sm" withTagline={true} />
        </button>

        {/* Desktop Pill Nav (Modeled after Slide 3 nav pills) */}
        <nav 
          aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}
          className="hidden lg:flex items-center gap-1.5 bg-[#1E120B]/80 p-1.5 rounded-full border border-[#472C24]/80 shadow-inner"
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`min-h-[38px] px-4 py-1.5 rounded-full text-xs font-condensed tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] ${
                  isActive
                    ? 'bg-[#D9A84A] text-[#120905] font-bold shadow-md shadow-[#D9A84A]/30 scale-105'
                    : 'text-[#CDBBA4] hover:text-[#F4EAD8] hover:bg-[#3B2219]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher + Sample/Waitlist CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div 
            className="flex items-center bg-[#1E120B] border border-[#472C24] rounded-full p-1 text-xs"
            role="group"
            aria-label={language === 'pt' ? 'Selecionar idioma' : 'Select language'}
          >
            <Globe className="w-3.5 h-3.5 text-[#D9A84A] ml-2 mr-1" aria-hidden="true" />
            <button
              onClick={() => onLanguageChange('pt')}
              aria-label="Mudar para Português"
              className={`min-h-[34px] px-2.5 py-1 rounded-full font-condensed font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] ${
                language === 'pt' ? 'bg-[#D9A84A] text-[#120905]' : 'text-[#A89683] hover:text-[#F4EAD8]'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              aria-label="Switch to English"
              className={`min-h-[34px] px-2.5 py-1 rounded-full font-condensed font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] ${
                language === 'en' ? 'bg-[#D9A84A] text-[#120905]' : 'text-[#A89683] hover:text-[#F4EAD8]'
              }`}
            >
              EN
            </button>
          </div>

        </div>

        {/* Mobile Hamburger Button with 44x44px touch target */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 py-2 text-xs font-condensed font-bold uppercase rounded-full border border-[#472C24] bg-[#1E120B] text-[#D9A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A]"
            aria-label={language === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'}
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-2xl bg-[#1E120B] border border-[#472C24] text-[#F4EAD8] hover:text-[#D9A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A]"
            aria-label={
              mobileMenuOpen
                ? (language === 'pt' ? 'Fechar menu de navegação' : 'Close navigation menu')
                : (language === 'pt' ? 'Abrir menu de navegação' : 'Open navigation menu')
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Accessible Touch Targets (min 44px) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav"
          role="navigation"
          aria-label={language === 'pt' ? 'Menu móvel' : 'Mobile menu'}
          className="sm:hidden bg-[#1E120B]/98 border-b border-[#472C24] px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-fadeIn"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="min-h-[44px] flex items-center w-full text-left px-4 py-3 rounded-xl font-condensed uppercase tracking-wider text-sm font-semibold text-[#F4EAD8] hover:bg-[#3B2219] hover:text-[#D9A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
