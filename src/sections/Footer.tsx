import React from 'react';
import type { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#24150D] text-[#FAF4EB]/80 border-t border-[#361B12] pt-20 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#361B12]/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1A0F09] border border-[#382116] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#B88528]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M38,20 C42,42 42,58 38,80 C48,60 48,40 38,20 Z" fill="#FAF4EB" />
                  <path d="M46,46 C64,28 76,24 88,28 C74,40 64,50 46,46 Z" fill="#C6AA7A" />
                  <path d="M46,52 C64,54 74,66 88,78 C70,76 58,68 46,52 Z" fill="#B88528" />
                </svg>
              </div>

              <div>
                <span className="font-condensed font-extrabold text-2xl tracking-tight text-[#FAF4EB] uppercase">
                  QUÍLATE
                </span>
                <span className="font-script text-xs text-[#B88528] block -mt-1">
                  Pure Gold Nutrition
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#FAF4EB]/70 max-w-sm leading-relaxed">
              {language === 'pt'
                ? 'Nutrição desportiva natural de alta digestibilidade baseada na riqueza ancestral da alfarroba do Algarve. Desenvolvida para atletas que desafiam os seus próprios limites.'
                : 'High-bioavailability natural sports nutrition engineered from the historic richness of Algarve carob. Crafted for endurance athletes redefining their limits.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-condensed tracking-wider text-[#C6AA7A] uppercase pt-2">
              <ShieldCheck className="w-4 h-4 text-[#C6AA7A]" />
              <span>{language === 'pt' ? 'Feito em Portugal · 100% Ingredientes Naturais' : 'Made in Portugal · 100% Natural Nutrition'}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-[0.25em] text-[#FAF4EB] block mb-2">
              {language === 'pt' ? 'NAVEGAÇÃO' : 'NAVIGATION'}
            </span>
            <ul className="space-y-2 text-sm font-condensed font-semibold uppercase tracking-wider">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'Início' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('problem')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'O Problema' : 'The Problem'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'Produtos' : 'Products'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('story')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'Origem' : 'Heritage'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('values')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'Valores' : 'Values'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('team')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  {language === 'pt' ? 'Equipa' : 'Team'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('care')} className="hover:text-[#C6AA7A] transition-colors cursor-pointer">
                  Quilate Care
                </button>
              </li>
            </ul>
          </div>

          {/* Project & Commitment Notice */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-condensed font-bold uppercase tracking-[0.25em] text-[#FAF4EB] block mb-2">
              {language === 'pt' ? 'COMPROMISSO & ORIGEM' : 'COMMITMENT & HERITAGE'}
            </span>

            <div className="p-4 rounded-2xl bg-[#1A0F09] border border-[#382116] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#C6AA7A]">
                  {language === 'pt' ? 'Nutrição Natural Portuguesa' : 'Portuguese Natural Fuel'}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B88528]" />
              </div>

              <p className="font-sans text-xs text-[#FAF4EB]/70 leading-relaxed">
                {language === 'pt'
                  ? 'Desenvolvido por engenheiros e gestores dedicados a elevar o valor da alfarroba algarvia e a saúde digestiva de quem corre.'
                  : 'Engineered by industrial managers and runners dedicated to elevating Algarve carob and authentic digestive endurance.'}
              </p>

            </div>

            <div className="text-[11px] font-condensed uppercase tracking-widest text-[#FAF4EB]/50">
              M.EGI · ENGENHARIA E GESTÃO INDUSTRIAL · FEUP
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-condensed uppercase tracking-wider text-[#FAF4EB]/60">
          <div>
            © {CURRENT_YEAR} QUÍLATE SPORTS NUTRITION. {language === 'pt' ? 'TODOS OS DIREITOS RESERVADOS.' : 'ALL RIGHTS RESERVED.'}
          </div>

        </div>

      </div>
    </footer>
  );
};

export const V2Footer = Footer;
export type V2FooterProps = FooterProps;

