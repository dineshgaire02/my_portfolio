import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  dot = false
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-all duration-200';

  const variants = {
    primary: 'bg-brand-50 text-brand-700 border border-brand-200/80 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/60',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-surface-dark dark:text-slate-300 dark:border-surface-darkBorder',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/50',
    outline: 'bg-transparent text-slate-700 border border-slate-300 dark:text-slate-300 dark:border-slate-700'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
