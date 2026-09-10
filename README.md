# Er. Dinesh Gaire — Premium Personal Portfolio Website

A modern, elegant, responsive, bilingual (English & Nepali), and future-ready personal portfolio static website for **Er. Dinesh Gaire** (Computer Engineering Instructor | Computer Engineer).

Built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Features

- **Professional Identity**: Specifically tailored for a Computer Engineer, Technical Educator, and Web Technology Professional.
- **Bilingual Support (English & Nepali)**: One-click switcher in the navbar with full translations across all sections and persistence in `localStorage`.
- **Light & Dark Mode**: Professional Blue-based theme system. Dark mode uses deep blue-gray surfaces (no harsh pure blacks) and high color contrast.
- **Modern Responsive Navigation**: Sticky navbar with scroll-spy active indicators, smooth scrolling, and mobile menu.
- **Professional Initials Avatar**: Sleek blue-themed "DG" monogram avatar with clean fallback and 1-line configuration to replace with a photo anytime.
- **Unified Skills Grid**: Clean, single-section layout containing all 17 technical and professional competencies with interactive hover cards.
- **Career Timeline**: Chronological presentation of engineering instructor positions with a live `Current Position` badge.
- **Academic Credentials**: Highlighting B.Tech in Information Technology from Lovely Professional University.
- **Professional Services & Focus Areas**: Showcasing Website Development, Computer Engineering Instruction, MS Excel & Database Support, and core focus domains.
- **Future-Ready Projects & Blog Modules**: Clean empty states ("Projects Coming Soon" & "Articles Coming Soon") that automatically switch to interactive cards when items are added.
- **Graceful CV / Resume System**: Accessible modal explaining status and providing direct contact if CV is not yet uploaded; instant download once a PDF is added.
- **Direct Contact & Safe Socials**: Click-to-email (`mailto:`), click-to-call (`tel:`), instant clipboard copy with toast notifications, and safe placeholders for pending social profiles.
- **100% Static & Zero-Backend**: Ready for instant hosting on GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

---

## 📁 Project Structure

```
dinesh-gaire-portfolio/
├── public/
│   ├── favicon.svg          # Modern DG monogram SVG icon
│   ├── robots.txt           # SEO robots directives
│   └── sitemap.xml          # Sitemap for search engines
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Sticky navbar with language/theme toggles
│   │   │   └── Footer.tsx   # Footer with links, copyright & contact
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── FocusAreasSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Avatar.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── CvModal.tsx
│   │       ├── DynamicIcon.tsx
│   │       └── Toast.tsx
│   ├── context/
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   ├── profile.ts       # Profile details, CV config, avatar config
│   │   ├── skills.ts        # Skills list
│   │   ├── experience.ts    # Teaching history
│   │   ├── education.ts     # Academic qualifications
│   │   ├── services.ts      # Services offered
│   │   ├── focusAreas.ts    # Domains of interest
│   │   ├── projects.ts      # Projects data & category definitions
│   │   ├── blog.ts          # Blog articles & categories
│   │   └── social.ts        # Social links & profile handles
│   ├── translations/
│   │   ├── en.ts            # English translations
│   │   └── ne.ts            # Nepali translations
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces & types
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── run_dev.bat              # 1-click dev launcher for Windows
└── run_build.bat            # 1-click build launcher for Windows
```

---

## 🚀 Quick Start Guide

