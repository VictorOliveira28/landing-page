import { HelmetProvider } from 'react-helmet-async';
import AnalyticsTracker from "./components/AnalyticsTracker";
import ParticlesBackground from "./components/ParticlesBackground";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <AnalyticsTracker />
      <div className="min-h-screen font-sans antialiased text-[#e5e5e5] hex-grid-bg relative z-0">
        <div className="scanlines"></div>
        <ParticlesBackground />
        <Header />
        <main className="container mx-auto p-4 md:p-6 relative z-10 w-full flex flex-col gap-12 sm:gap-24 overflow-hidden">          
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;