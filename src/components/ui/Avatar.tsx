import React, { useState } from 'react';

interface AvatarProps {
  initials: string;
  photoUrl?: string;
  size?: 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  photoUrl,
  size = 'xl',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    md: 'w-16 h-16 text-xl rounded-2xl',
    lg: 'w-28 h-28 text-3xl rounded-3xl',
    xl: 'w-44 h-44 sm:w-52 sm:h-52 text-5xl sm:text-6xl rounded-[2.5rem]'
  };

  const hasValidPhoto = Boolean(photoUrl && !imageError);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer subtle glow ring matching the blue color system */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600/30 to-brand-400/20 rounded-[3rem] blur-xl opacity-75 dark:opacity-50 pointer-events-none" />

      {/* Main avatar container */}
      <div
        className={`relative ${sizeClasses[size]} p-1.5 bg-gradient-to-tr from-brand-600 to-brand-400 shadow-2xl flex items-center justify-center overflow-hidden`}
      >
        <div className="w-full h-full rounded-[2.2rem] bg-navy-900 flex items-center justify-center overflow-hidden border border-white/10">
          {hasValidPhoto ? (
            <img
              src={photoUrl}
              alt="Er. Dinesh Gaire"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 flex flex-col items-center justify-center select-none text-white relative">
              {/* Subtle decorative geometric overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
              
              <span className="font-extrabold tracking-tight drop-shadow-md">
                {initials}
              </span>
              
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-200 mt-1 opacity-90">
                Engineer
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Verified / Engineer badge indicator */}
      <div className="absolute bottom-2 right-2 bg-white dark:bg-navy-900 rounded-full p-1.5 shadow-lg border-2 border-brand-500">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-600 text-white text-[9px] font-bold">
          ✓
        </span>
      </div>
    </div>
  );
};
