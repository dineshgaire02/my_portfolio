import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Newspaper, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { blogPostsData, blogCategories } from '../../data/blog';
import { Card } from '../ui/Card';

export const BlogSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPostsData
      : blogPostsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.blog.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.blog.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Empty State vs Articles Grid */}
        {blogPostsData.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-5 border-dashed border-2 border-slate-300 dark:border-surface-darkBorder">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                <Newspaper className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {t.blog.emptyTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
                  {t.blog.emptyDescription}
                </p>
              </div>

              {/* Category tags preview for future expansion */}
              <div className="pt-3 border-t border-slate-100 dark:border-surface-darkBorder w-full">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Upcoming Topics &amp; Themes
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {blogCategories
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
              {blogCategories.map((category) => (
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

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="p-6 flex flex-col justify-between group transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-brand-600 dark:text-brand-400">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                      {language === 'ne' ? post.title.ne : post.title.en}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'ne' ? post.summary.ne : post.summary.en}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-surface-darkBorder flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>

                    <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 inline-flex items-center gap-1">
                      <span>{t.blog.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
