import React from 'react';
import { motion } from 'framer-motion';

const researchNotes = [
  {
    title: "General Relativity",
    description: "Spacetime geometry, causal structure, relativistic kinematics.",
    source: "via Susskind's Theoretical Minimum",
    equation: "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}"
  },
  {
    title: "Quantum Field Theory",
    description: "Foundational principles of QFT, fields, particles, and interactions.",
    source: "via Susskind's Stanford lectures + David Tong's notes",
    equation: "\\mathcal{L} = \\bar{\\psi}(i\\gamma^\\mu\\partial_\\mu - m)\\psi"
  },
  {
    title: "Quantum Gravity",
    description: "Foundational questions on emergent and discrete spacetime frameworks.",
    source: "Independent exploration",
    equation: "\\hat{H}|\\Psi\\rangle = 0"
  }
];

export function Research() {
  return (
    <section id="research" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 text-center md:text-left justify-center md:justify-start">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              05. <span className="text-primary glow-text-cyan font-light">Theory</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {researchNotes.map((note, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateX: -10, y: 20 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="relative p-8 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all duration-500"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
                }}
              >
                {/* Decorative equation background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none font-serif italic text-2xl text-primary">
                  {note.equation}
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-[2px] bg-primary mb-6 group-hover:w-full transition-all duration-700"></div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-wide">{note.title}</h3>
                  <p className="text-muted-foreground font-light flex-grow mb-6">{note.description}</p>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">{note.source}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-display text-white italic font-light">
              "The deepest questions don't have answers yet — <span className="text-primary glow-text-cyan not-italic font-medium">that's exactly why they're worth chasing.</span>"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
