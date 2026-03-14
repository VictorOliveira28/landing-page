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
  bio: "Especialista em desenvolvimento de software full stack, com experiência sólida na criação de soluções backend e frontend robustas e escaláveis. Minha expertise abrange o desenvolvimento backend com Java, Spring Boot e APIs REST, além do frontend com ReactJS. Possuo vivência em mensageria e em arquitetura de microserviços, utilizando ferramentas de infraestrutura como Docker e bancos de dados para entregar produtos de alta performance e seguros.",
  characteristics: [
    "Focado em soluções eficientes e seguras",
    "Experiência em arquiteturas de microserviços",
    "Experiência em ecossistema Java/Spring",
    "Proficiente em desenvolvimento Front-end (React/NextJS)",
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
    title: "Site Institucional Prezensa",
    description: "Este projeto consistiu na criação da plataforma institucional da Prezensa, com o objetivo de solidificar sua presença digital. Desenvolvido do zero ao deploy, o site prioriza uma navegação fluida e uma interface moderna, entregando uma experiência de usuário consistente e otimizada para os objetivos de negócio da empresa.",
    link: "https://prezensa.com/",
    image: "../assets/prezensa.webp",
  },
  {
    id: 2,
    title: "Gerador de QRCode",
    description:
      "Um gerador de QR Code simples e eficiente, desenvolvido com Java 17, Spring Boot e Docker. Permite gerar códigos QR a partir de um texto, salvar no banco de dados e fazer download da imagem gerada.",
    link: "https://github.com/VictorOliveira28/qrcode-generate",
    image: "../assets/gerador_qrcode.webp",
  },
  {
    id: 3,
    title: "Catálogo de Produtos",
    description:
      "Este projeto possui o objetivo principal criar uma plataforma de catálogo eficiente e flexível, utilizando a robustez do Spring Boot. Quero oferecer uma solução que facilite a organização e gerenciamento de informações relacionadas a produtos de uma determinada empresa, proporcionando uma experiência fluida e amigável.",
    link: "https://github.com/VictorOliveira28/project-catalogo",
    image: "../assets/catalogo_produtos.webp",
  },
  {
    id: 4,
    title: "E-Commerce (back-end)",
    description:
      "O DSCommerce é uma solução de e-commerce completa, construída com uma arquitetura moderna e escalável, focada em performance e robustez.",
    link: "https://github.com/VictorOliveira28/dscommerce",
    image: "../assets/ecommerce.webp",
  },
  {
    id: 5,
    title: "Orientação a Objetos",
    description:
      "é um recurso didático focado nos quatro pilares fundamentais da Programação Orientada a Objetos (POO): Encapsulamento, Herança, Polimorfismo e Abstração.",
    link: "https://github.com/VictorOliveira28/Orientacao-a-objetos",
    image: "../assets/orientacao_objetos.webp",
  },
];
