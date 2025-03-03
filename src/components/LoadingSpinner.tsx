
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-10 h-10 border-4'
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div 
        className={`animate-spin ${sizeClasses[size]} border-primary border-t-transparent rounded-full ${className}`}
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;
