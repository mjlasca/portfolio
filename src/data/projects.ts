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
  sections: {
    id: string;
    label: string;
    title: string;
    body: string;
    image?: string;
  }[];
};

// Estos casos de estudio se basan en la experiencia profesional de Mario.
// Se pueden añadir nombres de clientes, capturas privadas y métricas cuando estén disponibles.
export const projects: Project[] = [
  {
    slug: 'enterprise-drupal-platforms',
    number: '01',
    title: 'Drupal empresarial',
    eyebrow: 'Arquitectura backend / 2022—26',
    summary: 'Plataformas Drupal escalables, módulos personalizados y servicios para aplicaciones empresariales.',
    year: '2022—26',
    role: 'Desarrollador de software backend',
    services: ['PHP', 'Drupal 9/10/11', 'Arquitectura'],
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85',
    accent: '#d86672',
    overview:
      'En Esinergia SAS, Mario desarrolla, mantiene y evoluciona aplicaciones empresariales utilizando PHP y Drupal. Su trabajo combina módulos personalizados, servicios desacoplados y un fuerte enfoque en una arquitectura mantenible.',
    challenge:
      'Las plataformas empresariales deben evolucionar sin perder estabilidad. El trabajo implica dar soporte a productos existentes, ampliar las capacidades de Drupal y conectarlo con sistemas externos manteniendo una base de código comprensible.',
    result:
      'Una práctica backend basada en principios SOLID, inyección de dependencias, arquitectura orientada a servicios y decisiones técnicas colaborativas.',
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
    slug: 'laravel-erp',
    number: '02',
    title: 'ERP con Laravel',
    eyebrow: 'Aplicación empresarial / 2017—22',
    summary: 'Un sistema ERP que conecta flujos de negocio, APIs y una interfaz desarrollada con React.',
    year: '2017—22',
    role: 'Desarrollador backend freelance',
    services: ['Laravel', 'React', 'Inertia.js'],
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85',
    accent: '#7194a2',
    overview:
      'Como desarrollador freelance en EspecialistasenExcel.com, Mario diseñó y desarrolló un ERP propio utilizando Laravel, React e Inertia.js, junto con APIs que conectaban diferentes sistemas empresariales.',
    challenge:
      'El sistema debía reunir información operativa y flujos de trabajo diarios en una sola aplicación, además de comunicarse con aplicaciones de escritorio y plataformas externas.',
    result:
      'Una aplicación empresarial desarrollada sobre APIs de Laravel y una interfaz en React, con una base preparada para evolucionar junto con los procesos del negocio.',
    sections: [
      {
        id: 'context',
        label: '01 — Contexto',
        title: 'Un sistema para varios flujos de trabajo.',
        body: 'El ERP se creó para centralizar las operaciones del negocio en una sola aplicación web. El trabajo cubrió desarrollo backend, modelado de datos y conexión entre la aplicación y otros servicios.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'architecture',
        label: '02 — Arquitectura',
        title: 'Las APIs como tejido conectivo.',
        body: 'Los servicios Laravel proporcionaron una capa backend clara para la interfaz desarrollada con React e Inertia.js. También se crearon APIs para conectar aplicaciones de escritorio con servicios backend y plataformas externas.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      },
      {
        id: 'outcome',
        label: '03 — Resultado',
        title: 'Un producto construido alrededor de la operación real.',
        body: 'La experiencia reunió los procesos del negocio en un sistema más coherente y creó una base backend reutilizable para futuras funcionalidades, integraciones y tareas de mantenimiento.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85',
      },
    ],
  },
  {
    slug: 'integrated-desktop-systems',
    number: '03',
    title: 'Sistemas integrados',
    eyebrow: 'Escritorio y hardware / 2017—22',
    summary: 'Herramientas de escritorio y servicios backend que conectan pólizas, flujos de impresión y hardware.',
    year: '2017—22',
    role: 'Desarrollador de software',
    services: ['C#', '.NET Framework', 'Windows Forms'],
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85',
    accent: '#d6a05d',
    overview:
      'Mario desarrolló aplicaciones de escritorio que se comunicaban con servicios backend y hardware especializado. El trabajo incluyó un sistema de generación de pólizas de seguros y un sistema de gestión de flujos para una imprenta.',
    challenge:
      'Estas herramientas debían funcionar de forma confiable entre el software, los servicios backend y dispositivos físicos como impresoras, cámaras y lectores de huella, a menudo mediante SDKs específicos de cada proveedor.',
    result:
      'Software práctico que conecta personas, procesos y hardware, considerando desde el inicio el mantenimiento y la evolución de las aplicaciones.',
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
