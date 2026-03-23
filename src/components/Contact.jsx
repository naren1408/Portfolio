import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCheck, FiAlertCircle, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 ${errors[field]
      ? 'border-red-400 dark:border-red-500'
      : 'border-dark-200 dark:border-dark-700 focus:border-primary-400 dark:focus:border-primary-500'
    }`;

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location || 'India', href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              Let's{' '}
              <span className="text-gradient">Connect</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                Get in Touch
              </h3>
            </ScrollReveal>

            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <ScrollReveal key={label} direction="left" delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-dark-400 dark:text-dark-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-dark-700 dark:text-dark-200">{value}</p>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Social Links */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="pt-6">
                <p className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-4">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 text-dark-500 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500 hover:border-primary-200 dark:hover:border-primary-500/20 transition-all shadow-sm"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 shadow-sm">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-4"
                    >
                      <FiCheck size={28} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClasses('name')}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                            <FiAlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClasses('email')}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                            <FiAlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className={inputClasses('subject')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        className={`${inputClasses('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                          <FiAlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(99,102,241,0.25)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/20 transition-all"
                      >
                        <FiSend size={16} />
                        Send Message
                      </motion.button>
                      <p className="mt-4 text-xs text-dark-400 dark:text-dark-500 pl-1">
                        "Always open to discussing new opportunities. 🚀"
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Merged Footer Section */}
      <footer className="mt-16 pb-8 relative z-10 w-full flex justify-center text-center">
        <p className="text-xs text-dark-400 dark:text-dark-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Sai Naren. Built with passion and a lot of debugging.
        </p>
      </footer>
    </section>
  );
}
