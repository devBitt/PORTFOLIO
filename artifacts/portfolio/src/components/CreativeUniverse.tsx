import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Image as ImageIcon } from 'lucide-react';

const tabs = [
  { id: 'video', label: 'Video Editing', icon: Play },
  { id: 'design', label: 'Graphic Design', icon: ImageIcon },
  { id: 'character', label: 'Character Design', icon: Sparkles },
];

const content = {
  video: [
    {
      title: "ARM Cinematic Edit",
      type: "Cinematic Edit",
      status: "Notable Work ⭐",
      highlight: true,
      description: "A cinematic tribute edit that caught the attention of acclaimed Malayalam actress Surabhi Lakshmi, who commented on the video. Created on a now-deleted account — proof that great work speaks for itself.",
      tags: ["Cinematic", "Malayalam Cinema", "Viral Moment"]
    },
    {
      title: "KILLUA GAMING",
      type: "Gaming Content Editor",
      status: "Active Collaboration",
      description: "Currently working as video editor for KILLUA GAMING — handling cuts, motion graphics, pacing, and visual storytelling for gaming content.",
      tools: "After Effects, DaVinci Resolve, CapCut",
      tags: ["Gaming", "Motion Graphics", "Ongoing"]
    },
    {
      title: "Next Edit Loading...",
      type: "Rendering",
      status: "94%",
      isTeaser: true,
      description: "More cinematic and creative edits coming soon. The timeline is rendering."
    }
  ],
  design: [
    {
      title: "Brand Identities",
      type: "Logo Design",
      status: "Portfolio pieces coming soon",
      iconMode: "[ LOGO ]",
      description: "Crafting minimal to bold logos — translating a brand's personality into a single mark. Influenced by clean geometry and manga-inspired line work.",
      tools: "Adobe Illustrator, Canva"
    },
    {
      title: "Motion Stills",
      type: "Posters & Thumbnails",
      status: "Portfolio pieces coming soon",
      iconMode: "[ POSTER ]",
      description: "High-impact posters and YouTube thumbnails designed for maximum visual punch — bold typography, dramatic lighting, cinematic composition.",
      tools: "Canva, Pixlr, Adobe Illustrator"
    },
    {
      title: "Digital Presence Design",
      type: "Social Media Graphics",
      status: "Portfolio pieces coming soon",
      description: "Social media content that stops the scroll — layouts, story graphics, and branded templates.",
      tools: "Canva, Illustrator"
    }
  ],
  character: [
    {
      title: "Characters Awakening...",
      type: "Original IP",
      isSilhoutte: true,
      description: "Deeply influenced by the raw linework and expressive anatomy of manga. Currently developing original characters. First designs dropping soon."
    },
    {
      title: "Design Philosophy",
      isQuote: true,
      quote: "Good character design tells you who someone is before they speak a word. That's the goal — every line, every silhouette, intentional."
    }
  ]
};

export function CreativeUniverse() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <section id="creative" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                  03. <span className="text-secondary glow-text-purple font-light">Creative</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-light text-lg">
                Where art meets physics — design, motion, and storytelling
              </p>
            </div>
            
            <div className="flex gap-2 bg-white/5 p-1 rounded-lg backdrop-blur-sm self-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* @ts-ignore - dynamic key access */}
                {content[activeTab].map((item, index) => {
                  
                  // Special Card: Rendering Teaser
                  if (item.isTeaser) {
                    return (
                      <div key={index} className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center border-dashed border-white/20">
                        <div className="w-full max-w-[200px] h-2 bg-white/10 rounded-full mb-6 overflow-hidden relative">
                          <motion.div 
                            className="absolute top-0 left-0 h-full bg-primary"
                            animate={{ width: ["0%", "94%"] }}
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </div>
                        <h3 className="font-mono text-primary mb-2 flex items-center gap-2">
                          {item.title} <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  }

                  // Special Card: Quote
                  if (item.isQuote) {
                    return (
                      <div key={index} className="glass-card-purple p-8 rounded-2xl flex flex-col justify-center border-l-4 border-l-secondary/50 lg:col-span-2">
                        <h3 className="text-xs uppercase tracking-widest text-secondary mb-6 font-display">{item.title}</h3>
                        <p className="text-2xl md:text-3xl font-display text-white italic leading-tight">
                          "{item.quote}"
                        </p>
                      </div>
                    );
                  }

                  // Special Card: Character Silhouette
                  if (item.isSilhoutte) {
                    return (
                      <div key={index} className="glass-card p-8 rounded-2xl relative overflow-hidden group h-[300px] lg:col-span-1">
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0,transparent_70%)]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] opacity-10 group-hover:opacity-30 transition-all duration-700 blur-sm flex items-end justify-end">
                          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-secondary stroke-[0.5]">
                            <path d="M50 100 Q 50 50 80 20 M50 100 Q 50 50 20 20" />
                            <circle cx="50" cy="30" r="15" />
                          </svg>
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                          <span className="text-xs font-mono text-secondary mb-2">{item.type}</span>
                          <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-auto">{item.description}</p>
                        </div>
                      </div>
                    );
                  }

                  const isGold = item.highlight;
                  const cardClass = isGold ? 'glass-card-gold border-accent/30' : 'glass-card-purple';
                  const accentColor = isGold ? 'text-accent' : 'text-secondary';
                  const bgGlow = isGold ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-white/5 text-muted-foreground';

                  return (
                    <div key={index} className={`glass-card p-8 rounded-2xl flex flex-col h-full ${cardClass}`}>
                      {item.iconMode && (
                        <div className={`h-32 mb-6 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center font-display text-2xl font-bold tracking-widest ${accentColor} opacity-50`}>
                          {item.iconMode}
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-xs font-mono ${accentColor}`}>{item.type}</span>
                          {item.status && (
                            <span className={`text-xs px-2 py-1 rounded-full ${bgGlow}`}>
                              {item.status}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>
                      
                      <div className="mt-auto space-y-4">
                        {item.tools && (
                          <div className="text-xs font-mono text-muted-foreground">
                            <span className="text-white/40">Tools:</span> {item.tools}
                          </div>
                        )}
                        {item.tags && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag: string, i: number) => (
                              <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-12 text-center text-sm font-mono text-muted-foreground">
            <span className="text-white/20">///</span> This section grows as the work does. Check back. <span className="text-white/20">///</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
