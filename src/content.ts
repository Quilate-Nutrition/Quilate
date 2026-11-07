import type { TeamMember, ProductSpec, CompetitorRow, BrandValue } from './types';
import { getAssetUrl } from './utils/asset';

export const teamMembers: TeamMember[] = [
  {
    id: 'mariana',
    name: 'Mariana',
    role: {
      pt: 'Chief Executive Officer',
      en: 'Chief Executive Officer',
    },
    image: getAssetUrl('assets/team_mariana_ceo.webp'),
    bio: {
      pt: 'Liderança estratégica e visão para levar o ouro natural português a todos os atletas de resistência.',
      en: 'Strategic leadership and brand vision to deliver Portugal\'s natural gold to endurance athletes everywhere.'
    }
  },
  {
    id: 'eduardo',
    name: 'Eduardo',
    role: {
      pt: 'Operations and Supply Chain Manager',
      en: 'Operations and Supply Chain Manager',
    },
    image: getAssetUrl('assets/team_eduardo_operations.webp'),
    bio: {
      pt: 'Otimização de processos produtivos e seleção direta dos produtores de alfarroba do Algarve.',
      en: 'Production optimization and direct sourcing with Algarve carob and honey producers.'
    }
  },
  {
    id: 'joao',
    name: 'João',
    role: {
      pt: 'Finance and Business Manager',
      en: 'Finance and Business Manager',
    },
    image: getAssetUrl('assets/team_joao_finance.webp'),
    bio: {
      pt: 'Planeamento financeiro, viabilidade económica e expansão de mercado nacional e internacional.',
      en: 'Financial planning, economic viability, and commercial expansion across domestic and global markets.'
    }
  },
  {
    id: 'francisco',
    name: 'Francisco',
    role: {
      pt: 'Product Development Manager',
      en: 'Product Development Manager',
    },
    image: getAssetUrl('assets/team_francisco_product.webp'),
    bio: {
      pt: 'Engenharia alimentar e formulação natural de alta digestibilidade e performance atlética.',
      en: 'Food engineering and natural formulation focused on high bioavailability and athletic performance.'
    }
  },
  {
    id: 'carolina',
    name: 'Carolina',
    role: {
      pt: 'Marketing and Brand Manager',
      en: 'Marketing and Brand Manager',
    },
    image: getAssetUrl('assets/team_carolina_marketing.webp'),
    bio: {
      pt: 'Posicionamento de marca, ligação à comunidade de trail running e comunicação transparente.',
      en: 'Brand positioning, connection to the trail running community, and transparent communication.'
    }
  },
];

export const products: ProductSpec[] = [
  {
    id: 'gel',
    name: {
      pt: 'Gel Energético',
      en: 'Energy Gel',
    },
    timing: {
      pt: 'DURANTE O ESFORÇO',
      en: 'DURING THE EFFORT',
    },
    category: {
      pt: 'D U R A N T E  ·  E S S E N C I A L',
      en: 'D U R I N G  ·  C O R E',
    },
    weight: '40 g',
    keyMetric: '≈25 g carbs',
    secondaryMetric: '≈100 mg sodium',
    ingredients: {
      pt: 'Xarope de alfarroba do Algarve, mel, limão, sal marinho.',
      en: 'Algarve carob syrup, honey, lemon, sea salt.',
    },
    variantsOrBadge: {
      pt: 'Normal ou Com cafeína (50 mg)',
      en: 'Standard or With Caffeine (50mg)',
    },
    image: getAssetUrl('assets/quilate_energy_gel_transparent.webp'),
    cutout: getAssetUrl('assets/quilate_energy_gel_transparent.webp'),
  },
  {
    id: 'bar',
    name: {
      pt: 'Barra Proteica',
      en: 'Protein Bar',
    },
    timing: {
      pt: 'DEPOIS DO ESFORÇO',
      en: 'AFTER THE EFFORT',
    },
    category: {
      pt: 'D E P O I S  ·  R E C U P E R A Ç Ã O',
      en: 'A F T E R  ·  R E C O V E R Y',
    },
    weight: '55 g',
    keyMetric: '≈17 g proteína',
    secondaryMetric: '≈210 kcal',
    ingredients: {
      pt: 'Proteína whey, alfarroba, amêndoa portuguesa, figo do Algarve, mel, sal marinho.',
      en: 'Whey protein, carob, Portuguese almonds, Algarve figs, honey, sea salt.',
    },
    variantsOrBadge: {
      pt: 'Rica em proteína e fibra',
      en: 'High in Protein and Fibre',
    },
    image: getAssetUrl('assets/quilate_protein_bar_transparent.webp'),
    cutout: getAssetUrl('assets/quilate_protein_bar_transparent.webp'),
  },
];

