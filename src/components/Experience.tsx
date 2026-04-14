import { motion } from 'motion/react';

const experiences = [
  {
    year: '2024 - PRESENT',
    role: 'Senior AI Engineer',
    company: 'Neural Dynamics',
    description: 'Leading the development of autonomous agent frameworks and large-scale RAG systems for enterprise clients.'
  },
  {
    year: '2022 - 2024',
    role: 'Full Stack Developer',
    company: 'Aether Labs',
    description: 'Architected high-performance web applications using Next.js and Go, focusing on real-time data visualization.'
  },
  {
    year: '2020 - 2022',
    role: 'Software Engineer',
    company: 'CyberCore Systems',
    description: 'Developed core infrastructure for secure distributed systems and blockchain-based identity protocols.'
  },
  {
    year: '2018 - 2020',
    role: 'Junior Developer',
    company: 'Innova Tech',
    description: 'Built responsive user interfaces and integrated RESTful APIs for various client-facing products.'
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="mb-20 space-y-4">
          <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">
            04 // Journey
          </span>
          <h2 className="text-[42px] md:text-[62px] font-bold tracking-tight uppercase">
            Professional <span className="text-white/40">Continuum</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/50 via-neon-purple/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-background border-2 border-electric-blue -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(0,207,255,0.5)] hidden md:block" />

                <div className="w-full md:w-1/2 space-y-4 text-left md:text-right">
                  <div className={`space-y-1 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-[10px] font-mono text-electric-blue tracking-widest">{exp.year}</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-soft-cyan font-medium">{exp.company}</p>
                  </div>
                  <p className={`text-[14px] text-text-secondary font-light leading-[1.5] max-w-md ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    {exp.description}
                  </p>
                </div>
                
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 blur-[120px] -z-10" />
    </section>
  );
}
