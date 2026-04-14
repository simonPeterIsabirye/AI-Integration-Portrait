import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background light motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-electric-blue/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">
              06 // Connection
            </span>
            <h2 className="text-[52px] md:text-[82px] font-bold tracking-tighter leading-[0.9] uppercase">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
                Future Together
              </span>
            </h2>
          </div>
          
          <p className="text-[18px] text-text-secondary font-light leading-[1.6]">
            Currently open to high-impact collaborations, cinematic web projects, 
            and innovative AI research opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
            <Button size="lg" className="h-auto py-[14px] px-[28px] rounded-[4px] bg-electric-blue text-background hover:bg-electric-blue/90 font-semibold text-[12px] uppercase tracking-[0.1em] transition-all shadow-[0_0_20px_rgba(0,207,255,0.3)]">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="h-auto py-[14px] px-[28px] rounded-[4px] border-electric-blue text-electric-blue hover:bg-electric-blue/10 font-semibold text-[12px] uppercase tracking-[0.1em] transition-all">
              Email Me
            </Button>
          </div>

          <div className="pt-20 space-y-8">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Find me on</p>
            <div className="flex items-center justify-center gap-8">
              {[
                { icon: Github, label: 'Github' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Mail, label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="group relative p-4 rounded-full border border-white/5 hover:border-electric-blue/30 transition-colors"
                >
                  <social.icon className="w-6 h-6 text-white/40 group-hover:text-electric-blue transition-colors" />
                  <div className="absolute inset-0 bg-electric-blue/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/5 text-center">
        <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2024 Aetheria Identity System // All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
