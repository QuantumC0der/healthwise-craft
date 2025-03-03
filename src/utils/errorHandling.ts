
import { toast } from "../hooks/use-toast";
import React from "react";

/**
 * Handles errors throughout the application in a consistent way
 */
export function handleError(error: unknown, context?: string): void {
  console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  
  const errorMessage = error instanceof Error 
    ? error.message 
    : 'An unexpected error occurred';
  
  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });
}

/**
 * Formats error messages for display
 */
export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
}

/**
 * Creates an error logger with a specific context
 */
export function createErrorLogger(context: string) {
  return (error: unknown) => handleError(error, context);
}

/**
 * Creates an image fallback component for when images fail to load
 */
export function createImageFallback(alt: string) {
  return () => {
    return (
      <div className="bg-sage-100 rounded flex items-center justify-center h-full w-full">
        <span className="text-sage-600 text-sm">{alt || 'Image unavailable'}</span>
      </div>
    );
  };
}
