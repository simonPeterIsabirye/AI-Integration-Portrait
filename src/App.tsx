import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';

import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-electric-blue selection:text-background">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8"
          >
            <div className="relative w-24 h-24">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-electric-blue/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-t-2 border-electric-blue rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-mono text-electric-blue animate-pulse">INIT</span>
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-xs font-mono text-white/40 uppercase tracking-[0.5em]">Aetheria Identity System</p>
              <p className="text-[10px] font-mono text-electric-blue/60">ESTABLISHING_SECURE_CONNECTION...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Layer */}
      <ThreeBackground />
      <div className="fixed inset-0 overlay-grid pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[200px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(138,92,255,0.15)_0%,transparent_70%)] rounded-full pointer-events-none z-0" />

      {/* Content Layers */}
      <div className="relative z-10">
        <header className="flex justify-between items-center px-[60px] py-[40px]">
          <div className="flex items-center gap-[10px] font-extrabold text-[14px] tracking-[0.1em] uppercase">
            <div className="w-[12px] h-[12px] border-2 border-electric-blue rotate-45" />
            Aetheria.Systems
          </div>
          <nav className="flex gap-[32px] text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            <span className="text-electric-blue cursor-pointer">Experience</span>
            <span className="hover:text-white transition-colors cursor-pointer">Expertise</span>
            <span className="hover:text-white transition-colors cursor-pointer">Narrative</span>
            <span className="hover:text-white transition-colors cursor-pointer">Connect</span>
          </nav>
        </header>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />

        <footer className="flex justify-between items-end px-[60px] py-[40px]">
          <div className="flex items-center gap-[40px] font-mono text-[10px] text-text-secondary tracking-[0.1em]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[6px] h-[6px] rounded-full bg-electric-blue shadow-[0_0_8px_var(--color-electric-blue)]" />
              CORE_SYSTEMS: ACTIVE
            </div>
            <div>LOC: 40.7128° N, 74.0060° W</div>
            <div>UPTIME: 99.98%</div>
          </div>
          <div className="flex flex-col items-center gap-[12px]">
            <span className="text-[9px] uppercase tracking-[0.3em]">Scroll to Explore</span>
            <div className="w-[1px] h-[60px] bg-gradient-to-b from-electric-blue to-transparent" />
          </div>
        </footer>
      </div>

      {/* Custom Cursor (Optional but cinematic) */}
      <CustomCursor />
    </main>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block ${
        isHovering ? 'bg-electric-blue' : 'bg-white'
      }`}
    />
  );
}

