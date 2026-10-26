import React from 'react';
import { useLang } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 border-t border-slate/10 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
        <span className="text-primary font-mono text-xl mr-4">04.</span> {t.experience.title}
        <div className="h-[1px] bg-slate-700 flex-grow ml-6 opacity-20 hidden sm:block"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experiencia */}
        <div>
          <h3 className="text-primary font-mono text-sm mb-6 tracking-[0.2em] uppercase">
            {t.experience.rolesTitle}
          </h3>
          <ul className="space-y-5">
            {t.experience.roles.map((role, i) => (
              <li key={i} className="border-l-2 border-neutral-800 hover:border-emerald-500/50 pl-4 transition-colors">
                <div className="text-white font-medium">{role.role}</div>
                <div className="text-slate text-sm">{role.company}</div>
                <div className="text-emerald-500/80 font-mono text-xs mt-1">{role.period}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Educación */}
        <div>
          <h3 className="text-primary font-mono text-sm mb-6 tracking-[0.2em] uppercase">
            {t.experience.educationTitle}
          </h3>
          <ul className="space-y-5">
            {t.experience.education.map((edu, i) => (
              <li key={i} className="border-l-2 border-neutral-800 hover:border-emerald-500/50 pl-4 transition-colors">
                <div className="text-white font-medium">{edu.name}</div>
                <div className="text-slate text-sm">{edu.school}</div>
                <div className="text-emerald-500/80 font-mono text-xs mt-1">{edu.period}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
