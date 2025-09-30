import React, { useState } from "react";
import {
  Home,
  User,
  Lightbulb,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  HardDrive,
  Rabbit,
  Shield,
  Cloud,
  LayoutGrid,
} from "lucide-react"; // Importando ícones Lucide React
import perfilImg from "../assets/victor.png";

// Componente principal da aplicação
function App() {
  // Estado para controlar a página atual exibida
  const [currentPage, setCurrentPage] = useState("home");

  // Dados de exemplo para o portfólio (você pode personalizar isso)
  const personalData = {
    name: "Victor Oliveira",
    role: "Desenvolvedor de Software",
    bio: "Com experiência no desenvolvimento de soluções robustas e escaláveis, sou um desenvolvedor apaixonado por transformar ideias complexas em realidade através da tecnologia. Minha expertise abrange desde o backend com Java e Spring Boot até o frontend com ReactJS, passando por bancos de dados, mensageria e infraestrutura. Gosto de atuar buscando sempre as melhores práticas e soluções seguras e eficientes.",
    characteristics: [
      "Focado em soluções eficientes e seguras",
      "Experiência em arquiteturas de microserviços",
      "Experiência em ecossistema Java/Spring",
      "Proficiente em desenvolvimento Front-end (React/Angular)",
      "Experiência com DevOps (Docker, Kubernetes)",
      "Apaixonado por otimização e performance",
    ],
  };

  const skills = [
    { name: "Java & Spring Boot", icon: <Code className="text-blue-500" /> },
    {
      name: "ReactJS & Angular",
      icon: <LayoutGrid className="text-indigo-500" />,
    },
    { name: "PostgreSQL", icon: <Database className="text-green-500" /> },
    { name: "RabbitMQ", icon: <Rabbit className="text-orange-500" /> },
    {
      name: "Docker & Kubernetes",
      icon: <HardDrive className="text-cyan-500" />,
    },
    {
      name: "OAuth2 & Spring Security",
      icon: <Shield className="text-purple-500" />,
    },
    {
      name: "N8N (Workflows)",
      icon: <Lightbulb className="text-yellow-500" />,
    },
    { name: "Serviços em Nuvem", icon: <Cloud className="text-gray-500" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Gerador de QRCode",
      description:
        "Um gerador de QR Code simples e eficiente, desenvolvido com Java 17, Spring Boot e Docker. Permite gerar códigos QR a partir de um texto, salvar no banco de dados e fazer download da imagem gerada.",
      link: "https://github.com/VictorOliveira28/qrcode-generate",
      image: "https://placehold.co/400x250/F0F0F0/2C2C2C?text=Projeto+1",
    },
    {
      id: 2,
      title: "Catalogo de Produtos",
      description:
        "Este projeto possui o objetivo principal criar uma plataforma de catálogo eficiente e flexível, utilizando a robustez do Spring Boot. Quero oferecer uma solução que facilite a organização e gerenciamento de informações relacionadas a produtos de uma determinada empresa, proporcionando uma experiência fluida e amigável.",
      link: "https://github.com/VictorOliveira28/project-catalogo",
      image: "https://placehold.co/400x250/F0F0F0/2C2C2C?text=Projeto+2",
    },
    {
      id: 3,
      title: "E-Commerce (back-end)",
      description:
        "O DSCommerce é uma solução de e-commerce completa, construída com uma arquitetura moderna e escalável, focada em performance e robustez.",
      link: "https://github.com/VictorOliveira28/dscommerce",
      image: "https://placehold.co/400x250/F0F0F0/2C2C2C?text=Projeto+3",
    },
    {
      id: 4,
      title: "Orientação a Objetos",
      description:
        "é um recurso didático focado nos quatro pilares fundamentais da Programação Orientada a Objetos (POO): Encapsulamento, Herança, Polimorfismo e Abstração.",
      link: "https://github.com/VictorOliveira28/Orientacao-a-objetos",
      image: "https://placehold.co/400x250/F0F0F0/2C2C2C?text=Projeto+4",
    },
  ];

  // Renderiza o conteúdo da página com base no estado `currentPage`
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <section
            id="home"
            className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center px-4 py-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 mb-6">
              <img
                src={perfilImg}
                alt="Foto de Perfil"
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
              Desenvolvedor apaixonado por construir soluções eficientes e
              impactantes.
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
        );
      case "about":
        return (
          <section
            id="about"
            className="min-h-[calc(100vh-6rem)] py-12 px-4 bg-gray-50 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
              Sobre Mim
            </h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {personalData.bio}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Minhas Características
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {personalData.characteristics.map((char, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-3 bg-blue-50 rounded-md shadow-sm"
                  >
                    <Lightbulb size={20} className="text-blue-600" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      case "skills":
        return (
          <section
            id="skills"
            className="min-h-[calc(100vh-6rem)] py-12 px-4 bg-gray-50 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
              Minhas Habilidades
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-4 text-4xl">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        );
      case "projects":
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
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/400x250/F0F0F0/2C2C2C?text=Projeto";
                    }}
                  />
                  {/* Div interna para o conteúdo do projeto, agora com flexbox para alinhamento */}
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                    {" "}
                    {/* h-[calc(100%-12rem)] para preencher a altura restante após a imagem (que é h-48 ou 12rem) */}
                    <div>
                      {" "}
                      {/* Wrapper para título e descrição */}
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm flex-grow">
                        {project.description}
                      </p>{" "}
                      {/* flex-grow para empurrar o botão para baixo */}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" // self-start para alinhar à esquerda
                    >
                      Ver Projeto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "contact":
        return (
          <section
            id="contact"
            className="min-h-[calc(100vh-6rem)] py-12 px-4 bg-gray-50 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
              Entre em Contato
            </h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-lg text-gray-700 mb-6">
                Estou sempre aberto a novas oportunidades e colaborações.
                Sinta-se à vontade para entrar em contato!
              </p>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="mailto:victor.oliveira20@icloud.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition duration-300 text-lg"
                >
                  <Mail size={24} /> victor.oliveira20@icloud.com
                </a>
                <p className="text-gray-700 text-lg">
                  Ou me encontre nas redes sociais:
                </p>
                <div className="flex gap-4">
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
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-900">
        {/* Cabeçalho de Navegação */}
        <header className="bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg">
          <nav className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
              {"<Victor Oliveira />"}
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                    currentPage === "home"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Home size={18} /> Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("about")}
                  className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                    currentPage === "about"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User size={18} /> Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("skills")}
                  className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                    currentPage === "skills"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Lightbulb size={18} /> Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("projects")}
                  className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                    currentPage === "projects"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Briefcase size={18} /> Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                    currentPage === "contact"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Mail size={18} /> Contato
                </button>
              </li>
            </ul>
          </nav>
        </header>

        {/* Conteúdo Principal */}
        <main className="container mx-auto my-8 p-4">{renderPage()}</main>

        {/* Rodapé */}
        <footer className="bg-gray-800 text-white p-6 text-center mt-8 rounded-t-lg">
          <p>
            &copy; {new Date().getFullYear()} {personalData.name}. Todos os
            direitos reservados.
          </p>
          <p className="text-sm mt-2">Feito ReactJS</p>
        </footer>
      </div>
    </>
  );
}

export default App;
