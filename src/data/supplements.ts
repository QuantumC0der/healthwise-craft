
interface Supplement {
  id: string;
  name: string;
  type: string;
  description: string;
  benefits: string[];
  dosage: string;
  sideEffects: string[];
  price: {
    value: number;
    currency: string;
  };
  brand: string;
  rating: number;
  image: string;
  tags: string[];
  matchScore: number;
  category: string;
}

const supplements: Supplement[] = [
  // Vitamins & Minerals
  {
    id: "s1",
    name: "Omega-3 Fish Oil",
    type: "Essential Fatty Acid",
    description: "High-quality fish oil supplement rich in EPA and DHA for heart and brain health.",
    benefits: [
      "Supports cardiovascular health",
      "Promotes brain function",
      "Reduces inflammation",
      "Supports joint health"
    ],
    dosage: "1000-2000mg daily with food",
    sideEffects: [
      "Fishy aftertaste",
      "Mild digestive issues"
    ],
    price: {
      value: 24.99,
      currency: "USD"
    },
    brand: "PureSea",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1829&auto=format&fit=crop",
    tags: ["heart health", "brain health", "joint health", "anti-inflammatory"],
    matchScore: 0,
    category: "Omega Fatty Acids"
  },
  {
    id: "s2",
    name: "Vitamin D3",
    type: "Vitamin",
    description: "Essential vitamin D3 (cholecalciferol) supplement for immune and bone health.",
    benefits: [
      "Supports bone health",
      "Enhances immune function",
      "Improves mood",
      "Helps calcium absorption"
    ],
    dosage: "2000-5000 IU daily with a meal",
    sideEffects: [
      "Rare at recommended doses"
    ],
    price: {
      value: 18.99,
      currency: "USD"
    },
    brand: "SunVital",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop",
    tags: ["bone health", "immune support", "mood support", "vitamin"],
    matchScore: 0,
    category: "Vitamins & Minerals"
  },
  {
    id: "s3",
    name: "Magnesium Glycinate",
    type: "Mineral",
    description: "Highly absorbable form of magnesium that supports muscle and nervous system function.",
    benefits: [
      "Relieves muscle tension",
      "Improves sleep quality",
      "Supports stress response",
      "Aids energy production"
    ],
    dosage: "300-400mg daily before bedtime",
    sideEffects: [
      "Mild digestive discomfort"
    ],
    price: {
      value: 21.95,
      currency: "USD"
    },
    brand: "RelaxPure",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop",
    tags: ["sleep support", "stress relief", "muscle recovery", "mineral"],
    matchScore: 0,
    category: "Vitamins & Minerals"
  },
  {
    id: "s4",
    name: "Probiotic Complex",
    type: "Digestive Health",
    description: "Multi-strain probiotic formula to support gut microbiome and digestive health.",
    benefits: [
      "Improves digestion",
      "Enhances immune function",
      "Reduces bloating",
      "Supports regular bowel movements"
    ],
    dosage: "1 capsule daily with or without food",
    sideEffects: [
      "Temporary gas or bloating when starting"
    ],
    price: {
      value: 29.99,
      currency: "USD"
    },
    brand: "GutBalance",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["gut health", "immune support", "digestive health", "microbiome"],
    matchScore: 0,
    category: "Digestive Health"
  },
  {
    id: "s5",
    name: "Ashwagandha Extract",
    type: "Adaptogen",
    description: "Traditional herb that helps the body manage stress and supports overall wellbeing.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves mental clarity",
      "Supports hormone balance",
      "Enhances energy levels"
    ],
    dosage: "300-600mg daily",
    sideEffects: [
      "Drowsiness in some people",
      "Digestive upset"
    ],
    price: {
      value: 23.50,
      currency: "USD"
    },
    brand: "ZenHerbs",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop",
    tags: ["stress relief", "adaptogen", "mental clarity", "energy", "mood support"],
    matchScore: 0,
    category: "Herbs & Botanicals"
  },
  {
    id: "s6",
    name: "Vitamin B Complex",
    type: "Vitamin",
    description: "Complete B vitamin complex supporting energy, brain function, and cell health.",
    benefits: [
      "Boosts energy levels",
      "Supports brain function",
      "Helps red blood cell formation",
      "Aids metabolism"
    ],
    dosage: "1 capsule daily with food",
    sideEffects: [
      "Bright yellow urine",
      "Mild stomach upset if taken without food"
    ],
    price: {
      value: 19.99,
      currency: "USD"
    },
    brand: "VitalB",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1974&auto=format&fit=crop",
    tags: ["energy", "brain health", "metabolism", "vitamin"],
    matchScore: 0,
    category: "Vitamins & Minerals"
  },
  
  // Additional supplements
  {
    id: "s7",
    name: "Zinc Picolinate",
    type: "Mineral",
    description: "Highly bioavailable form of zinc essential for immune function and hormone production.",
    benefits: [
      "Strengthens immune system",
      "Supports skin health",
      "Aids in protein synthesis",
      "Supports reproductive health"
    ],
    dosage: "15-30mg daily with food",
    sideEffects: [
      "Nausea if taken on empty stomach",
      "May interfere with copper absorption"
    ],
    price: {
      value: 14.99,
      currency: "USD"
    },
    brand: "MineralLife",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584308074438-75a77215abf9?q=80&w=2070&auto=format&fit=crop",
    tags: ["immune support", "skin health", "hormone support", "mineral"],
    matchScore: 0,
    category: "Vitamins & Minerals"
  },
  {
    id: "s8",
    name: "Coenzyme Q10",
    type: "Antioxidant",
    description: "Natural antioxidant that supports cellular energy production and cardiovascular health.",
    benefits: [
      "Supports heart health",
      "Boosts cellular energy",
      "Reduces oxidative stress",
      "May help with statin side effects"
    ],
    dosage: "100-200mg daily with a fatty meal",
    sideEffects: [
      "Mild insomnia",
      "Digestive discomfort"
    ],
    price: {
      value: 32.99,
      currency: "USD"
    },
    brand: "CoQ-Pure",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?q=80&w=2070&auto=format&fit=crop",
    tags: ["heart health", "energy", "antioxidant", "anti-aging"],
    matchScore: 0,
    category: "Antioxidants"
  },
  {
    id: "s9",
    name: "Turmeric Curcumin",
    type: "Anti-inflammatory",
    description: "Potent anti-inflammatory herb with curcumin extracted from turmeric root.",
    benefits: [
      "Reduces inflammation",
      "Supports joint health",
      "Provides antioxidant protection",
      "Supports brain function"
    ],
    dosage: "500-1000mg daily with black pepper for absorption",
    sideEffects: [
      "May interact with blood thinners",
      "Digestive discomfort in some people"
    ],
    price: {
      value: 25.99,
      currency: "USD"
    },
    brand: "GoldenRoot",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2070&auto=format&fit=crop",
    tags: ["anti-inflammatory", "joint health", "antioxidant", "brain health"],
    matchScore: 0,
    category: "Herbs & Botanicals"
  },
  {
    id: "s10",
    name: "Collagen Peptides",
    type: "Protein",
    description: "Hydrolyzed collagen peptides that support skin, joint, and gut health.",
    benefits: [
      "Improves skin elasticity",
      "Strengthens hair and nails",
      "Supports joint function",
      "Aids gut lining integrity"
    ],
    dosage: "10-20g daily mixed in liquids or food",
    sideEffects: [
      "Mild digestive discomfort",
      "Unpleasant taste for some people"
    ],
    price: {
      value: 34.99,
      currency: "USD"
    },
    brand: "PureCollagen",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606497353979-bc339fb51a90?q=80&w=2071&auto=format&fit=crop",
    tags: ["skin health", "joint health", "gut health", "beauty", "protein"],
    matchScore: 0,
    category: "Protein & Amino Acids"
  },
  {
    id: "s11",
    name: "L-Theanine",
    type: "Amino Acid",
    description: "Amino acid found in tea leaves that promotes calm focus without drowsiness.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus and attention",
      "Promotes relaxation without drowsiness",
      "Supports sleep quality"
    ],
    dosage: "100-200mg daily, often paired with caffeine",
    sideEffects: [
      "Rarely causes headaches",
      "May lower blood pressure slightly"
    ],
    price: {
      value: 19.50,
      currency: "USD"
    },
    brand: "CalmFocus",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571501406700-8fae5a325adf?q=80&w=2069&auto=format&fit=crop",
    tags: ["stress relief", "focus", "relaxation", "cognitive support", "amino acid"],
    matchScore: 0,
    category: "Protein & Amino Acids"
  },
  {
    id: "s12",
    name: "Creatine Monohydrate",
    type: "Performance Enhancer",
    description: "Naturally occurring compound that supports muscle energy, strength and exercise performance.",
    benefits: [
      "Increases muscle strength and power",
      "Improves high-intensity exercise performance",
      "Supports muscle recovery",
      "May provide cognitive benefits"
    ],
    dosage: "3-5g daily, no loading phase necessary",
    sideEffects: [
      "Water retention",
      "Digestive discomfort at high doses"
    ],
    price: {
      value: 22.99,
      currency: "USD"
    },
    brand: "PurePerformance",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579243813131-6c7844a04b0f?q=80&w=2069&auto=format&fit=crop",
    tags: ["muscle strength", "exercise performance", "recovery", "sports nutrition"],
    matchScore: 0,
    category: "Sports & Performance"
  },
  {
    id: "s13",
    name: "Lion's Mane Mushroom",
    type: "Medicinal Mushroom",
    description: "Cognitive-enhancing mushroom that supports brain health and nervous system function.",
    benefits: [
      "Supports cognitive function",
      "May stimulate nerve growth factor",
      "Provides neuroprotection",
      "Supports mental clarity"
    ],
    dosage: "500-1000mg extract daily",
    sideEffects: [
      "Digestive discomfort",
      "Possible allergic reactions"
    ],
    price: {
      value: 29.95,
      currency: "USD"
    },
    brand: "MycoMind",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608030609295-a9323e3cda5b?q=80&w=2070&auto=format&fit=crop",
    tags: ["cognitive support", "brain health", "focus", "neuroprotection", "mushroom"],
    matchScore: 0,
    category: "Herbs & Botanicals"
  },
  {
    id: "s14",
    name: "Berberine",
    type: "Plant Compound",
    description: "Plant alkaloid that supports metabolic health and healthy blood glucose levels.",
    benefits: [
      "Supports healthy blood sugar levels",
      "May improve insulin sensitivity",
      "Supports gut health",
      "Promotes cardiovascular health"
    ],
    dosage: "500mg 1-3 times daily with meals",
    sideEffects: [
      "Digestive discomfort",
      "May interact with certain medications"
    ],
    price: {
      value: 27.95,
      currency: "USD"
    },
    brand: "MetaBalance",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop",
    tags: ["blood sugar", "metabolic health", "gut health", "heart health"],
    matchScore: 0,
    category: "Herbs & Botanicals"
  },
  {
    id: "s15",
    name: "Glutamine",
    type: "Amino Acid",
    description: "Conditionally essential amino acid that supports gut health, immune function, and recovery.",
    benefits: [
      "Supports gut lining integrity",
      "Aids muscle recovery",
      "Supports immune function",
      "May reduce exercise-induced muscle soreness"
    ],
    dosage: "5-10g daily, split into multiple doses",
    sideEffects: [
      "Generally well-tolerated",
      "May cause constipation at high doses"
    ],
    price: {
      value: 24.99,
      currency: "USD"
    },
    brand: "RecoverWell",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1550611343-88c7e3e0435b?q=80&w=2070&auto=format&fit=crop",
    tags: ["gut health", "recovery", "immune support", "sports nutrition", "amino acid"],
    matchScore: 0,
    category: "Protein & Amino Acids"
  },
  {
    id: "s16",
    name: "Melatonin",
    type: "Sleep Aid",
    description: "Natural hormone that regulates sleep-wake cycles and supports quality sleep.",
    benefits: [
      "Helps regulate sleep cycles",
      "Reduces time to fall asleep",
      "May improve sleep quality",
      "Useful for jet lag and shift work"
    ],
    dosage: "0.5-5mg 30-60 minutes before bedtime",
    sideEffects: [
      "Grogginess the next morning",
      "Vivid dreams or nightmares",
      "Headache"
    ],
    price: {
      value: 12.99,
      currency: "USD"
    },
    brand: "SleepWell",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?q=80&w=2070&auto=format&fit=crop",
    tags: ["sleep support", "circadian rhythm", "jet lag", "insomnia"],
    matchScore: 0,
    category: "Sleep & Recovery"
  },
  {
    id: "s17",
    name: "Rhodiola Rosea",
    type: "Adaptogen",
    description: "Arctic root adaptogen that helps the body adapt to stress and supports energy.",
    benefits: [
      "Reduces fatigue",
      "Enhances mental performance under stress",
      "Improves exercise performance",
      "Supports mood balance"
    ],
    dosage: "200-600mg daily of a standardized extract",
    sideEffects: [
      "Dizziness",
      "Dry mouth",
      "Agitation in sensitive individuals"
    ],
    price: {
      value: 26.99,
      currency: "USD"
    },
    brand: "AdaptWell",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590597519297-0ec67f62ba04?q=80&w=2069&auto=format&fit=crop",
    tags: ["stress relief", "energy", "mental performance", "adaptogen"],
    matchScore: 0,
    category: "Herbs & Botanicals"
  },
  {
    id: "s18",
    name: "Beta-Alanine",
    type: "Performance Enhancer",
    description: "Amino acid that buffers lactic acid buildup during exercise, improving endurance.",
    benefits: [
      "Improves muscular endurance",
      "Delays muscle fatigue",
      "Enhances high-intensity exercise performance",
      "Increases work capacity"
    ],
    dosage: "3-5g daily, split into smaller doses to reduce tingling",
    sideEffects: [
      "Harmless tingling sensation (paresthesia)",
      "Flushing"
    ],
    price: {
      value: 19.99,
      currency: "USD"
    },
    brand: "EnduroPeak",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop",
    tags: ["endurance", "performance", "fatigue resistance", "sports nutrition"],
    matchScore: 0,
    category: "Sports & Performance"
  },
  {
    id: "s19",
    name: "Spirulina",
    type: "Superfood",
    description: "Nutrient-dense blue-green algae rich in protein, vitamins, minerals, and antioxidants.",
    benefits: [
      "Provides complete plant protein",
      "Rich in antioxidants",
      "Supports immune function",
      "May improve endurance and muscle strength"
    ],
    dosage: "3-5g daily, mixed in water or smoothies",
    sideEffects: [
      "Digestive discomfort",
      "Green teeth or tongue",
      "Algae taste"
    ],
    price: {
      value: 28.99,
      currency: "USD"
    },
    brand: "PureAlgae",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1629209866582-e49012694fbd?q=80&w=2069&auto=format&fit=crop",
    tags: ["superfood", "protein", "antioxidant", "greens", "detox"],
    matchScore: 0,
    category: "Superfoods"
  },
  {
    id: "s20",
    name: "N-Acetyl Cysteine",
    type: "Amino Acid Derivative",
    description: "Powerful antioxidant and precursor to glutathione that supports respiratory and liver health.",
    benefits: [
      "Supports respiratory health",
      "Boosts glutathione production",
      "Supports liver detoxification",
      "May improve mental health"
    ],
    dosage: "600-1800mg daily, divided into 2-3 doses",
    sideEffects: [
      "Nausea",
      "Vomiting",
      "Unpleasant smell"
    ],
    price: {
      value: 22.99,
      currency: "USD"
    },
    brand: "DetoxPure",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563246583-47ac23ecf3c2?q=80&w=2070&auto=format&fit=crop",
    tags: ["antioxidant", "liver health", "respiratory health", "detox", "glutathione"],
    matchScore: 0,
    category: "Protein & Amino Acids"
  }
];

