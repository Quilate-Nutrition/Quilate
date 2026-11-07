import React from 'react';
import type { Language } from '../types';
import { HeartPulse, CheckCircle2 } from 'lucide-react';

export interface QuilateCareProps {
  language: Language;
}

export const QuilateCare: React.FC<QuilateCareProps> = ({ language }) => {
  const audienceCards = [
    {
      tag: language === 'pt' ? 'Aporte Calórico Suave' : 'Gentle Fuel Support',
      title: language === 'pt' ? 'Durante Tratamentos Longos' : 'During Long Treatments',
      desc: language === 'pt' ? (
        <>
          Para dias em que fazer uma refeição completa é um desafio, proporcionando um aporte de{' '}
          <span className="text-[#6b7a3a] font-semibold">energia suave</span> e sem esforço gastrointestinal.
        </>
      ) : (
        <>
          For days when having a full meal is difficult, providing{' '}
          <span className="text-[#6b7a3a] font-semibold">gentle energy</span> with zero gastrointestinal burden.
        </>
      ),
      subtext: language === 'pt' ? 'Absorção natural e progressiva' : 'Natural progressive absorption',
    },
    {
      tag: language === 'pt' ? 'Conforto na Deglutição' : 'Swallowing Comfort',
      title: language === 'pt' ? 'Fácil de Engolir' : 'Easy to Swallow',
      desc: language === 'pt' ? (
        <>
          Uma <span className="text-[#6b7a3a] font-semibold">textura suave e homogénea</span> pensada especificamente para pessoas com sensibilidade orofaríngea ou dificuldades na deglutição.
        </>
      ) : (
        <>
          A <span className="text-[#6b7a3a] font-semibold">smooth, homogeneous texture</span> designed specifically for individuals with oral sensitivity or swallowing difficulties.
        </>
      ),
      subtext: language === 'pt' ? 'Sem textura rugosa ou grumos' : 'Zero gritty texture or residue',
    },
    {
      tag: language === 'pt' ? 'Nutrição Familiar' : 'Wholesome Nutrition',
      title: language === 'pt' ? 'Adultos Mais Velhos' : 'Older Adults',
      desc: language === 'pt' ? (
        <>
          Ingredientes simples, naturais e familiares da nossa terra, tomados em{' '}
          <span className="text-[#6b7a3a] font-semibold">pequenas porções</span> sem provocar sensação de enfartamento.
        </>
      ) : (
        <>
          Simple, authentic Mediterranean ingredients taken in{' '}
          <span className="text-[#6b7a3a] font-semibold">small portions</span> without bloating or fullness.
        </>
      ),
      subtext: language === 'pt' ? 'Dignidade e proximidade' : 'Dignity and familiar warmth',
    },
  ];

  const commitments = [
    {
      title: language === 'pt' ? 'Validação Ética & Sensorial' : 'Ethical & Sensory Validation',
      desc: language === 'pt'
        ? 'Avaliação de tolerância digestiva e aceitação organolética junto de quem mais precisa.'
        : 'Digestive tolerance evaluation and sensory comfort studies conducted with caregivers.',
    },
    {
      title: language === 'pt' ? 'Ingredientes 100% Puros' : '100% Pure Natural Formula',
      desc: language === 'pt'
        ? 'Base natural de alfarroba portuguesa sem químicos sintéticos, corantes nem conservantes artificiais.'
        : 'Pure Portuguese carob foundation with zero synthetic additives, dyes, or artificial preservatives.',
    },
    {
      title: language === 'pt' ? 'Conforto e Dignidade' : 'Dignity & Everyday Comfort',
      desc: language === 'pt'
        ? 'Formato acolhedor, humano e familiar, afastando a frieza dos suplementos clínicos tradicionais.'
        : 'Warm, familiar, and humane presentation, far removed from the coldness of sterile hospital supplements.',
    },
  ];

  return (
    <section
      id="care"
      className="v2-snap-section relative py-24 sm:py-32 lg:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Massive Background Ghost Typography "CARE" in brand tone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[24vw] font-condensed font-black tracking-tighter text-[#361B12] whitespace-nowrap"
        aria-hidden="true"
      >
        CARE
      </div>

      {/* Ambient warm corner glows */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#C6AA7A]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6b7a3a]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =====================================================================
            1. HERO COMPOSITION: Editorial Split with Prominent Launch Status
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20 lg:mb-24">
          
          {/* Left Column: Brand Identity, Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Editorial Title Lockup */}
            <div className="space-y-2">
              <h2 className="font-condensed font-black tracking-tight text-5xl sm:text-7xl lg:text-8xl text-[#361B12] uppercase leading-[0.95]">
                QUÍLATE CARE
                <span className="inline-block ml-3 sm:ml-5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-normal align-middle opacity-60">
                  {language === 'pt' ? 'BREVEMENTE' : 'COMING SOON'}
                </span>
              </h2>

              <p className="font-script text-4xl sm:text-6xl lg:text-7xl text-[#6b7a3a] leading-[1.1] pt-1 block">
                {language === 'pt' ? 'energia suave, para além do desporto.' : 'gentle energy, beyond sport.'}
              </p>
            </div>

            {/* Supporting Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#594738] leading-relaxed max-w-2xl pt-2">
              {language === 'pt' ? (
                <>
                  A mesma base de alfarroba do nosso gel energético, adaptada para pessoas que precisam de{' '}
                  <span className="text-[#6b7a3a] font-semibold">energia fácil de tomar</span> no dia a dia. Uma abordagem cuidada e digna, longe de fórmulas agressivas.
                </>
              ) : (
                <>
                  The same carob foundation behind our energy gel, adapted for individuals who need{' '}
                  <span className="text-[#6b7a3a] font-semibold">easy-to-take energy</span> in everyday life. A dignified and considerate initiative, far from harsh industrial formulas.
                </>
              )}
            </p>

          </div>

        </div>

        {/* =====================================================================
            2. TARGET AUDIENCE CARDS: Refined Editorial Cards (01, 02, 03)
            ===================================================================== */}
        <div className="space-y-6 mb-20 lg:mb-24">
          
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-[#E8DEC9] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6b7a3a]" />
              <h3 className="font-condensed font-extrabold uppercase text-sm tracking-[0.25em] text-[#361B12]">
                {language === 'pt' ? 'PARA QUEM É' : 'WHO IT’S FOR'}
              </h3>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="group p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] hover:border-[#6b7a3a]/50 shadow-sm hover:shadow-md transition-all duration-400 flex flex-col justify-between"
              >
                <div className="space-y-5">


                  {/* Title */}
                  <h4 className="font-condensed font-extrabold uppercase text-2xl text-[#361B12] leading-tight group-hover:text-[#6b7a3a] transition-colors">
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#594738] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Card Subtext Footer */}
                <div className="pt-5 border-t border-[#E8DEC9] mt-6 flex items-center justify-between text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857]">
                  <span>{card.subtext}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6b7a3a] group-hover:scale-125 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =====================================================================
            3. DEVELOPMENT & VALIDATION TRUST SECTION: Authoritative & Scannable
            ===================================================================== */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Vision & Regulatory Anchor */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4EB] border border-[#E8DEC9] text-xs font-condensed font-bold uppercase tracking-wider text-[#361B12]">
                <HeartPulse className="w-3.5 h-3.5 text-[#6b7a3a]" />
                <span>{language === 'pt' ? 'DESENVOLVIMENTO RESPONSÁVEL' : 'RESPONSIBLE DEVELOPMENT'}</span>
              </div>

              <h3 className="font-condensed font-black text-3xl sm:text-5xl text-[#361B12] uppercase leading-[1.05]">
                {language === 'pt' ? (
                  <>
                    Em conjunto com <span className="text-[#6b7a3a]">profissionais de saúde</span>, com rigor, ética e validação.
                  </>
                ) : (
                  <>
                    Together with <span className="text-[#6b7a3a]">healthcare professionals</span>, with rigor and validation.
                  </>
                )}
              </h3>

              <p className="font-sans text-base text-[#594738] leading-relaxed">
                {language === 'pt' ? (
                  <>
                    Estamos a desenvolver o Quilate Care em estreita articulação com <span className="text-[#6b7a3a] font-semibold">profissionais de saúde</span> e cuidadores. O produto só chegará ao mercado após <span className="text-[#6b7a3a] font-semibold">testes adequados e validação</span> de segurança.
                  </>
                ) : (
                  <>
                    We are formulating Quilate Care alongside <span className="text-[#6b7a3a] font-semibold">health professionals</span> and caregivers. Launch will only occur after <span className="text-[#6b7a3a] font-semibold">proper testing and validation</span>.
                  </>
                )}
              </p>

            </div>

            {/* Right Column: 3 Scannable Development Commitments */}
            <div className="lg:col-span-6 bg-[#FAF4EB] p-8 sm:p-10 rounded-2xl border border-[#E8DEC9] space-y-6 text-left">
              
              <div className="flex items-center justify-between border-b border-[#E8DEC9] pb-3">
                <span className="text-xs font-condensed font-extrabold uppercase tracking-widest text-[#7D6857]">
                  {language === 'pt' ? 'COMPROMISSOS DE DESENVOLVIMENTO' : 'DEVELOPMENT COMMITMENTS'}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#6b7a3a]" />
              </div>

              <div className="space-y-5">
                {commitments.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#E8DEC9] text-[#6b7a3a] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-condensed font-extrabold text-base text-[#361B12] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#594738] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


export const V2QuilateCare = QuilateCare;
export type V2QuilateCareProps = QuilateCareProps;
