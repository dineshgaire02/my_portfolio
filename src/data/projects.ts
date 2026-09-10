import { ProjectItem } from '../types';

/**
 * Projects repository for Er. Dinesh Gaire.
 * Currently empty by request (no fake projects).
 * 
 * HOW TO ADD A NEW PROJECT:
 * Simply uncomment or duplicate the example object below and fill in your details.
 * The UI will automatically detect items and switch from the empty state to the project grid.
 * 
 * Example:
 * {
 *   id: 'school-management-system',
 *   title: 'School Management Portal',
 *   shortDescription: {
 *     en: 'A modern web portal for school grading and academic records.',
 *     ne: 'विद्यालयको ग्रेडिङ तथा शैक्षिक अभिलेखका लागि आधुनिक वेब पोर्टल।'
 *   },
 *   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
 *   category: 'Web Development',
 *   date: '2026',
 *   githubUrl: 'https://github.com/dineshgaire02/school-portal',
 *   demoUrl: 'https://demo.example.com',
 *   imageUrl: '/images/projects/project1.jpg',
 *   featured: true
 * }
 */
export const projectsData: ProjectItem[] = [];

export const projectCategories = [
  'All',
  'Web Development',
  'Educational Tools',
  'Database Systems',
  'Design & UI'
];
