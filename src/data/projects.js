/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} tagline
 * @property {string} problem
 * @property {string} solution
 * @property {string[]} decisions
 * @property {string} wow
 * @property {string[]} stack
 * @property {{label: string, href: string}[]} links
 * @property {"production" | "demo" | "internal"} status
 */

export const projects = [
  {
    slug: "votifai",
    title: "VotifAI",
    tagline: "SaaS multi-tenant para administración de fincas",
    problem:
      "Las administradoras de fincas en España pierden horas gestionando juntas, cobros e impuestos de forma manual y fragmentada, con riesgo de errores legales.",
    solution:
      "Diseñé y construí una plataforma multi-tenant que centraliza la gestión: votaciones móviles verificables, contabilidad, remesas SEPA y conciliación bancaria.",
    decisions: [
      "Ledger encadenado con hashes SHA-256 para garantizar inmutabilidad de las actas.",
      "PostgreSQL con migraciones versionadas para integridad de datos financieros.",
      "Aislamiento por tenant y control de acceso basado en roles (RBAC).",
    ],
    wow: "280 tests automatizados: 206 de rutas + 74 contra una base de datos PostgreSQL real.",
    stack: ["React 19", "Vite", "Tailwind v4", "Node.js", "Express", "PostgreSQL", "Docker"],
    links: [
      { label: "Live", href: "https://votifai.nexuraia.com" },
      { label: "Source", href: "https://github.com/mcontrerasdevpro/votifai" },
    ],
    status: "production",
  },
  {
    slug: "civora",
    title: "Civora",
    tagline: "Infraestructura de voto verificable con identidad zero-knowledge",
    problem:
      "El voto digital en España necesita verificar elegibilidad sin sacrificar el anonimato del votante.",
    solution:
      "Prueba de concepto que valida la elegibilidad con documentos oficiales (DNIe/pasaporte) y mantiene el voto anónimo on-chain, permitiendo recuento público desde los eventos del contrato.",
    decisions: [
      "ZKPassport: la prueba se verifica dentro del smart contract, no en un servidor.",
      "Login con certificado digital español vía Autofirma (CAdES, cadena FNMT/DGP, OCSP).",
      "Nullifiers para garantizar un voto por persona sin reutilización.",
    ],
    wow: "Incluye ADRs, modelo de amenazas y auditoría de seguridad documentados.",
    stack: ["Next.js", "TypeScript", "Solidity", "Hardhat", "PostgreSQL", "Docker"],
    links: [
      { label: "Demo", href: "https://civora.nexuraia.com" },
      { label: "Source", href: "https://github.com/mcontrerasdevpro/civora" },
    ],
    status: "demo",
  },
  {
    slug: "nexura",
    title: "Nexura",
    tagline: "Agente de voz y chat con IA en producción",
    problem:
      "Los negocios necesitan atender consultas por voz y texto sin multiplicar costes ni exponer datos a terceros.",
    solution:
      "Asistente en nexuraia.com que responde por voz si hablas y por texto si escribes, con pipeline totalmente auto-hospedado.",
    decisions: [
      "Whisper (faster-whisper) auto-hospedado para speech-to-text.",
      "Agente Gemini con memoria de sesión orquestado con n8n.",
      "Todo en Docker para controlar costes y datos.",
    ],
    wow: "Pipeline end-to-end: webhook → transcripción → agente → respuesta, 100% auto-hospedado.",
    stack: ["n8n", "Whisper", "Gemini", "Docker"],
    links: [{ label: "Live", href: "https://nexuraia.com" }],
    status: "production",
  },
];
