import React, { useState } from 'react';
import { Code2, ExternalLink, FolderGit2, Sparkles, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData, projectCategories } from '../../data/projects';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50/70 dark:bg-navy-950/40 border-y border-slate-200/70 dark:border-surface-darkBorder/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.projects.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Empty State vs Projects Grid */}
        {projectsData.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-5 border-dashed border-2 border-slate-300 dark:border-surface-darkBorder">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                <FolderGit2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {t.projects.emptyTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
                  {t.projects.emptyDescription}
                </p>
              </div>

              {/* Category tags preview for future expansion */}
              <div className="pt-3 border-t border-slate-100 dark:border-surface-darkBorder w-full">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Upcoming Categories
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {projectCategories
                    .filter((c) => c !== 'All')
                    .map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-surface-dark text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-surface-darkBorder"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white dark:bg-surface-darkCard text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-surface-darkBorder hover:border-brand-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="p-6 flex flex-col justify-between group transition-all duration-300"
                >
                  <div className="space-y-4">
                    {project.imageUrl && (
                      <div className="w-full h-44 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-brand-600 dark:text-brand-400">
                        {project.category}
                      </span>
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {language === 'ne'
                        ? project.shortDescription.ne
                        : project.shortDescription.en}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-surface-darkBorder flex items-center justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 inline-flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>{t.projects.viewCode}</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5"
                      >
                        <span>{t.projects.liveDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