export const brandValues: BrandValue[] = [
  {
    id: 'authenticity',
    title: {
      pt: 'AUTENTICIDADE',
      en: 'AUTHENTICITY',
    },
    description: {
      pt: 'Valorizar as nossas raízes portuguesas e os produtores por trás de cada ingrediente puro.',
      en: 'Valuing our Portuguese roots and the producers behind every ingredient.',
    },
    icon: getAssetUrl('assets/icon_authenticity_carob.webp'),
  },
  {
    id: 'excellence',
    title: {
      pt: 'EXCELÊNCIA',
      en: 'EXCELLENCE',
    },
    description: {
      pt: 'Exigir os mais elevados padrões de qualidade em todas as etapas do desenvolvimento e produção.',
      en: 'Striving for the highest standards of quality throughout every stage of product development and production.',
    },
    icon: getAssetUrl('assets/icon_excellence_medal.webp'),
  },
  {
    id: 'adaptability',
    title: {
      pt: 'ADAPTABILIDADE',
      en: 'ADAPTABILITY',
    },
    description: {
      pt: 'Ouvir os atletas e a nossa comunidade desportiva, evoluindo com as suas necessidades e com práticas mais sustentáveis.',
      en: 'Listening to athletes and our community, and evolving with their needs and with more sustainable practices.',
    },
    icon: getAssetUrl('assets/icon_adaptability_chart.webp'),
  },
];

export const competitors: CompetitorRow[] = [
  {
    brand: 'Snupe',
    originPriceSize: 'Portugal · 2.50 € (76 g)',
    energySource: {
      pt: 'Glicose + isomaltulose',
      en: 'Glucose + isomaltulose',
    },
  },
  {
    brand: 'Innerme',
    originPriceSize: 'Belgium · 3.38 € (40 g)',
    energySource: {
      pt: 'Xarope de arroz + mel',
      en: 'Rice syrup + honey',
    },
  },
  {
    brand: 'Meltonic',
    originPriceSize: 'France · 2.99 € (20 g)',
    energySource: {
      pt: 'Mel',
      en: 'Honey',
    },
  },
  {
    brand: 'SiS · GU · Maurten',
    originPriceSize: 'Global · 1.59 to 3.25 € (40 to 60 g)',
    energySource: {
      pt: 'Maltodextrina ou xarope de glicose',
      en: 'Maltodextrin or glucose syrup',
    },
  },
  {
    brand: 'Quilate',
    originPriceSize: 'Portugal · ≈ 2.20 € (40 g, target)',
    energySource: {
      pt: 'Alfarroba portuguesa + mel',
      en: 'Portuguese carob + honey',
    },
    isQuilate: true,
  },
];

