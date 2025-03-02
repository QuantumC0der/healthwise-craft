
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionnaireStart from '../components/QuestionnaireStart';
import QuestionnaireForm from '../components/QuestionnaireForm';
import { useUser } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { toast } from '../components/ui/use-toast';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

type AssessmentType = {
  id: string;
  title: string;
  description: string;
  image: string;
  targetAudience: string;
};

const assessmentTypes: AssessmentType[] = [
  {
    id: 'general',
    title: 'General Health Assessment',
    description: 'Get personalized supplement recommendations based on your overall health needs and goals.',
    image: 'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=2070&auto=format&fit=crop',
    targetAudience: 'For everyone looking to improve their general health and wellness.'
  },
  {
    id: 'fitness',
    title: 'Fitness & Performance Assessment',
    description: 'Find the right supplements to enhance your workout performance, build muscle, and improve recovery.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    targetAudience: 'For athletes, fitness enthusiasts, and anyone with an active lifestyle.'
  },
  {
    id: 'brain',
    title: 'Cognitive Health Assessment',
    description: 'Discover supplements to support brain health, focus, memory, and mental clarity.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2069&auto=format&fit=crop',
    targetAudience: 'For students, professionals, and anyone looking to enhance cognitive function.'
  },
  {
    id: 'sleep',
    title: 'Sleep & Relaxation Assessment',
    description: 'Find supplements to improve sleep quality, reduce stress, and promote relaxation.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop',
    targetAudience: 'For those struggling with sleep issues, stress, or anxiety.'
  }
];

const AssessmentPage: React.FC = () => {
  const { assessmentId } = useParams<{ assessmentId?: string }>();
  const navigate = useNavigate();
  const { userData, saveAssessment } = useUser();
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState<'list' | 'start' | 'form'>('list');
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentType | null>(null);

  useEffect(() => {
    if (assessmentId) {
      const assessment = assessmentTypes.find(a => a.id === assessmentId);
      if (assessment) {
        setSelectedAssessment(assessment);
        setCurrentView('start');
      } else {
        navigate('/assessment');
      }
    } else {
      setCurrentView('list');
    }
  }, [assessmentId, navigate]);

  const handleSelectAssessment = (assessment: AssessmentType) => {
    setSelectedAssessment(assessment);
    navigate(`/assessment/${assessment.id}`);
  };

  const handleBackToList = () => {
    navigate('/assessment');
  };

  const handleStartAssessment = () => {
    setCurrentView('form');
  };

  const handleCompleteAssessment = async (formData: any) => {
    try {
      if (!selectedAssessment) return;
      
      // Save assessment data
      await saveAssessment(selectedAssessment.id, {
        healthGoals: formData.healthGoals,
        dietaryPreferences: formData.dietaryPreferences,
        healthConditions: formData.healthConditions,
        allergies: formData.allergies
      });
      
      toast({
        title: "Assessment completed!",
        description: "Your personalized recommendations are ready.",
        duration: 5000,
      });
      
      // Navigate to recommendations
      navigate('/');
    } catch (error) {
      console.error('Error completing assessment:', error);
      toast({
        title: "Something went wrong",
        description: "There was an error saving your assessment. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sage-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'list' && (
            <motion.div
              key="assessment-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="container-custom py-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  Choose Your Assessment
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Select the assessment that best matches your health goals and needs to get the most accurate supplement recommendations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {assessmentTypes.map((assessment, index) => (
                  <motion.div
                    key={assessment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-sage-100 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleSelectAssessment(assessment)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={assessment.image} 
                        alt={assessment.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-medium mb-2">{assessment.title}</h3>
                      <p className="text-muted-foreground mb-4">{assessment.description}</p>
                      <div className="inline-block bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-sm">
                        {assessment.targetAudience}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {currentView === 'start' && selectedAssessment && (
            <motion.div
              key="assessment-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="container-custom py-8"
            >
              <button
                onClick={handleBackToList}
                className="flex items-center text-primary hover:text-primary/80 mb-8"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                Back to Assessment List
              </button>
              
              <div className="max-w-4xl mx-auto">
                <QuestionnaireStart 
                  assessmentType={selectedAssessment}
                  onStart={handleStartAssessment} 
                />
              </div>
            </motion.div>
          )}
          
          {currentView === 'form' && selectedAssessment && (
            <motion.div
              key="assessment-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionnaireForm 
                assessmentType={selectedAssessment.id}
                onComplete={handleCompleteAssessment}
                onBack={() => setCurrentView('start')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentPage;
