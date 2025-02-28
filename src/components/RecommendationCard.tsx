
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, ShoppingCart, Heart, Info } from 'lucide-react';

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

interface RecommendationCardProps {
  supplement: Supplement;
  index: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ supplement, index }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
      }
    }
    
    return stars;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md border border-sage-100 overflow-hidden"
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <div className="aspect-square rounded-lg overflow-hidden bg-sage-50">
              <img
                src={supplement.image}
                alt={supplement.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                {supplement.type}
              </span>
              <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2 py-0.5 rounded-full">
                {supplement.brand}
              </span>
            </div>
            
            <h3 className="text-xl font-medium mb-1">{supplement.name}</h3>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {renderStars(supplement.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {supplement.rating.toFixed(1)}
              </span>
            </div>
            
            <p className="text-muted-foreground mb-4">
              {supplement.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {supplement.tags.map(tag => (
                <span key={tag} className="text-xs bg-sage-50 text-sage-700 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-baseline">
                <span className="text-xl font-medium">
                  {supplement.price.currency === 'USD' ? '$' : supplement.price.currency}
                  {supplement.price.value.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  / bottle
                </span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-md px-4 py-2 bg-white border border-sage-200 text-sage-700 hover:bg-sage-50 transition-colors">
                  <Heart className="w-4 h-4 mr-1" />
                  Save
                </button>
                <button className="flex items-center justify-center rounded-md px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={toggleExpanded}
          className="mt-4 w-full flex items-center justify-center py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show Details
            </>
          )}
        </button>
        
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 border-t border-sage-100 pt-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-1 text-primary" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {supplement.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Recommended Dosage</h4>
                  <p className="text-sm">{supplement.dosage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Potential Side Effects</h4>
                  <ul className="space-y-1">
                    {supplement.sideEffects.map((effect, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span className="text-sm">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
