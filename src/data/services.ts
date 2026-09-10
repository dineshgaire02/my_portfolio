import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: {
      en: 'Website Development',
      ne: 'वेबसाइट विकास'
    },
    description: {
      en: 'Create modern, responsive, user-friendly websites with clean design and modern technologies.',
      ne: 'आधुनिक, उत्तरदायी (responsive), र सफा डिजाइन तथा नवीनतम प्रविधिहरू प्रयोग गरी प्रयोगकर्ता-मैत्री वेबसाइटहरू निर्माण।'
    },
    iconName: 'Globe'
  },
  {
    id: 'ce-instruction',
    title: {
      en: 'Computer Engineering Instruction',
      ne: 'कम्प्युटर इन्जिनियरिङ शिक्षण तथा प्रशिक्षण'
    },
    description: {
      en: 'Provide computer engineering education and practical technical learning support.',
      ne: 'कम्प्युटर इन्जिनियरिङ शिक्षा तथा व्यावहारिक प्राविधिक सिकाइ सहायता प्रदान।'
    },
    iconName: 'GraduationCap'
  },
  {
    id: 'excel-database-support',
    title: {
      en: 'MS Excel & Database Support',
      ne: 'एमएस एक्सेल तथा डाटाबेस व्यवस्थापन'
    },
    description: {
      en: 'Provide support related to spreadsheets, data organization, database concepts, and digital data management.',
      ne: 'स्प्रेडसिट, डाटा संगठन, डाटाबेस अवधारणाहरू र डिजिटल डाटा व्यवस्थापन सम्बन्धी प्राविधिक सहयोग।'
    },
    iconName: 'Database'
  }
];
