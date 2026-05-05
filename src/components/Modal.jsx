import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
      <div className="bg-[#112240] border-2 border-primary p-8 rounded-xl max-w-sm w-full shadow-[0_0_50px_rgba(100,255,218,0.1)]">
        <h3 className="text-xl font-bold text-white mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-slate text-sm mb-8 font-mono">
          {">"} Select access method:
        </p>
        
        <div className="flex flex-col gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            onClick={onClose}
            className="w-full py-3 bg-primary text-dark font-bold rounded text-center hover:bg-primary/80 transition-all font-mono"
          >
            VIEW CODE (GITHUB)
          </a>
          
          {project.link !== "#" && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              onClick={onClose}
              className="w-full py-3 border-2 border-primary text-primary font-bold rounded text-center hover:bg-primary/10 transition-all font-mono"
            >
              VIEW DEPLOY (LIVE)
            </a>
          )}
          
          <button 
            onClick={onClose}
            className="mt-4 text-slate hover:text-white text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            [ Cancel ]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;