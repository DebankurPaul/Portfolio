import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Radial Gradient Mesh Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Software Engineering Internships (Summer 2025 / 2026)</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading text-zinc-900 dark:text-white"
        >
          <span className="block">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-heading"
        >
          {personalInfo.title}
        </motion.div>

        {/* College & CGPA Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2 flex-wrap justify-center font-mono"
        >
          <span>Dhemaji Engineering College</span>
          <span>•</span>
          <span>B.Tech CSE 2nd Year</span>
          <span>•</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">CGPA 8.14</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed"
        >
          &ldquo;{personalInfo.tagline}&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* View Projects */}
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Download / View Resume */}
          <button
            onClick={onOpenResume}
            type="button"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:border-indigo-500/70 dark:hover:border-indigo-500/70 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <FileText className="w-4 h-4 text-indigo-500" />
            <span>Download Resume</span>
          </button>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-zinc-100 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-zinc-100 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Visual Systems Code Terminal Preview (Pure CSS & SVG, No Stock Photos) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white/70 dark:bg-[#151518]/90 backdrop-blur-xl shadow-2xl overflow-hidden text-left"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-[#121215]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                debankur@portfolio: ~/systems-pipeline
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> Ready to Deploy
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 space-y-2 overflow-x-auto leading-relaxed">
            <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">$</span>
              <span>fastapi run app.main:app --host 0.0.0.0 --port 8000 --reload</span>
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-indigo-500/40 space-y-1">
              <div className="text-emerald-600 dark:text-emerald-400">
                INFO:     Started server process [PID 4128] · Uvicorn running on http://0.0.0.0:8000
              </div>
              <div className="text-indigo-500 dark:text-indigo-400">
                INFO:     Engine mounted: VirusTotal Threat Engine (70+ AVs active)
              </div>
              <div className="text-purple-500 dark:text-purple-400">
                INFO:     Geospatial Engine: PostGIS + XGBoost + SHAP initialized
              </div>
              <div className="text-zinc-500">
                INFO:     Audio DSP: PyTorch CRNN model loaded for note-event transcription
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 text-zinc-400 dark:text-zinc-500">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">$</span>
              <span>docker compose up -d --build</span>
              <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse ml-1" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
