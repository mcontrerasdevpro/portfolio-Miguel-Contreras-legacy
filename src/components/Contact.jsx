import React, { useState } from 'react';

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [status, setStatus] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, mensaje }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setNombre('');
                setEmail('');
                setMensaje('');
            } else {
                setStatus(`Error: ${data.error || 'Something went wrong'}`);
            }
        } catch (error) {
            setStatus('Connection error. Please try again.');
        }
    };

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

            <div className="flex flex-col items-center max-w-lg mx-auto w-full px-4">
                <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8 text-left">
                    <div>
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded p-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded p-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Your Message"
                            rows="5"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded p-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="group relative w-full inline-flex items-center justify-center border-2 border-primary text-primary px-12 py-4 rounded font-mono text-lg hover:bg-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        <span className="relative z-10">{status || 'Say Hello'}</span>
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </form>
             
                <div className="flex justify-center items-center gap-12 mt-4">
                    <a href="https://www.linkedin.com/in/miguel-c-98101566" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform duration-300">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" className="h-8 w-8" />
                    </a>
                    <a href="https://discord.com/users/1025451490745258095" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform duration-300">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Discord" className="h-8 w-8" />
                    </a>
                    <a href="https://x.com/MiguelinC77" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform duration-300">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" className="h-8 w-8" />
                    </a>
                    <a href="https://www.instagram.com/elsurvi77" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform duration-300">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" className="h-8 w-8" />
                    </a>
                    <a href="https://www.youtube.com/@elsurvi" target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform duration-300">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="YouTube" className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;