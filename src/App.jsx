import React from 'react';
import Typewriter from './components/Typewriter';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-light font-mono selection:bg-primary selection:text-dark">

      {/* NAVBAR */}
      <nav className="fixed w-full top-0 p-6 flex justify-between items-center bg-dark/90 backdrop-blur-sm z-50 border-b border-white/5">
        <div className="text-primary text-xl font-bold tracking-tighter">MC<span className="text-white">.dev</span></div>
        <ul className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors">01. About</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">02. Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">03. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6">

       {/* HERO SECTION CON NARRATIVA DINÁMICA */}
        <section className="h-screen flex flex-col justify-center">
          <div className="space-y-2">
            <p className="text-primary mb-5 opacity-80">
              <Typewriter text="> init portfolio --user 'MiguelContreras'" speed={40} />
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-light mb-4 tracking-tighter">
              <Typewriter text="Miguel Contreras." speed={70} delay={1500} />
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate leading-tight">
              <Typewriter text="20 years of strategy + Full Stack Code." speed={50} delay={3000} />
            </h2>
          </div>

          {/* LA BIO DE IMPACTO EN INGLÉS CON TYPEWRITER */}
          <div className="mt-8 max-w-2xl min-h-[100px]"> {/* min-h evita saltos de layout al escribir */}
            <p className="text-slate text-lg leading-relaxed border-l-2 border-primary/20 pl-6 py-2">
              <Typewriter 
                text="Operations Leader turned Full Stack Developer. Specialized in building robust applications with React and Python, bringing a business perspective that code alone cannot provide." 
                speed={30} 
                delay={5500} 
              />
              <span className="animate-pulse inline-block w-2 h-5 bg-primary ml-1 align-middle"></span>
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects" className="group border-2 border-primary text-primary px-10 py-4 rounded hover:bg-primary/10 transition-all inline-flex items-center gap-2">
              Explore my work
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </section>

        <About />

        <Projects />

        <Contact />

      </main>

      <footer className="py-12 text-center text-[10px] text-slate/50 font-mono tracking-widest">
        <p>CODED BY MIGUEL CONTRERAS • 2026</p>
      </footer>
    </div>
  );
};

export default App;