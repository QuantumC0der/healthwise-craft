import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import QuestionnaireStart from '../components/QuestionnaireStart';
import QuestionnaireForm from '../components/QuestionnaireForm';
import RecommendationCard from '../components/RecommendationCard';
import UserProfile from '../components/UserProfile';
import SupplementSummary from '../components/SupplementSummary';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import { UserProvider, useUser } from '../context/UserContext';
import { getRecommendedSupplements } from '../data/supplements';
import { ChevronLeft, RefreshCw, User, ChevronDown } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Index = () => {
  return (
    <UserProvider>
      <MainContent />
    </UserProvider>
  );
};

const MainContent = () => {
  const { userData, isLoading, updateUser } = useUser();
  const [currentView, setCurrentView] = useState<
    'home' | 'start' | 'questionnaire' | 'recommendations' | 'profile' | 'account'
  >('home');
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      if (userData?.completedQuestionnaire) {
        const userRecs = getRecommendedSupplements(
          userData.healthGoals,
          userData.dietaryPreferences,
          userData.healthConditions,
          userData.allergies
        );
        setRecommendations(userRecs);

        if (currentView === 'home') {
        } else {
          setCurrentView('recommendations');
        }
      } else if (userData?.name && currentView !== 'home') {
        setCurrentView('start');
      }
    }
  }, [userData, isLoading, currentView]);

  const handleStartQuestionnaire = () => {
    setCurrentView('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionnaireComplete = () => {
    const userRecs = getRecommendedSupplements(
      userData.healthGoals,
      userData.dietaryPreferences,
      userData.healthConditions,
      userData.allergies
    );
    setRecommendations(userRecs);
    setCurrentView('recommendations');

    toast({
      title: "Assessment Complete!",
      description: "We've generated personalized supplement recommendations based on your health profile.",
      duration: 5000,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeQuestionnaire = () => {
    // Reset questionnaire data in context
    updateUser({
      ...userData,
      completedQuestionnaire: false,
      healthGoals: [],
      dietaryPreferences: [],
      healthConditions: [],
      allergies: []
    });

    setCurrentView('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    toast({
      title: "Questionnaire Reset",
      description: "You can now retake the health assessment",
      duration: 3000,
    });
  };

  const scrollToAssessment = () => {
    const assessmentElement = document.getElementById('assessment-section');
    if (assessmentElement) {
      assessmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (currentView === 'home') {
    return (
      <div className="min-h-screen flex flex-col bg-sage-50">
        <Header />

        <main className="flex-grow">
          <Hero />

          <SupplementSummary />

          <div id="assessment-section" className="py-20 bg-white">
            <div className="container-custom">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-1 mb-6"
                >
                  <span className="text-sm font-medium">Start Your Journey</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-display font-medium mb-4"
                >
                  Take the Health Assessment
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground max-w-2xl mx-auto mb-8"
                >
                  Answer a few questions about your health, lifestyle, and goals to receive 
                  personalized supplement recommendations tailored just for you.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button 
                    size="lg" 
                    onClick={handleStartQuestionnaire}
                    className="shadow-md"
                  >
                    Begin Assessment
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative mx-auto max-w-4xl"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sage-100">
                  <img 
                    src="https://images.unsplash.com/photo-1616169201999-0d80789e6563?q=80&w=2400&auto=format&fit=crop" 
                    alt="Health assessment" 
                    className="w-full h-auto"
                  />
                </div>

                <div className="absolute top-6 -right-4 bg-white rounded-xl shadow-lg p-3 border border-sage-100 max-w-xs transform rotate-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Personalized for You</p>
                      <p className="text-xs text-muted-foreground">Recommendations based on your unique profile</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-sage-100 transform -rotate-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <p className="text-xs">
                      <span className="font-medium">5,000+ supplements</span> analyzed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <Testimonials />

          <FAQ />

          <div className="py-20 bg-sage-50">
            <div className="container-custom text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-display font-medium mb-6"
              >
                Ready to Find Your Perfect Supplements?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Take the first step toward optimized health with personalized recommendations 
                based on your unique needs and goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  onClick={handleStartQuestionnaire}
                >
                  Start Assessment
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToAssessment}
                  className="flex items-center"
                >
                  Learn More
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-sage-50">
      <Header />

      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'start' && (
            <motion.div
              key="start-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionnaireStart onStart={() => setCurrentView('questionnaire')} />
            </motion.div>
          )}

          {currentView === 'questionnaire' && (
            <motion.div
              key="questionnaire-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionnaireForm 
                onComplete={handleQuestionnaireComplete}
                onBack={() => setCurrentView(userData?.completedQuestionnaire ? 'recommendations' : 'start')}
              />
            </motion.div>
          )}

          {currentView === 'recommendations' && (
            <motion.div
              key="recommendations-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl mx-auto px-4 py-12"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-medium mb-2">
                    Your Personalized Recommendations
                  </h1>
                  <p className="text-muted-foreground">
                    Based on your health profile and goals, we recommend these supplements for you.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView('profile')}
                    className="flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>

                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={handleRetakeQuestionnaire}
                    className="flex items-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retake
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {recommendations.map((supplement, index) => (
                  <RecommendationCard
                    key={supplement.id}
                    supplement={supplement}
                    index={index}
                  />
                ))}

                {recommendations.length === 0 && (
                  <div className="bg-white rounded-xl shadow-md border border-sage-100 p-8 text-center">
                    <p className="text-lg text-muted-foreground">
                      No recommendations found. Please retake the questionnaire with more specific information.
                    </p>
                    <Button 
                      onClick={handleRetakeQuestionnaire}
                      className="mt-4"
                    >
                      Retake Questionnaire
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-12 text-center">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentView('home')}
                  className="flex items-center mx-auto"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </motion.div>
          )}

          {currentView === 'profile' && (
            <motion.div
              key="profile-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full max-w-4xl mx-auto px-4 py-6">
                <button
                  onClick={() => setCurrentView('recommendations')}
                  className="flex items-center text-primary hover:text-primary/80 mb-6"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to Recommendations
                </button>
              </div>

              <UserProfile />
            </motion.div>
          )}

          {currentView === 'account' && (
            <UserAccount onBack={() => setCurrentView(userData.completedQuestionnaire ? 'recommendations' : 'home')} />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Index;