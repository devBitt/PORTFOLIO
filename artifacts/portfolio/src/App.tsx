import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CreativeUniverse } from './components/CreativeUniverse';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Certifications } from './components/Certifications';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CanvasStarfield } from './components/CanvasStarfield';
import { CustomCursor } from './components/CustomCursor';

function PortfolioApp() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <CanvasStarfield />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <CreativeUniverse />
        <Skills />
        <Research />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default PortfolioApp;
