import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import { 
  Sparkles, 
  Filter, 
  LayoutGrid, 
  List, 
  ArrowLeft, 
  Menu, 
  X, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail 
} from 'lucide-react';

const VIDEOS = [
  {
    id: 'vNoCBQrjPo0',
    title: 'AI Visual Work 1',
    description: 'Exploring the boundaries of AI-generated video synthesis and creative storytelling.',
  },
  {
    id: 'vWvXd7WjL_Q',
    title: 'AI Visual Work 2',
    description: 'Advanced generative models creating unique and compelling visual narratives.',
  },
  {
    id: 'Tv-oQPoAvEE',
    title: 'AI Visual Work 3',
    description: 'A cinematic journey through AI-driven digital art and motion graphics.',
  },
  {
    id: 'aCYeECcQF5o',
    title: 'AI Visual Work 4',
    description: 'Pushing the limits of digital storytelling with cutting-edge AI technology.',
  },
  {
    id: 'ijTYQ7LFgFE',
    title: 'AI Visual Work 5',
    description: 'The intersection of technology and art in the modern digital landscape.',
  },
];

export const Visuals = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Campaigns', href: '/#campaigns' },
    { name: 'Visuals', href: '/visuals', active: true },
    { name: 'Analytics', href: '/#analytics' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <div className="min-h-screen bg-primary text-ink font-sans selection:bg-accent selection:text-ink">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-primary/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
            AYUSH<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-bold transition-colors relative group ${
                  link.active ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${
                  link.active ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-ink text-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-ink transition-all shadow-lg hover:shadow-accent/20"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-ink p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-primary pt-24 px-6 md:hidden flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-4xl font-display font-bold transition-colors ${
                    link.active ? 'text-accent' : 'text-ink hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-2 bg-accent/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-[0.3em]">
                Gallery
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                  AI Visual <span className="text-accent">Works</span>
                </h1>
                <p className="max-w-2xl text-xl text-ink/60 leading-relaxed font-medium">
                  A curated collection of my latest AI-generated video content. 
                  Each piece explores different styles and techniques in generative AI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 p-1 bg-white rounded-2xl border border-black/5 shadow-sm"
              >
                <button className="p-2 bg-accent rounded-xl text-ink shadow-lg shadow-accent/20">
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button className="p-2 text-ink/40 hover:text-ink transition-colors">
                  <List className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-black/5 mx-1" />
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-ink/40 hover:text-ink transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </motion.div>
            </div>
          </header>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {VIDEOS.map((video, index) => (
              <VideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                description={video.description}
                index={index}
              />
            ))}
          </div>

          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex justify-center"
          >
            <Link
              to="/"
              className="group flex items-center gap-3 px-8 py-4 bg-ink text-primary rounded-full font-bold hover:bg-accent hover:text-ink transition-all shadow-xl hover:shadow-accent/20"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-black/5 text-center bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-3xl font-display font-bold tracking-tighter mb-8">
            AYUSH<span className="text-accent">.</span>
          </div>
          <div className="flex justify-center gap-8 mb-10">
            {[<Instagram />, <Youtube />, <Linkedin />, <Mail />].map((icon, i) => (
              <a key={i} href="#" className="text-ink/40 hover:text-accent transition-colors">
                {React.cloneElement(icon as React.ReactElement, { size: 24 })}
              </a>
            ))}
          </div>
          <p className="text-ink/30 text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} AYUSH THAKUR. Crafted for Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};
