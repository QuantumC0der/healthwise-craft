
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do personalized supplement recommendations work?",
    answer: "Our system analyzes your health profile, goals, and preferences based on your questionnaire responses. We use this data to match you with supplements that are most likely to benefit your specific needs. The more information you provide, the more tailored your recommendations will be."
  },
  {
    question: "Are the recommended supplements scientifically backed?",
    answer: "Yes, all of our supplement recommendations are backed by scientific research. We stay up-to-date with the latest studies and only recommend supplements with substantial evidence supporting their effectiveness for specific health goals."
  },
  {
    question: "Can I update my health profile over time?",
    answer: "Absolutely! We encourage you to update your health profile as your goals or health status changes. Simply visit your profile page and retake the assessment at any time to receive fresh, relevant recommendations."
  },
  {
    question: "How often should I reassess my supplement needs?",
    answer: "We recommend reassessing every 3-6 months, or whenever you experience significant changes in your health, lifestyle, or goals. Regular reassessment ensures your supplement regimen stays aligned with your evolving health needs."
  },
  {
    question: "Are the supplements safe to take together?",
    answer: "Our algorithm is designed to recommend supplements that work well together. However, it's always best to consult with a healthcare professional before starting any new supplement regimen, especially if you're taking medications or have existing health conditions."
  },
  {
    question: "Where can I purchase the recommended supplements?",
    answer: "Each supplement recommendation includes a 'Buy Now' option that will direct you to trusted retailers where you can purchase the product. We partner with reputable supplement providers to ensure quality and authenticity."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-medium mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Find answers to common questions about our personalized supplement recommendations.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`mb-4 border rounded-lg overflow-hidden ${
                expandedIndex === index ? 'border-primary/30 bg-primary/5' : 'border-sage-200'
              }`}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                aria-expanded={expandedIndex === index}
              >
                <span className="font-medium text-lg">{item.question}</span>
                {expandedIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
