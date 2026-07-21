/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Alex Morgan | Full-stack engineer',
    description:
      'Portfolio example: shipping reliable web products with clear architecture, tests, and delivery practices.',
  },
  hero: {
    name: 'José Tobar',
    role: 'Ingeniero en informática',
    tagline: 'Especialidad en analisis de datos',
    contact: '',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Alex Morgan',
  },
  about: {
    paragraphs: [
      'Ingeniero en informática con especialidad en Análisis de datos y Business Intelligence. Con experiencia en la recopilación, estructuración y modelado de grandes volúmenes de datos e inventarios. Especialista en el desarrollo de pipelines ETL utilizando Python, consultas SQL y automatización de Dashboards interactivos en Power BI mediante fórmulas DAX para la medición de KPIs críticos en las áreas de producción, logística y distribución. Capacidad demostrada para traducir datos complejos en decisiones estratégicas de negocio, optimizar procesos de cadena de suministros y coordinar equipos operativos',
      {
        heading: 'Conocimientos',
        techItems: ['Power BI', 'SQL', 'Python', 'Excel'],
      },
    ],
  },
  experiences: [
   {
     period: '2025',
     title: 'Lead Product Designer',
     company: 'Lumen Studio',
     summary:
       'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
     highlights: [
       'Designed and shipped the complete website using Astro, Tailwind CSS, and content-driven components',
       'Crafted consistent responsive layouts and accessible typography across desktop and mobile',
       'Optimized asset delivery and performance for sub-1s page load metrics',
     ],
     tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'Node', 'Vite'],
   },
   {
     period: '2024',
     title: 'Frontend Architect',
     company: 'Nova Launch',
     summary:
       'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
     highlights: [
       'Implemented a component-based design system with reusable cards, buttons, and hero sections',
       'Built content-driven project pages, archive views, and client-side navigation enhancements',
       'Added cross-browser polish and performance tuning with image optimization and lazy loading',
     ],
     tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node', 'Vite'],
   },
  ],

  featuredProjects: [
    {
      title: 'Dashboard de Control de stock y Movimientos',
      period: '2025',
      summary: 'Dashboard de datos históricos de materiales en Power BI, utilizando medidas DAX y modelado de datos, enfocado en el análisis de movimientos, salidas y control de stock.',
      impact: 'Optimizo un 20% el tiempo de revisión de los materiales, ademas de generar una visualización para los datos.',
      image: 'dashboardHistorico1.jpg',
      imageAlt: 'Datos historicos de Heavy Duty',
      
      techCategories: [
        {
          category: 'Analisis de datos',
          items: ['Power BI', 'Odoo', 'Excel'],
        },
        {
          category: 'Dashboard',
          items: ['Optimización', 'Visualización de datos'],
        },
      ],
    },
    {
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'hello@example.com',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];
