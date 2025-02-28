
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './Button';
import { useUser } from '../context/UserContext';
import { motion } from 'framer-motion';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen, onClose }) => {
  const { login, isLoading } = useUser();

  const handleLogin = async (provider: string) => {
    await login(provider);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-display">Sign in to Your Account</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Sign in to save your preferences and health assessment results.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col space-y-4 py-4">
          <Button 
            variant="outline" 
            className="flex items-center justify-center w-full border-gray-300 py-6"
            onClick={() => handleLogin('google')}
            disabled={isLoading}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-3" />
            <span className="font-medium">{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center justify-center w-full border-gray-300 py-6"
            onClick={() => handleLogin('email')}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="font-medium">{isLoading ? 'Signing in...' : 'Continue with Email'}</span>
          </Button>
        </div>
        
        <div className="text-xs text-center text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
