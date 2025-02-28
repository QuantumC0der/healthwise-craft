
import React, { createContext, useContext, useState, useEffect } from 'react';

interface HealthProfile {
  healthGoals: string[];
  dietaryPreferences: string[];
  healthConditions: string[];
  allergies: string[];
}

interface UserData extends HealthProfile {
  name: string;
  email: string;
  age: number | string;
  gender: string;
  completedQuestionnaire: boolean;
  photoURL?: string;
  uid?: string;
  provider?: string;
}

interface UserContextType {
  userData: UserData;
  updateUser: (data: Partial<UserData>) => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (provider: string) => Promise<void>;
  logout: () => Promise<void>;
}

const defaultUserData: UserData = {
  name: '',
  email: '',
  age: '',
  gender: '',
  healthGoals: [],
  dietaryPreferences: [],
  healthConditions: [],
  allergies: [],
  completedQuestionnaire: false,
  photoURL: '',
  uid: '',
  provider: ''
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user data in localStorage on initial load
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setIsAuthenticated(!!parsedData.uid);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const updateUser = (data: Partial<UserData>) => {
    setUserData(prev => {
      const updated = { ...prev, ...data };
      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify(updated));
      return updated;
    });
  };

  // Mock implementation - in a real app, this would connect to Firebase, Auth0, etc.
  const login = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on provider
      const mockUser = {
        uid: `user-${Math.random().toString(36).substring(2, 9)}`,
        name: provider === 'google' ? 'Google User' : 'Demo User',
        email: provider === 'google' ? 'user@gmail.com' : 'demo@example.com',
        photoURL: 'https://ui-avatars.com/api/?name=User&background=random',
        provider: provider
      };
      
      updateUser(mockUser);
      setIsAuthenticated(true);
      
      // Show success message
      // Note: You'll need to implement the toast functionality separately
    } catch (error) {
      console.error('Login error:', error);
      // Show error message
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear user data but preserve questionnaire responses
      const { healthGoals, dietaryPreferences, healthConditions, allergies } = userData;
      setUserData({
        ...defaultUserData,
        healthGoals,
        dietaryPreferences, 
        healthConditions,
        allergies
      });
      
      localStorage.removeItem('userData');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ 
      userData, 
      updateUser, 
      isLoading, 
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
