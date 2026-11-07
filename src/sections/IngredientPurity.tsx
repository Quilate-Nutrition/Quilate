import React, { useState } from 'react';
import type { Language } from '../types';
import { naturalIngredientsCatalog } from '../content';
import { Leaf, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export interface IngredientPurityProps {
  language: Language;
}

export const IngredientPurity: React.FC<IngredientPurityProps> = ({ language }) => {
  const [activeIngredient] = useState<number>(0);

  return (
    <section
      id="ingredients"
      className="relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C6AA7A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">

            <h2 className="v2-display-lg text-[#361B12]">
              {language === 'pt' ? 'OS PRODUTOS DA BOTÂNICA' : 'THE BOTANICAL PRODUCTS'}
              <span className="font-script text-[#B88528] lowercase text-5xl sm:text-6xl md:text-7xl font-normal block pt-1">
                {language === 'pt' ? 'ingredientes da nossa terra' : 'fuel from our land'}
              </span>
            </h2>

            <p className="font-sans text-lg text-[#594738]">
              {language === 'pt'
                ? 'Consegues ler e pronunciar cada um dos nossos ingredientes. Sem químicos laboratoriais ocultos, sem nomes incompreensíveis.'
                : 'Every single ingredient can be recognized and pronounced. Zero concealed lab compounds, zero indecipherable numbers.'}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528] shadow-sm">
              <Leaf className="w-4 h-4 text-[#557A46]" />
              <span>{language === 'pt' ? '6 Ingredientes Puros' : '6 Pure Ingredients'}</span>
            </span>
          </div>
        </div>

        {/* Dynamic 6-Ingredient Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {naturalIngredientsCatalog.map((ing, idx) => {
            const isActive = activeIngredient === idx;

            return (
              <div
                key={idx}
                className={`v2-ingredient-card p-8 rounded-3xl bg-[#FFFFFF] border transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer group ${
                  isActive
                    ? 'border-[#E8DEC9] hover:border-[#C6AA7A]'
                    : 'border-[#E8DEC9] hover:border-[#C6AA7A]'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#B88528]">
                      0{idx + 1} · {ing.role[language]}
                    </span>
                  
                  </div>

                  {/* Ingredient Name */}
                  <h3 className="font-condensed font-extrabold uppercase text-2xl sm:text-3xl text-[#361B12] leading-tight">
                    {ing.name[language]}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#594738] leading-relaxed">
                    {ing.desc[language]}
                  </p>
                </div>

                {/* Provenance Footer */}
                <div className="pt-6 border-t border-[#E8DEC9] mt-6 flex items-center justify-between text-xs font-condensed tracking-wider uppercase">
                  <div className="flex items-center gap-1.5 text-[#B88528]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{ing.origin}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Botanical Detail Spotlight */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#B88528]">
              {language === 'pt' ? 'DESTAQUE BOTÂNICO' : 'BOTANICAL SPOTLIGHT'}
            </span>
            <h4 className="font-condensed font-bold text-3xl sm:text-4xl text-[#361B12] uppercase">
              {naturalIngredientsCatalog[activeIngredient].name[language]}
            </h4>
            <p className="font-sans text-base text-[#594738] leading-relaxed">
              {naturalIngredientsCatalog[activeIngredient].desc[language]}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B88528] shrink-0" />
              <div>
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12] block">
                  {language === 'pt' ? 'Digestão Incondicional' : 'Gentle Bio-Availability'}
                </span>
                <span className="text-xs font-sans text-[#7D6857]">
                  {language === 'pt' ? 'Testado em esforços de ultra-distância' : 'Field-tested in ultra endurance'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#B88528] shrink-0" />
              <div>
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12] block">
                  {language === 'pt' ? 'Origem Auditada' : 'Audited Provenance'}
                </span>
                <span className="text-xs font-sans text-[#7D6857]">
                  {naturalIngredientsCatalog[activeIngredient].origin}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


export const V2IngredientPurity = IngredientPurity;
export type V2IngredientPurityProps = IngredientPurityProps;
