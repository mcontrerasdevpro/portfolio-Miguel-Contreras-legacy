import React from 'react';
import { useLang } from '../context/LanguageContext';
import { site } from '../data/site';

const Contact = () => {
    const { t } = useLang();

    const buttons = [
        { label: t.contact.email, href: `mailto:${site.email}`, external: false },
        { label: t.contact.linkedin, href: site.linkedin, external: true },
        { label: t.contact.github, href: site.github, external: true },
        { label: t.contact.company, href: site.company, external: true },
    ];

    return (
        <section id="contact" className="py-32 text-center border-t border-slate/10 max-w-5xl mx-auto px-4">
            <h2 className="text-primary font-mono text-sm mb-4 tracking-[0.3em] uppercase">
                {t.contact.label}
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                {t.contact.title}
            </h3>

            <p className="max-w-xl mx-auto text-slate mb-12 text-base leading-relaxed">
                {t.contact.body}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
                {buttons.map((btn, i) => (
                    <a
                        key={i}
                        href={btn.href}
                        {...(btn.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded font-mono hover:bg-primary/10 transition-all duration-300"
                    >
                        {btn.label}
                        {btn.external && (
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
