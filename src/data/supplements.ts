
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
}

const supplements: Supplement[] = [
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
    matchScore: 0
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
    matchScore: 0
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
    matchScore: 0
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
    matchScore: 0
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
    matchScore: 0
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
    matchScore: 0
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
