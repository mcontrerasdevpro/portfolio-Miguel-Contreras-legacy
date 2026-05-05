import React, { useState } from 'react'; 
import Modal from './Modal';

const projects = [
    {
        title: "Full Stack Task Manager",
        description: "A robust SPA with JWT authentication. Backend hosted on Render (Python/Flask) and Frontend on Vercel (React).",
        tech: ["React", "Flask", "PostgreSQL"],
        link: "https://autenticaci-n-jwt-con-flask-y-react.vercel.app/",
        github: "https://github.com/mcontrerasjaen/Autenticaci-n-JWT-con-Flask-y-React-Miguel-Contreras"
    },
    {
        title: "E-commerce Engine",
        description: "Dynamic store platform. Backend logic powered by Python/Flask hosted on Render.",
        tech: ["Python", "Flask", "MySQL"],
        link: "https://spain-fs-pt-130-gecap-p5fx.onrender.com/",
        github: "https://github.com/mcontrerasjaen/spain-fs-pt-130-Gecap"
    },
    {
        title: "Data Automation Tool",
        description: "Python automation script. Shown here as a documentation site or live dashboard.",
        tech: ["Python", "Pandas", "SQL"],
        link: "#",
        github: "https://github.com/mcontrerasjaen"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMore, setShowMore] = useState(false); 

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold mb-12 flex items-center text-light">
                <span className="text-primary font-mono text-xl mr-4">02.</span> Projects & Work
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(project)}
                        className="cursor-pointer bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary/30 flex flex-col h-full group shadow-lg hover:shadow-primary/5"
                    >                        
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://w3.org" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="flex gap-4 text-slate font-mono text-[10px] z-20">
                                <span className="hover:text-primary transition-colors">GITHUB</span>
                                {project.link !== "#" && (
                                    <span className="hover:text-primary transition-colors">LIVE</span>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors tracking-tight">
                            {project.title}
                        </h3>
                        <p className="text-slate text-sm mb-6 flex-grow leading-relaxed italic">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-primary/70">
                            {project.tech.map((t, i) => (
                                <span key={i} className="group-hover:text-primary transition-colors"># {t}</span>
                            ))}
                        </div>
                    </div>
                ))}
                
                {showMore && (
                    <div className="border-2 border-dashed border-primary/20 p-6 rounded-xl flex flex-col justify-center items-center text-center min-h-[300px] animate-pulse">
                        <div className="text-primary text-4xl mb-4">
                            <svg xmlns="http://w3.org" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 font-mono italic">Building new code...</h3>
                        <p className="text-slate text-[10px] font-mono leading-relaxed">
                            New repositories are currently under development. Stay tuned for upcoming deployments.
                        </p>
                    </div>
                )}
            </div>
         
            <div className="mt-16 text-center">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="group inline-flex items-center gap-3 text-primary font-mono text-sm border border-primary/20 px-8 py-4 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                    <span>{showMore ? 'Show less' : 'Explore more projects'}</span>
                    <span className={`transition-transform duration-500 ${showMore ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
                        ↓
                    </span>
                </button>
            </div>

            {
                selectedProject && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        project={selectedProject}
                    />
                )
            }
        </section >
    );
};

export default Projects;