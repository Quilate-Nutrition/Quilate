import React from 'react';
import type { Language } from '../types';
import { competitors } from '../content';
import { Badge } from '../components/Badge';
import { CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export interface CompetitionMatrixProps {
  language: Language;
}

export const CompetitionMatrix: React.FC<CompetitionMatrixProps> = ({ language }) => {
  return (
    <section
      id="competition"
      className="relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#C6AA7A]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block (Slide 11 Translation) */}
        <div className="max-w-3xl space-y-4 mb-16">
          <Badge
            variant="gold"
            label={language === 'pt' ? 'O PANORAMA DE MERCADO' : 'MARKET LANDSCAPE'}
          />

          <h2 className="v2-display-lg text-[#361B12]">
            {language === 'pt' ? 'NÃO APENAS MAIS UM ' : 'NOT JUST ANOTHER '}
            <span className="font-script text-[#B88528] lowercase text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline">
              {language === 'pt' ? 'gel natural.' : 'natural gel.'}
            </span>
          </h2>

          <p className="font-sans text-lg text-[#594738]">
            {language === 'pt' ? (
              <>
                <strong className="text-[#361B12] font-semibold">Géis naturais existem no mercado internacional. De alfarroba não.</strong> Somos os primeiros a formular energia com a pureza da alfarroba portuguesa, mantendo um preço justo para os atletas nacionais.
              </>
            ) : (
              <>
                <strong className="text-[#361B12] font-semibold">Natural energy gels exist globally. Carob-based ones do not.</strong> We are the first to formulate sports nutrition with pure Portuguese carob, keeping price accessible for athletes.
              </>
            )}
          </p>
        </div>

        {/* Matrix Table with High Editorial Finish */}
        <div className="rounded-3xl border border-[#E8DEC9] bg-[#FFFFFF] overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-[#E8DEC9] bg-[#F4EDE2] text-[#B88528] font-condensed font-bold text-xs uppercase tracking-[0.25em]">
                  <th className="py-5 px-6 sm:px-8">
                    {language === 'pt' ? 'Marca & Posicionamento' : 'Brand & Market'}
                  </th>
                  <th className="py-5 px-6 sm:px-8">
                    {language === 'pt' ? 'Origem · Preço / Dose' : 'Origin · Price / Dose'}
                  </th>
                  <th className="py-5 px-6 sm:px-8">
                    {language === 'pt' ? 'Fonte de Energia Principal' : 'Primary Energy Source'}
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-right">
                    {language === 'pt' ? 'Perfil Digestivo' : 'Gut Profile'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DEC9] text-sm font-sans">
                {competitors.map((row, idx) => {
                  const isQuilate = row.isQuilate;

                  return (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        isQuilate
                          ? 'bg-[#C6AA7A]/15 font-medium text-[#361B12]'
                          : 'hover:bg-[#FAF4EB]/60 text-[#594738]'
                      }`}
                    >
                      {/* Brand Name */}
                      <td className="py-5 px-6 sm:px-8">
                        <div className="flex items-center gap-3">
                          {isQuilate && (
                            <span className="p-1 rounded-[0.5em] bg-[#B88528] text-[#FAF4EB]">
                              <Sparkles className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <div>
                            <span
                              className={`font-condensed font-bold text-lg uppercase block ${
                                isQuilate ? 'text-[#361B12]' : 'text-[#361B12]'
                              }`}
                            >
                              {row.brand}
                            </span>
                            {isQuilate && (
                              <span className="text-[11px] font-condensed uppercase tracking-wider text-[#B88528]">
                                {language === 'pt' ? 'Ouro Natural Português' : 'Pure Portuguese Gold'}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Origin & Price */}
                      <td className="py-5 px-6 sm:px-8 font-sans">
                        <span className={isQuilate ? 'text-[#361B12] font-semibold' : 'text-[#7D6857]'}>
                          {row.originPriceSize}
                        </span>
                      </td>

                      {/* Energy Source */}
                      <td className="py-5 px-6 sm:px-8 font-sans">
                        <span
                          className={`inline-block px-3 py-1 rounded-[0.5em] text-xs font-condensed font-bold uppercase tracking-wider ${
                            isQuilate
                              ? 'bg-[#FFFFFF] text-[#B88528] border border-[#B88528]/40 shadow-xs'
                              : 'bg-[#F4EDE2] text-[#594738] border border-[#E8DEC9]'
                          }`}
                        >
                          {row.energySource[language]}
                        </span>
                      </td>

                      {/* Gut Profile */}
                      <td className="py-5 px-6 sm:px-8 text-right font-sans">
                        {isQuilate ? (
                          <div className="inline-flex items-center gap-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528]">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{language === 'pt' ? 'Absorção Gradual Pura' : 'Smooth Bio-Release'}</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 text-xs font-condensed uppercase tracking-wider text-[#7D6857]">
                            <ShieldAlert className="w-3.5 h-3.5 text-[#D2723A]" />
                            <span>{language === 'pt' ? 'Risco de Pico / Enjoo' : 'Glycemic Spikes'}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};



export const V2CompetitionMatrix = CompetitionMatrix;
export type V2CompetitionMatrixProps = CompetitionMatrixProps;
