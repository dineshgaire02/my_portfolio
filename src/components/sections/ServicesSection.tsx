import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { servicesData } from '../../data/services';
import { Card } from '../ui/Card';
import { DynamicIcon } from '../ui/DynamicIcon';

export const ServicesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-slate-50/70 dark:bg-navy-950/40 border-y border-slate-200/70 dark:border-surface-darkBorder/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.services.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-brand-500/80 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div className="space-y-5">
                {/* Service Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {language === 'ne' ? service.title.ne : service.title.en}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {language === 'ne' ? service.description.ne : service.description.en}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-surface-darkBorder flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span>Professional Offering</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
