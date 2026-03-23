import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCode, FiAward, FiCheck, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: FiCode, label: 'Problems Solved', value: '100+' },
  { icon: FiAward, label: 'Certificates', value: '5' },
];

export default function About() {
  // Split the about text for better readability if it's long
  const aboutParagraphs = personalInfo.about.split('. ').map(p => p.trim()).filter(p => p);

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Introduction
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image & Stats Column */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left" className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group w-full max-w-[400px]"
              >
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-primary-500 to-primary-300 opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-700" />
                <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 border-white/50 dark:border-dark-700/50 shadow-2xl">
                  <img 
                    src="/profile.png" 
                    alt="Sai Naren" 
                    className="w-full h-full object-cover bg-white dark:bg-dark-800 transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://ui-avatars.com/api/?name=Sai+Naren&size=400&background=6366f1&color=fff";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating Map Badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -bottom-4 -right-4 px-6 py-3 rounded-2xl bg-white/90 dark:bg-dark-900/90 backdrop-blur shadow-xl border border-dark-100 dark:border-dark-700 flex items-center gap-3 z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                    <FiMapPin size={16} />
                  </div>
                  <span className="text-sm font-bold text-dark-800 dark:text-dark-100">
                    {personalInfo.location || "India"}
                  </span>
                </motion.div>
              </motion.div>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-6 rounded-3xl bg-white/50 dark:bg-dark-800/40 backdrop-blur border border-dark-100 dark:border-dark-700/50 shadow-sm flex flex-col items-center text-center group hover:border-primary-500/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-bold text-dark-900 dark:text-white">{value}</span>
                    <span className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Detailed Content Column */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white leading-tight">
                  Passionate Developer Building <span className="text-primary-500">Intelligent Solutions</span>
                </h3>
                
                <div className="space-y-4">
                  {aboutParagraphs.map((para, i) => (
                    <p key={i} className="text-base sm:text-lg text-dark-600 dark:text-dark-300 leading-relaxed font-medium">
                      {para}{i < aboutParagraphs.length - 1 ? '.' : ''}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Features/Highlights List */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Full-stack Web Development",
                  "Machine Learning Specialist",
                  "Clean & Scalable Code",
                  "Problem Solving Expertise",
                  "Competitive Programmer",
                  "Continuous Learner"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <FiCheck size={14} />
                    </div>
                    <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Action Buttons Column */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Email Chip */}
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark-50/50 dark:bg-dark-900/50 border border-dark-200/50 dark:border-dark-700/50 shadow-inner group">
                  <FiMail className="text-primary-500 flex-shrink-0" size={18} />
                  <span className="font-mono text-sm text-dark-600 dark:text-dark-400 select-all truncate max-w-[200px] sm:max-w-none">
                    {personalInfo.email}
                  </span>
                </div>

                {/* CV Download Button */}
                <motion.a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-500 text-white font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition-all text-sm"
                >
                  <FiDownload size={18} />
                  Download CV
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
