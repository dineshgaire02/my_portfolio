import { ProfileInfo } from '../types';

/**
 * Personal profile details for Er. Dinesh Gaire.
 * To update your photo in the future, simply place your photo in the public folder
 * (e.g. /photo.jpg) and set `avatarPhotoUrl: '/photo.jpg'`.
 * To attach your CV, place the PDF file in the public folder (e.g. /dinesh-gaire-cv.pdf)
 * and set `cv.isAvailable = true`.
 */
export const profileData: ProfileInfo = {
  name: 'Er. Dinesh Gaire',
  titles: {
    en: ['Computer Engineering Instructor', 'Computer Engineer'],
    ne: ['कम्प्युटर इन्जिनियरिङ प्रशिक्षक', 'कम्प्युटर इन्जिनियर']
  },
  headline: {
    en: 'Computer Engineer and dedicated Computer Engineering Instructor passionate about technology, education, innovation, and helping students develop practical technical skills.',
    ne: 'प्रविधि, शिक्षा, नवीनता तथा विद्यार्थीहरूलाई व्यावहारिक प्राविधिक सीप विकास गर्न सहयोग गर्न समर्पित कम्प्युटर इन्जिनियर एवं कम्प्युटर इन्जिनियरिङ प्रशिक्षक।'
  },
  bio: {
    en: 'I am Er. Dinesh Gaire, a Computer Engineer and dedicated Computer Engineering Instructor with a passion for technology, education, and innovation. I enjoy simplifying technical concepts, sharing practical knowledge, and helping students develop the skills needed for the modern technology world. I am continuously learning, exploring modern web technologies, and working toward meaningful digital solutions.',
    ne: 'म ई. दिनेश गैरे, प्रविधि, शिक्षा र नवीनताप्रति समर्पित कम्प्युटर इन्जिनियर तथा कम्प्युटर इन्जिनियरिङ प्रशिक्षक हुँ। म प्राविधिक अवधारणाहरूलाई सरल बनाउन, व्यावहारिक ज्ञान बाँड्न र आधुनिक प्रविधिको संसारका लागि आवश्यक सीपहरू विकास गर्न विद्यार्थीहरूलाई सहयोग गर्न रुचाउँछु। म निरन्तर नयाँ कुराहरू सिक्दै, आधुनिक वेब प्रविधिहरू अन्वेषण गर्दै अर्थपूर्ण डिजिटल समाधानहरू निर्माण गर्न प्रयासरत छु।'
  },
  location: {
    en: 'Banganga-8, Kapilvastu, Lumbini Province, Nepal',
    ne: 'बाणगंगा-८, कपिलवस्तु, लुम्बिनी प्रदेश, नेपाल'
  },
  email: 'dineshgaire02@gmail.com',
  phone: '9769820585',
  avatarInitials: 'DG',
  // Optional: Place your image in public/images/dinesh-gaire.jpg and set it here
  avatarPhotoUrl: './photo.jpg',
  cv: {
    isAvailable: false,
    fileName: 'Er_Dinesh_Gaire_CV.pdf',
    downloadUrl: '/cv.pdf'
  }
};
