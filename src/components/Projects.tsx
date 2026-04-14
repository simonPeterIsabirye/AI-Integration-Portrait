import { motion } from 'motion/react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Neural Nexus',
    category: 'AI / MACHINE LEARNING',
    description: 'A distributed neural network architecture for real-time predictive analysis in high-frequency trading environments.',
    image: 'https://picsum.photos/seed/project1/1200/800',
    tech: ['PyTorch', 'CUDA', 'Go', 'Redis'],
    link: '#',
    github: '#'
  },
  {
    title: 'Aether OS',
    category: 'SYSTEM DESIGN',
    description: 'A futuristic web-based operating system interface built with custom WebGL kernels and low-latency state management.',
    image: 'https://picsum.photos/seed/project2/1200/800',
    tech: ['React', 'Three.js', 'WebAssembly', 'Rust'],
    link: '#',
    github: '#'
  },
  {
    title: 'Quantum Ledger',
    category: 'BLOCKCHAIN / WEB3',
    description: 'Next-generation decentralized finance protocol featuring zero-knowledge proofs and automated liquidity optimization.',
    image: 'https://picsum.photos/seed/project3/1200/800',
    tech: ['Solidity', 'Next.js', 'Ethers.js', 'Hardhat'],
    link: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-soft-cyan font-mono text-xs uppercase tracking-[0.4em]">
              03 // Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Featured <span className="text-white/40">Artifacts</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/50 font-light">
            A selection of high-impact projects where engineering meets cinematic 
            execution. Each artifact represents a milestone in technical mastery.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Image Panel */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="relative aspect-video rounded-[12px] overflow-hidden border border-glass-border shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,207,255,0.1)_50%,transparent_60%)] pointer-events-none" />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 glass p-8 rounded-[12px] space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-electric-blue uppercase tracking-[0.1em]">System // {idx + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-[14px] text-text-secondary leading-[1.5]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-[4px] bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <Button variant="link" className="p-0 h-auto text-electric-blue hover:text-white transition-colors flex items-center gap-2 group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <Button variant="outline" className="h-14 px-10 rounded-full border-white/10 hover:bg-white/5 font-medium tracking-wide">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
