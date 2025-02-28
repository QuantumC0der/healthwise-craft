
import React from "react";
import { useToast } from "../../hooks/use-toast";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  variant?: "default" | "destructive";
  onDismiss?: () => void;
  className?: string;
}

export type ToastActionElement = React.ReactElement<{
  className?: string;
  altText?: string;
}>;

export function Toast({
  id,
  title,
  description,
  action,
  variant = "default",
  className,
  onDismiss,
  ...props
}: ToastProps) {
  const { dismiss } = useToast();
  
  const handleDismiss = () => {
    dismiss(id);
    if (onDismiss) onDismiss();
  };
  
  return (
    <div
      className={cn(
        "rounded-2xl shadow-lg p-4 flex items-start gap-3 max-w-sm border-2",
        variant === "destructive" 
          ? "bg-pink-soft border-destructive" 
          : "bg-gradient-to-r from-blue-soft to-purple-soft border-primary/20",
        className
      )}
      {...props}
    >
      <div className="flex-1">
        {title && (
          <ToastTitle className={variant === "destructive" ? "text-destructive" : "text-primary"}>
            {title}
          </ToastTitle>
        )}
        {description && (
          <ToastDescription>{description}</ToastDescription>
        )}
      </div>
      {action}
      <ToastClose onClick={handleDismiss} />
    </div>
  );
}

export function ToastProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}

export function ToastViewport() {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 flex flex-col items-end gap-2">
      {/* Toast items will be rendered here by the Toaster */}
    </div>
  );
}

export function ToastTitle({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-lg", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function ToastDescription({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-body mt-1", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function ToastClose({ 
  className, 
  onClick,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("text-primary hover:text-primary/70 hover:scale-110 transition-all", className)}
      onClick={onClick}
      {...props}
    >
      <X className="h-5 w-5" />
    </button>
  );
}
