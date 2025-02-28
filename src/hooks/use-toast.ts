
import { useState, useEffect, useCallback } from "react";
import type { ToastActionElement, ToastProps } from "../components/ui/toast";

export interface Toast extends ToastProps {}

export interface ToastOptions {
  title?: string;
  description?: string;
  action?: ToastActionElement;
  duration?: number;
  variant?: "default" | "destructive";
}

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = Toast & {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: string;
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: string;
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      if (toastId) {
        toastTimeouts.delete(toastId);
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toastId ? { ...t, onDismiss: () => {} } : t
          ),
        };
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => ({
          ...t,
          onDismiss: () => {},
        })),
      };
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
}

export function useToast() {
  const [state, setState] = useState<State>({ toasts: [] });

  const toast = useCallback(
    ({ title, description, variant, duration = 5000, action }: ToastOptions) => {
      const id = genId();
      const newToast: ToasterToast = {
        id,
        title,
        description,
        variant,
        action,
      };

      setState((state) => reducer(state, { type: actionTypes.ADD_TOAST, toast: newToast }));

      if (duration > 0) {
        const timeout = setTimeout(() => {
          dismiss(id);
        }, duration);
        toastTimeouts.set(id, timeout);
      }

      return id;
    },
    []
  );

  const update = useCallback(
    (id: string, data: Partial<ToasterToast>) => {
      setState((state) => reducer(state, { type: actionTypes.UPDATE_TOAST, toast: { ...data, id } }));
    },
    []
  );

  const dismiss = useCallback((toastId?: string) => {
    setState((state) => reducer(state, { type: actionTypes.DISMISS_TOAST, toastId }));
  }, []);

  useEffect(() => {
    return () => {
      for (const timeout of toastTimeouts.values()) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return {
    toasts: state.toasts,
    toast,
    dismiss,
    update,
  };
}

export { toast };

// Create a toast function that calls useToast
const toast = ({ ...props }: ToastOptions) => {
  const { toast } = useToast();
  return toast(props);
};
