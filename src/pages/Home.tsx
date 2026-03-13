import React from "react";
import { Github, Linkedin } from "lucide-react";
import { personalData } from "../data/portfolioData";
import perfilImg from "../../assets/victor.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Victor Oliveira | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio de Victor Oliveira, desenvolvedor especializado em Java, Spring Boot, ReactJS e arquitetura de microserviços." />
      </Helmet>
      <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center px-4 py-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg"
    >
      <div className="relative w-32 h-32 mb-6">
        <img
          src={perfilImg || "https://placehold.co/128x128/9CA3AF/FFFFFF?text=Foto"}
          alt={`Foto de Perfil de ${personalData.name}, Desenvolvedor Full Stack`}
          className="rounded-full border-4 border-white shadow-md w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/128x128/9CA3AF/FFFFFF?text=Foto";
          }}
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Olá, me chamo {personalData.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
        {personalData.role}
      </p>
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        Desenvolvedor apaixonado por construir soluções eficientes e impactantes.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/victorOliveira28/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/victoroliveira28/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
      </section>
    </>
  );
};

export default Home;
