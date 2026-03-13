import { Lightbulb } from "lucide-react";
import { personalData } from "../data/portfolioData";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre | Victor Oliveira</title>
        <meta name="description" content="Saiba mais sobre a experiência de Victor Oliveira como desenvolvedor full stack." />
      </Helmet>
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
    </>
  );
};

export default About;
