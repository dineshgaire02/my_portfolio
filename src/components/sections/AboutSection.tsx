import React from 'react';
import { User, Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Card } from '../ui/Card';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  const infoCards = [
    {
      icon: <User className="w-4 h-4 text-brand-600 dark:text-brand-400" />,
      label: t.about.infoName,
      value: profileData.name,
      link: null
    },
    {
      icon: <Briefcase className="w-4 h-4 text-brand-600 dark:text-brand-400" />,
      label: t.about.infoRole,
      value: language === 'ne' ? profileData.titles.ne.join(' | ') : profileData.titles.en.join(' | '),
      link: null
    },
    {
      icon: <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400" />,
      label: t.about.infoLocation,
      value: language === 'ne' ? profileData.location.ne : profileData.location.en,
      link: null
    },
    {
      icon: <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />,
      label: t.about.infoEmail,
      value: profileData.email,
      link: `mailto:${profileData.email}`
    },
    {
      icon: <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400" />,
      label: t.about.infoPhone,
      value: `+977 ${profileData.phone}`,
      link: `tel:${profileData.phone}`
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/70 dark:bg-navy-950/40 border-y border-slate-200/70 dark:border-surface-darkBorder/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.about.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Paragraph Card */}
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-8 space-y-5 h-full flex flex-col justify-center">
              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
                <p>
                  {language === 'ne' ? profileData.bio.ne : profileData.bio.en}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-surface-darkBorder flex items-center gap-3 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                <span>Computer Engineering</span>
                <span>•</span>
                <span>Technical Instruction</span>
                <span>•</span>
                <span>Web Technology</span>
              </div>
            </Card>
          </div>

          {/* Quick Info Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {infoCards.map((info, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-surface-darkCard rounded-xl p-4 border border-slate-200/80 dark:border-surface-darkBorder flex items-center gap-4 transition-all duration-200 hover:border-brand-400 dark:hover:border-brand-700 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/70 dark:border-brand-900 flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    {info.label}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
