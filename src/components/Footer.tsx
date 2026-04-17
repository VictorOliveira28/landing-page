import { personalData } from "../data/portfolioData";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]/80 backdrop-blur-md border-t border-cyan-vibrant/30 p-6 text-center mt-8 text-[#a0a0a0] text-sm relative z-50">
      <p>
        <span className="text-cyan-vibrant text-xs opacity-70">SYS.OUT: </span> COPYRIGHT [{new Date().getFullYear()}] {personalData.name}
      </p>
      <p className="mt-2 text-xs opacity-60">LOCATION: 'Japeri - RJ'</p>
    </footer>
  );
};

export default Footer;
