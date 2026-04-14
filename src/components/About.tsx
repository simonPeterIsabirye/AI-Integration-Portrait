import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.from('.about-title', { opacity: 0, y: 100, duration: 1 })
        .from('.about-text', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
        .from('.about-image', { opacity: 0, scale: 0.8, rotate: -5, duration: 1.5 }, '-=1')
        .to('.about-image', { y: -50, duration: 2 }, '+=0.5')
        .to('.about-text', { y: -100, duration: 2 }, '-=2');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div ref={triggerRef} className="h-screen w-full flex items-center justify-center bg-background">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="about-image relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/portrait/800/1000" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl">
                <p className="text-sm font-mono text-electric-blue mb-1">IDENTITY_HASH</p>
                <p className="text-xs text-white/40">0x8A5CFF...00CFFF</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-blue/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/10 blur-[80px] rounded-full" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="about-title inline-block text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">
                01 // Identity
              </span>
              <h2 className="about-title text-[42px] md:text-[62px] font-bold tracking-tight leading-[0.9] uppercase">
                Beyond the <br />
                <span className="text-white/40">Digital Horizon</span>
              </h2>
            </div>
            
            <div className="about-text space-y-6 text-[18px] text-text-secondary font-light leading-[1.6]">
              <p>
                I am a Software Engineer and AI Researcher dedicated to building 
                autonomous systems that bridge the gap between human intuition and 
                machine precision.
              </p>
              <p>
                My work focuses on creating immersive, data-driven experiences that 
                don't just function—they tell a story. From large-scale neural 
                architectures to pixel-perfect interactive interfaces, I treat code 
                as a cinematic medium.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-1">
                  <p className="text-white font-medium">AI Systems</p>
                  <p className="text-sm text-white/40">Neural Nets & LLMs</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium">Full Stack</p>
                  <p className="text-sm text-white/40">Scalable Architecture</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium">Product Design</p>
                  <p className="text-sm text-white/40">UX & Motion Design</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium">Data Science</p>
                  <p className="text-sm text-white/40">Predictive Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
