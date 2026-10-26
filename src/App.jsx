import React from 'react';
import Typewriter from './components/Typewriter';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useLang } from './context/LanguageContext';
import { site } from './data/site';

const App = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen bg-dark text-light font-mono selection:bg-primary selection:text-dark">
      <nav className="fixed w-full top-0 p-4 md:p-6 flex justify-between items-center bg-dark/90 backdrop-blur-sm z-50 border-b border-white/5">
        <a href="#" className="text-primary text-xl font-bold tracking-tighter">
          MContreras<span className="text-white">.dev</span>
        </a>

        {/* Toggle ES/EN */}
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label={t.langToggle.label}
        >
          <button
            onClick={() => setLang('es')}
            aria-label="Español"
            aria-pressed={lang === 'es'}
            className={`font-mono text-sm px-3 py-1.5 rounded transition-colors ${lang === 'es' ? 'text-emerald-500 bg-emerald-500/10' : 'text-neutral-400 hover:text-emerald-500'}`}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            aria-label="English"
            aria-pressed={lang === 'en'}
            className={`font-mono text-sm px-3 py-1.5 rounded transition-colors ${lang === 'en' ? 'text-emerald-500 bg-emerald-500/10' : 'text-neutral-400 hover:text-emerald-500'}`}
          >
            EN
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <section className="h-screen flex flex-col justify-center">
          <div className="space-y-2">
            <p className="text-primary mb-5 opacity-80">
              <Typewriter text={t.hero.prompt} speed={40} />
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-light mb-4 tracking-tighter">
              <Typewriter text={t.hero.name} speed={70} delay={1500} />
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate leading-tight">
              <Typewriter text={t.hero.tagline} speed={50} delay={3000} />
            </h2>
          </div>

          <div className="mt-8 max-w-2xl min-h-[100px]">
            <p className="text-slate text-lg leading-relaxed border-l-2 border-primary/20 pl-6 py-2">
              <Typewriter text={t.hero.description} speed={30} delay={5500} />
              <span className="animate-pulse inline-block w-2 h-5 bg-primary ml-1 align-middle"></span>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects" className="group border-2 border-primary text-primary px-10 py-4 rounded hover:bg-primary/10 transition-all inline-flex items-center gap-2">
              {t.hero.cta}
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </section>

        {/* Navegación anclas (desktop) */}
        <div className="hidden md:flex justify-center gap-10 text-[10px] uppercase tracking-[0.2em] font-medium mb-8">
          <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a>
          <a href="#experience" className="hover:text-primary transition-colors">{t.experience.label}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
        </div>

        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 text-center text-[12px] text-slate/50 font-mono tracking-widest">
        <p>{t.footer.code}</p>
        <div className="mt-3 flex justify-center gap-6 text-[12px]">
          <a href={site.company} target="_blank" rel="noreferrer" className="text-primary/70 hover:text-primary transition-colors">NexuraIA</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
