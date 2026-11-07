import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { X, Zap, BatteryCharging, AlertCircle, Check } from 'lucide-react';

export interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialProduct?: 'gel' | 'bar';
}

export const NutritionModal: React.FC<NutritionModalProps> = ({
  isOpen,
  onClose,
  language,
  initialProduct = 'gel',
}) => {
  const [selectedProduct, setSelectedProduct] = useState<'gel' | 'bar'>(initialProduct);
  const [caffeineVariant, setCaffeineVariant] = useState<boolean>(false);

  // Sync initial product when opened
  useEffect(() => {
    if (isOpen && initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [isOpen, initialProduct]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#24150D]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nutrition-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF4EB] text-[#361B12] rounded-2xl border border-[#E8DEC9] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 pb-4 border-b border-[#E8DEC9] bg-[#FAF4EB]">
          <div>
            <span className="text-[11px] font-condensed font-extrabold uppercase tracking-[0.25em] text-[#B88528] block">
              {language === 'pt' ? 'TABELA NUTRICIONAL OFICIAL' : 'OFFICIAL NUTRITIONAL FACTS'}
            </span>
            <h3 id="nutrition-modal-title" className="font-condensed font-black uppercase text-2xl sm:text-3xl text-[#361B12] leading-tight">
              {selectedProduct === 'gel'
                ? (language === 'pt' ? 'Quílate Energy Gel (40 g)' : 'Quílate Energy Gel (40 g)')
                : (language === 'pt' ? 'Quílate Protein Bar (55 g)' : 'Quílate Protein Bar (55 g)')}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#E8DEC9] bg-[#FFFFFF] hover:bg-[#F4EDE2] text-[#361B12] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label={language === 'pt' ? 'Fechar modal' : 'Close modal'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Product Switcher Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm max-w-fit">
            <button
              onClick={() => setSelectedProduct('gel')}
              className={`px-4 py-2 rounded-full text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedProduct === 'gel'
                  ? 'bg-[#361B12] text-[#FAF4EB] shadow-sm'
                  : 'text-[#594738] hover:text-[#361B12]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#C6AA7A]" />
              <span>{language === 'pt' ? 'Gel Energético (40 g)' : 'Energy Gel (40 g)'}</span>
            </button>

            <button
              onClick={() => setSelectedProduct('bar')}
              className={`px-4 py-2 rounded-full text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedProduct === 'bar'
                  ? 'bg-[#361B12] text-[#FAF4EB] shadow-sm'
                  : 'text-[#594738] hover:text-[#361B12]'
              }`}
            >
              <BatteryCharging className="w-3.5 h-3.5 text-[#C6AA7A]" />
              <span>{language === 'pt' ? 'Barra Proteica (55 g)' : 'Protein Bar (55 g)'}</span>
            </button>
          </div>

          {/* =================================================================
              GEL TAB CONTENT
              ================================================================= */}
          {selectedProduct === 'gel' && (
            <div className="space-y-6">
              
              {/* Formulation Variant Selector */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] flex flex-wrap items-center justify-between gap-3 shadow-sm">
                <div>
                  <span className="font-condensed font-bold text-xs uppercase tracking-wider text-[#7D6857] block">
                    {language === 'pt' ? 'Variante da Formulação:' : 'Formulation Variant:'}
                  </span>
                  <span className="font-sans text-xs text-[#594738]">
                    {caffeineVariant
                      ? (language === 'pt' ? 'Com Cafeína Natural (+50 mg de café verde)' : 'With Natural Caffeine (+50 mg green coffee)')
                      : (language === 'pt' ? 'Clássico sem estimulantes' : 'Classic Stimulant-Free')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F4EDE2] border border-[#E8DEC9]">
                  <button
                    onClick={() => setCaffeineVariant(false)}
                    className={`px-3 py-1.5 rounded-full text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      !caffeineVariant
                        ? 'bg-[#361B12] text-[#FAF4EB]'
                        : 'text-[#594738] hover:text-[#361B12]'
                    }`}
                  >
                    {language === 'pt' ? 'Sem Cafeína' : 'Zero Caffeine'}
                  </button>
                  <button
                    onClick={() => setCaffeineVariant(true)}
                    className={`px-3 py-1.5 rounded-full text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      caffeineVariant
                        ? 'bg-[#361B12] text-[#FAF4EB]'
                        : 'text-[#594738] hover:text-[#361B12]'
                    }`}
                  >
                    +50 mg Cafeína
                  </button>
                </div>
              </div>

              {/* Mandatory Caffeine Alert */}
              {caffeineVariant && (
                <div className="p-4 rounded-xl bg-[#F7E3CA]/60 border border-[#B88528]/40 flex items-start gap-3 text-xs font-sans text-[#361B12]">
                  <AlertCircle className="w-4 h-4 text-[#B88528] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase font-condensed tracking-wider">
                      {language === 'pt' ? 'Aviso Regulamentar Europeu Obrigatório:' : 'Mandatory European Warning:'}
                    </span>
                    <span>
                      {language === 'pt'
                        ? 'Contém cafeína (125 mg/100 g; 50 mg por dose de 40 g). Não recomendado a crianças nem a grávidas. Não exceder 4 géis/dia nesta versão.'
                        : 'Contains caffeine (125 mg/100 g; 50 mg per 40 g serving). Not recommended for children or pregnant individuals. Max 4 gels/day.'}
                    </span>
                  </div>
                </div>
              )}

              {/* Nutritional Table */}
              <div className="rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] overflow-hidden shadow-sm">
                <div className="p-4 bg-[#F4EDE2] border-b border-[#E8DEC9] flex items-center justify-between">
                  <h4 className="font-condensed font-extrabold uppercase text-base text-[#361B12]">
                    {language === 'pt' ? 'Declaração Nutricional · Gel (40 g)' : 'Nutritional Declaration · Gel (40 g)'}
                  </h4>
                  <span className="text-xs font-condensed font-bold px-2 py-0.5 rounded-full bg-[#C6AA7A] text-[#24150D]">
                    40 g
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="border-b border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857]">
                        <th className="py-2.5 px-4">{language === 'pt' ? 'Parâmetro' : 'Nutrient'}</th>
                        <th className="py-2.5 px-4">{language === 'pt' ? 'Por 100 g' : 'Per 100 g'}</th>
                        <th className="py-2.5 px-4 font-extrabold text-[#361B12]">{language === 'pt' ? 'Por Gel (40 g)' : 'Per Gel (40 g)'}</th>
                        <th className="py-2.5 px-4">% DR*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DEC9]/50 text-xs sm:text-sm">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Energia' : 'Energy'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">1019 kJ / 240 kcal</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">408 kJ / 96 kcal</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">5%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Lípidos' : 'Fat'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">0 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">0 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">0%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Hidratos de Carbono' : 'Carbohydrates'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">59 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#B88528]">24 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">9%</td>
                      </tr>
                      <tr className="bg-[#FAF4EB]/60">
                        <td className="py-2 px-4 pl-8 text-xs text-[#594738]">{language === 'pt' ? 'dos quais açúcares' : 'of which sugars'}</td>
                        <td className="py-2 px-4 text-xs text-[#594738]">57 g</td>
                        <td className="py-2 px-4 text-xs font-semibold text-[#361B12]">23 g</td>
                        <td className="py-2 px-4 text-xs text-[#7D6857]">25%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Proteínas' : 'Protein'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">0,5 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">0 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">0%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Sal' : 'Salt'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">0,64 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#B88528]">0,26 g (≈100 mg Na)</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-[#FAF4EB] border-t border-[#E8DEC9] text-[11px] font-sans text-[#7D6857]">
                  *DR = {language === 'pt' ? 'Dose de referência para um adulto médio (8400 kJ / 2000 kcal).' : 'Reference intake of an average adult (8400 kJ / 2000 kcal).'}
                </div>
              </div>

              {/* Ingredients Breakdown */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] space-y-2 text-xs">
                <span className="font-condensed font-bold uppercase tracking-wider text-[#B88528] block">
                  {language === 'pt' ? 'Lista de Ingredientes Auditada:' : 'Audited Ingredients:'}
                </span>
                <p className="font-sans text-[#361B12] leading-relaxed">
                  <strong>{language === 'pt' ? 'Ingredientes:' : 'Ingredients:'}</strong>{' '}
                  {language === 'pt'
                    ? 'Xarope de alfarroba do Algarve (48%), mel puro de serra (29%), água, sumo de limão fresco, sal marinho tradicional atlântico, espessante natural (goma xantana).'
                    : 'Algarve carob syrup (48%), mountain honey (29%), water, fresh lemon juice, Atlantic sea salt, natural thickener (xanthan gum).'}
                  {caffeineVariant && (
                    <span className="text-[#B88528] font-bold">
                      {' '}+ {language === 'pt' ? 'cafeína natural de café verde (125 mg/100 g).' : 'natural green coffee caffeine (125 mg/100 g).'}
                    </span>
                  )}
                </p>
                <p className="font-sans text-[11px] text-[#7D6857] pt-1">
                  <strong>{language === 'pt' ? 'Modo de Tomar:' : 'Usage:'}</strong>{' '}
                  {language === 'pt'
                    ? '1 gel a cada 30 a 45 minutos em esforço, sempre acompanhado de água fresca.'
                    : '1 gel every 30 to 45 minutes during endurance effort, accompanied by fresh water.'}
                </p>
              </div>

            </div>
          )}

          {/* =================================================================
              BAR TAB CONTENT
              ================================================================= */}
          {selectedProduct === 'bar' && (
            <div className="space-y-6">
              
              {/* Authorized EU Claims Badge */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] flex flex-wrap items-center gap-3 shadow-sm">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EA] border border-[#A8D5A4] text-xs font-condensed font-bold uppercase text-[#245428]">
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>{language === 'pt' ? 'Rico em Proteínas (33% DR)' : 'High Protein (33% RI)'}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EA] border border-[#A8D5A4] text-xs font-condensed font-bold uppercase text-[#245428]">
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>{language === 'pt' ? 'Rico em Fibra Saciante' : 'High Dietary Fiber'}</span>
                </div>
              </div>

              {/* Nutritional Table */}
              <div className="rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] overflow-hidden shadow-sm">
                <div className="p-4 bg-[#F4EDE2] border-b border-[#E8DEC9] flex items-center justify-between">
                  <h4 className="font-condensed font-extrabold uppercase text-base text-[#361B12]">
                    {language === 'pt' ? 'Declaração Nutricional · Barra (55 g)' : 'Nutritional Declaration · Bar (55 g)'}
                  </h4>
                  <span className="text-xs font-condensed font-bold px-2 py-0.5 rounded-full bg-[#D2723A] text-[#FAF4EB]">
                    55 g
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="border-b border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857]">
                        <th className="py-2.5 px-4">{language === 'pt' ? 'Parâmetro' : 'Nutrient'}</th>
                        <th className="py-2.5 px-4">{language === 'pt' ? 'Por 100 g' : 'Per 100 g'}</th>
                        <th className="py-2.5 px-4 font-extrabold text-[#361B12]">{language === 'pt' ? 'Por Barra (55 g)' : 'Per Bar (55 g)'}</th>
                        <th className="py-2.5 px-4">% DR*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DEC9]/50 text-xs sm:text-sm">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Energia' : 'Energy'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">1615 kJ / 385 kcal</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">888 kJ / 212 kcal</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">11%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Lípidos' : 'Fat'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">13 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">7,4 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">11%</td>
                      </tr>
                      <tr className="bg-[#FAF4EB]/60">
                        <td className="py-2 px-4 pl-8 text-xs text-[#594738]">{language === 'pt' ? 'dos quais saturados' : 'of which saturated'}</td>
                        <td className="py-2 px-4 text-xs text-[#594738]">2,1 g</td>
                        <td className="py-2 px-4 text-xs font-semibold text-[#361B12]">1,2 g</td>
                        <td className="py-2 px-4 text-xs text-[#7D6857]">6%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Hidratos de Carbono' : 'Carbohydrates'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">32 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">18 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">7%</td>
                      </tr>
                      <tr className="bg-[#FAF4EB]/60">
                        <td className="py-2 px-4 pl-8 text-xs text-[#594738]">{language === 'pt' ? 'dos quais açúcares' : 'of which sugars'}</td>
                        <td className="py-2 px-4 text-xs text-[#594738]">29 g</td>
                        <td className="py-2 px-4 text-xs font-semibold text-[#361B12]">16 g</td>
                        <td className="py-2 px-4 text-xs text-[#7D6857]">18%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Fibra' : 'Fiber'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">7,8 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">4,3 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">—</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Proteínas' : 'Protein'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">30 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#D2723A]">17 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#D2723A]">33%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#361B12]">{language === 'pt' ? 'Sal' : 'Salt'}</td>
                        <td className="py-2.5 px-4 text-[#594738]">0,46 g</td>
                        <td className="py-2.5 px-4 font-bold text-[#361B12]">0,25 g</td>
                        <td className="py-2.5 px-4 text-[#7D6857]">4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-[#FAF4EB] border-t border-[#E8DEC9] text-[11px] font-sans text-[#7D6857]">
                  *DR = {language === 'pt' ? 'Dose de referência para um adulto médio (8400 kJ / 2000 kcal).' : 'Reference intake of an average adult (8400 kJ / 2000 kcal).'}
                </div>
              </div>

              {/* Ingredients & Allergens Breakdown */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E8DEC9] space-y-2 text-xs">
                <span className="font-condensed font-bold uppercase tracking-wider text-[#D2723A] block">
                  {language === 'pt' ? 'Lista de Ingredientes Auditada:' : 'Audited Ingredients:'}
                </span>
                <p className="font-sans text-[#361B12] leading-relaxed">
                  <strong>{language === 'pt' ? 'Ingredientes:' : 'Ingredients:'}</strong>{' '}
                  {language === 'pt'
                    ? 'Proteína whey de leite (32%), xarope de alfarroba do Algarve (18%), amêndoa tostada (13%), farinha de alfarroba torrada (11%), figo seco do Algarve (9%), manteiga de amêndoa (9%), mel de montanha (5%), sal marinho (total alfarroba: 29%).'
                    : 'Milk whey protein (32%), Algarve carob syrup (18%), roasted almonds (13%), roasted carob flour (11%), dried figs (9%), almond butter (9%), honey (5%), sea salt (total carob: 29%).'}
                </p>
                <div className="pt-2 border-t border-[#E8DEC9]/60 flex items-start gap-2 text-[#8A4A28]">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D2723A]" />
                  <span>
                    <strong>{language === 'pt' ? 'Alergénios:' : 'Allergens:'}</strong>{' '}
                    {language === 'pt'
                      ? 'Contém leite e amêndoa. Pode conter vestígios de outros frutos de casca rija e amendoim.'
                      : 'Contains milk and almond. May contain traces of other nuts and peanuts.'}
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E8DEC9] bg-[#F4EDE2] flex items-center justify-end">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#361B12] text-[#FAF4EB] hover:bg-[#452D23] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};



export const V2NutritionModal = NutritionModal;
export type V2NutritionModalProps = NutritionModalProps;
