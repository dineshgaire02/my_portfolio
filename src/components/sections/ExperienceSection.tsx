import React from 'react';
import { Briefcase, Calendar, CheckCircle, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experience';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-50/70 dark:bg-navy-950/40 border-y border-slate-200/70 dark:border-surface-darkBorder/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.experience.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-200 dark:border-brand-900 space-y-10">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  item.isCurrent
                    ? 'border-brand-500 bg-white dark:bg-navy-900 text-brand-600 ring-4 ring-brand-500/20'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-slate-400'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.isCurrent ? 'bg-brand-600 animate-pulse' : 'bg-slate-400'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <Card className="p-6 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {language === 'ne' ? item.title.ne : item.title.en}
                    </h3>
                  </div>

                  {/* Current / Completed Badge */}
                  {item.isCurrent ? (
                    <Badge variant="success" dot>
                      {t.experience.currentBadge}
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      {t.experience.pastBadge}
                    </Badge>
                  )}
                </div>

                <div className="text-sm sm:text-base font-semibold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{language === 'ne' ? item.organization.ne : item.organization.en}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'ne' ? item.period.ne : item.period.en}</span>
                </div>

                {/* Architecture ready for future responsibilities */}
                {item.responsibilities &&
                  ((language === 'ne' && item.responsibilities.ne.length > 0) ||
                    (language === 'en' && item.responsibilities.en.length > 0)) && (
                    <ul className="mt-4 pt-4 border-t border-slate-100 dark:border-surface-darkBorder space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {(language === 'ne' ? item.responsibilities.ne : item.responsibilities.en).map(
                        (resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
