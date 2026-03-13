import React from "react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-6rem)] py-12 px-4 bg-gray-50 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Meus Projetos
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white flex flex-col rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;                
              }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
