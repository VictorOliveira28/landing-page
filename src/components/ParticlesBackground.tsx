import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    // console.log("Particles loaded");
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.8, color: "#00d4ff" } },
          },
        },
        particles: {
          color: { value: "#00d4ff" },
          links: { color: "#00d4ff", distance: 150, enable: true, opacity: 0.15, width: 1 },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.8, straight: false },
          number: { density: { enable: true, width: 800, height: 800 }, value: 60 },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent"
    />
  );
}
