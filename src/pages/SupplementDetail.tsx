
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Info, AlertCircle, Clock, ChevronRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import supplements from "../data/supplements";
import { toast } from "@/components/ui/use-toast";

const SupplementDetail = () => {
  console.log("SupplementDetail rendering");
  const { supplementId } = useParams();
  const [supplement, setSupplement] = useState(null);
  const [relatedSupplements, setRelatedSupplements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    try {
      console.log("SupplementDetail useEffect with ID:", supplementId);
      setIsLoading(true);
      
      // Find the current supplement
      const currentSupplement = supplements.find(s => s.id === supplementId);
      
      if (currentSupplement) {
        console.log("Found supplement:", currentSupplement.name);
        setSupplement(currentSupplement);
        
        // Find related supplements in the same category
        const related = supplements
          .filter(s => s.category === currentSupplement.category && s.id !== currentSupplement.id)
          .slice(0, 3);
        
        setRelatedSupplements(related);
      } else {
        console.warn("Supplement not found with ID:", supplementId);
        setError("Supplement not found");
      }
    } catch (err) {
      console.error("Error in supplement detail:", err);
      setError("Error loading supplement");
    } finally {
      setIsLoading(false);
    }
  }, [supplementId]);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-5 h-5 text-yellow-400" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400" />);
      }
    }
    
    return stars;
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${supplement.name} has been added to your cart.`,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !supplement) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-primary mb-4">Supplement not found</h1>
            <Link to="/category/all" className="text-primary hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all supplements
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to={`/category/${supplement.category.toLowerCase().replace(' & ', '-')}`} className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to {supplement.category}
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <motion.div 
                  className="rounded-2xl overflow-hidden h-80 mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={supplement.image} alt={supplement.name} className="w-full h-full object-cover" />
                </motion.div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-primary/10 rounded-lg p-3 text-center">
                    <div className="text-primary font-medium">{supplement.type}</div>
                    <div className="text-sm text-gray-500">Type</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-center">
                    <div className="text-primary font-medium">{supplement.brand}</div>
                    <div className="text-sm text-gray-500">Brand</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-center">
                    <div className="flex justify-center">
                      {renderStars(supplement.rating)}
                    </div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-display text-primary mb-2">{supplement.name}</h1>
                  <div className="mb-4">
                    <span className="bg-yellow-300 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium">
                      {supplement.category}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-6">{supplement.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <Info className="w-5 h-5 mr-2 text-primary" /> Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {supplement.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-green-100 text-green-700 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-medium flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-primary" /> Recommended Dosage
                      </h3>
                      <p className="text-foreground/70">{supplement.dosage}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium flex items-center mb-2">
                        <AlertCircle className="w-5 h-5 mr-2 text-yellow-500" /> Potential Side Effects
                      </h3>
                      <ul className="space-y-1">
                        {supplement.sideEffects.map((effect, i) => (
                          <li key={i} className="text-foreground/70">• {effect}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {supplement.tags.map((tag, i) => (
                      <span key={i} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 pt-6">
                    <div className="mb-4 sm:mb-0">
                      <span className="text-3xl font-medium text-primary">
                        ${supplement.price.value.toFixed(2)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center justify-center"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Research & Evidence Section */}
          <div className="mb-12 bg-blue-soft/30 rounded-3xl p-8">
            <h2 className="text-2xl font-display text-primary mb-6">Research & Evidence</h2>
            <div className="space-y-4">
              <p className="text-foreground/70">
                <strong>Scientific Research:</strong> {supplement.name} has been studied for its effects on {supplement.tags.slice(0, 2).join(' and ')}. Multiple studies have shown promising results for individuals looking to support these aspects of their health.
              </p>
              <p className="text-foreground/70">
                <strong>How It Works:</strong> {supplement.name} works by supporting your body's natural processes related to {supplement.tags[0]}. It provides essential nutrients that may be difficult to obtain from diet alone.
              </p>
              <p className="text-foreground/70">
                <strong>Quality Assurance:</strong> Our {supplement.name} is manufactured in FDA-registered facilities and undergoes rigorous testing for purity and potency. We ensure that what's on the label is exactly what's in the bottle.
              </p>
            </div>
          </div>
          
          {/* Related Supplements */}
          {relatedSupplements.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-display text-primary mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSupplements.map((relSupplement, index) => (
                  <motion.div
                    key={relSupplement.id}
                    className="bg-gradient-to-br from-blue-soft to-purple-soft rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className="mb-3 h-32 rounded-lg overflow-hidden">
                      <img 
                        src={relSupplement.image} 
                        alt={relSupplement.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-display text-primary mb-1">{relSupplement.name}</h3>
                    <p className="text-foreground/70 text-sm mb-3">{relSupplement.description.substring(0, 60)}...</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">${relSupplement.price.value.toFixed(2)}</span>
                      <Link 
                        to={`/supplements/${relSupplement.id}`} 
                        className="text-primary hover:text-secondary flex items-center text-sm"
                      >
                        View details <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* FAQ Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-display text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-primary mb-2">How long does it take to see results?</h3>
                <p className="text-foreground/70">Most users report noticeable benefits within 2-4 weeks of consistent use. However, results may vary depending on individual factors like diet, lifestyle, and overall health.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-primary mb-2">Can I take this with other supplements?</h3>
                <p className="text-foreground/70">In general, {supplement.name} can be taken with other supplements. However, it's always recommended to consult with a healthcare professional before combining multiple supplements, especially if you're taking any medications.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-primary mb-2">Is this supplement suitable for vegetarians/vegans?</h3>
                <p className="text-foreground/70">
                  {supplement.name.toLowerCase().includes('fish') 
                    ? `${supplement.name} is derived from marine sources and is not suitable for vegetarians or vegans.` 
                    : `${supplement.name} is generally suitable for vegetarians. Vegans should check the specific product as some may contain gelatin capsules.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupplementDetail;
