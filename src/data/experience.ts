import { ExperienceItem } from '../types';

/**
 * Professional experience timeline for Er. Dinesh Gaire.
 * Responsibilities arrays are ready for future additions without changing the layout.
 */
export const experienceData: ExperienceItem[] = [
  {
    id: 'shree-secondary-school',
    title: {
      en: 'Computer Engineering Instructor',
      ne: 'कम्प्युटर इन्जिनियरिङ प्रशिक्षक'
    },
    organization: {
      en: 'Shree Secondary School, Imiliya',
      ne: 'श्री माध्यमिक विद्यालय, इमिलिया'
    },
    period: {
      en: '2025 – Present',
      ne: '२०२५ – हालसम्म'
    },
    isCurrent: true,
    responsibilities: {
      en: [
        // Ready for future responsibilities to be added easily
      ],
      ne: [
        // भविष्यमा थप जिम्मेवारीहरू थप्न सकिने
      ]
    }
  },
  {
    id: 'saraswati-secondary-school',
    title: {
      en: 'Computer Engineering Instructor',
      ne: 'कम्प्युटर इन्जिनियरिङ प्रशिक्षक'
    },
    organization: {
      en: 'Saraswati Secondary School, Satyawati-6, Johang',
      ne: 'सरस्वती माध्यमिक विद्यालय, सत्यवती-६, जोहाङ'
    },
    period: {
      en: '2023 – 2025',
      ne: '२०२३ – २०२५'
    },
    isCurrent: false,
    responsibilities: {
      en: [],
      ne: []
    }
  }
];
