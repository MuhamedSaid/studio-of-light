// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Camera,
  Heart,
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import ScrollToTop from '../components/common/ScrollToTop';
import { portfolio, team } from '../assets/images';

export default function Home() {
  const { t } = useTranslation('home');

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

  // Services data
  const services = [
    {
      icon: Heart,
      title: t('services.weddings.title'),
      description: t('services.weddings.description'),
      image: portfolio.weddings[0],
    },
    {
      icon: Users,
      title: t('services.portraits.title'),
      description: t('services.portraits.description'),
      image: portfolio.portraits[0],
    },
    {
      icon: Camera,
      title: t('services.events.title'),
      description: t('services.events.description'),
      image: portfolio.events[0],
    },
    {
      icon: Award,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      image: portfolio.portraits[6],
    },
  ];

  // Features/Stats
  const features = [
    {
      icon: Award,
      number: '10+',
      label: t('stats.experience'),
    },
    {
      icon: Users,
      number: '500+',
      label: t('stats.clients'),
    },
    {
      icon: Camera,
      number: '1000+',
      label: t('stats.projects'),
    },
    {
      icon: Star,
      number: '4.9',
      label: t('stats.rating'),
    },
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: t('whyChoose.professional.title'),
      description: t('whyChoose.professional.description'),
    },
    {
      icon: CheckCircle,
      title: t('whyChoose.creative.title'),
      description: t('whyChoose.creative.description'),
    },
    {
      icon: CheckCircle,
      title: t('whyChoose.reliable.title'),
      description: t('whyChoose.reliable.description'),
    },
    {
      icon: CheckCircle,
      title: t('whyChoose.passionate.title'),
      description: t('whyChoose.passionate.description'),
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      content: t('testimonials.client1.content'),
      rating: 5,
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      content: t('testimonials.client2.content'),
      rating: 5,
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      content: t('testimonials.client3.content'),
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200">
                <Camera className="w-4 h-4 me-2" />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('hero.title')}
              <span className="block text-gold-600 dark:text-gold-400 mt-2">
                {t('hero.subtitle')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-8 py-4 bg-gold-600 dark:bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.cta.portfolio')}
                <ArrowRight className="ms-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-gold-600 dark:hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
              >
                {t('hero.cta.contact')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-gold-600 dark:text-gold-400" />
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              {t('servicesSection.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('servicesSection.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-gold-600 dark:text-gold-400 font-medium text-sm group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors"
                    >
                      {t('servicesSection.learnMore')}
                      <ArrowRight className="ms-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gold-600 dark:bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-600 transition-colors duration-200"
            >
              {t('servicesSection.viewAll')}
              <ArrowRight className="ms-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={team.thomas}
                  alt="Professional photographer at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500 rounded-2xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {t('whyChooseSection.title')}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                {t('whyChooseSection.description')}
              </motion.p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mt-1">
                        <Icon className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={fadeInUp} className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-gold-600 dark:bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-600 transition-colors duration-200"
                >
                  {t('whyChooseSection.cta')}
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {t('testimonialsSection.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('testimonialsSection.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
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
              {t('ctaSection.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gold-100 mb-10"
            >
              {t('ctaSection.description')}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <Clock className="me-2 w-5 h-5" />
                {t('ctaSection.cta')}
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gold-700 transition-all duration-200"
              >
                {t('ctaSection.portfolio')}
                <ArrowRight className="ms-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
