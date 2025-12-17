// src/pages/Terms.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Scale, CreditCard, Calendar, Image, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';

export default function Terms() {
  const { t } = useTranslation('terms');

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

  // Key points
  const keyPoints = [
    {
      icon: Calendar,
      title: t('keyPoints.booking.title'),
      description: t('keyPoints.booking.description'),
    },
    {
      icon: CreditCard,
      title: t('keyPoints.payment.title'),
      description: t('keyPoints.payment.description'),
    },
    {
      icon: Image,
      title: t('keyPoints.copyright.title'),
      description: t('keyPoints.copyright.description'),
    },
  ];

  // Table of contents
  const tableOfContents = [
    { id: 'services', title: t('toc.services') },
    { id: 'booking', title: t('toc.booking') },
    { id: 'payment', title: t('toc.payment') },
    { id: 'cancellation', title: t('toc.cancellation') },
    { id: 'copyright', title: t('toc.copyright') },
    { id: 'liability', title: t('toc.liability') },
    { id: 'changes', title: t('toc.changes') },
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
                <Scale className="w-8 h-8 text-gold-600 dark:text-gold-400" />
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

      {/* Key Points */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
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
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {point.description}
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
              {/* Acceptance */}
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="bg-gold-50 dark:bg-gold-900/20 border border-gold-200 dark:border-gold-800 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t('acceptance.title')}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {t('acceptance.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.section variants={fadeInUp} id="services" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.services.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.services.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.services.item1')}</li>
                    <li>{t('sections.services.item2')}</li>
                    <li>{t('sections.services.item3')}</li>
                    <li>{t('sections.services.item4')}</li>
                  </ul>
                  <p>{t('sections.services.note')}</p>
                </div>
              </motion.section>

              {/* Booking */}
              <motion.section variants={fadeInUp} id="booking" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.booking.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.booking.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.booking.item1')}</li>
                    <li>{t('sections.booking.item2')}</li>
                    <li>{t('sections.booking.item3')}</li>
                    <li>{t('sections.booking.item4')}</li>
                  </ul>
                </div>
              </motion.section>

              {/* Payment */}
              <motion.section variants={fadeInUp} id="payment" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.payment.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.payment.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.payment.item1')}</li>
                    <li>{t('sections.payment.item2')}</li>
                    <li>{t('sections.payment.item3')}</li>
                    <li>{t('sections.payment.item4')}</li>
                  </ul>
                  <p className="font-medium">{t('sections.payment.note')}</p>
                </div>
              </motion.section>

              {/* Cancellation */}
              <motion.section variants={fadeInUp} id="cancellation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.cancellation.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('sections.cancellation.byClient.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.cancellation.byClient.item1')}</li>
                    <li>{t('sections.cancellation.byClient.item2')}</li>
                    <li>{t('sections.cancellation.byClient.item3')}</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
                    {t('sections.cancellation.byPhotographer.title')}
                  </h3>
                  <p>{t('sections.cancellation.byPhotographer.description')}</p>
                </div>
              </motion.section>

              {/* Copyright */}
              <motion.section variants={fadeInUp} id="copyright" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.copyright.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.copyright.intro')}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('sections.copyright.photographer.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.copyright.photographer.item1')}</li>
                    <li>{t('sections.copyright.photographer.item2')}</li>
                    <li>{t('sections.copyright.photographer.item3')}</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
                    {t('sections.copyright.client.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.copyright.client.item1')}</li>
                    <li>{t('sections.copyright.client.item2')}</li>
                    <li>{t('sections.copyright.client.item3')}</li>
                  </ul>
                </div>
              </motion.section>

              {/* Liability */}
              <motion.section variants={fadeInUp} id="liability" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.liability.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.liability.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 ms-4">
                    <li>{t('sections.liability.item1')}</li>
                    <li>{t('sections.liability.item2')}</li>
                    <li>{t('sections.liability.item3')}</li>
                  </ul>
                  <p className="font-medium">{t('sections.liability.insurance')}</p>
                </div>
              </motion.section>

              {/* Changes */}
              <motion.section variants={fadeInUp} id="changes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sections.changes.title')}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{t('sections.changes.description')}</p>
                  <p>{t('sections.changes.notification')}</p>
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
                to="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {t('cta.privacy')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
