import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-8 relative z-10 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground font-light"
        >
          Adithyan S &copy; 2026 &mdash; Built at the intersection of physics, code, and creativity.
        </motion.p>
      </div>
    </footer>
  );
}
