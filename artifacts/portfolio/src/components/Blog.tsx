import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Blog() {
  const [text, setText] = useState('');
  const fullText = "Physics notes, project breakdowns, and thoughts on the universe — coming soon.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              07. <span className="text-muted-foreground font-light">Notes</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white/20 bg-[#050505] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-40"></div>
            
            {/* Terminal Header */}
            <div className="bg-white/10 border-b border-white/20 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-mono text-white/50 ml-4 flex-grow text-center">usr/bin/bash</div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 min-h-[300px] font-mono text-sm md:text-base relative text-primary glow-text-cyan">
              <div className="mb-4">
                <span className="text-secondary glow-text-purple">adithyan@deepspace</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/universe/notes</span>
                <span className="text-white">$ ./transmission.sh</span>
              </div>
              
              <div className="mb-6 opacity-70">
                <p>Establishing connection...</p>
                <p>Handshake successful.</p>
                <p>Decrypting data packets...</p>
              </div>

              <div>
                <span className="text-white font-bold uppercase tracking-wider mb-2 block">Transmission Incoming...</span>
                <p className="inline-block">{text}</p>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-5 bg-primary ml-1 align-middle"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
