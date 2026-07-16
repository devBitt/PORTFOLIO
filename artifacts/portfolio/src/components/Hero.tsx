import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = [
  "Physicist",
  "Scientific Programmer",
  "Graphic Designer",
  "Video Editor",
  "Quantum Gravity Enthusiast",
  "Creative Technologist"
];

const floatingParticles = ['E=mc²', '∇·E', 'ψ', '∫', 'Gμν', 'ℏ', 'δS=0', 'H|ψ⟩=E|ψ⟩'];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Particles */}
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 font-orbitron text-xl pointer-events-none"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {particle}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white mb-4 tracking-tighter">
            ADITHYAN S
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-12 md:h-16 mb-6 flex items-center"
        >
          <span className="text-xl md:text-3xl font-display font-light text-muted-foreground mr-2">I am a</span>
          <span className="text-xl md:text-3xl font-display font-medium text-primary glow-text-cyan relative inline-block">
            {titles[titleIndex]}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 md:h-10 bg-primary ml-1 align-middle"
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light"
        >
          Where Spacetime Meets Code and Creativity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#projects" className="px-8 py-4 bg-primary/10 text-primary border border-primary/50 rounded-full font-medium tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium tracking-wide hover:bg-white/10 transition-all duration-300">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-display">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