### 1. Running Locally
You can double-click `run_dev.bat` in Windows Explorer, or run in PowerShell:
```powershell
# Set path to the local Node runtime
$env:PATH = "..\tools\nodejs;" + $env:PATH

# Start the dev server
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Building for Production
You can double-click `run_build.bat` in Windows Explorer, or run:
```powershell
$env:PATH = "..\tools\nodejs;" + $env:PATH
npm run build
```
The optimized static production files will be output to the `dist/` directory.

---

## 🛠️ How to Customize & Update Content

All content is centrally managed in `src/data/` files without touching layout markup.

### 1. Replacing Avatar with Your Photograph
1. Save your photograph into `public/photo.jpg` (or `public/images/dinesh-gaire.jpg`).
2. Open `src/data/profile.ts`.
3. Update `avatarPhotoUrl`:
   ```typescript
   avatarPhotoUrl: '/photo.jpg',
   ```
4. Save the file. The website will automatically render your photo with a sleek border.

---

### 2. Attaching Your CV / Resume (PDF)
1. Save your CV PDF file into `public/` (e.g. `public/Er_Dinesh_Gaire_CV.pdf`).
2. Open `src/data/profile.ts`.
3. Set `isAvailable` to `true` and update the filename:
   ```typescript
   cv: {
     isAvailable: true,
     fileName: 'Er_Dinesh_Gaire_CV.pdf',
     downloadUrl: './Er_Dinesh_Gaire_CV.pdf'
   }
   ```
4. Now, clicking **Download CV** will immediately download your PDF file.

---

### 3. Adding Projects in the Future
Open `src/data/projects.ts` and add project objects to the `projectsData` array:
```typescript
export const projectsData: ProjectItem[] = [
  {
    id: 'school-portal',
    title: 'School Examination Management System',
    shortDescription: {
      en: 'A responsive web application for managing academic grades and student records.',
      ne: 'विद्यार्थीहरूको शैक्षिक अभिलेख र ग्रेडिङ व्यवस्थापनका लागि निर्मित आधुनिक वेब अनुप्रयोग।'
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Development',
    date: '2026',
    githubUrl: 'https://github.com/dineshgaire02/school-portal',
    demoUrl: 'https://school-portal-demo.example.com',
    imageUrl: '/images/projects/project1.jpg',
    featured: true
  }
];
```
*As soon as you add at least one project, the UI automatically transitions from the "Projects Coming Soon" empty state to the project card grid.*

---

### 4. Adding Blog Articles
Open `src/data/blog.ts` and add articles to the `blogPostsData` array:
```typescript
export const blogPostsData: BlogPostItem[] = [
  {
    id: 'react-basics-guide',
    title: {
      en: 'Essential Web Architecture for Computer Engineering Students',
      ne: 'कम्प्युटर इन्जिनियरिङका विद्यार्थीहरूका लागि आधारभूत वेब आर्किटेक्चर'
    },
    summary: {
      en: 'A foundational look at modern frontend workflows, state management, and component architecture.',
      ne: 'आधुनिक फ्रन्टएन्ड कार्यप्रणाली, स्टेट व्यवस्थापन र कम्पोनेन्ट आर्किटेक्चरसम्बन्धी एक व्यावहारिक गाइड।'
    },
    category: 'Computer Engineering Education',
    date: '2026-09-10',
    readTime: '5 min read',
    slug: 'essential-web-architecture'
  }
];
```

---

### 5. Adding Social Media Links
Open `src/data/social.ts` and add your profile URLs:
```typescript
{
  platform: 'linkedin',
  label: 'LinkedIn',
  username: 'dineshgaire',
  url: 'https://linkedin.com/in/dineshgaire',
  isAvailable: true // Change to true when active
},
{
  platform: 'github',
  label: 'GitHub',
  username: 'dineshgaire',
  url: 'https://github.com/dineshgaire',
  isAvailable: true // Change to true when active
}
```

---

## 🌐 Free Static Hosting & Deployment

The build output in `dist/` contains standard HTML, CSS, and JavaScript. You can deploy it to any static host for free:

### A. Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel will automatically detect Vite.
4. Click **Deploy**.

### B. Netlify
1. Run `run_build.bat` or `npm run build`.
2. Drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
3. Your website is instantly live!

### C. GitHub Pages
1. In `vite.config.ts`, verify `base: './'`.
2. Run `npm run build`.
3. Push the `dist` folder contents to your `gh-pages` branch or configure GitHub Pages in repository settings to publish from the root/docs.

### D. Cloudflare Pages
1. Link your GitHub repository in Cloudflare Pages.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. Click **Deploy**.

---

## 📄 License & Attribution
Designed and built for **Er. Dinesh Gaire**.
© 2026 Er. Dinesh Gaire. All Rights Reserved.
