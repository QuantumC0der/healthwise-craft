
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import { useUser } from '../context/UserContext';

interface QuestionnaireFormProps {
  onComplete: () => void;
  onBack: () => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onComplete, onBack }) => {
  const { userData, updateUser } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    age: userData.age || '',
    gender: userData.gender || '',
    healthGoals: userData.healthGoals || [],
    dietaryPreferences: userData.dietaryPreferences || [],
    healthConditions: userData.healthConditions || [],
    allergies: userData.allergies || []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[category as keyof typeof prev] as string[];
      
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [category]: currentValues.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentValues, value]
        };
      }
    });
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Convert age to number to match the UserData type
    const updatedData = {
      ...formData,
      age: Number(formData.age), // Explicitly convert to number
      completedQuestionnaire: true
    };
    
    updateUser(updatedData);
    onComplete();
  };

  const healthGoalsOptions = [
    "Improve energy levels",
    "Enhance immunity",
    "Better sleep",
    "Stress management",
    "Weight management",
    "Heart health",
    "Brain function",
    "Joint health",
    "Digestive health",
    "Anti-aging"
  ];

  const dietaryPreferencesOptions = [
    "Omnivore",
    "Vegetarian",
    "Vegan",
    "Gluten-free",
    "Dairy-free",
    "Keto",
    "Paleo",
    "Low-carb",
    "Mediterranean"
  ];

  const healthConditionsOptions = [
    "None",
    "High blood pressure",
    "High cholesterol",
    "Diabetes",
    "Thyroid issues",
    "Digestive disorders",
    "Arthritis",
    "Anxiety/Depression",
    "Insomnia",
    "Autoimmune condition"
  ];

  const allergyOptions = [
    "None",
    "Fish/Shellfish",
    "Tree nuts",
    "Soy",
    "Dairy",
    "Gluten",
    "Eggs"
  ];

  return (
    <div className="container-custom py-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md border border-sage-100 p-6 md:p-10"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={handlePrevious}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
            
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of 4
            </div>
          </div>
          
          <div className="w-full bg-sage-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-medium mb-6">Personal Information</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="18"
                    max="120"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Your age"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleSelectChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button onClick={handleNext}>
                Continue
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-medium mb-6">Health Goals</h2>
            <p className="text-muted-foreground mb-6">
              Select all the health goals you'd like to focus on (select all that apply):
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {healthGoalsOptions.map(goal => (
                <label 
                  key={goal} 
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    formData.healthGoals.includes(goal) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-sage-200 hover:border-primary/50'
                  }`}
                >
                  <input 
                    type="checkbox"
                    className="sr-only"
                    checked={formData.healthGoals.includes(goal)}
                    onChange={() => handleCheckboxChange('healthGoals', goal)}
                  />
                  <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                    formData.healthGoals.includes(goal) 
                      ? 'bg-primary border-primary' 
                      : 'border-sage-300'
                  }`}>
                    {formData.healthGoals.includes(goal) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span>{goal}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="mr-1 w-4 h-4" />
                Back
              </Button>
              
              <Button onClick={handleNext}>
                Continue
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-medium mb-6">Dietary Preferences</h2>
            <p className="text-muted-foreground mb-6">
              Select any dietary preferences or restrictions you follow:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {dietaryPreferencesOptions.map(preference => (
                <label 
                  key={preference} 
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    formData.dietaryPreferences.includes(preference) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-sage-200 hover:border-primary/50'
                  }`}
                >
                  <input 
                    type="checkbox"
                    className="sr-only"
                    checked={formData.dietaryPreferences.includes(preference)}
                    onChange={() => handleCheckboxChange('dietaryPreferences', preference)}
                  />
                  <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                    formData.dietaryPreferences.includes(preference) 
                      ? 'bg-primary border-primary' 
                      : 'border-sage-300'
                  }`}>
                    {formData.dietaryPreferences.includes(preference) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span>{preference}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="mr-1 w-4 h-4" />
                Back
              </Button>
              
              <Button onClick={handleNext}>
                Continue
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-medium mb-6">Health Conditions & Allergies</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Do you have any of the following health conditions?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {healthConditionsOptions.map(condition => (
                  <label 
                    key={condition} 
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.healthConditions.includes(condition) 
                        ? 'border-primary bg-primary/5' 
                        : 'border-sage-200 hover:border-primary/50'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      className="sr-only"
                      checked={formData.healthConditions.includes(condition)}
                      onChange={() => handleCheckboxChange('healthConditions', condition)}
                    />
                    <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                      formData.healthConditions.includes(condition) 
                        ? 'bg-primary border-primary' 
                        : 'border-sage-300'
                    }`}>
                      {formData.healthConditions.includes(condition) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span>{condition}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Do you have any allergies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allergyOptions.map(allergy => (
                  <label 
                    key={allergy} 
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.allergies.includes(allergy) 
                        ? 'border-primary bg-primary/5' 
                        : 'border-sage-200 hover:border-primary/50'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      className="sr-only"
                      checked={formData.allergies.includes(allergy)}
                      onChange={() => handleCheckboxChange('allergies', allergy)}
                    />
                    <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                      formData.allergies.includes(allergy) 
                        ? 'bg-primary border-primary' 
                        : 'border-sage-300'
                    }`}>
                      {formData.allergies.includes(allergy) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span>{allergy}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="mr-1 w-4 h-4" />
                Back
              </Button>
              
              <Button onClick={handleSubmit}>
                Complete Assessment
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default QuestionnaireForm;
