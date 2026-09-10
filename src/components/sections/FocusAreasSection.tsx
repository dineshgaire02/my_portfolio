import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { focusAreasData } from '../../data/focusAreas';
import { Card } from '../ui/Card';
import { DynamicIcon } from '../ui/DynamicIcon';

export const FocusAreasSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="focus" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.focus.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.focus.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreasData.map((item) => (
            <Card
              key={item.id}
              className="p-6 transition-all duration-300 hover:border-brand-400 dark:hover:border-brand-600 flex flex-col justify-start"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <DynamicIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ne' ? item.title.ne : item.title.en}
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ne' ? item.description.ne : item.description.en}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
