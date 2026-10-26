/**
 * Traducciones en español. Todos los textos del sitio.
 */

export const es = {
  meta: {
    title: 'Miguel Contreras · Fundador técnico & Full Stack Developer',
    description:
      'Portafolio de Miguel Contreras: fundador técnico con proyectos en producción (VotifAI, Civora, Nexura). AI Engineering, Full Stack SaaS y automatización.',
  },
  nav: {
    about: '01. About',
    projects: '02. Projects',
    contact: '03. Contact',
  },
  hero: {
    prompt: '> init portfolio --user "MiguelContreras"',
    name: 'Miguel Contreras.',
    tagline: '20 años de estrategia + código Full Stack.',
    description:
      'De los negocios al código. Fundador de NexuraIA y desarrollador Full Stack. Especializado en construir productos robustos que corren en producción, aportando una perspectiva de negocio que el código solo no puede ofrecer.',
    cta: 'Explora mi trabajo',
  },
  about: {
    label: '01. About',
    title: 'About',
    heading: 'Del negocio al código, no al revés.',
    p1: 'Durante más de **12 años** gestioné mi propio negocio: tienda física, venta online y eventos. A eso le suman **6 años en transporte de viajeros**, donde la seguridad, la puntualidad y el servicio al cliente no son negociables. Esa experiencia es la base de cómo trabajo hoy: **empiezo por el proceso de negocio y luego escribo el software que lo arregla**.',
    p2: 'Desde 2024 desarrollo aplicaciones full stack con agentes de IA como freelance. En **septiembre de 2026** fundé **NexuraIA**, una compañía enfocada en inteligencia artificial, automatización de procesos y software de negocio. Actualmente estudio **AI Engineering en 4Geeks Academy** y sigo mejorando arquitectura (clean architecture, SOLID), testing (unitario e integración contra BBDD real) y CI/CD con GitHub Actions.',
    p3: 'No construyo demos: construyo productos que corren en producción.',
    chips: ['Full Stack SaaS', 'AI Agents & Voice', 'Automatización con n8n', 'Docker · VPS'],
    photoAlt: 'Miguel Contreras',
  },
  sectionLabels: {
    problem: 'Problema',
    solution: 'Solución',
    decisions: 'Decisiones técnicas',
    wow: 'Destacado',
  },
  status: {
    production: 'En producción',
    demo: 'Demo pública',
    internal: 'Interno',
  },
  projects: {
    label: '02. Projects',
    title: 'Projects & Work',
    subtitle: 'Casos de estudio, no demos.',
  },
  projectData: {
    votifai: {
      tagline: 'SaaS multi-tenant para administración de fincas',
      problem:
        'Las administradoras de fincas en España pierden horas gestionando juntas, cobros e impuestos de forma manual y fragmentada, con riesgo de errores legales.',
      solution:
        'Diseñé y construí una plataforma multi-tenant que centraliza la gestión: votaciones móviles verificables, contabilidad, remesas SEPA y conciliación bancaria.',
      decisions: [
        'Ledger encadenado con hashes SHA-256 para garantizar inmutabilidad de las actas.',
        'PostgreSQL con migraciones versionadas para integridad de datos financieros.',
        'Aislamiento por tenant y control de acceso basado en roles (RBAC).',
      ],
      wow: '280 tests automatizados: 206 de rutas + 74 contra una base de datos PostgreSQL real.',
    },
    civora: {
      tagline: 'Infraestructura de voto verificable con identidad zero-knowledge',
      problem:
        'El voto digital en España necesita verificar elegibilidad sin sacrificar el anonimato del votante.',
      solution:
        'Prueba de concepto que valida la elegibilidad con documentos oficiales (DNIe/pasaporte) y mantiene el voto anónimo on-chain, permitiendo recuento público desde los eventos del contrato.',
      decisions: [
        'ZKPassport: la prueba se verifica dentro del smart contract, no en un servidor.',
        'Login con certificado digital español vía Autofirma (CAdES, cadena FNMT/DGP, OCSP).',
        'Nullifiers para garantizar un voto por persona sin reutilización.',
      ],
      wow: 'Incluye ADRs, modelo de amenazas y auditoría de seguridad documentados.',
    },
    nexura: {
      tagline: 'Agente de voz y chat con IA en producción',
      problem:
        'Los negocios necesitan atender consultas por voz y texto sin multiplicar costes ni exponer datos a terceros.',
      solution:
        'Asistente en nexuraia.com que responde por voz si hablas y por texto si escribes, con pipeline totalmente auto-hospedado.',
      decisions: [
        'Whisper (faster-whisper) auto-hospedado para speech-to-text.',
        'Agente Gemini con memoria de sesión orquestado con n8n.',
        'Todo en Docker para controlar costes y datos.',
      ],
      wow: 'Pipeline end-to-end: webhook → transcripción → agente → respuesta, 100% auto-hospedado.',
    },
  },
  experience: {
    label: '04. Trayectoria',
    title: 'Trayectoria',
    heading: 'Experiencia y educación.',
    rolesTitle: 'Experiencia',
    educationTitle: 'Educación',
    roles: [
      {
        company: 'NexuraIA',
        role: 'Founder · AI Engineer & Full Stack Developer',
        period: 'Sep 2026 – Actualidad',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Developer con agentes de IA',
        period: 'Jul 2024 – Sep 2026',
      },
      {
        company: 'Avanza Movilidad Integral',
        role: 'Coach Driver',
        period: 'Jun 2020 – Abr 2026',
      },
      {
        company: 'El Arte del Jamón',
        role: 'Owner & Manager',
        period: 'Ago 2013 – Abr 2026',
      },
      {
        company: 'Grupo Osborne · Madrid-Barajas',
        role: 'Brand Ambassador',
        period: 'Oct 2013 – Mar 2017',
      },
    ],
    education: [
      { name: 'AI Engineering', school: '4Geeks Academy', period: 'Sep 2026 – Feb 2027 (en curso)' },
      { name: 'Full Stack Developer Master\'s', school: '4Geeks Academy', period: 'Oct 2025 – May 2026' },
      { name: 'Full Stack con IA', school: '4Geeks Academy', period: 'May 2026' },
      { name: 'GitHub Copilot', school: 'Santander Open Academy', period: 'Sep 2025' },
      { name: 'Business Creation & Management', school: 'Impulso 06', period: '2020' },
      { name: 'Digital Marketing Fundamentals', school: 'Google', period: '2020' },
      { name: 'Train the Trainer (380 h)', school: 'Euroinnova', period: '2013' },
    ],
  },
  contact: {
    label: '03. What\'s Next?',
    title: 'Hablemos.',
    body:
      'Estoy disponible para proyectos de clientes, colaboraciones y roles de Full Stack / AI Engineering. Respondo rápido.',
    email: 'Enviar email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    company: 'NexuraIA',
  },
  footer: {
    code: 'CODED BY MIGUEL CONTRERAS • 2026',
  },
  langToggle: { label: 'Cambiar idioma', es: 'ES', en: 'EN' },
};
