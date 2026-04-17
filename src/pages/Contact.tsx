import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
      <section
        id="contact"
        className="min-h-[calc(100vh-10rem)] py-12 px-2 sm:px-4 max-w-4xl mx-auto mt-8 cyber-box rounded-none flex flex-col justify-center w-full"
      >
        <div className="text-cyan-vibrant opacity-80 text-sm tracking-widest mb-6 border-b border-cyan-vibrant/30 pb-1 uppercase inline-block self-start">
          {'>'} EXEC ./ping --target me
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold cyber-glitch-text mb-10 break-words max-w-full">
          Estabelecer Conexão
        </h2>
        <div className="bg-[#0a0a0a]/50 p-4 sm:p-8 border border-cyan-vibrant/20 relative w-full overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-vibrant/50 to-transparent"></div>
          
          <p className="text-base sm:text-lg text-[#a0a0a0] mb-8 font-mono break-words">
            [SYS_LOG]: Interface aberta para novas oportunidades operacionais. Conecte-se aos meus nós validados:
          </p>
          
          <div className="flex flex-col gap-6 w-full">
            <a
              href="https://wa.me/5521993402121?text=Ol%C3%A1%2C+visitei+seu+site+e+gostaria+de+falar+sobre+um+projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-cyan-vibrant/40 bg-cyan-vibrant/5 hover:bg-cyan-vibrant/10 hover:border-cyan-vibrant text-[#e5e5e5] transition-all duration-300 group min-w-0"
            >
              <MessageSquare size={28} className="text-cyan-vibrant shrink-0 drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]" /> 
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-cyan-vibrant opacity-70 uppercase tracking-widest mb-1 truncate">Via_WhatsApp</div>
                <div className="text-sm sm:text-base font-bold tracking-wider group-hover:text-cyan-vibrant transition-colors truncate">+55 21 99340-2121</div>
              </div>
            </a>
            
            <a
              href="mailto:victor.oliveira20@icloud.com"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-cyan-vibrant/40 bg-cyan-vibrant/5 hover:bg-cyan-vibrant/10 hover:border-cyan-vibrant text-[#e5e5e5] transition-all duration-300 group min-w-0"
            >
              <Mail size={28} className="text-cyan-vibrant shrink-0 drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]" /> 
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-cyan-vibrant opacity-70 uppercase tracking-widest mb-1 truncate">Via_Email</div>
                <div className="text-sm sm:text-base font-bold tracking-wider group-hover:text-cyan-vibrant transition-colors truncate sm:break-words">victor.oliveira20@icloud.com</div>
              </div>
            </a>

            <div className="mt-8 border-t border-cyan-vibrant/20 pt-8 w-full">
              <div className="text-xs sm:text-sm text-cyan-vibrant/70 mb-4 uppercase tracking-widest font-mono">
                {'>'} Available_Network_Ports:
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 w-full">
                <a
                  href="https://github.com/victorOliveira28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 p-3 border border-cyan-vibrant text-cyan-vibrant hover:bg-cyan-vibrant hover:text-[#000] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 font-bold uppercase text-xs sm:text-sm"
                  aria-label="GitHub"
                >
                  <Github size={20} /> NODE_GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/victoroliveira28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 p-3 border border-cyan-vibrant text-cyan-vibrant hover:bg-cyan-vibrant hover:text-[#000] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 font-bold uppercase text-xs sm:text-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} /> NODE_LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
