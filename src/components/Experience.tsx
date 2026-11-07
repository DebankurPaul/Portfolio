import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-50/50 dark:bg-black/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Research & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-white tracking-tight">
            Academic & Research Internships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Rigorous computational research at premier National Institutes of Technology in artificial intelligence, deep learning, and NLP.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-12">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#0f0f0f] border-4 border-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/30">
                <div className="w-2 h-2 rounded-full bg-indigo-600" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141417] shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Header Row: Role & Organization */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="mt-1 text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Govt Funding Badge (if applicable) */}
                {exp.funding && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{exp.funding}</span>
                  </div>
                )}

                {/* Supervisor / Mentors info (if applicable) */}
                {exp.supervisors && (
                  <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    <UserCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{exp.supervisors}</span>
                  </div>
                )}

                {/* Project Description */}
                <p className="mt-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Associated Skills */}
                <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
