import React, { useEffect } from 'react';
import { X, FileText, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Button } from './Button';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-surface-darkCard rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-surface-darkBorder transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors"
          aria-label={t.cvModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
            <FileText className="w-7 h-7" />
          </div>

          <div className="inline-block px-3 py-1 text-xs font-semibold text-brand-700 bg-brand-50 dark:bg-brand-950/60 dark:text-brand-300 rounded-full border border-brand-200 dark:border-brand-800 mb-2">
            {t.cvModal.badge}
          </div>

          <h3 id="cv-modal-title" className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {t.cvModal.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {t.cvModal.message}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              as="a"
              href={`mailto:${profileData.email}?subject=Requesting%20CV%20-%20Er.%20Dinesh%20Gaire`}
              variant="primary"
              className="flex-1"
              icon={<Mail className="w-4 h-4" />}
            >
              {t.cvModal.emailMe}
            </Button>

            <Button
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              {t.cvModal.close}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
