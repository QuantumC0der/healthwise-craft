
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  const handleGetStarted = () => {
    const assessmentElement = document.getElementById('assessment-section');
    if (assessmentElement) {
      assessmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-mint-100/60 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-sm font-medium">Personalized Health Supplements</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6"
            >
              Your Path To <span className="text-primary relative">
                Optimal Health
                <span className="absolute left-0 bottom-1 w-full h-2 bg-primary/20 -z-10 rounded"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Discover science-backed supplement recommendations personalized to your unique health profile, goals, and preferences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="shadow-md hover-glow"
              >
                Get Started
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover-lift"
              >
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-sage-${i*100} flex items-center justify-center text-xs font-medium text-white`}>
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">Trusted by <span className="text-primary">5,000+</span> health-conscious users</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sage-100 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
                  alt="Supplement health"
                  className="w-full h-auto"
                />
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-2">
                    Personalized Supplements
                  </h3>
                  <p className="text-muted-foreground">
                    Get recommendations based on your unique health profile and goals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200 rounded-full z-0"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-32 bg-sage-100 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Production credit */}
      <div className="absolute bottom-2 right-4 text-xs text-sage-700 opacity-70 font-display italic">
        A Rishul Chanana Production
      </div>
    </div>
  );
};

export default Hero;
