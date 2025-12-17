// src/pages/Services.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';
import {
  Heart,
  Users,
  Camera,
  Award,
  CheckCircle,
  Phone,
  Clock,
  MapPin,
  Star,
  Package,
  Zap,
  Shield,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import ScrollToTop from '../components/common/ScrollToTop';

import { portfolio } from '../assets/images';

export default function Services() {
  const { t } = useTranslation('services');

  // Handle hash scroll on page load and hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Scroll on mount if hash exists
    scrollToHash();

    // Listen for hash changes (for same-page navigation)
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  // Contact information (you'll need to update these)
  const PHONE_NUMBER = '+201234567890'; // Update with actual number
  const WHATSAPP_NUMBER = '201234567890'; // Without + or spaces

  // Helper function to create WhatsApp link with pre-filled message
  const getWhatsAppLink = (serviceName) => {
    const message = encodeURIComponent(
      t('whatsapp.message', { service: serviceName })
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  // Services data
  const services = [
    {
      id: 'weddings',
      icon: Heart,
      title: t('services.weddings.title'),
      description: t('services.weddings.description'),
      image: portfolio.weddings[1],
      features: [
        t('services.weddings.features.0'),
        t('services.weddings.features.1'),
        t('services.weddings.features.2'),
        t('services.weddings.features.3'),
        t('services.weddings.features.4'),
      ],
      color: 'rose',
    },
    {
      id: 'portraits',
      icon: Users,
      title: t('services.portraits.title'),
      description: t('services.portraits.description'),
      image: portfolio.portraits[2],
      features: [
        t('services.portraits.features.0'),
        t('services.portraits.features.1'),
        t('services.portraits.features.2'),
        t('services.portraits.features.3'),
        t('services.portraits.features.4'),
      ],
      color: 'blue',
    },
    {
      id: 'events',
      icon: Camera,
      title: t('services.events.title'),
      description: t('services.events.description'),
      image: portfolio.events[1],
      features: [
        t('services.events.features.0'),
        t('services.events.features.1'),
        t('services.events.features.2'),
        t('services.events.features.3'),
        t('services.events.features.4'),
      ],
      color: 'purple',
    },
    {
      id: 'commercial',
      icon: Award,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      image: portfolio.portraits[1],
      features: [
        t('services.commercial.features.0'),
        t('services.commercial.features.1'),
        t('services.commercial.features.2'),
        t('services.commercial.features.3'),
        t('services.commercial.features.4'),
      ],
      color: 'amber',
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      icon: FaWhatsapp,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: '02',
      icon: Calendar,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: '03',
      icon: Camera,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      number: '04',
      icon: Package,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    },
  ];

  // Why choose us
  const benefits = [
    {
      icon: Zap,
      title: t('benefits.professional.title'),
      description: t('benefits.professional.description'),
    },
    {
      icon: Shield,
      title: t('benefits.flexible.title'),
      description: t('benefits.flexible.description'),
    },
    {
      icon: Clock,
      title: t('benefits.timely.title'),
      description: t('benefits.timely.description'),
    },
    {
      icon: Star,
      title: t('benefits.satisfaction.title'),
      description: t('benefits.satisfaction.description'),
    },
  ];

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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10"
            >
              {t('hero.description')}
            </motion.p>

            {/* Quick Contact Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp.generalMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="w-5 h-5 me-2" />
                {t('hero.cta.whatsapp')}
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 dark:bg-gold-500 hover:bg-gold-700 dark:hover:bg-gold-600 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 me-2" />
                {t('hero.cta.call')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={fadeInUp}
                  className={`flex flex-col scroll-mt-24 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200 text-sm font-medium mb-4">
                      <Icon className="w-4 h-4 me-2" />
                      {service.title}
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Contact Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        <FaWhatsapp className="w-5 h-5 me-2" />
                        {t('cta.whatsapp')}
                      </a>
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors"
                      >
                        <Phone className="w-5 h-5 me-2" />
                        {t('cta.call')}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('process.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('process.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Connection Line - RTL Fixed */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 ltr:left-full rtl:right-full w-full h-0.5 bg-gradient-to-r ltr:from-gold-600 rtl:from-transparent ltr:to-transparent rtl:to-gold-600 dark:ltr:from-gold-400 dark:rtl:to-gold-400" />
                  )}

                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-4">
                      <Icon className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                      <div className="absolute -top-2 ltr:-right-2 rtl:-left-2 w-8 h-8 rounded-full bg-gold-600 dark:bg-gold-500 flex items-center justify-center text-white text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('benefits.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('benefits.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-4">
                    <Icon className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-6">
                <MapPin className="w-6 h-6 text-gold-600 dark:text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('location.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('location.description')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  {t('location.areas.0')}
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  {t('location.areas.1')}
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  {t('location.areas.2')}
                </li>
              </ul>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-6">
                <Clock className="w-6 h-6 text-gold-600 dark:text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('availability.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('availability.description')}
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('availability.weekdays')}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t('availability.weekdaysTime')}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('availability.weekends')}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t('availability.weekendsTime')}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gold-600 to-gold-700 dark:from-gold-700 dark:to-gold-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
            >
              {t('cta.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gold-100 mb-10"
            >
              {t('cta.description')}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp.generalMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 me-2" />
                {t('cta.whatsapp')}
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gold-700 transition-all"
              >
                <Phone className="w-5 h-5 me-2" />
                {t('cta.call')}
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gold-700 transition-all"
              >
                {t('cta.portfolio')}
                <ArrowRight className="w-5 h-5 ms-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
