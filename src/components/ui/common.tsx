
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FallbackProps {
  text?: string;
  className?: string;
}

export const ImageFallback: React.FC<FallbackProps> = ({ 
  text = "Image not available", 
  className 
}) => {
  return (
    <div className={cn(
      "w-full h-full min-h-[200px] bg-gray-100 rounded-md flex items-center justify-center",
      className
    )}>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'md',
  text,
  className
}) => {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Loader2 className={cn("animate-spin", sizeClass[size])} />
      {text && <span>{text}</span>}
    </div>
  );
};

interface ErrorDisplayProps {
  error: Error | string;
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  className
}) => {
  const errorMessage = typeof error === 'string' ? error : error.message;
  
  return (
    <div className={cn(
      "p-4 bg-red-50 border border-red-200 rounded-md",
      className
    )}>
      <p className="text-red-700 font-medium">Error</p>
      <p className="text-red-600">{errorMessage}</p>
    </div>
  );
};
