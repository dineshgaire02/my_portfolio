import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skills';
import { DynamicIcon } from '../ui/DynamicIcon';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.skills.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Single Unified Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-white dark:bg-surface-darkCard rounded-xl p-4 border border-slate-200/80 dark:border-surface-darkBorder flex items-center gap-3.5 transition-all duration-300 hover:border-brand-400 dark:hover:border-brand-600 hover:shadow-md hover:shadow-brand-500/5 hover:-translate-y-0.5"
            >
              {/* Skill Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/70 border border-brand-200/70 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 group-hover:scale-105 transition-transform">
                <DynamicIcon name={skill.iconName} className="w-5 h-5" />
              </div>

              {/* Skill Name */}
              <div className="min-w-0 flex-1">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug line-clamp-2">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
