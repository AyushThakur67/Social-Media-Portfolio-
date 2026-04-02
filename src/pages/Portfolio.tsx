import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  Eye, 
  BarChart3, 
  Target, 
  Zap,
  Menu,
  X,
  ChevronRight,
  Video
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { InstagramReel } from '../components/InstagramReel';
import { VideoCard } from '../components/VideoCard';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const CAMPAIGNS = [
  {
    id: 1,
    title: "ROYAL ENFIELD BRAND CAMPAIGN",
    subtitle: "Digital Content Strategy | 2024",
    image: "/Royal Enfield.png",
    goal: ["Increase brand awareness among Gen-Z riders", "Showcase the lifestyle aspect of the new Royal Enfield lineup"],
    strategy: ["Leverage short-form video for high-impact storytelling", "Collaborate with niche motorcycling influencers"],
    execution: ["Produced 10+ high-quality Reels/Shorts", "Managed cross-platform distribution", "AI-enhanced visual effects for cinematic feel"],
    results: ["100K+ ORGANIC VIEWS", "15% INCREASE IN ENGAGEMENT", "SUCCESSFUL BRAND INTEGRATION"],
    color: "bg-ink"
  },
  {
    id: 2,
    title: "MULTI-PLATFORM CONTENT STRATEGY",
    subtitle: "Instagram & Twitter Growth | 2025 – Present",
    image: "/Social Media.png",
    goal: ["Achieve rapid growth on new social accounts", "Design cross-platform distribution strategy"],
    strategy: ["Peer-driven content approach", "Focus on short-form ecosystems (Reels/Shorts)", "Targeted audience engagement"],
    execution: ["Launched Instagram account with 14 posts", "Managed Twitter content strategy", "Cross-platform content distribution"],
    results: ["30,000+ VIEWS IN ONE MONTH", "ORGANIC REACH OPTIMIZATION", "STRONG CROSS-PLATFORM SYNERGY"],
    color: "bg-pink-50"
  },
  {
    id: 3,
    title: "RED BULL BRAND COLLABORATION",
    subtitle: "SRM University | 2024",
    image: "/Red bull.png",
    goal: ["Secure major brand sponsorship for college event", "Increase event visibility and participation"],
    strategy: ["Outreach and collaboration for campus activation", "Combine offline event with digital promotion"],
    execution: ["Secured Red Bull sponsorship", "Planned promotional campaigns", "Executed campus outreach"],
    results: ["SUCCESSFUL BRAND PARTNERSHIP", "INCREASED EVENT VISIBILITY", "HIGH STUDENT PARTICIPATION"],
    color: "bg-ink"
  }
];

const EXPERIENCE = [
  {
    role: "Content Creator & Channel Manager",
    company: "YouTube AI Political Content Platform",
    period: "2023 – Present",
    desc: "Built and scaled a niche channel generating over 85,000 views using trend-based storytelling and AI-powered workflows.",
    highlights: ["Managed complete content lifecycle", "SEO optimization for reach", "Audience behavior analysis"]
  },
  {
    role: "Content Creator",
    company: "YouTube Comedy Shorts Channel",
    period: "2022 – 2023",
    desc: "Produced short-form content generating over 50,000 views through experimentation with viral formats.",
    highlights: ["A/B testing on hooks & thumbnails", "Viral format experimentation", "Analytics-driven retention"]
  },
  {
    role: "Content Contributor",
    company: "Cricket-Based YouTube Channel",
    period: "2022",
    desc: "Contributed to a channel with 10,000+ subscribers and 300,000+ total views during active scaling.",
    highlights: ["Growth strategy support", "Video production assistance", "Community engagement"]
  }
];

const SKILLS = [
  { category: "Content Strategy", items: ["Campaign planning", "Content calendars", "Trend analysis", "Audience targeting"] },
  { category: "Marketing & SEO", items: ["SEO optimization", "Thumbnail strategy", "CTR improvement", "Organic growth"] },
  { category: "Tools & AI", items: ["Canva", "CapCut", "Filmora", "Alight Motion", "Premiere Pro", "AI video generation", "Content automation"] },
  { category: "Analytics", items: ["YouTube Analytics", "KPI tracking", "A/B testing", "Performance optimization"] }
];

