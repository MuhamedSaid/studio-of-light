// src/components/common/Footer.jsx

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  // Quick links for navigation
  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.portfolio'), href: '/portfolio' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  // Services offered
  const services = [
    { name: t('footer.servicesOffered.weddings'), href: '/services#weddings' },
    {
      name: t('footer.servicesOffered.portraits'),
      href: '/services#portraits',
    },
    { name: t('footer.servicesOffered.events'), href: '/services#events' },
    {
      name: t('footer.servicesOffered.commercial'),
      href: '/services#commercial',
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
      ariaLabel: 'Follow us on Instagram',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
      ariaLabel: 'Follow us on Facebook',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
      ariaLabel: 'Follow us on Twitter',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      ariaLabel: 'Follow us on LinkedIn',
    },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      label: t('footer.email'),
      value: t('footer.emailValue'),
      href: `mailto:${t('footer.emailValue')}`,
    },
    {
      icon: Phone,
      label: t('footer.phone'),
      value: t('footer.phoneValue'),
      href: `tel:${t('footer.phoneValue')}`,
    },
    {
      icon: MapPin,
      label: t('footer.address'),
      value: t('footer.addressValue'),
      href: null,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-gray-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
            >
              {t('nav.logo')}
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                {t('footer.followUs')}
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-500 hover:text-white dark:hover:bg-gold-600 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" strokeWidth={2} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon
                    className="w-5 h-5 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('footer.copyright', { year: currentYear })}
              </p>
              <span className="hidden md:inline text-gray-400">•</span>
              <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                Portfolio Demo Project
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
              >
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
