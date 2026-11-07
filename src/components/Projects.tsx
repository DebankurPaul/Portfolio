import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Activity,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  // Color palette for tech stack tags
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'fastapi':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'docker':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'react':
      case 'next.js':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
      case 'virustotal api':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'render':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'xgboost':
      case 'shap':
        return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'postgis':
      case 'mapbox':
        return 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20';
      case 'pytorch':
      case 'deep learning':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      case 'signal processing':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-white tracking-tight">
            Shipped Systems & Research Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Real-world systems with live deployments, peer-recognized machine learning architectures, and deep technical rigor.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141417] shadow-lg hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Project Card Internal Grid */}
              <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                <div>
                  
                  {/* Top Badges & Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {project.category}
                      </span>

                      {project.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {project.metrics && (
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-indigo-500" />
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400/90 font-heading">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags (Small coloured chips) */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 3-4 Bullet Points of what you actually built */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 font-mono">
                      Key Technical Contributions & Implementation
                    </h4>
                    <ul className="space-y-2.5">
                      {project.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                        >
                          <span className="p-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Action Links */}
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Live Demo Button (if available) */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>

                  {/* Clean repository name snippet */}
                  <div className="text-xs font-mono text-zinc-400 hidden sm:block truncate max-w-xs">
                    {project.githubUrl.replace('https://github.com/', '')}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
