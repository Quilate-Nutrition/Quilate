import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from './Button';

export interface ModalWaitlistProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ModalWaitlist: React.FC<ModalWaitlistProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'athlete',
    clubOrLocation: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-waitlist-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0D0704]/85 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-lg rounded-[0.5em] bg-[#1A0F09] border border-[#382116] p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9A84A]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[0.5em] bg-[#24150D] text-[#C4B29E] hover:text-[#F5EBDC] hover:bg-[#321D12] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A84A]"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[0.5em] bg-[#24150D] border border-[#D9A84A]/30 text-xs font-condensed font-bold uppercase tracking-wider text-[#D9A84A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'ACESSO VIP & PROVAS PILOTO' : 'VIP ACCESS & PILOT SAMPLES'}</span>
              </div>

              <h3
                id="modal-waitlist-title"
                className="font-condensed font-extrabold uppercase text-3xl sm:text-4xl text-[#F5EBDC] tracking-tight leading-none"
              >
                {language === 'pt' ? 'Corre com o Primeiro Ouro' : 'Run on the First Gold'}
              </h3>

              <p className="font-sans text-sm text-[#C4B29E] leading-relaxed">
                {language === 'pt'
                  ? 'Garante acesso prioritário aos primeiros lotes artesanais de Gel Energético e Barra Proteica de Alfarroba do Algarve.'
                  : 'Secure priority access to our initial artisanal batches of Algarve Carob Energy Gel and Protein Bar.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-[#C4B29E] mb-1.5">
                  {language === 'pt' ? 'Nome Completo *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'pt' ? 'Ex: Tiago Silva' : 'e.g. John Doe'}
                  className="w-full px-4 py-3 rounded-[0.5em] bg-[#24150D] border border-[#382116] text-[#F5EBDC] placeholder-[#8A7765] focus:outline-none focus:border-[#D9A84A] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-[#C4B29E] mb-1.5">
                  {language === 'pt' ? 'Email de Contacto *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={language === 'pt' ? 'atleta@exemplo.pt' : 'athlete@example.com'}
                  className="w-full px-4 py-3 rounded-[0.5em] bg-[#24150D] border border-[#382116] text-[#F5EBDC] placeholder-[#8A7765] focus:outline-none focus:border-[#D9A84A] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-[#C4B29E] mb-1.5">
                    {language === 'pt' ? 'Perfil Principal' : 'Primary Role'}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-3 rounded-[0.5em] bg-[#24150D] border border-[#382116] text-[#F5EBDC] text-sm focus:outline-none focus:border-[#D9A84A]"
                  >
                    <option value="athlete">{language === 'pt' ? 'Atleta / Corredor' : 'Athlete / Runner'}</option>
                    <option value="coach">{language === 'pt' ? 'Treinador' : 'Coach / Trainer'}</option>
                    <option value="club">{language === 'pt' ? 'Diretor de Clube' : 'Club Director'}</option>
                    <option value="nutritionist">{language === 'pt' ? 'Nutricionista' : 'Nutritionist'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-[#C4B29E] mb-1.5">
                    {language === 'pt' ? 'Clube / Região' : 'Club / Region'}
                  </label>
                  <input
                    type="text"
                    value={formData.clubOrLocation}
                    onChange={(e) => setFormData({ ...formData, clubOrLocation: e.target.value })}
                    placeholder={language === 'pt' ? 'Ex: Algarve / Lisboa' : 'e.g. Lisbon'}
                    className="w-full px-4 py-3 rounded-[0.5em] bg-[#24150D] border border-[#382116] text-[#F5EBDC] placeholder-[#8A7765] focus:outline-none focus:border-[#D9A84A] text-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button variant="gold" size="md" className="w-full justify-center">
                  {language === 'pt' ? 'Confirmar Acesso Prioritário' : 'Confirm Priority Access'}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-condensed tracking-wider text-[#8A7765] uppercase pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9A84A]" />
                <span>{language === 'pt' ? 'Sem spam · Dados protegidos · Feito em Portugal' : 'Zero spam · Protected data · Made in Portugal'}</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D9A84A]/15 border border-[#D9A84A] flex items-center justify-center mx-auto text-[#D9A84A]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-condensed font-extrabold uppercase text-3xl text-[#F5EBDC]">
              {language === 'pt' ? 'Registo Confirmado!' : 'Access Granted!'}
            </h3>

            <p className="font-sans text-sm text-[#C4B29E] max-w-sm mx-auto">
              {language === 'pt'
                ? 'Obrigado por te juntares à comunidade pioneira da Quilate. Entraremos em contacto assim que o lote inicial estiver preparado.'
                : 'Thank you for joining the Quilate pioneer circle. We will notify you as soon as the first fresh batches are ready.'}
            </p>

            <div className="pt-4">
              <Button variant="dark" size="sm" onClick={onClose}>
                {language === 'pt' ? 'Fechar e Continuar' : 'Close and Return'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const V2ModalWaitlist = ModalWaitlist;
export type V2ModalWaitlistProps = ModalWaitlistProps;

