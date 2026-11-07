import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c0c0e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
              DP
            </div>
            <span className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              DEBANKUR PAUL
            </span>
          </div>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
            B.Tech CSE Undergraduate · Dhemaji Engineering College · Dual NIT Research Intern
          </p>
        </div>

        {/* Center: Tech Stack note */}
        <div className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          <span>Engineered with React + Vite · Tailwind CSS · Framer Motion</span>
          <div className="mt-1">
            Optimized for Vercel deployment & 100/100 Lighthouse performance
          </div>
        </div>

        {/* Right Side: Back to top & Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:-translate-y-0.5"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Debankur Paul. All rights reserved.
      </div>
    </footer>
  );
};