export function getRecommendedSupplements(
  healthGoals: string[],
  dietaryPreferences: string[],
  healthConditions: string[],
  allergies: string[]
): Supplement[] {
  // Create a copy of supplements to work with
  const supplementsWithScores = supplements.map(supplement => ({
    ...supplement,
    matchScore: 0
  }));

  // Score each supplement based on user preferences
  supplementsWithScores.forEach(supplement => {
    // Match with health goals
    healthGoals.forEach(goal => {
      if (supplement.tags.some(tag => tag.toLowerCase().includes(goal.toLowerCase()))) {
        supplement.matchScore += 2;
      }
      
      if (supplement.benefits.some(benefit => benefit.toLowerCase().includes(goal.toLowerCase()))) {
        supplement.matchScore += 1;
      }
    });

    // Consider dietary preferences
    dietaryPreferences.forEach(preference => {
      // For vegetarians/vegans, avoid fish oil
      if (
        (preference.toLowerCase().includes('vegan') || preference.toLowerCase().includes('vegetarian')) && 
        supplement.name.toLowerCase().includes('fish')
      ) {
        supplement.matchScore -= 10; // Make it very unlikely to recommend
      }
    });

    // Consider health conditions
    healthConditions.forEach(condition => {
      if (supplement.tags.some(tag => tag.toLowerCase().includes(condition.toLowerCase()))) {
        supplement.matchScore += 2;
      }
    });

    // Check for allergies
    allergies.forEach(allergy => {
      if (
        supplement.name.toLowerCase().includes(allergy.toLowerCase()) || 
        supplement.description.toLowerCase().includes(allergy.toLowerCase())
      ) {
        supplement.matchScore -= 10; // Avoid recommending allergens
      }
    });
  });

  // Filter out negative scores (potential allergens or dietary conflicts)
  const filteredSupplements = supplementsWithScores.filter(s => s.matchScore > 0);
  
  // Sort by match score
  const sortedSupplements = filteredSupplements.sort((a, b) => b.matchScore - a.matchScore);
  
  // Return top matches
  return sortedSupplements;
}

export default supplements;
