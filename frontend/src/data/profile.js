export const profile = {
  name: 'Riffat Jabeen',
  role: 'Python / Django Developer',
  tagline: 'Building backend systems with Python & Django — currently exploring AI & LLM integrations.',
  location: 'Pakistan',
  email: 'rifaly1100@gmail.com',
  phone: '+92 304 2641903',
  github: 'https://github.com/Riffat-Khan',
  linkedin: 'https://linkedin.com/in/riffat-jabeen',
  resumeFile: '/Riffat-Jabeen-Resume.pdf',
  summary:
    'Hardworking and enthusiastic Software Engineer, currently working as a Python/Django developer at OpenDrawing. Specializing in Python backend development and AI integrations, with professional experience building scalable web applications, REST APIs, data-processing systems, payment workflows, user management systems, and automation pipelines.',
}

export const experience = [
  {
    company: 'OpenDrawing',
    role: 'Python/Django Developer',
    period: 'Oct 2025 — Present',
    points: [
      'Built backend systems for data processing, reporting, payments, quotas, and user management.',
      'Developed a data-processing engine supporting multiple file formats, dynamic field configuration, field mapping, incremental updates, and automated CSV/PDF report generation.',
      'Integrated Stripe for one-time payments using Checkout Sessions and webhooks, including quota, coupon, billing-period rollover, and resource-provisioning workflows.',
      'Developed RBAC and multi-tenant organization management with CRUD operations, user lifecycle management, audit logging, and activity tracking middleware.',
    ],
  },
  {
    company: 'Linked Matrix',
    role: 'Associate Software Engineer',
    period: 'Sep 2024 — Sep 2025',
    points: [
      'Developed backend features using Python, Django, Flask, FastAPI, REST APIs, and databases.',
      'Built web-scraping and automation pipelines using Scrapy, Selenium, Playwright, and Zyte for dynamic and protected websites.',
      'Developed scalable Apify actors for scraping and automation workflows.',
      'Wrote Python automation scripts and AWS Lambda functions to streamline repetitive workflows and automate job-application processes.',
      'Built the ReHub backend using FastAPI and Supabase, providing secure HTTP endpoints for Vapi AI tools.',
    ],
  },
  {
    company: 'Linked Matrix',
    role: 'Backend Development Intern',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Learned and applied Python, Django, Flask, REST APIs, and backend development through practical projects and exercises.',
      'Built web-scraping projects, including an Instagram scraper and a Kenosha scraper.',
    ],
  },
  {
    company: 'Burnt Brains',
    role: 'Frontend Development Intern',
    period: 'Mar 2024 — May 2024',
    points: [
      'Learned and applied the MERN stack, including JavaScript, React, HTML, and CSS.',
      "Contributed to the development of the company's website by implementing frontend interfaces from provided designs.",
    ],
  },
]

export const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript'] },
  { category: 'Backend', items: ['Django', 'DRF', 'FastAPI', 'Flask', 'REST APIs'] },
  { category: 'AI & Integrations', items: ['LLM APIs', 'Vapi AI'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Supabase', 'Neo4j'] },
  { category: 'Cloud & Infra', items: ['AWS', 'AWS Lambda', 'Apify', 'Docker'] },
  { category: 'Scraping & Automation', items: ['Scrapy', 'Selenium', 'Playwright', 'Zyte', 'ZenRows', 'BeautifulSoup'] },
  { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm', 'Cursor', 'Claude'] },
]

export const projects = [
  {
    title: 'Dreamframe — AI Dream Journal',
    description:
      'A full-stack Flask web app that turns journal entries into AI-generated 3-panel comics. Includes user auth, Postgres persistence, and integrates free-tier LLM/image-generation APIs (Groq, Pollinations) with custom retry/backoff handling for real-world rate limits.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'LLM API'],
    github: 'https://github.com/Riffat-Khan/dreamframe',
    live: 'https://dreamframe-eight.vercel.app/',
    comingSoon: false,
  },
  {
    title: 'Coming Soon',
    description: 'A new project is in the works — check back soon.',
    tech: [],
    comingSoon: true,
  },
  {
    title: 'Coming Soon',
    description: 'A new project is in the works — check back soon.',
    tech: [],
    comingSoon: true,
  },
]

export const education = [
  {
    title: 'BSc Electrical Engineering (CS)',
    period: 'Oct 2020 — May 2024',
  },
  {
    title: 'MERN Full Stack Web Development Course',
    period: 'Jun 2023 — Nov 2023',
  },
]
