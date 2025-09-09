"use client";
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToasts } from '../../context/ToastContext'; // Adjust path if needed
import { IconCheck, IconX, IconAlertTriangle } from '@tabler/icons-react';

// This is the individual Toast component
const Toast = ({ message, type, onDismiss }: { message: string; type: 'success' | 'error' | 'info'; onDismiss: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000); // Auto-dismiss after 5 seconds

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const icons = {
    success: <IconCheck className="size-6 text-green-500" />,
    error: <IconAlertTriangle className="size-6 text-red-500" />,
    info: <IconAlertTriangle className="size-6 text-blue-500" />,
  };

  const borderColors = {
    success: "border-green-500/50",
    error: "border-red-500/50",
    info: "border-blue-500/50",
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className={`flex items-start gap-4 p-4 rounded-xl border ${borderColors[type]} bg-black-100/80 backdrop-blur-md shadow-lg`}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-grow text-white-50">{message}</div>
      <button onClick={onDismiss} className="flex-shrink-0 ml-4 p-1 rounded-full hover:bg-black-50 transition-colors">
        <IconX className="size-5 text-neutral-400" />
      </button>
    </motion.div>
  );
};

// This is the container that will render all active toasts
export const ToastContainer = () => {
  const { toasts, removeToast } = useToasts();

  return (
    <div className="fixed bottom-4 right-4 z-[200] w-full max-w-sm space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onDismiss={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};