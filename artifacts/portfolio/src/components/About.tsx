import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiHackerrank } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const scienceBadges = [
  "Quantum Gravity Explorer",
  "Scientific Programmer",
  "Hackathon Builder",
  "Open Source Contributor"
];

const creativeBadges = [
  "Graphic Designer",
  "Character Designer",
  "Video Editor",
  "Visual Storyteller"
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              01. <span className="text-muted-foreground font-light">About</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Adithyan is a physics undergrad passionate about the deepest questions in the universe — <span className="text-primary glow-text-cyan font-medium">quantum gravity, spacetime, and emergent reality</span> — while also building real-world tools through scientific computing and expressing himself through <span className="text-secondary glow-text-purple font-medium">graphic design and video editing</span>. 
              </p>
              <p className="text-xl font-display text-white">
                A rare blend of theorist, coder, and creator.
              </p>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary/50 bg-primary/5">
                <h3 className="text-sm uppercase tracking-widest text-primary mb-2 font-display">Education</h3>
                <p className="text-white font-medium text-lg">Integrated M.Sc. Physics</p>
                <p className="text-muted-foreground">Amrita Vishwa Vidyapeetham, Amritapuri, Kerala</p>
                <p className="text-white/40 text-sm mt-1 font-mono">Expected 2029</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-display">Science & Tech</h3>
                <div className="flex flex-wrap gap-2">
                  {scienceBadges.map((badge, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-secondary mb-4 font-display">Creative</h3>
                <div className="flex flex-wrap gap-2">
                  {creativeBadges.map((badge, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <SiGithub size={20} />
                  </a>
                  <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <SiHackerrank size={20} />
                  </a>
                </div>
                <div className="mt-6 space-y-2 font-mono text-sm">
                  <a href="mailto:adithyanpikachu@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                    adithyanpikachu@gmail.com
                  </a>
                  <p className="text-muted-foreground">+91 7736692447</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
