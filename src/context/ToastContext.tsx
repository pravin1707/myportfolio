"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';

// Define the shape of a single toast message
interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

// Define the shape of the context value
interface ToastContextType {
  addToast: (message: string, options: { type: 'success' | 'error' | 'info'; duration?: number }) => void;
  removeToast: (id: number) => void;
  toasts: ToastMessage[];
}

// Create the context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Create the provider component
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message: string, { type, duration = 5000 }: { type: 'success' | 'error' | 'info'; duration?: number }) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useToasts = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToasts must be used within a ToastProvider');
  }
  return context;
};