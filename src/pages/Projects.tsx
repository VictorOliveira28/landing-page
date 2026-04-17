import React from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
      <section
        id="projects"
        className="min-h-[calc(100vh-10rem)] py-12 px-4 max-w-6xl mx-auto mt-8 cyber-box rounded-none"
      >
        <div className="text-cyan-vibrant opacity-80 text-sm tracking-widest mb-6 border-b border-cyan-vibrant/30 pb-1 uppercase inline-block">
          {'>'} EXEC ~/projects --all
        </div>
        <h2 className="text-4xl font-bold cyber-glitch-text mb-10">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0a0a]/50 flex flex-col border border-cyan-vibrant/30 overflow-hidden transform transition-all duration-300 hover:border-cyan-vibrant hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] h-full group relative"
            >
              <div className="absolute top-0 right-0 p-2 text-cyan-vibrant/40 font-mono text-xs opacity-50 z-20 group-hover:opacity-100">
                [ ID: 0x0{project.id} ]
              </div>
              <div className="relative overflow-hidden border-b border-cyan-vibrant/30">
                <div className="absolute inset-0 bg-cyan-vibrant/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <img              
                  src={project.image}
                  alt={`Imagem do projeto: ${project.title}`}              
                  className="w-full h-48 object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/0a0a0a/00d4ff?text=SYS_ERROR";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <h3 className="text-xl font-bold text-cyan-vibrant mb-2 uppercase cyber-glitch-text">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] mb-6 text-sm flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 w-full mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-2 border border-cyan-vibrant text-cyan-vibrant px-4 py-2 hover:bg-cyan-vibrant hover:text-[#000] font-bold uppercase transition duration-300 text-xs tracking-wider justify-center"
                  >
                    {project.link.includes('github') ? <Github size={16} /> : <ExternalLink size={16} />}
                    INICIALIZAR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
