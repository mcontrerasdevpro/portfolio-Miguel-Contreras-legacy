import React from 'react';
import { useLang } from '../context/LanguageContext';

const STATUS_BADGE = {
  production: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  demo: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  internal: 'bg-neutral-500/10 text-neutral-400 border-neutral-500/30',
};

const SectionLabel = ({ children }) => (
  <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
    {children}
  </p>
);

const ProjectCard = ({ project }) => {
  const { t } = useLang();
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE.internal;
  const copy = t.projectData[project.slug];

  return (
    <article className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col gap-6 hover:border-emerald-500/50 transition-colors duration-300">
      {/* Header */}
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-light tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate mt-1 text-sm italic">
            {copy.tagline}
          </p>
        </div>
        <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${badge}`}>
          {t.status[project.status]}
        </span>
      </header>

      {/* Problema */}
      <div>
        <SectionLabel>{t.sectionLabels.problem}</SectionLabel>
        <p className="text-slate leading-relaxed">{copy.problem}</p>
      </div>

      {/* Solución */}
      <div>
        <SectionLabel>{t.sectionLabels.solution}</SectionLabel>
        <p className="text-slate leading-relaxed">{copy.solution}</p>
      </div>

      {/* Decisiones técnicas */}
      <div>
        <SectionLabel>{t.sectionLabels.decisions}</SectionLabel>
        <ul className="space-y-2 text-slate leading-relaxed">
          {copy.decisions.map((d, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-emerald-500 font-mono">›</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Destacado */}
      <div className="bg-neutral-800/60 border border-neutral-700/50 rounded-lg p-4">
        <SectionLabel>{t.sectionLabels.wow}</SectionLabel>
        <p className="text-light leading-relaxed">{copy.wow}</p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span key={i} className="font-mono text-[10px] text-emerald-500/80 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Enlaces */}
      <div className="flex flex-wrap gap-4 mt-auto pt-2">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-emerald-500 font-mono text-sm hover:text-white transition-colors"
          >
            {link.label}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
