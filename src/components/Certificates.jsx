import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiBriefcase, FiX, FiMaximize2 } from 'react-icons/fi';
import { certificates } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [viewMode, setViewMode] = useState('image'); // 'image' or 'pdf'

  const openModal = (cert, mode) => {
    setSelectedCert(cert);
    setViewMode(mode);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificates" className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Certificates
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              My <span className="text-gradient">Achievements</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              Professional certifications and courses I have completed to enhance my skills.
            </p>
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <ScrollReveal key={cert.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group h-full flex flex-col bg-white dark:bg-dark-800/80 rounded-3xl overflow-hidden border border-dark-100 dark:border-dark-700/50 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-500"
              >
                {/* Image Section */}
                <div 
                  className="relative h-48 sm:h-56 overflow-hidden cursor-pointer"
                  onClick={() => openModal(cert, 'image')}
                >
                  <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Icon overlay */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-900/90 backdrop-blur shadow-lg flex items-center justify-center text-primary-500">
                    <FiAward size={20} />
                  </div>
                  {/* Hover View Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-dark-900/20 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 bg-white/90 dark:bg-dark-900/90 px-4 py-2 rounded-full text-primary-500 font-semibold shadow-xl">
                      <FiMaximize2 size={16} />
                      <span>Preview Image</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-sm text-dark-600 dark:text-dark-300">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                        <FiBriefcase size={14} />
                      </div>
                      <span className="font-medium">{cert.org}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-dark-600 dark:text-dark-300">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                        <FiCalendar size={14} />
                      </div>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 text-dark-900 dark:text-white text-sm font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 group/btn"
                  >
                    View Certificate
                    <FiExternalLink className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-dark-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              style={{ maxHeight: '90vh' }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-dark-100 dark:border-dark-800">
                <div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {selectedCert.org} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-500 dark:text-dark-400 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto bg-dark-50 dark:bg-dark-950/50 flex items-center justify-center p-4">
                {viewMode === 'image' ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                ) : (
                  <iframe
                    src={selectedCert.url}
                    className="w-full h-full min-h-[500px] md:min-h-[600px] rounded-lg border-none"
                    title={selectedCert.title}
                  />
                )}
              </div>

              {/* Modal Footer / Download */}
              <div className="p-4 md:p-6 bg-white dark:bg-dark-900 border-t border-dark-100 dark:border-dark-800 flex justify-end">
                <a
                  href={selectedCert.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  Download Certificate
                  <FiExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
