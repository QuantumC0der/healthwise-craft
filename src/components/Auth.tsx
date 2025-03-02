
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Key, Loader, AlertCircle } from 'lucide-react';
import Button from './Button';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { toast } from '../components/ui/use-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: "Account created!",
          description: "Please check your email to verify your account.",
          duration: 5000,
        });

      } else {
        // Sign in
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Fetch the user profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user?.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Error fetching profile:', profileError);
        }

        // Fetch assessments if they exist
        const { data: assessmentsData, error: assessmentsError } = await supabase
          .from('assessments')
          .select('*')
          .eq('user_id', data.user?.id)
          .order('created_at', { ascending: false })
          .limit(1);

        if (assessmentsError) {
          console.error('Error fetching assessments:', assessmentsError);
        }

        // Update user context
        updateUser({
          name: profileData?.name || '',
          email: data.user?.email || '',
          age: profileData?.age || 0,
          gender: profileData?.gender || '',
          healthGoals: assessmentsData?.[0]?.health_goals || [],
          dietaryPreferences: assessmentsData?.[0]?.dietary_preferences || [],
          healthConditions: assessmentsData?.[0]?.health_conditions || [],
          allergies: assessmentsData?.[0]?.allergies || [],
          completedQuestionnaire: assessmentsData ? true : false,
        });

        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
          duration: 3000,
        });

        navigate('/');
      }
    } catch (error: any) {
      setError(error.error_description || error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-custom py-16 max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md border border-sage-100 p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-medium mb-2">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp 
              ? 'Join MySupplementMatch to get personalized recommendations' 
              : 'Sign in to access your personalized supplement recommendations'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Key className="w-5 h-5" />
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                {isSignUp ? 'Creating Account...' : 'Signing In...'}
              </>
            ) : (
              <>{isSignUp ? 'Create Account' : 'Sign In'}</>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:underline text-sm"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
