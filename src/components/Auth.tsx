
import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import { useUser } from '../context/UserContext';
import { toast } from './ui/use-toast';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const { user } = useAuth();
  const { updateUser, fetchLatestAssessment } = useUser();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
            },
          }
        });

        if (error) throw error;

        if (data.user) {
          // Create profile record
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: data.user.id,
              name: name,
              email: email
            });

          if (profileError) throw profileError;
          
          toast({
            title: "Success!",
            description: "Your account has been created. Please check your email for verification.",
          });
        }
      } else {
        // Sign in
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        // Fetch user profile
        if (data.user) {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();

          if (profileError && profileError.code !== 'PGRST116') {
            throw profileError;
          }

          if (profileData) {
            updateUser({
              name: profileData.name,
              email: profileData.email,
              age: profileData.age,
              gender: profileData.gender
            });
          }

          // Fetch latest assessment
          await fetchLatestAssessment();
          
          toast({
            title: "Welcome back!",
            description: "You've successfully logged in.",
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during authentication",
        variant: "destructive"
      });
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isSignUp ? 'Create an Account' : 'Sign In'}
      </h2>
      
      <form onSubmit={handleAuth} className="space-y-4">
        {isSignUp && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required={isSignUp}
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-primary hover:underline"
          type="button"
        >
          {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
