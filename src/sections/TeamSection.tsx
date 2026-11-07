import React from 'react';
import type { Language } from '../types';
import { teamMembers } from '../content';

export interface TeamSectionProps {
  language: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  return (
    <section
      id="team"
      className="relative py-28 sm:py-36 bg-[#F4EDE2] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C6AA7A]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block (Slide 4 Translation) */}
        <div className="max-w-3xl space-y-4 mb-16">

          <h2 className="v2-display-lg text-[#361B12]">
            {language === 'pt'
              ? 'ENGENHEIROS QUE GEREM, '
              : 'ENGINEERS WHO MANAGE, '}
            <span className="font-script text-[#B88528] lowercase text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline">
              {language === 'pt' ? 'gestores que constroem.' : 'managers who build.'}
            </span>
          </h2>

          <p className="font-sans text-lg text-[#594738]">
            {language === 'pt'
              ? 'A equipa por trás da Quilate combina formação avançada em Engenharia e Gestão Industrial (M.EGI) com paixão genuína pelo desporto de resistência e pela valorização da terra portuguesa.'
              : 'The team behind Quilate blends engineering rigor (M.EGI) with genuine athletic endurance and dedication to Portuguese agricultural heritage.'}
          </p>
        </div>

        {/* 5 Leadership Profiles Grid (Slide 4 translation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8DEC9] hover:border-[#C6AA7A] transition-all duration-400 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Portrait directly on white card (standardized to João silhouette and eye-line) */}
                <div className="relative w-full h-56 sm:h-64 flex items-end justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-auto object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="font-condensed font-extrabold uppercase text-2xl text-[#361B12] tracking-tight group-hover:text-[#B88528] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#B88528] block mt-0.5">
                    {member.role[language]}
                  </span>
                </div>

                {/* Bio Snippet */}
                <p className="font-sans text-xs text-[#594738] leading-relaxed">
                  {member.bio ? member.bio[language] : ''}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DEC9] mt-4 flex items-center justify-between text-[11px] font-condensed tracking-widest text-[#7D6857] uppercase">
                <span>Quílate Team</span>
                <span className="text-[#B88528]">M.EGI</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const V2TeamSection = TeamSection;
export type V2TeamSectionProps = TeamSectionProps;
