
import { toast as sonnerToast } from 'sonner';

type ToastVariant = 'default' | 'destructive' | 'success' | 'warning';

interface ToastOptions {
  variant?: ToastVariant;
  duration?: number;
  id?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const variantClassMap: Record<ToastVariant, string> = {
  default: '',
  destructive: 'destructive',
  success: 'success',
  warning: 'warning'
};

export function toast({
  title,
  description,
  variant = 'default',
  duration = 5000,
  id,
  action
}: {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  id?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}) {
  const variantClass = variantClassMap[variant];
  
  return sonnerToast(title, {
    description,
    id,
    duration,
    action: action ? {
      label: action.label,
      onClick: action.onClick
    } : undefined,
    className: variantClass ? `toast-${variantClass}` : undefined
  });
}

export function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (title: string, description?: string) => 
      toast({ title, description, variant: 'destructive' }),
    success: (title: string, description?: string) => 
      toast({ title, description, variant: 'success' }),
    warning: (title: string, description?: string) => 
      toast({ title, description, variant: 'warning' }),
  };
}
