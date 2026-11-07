import React from 'react';
import type { Language } from '../types';
import { etymologySteps } from '../content';
import { Sparkles } from 'lucide-react';

export interface HeritageStoryProps {
  language: Language;
}

export const HeritageStory: React.FC<HeritageStoryProps> = ({ language }) => {
  return (
    <section
      id="story"
      className="v2-snap-section relative py-8 lg:py-10 bg-[#FAF4EB] text-[#361B12] overflow-hidden text-left border-t border-[#E8DEC9] lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      {/* Rotating Background Watermark Symbol */}
      <div
        className="v2-heritage-bg-symbol absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[34vw] font-condensed font-black tracking-tighter text-[#361B12] whitespace-nowrap will-change-transform"
        aria-hidden="true"
      >
        K
      </div>

      {/* Background warm ambient shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F7E3CA]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F9E2B8]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="v2-heritage-pin-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block: Compact & Refined */}
        <div className="max-w-4xl space-y-2 mb-3 lg:mb-4">

          <h2 className="font-condensed font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-[#361B12] tracking-tight leading-none">
            {language === 'pt'
              ? 'Das Sementes de Alfarroba aos Quilates:'
              : 'From Carob Seeds to Carats:'}
            <span className="font-script text-[#B88528] lowercase text-3xl sm:text-4xl lg:text-5xl font-normal ml-3 inline-block">
              {language === 'pt' ? 'a história da marca' : 'the story of gold'}
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-[#594738] max-w-3xl leading-relaxed pt-1">
            {language === 'pt'
              ? 'Antes de ser a medida de pureza do ouro e dos diamantes, o quilate era simplesmente uma semente de alfarroba. Pela sua extraordinária uniformidade de massa, os comerciantes do Mediterrâneo usavam as sementes na balança para aferir as maiores riquezas do mundo antigo.'
              : 'Before it became the universal standard for measuring gold and diamonds, a carat was simply a carob seed. Revered by ancient Mediterranean traders for its astonishingly uniform weight, it was placed on scales to verify the most precious treasures in the world.'}
          </p>
        </div>

        {/* Visual Story Progress Indicator (Desktop Scrub) */}
        <div className="hidden lg:block w-full max-w-2xl mx-auto mb-4 lg:mb-5">
          <div className="flex items-center justify-between text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] mb-2">
            <span className="text-[#B88528]">01 · Kerátion (Semente)</span>
            <span>02 · Qīrāṭ (Padrão)</span>
            <span className="text-[#B88528]">03 · Quílate (Ouro Puro)</span>
          </div>
          <div className="v2-heritage-progress-track w-full h-1.5 bg-[#E8DEC9] rounded-full overflow-hidden">
            <div className="v2-heritage-progress-bar w-[25%] h-full bg-gradient-to-r from-[#B88528] to-[#C6AA7A] rounded-full transition-all duration-75" />
          </div>
        </div>

        {/* 3 Step Interactive Timeline Cards (Slide 5 Translation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch relative">
          {etymologySteps.map((step, idx) => {
            const isHighlight = step.highlight;

            return (
              <div
                key={step.step}
                className={`v2-heritage-step-${idx + 1} p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-md relative overflow-hidden group ${
                  isHighlight
                    ? 'bg-[#361B12] text-[#FAF4EB] border-2 border-[#C6AA7A] shadow-[#C6AA7A]/20'
                    : 'bg-[#FFFFFF] text-[#361B12] border border-[#E8DEC9] hover:border-[#C6AA7A]'
                }`}
              >
                {/* Highlight Glow */}
                {isHighlight && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6AA7A]/15 rounded-full blur-[60px] pointer-events-none" />
                )}

                <div>
                  {/* Step Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-condensed font-bold uppercase tracking-[0.25em] ${
                        isHighlight ? 'text-[#C6AA7A]' : 'text-[#7D6857]'
                      }`}
                    >
                      {language === 'pt' ? `Etapa 0${step.step}` : `Phase 0${step.step}`}
                    </span>

                    {isHighlight ? (
                      <span className="p-1.5 rounded-full bg-[#C6AA7A] text-[#24150D]">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-[11px] font-condensed font-semibold text-[#7D6857]">
                        {idx === 0 ? 'Grécia Antiga' : 'Mediterrâneo'}
                      </span>
                    )}
                  </div>

                  {/* Wordmark in Signature Yellowtail */}
                  <h3
                    className={`font-script text-4xl sm:text-5xl mb-2 ${
                      isHighlight ? 'text-[#C6AA7A]' : 'text-[#B88528]'
                    }`}
                  >
                    {step.word}
                  </h3>

                  {step.greek && (
                    <span className={`block text-xs font-sans font-medium -mt-1 mb-2.5 ${isHighlight ? 'text-[#FAF4EB]/70' : 'text-[#7D6857]'}`}>
                      {step.greek}
                    </span>
                  )}

                  {/* Description */}
                  <p
                    className={`font-sans text-xs sm:text-sm leading-relaxed ${
                      isHighlight ? 'text-[#FAF4EB]/90' : 'text-[#594738]'
                    }`}
                  >
                    {language === 'pt' ? step.desc.pt : step.desc.en}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



export const V2HeritageStory = HeritageStory;
export type V2HeritageStoryProps = HeritageStoryProps;
