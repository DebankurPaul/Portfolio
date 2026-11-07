import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Industry cloud credentials and national-level hackathon recognitions.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item, idx) => {
            const isCert = item.type === 'Certification';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="p-7 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141417] shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-2xl ${
                      isCert 
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20' 
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    }`}>
                      {isCert ? <Cloud className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.issuer}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Footer */}
                <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{item.badgeText}</span>
                  </span>

                  <span className="text-xs text-zinc-400 font-mono">
                    {isCert ? 'Oracle Verified' : 'IIM Shillong'}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
