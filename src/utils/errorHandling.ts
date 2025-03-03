
import { toast } from "../hooks/use-toast";
import React from "react";

/**
 * Handles errors throughout the application in a consistent way
 * @param error The error to handle
 * @param context Additional context about where the error occurred
 */
export const handleError = (error: unknown, context?: string): void => {
  const errorMessage = error instanceof Error 
    ? error.message 
    : "An unknown error occurred";
  
  // Log to console with context
  console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  
  // Show toast notification
  toast({
    title: "Something went wrong",
    description: errorMessage,
    variant: "destructive",
  });
};

/**
 * Try-catch wrapper for async functions
 * @param fn The async function to execute
 * @param context Context information for error handling
 */
export async function tryCatch<T>(
  fn: () => Promise<T>, 
  context?: string
): Promise<T | null> {
  try {
    return await fn();
  } catch (error) {
    handleError(error, context);
    return null;
  }
}

/**
 * Creates a fallback component when image loading fails
 * @param text Text to display in the fallback
 * @returns JSX element for the fallback
 */
export const createImageFallback = (text: string = "Image not available") => {
  return (
    <div className="w-full h-full min-h-[200px] bg-gray-100 rounded-md flex items-center justify-center">
      <p className="text-gray-500">{text}</p>
    </div>
  );
};
