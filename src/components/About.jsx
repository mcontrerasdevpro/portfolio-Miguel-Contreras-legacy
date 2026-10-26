import React from 'react';
import { useLang } from '../context/LanguageContext';
import miFoto from '../assets/Perfil.jpg';

const renderBold = (str) => {
  const parts = str.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const About = () => {
    const { t } = useLang();

    return (
        <section id="about" className="py-24 border-t border-slate/10 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
                <span className="text-primary font-mono text-xl mr-4">01.</span> {t.about.title}
                <div className="h-[1px] bg-slate-700 flex-grow ml-6 opacity-20 hidden sm:block"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
                    <p>{renderBold(t.about.p1)}</p>
                    <p>{renderBold(t.about.p2)}</p>
                    <p className="border-l-2 border-primary/40 pl-5 py-2 text-white font-medium italic">
                        {t.about.p3}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {t.about.chips.map((chip, i) => (
                            <span
                                key={i}
                                className="font-mono text-[11px] text-primary/80 bg-primary/5 border border-primary/20 px-3 py-1.5 rounded transition-colors hover:border-primary/60 hover:text-primary"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative group mx-auto md:mx-0 w-64 h-64 select-none">
                    <div className="relative z-10 border-2 border-primary/40 p-4 rounded-lg bg-[#112240] w-full h-full shadow-xl shadow-black/40">
                        <img
                            src={miFoto}
                            alt={t.about.photoAlt}
                            className="w-full h-full object-cover rounded grayscale contrast-110 brightness-90 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute top-5 left-5 w-full h-full border-2 border-primary/20 rounded-lg -z-0 transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
