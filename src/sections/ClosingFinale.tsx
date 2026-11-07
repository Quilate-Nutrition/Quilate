import React from 'react';
import type { Language } from '../types';
import { Button } from '../components/Button';
import { MapPin } from 'lucide-react';

export interface ClosingFinaleProps {
  language: Language;
}

export const ClosingFinale: React.FC<ClosingFinaleProps> = ({ language }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="v2-snap-section relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-center"
    >
      {/* Massive Background Ghost Typography "QUILATE" from Slide 12 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] text-[22vw] font-condensed font-black tracking-tighter text-[#361B12] whitespace-nowrap"
        aria-hidden="true"
      >
        QUÍLATE
      </div>

      {/* Ambient warm hearth glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6AA7A]/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Block: Climax Statement */}
        <div className="v2-closing-content space-y-4 max-w-3xl mx-auto">

          <h2 className="font-script text-6xl sm:text-7xl md:text-9xl text-[#B88528] py-2 leading-none">
            {language === 'pt' ? 'Corre com ouro.' : 'Run on gold.'}
          </h2>

          <p className="v2-display-md text-[#361B12]">
            {language === 'pt'
              ? 'UM GEL NATURAL PARA A PROVA, UMA BARRA PROTEICA PARA RECUPERAR.'
              : 'A NATURAL GEL FOR THE EFFORT, A PROTEIN BAR TO RECOVER.'}
          </p>

          <p className="font-sans text-lg sm:text-xl text-[#594738] leading-relaxed max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Da alfarroba portuguesa do Algarve, outrora a medida universal do ouro. O padrão mais puro da nossa terra levado aos trilhos e pódios de todo o mundo.'
              : 'From Portuguese Algarve carob, once the universal measure of gold. Portugal’s purest natural standard engineered for endurance trails worldwide.'}
          </p>
        </div>

        {/* Action Controls & Contact Info */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="dark"
            size="lg"
            rounded="full"
            onClick={() => scrollTo('products')}
            className="!rounded-full px-8 shadow-md"
          >
            {language === 'pt' ? 'Explorar os Produtos' : 'Explore Product Range'}
          </Button>

        </div>

        {/* Direct Institutional Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-condensed tracking-widest text-[#7D6857] uppercase pt-4 border-t border-[#E8DEC9]/60 max-w-lg mx-auto">
          <div className="flex items-center gap-2 text-[#594738]">
            <MapPin className="w-4 h-4 text-[#B88528]" />
            <span>Algarve / Aveiro, Portugal</span>
          </div>
        </div>

      </div>
    </section>
  );
};


export const V2ClosingFinale = ClosingFinale;
export type V2ClosingFinaleProps = ClosingFinaleProps;