const YOUTUBE_STATS = [
  { name: 'Total Views', value: 165000, icon: <Eye className="w-5 h-5" /> },
  { name: 'AI Channel Views', value: 85000, icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Subscribers', value: 10000, icon: <Users className="w-5 h-5" /> },
];

const INSTAGRAM_STATS = [
  { name: 'Recent Growth', value: 30000, unit: ' Views', icon: <Eye className="w-5 h-5" /> },
  { name: 'Efficiency', value: 14, unit: ' Posts', icon: <TrendingUp className="w-5 h-5" /> },
  { name: 'Accounts Reached', value: 12000, range: '8.5K–16K', icon: <Users className="w-5 h-5" /> },
];

const STRATEGY_POINTS = [
  { title: "Reels-focused growth", desc: "Leveraging short-form video algorithms for maximum organic reach." },
  { title: "Hook-driven storytelling", desc: "Crafting narratives that capture attention in the first 3 seconds." },
  { title: "Data-based optimization", desc: "Iterating content based on audience retention and engagement metrics." }
];

// --- Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    {subtitle && <span className="text-accent font-medium uppercase tracking-widest text-xs mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl md:text-6xl font-bold text-ink leading-tight">{children}</h2>
  </motion.div>
);

const MetricCard = ({ value, label, icon, delay = 0 }: { value: string, label: string, icon: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4"
  >
    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-ink">{value}</div>
      <div className="text-sm text-ink/80 font-medium">{label}</div>
    </div>
  </motion.div>
);

export const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Campaigns', href: '/#campaigns' },
    { name: 'Visuals', href: '/visuals', isExternal: true },
    { name: 'Analytics', href: '/#analytics' },
    { name: 'Contact', href: '/#contact' },
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-primary smooth-scroll selection:bg-accent selection:text-ink">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-primary/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/#home" 
            className="text-2xl font-display font-bold tracking-tighter"
          >
            AYUSH<span className="text-accent">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              link.isExternal ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-bold text-ink hover:text-accent transition-colors relative group flex items-center gap-1"
                >
                  {link.name}
                  <Video size={14} className="text-accent" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ) : (
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-bold text-ink hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </motion.a>
              )
            ))}
            <motion.a 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact" 
              className="bg-ink text-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-ink transition-all shadow-lg hover:shadow-accent/20"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ink p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-primary pt-24 px-6 md:hidden flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                link.isExternal ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-display font-bold text-ink hover:text-accent transition-colors flex items-center justify-center gap-2"
                  >
                    {link.name} <Video size={24} className="text-accent" />
                  </Link>
                ) : (
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-display font-bold text-ink hover:text-accent transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Campaign Specialist
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black text-ink leading-[0.9] mb-8 tracking-tighter">
                Social <br />
                Media<span className="text-accent">.</span><br />
                Strategist<span className="text-accent">.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-ink max-w-md mb-12 leading-relaxed font-medium">
                Content strategist with 4+ years of experience delivering over 165K views through audience-focused content and AI-powered workflows.
              </motion.p>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetricCard value="165K+" label="Total Views" icon={<Eye />} delay={0.6} />
                <MetricCard value="4+ Yrs" label="Experience" icon={<Zap />} delay={0.7} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-accent rounded-container relative overflow-hidden group shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="AYUSH THAKUR" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/ayush/800/1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 text-primary">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] mb-2 font-bold text-accent">Portfolio 2026</p>
                    <h3 className="text-4xl font-black tracking-tight">AYUSH THAKUR</h3>
                  </motion.div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" 
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Manager.png" 
                    alt="AYUSH THAKUR" 
                    className="w-full h-auto rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full -z-0 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/20 rounded-full -z-0 animate-pulse" />
              </motion.div>
              
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-black text-ink leading-tight mb-12 tracking-tighter"
                >
                  About <span className="text-accent">Me</span>
                </motion.h2>
                
                <div className="space-y-6 mb-12">
                  {[
                    { title: "Content Strategy & Management", text: "4+ years of experience building and managing digital content across YouTube, Instagram, and Twitter, driving consistent audience engagement." },
                    { title: "Campaign Execution", text: "2 years of experience running social media campaigns with a focus on planning, execution, and performance optimization based on audience insights." },
                    { title: "Full-Cycle Production", text: "Expert in the entire content lifecycle—from ideation and scripting to high-quality video editing using Premiere Pro, CapCut, and Alight Motion." },
                    { title: "AI-Driven Efficiency", text: "Integrated advanced AI tools into the workflow to scale content production and stay ahead of modern digital trends." },
                    { title: "Data-Backed Performance", text: "Focused on creating high-performing content through rigorous data analysis, experimentation, and deep audience understanding." }
                  ].map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0" />
                      <p className="text-lg text-ink/70 leading-relaxed">
                        <strong className="text-ink font-bold">{point.title}:</strong> {point.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid gap-8">
                  {[
                    { label: "Content Mastery", value: "165K+ Total Views", icon: <Eye /> },
                    { label: "Growth Specialist", value: "85K+ AI Channel Views", icon: <TrendingUp /> },
                    { label: "Education", value: "SRM Institute (B.Tech)", icon: <Target /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-ink">{item.value}</h4>
                        <p className="text-sm text-ink/50 uppercase tracking-widest font-medium">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns Section */}
        <section id="campaigns" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Portfolio">Featured Campaigns</SectionTitle>
            
            <div className="space-y-24">
              {CAMPAIGNS.map((campaign, i) => (
                <motion.div 
                  key={campaign.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-black/5"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Visual Side */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                      <img 
                        src={campaign.image} 
                        alt={campaign.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{campaign.subtitle}</p>
                        <h3 className="text-4xl font-black tracking-tight">{campaign.title}</h3>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 lg:p-16 space-y-10">
                      {/* Goal */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-accent">
                          <Target size={20} />
                          <h4 className="text-xs font-black uppercase tracking-widest">Goal</h4>
                        </div>
                        <ul className="space-y-2">
                          {campaign.goal.map((g, idx) => (
                            <li key={idx} className="text-ink/70 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-black/5" />

                      {/* Strategy */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-accent">
                          <Zap size={20} />
                          <h4 className="text-xs font-black uppercase tracking-widest">Strategy</h4>
                        </div>
                        <ul className="space-y-2">
                          {campaign.strategy.map((s, idx) => (
                            <li key={idx} className="text-ink/70 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-black/5" />

                      {/* Execution */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-accent">
                          <BarChart3 size={20} />
                          <h4 className="text-xs font-black uppercase tracking-widest">Execution</h4>
                        </div>
                        <ul className="space-y-2">
                          {campaign.execution.map((e, idx) => (
                            <li key={idx} className="text-ink/70 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results Block */}
                      <div className="pt-6">
                        <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                          <div className="flex items-center gap-3 text-accent mb-6">
                            <TrendingUp size={20} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Results</h4>
                          </div>
                          <div className="grid gap-4">
                            {campaign.results.map((r, idx) => (
                              <div key={idx} className="text-xl font-black text-ink tracking-tight flex items-center gap-3">
                                <ChevronRight className="text-accent" size={18} />
                                {r}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-6 bg-primary">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Career Path">Content Experience</SectionTitle>
            <div className="grid gap-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col md:flex-row justify-between gap-8"
                >
                  <div className="max-w-2xl">
                    <div className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{exp.period}</div>
                    <h3 className="text-3xl font-black mb-2">{exp.role}</h3>
                    <div className="text-xl font-bold text-ink/80 mb-6">{exp.company}</div>
                    <p className="text-ink/90 text-lg leading-relaxed mb-8">{exp.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.highlights.map((h, idx) => (
                        <span key={idx} className="bg-primary px-4 py-2 rounded-full text-xs font-bold text-ink/80">{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                      <BarChart3 size={32} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Expertise">Core Skills</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-primary border border-black/5"
                >
                  <h4 className="text-xl font-black mb-6 text-accent">{skill.category}</h4>
                  <ul className="space-y-3">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-ink/60 font-medium flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Content Section */}
        <section className="py-32 px-6 bg-ink text-primary relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionTitle subtitle="Visual Storytelling">Social Media Highlights</SectionTitle>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#youtube-works" 
                    className="flex items-center gap-3 bg-accent text-ink px-6 py-3 rounded-full hover:bg-ink hover:text-primary transition-all group shadow-lg hover:shadow-accent/20"
                  >
                    <span className="font-bold tracking-widest uppercase text-xs">YouTube Works</span>
                    <Youtube className="group-hover:scale-110 transition-transform" size={18} />
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-accent hover:text-white transition-colors group border border-accent/20 px-6 py-3 rounded-full hover:bg-accent/10"
                  >
                    <span className="font-bold tracking-widest uppercase text-sm">Follow the Journey</span>
                    <Instagram className="group-hover:rotate-12 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  id: "DV6XJbwlPpr",
                  title: "Strategic Narrative",
                  category: "Viral Commentary",
                  description: "Crafting high-impact stories that challenge perspectives and drive massive organic reach.",
                  stats: "45K+ Views",
                },
                {
                  id: "DWZRr89DgQ_",
                  title: "Brand Synergy",
                  category: "Lifestyle Integration",
                  description: "Blending brand identity with authentic storytelling to create meaningful audience connections.",
                  stats: "32K+ Views",
                }
              ].map((reel, idx) => (
                <motion.div 
                  key={reel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <InstagramReel id={reel.id} />
                  
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/30">
                        {reel.category}
                      </span>
                      <span className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                        {reel.stats}
                      </span>
                    </div>
                    <h4 className="text-2xl font-black mb-2 tracking-tight">
                      {reel.title}
                    </h4>
                    <p className="text-primary/60 text-sm leading-relaxed">
                      {reel.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Quote */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <p className="text-2xl md:text-3xl font-display italic text-primary/40 max-w-3xl mx-auto leading-relaxed">
                "Visual storytelling isn't just about the edit; it's about the <span className="text-accent">emotional resonance</span> that lingers after the scroll."
              </p>
            </motion.div>
          </div>
        </section>

        {/* YouTube Works Section */}
        <section id="youtube-works" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionTitle subtitle="AI Visual Work">YouTube Works</SectionTitle>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Link 
                  to="/visuals" 
                  className="flex items-center gap-3 text-accent hover:text-ink transition-colors group"
                >
                  <span className="font-bold tracking-widest uppercase text-sm">View Full Gallery</span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
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
                }
              ].map((video, index) => (
                <VideoCard
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  description={video.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="py-32 px-6 bg-ink text-primary relative overflow-hidden">
          {/* Background decorative text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
            <div className="text-[30rem] font-black">DATA</div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-medium uppercase tracking-[0.4em] text-xs mb-4 block"
              >
                Impact Analysis
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter"
              >
                Performance & Analytics
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* YouTube Analytics */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      <Youtube size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">YouTube Growth</h3>
                  </div>
                  <div className="text-accent group-hover:scale-110 transition-transform"><TrendingUp /></div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {YOUTUBE_STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-accent/50 mb-3 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl md:text-3xl font-black">{stat.value.toLocaleString()}</div>
                      <div className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">{stat.name}</div>
                    </div>
                  ))}
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[
                      { name: 'W1', v: 12000 },
                      { name: 'W2', v: 19000 },
                      { name: 'W3', v: 15000 },
                      { name: 'W4', v: 28000 },
                      { name: 'W5', v: 45000 },
                      { name: 'W6', v: 65000 },
                    ]}>
                      <defs>
                        <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F4A623" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#F4A623" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="v" stroke="#F4A623" fillOpacity={1} fill="url(#colorV)" strokeWidth={4} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Instagram Analytics */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
                      <Instagram size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Instagram Impact</h3>
                  </div>
                  <div className="text-accent group-hover:scale-110 transition-transform"><BarChart3 /></div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  {INSTAGRAM_STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-accent/50 mb-3 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl md:text-3xl font-black">
                        {stat.value.toLocaleString()}{stat.unit || ''}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">
                        {stat.range || stat.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'M', v: 4000 },
                      { name: 'T', v: 3000 },
                      { name: 'W', v: 8000 },
                      { name: 'T', v: 5000 },
                      { name: 'F', v: 12000 },
                      { name: 'S', v: 15000 },
                      { name: 'S', v: 24000 },
                    ]}>
                      <Bar dataKey="v" fill="#F4A623" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Strategy Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <SectionTitle subtitle="The Methodology">Content Strategy</SectionTitle>
                
                <div className="grid md:grid-cols-3 gap-16">
                  {STRATEGY_POINTS.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="group"
                    >
                      <div className="text-7xl font-black text-ink/5 mb-6 group-hover:text-ink/10 transition-colors leading-none">0{i+1}</div>
                      <h4 className="text-2xl font-black mb-4 tracking-tight">{point.title}</h4>
                      <p className="text-ink/70 leading-relaxed text-lg">{point.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative background text */}
              <div className="absolute -bottom-20 -right-20 text-[25rem] font-black text-black/5 select-none pointer-events-none leading-none">
                GROW
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <SectionTitle subtitle="Get in Touch">Let's build something impactful.</SectionTitle>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-ink/60 mb-16 leading-relaxed"
                >
                  Available for collaborations, campaign management, and social media strategy consulting.
                </motion.p>
                
                <div className="space-y-10">
                  {[
                    { icon: <Mail />, label: "Email", value: "ayush77thakur22@gmail.com", href: "mailto:ayush77thakur22@gmail.com" },
                    { icon: <Phone />, label: "Phone", value: "+91 93634 66938", href: "tel:+919363466938" },
                    { icon: <Linkedin />, label: "LinkedIn", value: "AYUSH THAKUR", href: "#" }
                  ].map((item, i) => (
                    <motion.a 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      href={item.href} 
                      className="flex items-center gap-8 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-accent/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-ink/30 uppercase tracking-[0.3em] font-black mb-1">{item.label}</div>
                        <div className="text-2xl font-black tracking-tight group-hover:text-accent transition-colors">{item.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary p-12 rounded-[3rem] shadow-xl border border-black/5"
              >
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-ink/30 ml-2">Name</label>
                      <input type="text" className="w-full bg-white border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-shadow hover:shadow-md" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-ink/30 ml-2">Email</label>
                      <input type="email" className="w-full bg-white border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-shadow hover:shadow-md" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-ink/30 ml-2">Subject</label>
                    <input type="text" className="w-full bg-white border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-shadow hover:shadow-md" placeholder="Campaign Inquiry" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-ink/30 ml-2">Message</label>
                    <textarea rows={5} className="w-full bg-white border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none resize-none shadow-sm transition-shadow hover:shadow-md" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-ink text-primary py-5 rounded-2xl font-black text-lg hover:bg-accent hover:text-ink transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-accent/20"
                  >
                    Send Message <ChevronRight size={20} />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-black/5 text-center bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-display font-bold tracking-tighter mb-8"
          >
            AYUSH<span className="text-accent">.</span>
          </motion.div>
          <div className="flex justify-center gap-8 mb-10">
            {[<Instagram />, <Youtube />, <Linkedin />, <Mail />].map((icon, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -5, color: '#F4A623' }}
                href="#" 
                className="text-ink/40 transition-colors"
              >
                {icon}
              </motion.a>
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
