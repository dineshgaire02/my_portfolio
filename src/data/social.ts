import { SocialLinkItem } from '../types';

/**
 * Social media profiles for Er. Dinesh Gaire.
 * Active profiles have `isAvailable: true` and direct URLs.
 * Pending profiles have `isAvailable: false` and render safely without broken links.
 * To activate a pending link, simply add your URL and change `isAvailable: true`.
 */
export const socialLinksData: SocialLinkItem[] = [
  {
    platform: 'facebook',
    label: 'Facebook',
    username: 'dineshgaire02',
    url: 'https://facebook.com/dineshgaire02',
    isAvailable: true
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    username: 'dineshgaire_02',
    url: 'https://instagram.com/dineshgaire_02',
    isAvailable: true
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    username: '',
    url: '', // Add your LinkedIn URL here, e.g. 'https://linkedin.com/in/dineshgaire'
    isAvailable: false,
    statusNote: {
      en: 'LinkedIn profile coming soon',
      ne: 'लिंक्डइन प्रोफाइल छिट्टै थपिनेछ'
    }
  },
  {
    platform: 'github',
    label: 'GitHub',
    username: '',
    url: '', // Add your GitHub profile URL here, e.g. 'https://github.com/dineshgaire'
    isAvailable: false,
    statusNote: {
      en: 'GitHub profile coming soon',
      ne: 'गिटहब प्रोफाइल छिट्टै थपिनेछ'
    }
  },
  {
    platform: 'twitter',
    label: 'X (Twitter)',
    username: '',
    url: '', // Add your X/Twitter URL here
    isAvailable: false,
    statusNote: {
      en: 'X / Twitter profile coming soon',
      ne: 'एक्स / ट्विटर प्रोफाइल छिट्टै थपिनेछ'
    }
  }
];
