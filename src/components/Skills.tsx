import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Globe, Sparkles, Check, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Category icons mapping
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code2 className="w-5 h-5 text-indigo-500" />,
    'Web & Backend': <Server className="w-5 h-5 text-emerald-500" />,
    'Machine Learning': <BrainCircuit className="w-5 h-5 text-purple-500" />,
    'Data & Geospatial': <Globe className="w-5 h-5 text-cyan-500" />
  };

  const categoryAccents: Record<string, string> = {
    'Languages': 'hover:border-indigo-500/50 hover:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400',
    'Web & Backend': 'hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400',
    'Machine Learning': 'hover:border-purple-500/50 hover:bg-purple-500/5 text-purple-600 dark:text-purple-400',
    'Data & Geospatial': 'hover:border-cyan-500/50 hover:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400'
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-white tracking-tight">
            Tools & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Engineered with modern industry toolchains, clean software abstractions, and high-performance computing libraries.
          </p>
        </div>

        {/* Skills Grid - 4 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141417] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                      {categoryIcons[group.category] || <Terminal className="w-5 h-5 text-indigo-500" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white">
                        {group.category}
                      </h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 mb-6">
                  {group.description}
                </p>

                {/* Pill Badges (NOT progress bars) */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-200 cursor-default select-none shadow-sm ${
                        skill.highlight
                          ? 'border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 font-semibold'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300'
                      } ${categoryAccents[group.category]}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Verified in production & research</span>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

