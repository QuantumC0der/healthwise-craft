
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useUser } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';

interface AssessmentType {
  id: string;
  title: string;
  description: string;
  image: string;
  targetAudience: string;
}

interface QuestionnaireStartProps {
  onStart: () => void;
  assessmentType?: AssessmentType;
}

const QuestionnaireStart: React.FC<QuestionnaireStartProps> = ({ onStart, assessmentType }) => {
  const { userData } = useUser();
  const { user } = useAuth();
  
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md border border-sage-100 p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">
            {assessmentType?.title || 'Start Your Health Assessment'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {assessmentType?.description || 'Answer a few questions about your health goals and needs to receive personalized supplement recommendations.'}
          </p>
          
          {user && (
            <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg inline-block">
              <p className="text-sm">Signed in as {user.email}</p>
            </div>
          )}
        </div>
        
        <div className="space-y-6 mb-10">
          <div className="bg-sage-50 rounded-lg p-5 flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium mb-1">What to expect</h3>
              <p className="text-sm text-muted-foreground">
                This assessment takes about 3-5 minutes to complete. Your answers help us recommend supplements tailored specifically to your health profile.
              </p>
            </div>
          </div>
          
          <div className="bg-sage-50 rounded-lg p-5 flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium mb-1">Your privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your information is securely stored and never shared with third parties. We use it only to provide you with relevant recommendations.
              </p>
            </div>
          </div>
          
          {user && (
            <div className="bg-blue-50 rounded-lg p-5 flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium mb-1">Your data is saved</h3>
                <p className="text-sm text-blue-700">
                  Since you're logged in, your assessment results will be saved to your account, allowing you to access your recommendations anytime.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            onClick={onStart}
            className="px-10"
          >
            Start Assessment
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionnaireStart;
