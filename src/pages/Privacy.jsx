// src/pages/Privacy.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';

export default function Privacy() {
  const { t } = useTranslation('privacy');

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Privacy highlights
  const highlights = [
    {
      icon: Lock,
      title: t('highlights.secure.title'),
      description: t('highlights.secure.description'),
    },
    {
      icon: Eye,
      title: t('highlights.transparent.title'),
      description: t('highlights.transparent.description'),
    },
    {
      icon: UserCheck,
      title: t('highlights.rights.title'),
      description: t('highlights.rights.description'),
    },
  ];

  // Table of contents
  const tableOfContents = [
    { id: 'information', title: t('toc.information') },
    { id: 'usage', title: t('toc.usage') },
    { id: 'cookies', title: t('toc.cookies') },
    { id: 'thirdparty', title: t('toc.thirdparty') },
    { id: 'security', title: t('toc.security') },
    { id: 'rights', title: t('toc.rights') },
    { id: 'contact', title: t('toc.contact') },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-6">
                <Shield className="w-8 h-8 text-gold-600 dark:text-gold-400" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-4"
            >
              {t('hero.description')}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {t('hero.lastUpdated')}: {new Date().toLocaleDateString()}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {t('toc.title')}
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-3 prose prose-gray dark:prose-invert max-w-none"
            >
              {/* Information Collection */}
              <motion.section variants={fadeInUp} id="information" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  {t('sections.information.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.information.intro')}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    {t('sections.information.personal.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.information.personal.item1')}</li>
                    <li>{t('sections.information.personal.item2')}</li>
                    <li>{t('sections.information.personal.item3')}</li>
                    <li>{t('sections.information.personal.item4')}</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    {t('sections.information.automatic.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.information.automatic.item1')}</li>
                    <li>{t('sections.information.automatic.item2')}</li>
                    <li>{t('sections.information.automatic.item3')}</li>
                  </ul>
                </div>
              </motion.section>

              {/* Usage */}
              <motion.section variants={fadeInUp} id="usage" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.usage.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.usage.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.usage.item1')}</li>
                    <li>{t('sections.usage.item2')}</li>
                    <li>{t('sections.usage.item3')}</li>
                    <li>{t('sections.usage.item4')}</li>
                    <li>{t('sections.usage.item5')}</li>
                  </ul>
                </div>
              </motion.section>

              {/* Cookies */}
              <motion.section variants={fadeInUp} id="cookies" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.cookies.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.cookies.intro')}</p>
                  <p>{t('sections.cookies.types')}</p>
                  <p>{t('sections.cookies.control')}</p>
                </div>
              </motion.section>

              {/* Third Party */}
              <motion.section variants={fadeInUp} id="thirdparty" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.thirdparty.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.thirdparty.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.thirdparty.item1')}</li>
                    <li>{t('sections.thirdparty.item2')}</li>
                    <li>{t('sections.thirdparty.item3')}</li>
                  </ul>
                  <p>{t('sections.thirdparty.note')}</p>
                </div>
              </motion.section>

              {/* Security */}
              <motion.section variants={fadeInUp} id="security" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.security.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.security.intro')}</p>
                  <p>{t('sections.security.measures')}</p>
                </div>
              </motion.section>

              {/* Your Rights */}
              <motion.section variants={fadeInUp} id="rights" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.rights.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.rights.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.rights.item1')}</li>
                    <li>{t('sections.rights.item2')}</li>
                    <li>{t('sections.rights.item3')}</li>
                    <li>{t('sections.rights.item4')}</li>
                    <li>{t('sections.rights.item5')}</li>
                  </ul>
                </div>
              </motion.section>

              {/* Contact */}
              <motion.section variants={fadeInUp} id="contact" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.contact.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.contact.intro')}</p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <p className="font-medium text-gray-900 dark:text-white mb-2">
                      {t('sections.contact.companyName')}
                    </p>
                    <p>{t('sections.contact.email')}: hello@thomasphotography.com</p>
                    <p>{t('sections.contact.phone')}: +1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('cta.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              {t('cta.description')}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold-600 dark:bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-600 transition-colors"
              >
                {t('cta.contact')}
              </Link>
              <Link
                to="/terms"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {t('cta.terms')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
