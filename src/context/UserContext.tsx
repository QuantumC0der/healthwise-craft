
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
  age: number;
  gender: string;
  completedQuestionnaire: boolean;
}

interface UserContextType {
  userData: UserData;
  isLoading: boolean;
  updateUser: (data: Partial<UserData>) => void;
  resetUser: () => void;
}

const defaultUserData: UserData = {
  name: '',
  email: '',
  age: 0,
  gender: '',
  healthGoals: [],
  dietaryPreferences: [],
  healthConditions: [],
  allergies: [],
  completedQuestionnaire: false,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data from localStorage or API
    const loadUser = async () => {
      try {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
          setUserData(JSON.parse(savedUserData));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    if (!isLoading) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, [userData, isLoading]);

  const updateUser = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const resetUser = () => {
    setUserData(defaultUserData);
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ userData, isLoading, updateUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
