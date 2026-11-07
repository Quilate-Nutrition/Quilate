export type Language = 'pt' | 'en';

export interface TeamMember {
  id: string;
  name: string;
  role: {
    pt: string;
    en: string;
  };
  image: string;
  bio?: {
    pt: string;
    en: string;
  };
}

export interface ProductSpec {
  id: 'gel' | 'bar';
  name: {
    pt: string;
    en: string;
  };
  timing: {
    pt: string;
    en: string;
  };
  category: {
    pt: string;
    en: string;
  };
  weight: string;
  keyMetric: string;
  secondaryMetric: string;
  ingredients: {
    pt: string;
    en: string;
  };
  variantsOrBadge: {
    pt: string;
    en: string;
  };
  image: string;
  cutout: string;
}

export interface CompetitorRow {
  brand: string;
  originPriceSize: string;
  energySource: {
    pt: string;
    en: string;
  };
  isQuilate?: boolean;
}

export interface BrandValue {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
}
