
import React from "react";
import { useToast } from "./use-toast";
import { X } from "lucide-react";

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  variant?: "default" | "destructive";
  onDismiss?: () => void;
}

export function Toast({
  id,
  title,
  description,
  variant = "default",
  onDismiss
}: ToastProps) {
  const { dismiss } = useToast();
  
  const handleDismiss = () => {
    dismiss(id);
    if (onDismiss) onDismiss();
  };
  
  return (
    <div
      className={`rounded-lg shadow-lg p-4 flex items-start gap-3 max-w-sm bg-white border ${
        variant === "destructive" ? "border-red-500" : "border-gray-200"
      }`}
    >
      <div className="flex-1">
        {title && (
          <h3 className={`font-medium ${
            variant === "destructive" ? "text-red-500" : "text-foreground"
          }`}>
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={handleDismiss}
        className="text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
