import React from 'react';
import type { Language } from '../types';
import { TrendingUp, Users, Flame } from 'lucide-react';

export interface ManifestoProps {
  language: Language;
}

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  return (
    <section
      id="manifesto"
      className="v2-snap-section relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C6AA7A]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Giant Editorial Statement Typography */}
        <div className="v2-manifesto-title space-y-4 max-w-5xl">
          <h2 className="v2-display-xl text-[#361B12]">
            {language === 'pt' ? 'MAIS PESSOAS CORREM.' : 'MORE PEOPLE RUN.'}
          </h2>

          <h2 className="v2-display-xl text-[#B88528]">
            {language === 'pt' ? 'POUCAS SABEM O QUE AS ALIMENTA.' : 'FEW KNOW WHAT FUELS THEM.'}
          </h2>
        </div>

        {/* Narrative & Statistical Grid */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Editorial Narrative */}
          <div className="v2-manifesto-body lg:col-span-7 space-y-6">
            <p className="font-sans text-xl sm:text-2xl text-[#594738] leading-relaxed font-normal">
              {language === 'pt' ? (
                <>
                  O trail running explodiu em Portugal. Milhares de atletas desafiam serras, ribeiros e trilhos de ultra-resistência.{' '}
                  <span className="text-[#361B12] font-semibold">
                    Mas nos abastecimentos, o combustível continua a ser o mesmo: maltodextrina sintética, conservantes artificiais e géis industriais que provocam náuseas e paragens forçadas.
                  </span>
                </>
              ) : (
                <>
                  Trail running has surged across Portugal. Thousands of runners push through coastal cliffs, technical mountains, and ultra-endurance ridges.{' '}
                  <span className="text-[#361B12] font-semibold">
                    Yet at aid stations, the fuel remains unchanged: synthetic maltodextrin, industrial preservatives, and chemical gels that provoke gut distress.
                  </span>
                </>
              )}
            </p>

            <p className="font-sans text-base sm:text-lg text-[#7D6857] leading-relaxed">
              {language === 'pt' ? (
                'A Quilate nasceu para quebrar este ciclo. Fomos buscar à árvore mais resiliente do Mediterrâneo, a alfarrobeira do Algarve. Uma fonte natural de energia pura, estável e perfeitamente assimilável pelo corpo humano.'
              ) : (
                'Quilate was founded to end this compromise. From the most resilient tree in the Mediterranean basin, the Algarve carob. We unlock a pure, steady fuel that human physiology digests with natural ease.'
              )}
            </p>

            {/* Signature yellowtail accent */}
            <p className="font-script text-[#B88528] text-3xl sm:text-4xl pt-2">
              {language === 'pt' ? 'Ouro natural português para o teu esforço.' : 'Pure Portuguese gold for your pursuit.'}
            </p>
          </div>

          {/* Right Column: Verified Statistical Proof Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Stat 1: Trail Finishes */}
            <div className="v2-stat-box p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC9] hover:border-[#C6AA7A] shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528]">
                  {language === 'pt' ? 'PARTICIPAÇÃO RECORD' : 'RECORD FINISHES'}
                </span>
                <Users className="w-4 h-4 text-[#B88528]" />
              </div>
              <div className="font-condensed font-extrabold text-5xl sm:text-6xl text-[#361B12] leading-none tracking-tight">
                37.368
              </div>
              <p className="font-sans text-xs text-[#7D6857] mt-2">
                {language === 'pt'
                  ? 'Chegadas oficiais a provas de trail em Portugal em 2024.'
                  : 'Official trail race finishes across Portugal in 2024.'}
              </p>
            </div>

            {/* Stat 2: Growth Multiple */}
            <div className="v2-stat-box p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC9] hover:border-[#C6AA7A] shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528]">
                  {language === 'pt' ? 'CRESCIMENTO DE COMUNIDADE' : 'COMMUNITY SURGE'}
                </span>
                <TrendingUp className="w-4 h-4 text-[#B88528]" />
              </div>
              <div className="font-condensed font-extrabold text-5xl sm:text-6xl text-[#B88528] leading-none tracking-tight">
                6× MAIS
              </div>
              <p className="font-sans text-xs text-[#7D6857] mt-2">
                {language === 'pt'
                  ? 'Membros associados ao trail running em comparação com 2016.'
                  : 'Registered trail running association members compared to 2016.'}
              </p>
            </div>

            {/* Stat 3: Synthetic Ratio */}
            <div className="v2-stat-box p-6 rounded-2xl bg-[#F4EDE2] border border-[#C6AA7A] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12]">
                  {language === 'pt' ? 'O PADRÃO QUÍLATE' : 'THE QUÍLATE STANDARD'}
                </span>
                <Flame className="w-4 h-4 text-[#B88528]" />
              </div>
              <div className="font-condensed font-extrabold text-4xl sm:text-5xl text-[#361B12] leading-none tracking-tight">
                0% ADITIVOS
              </div>
              <p className="font-sans text-xs text-[#C4B29E] mt-2">
                {language === 'pt'
                  ? 'Apenas ingredientes naturais reais: alfarroba, mel, limão e sal marinho.'
                  : 'Only genuine natural nutrition: carob, raw honey, lemon, and Atlantic sea salt.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


export const V2Manifesto = Manifesto;
export type V2ManifestoProps = ManifestoProps;
