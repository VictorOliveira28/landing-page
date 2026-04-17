import { Terminal, FileText } from "lucide-react";
import { personalData } from "../data/portfolioData";

const About = () => {
  return (
      <section
        id="about"
        className="min-h-[calc(100vh-10rem)] py-12 px-4 max-w-4xl mx-auto mt-8 cyber-box rounded-none"
      >
        <div className="text-cyan-vibrant opacity-80 text-sm tracking-widest mb-6 border-b border-cyan-vibrant/30 pb-1 uppercase inline-block">
          {'>'} EXEC ~/whoami
        </div>
        <h2 className="text-4xl font-bold cyber-glitch-text mb-8">
          Sobre Mim
        </h2>
        <div className="bg-[#0a0a0a]/50 p-6 border border-cyan-vibrant/20 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-cyan-vibrant/50"></div>
          <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
            {personalData.bio}
          </p>
          <div className="text-cyan-vibrant opacity-80 text-sm tracking-widest mb-4 uppercase mt-8 border-b border-cyan-vibrant/10 pb-1 inline-block">
            {'>'} SYS.SPECS
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalData.characteristics.map((char, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-3 bg-cyan-vibrant/5 border border-cyan-vibrant/20 transition-all hover:bg-cyan-vibrant/10 hover:border-cyan-vibrant/50 group"
              >
                <Terminal size={18} className="text-cyan-vibrant/60 group-hover:text-cyan-vibrant" />
                <span className="text-[#e5e5e5]">{char}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-start border-t border-cyan-vibrant/20 pt-8">
            <a
              href="/curriculo.pdf"
              download="Victor_Oliveira_CV.pdf"
              className="neon-button"
            >
              <FileText size={20} />
              DOWNLOAD MANUAL DE OPERAÇÕES
            </a>
          </div>
        </div>
      </section>
  );
};

export default About;
