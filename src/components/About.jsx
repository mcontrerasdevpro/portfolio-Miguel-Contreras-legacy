import React, { useState } from 'react';
import miFoto from '../assets/Perfil.jpg';

const About = () => {
    const [isPhotoActive, setIsPhotoActive] = useState(false);

    return (
        <section id="about" className="py-24 border-t border-slate/10 max-w-5xl mx-auto px-4">
            {/* Título optimizado con línea elegante de fondo */}
            <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
                <span className="text-primary font-mono text-xl mr-4">01.</span> About Me
                <div className="h-[1px] bg-slate-700 flex-grow ml-6 opacity-20 hidden sm:block"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* Texto descriptivo con tipografía y espaciado más profesional */}
                <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
                    <p>
                        Hello! I'm Miguel. My professional journey spans over <span className="text-primary font-medium">20 years in operations management and business strategy</span>. This background has given me a unique perspective on how technology can truly transform real-world businesses.
                    </p>
                    <p>
                        My transition into software development wasn't just a career change, but a natural evolution. As a <span className="text-primary font-bold">Full Stack Developer</span>, I aim to merge that analytical maturity with the technical power to build digital products that deliver real value.
                    </p>
                    <p>
                        I am passionate about solving complex problems through <span className="text-white font-medium">clean architecture</span> and scalable solutions. I work under <span className="text-primary font-bold">Agile methodologies</span> to ensure continuous delivery and adaptability, always keeping the focus on user experience and business objectives.
                    </p>
                </div>

                {/* Tu contenedor original de la foto con su animación intacta */}
                <div className="relative group mx-auto md:mx-0 w-64 h-64 select-none">
                    <div
                        onClick={() => {
                            console.log("Cambiando imagen...");
                            setIsPhotoActive(!isPhotoActive);
                        }}
                        className="relative z-10 border-2 border-primary/40 p-4 rounded-lg bg-slate-900 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:border-primary animate-[bounce_3s_infinite_alternate] cursor-pointer w-full h-full shadow-xl shadow-black/40"
                    >
                        <div className="relative w-full h-full aspect-square border border-primary/20 rounded bg-[#112240] overflow-hidden">

                            {/* Lado A: Cohete con pulso de luz */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 space-y-4 transition-opacity duration-500 z-20 ${isPhotoActive ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                                <span className="text-6xl filter drop-shadow-[0_0_15px_rgba(100,255,218,0.5)]">🚀</span>
                                <p className="text-[10px] font-mono text-primary uppercase tracking-widest text-center font-bold">
                                    Management + Code
                                </p>
                            </div>

                            {/* Lado B: Foto real */}
                            <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${isPhotoActive ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <img
                                    src={miFoto}
                                    alt="Miguel Contreras"
                                    className="w-full h-full object-cover grayscale contrast-110 brightness-90 hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-primary/95 text-slate-900 text-[9px] font-bold text-center py-1.5 font-mono tracking-wider uppercase">
                                    CLICK TO RESET
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Sombra de fondo decorativa */}
                    <div className="absolute top-5 left-5 w-full h-full border-2 border-primary/20 rounded-lg -z-0 transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>
                    
                    {/* Texto informativo inferior */}
                    <div className="absolute -bottom-10 left-0 right-0 text-center transition-all duration-300">
                        <span className="text-[10px] font-mono text-primary/80 animate-pulse italic block">
                            {!isPhotoActive ? (
                                '// Click to reveal identity photo'
                            ) : (
                                '< Show Technical Profile />'
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;