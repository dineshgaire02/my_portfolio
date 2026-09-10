import React, { useState } from 'react';
import { ArrowDown, Briefcase, Download, Sparkles, UserCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { CvModal } from '../ui/CvModal';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleDownloadCv = () => {
    if (profileData.cv.isAvailable && profileData.cv.downloadUrl) {
      const link = document.createElement('a');
      link.href = profileData.cv.downloadUrl;
      link.download = profileData.cv.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setIsCvModalOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/10 via-brand-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {profileData.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-lg sm:text-xl font-semibold text-brand-600 dark:text-brand-400">
                <span>{language === 'ne' ? profileData.titles.ne[0] : profileData.titles.en[0]}</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span>{language === 'ne' ? profileData.titles.ne[1] : profileData.titles.en[1]}</span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {language === 'ne' ? profileData.headline.ne : profileData.headline.en}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('about')}
                icon={<UserCheck className="w-4 h-4" />}
              >
                {t.hero.exploreBtn}
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection('experience')}
                icon={<Briefcase className="w-4 h-4" />}
              >
                {t.hero.experienceBtn}
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={handleDownloadCv}
                icon={<Download className="w-4 h-4" />}
              >
                {t.hero.downloadCvBtn}
              </Button>
            </div>
          </div>

          {/* Right Column: Professional Initials Avatar */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Avatar
              initials={profileData.avatarInitials}
              photoUrl={profileData.avatarPhotoUrl}
              size="xl"
            />
          </div>
        </div>
      </div>

      {/* CV Modal for graceful fallback */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
};
