
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sage-50 to-mint-50 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint-100"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-sage-100"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium">
                Personalized Health Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6"
            >
              Discover Your Perfect 
              <span className="text-primary"> Supplement Match</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Take our personalized assessment and get science-backed supplement 
              recommendations tailored to your unique health profile and wellness goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="shadow-md">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-medium">5,000+</span> health-conscious individuals
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-3xl shadow-xl overflow-hidden border border-sage-100">
                <img 
                  src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Personalized supplement recommendations" 
                  className="w-full h-auto"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h3 className="text-xl font-medium mb-2">Your Personalized Plan</h3>
                  <p className="text-white/80">Tailored supplements based on your unique needs</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 border border-sage-100 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">96%</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Accuracy</p>
                    <p className="text-xs text-muted-foreground">In recommendations</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4 border border-sage-100 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium">3min</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Quick Assessment</span><br/>
                    <span className="text-xs text-muted-foreground">Get results fast</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
