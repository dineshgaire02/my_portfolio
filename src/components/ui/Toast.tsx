import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-xl shadow-xl border border-brand-400/30 text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
      <Check className="w-4 h-4 text-brand-200" />
      <span>{message}</span>
    </div>
  );
};
