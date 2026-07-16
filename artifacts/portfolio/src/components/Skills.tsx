import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming & Tools",
    skills: ["Python", "MATLAB", "NumPy", "SciPy", "Pandas", "Matplotlib", "Jupyter Notebook", "Git", "GitHub", "Linux", "Scikit-learn"],
    color: "primary"
  },
  {
    title: "Scientific Computing",
    skills: ["Numerical Methods", "ODE/PDE Solvers", "Computational Modelling", "Scientific Visualization", "Data Analysis"],
    color: "primary"
  },
  {
    title: "Physics & Mathematics",
    skills: ["Quantum Physics", "Special Relativity", "Electromagnetism", "General Relativity", "QFT", "Linear Algebra", "Multivariable Calculus", "Probability & Statistics"],
    color: "white"
  },
  {
    title: "Design & Creative",
    skills: ["Canva", "Adobe Illustrator", "Pixlr", "Graphic Design", "Character Design"],
    color: "secondary"
  },
  {
    title: "Video Editing",
    subtitle: "Editor for KILLUA GAMING",
    skills: ["After Effects", "DaVinci Resolve", "CapCut"],
    color: "secondary"
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              04. <span className="text-muted-foreground font-light">Skills</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-8 rounded-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-display text-white">{category.title}</h3>
                  {category.subtitle && (
                    <p className="text-xs font-mono text-muted-foreground mt-1">{category.subtitle}</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    let badgeClass = "";
                    if (category.color === "primary") badgeClass = "bg-primary/5 text-primary border border-primary/20 hover:bg-primary/20";
                    else if (category.color === "secondary") badgeClass = "bg-secondary/5 text-secondary border border-secondary/20 hover:bg-secondary/20";
                    else badgeClass = "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10";

                    return (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 rounded text-sm transition-colors duration-300 ${badgeClass}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
