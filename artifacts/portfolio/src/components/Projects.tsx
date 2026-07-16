import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    title: "SolarSentinel",
    tag: "Physics + ML",
    context: "Bharatiya Antariksh Hackathon (ISRO), 2026",
    description: "Real-time solar flare detection & 15-min-ahead forecasting. Fused Aditya-L1 SoLEXS + HEL1OS telemetry with spectral hardness ratio detection. Ensemble model: ARIMA + flux-derivative + spectral-variance features.",
    stack: ["Python", "NumPy", "Pandas", "3D Web Dashboard"],
    link: "https://solar-sentinel-solar-sentinel.vercel.app",
    featured: true
  },
  {
    title: "Relativity Simulation & Spacetime Visualization",
    tag: "Theoretical + Computational",
    context: "Independent Study",
    description: "Python simulations of Lorentz transforms, spacetime diagrams, relativistic worldlines. Visualized time dilation, length contraction, simultaneity.",
    stack: ["Python", "NumPy", "Matplotlib"],
    featured: false
  },
  {
    title: "Satellite Data Analysis for Air Pollution",
    tag: "Environmental Physics",
    context: "Bharatiya Antariksha Hackathon",
    description: "Spatio-temporal pollution trend analysis using satellite datasets.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    featured: false
  },
  {
    title: "Transaction Pattern Analysis for Fraud Detection",
    tag: "Data Science",
    context: "RBI Hackathon",
    description: "Anomaly detection, feature engineering, statistical analysis.",
    stack: ["Python", "Scikit-learn"],
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              02. <span className="text-muted-foreground font-light">Projects</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl flex flex-col h-full group ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-mono text-primary mb-2 block">{project.tag}</span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.context}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    <Terminal size={18} />
                  </div>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed flex-grow mb-8">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/5 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors shrink-0"
                    >
                      View Live <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
