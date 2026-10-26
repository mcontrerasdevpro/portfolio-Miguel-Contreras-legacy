import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useLang } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLang();

    return (
        <section id="projects" className="py-24 border-t border-slate/10 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 flex items-center text-white">
                <span className="text-primary font-mono text-xl mr-4">02.</span> {t.projects.title}
                <div className="h-[1px] bg-slate-700 flex-grow ml-6 opacity-20 hidden sm:block"></div>
            </h2>
            <p className="text-primary font-mono text-sm mb-12 tracking-wide">
                &gt; {t.projects.subtitle}
            </p>

            <div className="grid gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
