import React, { useState } from 'react';
import type { Language } from '../types';
import { Badge } from '../components/Badge';
import { Zap, BatteryCharging, AlertCircle, Info, ShieldCheck, Clock, Check } from 'lucide-react';

export interface NutritionFactsProps {
  language: Language;
}

export const NutritionFacts: React.FC<NutritionFactsProps> = ({ language }) => {
  const [selectedProduct, setSelectedProduct] = useState<'gel' | 'bar'>('gel');
  const [caffeineVariant, setCaffeineVariant] = useState<boolean>(false);

  return (
    <section
      id="nutrition"
      className="relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Ambient warm corner glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#F7E3CA]/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F9E2B8]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <Badge
              variant="gold"
              label={language === 'pt' ? 'TRANSPARÊNCIA TOTAL' : 'VERIFIED NUTRITION'}
            />

            <h2 className="v2-display-lg text-[#361B12]">
              {language === 'pt' ? 'DECLARAÇÃO NUTRICIONAL' : 'NUTRITIONAL DECLARATION'}
              <span className="font-script text-[#B88528] lowercase text-5xl sm:text-6xl md:text-7xl font-normal block pt-1">
                {language === 'pt' ? 'dados reais de bancada' : 'authentic laboratory data'}
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#594738] leading-relaxed">
              {language === 'pt'
                ? 'Sem estimativas vagas nem alegações não autorizadas. Cada grama é calculado com base na formulação real dos nossos produtos artesanais.'
                : 'No vague promises or unauthorized claims. Every gram is calculated directly from the verified laboratory recipe of our artisanal fuel.'}
            </p>
          </div>

          {/* Product Switcher Island */}
          <div className="flex items-center gap-2 p-1.5 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm">
            <button
              onClick={() => setSelectedProduct('gel')}
              className={`px-4 py-2.5 rounded-[0.5em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
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
              className={`px-4 py-2.5 rounded-[0.5em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedProduct === 'bar'
                  ? 'bg-[#361B12] text-[#FAF4EB] shadow-sm'
                  : 'text-[#594738] hover:text-[#361B12]'
              }`}
            >
              <BatteryCharging className="w-3.5 h-3.5 text-[#C6AA7A]" />
              <span>{language === 'pt' ? 'Barra Proteica (55 g)' : 'Protein Bar (55 g)'}</span>
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            PRODUCT 1: GEL ENERGÉTICO (40 g)
            --------------------------------------------------------------------- */}
        {selectedProduct === 'gel' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Caffeine Variant Toggle Sub-bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857]">
                  {language === 'pt' ? 'Variante da Formulação:' : 'Formulation Variant:'}
                </span>
                <div className="inline-flex rounded-[0.5em] p-0.5 bg-[#F4EDE2] border border-[#E8DEC9]">
                  <button
                    onClick={() => setCaffeineVariant(false)}
                    className={`px-3 py-1.5 rounded-[0.4em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      !caffeineVariant
                        ? 'bg-[#361B12] text-[#FAF4EB]'
                        : 'text-[#594738] hover:text-[#361B12]'
                    }`}
                  >
                    {language === 'pt' ? 'Sem Cafeína (Clássico)' : 'Caffeine-Free (Classic)'}
                  </button>
                  <button
                    onClick={() => setCaffeineVariant(true)}
                    className={`px-3 py-1.5 rounded-[0.4em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      caffeineVariant
                        ? 'bg-[#B88528] text-[#FAF4EB]'
                        : 'text-[#594738] hover:text-[#361B12]'
                    }`}
                  >
                    {language === 'pt' ? '+50 mg Cafeína Natural' : '+50mg Natural Caffeine'}
                  </button>
                </div>
              </div>

              {caffeineVariant && (
                <div className="flex items-center gap-2 text-xs font-sans text-[#D2723A] font-medium bg-[#D2723A]/10 px-3 py-1.5 rounded-[0.4em] border border-[#D2723A]/20">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'pt'
                      ? 'Contém cafeína (125 mg/100 g). Não recomendado a crianças nem a grávidas.'
                      : 'Contains caffeine (125 mg/100 g). Not recommended for children or pregnant individuals.'}
                  </span>
                </div>
              )}
            </div>

            {/* Nutrition Table & Recipe Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Official European Nutrition Table */}
              <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[0.5em] border border-[#E8DEC9] shadow-sm overflow-hidden">
                <div className="bg-[#F4EDE2] px-6 py-4 border-b border-[#E8DEC9] flex items-center justify-between">
                  <h3 className="font-condensed font-extrabold uppercase text-lg sm:text-xl text-[#361B12] tracking-tight">
                    {language === 'pt' ? 'Tabela Nutricional · Quílate Energy Gel' : 'Nutrition Table · Quílate Energy Gel'}
                  </h3>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded-[0.35em] bg-[#C6AA7A] text-[#24150D]">
                    40 g
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] bg-[#FAF4EB]/60">
                        <th className="py-3 px-6">{language === 'pt' ? 'Parâmetro' : 'Nutrient'}</th>
                        <th className="py-3 px-4">{language === 'pt' ? 'Por 100 g' : 'Per 100 g'}</th>
                        <th className="py-3 px-4 font-bold text-[#361B12]">{language === 'pt' ? 'Por Gel (40 g)' : 'Per Gel (40 g)'}</th>
                        <th className="py-3 px-4 text-right">% DR*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DEC9]/70 font-sans">
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Energia' : 'Energy'}</td>
                        <td className="py-3 px-4 text-[#594738]">1019 kJ / 240 kcal</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">408 kJ / 96 kcal</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">5%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Lípidos' : 'Fat'}</td>
                        <td className="py-3 px-4 text-[#594738]">0 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">0 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">0%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 text-xs text-[#7D6857] bg-[#FAF4EB]/20">
                        <td className="py-2.5 px-8">{language === 'pt' ? 'dos quais saturados' : 'of which saturates'}</td>
                        <td className="py-2.5 px-4">0 g</td>
                        <td className="py-2.5 px-4 font-medium text-[#361B12]">0 g</td>
                        <td className="py-2.5 px-4 text-right">0%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 bg-[#C6AA7A]/10">
                        <td className="py-3.5 px-6 font-bold text-[#361B12]">{language === 'pt' ? 'Hidratos de Carbono' : 'Carbohydrates'}</td>
                        <td className="py-3.5 px-4 font-semibold text-[#361B12]">59 g</td>
                        <td className="py-3.5 px-4 font-black text-base text-[#B88528]">24 g</td>
                        <td className="py-3.5 px-4 text-right font-bold text-[#361B12]">9%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 text-xs text-[#7D6857] bg-[#FAF4EB]/20">
                        <td className="py-2.5 px-8">{language === 'pt' ? 'dos quais açúcares naturais' : 'of which natural sugars'}</td>
                        <td className="py-2.5 px-4">57 g</td>
                        <td className="py-2.5 px-4 font-medium text-[#361B12]">23 g</td>
                        <td className="py-2.5 px-4 text-right">25%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Proteínas' : 'Protein'}</td>
                        <td className="py-3 px-4 text-[#594738]">0,5 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">0 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">0%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 bg-[#FAF4EB]/30">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Sal' : 'Salt'}</td>
                        <td className="py-3 px-4 text-[#594738]">0,64 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">0,26 g <span className="text-xs font-normal text-[#7D6857]">(≈100 mg sódio)</span></td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-[#FAF4EB]/40 border-t border-[#E8DEC9] text-[11px] text-[#7D6857] leading-relaxed">
                  *DR = {language === 'pt' ? 'Dose de referência para um adulto médio (8 400 kJ / 2 000 kcal).' : 'Reference intake of an average adult (8 400 kJ / 2 000 kcal).'}
                </div>
              </div>

              {/* Right Column: Recipe Composition, Allergens & Usage Instructions */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Ingredients Breakdown */}
                <div className="p-6 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528]">
                    <ShieldCheck className="w-4 h-4 text-[#B88528]" />
                    <span>{language === 'pt' ? 'Lista de Ingredientes Auditada' : 'Audited Ingredients'}</span>
                  </div>

                  <p className="font-sans text-sm text-[#361B12] leading-relaxed">
                    {language === 'pt' ? (
                      <>
                        <strong className="text-[#361B12]">Ingredientes:</strong> Xarope de alfarroba do Algarve (48%), mel puro de serra (29%), água, sumo de limão fresco, sal marinho tradicional atlântico, espessante natural (goma xantana).
                        {caffeineVariant && <> <strong className="text-[#B88528]">Variante com Cafeína:</strong> cafeína natural de grão de café verde (50 mg por gel).</>}
                      </>
                    ) : (
                      <>
                        <strong className="text-[#361B12]">Ingredients:</strong> Algarve carob syrup (48%), raw mountain honey (29%), water, fresh lemon juice, traditional Atlantic sea salt, natural thickener (xanthan gum).
                        {caffeineVariant && <> <strong className="text-[#B88528]">Caffeine Variant:</strong> natural caffeine extracted from green coffee beans (50mg per gel).</>}
                      </>
                    )}
                  </p>
                </div>

                {/* Instructions of Use Protocol */}
                <div className="p-6 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12]">
                    <Clock className="w-4 h-4 text-[#B88528]" />
                    <span>{language === 'pt' ? 'Protocolo de Utilização' : 'Usage Protocol'}</span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#594738] leading-relaxed">
                    {language === 'pt'
                      ? 'Tomar 1 gel a cada 30 a 45 minutos em esforços de corrida ou ciclismo com duração superior a 60 a 90 minutos, sempre acompanhado de água fresca.'
                      : 'Consume 1 gel every 30 to 45 minutes during running or cycling efforts exceeding 60 to 90 minutes, accompanied by fresh water.'}
                  </p>

                  {caffeineVariant && (
                    <p className="font-sans text-xs text-[#D2723A] font-semibold pt-1">
                      {language === 'pt'
                        ? 'Aviso: Na versão com cafeína, não ultrapassar a toma máxima de 4 géis por dia.'
                        : 'Notice: On the caffeine variant, do not exceed the maximum intake of 4 gels per day.'}
                    </p>
                  )}
                </div>

                {/* Mandatory European Allergen Line */}
                <div className="p-5 rounded-[0.5em] bg-[#F4EDE2] border border-[#E8DEC9] space-y-1.5 text-xs">
                  <div className="font-condensed font-bold uppercase tracking-wider text-[#7D6857] flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#B88528]" />
                    <span>{language === 'pt' ? 'Informação de Alergénios' : 'Allergen Information'}</span>
                  </div>
                  <p className="font-sans text-[#594738] leading-relaxed">
                    {language === 'pt'
                      ? 'Não contém nenhum dos 14 alergénios de declaração obrigatória na sua composição. Fabricado em linha partilhada com a barra: pode conter vestígios de leite e frutos de casca rija.'
                      : 'Contains none of the 14 mandatory EU allergens in its recipe. Manufactured on a facility line shared with bars: may contain traces of milk and tree nuts.'}
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ---------------------------------------------------------------------
            PRODUCT 2: BARRA PROTEICA (55 g)
            --------------------------------------------------------------------- */}
        {selectedProduct === 'bar' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Approved EU Health Claims Banner (Reg. CE 1924/2006) */}
            <div className="flex flex-wrap items-center gap-3 p-4 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm">
              <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857]">
                {language === 'pt' ? 'Alegações Nutricionais Autorizadas (Reg. CE 1924/2006):' : 'Authorized EU Nutritional Claims (Reg. EC 1924/2006):'}
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-[0.4em] bg-[#C6AA7A]/20 border border-[#C6AA7A]/40 text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12]">
                  <Check className="w-3.5 h-3.5 text-[#B88528]" />
                  <span>{language === 'pt' ? 'Rico em Proteínas (33% DR)' : 'High in Protein (33% RI)'}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-[0.4em] bg-[#557A46]/15 border border-[#557A46]/30 text-xs font-condensed font-bold uppercase tracking-wider text-[#557A46]">
                  <Check className="w-3.5 h-3.5 text-[#557A46]" />
                  <span>{language === 'pt' ? 'Rico em Fibra' : 'High in Fiber'}</span>
                </span>
              </div>
            </div>

            {/* Nutrition Table & Recipe Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Official European Nutrition Table */}
              <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[0.5em] border border-[#E8DEC9] shadow-sm overflow-hidden">
                <div className="bg-[#F4EDE2] px-6 py-4 border-b border-[#E8DEC9] flex items-center justify-between">
                  <h3 className="font-condensed font-extrabold uppercase text-lg sm:text-xl text-[#361B12] tracking-tight">
                    {language === 'pt' ? 'Tabela Nutricional · Quílate Protein Bar' : 'Nutrition Table · Quílate Protein Bar'}
                  </h3>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded-[0.35em] bg-[#C6AA7A] text-[#24150D]">
                    55 g
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] bg-[#FAF4EB]/60">
                        <th className="py-3 px-6">{language === 'pt' ? 'Parâmetro' : 'Nutrient'}</th>
                        <th className="py-3 px-4">{language === 'pt' ? 'Por 100 g' : 'Per 100 g'}</th>
                        <th className="py-3 px-4 font-bold text-[#361B12]">{language === 'pt' ? 'Por Barra (55 g)' : 'Per Bar (55 g)'}</th>
                        <th className="py-3 px-4 text-right">% DR*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DEC9]/70 font-sans">
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Energia' : 'Energy'}</td>
                        <td className="py-3 px-4 text-[#594738]">1615 kJ / 385 kcal</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">888 kJ / 212 kcal</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">11%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Lípidos' : 'Fat'}</td>
                        <td className="py-3 px-4 text-[#594738]">13 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">7,4 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">11%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 text-xs text-[#7D6857] bg-[#FAF4EB]/20">
                        <td className="py-2.5 px-8">{language === 'pt' ? 'dos quais saturados' : 'of which saturates'}</td>
                        <td className="py-2.5 px-4">2,1 g</td>
                        <td className="py-2.5 px-4 font-medium text-[#361B12]">1,2 g</td>
                        <td className="py-2.5 px-4 text-right">6%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Hidratos de Carbono' : 'Carbohydrates'}</td>
                        <td className="py-3 px-4 text-[#594738]">32 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">18 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">7%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 text-xs text-[#7D6857] bg-[#FAF4EB]/20">
                        <td className="py-2.5 px-8">{language === 'pt' ? 'dos quais açúcares' : 'of which sugars'}</td>
                        <td className="py-2.5 px-4">29 g</td>
                        <td className="py-2.5 px-4 font-medium text-[#361B12]">16 g</td>
                        <td className="py-2.5 px-4 text-right">18%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 bg-[#557A46]/10">
                        <td className="py-3 px-6 font-semibold text-[#557A46]">{language === 'pt' ? 'Fibra' : 'Fiber'}</td>
                        <td className="py-3 px-4 text-[#557A46]">7,8 g</td>
                        <td className="py-3 px-4 font-bold text-[#557A46]">4,3 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">—</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 bg-[#C6AA7A]/15">
                        <td className="py-3.5 px-6 font-bold text-[#361B12]">{language === 'pt' ? 'Proteínas' : 'Protein'}</td>
                        <td className="py-3.5 px-4 font-bold text-[#361B12]">30 g</td>
                        <td className="py-3.5 px-4 font-black text-base text-[#B88528]">17 g</td>
                        <td className="py-3.5 px-4 text-right font-bold text-[#361B12]">33%</td>
                      </tr>
                      <tr className="hover:bg-[#FAF4EB]/40 bg-[#FAF4EB]/30">
                        <td className="py-3 px-6 font-semibold text-[#361B12]">{language === 'pt' ? 'Sal' : 'Salt'}</td>
                        <td className="py-3 px-4 text-[#594738]">0,46 g</td>
                        <td className="py-3 px-4 font-bold text-[#361B12]">0,25 g</td>
                        <td className="py-3 px-4 text-right text-[#7D6857]">4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-[#FAF4EB]/40 border-t border-[#E8DEC9] text-[11px] text-[#7D6857] leading-relaxed">
                  *DR = {language === 'pt' ? 'Dose de referência para um adulto médio (8 400 kJ / 2 000 kcal).' : 'Reference intake of an average adult (8 400 kJ / 2 000 kcal).'}
                </div>
              </div>

              {/* Right Column: Recipe Composition, Total Carob Ratio & Allergens */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Ingredients Breakdown with Exact Percentages */}
                <div className="p-6 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528]">
                      {language === 'pt' ? 'Composição Real da Barra' : 'Certified Bar Recipe'}
                    </span>
                    <span className="text-xs font-condensed font-bold text-[#361B12] px-2 py-0.5 rounded-[0.35em] bg-[#C6AA7A]/25">
                      {language === 'pt' ? '29% Total Alfarroba' : '29% Total Carob'}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-[#361B12] leading-relaxed">
                    {language === 'pt' ? (
                      <>
                        <strong className="text-[#361B12]">Ingredientes:</strong> Proteína de soro de leite concentrada [whey] (32%), xarope de alfarroba do Algarve (18%), amêndoa portuguesa (13%), farinha de alfarroba (11%), figo seco do Algarve (9%), manteiga de amêndoa (9%), mel de serra (5%), sal marinho tradicional atlântico.
                      </>
                    ) : (
                      <>
                        <strong className="text-[#361B12]">Ingredients:</strong> Concentrated whey protein (32%), Algarve carob syrup (18%), Portuguese almonds (13%), carob flour (11%), sun-dried Algarve figs (9%), almond butter (9%), mountain honey (5%), Atlantic sea salt.
                      </>
                    )}
                  </p>
                </div>

                {/* Mandatory European Allergen Warning */}
                <div className="p-5 rounded-[0.5em] bg-[#D2723A]/10 border border-[#D2723A]/30 space-y-1.5 text-xs">
                  <div className="font-condensed font-bold uppercase tracking-wider text-[#D2723A] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D2723A]" />
                    <span>{language === 'pt' ? 'Aviso Obrigatório de Alergénios' : 'Mandatory Allergen Declaration'}</span>
                  </div>
                  <p className="font-sans text-[#361B12] leading-relaxed font-medium">
                    {language === 'pt'
                      ? 'Contém leite (proveniente da proteína whey) e amêndoa (frutos de casca rija).'
                      : 'Contains milk (from whey protein concentrate) and almonds (tree nuts).'}
                  </p>
                </div>

                {/* Satiety & Recovery Note */}
                <div className="p-6 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm space-y-2">
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12] block">
                    {language === 'pt' ? 'Propósito Funcional Após Esforço' : 'Post-Effort Functional Purpose'}
                  </span>
                  <p className="font-sans text-xs text-[#594738] leading-relaxed">
                    {language === 'pt'
                      ? 'Fornece 17 g de proteína de rápida assimilação muscular combinada com os polifenóis antioxidantes da alfarroba e gorduras saudáveis da amêndoa tostada.'
                      : 'Delivers 17g of high-bioavailability protein combined with carob antioxidant polyphenols and healthy fats from roasted almonds for integral muscular repair.'}
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};



export const V2NutritionFacts = NutritionFacts;
export type V2NutritionFactsProps = NutritionFactsProps;
