import React, { useState, lazy, Suspense } from 'react';
import type { Language } from '../types';
import { ShoppingBag, FileText } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

// Code-split heavy nutrition facts modal
const NutritionModal = lazy(() =>
  import('../components/NutritionModal').then((m) => ({ default: m.NutritionModal }))
);

export interface ProductShowcaseProps {
  language: Language;
  onOpenWaitlist?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  language,
}) => {
  const [selectedProduct] = useState<'gel' | 'bar'>('gel');
  const [nutritionModalProduct, setNutritionModalProduct] = useState<'gel' | 'bar' | null>(null);

  return (
    <section
      id="products"
      className="v2-snap-section relative py-28 sm:py-36 bg-[#FAF4EB] text-[#361B12] overflow-hidden border-t border-[#E8DEC9] text-left"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6AA7A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">

            <h2 className="v2-display-lg text-[#361B12]">
              {language === 'pt' ? 'DOIS PRODUTOS. ' : 'TWO PRODUCTS. '}
              <span className="font-script text-[#B88528] lowercase text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline">
                {language === 'pt' ? 'feitos para ti.' : 'made for you.'}
              </span>
            </h2>

            <p className="font-sans text-lg text-[#594738]">
              {language === 'pt'
                ? 'Sem catálogos intermináveis de dezenas de variantes desnecessárias. Apenas o que precisas durante o esforço extremo e para recuperar a musculatura após cruzar a meta.'
                : 'No endless shelves of redundant powders. Only what your body requires during peak exertion and for deep cellular recovery once you cross the finish line.'}
            </p>
          </div>

        </div>

        {/* ---------------------------------------------------------------------
            DUAL GRAND PRODUCT SHOWCASE CARDS (Slide 9 & 10 translation)
            --------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* PRODUCT 01: GEL ENERGÉTICO */}
          <div
            className={`v2-product-card-gel p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border transition-all duration-500 flex flex-col justify-between shadow-md relative overflow-hidden group ${
              selectedProduct === 'gel'
                ? 'border-[#E8DEC9] hover:border-[#C6AA7A]'
                : 'border-[#E8DEC9] hover:border-[#C6AA7A]'
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6AA7A]/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              {/* Product Eyebrow Pill */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B88528]" />
                  <span className="text-xs font-condensed font-bold uppercase tracking-[0.25em] text-[#B88528]">
                    {language === 'pt' ? 'DURANTE O ESFORÇO' : 'DURING THE EFFORT'}
                  </span>
                </div>
                <span className="text-xs font-condensed font-bold px-3 py-1 rounded-[0.5em] bg-[#F4EDE2] text-[#361B12] border border-[#E8DEC9]">
                  40 g
                </span>
              </div>

              {/* Title & Timing */}
              <h3 className="font-condensed font-extrabold uppercase text-4xl sm:text-5xl text-[#361B12] tracking-tight leading-tight">
                {language === 'pt' ? 'Gel Energético' : 'Energy Gel'}
              </h3>
              <p className="font-script text-2xl text-[#B88528] mt-1">
                {language === 'pt' ? 'Energia estável e pura' : 'Steady, pure fuel'}
              </p>

              {/* High-Fidelity Transparent Cutout Image */}
              <div className="relative aspect-[16/10] my-8 rounded-2xl bg-[#FAF4EB] border border-[#E8DEC9] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={getAssetUrl('assets/quilate_energy_gel_transparent.webp')}
                  alt="Gel Energético Quilate"
                  width="600"
                  height="375"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(69,45,35,0.35)] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Key Nutrition Metrics */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9]">
                  <span className="text-[11px] font-condensed font-bold uppercase tracking-wider text-[#594738] block">
                    {language === 'pt' ? 'Hidratos Naturais' : 'Natural Carbs'}
                  </span>
                  <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-[#361B12]">
                    24 g
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9]">
                  <span className="text-[11px] font-condensed font-bold uppercase tracking-wider text-[#B88528] block">
                    {language === 'pt' ? 'Sódio Marinho' : 'Marine Sodium'}
                  </span>
                  <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-[#B88528]">
                    ≈100 mg
                  </span>
                </div>
              </div>

              {/* Ingredients & Specification */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] block mb-1">
                    {language === 'pt' ? 'Ingredientes Puros:' : 'Pure Ingredients:'}
                  </span>
                  <p className="font-sans text-sm text-[#594738] leading-relaxed">
                    {language === 'pt'
                      ? 'Xarope de alfarroba do Algarve, mel puro de serra, sumo de limão fresco e sal marinho tradicional.'
                      : 'Algarve carob syrup, raw Portuguese mountain honey, fresh lemon juice, and traditional Atlantic sea salt.'}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] block mb-1">
                    {language === 'pt' ? 'Variantes Disponíveis:' : 'Available Options:'}
                  </span>
                  <p className="font-sans text-xs text-[#B88528]">
                    {language === 'pt' ? 'Normal (sem cafeína) ou Com Cafeína Natural (50 mg)' : 'Standard (Caffeine-free) or with Natural Caffeine (50mg)'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA & Actions */}
            <div className="pt-8 border-t border-[#E8DEC9] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Out of stock Cart button */}
              <button
                disabled
                className="px-4 py-2.5 rounded-full bg-[#F4EDE2] border border-[#E8DEC9] text-[#7D6857] flex items-center justify-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider cursor-not-allowed opacity-80 shadow-none"
                title={language === 'pt' ? 'Temporariamente esgotado' : 'Temporarily out of stock'}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#A19386]" />
                <span>{language === 'pt' ? 'Adicionar ao Carrinho · Esgotado' : 'Add to Cart · Out of Stock'}</span>
              </button>

              {/* View Nutrition Facts Modal trigger */}
              <button
                onClick={() => setNutritionModalProduct('gel')}
                className="px-4 py-2.5 rounded-full bg-[#361B12] hover:bg-[#452D23] text-[#FAF4EB] flex items-center justify-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-[#C6AA7A]" />
                <span>{language === 'pt' ? 'Ver Tabela Nutricional' : 'View Nutrition Facts'}</span>
              </button>
            </div>
          </div>

          {/* PRODUCT 02: BARRA PROTEICA */}
          <div
            className={`v2-product-card-bar p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border transition-all duration-500 flex flex-col justify-between shadow-md relative overflow-hidden group ${
              selectedProduct === 'bar'
                ? 'border-[#D2723A] ring-1 ring-[#D2723A]/30 shadow-xl'
                : 'border-[#E8DEC9] hover:border-[#D2723A]/50'
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2723A]/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              {/* Product Eyebrow Pill */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D2723A]" />
                  <span className="text-xs font-condensed font-bold uppercase tracking-[0.25em] text-[#D2723A]">
                    {language === 'pt' ? 'DEPOIS DO ESFORÇO' : 'AFTER THE EFFORT'}
                  </span>
                </div>
                <span className="text-xs font-condensed font-bold px-3 py-1 rounded-[0.5em] bg-[#F4EDE2] text-[#361B12] border border-[#E8DEC9]">
                  55 g
                </span>
              </div>

              {/* Title & Timing */}
              <h3 className="font-condensed font-extrabold uppercase text-4xl sm:text-5xl text-[#361B12] tracking-tight leading-tight">
                {language === 'pt' ? 'Barra Proteica' : 'Protein Bar'}
              </h3>
              <p className="font-script text-2xl text-[#D2723A] mt-1">
                {language === 'pt' ? 'Recuperação muscular integral' : 'Integral muscle recovery'}
              </p>

              {/* High-Fidelity Transparent Cutout Image */}
              <div className="relative aspect-[16/10] my-8 rounded-2xl bg-[#FAF4EB] border border-[#E8DEC9] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={getAssetUrl('assets/quilate_protein_bar_transparent.webp')}
                  alt="Barra Proteica Quilate"
                  width="600"
                  height="375"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(69,45,35,0.35)] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Key Nutrition Metrics */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9]">
                  <span className="text-[11px] font-condensed font-bold uppercase tracking-wider text-[#594738] block">
                    {language === 'pt' ? 'Proteína Bioativa' : 'Bioactive Protein'}
                  </span>
                  <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-[#361B12]">
                    ≈17 g
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E8DEC9]">
                  <span className="text-[11px] font-condensed font-bold uppercase tracking-wider text-[#D2723A] block">
                    {language === 'pt' ? 'Valor Calórico' : 'Caloric Energy'}
                  </span>
                  <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-[#D2723A]">
                    ≈210 kcal
                  </span>
                </div>
              </div>

              {/* Ingredients & Specification */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] block mb-1">
                    {language === 'pt' ? 'Ingredientes Puros:' : 'Pure Ingredients:'}
                  </span>
                  <p className="font-sans text-sm text-[#594738] leading-relaxed">
                    {language === 'pt'
                      ? 'Proteína whey, alfarroba do Algarve, amêndoa portuguesa tostada, figo seco do Algarve, mel e sal marinho.'
                      : 'High-purity whey protein, Algarve carob, roasted Portuguese almonds, sun-dried Algarve figs, raw honey, and Atlantic sea salt.'}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#7D6857] block mb-1">
                    {language === 'pt' ? 'Propriedades Chave:' : 'Key Properties:'}
                  </span>
                  <p className="font-sans text-xs text-[#D2723A]">
                    {language === 'pt' ? 'Rica em proteína e fibra saciante natural · Zero polióis industriais' : 'High in protein and natural fiber · Zero artificial polyols or sweeteners'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA & Actions */}
            <div className="pt-8 border-t border-[#E8DEC9] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Out of stock Cart button */}
              <button
                disabled
                className="px-4 py-2.5 rounded-full bg-[#F4EDE2] border border-[#E8DEC9] text-[#7D6857] flex items-center justify-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider cursor-not-allowed opacity-80 shadow-none"
                title={language === 'pt' ? 'Temporariamente esgotado' : 'Temporarily out of stock'}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#A19386]" />
                <span>{language === 'pt' ? 'Adicionar ao Carrinho · Esgotado' : 'Add to Cart · Out of Stock'}</span>
              </button>

              {/* View Nutrition Facts Modal trigger */}
              <button
                onClick={() => setNutritionModalProduct('bar')}
                className="px-4 py-2.5 rounded-full bg-[#361B12] hover:bg-[#452D23] text-[#FAF4EB] flex items-center justify-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-[#D2723A]" />
                <span>{language === 'pt' ? 'Ver Tabela Nutricional' : 'View Nutrition Facts'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Pop-up Modal with Verified Nutritional Declaration (Deferred Code Splitting) */}
      <Suspense fallback={null}>
        {nutritionModalProduct !== null && (
          <NutritionModal
            isOpen={true}
            onClose={() => setNutritionModalProduct(null)}
            initialProduct={nutritionModalProduct || 'gel'}
            language={language}
          />
        )}
      </Suspense>
    </section>
  );
};


export const V2ProductShowcase = ProductShowcase;
export type V2ProductShowcaseProps = ProductShowcaseProps;
