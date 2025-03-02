import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { useAuth } from './AuthContext';
import { toast } from '../components/ui/use-toast';

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
  updateUser: (data: Partial<UserData>) => Promise<void>;
  resetUser: () => void;
  saveAssessment: (assessmentType: string, healthProfile: HealthProfile) => Promise<string | null>;
  fetchLatestAssessment: () => Promise<void>;
  saveRecommendations: (supplementIds: string[], assessmentId: string) => Promise<void>;
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
  const { user } = useAuth();

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      try {
        if (user) {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (profileError && profileError.code !== 'PGRST116') {
            console.error('Error loading user profile:', profileError);
          }

          const { data: assessment, error: assessmentError } = await supabase
            .from('assessments')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(1);

          if (assessmentError) {
            console.error('Error loading assessment:', assessmentError);
          }

          setUserData({
            name: profile?.name || '',
            email: user.email || '',
            age: profile?.age || 0,
            gender: profile?.gender || '',
            healthGoals: assessment?.[0]?.health_goals || [],
            dietaryPreferences: assessment?.[0]?.dietary_preferences || [],
            healthConditions: assessment?.[0]?.health_conditions || [],
            allergies: assessment?.[0]?.allergies || [],
            completedQuestionnaire: assessment && assessment.length > 0 ? true : false,
          });
        } else {
          const savedUserData = localStorage.getItem('userData');
          if (savedUserData) {
            setUserData(JSON.parse(savedUserData));
          } else {
            setUserData(defaultUserData);
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [user]);

  useEffect(() => {
    if (!isLoading && !user) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, [userData, isLoading, user]);

  const updateUser = async (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));

    if (user && (data.name !== undefined || data.age !== undefined || data.gender !== undefined)) {
      const profileData: any = {};
      if (data.name !== undefined) profileData.name = data.name;
      if (data.age !== undefined) profileData.age = data.age;
      if (data.gender !== undefined) profileData.gender = data.gender;

      if (Object.keys(profileData).length > 0) {
        try {
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', user.id)
            .maybeSingle();

          if (existingProfile) {
            const { error } = await supabase
              .from('profiles')
              .update(profileData)
              .eq('id', user.id);

            if (error) throw error;
          } else {
            const { error } = await supabase
              .from('profiles')
              .insert({
                id: user.id,
                ...profileData,
                email: user.email
              });

            if (error) throw error;
          }
        } catch (error: any) {
          console.error('Error updating profile:', error);
          toast({
            title: "Error",
            description: "Failed to update your profile information.",
            variant: "destructive"
          });
        }
      }
    }
  };

  const saveAssessment = async (assessmentType: string, healthProfile: HealthProfile): Promise<string | null> => {
    try {
      let assessmentId: string | null = null;
      
      if (user) {
        const { data, error } = await supabase
          .from('assessments')
          .insert({
            user_id: user.id,
            assessment_type: assessmentType,
            health_goals: healthProfile.healthGoals,
            dietary_preferences: healthProfile.dietaryPreferences,
            health_conditions: healthProfile.healthConditions,
            allergies: healthProfile.allergies
          })
          .select();

        if (error) throw error;
        
        if (data && data.length > 0) {
          assessmentId = data[0].id;
        }

        setUserData((prev) => ({
          ...prev,
          ...healthProfile,
          completedQuestionnaire: true
        }));

        return assessmentId;
      }

      setUserData((prev) => ({
        ...prev,
        ...healthProfile,
        completedQuestionnaire: true
      }));
      
      return assessmentId;
    } catch (error: any) {
      console.error('Error saving assessment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save your assessment.",
        variant: "destructive"
      });
      throw error;
    }
  };
  
  const saveRecommendations = async (supplementIds: string[], assessmentId: string) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('user_recommendations')
        .insert({
          user_id: user.id,
          assessment_id: assessmentId,
          supplement_ids: supplementIds
        });
        
      if (error) throw error;
      
      toast({
        title: "Recommendations Saved",
        description: "Your supplement recommendations have been saved to your profile."
      });
    } catch (error: any) {
      console.error('Error saving recommendations:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save your recommendations.",
        variant: "destructive"
      });
    }
  };

  const fetchLatestAssessment = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;

      if (data && data.length > 0) {
        setUserData((prev) => ({
          ...prev,
          healthGoals: data[0].health_goals,
          dietaryPreferences: data[0].dietary_preferences,
          healthConditions: data[0].health_conditions,
          allergies: data[0].allergies,
          completedQuestionnaire: true
        }));
      }
    } catch (error: any) {
      console.error('Error fetching assessment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch your assessment data.",
        variant: "destructive"
      });
    }
  };

  const resetUser = async () => {
    if (user) {
      setUserData({
        ...defaultUserData,
        name: userData.name,
        email: userData.email,
        age: userData.age,
        gender: userData.gender
      });
    } else {
      setUserData(defaultUserData);
      localStorage.removeItem('userData');
    }
  };

  return (
    <UserContext.Provider value={{ 
      userData, 
      isLoading, 
      updateUser, 
      resetUser,
      saveAssessment,
      fetchLatestAssessment,
      saveRecommendations
    }}>
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
