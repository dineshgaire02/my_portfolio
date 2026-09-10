export type Language = 'en' | 'ne';

export type Theme = 'light' | 'dark';

export interface ProfileInfo {
  name: string;
  titles: {
    en: string[];
    ne: string[];
  };
  headline: {
    en: string;
    ne: string;
  };
  bio: {
    en: string;
    ne: string;
  };
  location: {
    en: string;
    ne: string;
  };
  email: string;
  phone: string;
  avatarInitials: string;
  avatarPhotoUrl?: string; // Set this string to your photo path when ready
  cv: {
    isAvailable: boolean;
    fileName: string;
    downloadUrl: string;
  };
}

export interface SkillItem {
  id: string;
  name: string;
  iconName: string;
  levelBadge?: string;
}

export interface ExperienceItem {
  id: string;
  title: {
    en: string;
    ne: string;
  };
  organization: {
    en: string;
    ne: string;
  };
  period: {
    en: string;
    ne: string;
  };
  isCurrent: boolean;
  responsibilities?: {
    en: string[];
    ne: string[];
  };
}

export interface EducationItem {
  id: string;
  degree: {
    en: string;
    ne: string;
  };
  institution: {
    en: string;
    ne: string;
  };
  period: {
    en: string;
    ne: string;
  };
  details?: {
    en: string[];
    ne: string[];
  };
}

export interface ServiceItem {
  id: string;
  title: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  iconName: string;
}

export interface FocusAreaItem {
  id: string;
  title: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: {
    en: string;
    ne: string;
  };
  fullDescription?: {
    en: string;
    ne: string;
  };
  technologies: string[];
  category: string;
  date: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface BlogPostItem {
  id: string;
  title: {
    en: string;
    ne: string;
  };
  summary: {
    en: string;
    ne: string;
  };
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface SocialLinkItem {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'github' | 'twitter';
  label: string;
  username?: string;
  url?: string;
  isAvailable: boolean;
  statusNote?: {
    en: string;
    ne: string;
  };
}
