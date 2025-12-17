// src/pages/About.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Camera,
  Award,
  Users,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';

import { team as teamImages, about } from '../assets/images';

export default function About() {
  const { t } = useTranslation('about');

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

  // Statistics
  const stats = [
    {
      icon: Award,
      number: '10+',
      label: t('stats.experience'),
      suffix: t('stats.years'),
    },
    {
      icon: Users,
      number: '500+',
      label: t('stats.clients'),
      suffix: '',
    },
    {
      icon: Camera,
      number: '1000+',
      label: t('stats.projects'),
      suffix: '',
    },
    {
      icon: Star,
      number: '4.9',
      label: t('stats.rating'),
      suffix: '/5',
    },
  ];

  // Core values
  const values = [
    {
      icon: Heart,
      title: t('values.passion.title'),
      description: t('values.passion.description'),
      color: 'rose',
    },
    {
      icon: Zap,
      title: t('values.creativity.title'),
      description: t('values.creativity.description'),
      color: 'amber',
    },
    {
      icon: Target,
      title: t('values.precision.title'),
      description: t('values.precision.description'),
      color: 'blue',
    },
    {
      icon: Sparkles,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
      color: 'purple',
    },
  ];

  // Team members
  const team = [
    {
      name: t('team.photographer.name'),
      role: t('team.photographer.role'),
      image: teamImages.thomas,
      bio: t('team.photographer.bio'),
      social: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: t('team.assistant1.name'),
      role: t('team.assistant1.role'),
      image: teamImages.sarah,
      bio: t('team.assistant1.bio'),
      social: {
        instagram: 'https://instagram.com',
      },
    },
    {
      name: t('team.assistant2.name'),
      role: t('team.assistant2.role'),
      image: teamImages.michael,
      bio: t('team.assistant2.bio'),
      social: {
        instagram: 'https://instagram.com',
      },
    },
  ];

  // Achievements
  const achievements = [
    {
      year: '2023',
      title: t('achievements.achievement1.title'),
      description: t('achievements.achievement1.description'),
    },
    {
      year: '2022',
      title: t('achievements.achievement2.title'),
      description: t('achievements.achievement2.description'),
    },
    {
      year: '2021',
      title: t('achievements.achievement3.title'),
      description: t('achievements.achievement3.description'),
    },
    {
      year: '2020',
      title: t('achievements.achievement4.title'),
      description: t('achievements.achievement4.description'),
    },
  ];

  // Why choose us
  const reasons = [
    {
      icon: CheckCircle,
      text: t('whyChoose.reason1'),
    },
    {
      icon: CheckCircle,
      text: t('whyChoose.reason2'),
    },
    {
      icon: CheckCircle,
      text: t('whyChoose.reason3'),
    },
    {
      icon: CheckCircle,
      text: t('whyChoose.reason4'),
    },
    {
      icon: CheckCircle,
      text: t('whyChoose.reason5'),
    },
    {
      icon: CheckCircle,
      text: t('whyChoose.reason6'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Pattern */}
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
              className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 start-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 end-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                    <span className="text-xl text-gold-600 dark:text-gold-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={about.story}
                  alt={t('story.imageAlt')}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative element - RTL aware */}
              <div className="absolute -bottom-6 ltr:-right-6 rtl:-left-6 w-48 h-48 bg-gold-500 rounded-2xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200">
                  {t('story.badge')}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {t('story.title')}
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 bg-gold-600 dark:bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-600 transition-colors duration-200"
                >
                  {t('story.cta')}
                  <ArrowRight className="w-5 h-5 ms-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              {t('values.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('values.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              {t('team.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('team.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 start-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold-300">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {/* Social links - RTL aware */}
                  <div className="flex gap-3">
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-500 hover:text-white transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-500 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('achievements.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('achievements.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline line - RTL aware */}
            <div className="absolute top-0 bottom-0 start-8 w-0.5 bg-gold-200 dark:bg-gold-900/30 hidden md:block" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative flex gap-6 md:gap-8 items-start"
                >
                  {/* Year badge - RTL aware */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold-600 dark:bg-gold-500 flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {achievement.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              {t('whyChoose.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('whyChoose.description')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mt-1">
                    <Icon className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {reason.text}
                  </p>
                </motion.div>
              );
            })}
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                {t('cta.contact')}
                <ArrowRight className="w-5 h-5 ms-2" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gold-700 transition-all duration-200"
              >
                {t('cta.portfolio')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
