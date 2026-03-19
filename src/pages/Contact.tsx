import { Mail, Github, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Victor Oliveira</title>
        <meta name="description" content="Entre em contato com Victor Oliveira, desenvolvedor full stack." />
        <link rel="canonical" href="https://victoroliveira.tech/contato"/>
      </Helmet>
      <section
      id="contact"
      className="min-h-[calc(100vh-6rem)] py-12 px-4 bg-gray-50 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Entre em Contato
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-lg text-gray-700 mb-6">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
          vontade para entrar em contato!
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
  </>
  );
};

export default Contact;
