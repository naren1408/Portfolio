import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function AcademicJourney() {
  return (
    <section id="academics" className="relative py-16 sm:py-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Academics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              Academic{' '}
              <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              Where it all started and how it's going
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Desktop */}
        <div className="relative hidden md:block mb-12">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-[16.6%] right-[16.6%] h-0.5 bg-[#63b3ed] -translate-y-1/2" />
          
          {/* Dots */}
          <div className="flex justify-between px-[16.6%] relative z-10">
            {education.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                className="w-4 h-4 rounded-full bg-[#4299e1] border-4 border-white dark:border-dark-950 shadow-md ring-4 ring-blue-50 dark:ring-blue-900/20"
              />
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {education.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-blue-100 dark:border-blue-900/30 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Connecting Line for Mobile */}
                <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-blue-100 dark:bg-blue-900/30 md:hidden" />

                <div className="flex items-start gap-5">
                  {/* Icon Badge */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                    <FiBookOpen size={22} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white leading-tight mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 truncate">
                      {item.institution}
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        {item.grade}
                      </p>
                      <p className="text-sm text-dark-400 dark:text-dark-500">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
