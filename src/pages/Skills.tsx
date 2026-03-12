import { skills } from "../data/portfolioData";

const Skills = () => {
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
};

export default Skills;
