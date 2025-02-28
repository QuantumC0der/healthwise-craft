
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    content: "The personalized supplement recommendations were spot on! I've been following them for a month and have noticed a significant improvement in my energy levels during workouts.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    content: "As someone who spends long hours at a desk, I needed help with focus and energy. The recommended supplements have made a noticeable difference in my productivity and mental clarity.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    content: "I was skeptical at first, but the personalized approach really works. The supplements suggested for my stress and sleep issues have transformed my rest quality.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Render stars based on rating
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            // Full star
            return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
          } else if (i === fullStars && hasHalfStar) {
            // Half star
            return (
              <div key={i} className="relative">
                <Star className="w-4 h-4 text-yellow-400" />
                <div className="absolute inset-0 overflow-hidden w-[50%]">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            );
          } else {
            // Empty star
            return <Star key={i} className="w-4 h-4 text-yellow-400" />;
          }
        })}
      </div>
    );
  };
  
  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real people, real results. Discover how our personalized supplement recommendations 
            have helped thousands improve their health and wellness.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-sage-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-sage-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-sage-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-sage-700" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <motion.div 
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-sage-100 p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 object-cover rounded-full border-2 border-primary/20" 
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="mb-3">
                    {renderRating(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl font-medium mb-4 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-medium">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-sage-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
