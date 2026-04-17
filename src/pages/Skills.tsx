import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
      <section
        id="skills"
        className="min-h-[calc(100vh-10rem)] py-12 px-4 max-w-5xl mx-auto mt-8 cyber-box rounded-none"
      >
        <div className="text-cyan-vibrant opacity-80 text-sm tracking-widest mb-6 border-b border-cyan-vibrant/30 pb-1 uppercase inline-block">
          {'>'} EXEC ~/skills --list
        </div>
        <h2 className="text-4xl font-bold cyber-glitch-text mb-10">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#0a0a0a]/50 border border-cyan-vibrant/20 hover:border-cyan-vibrant shadow-[inset_0_0_10px_rgba(0,212,255,0.05)] hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-vibrant/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none"></div>
              <div className="mb-4 text-4xl text-cyan-vibrant/70 group-hover:text-cyan-vibrant drop-shadow-[0_0_5px_rgba(0,212,255,0.5)] transition-all duration-300">{skill.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-[#e5e5e5] uppercase tracking-wider relative z-10 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Skills;
