import "../index.css";

const Header = () => {
  return (
    <header className="bg-[#0a0a0a]/80 backdrop-blur-md border-b border-cyan-vibrant/30 p-3 sm:p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex flex-col items-center gap-3">
        <div className="text-lg md:text-xl font-bold text-cyan-vibrant cyber-glitch-text transition-all duration-300 hover:tracking-widest self-center md:self-start w-full text-center md:text-left">
          <a href="#home">// victor.dev</a>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base text-[#a0a0a0] w-full max-w-full">
          <li>
            <a
              href="#home"
              className="transition-all duration-300 hover:text-cyan-vibrant"
            >
              cd /home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-all duration-300 hover:text-cyan-vibrant"
            >
              cd /sobre
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-all duration-300 hover:text-cyan-vibrant"
            >
              cd /habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all duration-300 hover:text-cyan-vibrant"
            >
              cd /projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all duration-300 hover:text-cyan-vibrant"
            >
              cd /contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
