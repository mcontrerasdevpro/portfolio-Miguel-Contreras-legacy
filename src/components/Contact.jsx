import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 text-center border-t border-slate/10">
            <h2 className="text-primary font-mono text-sm mb-4 tracking-[0.3em] uppercase">
                03. What's Next?
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Get In Touch
            </h3>

            <p className="max-w-xl mx-auto text-slate mb-12 text-base leading-relaxed">
                I am currently <span className="text-primary font-bold">available for new opportunities</span> and ready to bring my
                dual expertise in business and development to your team.
                Whether you have a question or a potential role, <span className="text-white">I will respond to you promptly!</span>
            </p>

            <div className="flex flex-col items-center space-y-6">
                <a
                    href="mailto:mcontrerasjaen@://gmail.com from Portfolio"
                    className="group relative inline-flex items-center justify-center border-2 border-primary text-primary px-12 py-5 rounded font-mono text-lg hover:bg-primary/10 transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10">Say Hello</span>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

                {/* Links sociales rápidos */}
                <div className="flex gap-8 mt-12 text-slate font-mono text-xs uppercase tracking-widest">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;