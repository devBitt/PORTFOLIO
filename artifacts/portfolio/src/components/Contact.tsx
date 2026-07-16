import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiHackerrank } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified mailto action
    window.location.href = `mailto:adithyanpikachu@gmail.com?subject=Contact from ${formData.name}&body=${formData.message} (%0A%0A From: ${formData.email})`;
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/80">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Let's <span className="text-primary glow-text-cyan">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              "Whether it's quantum gravity or a design collab — let's talk."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display text-white mb-6">Transmission Coordinates</h3>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="mt-1 font-mono text-xs text-primary w-12">EML</div>
                  <div>
                    <a href="mailto:adithyanpikachu@gmail.com" className="text-white font-medium hover:text-primary transition-colors block">
                      adithyanpikachu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="mt-1 font-mono text-xs text-primary w-12">PHN</div>
                  <div>
                    <span className="text-white font-medium block">
                      +91 7736692447
                    </span>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="mt-1 font-mono text-xs text-primary w-12">SCL</div>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <SiGithub size={24} />
                    </a>
                    <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <SiHackerrank size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Identifier</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Return Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="you@universe.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary/10 text-primary border border-primary/50 rounded-lg font-medium tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300 mt-2"
                >
                  Transmit Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
