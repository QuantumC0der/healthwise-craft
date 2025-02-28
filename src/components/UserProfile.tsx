
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Save, User, Calendar, Activity, Heart } from 'lucide-react';
import Button from './Button';
import { useUser } from '../context/UserContext';

const UserProfile = () => {
  const { userData, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    age: userData.age,
    gender: userData.gender
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ensure age is a number
    const updatedData = {
      ...formData,
      age: Number(formData.age)
    };
    
    updateUser(updatedData);
    setIsEditing(false);
  };
  
  return (
    <div className="container-custom py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-md border border-sage-100 overflow-hidden">
          <div className="relative h-40 bg-gradient-to-r from-primary/90 to-primary">
            <div className="absolute -bottom-16 left-6 md:left-10">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden">
                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                  <User size={48} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-20 pb-8 px-6 md:px-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-medium">{userData.name}</h1>
                <p className="text-muted-foreground">{userData.email}</p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center"
              >
                {isEditing ? (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
            
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      required
                    />
                  </div>
                  
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
                
                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    className="flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-sage-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <h3 className="font-medium">Age</h3>
                    </div>
                    <p>{userData.age} years</p>
                  </div>
                  
                  <div className="bg-sage-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <User className="w-5 h-5 text-primary mr-2" />
                      <h3 className="font-medium">Gender</h3>
                    </div>
                    <p className="capitalize">{userData.gender || "Not specified"}</p>
                  </div>
                  
                  <div className="bg-sage-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Activity className="w-5 h-5 text-primary mr-2" />
                      <h3 className="font-medium">Assessment</h3>
                    </div>
                    <p>{userData.completedQuestionnaire ? "Completed" : "Not completed"}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Heart className="w-5 h-5 text-primary mr-2" />
                      <h3 className="text-lg font-medium">Health Goals</h3>
                    </div>
                    
                    {userData.healthGoals && userData.healthGoals.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.healthGoals.map(goal => (
                          <span key={goal} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm">
                            {goal}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No health goals specified.</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Dietary Preferences</h3>
                    
                    {userData.dietaryPreferences && userData.dietaryPreferences.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.dietaryPreferences.map(pref => (
                          <span key={pref} className="bg-mint-100 text-sage-800 px-3 py-1 rounded-full text-sm">
                            {pref}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No dietary preferences specified.</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Health Conditions</h3>
                    
                    {userData.healthConditions && userData.healthConditions.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.healthConditions.map(condition => (
                          <span key={condition} className="bg-sage-200 text-sage-800 px-3 py-1 rounded-full text-sm">
                            {condition}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No health conditions specified.</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Allergies</h3>
                    
                    {userData.allergies && userData.allergies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userData.allergies.map(allergy => (
                          <span key={allergy} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                            {allergy}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No allergies specified.</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
