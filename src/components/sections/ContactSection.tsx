import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { socialLinksData } from '../../data/social';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Toast } from '../ui/Toast';
import { SocialIcon } from '../ui/SocialIcon';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      triggerToast(`${label} ${t.contact.copiedText}`);
    });
  };

  const getPlatformColors = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'text-[#1877F2] group-hover:bg-[#1877F2]/10';
      case 'instagram':
        return 'text-[#E4405F] group-hover:bg-[#E4405F]/10';
      case 'linkedin':
        return 'text-[#0A66C2] group-hover:bg-[#0A66C2]/10';
      case 'github':
        return 'text-[#24292F] dark:text-slate-100 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/50';
      case 'twitter':
        return 'text-slate-900 dark:text-slate-100 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/50';
      default:
        return 'text-brand-600';
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 dark:bg-navy-950/40 border-t border-slate-200/70 dark:border-surface-darkBorder/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <Card className="p-7 text-center flex flex-col items-center justify-between space-y-5">
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t.about.infoEmail}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white break-all">
                  {profileData.email}
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full pt-2">
              <Button
                as="a"
                href={`mailto:${profileData.email}`}
                variant="primary"
                size="sm"
                className="flex-1"
                icon={<Mail className="w-3.5 h-3.5" />}
              >
                {t.contact.emailMe}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(profileData.email, 'Email')}
                aria-label={t.contact.copyEmail}
                icon={<Copy className="w-3.5 h-3.5" />}
              />
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="p-7 text-center flex flex-col items-center justify-between space-y-5">
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t.about.infoPhone}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  +977 {profileData.phone}
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full pt-2">
              <Button
                as="a"
                href={`tel:${profileData.phone}`}
                variant="primary"
                size="sm"
                className="flex-1"
                icon={<Phone className="w-3.5 h-3.5" />}
              >
                {t.contact.callMe}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(profileData.phone, 'Phone')}
                aria-label={t.contact.copyPhone}
                icon={<Copy className="w-3.5 h-3.5" />}
              />
            </div>
          </Card>

          {/* Location Card */}
          <Card className="p-7 text-center flex flex-col items-center justify-between space-y-5">
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200/80 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t.about.infoLocation}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {language === 'ne' ? profileData.location.ne : profileData.location.en}
                </div>
              </div>
            </div>

            <div className="pt-2 w-full">
              <span className="inline-block px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-surface-dark rounded-full border border-slate-200 dark:border-surface-darkBorder">
                Nepal
              </span>
            </div>
          </Card>
        </div>

        {/* Social Media Section with Real Vector Icons */}
        <Card className="p-8 sm:p-10">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.contact.socialHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {language === 'ne'
                ? 'सामाजिक सञ्जालमा जोडिन तलका आधिकारिक प्रोफाइलहरू हेर्नुहोस्'
                : 'Connect with me across official digital platforms'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialLinksData.map((social) => (
              <div
                key={social.platform}
                className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-200 ${
                  social.isAvailable
                    ? 'bg-white dark:bg-surface-darkCard border-slate-200 dark:border-surface-darkBorder hover:border-brand-500 hover:shadow-lg hover:-translate-y-0.5 group'
                    : 'bg-slate-50/50 dark:bg-surface-dark/40 border-dashed border-slate-200 dark:border-surface-darkBorder opacity-70'
                }`}
              >
                {/* Authentic Brand Social Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-surface-darkBorder flex items-center justify-center mb-3 transition-colors ${getPlatformColors(
                    social.platform
                  )}`}
                >
                  <SocialIcon platform={social.platform} className="w-5 h-5" />
                </div>

                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {social.label}
                </div>

                {social.isAvailable ? (
                  <div className="mt-2 w-full">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate mb-2">
                      @{social.username}
                    </span>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700"
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-2">
                    <span className="inline-block text-[11px] font-medium text-slate-400 bg-slate-100 dark:bg-navy-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                      {language === 'ne' ? social.statusNote?.ne : social.statusNote?.en}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={showToast} />
    </section>
  );
};
