import { personalData } from "../data/portfolioData";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-8 rounded-t-lg">
      <p>
        &copy; {new Date().getFullYear()} {personalData.name}. Todos os
        direitos reservados.
      </p>
      <p className="text-sm mt-2">Feito com ReactJS</p>
    </footer>
  );
};

export default Footer;
