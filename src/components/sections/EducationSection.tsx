import React from 'react';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { educationData } from '../../data/education';
import { Card } from '../ui/Card';

export const EducationSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.education.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Education Display Card */}
        <div className="space-y-6">
          {educationData.map((item) => (
            <Card
              key={item.id}
              className="p-7 sm:p-8 relative overflow-hidden group border-brand-200/80 dark:border-surface-darkBorder"
            >
              {/* Subtle decorative background gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-500/5 via-transparent to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Academic Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 tracking-wider uppercase">
                      <Award className="w-3.5 h-3.5" />
                      <span>{t.education.degreeLabel}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {language === 'ne' ? item.degree.ne : item.degree.en}
                    </h3>

                    <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                      {language === 'ne' ? item.institution.ne : item.institution.en}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-surface-darkBorder text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 shrink-0">
                  <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>{language === 'ne' ? item.period.ne : item.period.en}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
