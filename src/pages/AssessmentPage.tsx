
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import QuestionnaireStart from '../components/QuestionnaireStart';
import QuestionnaireForm from '../components/QuestionnaireForm';
import { useUser } from '../context/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const assessmentTypes = [
  {
    id: 'general',
    title: 'General Health Assessment',
    description: 'Comprehensive assessment of your overall health and wellness needs.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    targetAudience: 'Everyone looking to improve their general health'
  },
  {
    id: 'fitness',
    title: 'Fitness & Performance Assessment',
    description: 'Specialized assessment for athletic performance and recovery optimization.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    targetAudience: 'Athletes and fitness enthusiasts'
  },
  {
    id: 'brain',
    title: 'Cognitive Health Assessment',
    description: 'Focused assessment for brain health, memory, and cognitive performance.',
    image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=2064&auto=format&fit=crop',
    targetAudience: 'Students, professionals, and seniors'
  },
  {
    id: 'sleep',
    title: 'Sleep Quality Assessment',
    description: 'Detailed assessment to identify supplements that may improve sleep quality.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop',
    targetAudience: 'Anyone experiencing sleep issues'
  }
];

const AssessmentPage = () => {
  const { assessmentType } = useParams();
  const navigate = useNavigate();
  const { isLoading } = useUser();
  const [currentView, setCurrentView] = useState<'start' | 'questionnaire'>('start');
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  
  useEffect(() => {
    if (assessmentType) {
      const foundAssessment = assessmentTypes.find(assessment => assessment.id === assessmentType);
      if (foundAssessment) {
        setSelectedAssessment(foundAssessment);
      } else {
        // Redirect to general assessment if type not found
        navigate('/assessment/general');
      }
    } else {
      // Redirect to general assessment if no type provided
      navigate('/assessment/general');
    }
  }, [assessmentType, navigate]);
  
  const handleStartQuestionnaire = () => {
    setCurrentView('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleQuestionnaireComplete = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBack = () => {
    if (currentView === 'questionnaire') {
      setCurrentView('start');
    } else {
      navigate('/');
    }
  };
  
  if (isLoading || !selectedAssessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-sage-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="w-full max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={handleBack}
            className="flex items-center text-primary hover:text-primary/80 mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
        </div>
        
        {currentView === 'start' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuestionnaireStart 
              onStart={handleStartQuestionnaire} 
              assessmentType={selectedAssessment}
            />
          </motion.div>
        )}
        
        {currentView === 'questionnaire' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuestionnaireForm 
              onComplete={handleQuestionnaireComplete}
              onBack={() => setCurrentView('start')}
              assessmentType={selectedAssessment.id}
            />
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentPage;
