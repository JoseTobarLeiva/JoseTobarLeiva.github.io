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
  url: 'https://josetobarleiva.github.io',
  meta: {
    title: 'José Tobar | Analista de datos',
    description:
      'Proyectos realizados como analista de datos',
  },
  hero: {
    name: 'José Tobar',
    role: 'Ingeniero en informática',
    tagline: 'Especialidad en analisis de datos',
    contact: 'joseT.ignacioL@gmail.com',
    avatarSrc: '/perfil.jpg',
    avatarAlt: 'José Tobar',
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
     title: 'Analista de datos',
     company: 'RCM Modular',
     summary:
       'Encargado del area de análisis para las areas de gerencia, logistica, bodega y producción',
     highlights: [
       'Diseñe e implemente un Dashboard automatizado en Power Bi para el monitoreo de movimientos de SKU, costo total, tiempo del proyecto y costo total por material, logrando reducir un 80% el tiempo requerido por la gerencia para revisar dicha información.',
       'Responsable de formular y medir KPI tanto del inventario, producción y ventas generando semaforización con las metas y los objetivos que tiene la empresa.',
       'Establecí canales de reportería interna para las áreas de gerencia, logística y adquisición, emitiendo alertas tempranas sobre quiebres de stock, desviaciones presupuestarias y avance de proyectos.',
     ],
     tech: ['Power BI', 'SQL', 'Python', 'Excel', 'Odoo'],
   },

  ],

  featuredProjects: [
    {
      Titulo: 'Dashboard de Control de stock y Movimientos',
      Periodo: '2025',
      Resumen: 'Dashboard de datos históricos de materiales en Power BI, utilizando medidas DAX y modelado de datos, enfocado en el análisis de movimientos, salidas y control de stock.',
      Impacto: 'Optimizo un 20% el tiempo de revisión de los materiales, ademas de generar una visualización para los datos.',
     images: [
        'dashboardHistorico1.jpg',
        'dashboardHistorico2.jpg',
      ],
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
      title: 'Dashboard de Costos por Proyectos',
      period: '2026',
      summary: 'Dashboard de costos por proyectos desarrollado en Power Bi, utilizando medidas DAX y modelado de datos, enfocado en el análisis de materiales, seguimiento de la duración de proyectos y evaluación del comportamiento de los SKU',
      solution: 'Uno de los problemas que se tenía en RCM era obtener datos específicos de proyectos antiguos —como pinturas utilizadas, tipos de pisos, artefactos o materiales específicos— podía tomar 30 minutos o más por búsqueda.\n\n La solución para el problema fue implementar un Dashboard interactivo en Power BI que permite: Buscar por categoría o número de proyecto, Consultar duración del proyecto, Consultar duración del proyecto, Mejorar el control de SKU históricos y actuales y Centralizar información crítica de manera rápida y eficiente',
      impact: 'Reducción del tiempo de búsqueda en 85%, mayor eficiencia operativa, mejor control de materiales y una toma de decisiones más rápida basa en datos',
      images: [
        'itemxproyecto1.jpg',
        'itemxproyecto2.jpg',
      ],
      imageAlt: 'Movimientos de item por proyecto',
      techCategories: [
        {
          category: 'Analisis de datos',
          items: ['Power BI', 'SQL', 'Python'],
        },
        {
          category: 'Dashboard',
          items: ['Optimización', 'Visualización de datos'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'Proyectos',
    description: 'Proyectos elaborados autorizados a ser publicados como analista de datos',
    intro: 'Proyectos elaborados autorizados a ser publicados como analista de datos.',
  },
  projectArchive: [
    { date: '2026', project: 'Dashboard de Costos por Proyectos', role: 'Analista', techStack: 'Power BI Excel, Odoo' },
    { date: '2025', project: 'Dashboard de Control de stock y Movimientos', role: 'Analista', techStack: 'Power BI, SQL, Python' },
  ],
  contact: {
    email: 'joseT.IgnacioL@gmail.com',
    github: 'https://github.com/JoseTobarLeiva',
    linkedin: 'https://www.linkedin.com/in/joséignaciotobarleiva',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
