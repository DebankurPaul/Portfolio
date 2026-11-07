import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Server, Code2, Sparkles } from 'lucide-react';
import { statsData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-white tracking-tight">
            Engineering Systems, Grounded in Research
          </h2>
        </div>

        {/* Small Stat Row (Exact requirement: 2 Research Internships · 3 Shipped Projects · 8.14 CGPA · National Semifinalist) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-center shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3-4 Sentence Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141417] shadow-sm">
              <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <span>About Debankur</span>
              </h3>
              
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
                <p>
                  I am a second-year <strong>B.Tech Computer Science and Engineering</strong> student at <strong>Dhemaji Engineering College</strong> (CGPA <strong>8.14</strong>), focused on architecting resilient full-stack applications and applied machine learning systems.
                </p>
                <p>
                  My research trajectory spans two premier National Institutes of Technology: building deep learning audio signal transcription pipelines at <strong>NIT Silchar</strong> (funded by the <em>IKS Division, Ministry of Education, Govt. of India</em>) and engineering multilingual NLP caption databases at <strong>NIT Kurukshetra</strong>.
                </p>
                <p>
                  On the competitive engineering front, I achieved <strong>National Semifinalist</strong> honors at the prestigious <strong>DRISTI NE Hackathon 2026 (IIM Shillong)</strong> for designing <em>Nexus-AI</em>, an explainable geospatial intelligence platform with XGBoost, SHAP, and PostGIS.
                </p>
                <p>
                  I thrive at the intersection of robust backend engineering—building high-throughput FastAPI microservices, containerizing reproducible workflows with Docker, and pairing them with sleek, reactive user interfaces.
                </p>
              </div>

              {/* Academic Details Pill */}
              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>Dhemaji Engineering College, Assam</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                  <span>Batch of 2027 · CGPA 8.14</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Feature 1: Dual Research Internships */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#141417]/80 backdrop-blur-sm transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-zinc-900 dark:text-white">
                    2 NIT Research Internships
                  </h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Govt-funded deep learning audio research at <strong>NIT Silchar</strong> (IKS Division, MoE) & multilingual NLP corpora development at <strong>NIT Kurukshetra</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Hackathon Recognition */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#141417]/80 backdrop-blur-sm transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-zinc-900 dark:text-white">
                    National Semifinalist · IIM Shillong
                  </h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Recognized at the nationwide <strong>DRISTI NE Hackathon 2026</strong> for building Nexus-AI with explainable AI and spatial intelligence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Systems & Production Delivery */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#141417]/80 backdrop-blur-sm transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-1">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-zinc-900 dark:text-white">
                    Production Systems Mindset
                  </h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Proven track record containerizing asynchronous FastAPI backends, integrating third-party APIs (VirusTotal), and shipping live to cloud platforms.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
