import {
  Code,
  LayoutGrid,
  Database,
  Rabbit,
  HardDrive,
  Shield,
  Lightbulb,
  Cloud,
} from "lucide-react";

export const personalData = {
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

export const skills = [
  { name: "Java & Spring Boot", icon: <Code className="text-blue-500" /> },
  { name: "ReactJS & NextJS", icon: <LayoutGrid className="text-indigo-500" /> },
  { name: "PostgreSQL", icon: <Database className="text-green-500" /> },
  { name: "RabbitMQ", icon: <Rabbit className="text-orange-500" /> },
  { name: "Docker & Kubernetes", icon: <HardDrive className="text-cyan-500" /> },
  { name: "OAuth2 & Spring Security", icon: <Shield className="text-purple-500" /> },
  { name: "N8N (Workflows)", icon: <Lightbulb className="text-yellow-500" /> },
  { name: "Serviços em Nuvem", icon: <Cloud className="text-gray-500" /> },
];

export const projects = [
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
