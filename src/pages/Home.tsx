import React from "react";
import { Github, Linkedin, MessageSquare, Download } from "lucide-react";
import { personalData } from "../data/portfolioData";
import perfilImg from "/assets/victor.webp";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Victor Oliveira | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio de Victor Oliveira, desenvolvedor especializado em Java, Spring Boot, ReactJS e arquitetura de microserviços." />
        <link rel="canonical" href="https://victoroliveira.tech/"/>
      </Helmet>
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-10rem)] px-4 sm:px-6 py-8 cyber-box rounded-none mt-4 sm:mt-8 max-w-6xl mx-auto w-full overflow-hidden"
      >
        <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 items-start text-left z-10 w-full mb-10 lg:mb-0 lg:pr-10">
          <div className="text-cyan-vibrant opacity-80 text-xs sm:text-sm tracking-widest mb-1 sm:mb-2 border-b border-cyan-vibrant/30 pb-1">
            {'>'} STATUS: ONLINE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cyber-glitch-text leading-tight md:leading-tight break-words max-w-full">
            Olá, <br className="hidden md:block"/>
            <span className="text-[#a0a0a0] text-xl sm:text-2xl md:text-3xl font-normal opacity-80 tracking-normal">me chamo</span> {personalData.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-cyan-vibrant/80 font-mono tracking-tighter">
             {'>'} {personalData.role}
          </p>
          <p className="text-sm md:text-base text-[#a0a0a0] max-w-lg leading-relaxed mt-4 border-l-2 border-cyan-vibrant/40 pl-4 py-2 bg-cyan-vibrant/5">
            A interface entre lógica complexa e resultados tangíveis. Desenvolvedor apaixonado por construir soluções eficientes, interfaces focadas e arquiteturas resilientes.
          </p>      

          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 mt-8 w-full">
            <a
              href="https://wa.me/5521993402121?text=Ol%C3%A1%2C+visitei+seu+site+e+gostaria+de+falar+sobre+um+projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button w-full sm:w-auto"
            >
              <MessageSquare size={20} />
              INICIAR CONEXÃO SEGURA
            </a>
            
            <div className="flex gap-3 sm:gap-4 w-full justify-center  sm:justify-start flex-wrap mt-4 sm:mt-0">
              <a
                href="https://github.com/victorOliveira28/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 border items-center justify-center border-cyan-vibrant/40 text-cyan-vibrant hover:bg-cyan-vibrant/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/victoroliveira28/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 border border-cyan-vibrant/40 text-cyan-vibrant hover:bg-cyan-vibrant/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="/curriculo.pdf"
                download="Victor_Oliveira_CV.pdf"
                className="flex items-center justify-center p-3 border border-cyan-vibrant/40 text-cyan-vibrant hover:bg-cyan-vibrant/20 transition-all duration-300"
                aria-label="Baixar Currículo"
                title="Download Resumo"
              >
                <Download size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center relative w-full h-full pointer-events-none mt-10 md:mt-12 lg:mt-0 p-4 sm:p-8">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 border border-cyan-vibrant/40 p-2 sm:p-4 transform rotate-45 cyber-box bg-[#0a0a0a]/80 shadow-[0_0_30px_rgba(0,212,255,0.15)] group-hover:rotate-0 transition-all duration-1000 ease-in-out">
              <div className="w-full h-full transform -rotate-45 relative flex items-center justify-center overflow-hidden cyber-box p-0 pointer-events-auto shadow-none group-hover:rotate-0 transition-all duration-1000 ease-in-out cursor-crosshair">
                <img
                  fetchPriority="high"
                  src={perfilImg || "https://placehold.co/256x256/0a0a0a/00d4ff?text=v.dev"}
                  alt={`Foto de Perfil de ${personalData.name}`}
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 scale-125 hover:scale-110"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/256x256/0a0a0a/00d4ff?text=INIT";
                  }}
                />
              </div>
            </div>
            
            <div className="absolute top-0 right-2 lg:right-10 text-cyan-vibrant opacity-30 text-[10px] font-mono leading-tight rotate-90 origin-right hidden md:block">SYS_ACTIVE_0X00FF2A</div>
            <div className="absolute bottom-2 lg:bottom-6 left-2 lg:left-12 text-cyan-vibrant opacity-20 text-[10px] font-mono tracking-[0.3em] hidden sm:block">[NET_FRAME_SYNC]</div>
        </div>
      </section>
    </>
  );
};

export default Home;
