import React, { useState } from 'react';
import type { Language } from '../types';
import { Badge } from '../components/Badge';
import { AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, Zap } from 'lucide-react';

export interface TheProblemProps {
  language: Language;
}

export const TheProblem: React.FC<TheProblemProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'chemicals' | 'natural'>('natural');

  const syntheticList = [
    {
      name: 'Maltodextrina Industrial',
      en: 'Industrial Maltodextrin',
      role: language === 'pt' ? 'Açúcar de alto índice glicémico' : 'High-glycemic processed sugar',
      risk: language === 'pt' ? 'Provoca picos rápidos de insulina seguidos de quebras severas de rendimento e sensação de cansaço extremo.' : 'Causes rapid insulin spikes followed by brutal energy crashes and sudden bonking.',
      tag: 'E-Number / Sintético',
    },
    {
      name: 'Sorbato de Potássio (E202)',
      en: 'Potassium Sorbate (E202)',
      role: language === 'pt' ? 'Conservante químico sintético' : 'Synthetic chemical preservative',
      risk: language === 'pt' ? 'Fórmula industrial agressiva para aumentar o tempo de prateleira, frequentemente associada a cólicas e irritação gástrica durante esforço prolongado.' : 'Aggressive industrial shelf-life booster, frequently linked to cramping and acute GI distress during races.',
      tag: 'E202 · Conservante',
    },
    {
      name: 'Benzoato de Sódio (E211)',
      en: 'Sodium Benzoate (E211)',
      role: language === 'pt' ? 'Inibidor bacteriano artificial' : 'Artificial bacterial inhibitor',
      risk: language === 'pt' ? 'Substância sintética que sobrecarrega a função hepática durante fases de desidratação e esforço máximo.' : 'Synthetic compound placing metabolic burden on hepatic pathways during prolonged exertion and dehydration.',
      tag: 'E211 · Aditivo',
    },
    {
      name: 'Aromas & Acidificantes Sintéticos',
      en: 'Artificial Flavorings & Acids',
      role: language === 'pt' ? 'Compostos laboratoriais' : 'Laboratory compounds',
      risk: language === 'pt' ? 'Química destinada a mascarar o sabor desagradável de açúcares industriais, saturando rapidamente o palato do atleta.' : 'Lab flavorings masking the chemical baseline of refined sugars, quickly causing severe palate fatigue.',
      tag: 'Aromatizante Artificial',
    },
  ];

  const naturalList = [
    {
      name: language === 'pt' ? 'Xarope de Alfarroba do Algarve' : 'Algarve Carob Syrup',
      en: 'Algarve Carob Syrup',
      role: language === 'pt' ? 'Combustível de libertação equilibrada' : 'Steady-release bio-available fuel',
      benefit: language === 'pt' ? 'Rico em açúcares naturalmente presentes, pinitol, polifenóis e antioxidantes. Curva glicémica suave sem choques de insulina.' : 'Naturally occurring sugars, pinitol, polyphenols, and minerals. Smooth glycemic release with zero gastrointestinal strain.',
      tag: language === 'pt' ? '100% Puro · Algarve' : '100% Pure · Algarve',
    },
    {
      name: language === 'pt' ? 'Mel Puro Português' : 'Raw Portuguese Honey',
      en: 'Raw Portuguese Honey',
      role: language === 'pt' ? 'Frutose & glicose bio-idênticas' : 'Bio-identical glucose & fructose',
      benefit: language === 'pt' ? 'Enzimas ativas e absorção rápida que recarrega o glicogénio muscular de forma harmoniosa com a alfarroba.' : 'Active botanical enzymes and rapid absorption that replenishes muscle glycogen without stressing the stomach.',
      tag: language === 'pt' ? 'Serras de Portugal' : 'Portuguese Highlands',
    },
    {
      name: language === 'pt' ? 'Sumo de Limão Fresco' : 'Fresh Lemon Juice',
      role: language === 'pt' ? 'Equilíbrio ácido natural' : 'Natural citric acid balance',
      benefit: language === 'pt' ? 'Acidez cítrica genuína que refresca o palato e combate o enjoo do doce após 4 ou 8 horas de prova nas montanhas.' : 'Authentic citric freshness cutting through sweet fatigue after 4 to 8 hours of mountain racing.',
      tag: language === 'pt' ? 'Pomares Nacionais' : 'Sun-Drenched Orchards',
    },
    {
      name: language === 'pt' ? 'Sal Marinho Tradicional' : 'Traditional Sea Salt',
      role: language === 'pt' ? 'Eletrólitos essenciais completos' : 'Full-spectrum marine electrolytes',
      benefit: language === 'pt' ? 'Cristais de sal das salinas atlânticas com oligoelementos intactos (sódio e magnésio) prevenindo cãibras musculares agudas.' : 'Atlantic salt pan crystals retaining natural trace minerals to maintain electrolyte homeostasis and stop cramps.',
      tag: language === 'pt' ? 'Salinas Atlânticas' : 'Atlantic Coast',
    },
  ];

  return (
    <section
      id="problem"
      className="v2-snap-section relative py-28 bg-[#F4EDE2] text-[#361B12] border-t border-[#E8DEC9] overflow-hidden text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D2723A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">

          <h2 className="v2-display-lg text-[#361B12]">
            {language === 'pt' ? 'O QUE COLOCAS NO TEU CORPO QUANDO MAIS PRECISAS DELE?' : 'WHAT ENTERS YOUR BODY WHEN YOU NEED IT MOST?'}
          </h2>

          <p className="font-sans text-lg text-[#594738] leading-relaxed">
            {language === 'pt'
              ? 'A esmagadora maioria dos géis de corrida é produzida a pensar em margens industriais e prazos de validade de três anos em armazém. O teu estômago paga o preço a meio da prova.'
              : 'Most commercial running gels are engineered for industrial margins and three-year shelf stability. Your digestive system pays the price mid-race.'}
          </p>
        </div>

        {/* Dual Mode Switcher Tabs */}
        <div className="mt-12 flex items-center gap-3">
          <button
            onClick={() => setActiveTab('natural')}
            className={`px-6 py-3 rounded-[0.5em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'natural'
                ? 'bg-[#361B12] text-[#FAF4EB] shadow-md'
                : 'bg-[#FFFFFF] text-[#594738] border border-[#E8DEC9] hover:text-[#361B12]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C6AA7A]" />
            <span>{language === 'pt' ? 'A Solução Quílate (100% Puro)' : 'The Quílate Solution (100% Pure)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('chemicals')}
            className={`px-6 py-3 rounded-[0.5em] text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'chemicals'
                ? 'bg-[#D2723A] text-[#FAF4EB] shadow-md'
                : 'bg-[#FFFFFF] text-[#594738] border border-[#E8DEC9] hover:text-[#361B12]'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-[#D2723A]" />
            <span>{language === 'pt' ? 'O Padrão Industrial Sintético' : 'The Synthetic Industry Standard'}</span>
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {activeTab === 'natural'
            ? naturalList.map((item, idx) => (
                <div
                  key={idx}
                  className="v2-problem-card p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] hover:border-[#B88528] transition-all duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-condensed font-bold uppercase tracking-widest text-[#B88528]">
                        {item.tag}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#B88528]" />
                    </div>

                    <h3 className="font-condensed font-extrabold uppercase text-2xl text-[#361B12] leading-tight">
                      {item.name}
                    </h3>

                    <p className="font-sans text-xs font-medium text-[#B88528]">
                      {item.role}
                    </p>

                    <p className="font-sans text-xs text-[#594738] leading-relaxed pt-1">
                      {item.benefit}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8DEC9] mt-4 flex items-center gap-2 text-[11px] font-condensed tracking-wider text-[#B88528] uppercase">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Digestão Suave & Eficaz' : 'Smooth Digestive Fuel'}</span>
                  </div>
                </div>
              ))
            : syntheticList.map((item, idx) => (
                <div
                  key={idx}
                  className="v2-problem-card p-6 rounded-3xl bg-[#FFFFFF] border border-[#D2723A]/30 hover:border-[#D2723A] transition-all duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-condensed font-bold uppercase tracking-widest text-[#D2723A]">
                        {item.tag}
                      </span>
                      <ShieldAlert className="w-4 h-4 text-[#D2723A]" />
                    </div>

                    <h3 className="font-condensed font-extrabold uppercase text-2xl text-[#361B12] leading-tight">
                      {item.name}
                    </h3>

                    <p className="font-sans text-xs font-medium text-[#D2723A]">
                      {item.role}
                    </p>

                    <p className="font-sans text-xs text-[#594738] leading-relaxed pt-1">
                      {item.risk}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8DEC9] mt-4 flex items-center gap-2 text-[11px] font-condensed tracking-wider text-[#D2723A] uppercase">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Risco Gastrointestinal' : 'High Gastrointestinal Risk'}</span>
                  </div>
                </div>
              ))}
        </div>

        {/* Botanical Contrast Interstitial Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#B88528]">
              {language === 'pt' ? 'A PROMESSA QUÍLATE' : 'THE QUÍLATE COMMITMENT'}
            </span>
            <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-[#361B12] uppercase">
              {language === 'pt'
                ? 'Sem conservantes. Sem maltodextrina. Apenas a terra pura.'
                : 'No synthetic preservatives. No maltodextrin. Just pure earth.'}
            </h3>
            <p className="font-sans text-sm text-[#594738]">
              {language === 'pt'
                ? 'Todas as nossas formulações são testadas em treinos de montanha no Algarve e nas serras do Centro de Portugal.'
                : 'Every batch is field-tested on grueling mountain trails across the Algarve and central Portugal.'}
            </p>
          </div>

          <div className="shrink-0">
            <Badge
              variant="wiggle"
              label={language === 'pt' ? '100% PRODUZIDO EM PORTUGAL' : '100% MADE IN PORTUGAL'}
            />
          </div>
        </div>

      </div>
    </section>
  );
};


export const V2TheProblem = TheProblem;
export type V2TheProblemProps = TheProblemProps;
