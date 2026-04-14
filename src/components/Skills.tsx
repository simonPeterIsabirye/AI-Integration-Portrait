import { motion } from 'motion/react';
import { Code2, Cpu, Database, Layout, Sparkles, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Three.js'],
    color: 'text-electric-blue',
    bg: 'bg-electric-blue/5'
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'GraphQL'],
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/5'
  },
  {
    title: 'AI / ML',
    icon: Cpu,
    skills: ['PyTorch', 'TensorFlow', 'OpenAI', 'LangChain', 'Computer Vision'],
    color: 'text-soft-cyan',
    bg: 'bg-soft-cyan/5'
  },
  {
    title: 'Data / Tools',
    icon: Database,
    skills: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Git', 'Figma'],
    color: 'text-white',
    bg: 'bg-white/5'
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="mb-20 text-center space-y-4">
          <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">
            02 // Capabilities
          </span>
          <h2 className="text-[42px] md:text-[62px] font-bold tracking-tight uppercase">
            Forged in <span className="text-white/40">Innovation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass p-8 rounded-[12px] group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${category.bg} blur-[60px] -mr-16 -mt-16 group-hover:opacity-100 opacity-50 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-[8px] ${category.bg} flex items-center justify-center mb-6 border border-white/5`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
                  {category.title}
                  <Sparkles className="w-3 h-3 text-white/20" />
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-[14px] text-text-secondary group-hover:text-foreground/80 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-electric-blue/40" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-electric-blue/20 to-transparent -z-10" />
      <div className="absolute top-1/2 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent -z-10" />
    </section>
  );
}
