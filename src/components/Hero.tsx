import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });

      gsap.to('.hero-overlay', {
        opacity: 0.6,
        duration: 2,
        ease: 'power2.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="https://picsum.photos/seed/hero/1920/1080?blur=10"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-with-neon-lights-40143-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-20" />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-6 text-center hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5 text-electric-blue text-xs font-mono uppercase tracking-[0.2em]">
            Digital Identity System v2.0
          </span>
        </motion.div>
        
        <h1 className="text-[62px] md:text-[82px] font-bold tracking-[-0.04em] mb-6 leading-[0.9] uppercase text-glow">
          Engineering Intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-neon-purple to-soft-cyan">
            Through Code
          </span>
        </h1>
        
        <p className="max-w-[480px] mx-auto text-[18px] text-text-secondary mb-10 font-light leading-[1.6]">
          Architecting the future of AI-driven ecosystems. Specializing in high-performance 
          full-stack systems, machine learning integration, and immersive digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button size="lg" className="h-auto py-[14px] px-[28px] rounded-[4px] bg-electric-blue text-background hover:bg-electric-blue/90 font-semibold text-[12px] uppercase tracking-[0.1em] transition-all shadow-[0_0_20px_rgba(0,207,255,0.3)]">
            View Systems
          </Button>
          <Button size="lg" variant="outline" className="h-auto py-[14px] px-[28px] rounded-[4px] border-electric-blue text-electric-blue hover:bg-electric-blue/10 font-semibold text-[12px] uppercase tracking-[0.1em] transition-all">
            Initiate Contact
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-electric-blue" />
      </motion.div>
    </section>
  );
}
