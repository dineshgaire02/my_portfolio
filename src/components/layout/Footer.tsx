import React from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { socialLinksData } from '../../data/social';
import { SocialIcon } from '../ui/SocialIcon';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-surface-darkBorder pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-200/80 dark:border-surface-darkBorder">
          {/* Identity Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                DG
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>

            <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
              {language === 'ne'
                ? profileData.titles.ne.join(' | ')
                : profileData.titles.en.join(' | ')}
            </p>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {t.footer.closing}
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.contact.title}
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>{language === 'ne' ? profileData.location.ne : profileData.location.en}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  +977 {profileData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="space-y-3 md:text-right flex flex-col md:items-end justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                {t.contact.socialHeading}
              </h4>
              <div className="flex items-center gap-2.5 md:justify-end">
                {socialLinksData.map((s) => (
                  <a
                    key={s.platform}
                    href={s.isAvailable && s.url ? s.url : '#contact'}
                    target={s.isAvailable && s.url ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    title={
                      s.isAvailable
                        ? s.label
                        : language === 'ne'
                        ? s.statusNote?.ne
                        : s.statusNote?.en
                    }
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                      s.isAvailable
                        ? 'border-slate-200 dark:border-surface-darkBorder bg-white dark:bg-surface-darkCard text-slate-700 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 hover:shadow-sm'
                        : 'border-dashed border-slate-200 dark:border-surface-darkBorder opacity-50 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <SocialIcon platform={s.platform} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-brand-600 dark:text-brand-400 hover:text-brand-700 font-medium transition-colors mt-4"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {profileData.name}. {t.footer.rights}</p>
          <p className="text-[11px]">Computer Engineering Instructor | Computer Engineer</p>
        </div>
      </div>
    </footer>
  );
};
