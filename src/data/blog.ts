import { BlogPostItem } from '../types';

/**
 * Blog and educational articles repository for Er. Dinesh Gaire.
 * Currently empty by request (no fake articles).
 * 
 * HOW TO ADD A NEW ARTICLE:
 * Add an object to the `blogPostsData` array below.
 * When posts are added, the blog section automatically renders the article cards.
 * 
 * Example:
 * {
 *   id: 'intro-to-react-for-beginners',
 *   title: {
 *     en: 'Modern React Architecture for Computer Engineering Students',
 *     ne: 'कम्प्युटर इन्जिनियरिङ विद्यार्थीहरूका लागि आधुनिक रिएक्ट आर्किटेक्चर'
 *   },
 *   summary: {
 *     en: 'A foundational guide on component breakdown, hooks, and clean state management.',
 *     ne: 'कम्पोनेन्ट विभाजन, हुक्स, र सफा स्टेट व्यवस्थापन सम्बन्धी एक आधारभूत गाइड।'
 *   },
 *   category: 'Computer Engineering Education',
 *   date: '2026-09-10',
 *   readTime: '6 min read',
 *   slug: 'modern-react-architecture'
 * }
 */
export const blogPostsData: BlogPostItem[] = [];

export const blogCategories = [
  'All',
  'Technology Tutorials',
  'Web Development',
  'Computer Engineering Education',
  'Teaching Materials',
  'Technical Tips',
  'Personal Insights'
];
