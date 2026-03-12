import { Link, useLocation } from "react-router-dom";
import { Home, User, Lightbulb, Briefcase, Mail } from "lucide-react";
import "../index.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg">
      <nav className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
          <Link to="/">{"<Victor Oliveira />"}</Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <li>
            <Link
              to="/"
              className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                currentPath === "/"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Home size={18} /> Início
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                currentPath === "/sobre"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <User size={18} /> Sobre Mim
            </Link>
          </li>
          <li>
            <Link
              to="/habilidades"
              className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                currentPath === "/habilidades"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Lightbulb size={18} /> Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="/projetos"
              className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                currentPath === "/projetos"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase size={18} /> Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={`flex items-center gap-1 p-2 rounded-md transition duration-300 ${
                currentPath === "/contato"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Mail size={18} /> Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
