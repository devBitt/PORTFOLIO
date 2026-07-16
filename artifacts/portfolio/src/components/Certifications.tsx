import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  { title: "Securing Projects with OpenSSF Scorecard", id: "LFEL1006", issuer: "Linux Foundation", date: "Jan 2026" },
  { title: "Open Source Software Development", id: "LFD102", issuer: "Linux Foundation", date: "Jan 2026" },
  { title: "NASA Open Science 101", issuer: "NASA", date: "Jun 2025" },
  { title: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "Apr 2025" },
  { title: "Python (Basic)", issuer: "HackerRank", date: "Apr 2025" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "Jan 2025" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Sep 2023" },
  { title: "Hacktoberfest 2025", issuer: "Official Finisher", date: "Oct 2025", special: true }
];

export function Certifications() {
  return (
    <section id="certs" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              06. <span className="text-muted-foreground font-light">Certifications</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`glass-card p-6 rounded-xl flex flex-col ${cert.special ? 'border-primary/30 bg-primary/5' : ''}`}
              >
                <div className="mb-4 text-primary opacity-70">
                  <Award size={24} />
                </div>
                <h3 className="text-white font-medium text-lg leading-tight mb-2 flex-grow">{cert.title}</h3>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">{cert.issuer}</p>
                  <div className="flex justify-between items-end mt-1">
                    <p className="text-xs text-white/30 font-mono">{cert.id || '---'}</p>
                    <p className="text-xs text-primary/70">{cert.date}</p>
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
