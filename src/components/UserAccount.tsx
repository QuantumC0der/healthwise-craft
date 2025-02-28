
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import Button from './Button';
import { ChevronLeft, LogOut, User, Settings } from 'lucide-react';
import { toast } from './ui/use-toast';

interface UserAccountProps {
  onBack: () => void;
}

const UserAccount: React.FC<UserAccountProps> = ({ onBack }) => {
  const { userData, updateUser, logout, isAuthenticated } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    age: userData.age || '',
    gender: userData.gender || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved",
      duration: 3000,
    });
  };

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
      duration: 3000,
    });
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-3xl mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-display font-medium">My Account</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
              {userData.photoURL ? (
                <img 
                  src={userData.photoURL} 
                  alt={userData.name || "User"} 
                  className="w-16 h-16 rounded-full object-cover" 
                />
              ) : (
                <User className="w-8 h-8" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-medium">{userData.name || "Guest User"}</h2>
              <p className="text-muted-foreground">{userData.email || "No email provided"}</p>
            </div>
          </div>
          <div>
            {isAuthenticated ? (
              <Button variant="outline" onClick={handleLogout} className="flex items-center">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">Guest Mode</p>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  disabled={!!userData.provider}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleSelectChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h3 className="text-sm text-muted-foreground">Age</h3>
                <p>{userData.age || "Not provided"}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Gender</h3>
                <p className="capitalize">{userData.gender || "Not provided"}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setIsEditing(true)} 
              className="mt-4 flex items-center text-muted-foreground"
            >
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        )}
      </div>

      {userData.completedQuestionnaire && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-medium mb-4">Health Information</h2>
          
          {userData.healthGoals.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm text-muted-foreground mb-2">Health Goals</h3>
              <div className="flex flex-wrap gap-2">
                {userData.healthGoals.map((goal) => (
                  <span key={goal} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {userData.dietaryPreferences.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm text-muted-foreground mb-2">Dietary Preferences</h3>
              <div className="flex flex-wrap gap-2">
                {userData.dietaryPreferences.map((pref) => (
                  <span key={pref} className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-sm">
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {userData.healthConditions.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm text-muted-foreground mb-2">Health Conditions</h3>
              <div className="flex flex-wrap gap-2">
                {userData.healthConditions.map((condition) => (
                  <span key={condition} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {userData.allergies.length > 0 && (
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Allergies</h3>
              <div className="flex flex-wrap gap-2">
                {userData.allergies.map((allergy) => (
                  <span key={allergy} className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm">
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default UserAccount;
