/**
 * English translations. All site texts.
 */

export const en = {
  meta: {
    title: 'Miguel Contreras · Technical Founder & Full Stack Developer',
    description:
      'Miguel Contreras portfolio: technical founder with projects in production (VotifAI, Civora, Nexura). AI Engineering, Full Stack SaaS and automation.',
  },
  nav: {
    about: '01. About',
    projects: '02. Projects',
    contact: '03. Contact',
  },
  hero: {
    prompt: '> init portfolio --user "MiguelContreras"',
    name: 'Miguel Contreras.',
    tagline: '20 years of strategy + Full Stack Code.',
    description:
      'Technical founder turned Full Stack Developer. Specialized in building robust products that run in production, bringing a business perspective that code alone cannot provide.',
    cta: 'Explore my work',
  },
  about: {
    label: '01. About',
    title: 'About',
    heading: 'From business to code, not the other way around.',
    p1: 'For over **12 years** I ran my own business: a physical shop, online sales and events. On top of that, **6 years in passenger transport**, where safety, punctuality and customer service are non-negotiable. That experience is the foundation of how I work today: **I start from the business process and then write the software that fixes it**.',
    p2: 'Since 2024 I have been building full stack applications with AI agents as a freelancer. In **September 2026** I founded **NexuraIA**, a company focused on artificial intelligence, process automation and business software. I am currently studying **AI Engineering at 4Geeks Academy** and keep improving architecture (clean architecture, SOLID), testing (unit tests and integration against real databases) and CI/CD with GitHub Actions.',
    p3: 'I don\'t build demos: I build products that run in production.',
    chips: ['Full Stack SaaS', 'AI Agents & Voice', 'n8n automation', 'Docker · VPS'],
    photoAlt: 'Miguel Contreras',
  },
  sectionLabels: {
    problem: 'Problem',
    solution: 'Solution',
    decisions: 'Technical decisions',
    wow: 'Highlight',
  },
  status: {
    production: 'In production',
    demo: 'Public demo',
    internal: 'Internal',
  },
  projects: {
    label: '02. Projects',
    title: 'Projects & Work',
    subtitle: 'Case studies, not demos.',
  },
  projectData: {
    votifai: {
      tagline: 'Multi-tenant SaaS for property management (fincas)',
      problem:
        'Property managers in Spain lose hours handling meetings, payments and taxes manually and fragmented, with the risk of legal errors.',
      solution:
        'I designed and built a multi-tenant platform that centralizes management: verifiable mobile voting, accounting, SEPA direct debits and bank reconciliation.',
      decisions: [
        'Chained ledger with SHA-256 hashes to guarantee immutability of the minutes.',
        'PostgreSQL with versioned migrations for financial data integrity.',
        'Tenant isolation and role-based access control (RBAC).',
      ],
      wow: '280 automated tests: 206 route tests + 74 against a real PostgreSQL database.',
    },
    civora: {
      tagline: 'Verifiable voting infrastructure with zero-knowledge identity',
      problem:
        'Digital voting in Spain needs to verify eligibility without sacrificing voter anonymity.',
      solution:
        'Proof of concept that validates eligibility with official documents (DNIe/passport) and keeps the vote anonymous on-chain, allowing public tally from contract events.',
      decisions: [
        'ZKPassport: the proof is verified inside the smart contract, not on a server.',
        'Login with Spanish digital certificate via Autofirma (CAdES, FNMT/DGP chain, OCSP).',
        'Nullifiers to guarantee one vote per person without reuse.',
      ],
      wow: 'Includes documented ADRs, threat model and security audit.',
    },
    nexura: {
      tagline: 'Production AI voice & chat agent',
      problem:
        'Businesses need to handle voice and text queries without multiplying costs or exposing data to third parties.',
      solution:
        'Assistant at nexuraia.com that answers by voice if you speak and by text if you type, with a fully self-hosted pipeline.',
      decisions: [
        'Self-hosted Whisper (faster-whisper) for speech-to-text.',
        'Gemini agent with session memory orchestrated with n8n.',
        'Everything in Docker to control costs and data.',
      ],
      wow: 'End-to-end pipeline: webhook → transcription → agent → response, 100% self-hosted.',
    },
  },
  experience: {
    label: '04. Journey',
    title: 'Journey',
    heading: 'Experience & education.',
    rolesTitle: 'Experience',
    educationTitle: 'Education',
    roles: [
      {
        company: 'NexuraIA',
        role: 'Founder · AI Engineer & Full Stack Developer',
        period: 'Sep 2026 – Present',
      },
      {
        company: 'Freelance',
        role: 'Full Stack Developer with AI agents',
        period: 'Jul 2024 – Sep 2026',
      },
      {
        company: 'Avanza Movilidad Integral',
        role: 'Coach Driver',
        period: 'Jun 2020 – Apr 2026',
      },
      {
        company: 'El Arte del Jamón',
        role: 'Owner & Manager',
        period: 'Aug 2013 – Apr 2026',
      },
      {
        company: 'Grupo Osborne · Madrid-Barajas',
        role: 'Brand Ambassador',
        period: 'Oct 2013 – Mar 2017',
      },
    ],
    education: [
      { name: 'AI Engineering', school: '4Geeks Academy', period: 'Sep 2026 – Feb 2027 (in progress)' },
      { name: 'Full Stack Developer Master\'s', school: '4Geeks Academy', period: 'Oct 2025 – May 2026' },
      { name: 'Full Stack with AI', school: '4Geeks Academy', period: 'May 2026' },
      { name: 'GitHub Copilot', school: 'Santander Open Academy', period: 'Sep 2025' },
      { name: 'Business Creation & Management', school: 'Impulso 06', period: '2020' },
      { name: 'Digital Marketing Fundamentals', school: 'Google', period: '2020' },
      { name: 'Train the Trainer (380 h)', school: 'Euroinnova', period: '2013' },
    ],
  },
  contact: {
    label: '03. What\'s Next?',
    title: 'Let\'s talk.',
    body:
      'I am available for client projects, collaborations and Full Stack / AI Engineering roles. I reply fast.',
    email: 'Send email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    company: 'NexuraIA',
  },
  footer: {
    code: 'CODED BY MIGUEL CONTRERAS • 2026',
  },
  langToggle: { label: 'Change language', es: 'ES', en: 'EN' },
};
