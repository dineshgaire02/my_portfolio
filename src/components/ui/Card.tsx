import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`bg-white dark:bg-surface-darkCard rounded-2xl border border-slate-200/80 dark:border-surface-darkBorder p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-brand-300 dark:hover:border-brand-700/60 hover:shadow-lg hover:shadow-brand-500/5 dark:hover:shadow-brand-950/20 hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
