import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    org: 'Amrita Motion Pictures',
    roles: ['Designer', 'Video Editor', 'Developer'],
    type: 'Current',
    color: 'primary',
    description:
      'Creating visual designs, editing cinematic content, and building digital tools for one of Amrita\'s premier media production teams.',
  },
  {
    org: 'Vidyut Team',
    roles: ['Designer', 'Video Editor'],
    type: 'Current',
    color: 'secondary',
    description:
      'Designing visuals and editing video content for Vidyut, Amrita\'s national-level technical festival.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              02. <span className="text-muted-foreground font-light">Experience</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass-card rounded-2xl p-6 border border-white/5 hover:border-${exp.color}/30 transition-all duration-300 group`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-${exp.color}/10 border border-${exp.color}/20 flex items-center justify-center flex-shrink-0 group-hover:bg-${exp.color}/20 transition-colors`}>
                    <Briefcase size={20} className={`text-${exp.color}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-display font-semibold text-white">
                        {exp.org}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-mono bg-${exp.color}/10 text-${exp.color} border border-${exp.color}/20`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.roles.map((role, j) => (
                        <span
                          key={j}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-${exp.color}/10 text-${exp.color} border border-${exp.color}/20`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
