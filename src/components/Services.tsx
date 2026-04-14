import { motion } from 'motion/react';
import { Brain, Globe, Layers, Zap } from 'lucide-react';

const services = [
  {
    title: 'AI Integration',
    description: 'Custom LLM implementations, autonomous agents, and predictive modeling for modern enterprises.',
    icon: Brain,
    color: 'text-electric-blue'
  },
  {
    title: 'Immersive Web',
    description: 'High-end interactive experiences using WebGL, Three.js, and advanced motion choreography.',
    icon: Globe,
    color: 'text-soft-cyan'
  },
  {
    title: 'Full-Stack Systems',
    description: 'Scalable, secure, and performant cloud architectures built with modern tech stacks.',
    icon: Layers,
    color: 'text-neon-purple'
  },
  {
    title: 'Performance Ops',
    description: 'Optimization of critical systems for maximum speed, reliability, and cost-efficiency.',
    icon: Zap,
    color: 'text-white'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background/30 border-y border-white/5">
      <div className="container px-6">
        <div className="mb-20 space-y-4 text-center">
          <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">
            05 // Services
          </span>
          <h2 className="text-[42px] md:text-[62px] font-bold tracking-tight uppercase">
            What I <span className="text-white/40">Build</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-10 rounded-[12px] group hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-16 h-16 rounded-[8px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-electric-blue transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary font-light leading-[1.5]">
                    {service.description}
                  </p>
                  
                  <div className="pt-4">
                    <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-electric-blue to-transparent transition-all duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
