export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  year: string;
  role: string;
  services: string[];
  cover: string;
  accent: string;
  overview: string;
  challenge: string;
  result: string;
  links?: {
    label: string;
    url: string;
  }[];
  sections: {
    id: string;
    label: string;
    title: string;
    body: string;
    image?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: 'laravel-erp',
    number: '01',
    title: 'ERP Laravel y MCP',
    eyebrow: 'SaaS',
    summary: 'Un sistema ERP que conecta flujos de negocio, interfaz desarrollada con React e inertia.js.',
    year: '2026',
    role: 'Desarrollador full-stack',
    services: ['Laravel', 'React', 'Inertia.js', 'MCP'],
    links: [
      { label: 'Ver ERP', url: 'https://erpsi.niveldigitalcol.com/' },
      { label: 'Servidor MCP', url: 'https://erpsi.niveldigitalcol.com/mcperp' },
    ],
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85',
    accent: '#7194a2',
    overview:
      'Aplicación web en laravel con servidor MCP integrado',
    challenge:
      'Desarrollo con agentes, arquitectura modular para agregar funcionalidades en el futuro, servidor MCP con autenticación y consulta de acuerdo a roles y empresas.',
    result:
      'ERP que se ajusta específicamente a las necesidades de mis clientes, el desarrollo es simple pero se contruye para funcionar como un SaaS, los clientes (administradores) consultan información de su empresa de forma dinámica desde chatgpt con el MCP.',
    sections: [
      {
        id: 'context',
        label: '01 — Contexto',
        title: 'ERP para PYMES.',
        body: 'El ERP nación como una necesidad para negocios locales de familiares, se hizo un levantamiento de requerimientos para levantar un MVP e ir agregando diferentes funcionalidades en el proceso de uso.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'architecture',
        label: '02 — Arquitectura',
        title: 'Monolito modular por capas',
        body: 'Hice el desarrollo con IA, usando diferentes skills, entre ellas las que laravel recomienda en su versión 13, una arquitectura con monolito modular por capas para separar la lógica de negocio, para el MCP usé la configuración de las últimas versiones de laravel, creé servicios especificamente para el servidor MCP y agregué autenticación passport, además, las consultas desde los modelos determina con la autenticación el rol y la empresa a la que pertenece para consultar sólo lo que le corresponde.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'outcome',
        label: '03 — Resultado',
        title: 'Un producto construido alrededor de la operación real.',
        body: 'EL ERP facilita la administración y la consolidación de la información de las PYMES en cuestión. El proyecto incorpora un servidor MCP como extensión técnica del ERP, además como un plus para los administradores de las empresas para realizar diferentes consultas de su empresa en el ERP.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'delivery',
        label: '03 — Entrega',
        title: 'Automatización de la calidad con lupa.',
        body: 'Se crearon pruebas unitarias y e2e generadas con IA y auditadas antes de pasos a producción, CI/CD.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85',
      },
    ],
  },
  {
    slug: 'enterprise-drupal-platforms',
    number: '02',
    title: 'Drupal empresarial',
    eyebrow: 'Arquitectura backend / 2022—26',
    summary: 'Plataformas Drupal escalables, módulos personalizados y servicios para aplicaciones empresariales.',
    year: '2022—26',
    role: 'Desarrollador de software backend',
    services: ['PHP', 'Drupal 9/10/11', 'Arquitectura'],
    links: [
      { label: 'Fundación Santafe de bogotá (Módulos custom, Integraciones, Notificaciones)', url: 'https://fundacionsantafedebogota.com' },
      { label: 'Redsalud Chile (Módulos custom, Integraciones, Buscador Solr)', url: 'https://www.redsalud.cl/' },
      { label: 'Unisversidad de la sabana (Módulos custom, Integración de calendario con Teams y servicio custom)', url: 'https://campusvirtual.unisabana.edu.co' },
    ],
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85',
    accent: '#d86672',
    overview:
      'DRUPAL Enterprise',
    challenge:
      'Análisis y desarrollo de proyectos enterprise en Drupal, módulos personalizados, arquitectura basada en servicios y principios solid, despliegue en Acquia Cloud, CI/CD',
    result:
      'Una práctica backend basada en principios SOLID, inyección de dependencias, arquitectura orientada a servicios y decisiones técnicas colaborativas. El trabajo incluye revisión de código, análisis estático, flujos CI/CD y administración de entornos en Acquia.',
    sections: [
      {
        id: 'context',
        label: '01 — Contexto',
        title: 'Construir sobre una plataforma madura.',
        body: 'El rol cubre el desarrollo y la evolución de aplicaciones empresariales construidas con Drupal 9, 10 y 11. Los módulos personalizados y los servicios desacoplados permiten adaptar la plataforma a requisitos de negocio específicos.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'architecture',
        label: '02 — Arquitectura',
        title: 'Código preparado para seguir cambiando.',
        body: 'Los principios SOLID, la inyección de dependencias y el enfoque orientado a servicios guían la implementación de nuevas funcionalidades. Esto facilita probar, extender y mantener la lógica de negocio en productos de larga duración.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'integrations',
        label: '03 — Integraciones',
        title: 'Hacer que los sistemas trabajen juntos.',
        body: 'Los servicios exponen información de Drupal a sistemas externos, mientras que APIs de terceros incorporan datos a la plataforma para procesarlos y crear entidades. Apache Solr se utiliza para desarrollar funcionalidades de búsqueda.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'delivery',
        label: '04 — Entrega',
        title: 'La calidad también es una funcionalidad.',
        body: 'El trabajo incluye revisión de código, análisis estático, flujos CI/CD y administración de entornos en Acquia. Mario también participa en decisiones de arquitectura, planificación de sprints y revisiones técnicas con equipos multidisciplinarios.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85',
      },
    ],
  },
  {
    slug: 'integrated-desktop-systems',
    number: '03',
    title: 'Sistemas integrados',
    eyebrow: 'Escritorio APIs / SDK hardware / 2020-26',
    summary: 'Aplicaciones de escritorio que integran APIs y SDKs de hardware.',
    year: '2017—22',
    role: 'Desarrollador de software',
    services: ['C#', '.NET Framework', 'Windows Forms', 'Laravel', 'API REST', 'SDKs de hardware'],
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85',
    accent: '#d6a05d',
    overview:
      'Escritorio con aplicaciones web y periféricos integrados',
    challenge:
      'Desarrollo de aplicaciones de escritorio que conectan flujos de negocio con servicios backend y hardware, incluyendo impresoras, cámaras y lectores de huella. Aplicaciones que comunican APIs externas para sincronización de información entre puntos de venta.',
    result:
      'Software práctico que conecta personas, procesos y hardware, considerando desde el análisis, implementación, soporte y la evolución de las aplicaciones.',
    sections: [
      {
        id: 'context',
        label: '01 — Contexto',
        title: 'Software que va más allá del navegador.',
        body: 'Los proyectos cubrieron aplicaciones de escritorio desarrolladas con C# y .NET Framework, conectadas a servicios Laravel. Cada una convirtió un proceso operativo específico en una herramienta para el trabajo diario.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'integration',
        label: '02 — Integración',
        title: 'Conectar sistemas digitales y físicos.',
        body: 'Los SDKs especializados permitieron la comunicación con impresoras, cámaras y lectores de huella. Las APIs backend mantuvieron estos flujos de escritorio conectados con el ecosistema general de aplicaciones.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'outcome',
        label: '03 — Resultado',
        title: 'Herramientas confiables para el trabajo real.',
        body: 'El resultado fue un conjunto de aplicaciones orientadas a operaciones concretas: generar pólizas de seguros, gestionar flujos de impresión y mantener y evolucionar sistemas existentes.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
