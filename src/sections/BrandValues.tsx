import React from 'react';
import type { Language } from '../types';
import { brandValues } from '../content';

export interface BrandValuesProps {
  language: Language;
}

export const BrandValues: React.FC<BrandValuesProps> = ({ language }) => {
  return (
    <section
      id="values"
      className="relative py-14 sm:py-20 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting - soft and subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6AA7A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle & Compact Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">

            <h2 className="font-condensed font-black uppercase text-3xl sm:text-4xl text-[#361B12] tracking-tight leading-none">
              {language === 'pt' ? 'Os Nossos Valores' : 'Our Core Values'}
              <span className="font-script text-[#B88528] lowercase text-3xl sm:text-4xl font-normal ml-3 inline-block">
                {language === 'pt' ? 'a ética por trás do ouro' : 'the ethics of gold'}
              </span>
            </h2>
          </div>
        </div>

        {/* 3 Compact Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandValues.map((val) => (
            <div
              key={val.id}
              className="v2-value-card p-6 sm:p-7 rounded-[0.5em] bg-[#FFFFFF] border border-[#E8DEC9] shadow-sm hover:border-[#C6AA7A] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header row: Title on the left, Icon badge on the right */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-condensed font-extrabold uppercase text-xl sm:text-2xl text-[#361B12] leading-tight group-hover:text-[#B88528] transition-colors">
                    {val.title[language]}
                  </h3>

                  {/* Icon Badge on the right */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full p-2.5 bg-[#FAF4EB] border border-[#E8DEC9] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[#C6AA7A] transition-all">
                    <img
                      src={val.icon}
                      alt={val.title[language]}
                      width="48"
                      height="48"
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(198,170,122,0.35)]"
                    />
                  </div>
                </div>

                {/* Description phrase below */}
                <p className="font-sans text-xs sm:text-sm text-[#594738] leading-relaxed">
                  {val.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const V2BrandValues = BrandValues;
export type V2BrandValuesProps = BrandValuesProps;