export const etymologySteps = [
  {
    step: '1',
    word: 'Keration',
    greek: 'κεράτιον',
    desc: {
      pt: 'Da palavra grega associada às sementes de alfarroba, historicamente usadas como pequenos pesos pela sua extraordinária uniformidade.',
      en: 'From the Greek word associated with carob seeds, historically used as small weights due to their uniform mass.',
    },
    highlight: false,
  },
  {
    step: '2',
    word: 'Carat',
    desc: {
      pt: 'Com a expansão do comércio mediterrânico, as sementes de alfarroba tornaram-se a unidade oficial de pesagem de ouro e pedras preciosas.',
      en: 'The seeds became the global standard unit used to weigh gold, diamonds, and precious gems.',
    },
    highlight: false,
  },
  {
    step: '3',
    word: 'Quilate',
    desc: {
      pt: 'A palavra portuguesa para quilate: simboliza o valor precioso da nossa herança, a nobreza da terra e a pureza do combustível que criamos.',
      en: 'The Portuguese word for carat, representing the precious value of our roots, pure nature, and athletic identity.',
    },
    highlight: true,
  },
];

export const naturalIngredientsCatalog = [
  {
    name: { pt: 'Alfarroba do Algarve', en: 'Algarve Carob' },
    role: { pt: 'Base Energética & Digestiva', en: 'Energy Base & Digestion' },
    desc: {
      pt: 'Rica em açúcares naturais de libertação equilibrada, antioxidantes e minerais. Não provoca picos bruscos de insulina e é suave no trato gastrointestinal.',
      en: 'Rich in balanced natural carbohydrates, antioxidants, and minerals. Gentle on the stomach with zero gastrointestinal distress.'
    },
    origin: 'Algarve, Portugal'
  },
  {
    name: { pt: 'Mel Puro Português', en: 'Raw Portuguese Honey' },
    role: { pt: 'Combustível Imediato', en: 'Rapid Fuel' },
    desc: {
      pt: 'Proporciona frutose e glicose naturais de absorção rápida em sinergia com a alfarroba, conferindo sabor requintado e enzimas ativas.',
      en: 'Provides natural bioavailable fructose and glucose in synergy with carob, offering instant glycogen replenishment.'
    },
    origin: 'Serras de Portugal'
  },
  {
    name: { pt: 'Sumo de Limão Fresco', en: 'Fresh Lemon Juice' },
    role: { pt: 'Eletrólitos & Frescura', en: 'Electrolytes & Balance' },
    desc: {
      pt: 'Equilibra o paladar com acidez cítrica refrescante, prevenindo a saturação do sabor doce durante provas longas de ultra trail.',
      en: 'Balances flavor profiles with refreshing natural citric acidity, cutting through sweet palate fatigue in ultra-endurance.'
    },
    origin: 'Pomares Algarvios'
  },
  {
    name: { pt: 'Sal Marinho Tradicional', en: 'Traditional Sea Salt' },
    role: { pt: 'Reposição de Sódio', en: 'Sodium Balance' },
    desc: {
      pt: 'Flor de sal e sal marinho das salinas portuguesas com oligoelementos intactos, essencial para prevenir cãibras musculares.',
      en: 'Pure unrefined sea salt from Atlantic salt pans, delivering essential bio-identical sodium to prevent cramps.'
    },
    origin: 'Ria Formosa / Castro Marim'
  },
  {
    name: { pt: 'Amêndoa Portuguesa', en: 'Portuguese Almonds' },
    role: { pt: 'Gorduras Boas & Sabor', en: 'Healthy Lipids & Texture' },
    desc: {
      pt: 'Gorduras monoinsaturadas, vitamina E e crocância natural que auxiliam na saciedade e reparação celular prolongada.',
      en: 'Heart-healthy fats, natural vitamin E, and satisfying crunch for sustained cellular recovery.'
    },
    origin: 'Douro / Algarve'
  },
  {
    name: { pt: 'Figo do Algarve', en: 'Algarve Figs' },
    role: { pt: 'Fibra & Minerais', en: 'Fibre & Micronutrients' },
    desc: {
      pt: 'Fonte lendária de potássio, magnésio e doçura aveludada tradicional da doçaria conventual e costeira portuguesa.',
      en: 'A historic source of potassium, magnesium, and silky sweetness from Portugal\'s sunny southern coast.'
    },
    origin: 'Barrocal Algarvio'
  }
];
