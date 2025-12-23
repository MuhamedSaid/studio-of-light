// src/components/common/Navbar.jsx

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import logoEn from '../../assets/icons/logo-en.png';
import logoAr from '../../assets/icons/logo-ar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation('common');

  // Get current language logo
  const currentLogo = i18n.language === 'ar' ? logoAr : logoEn;

  // Navigation items - now updates when translations change
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.portfolio'), href: '/portfolio' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-blur shadow-md' : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <motion.img
                key={i18n.language}
                src={currentLogo}
                alt="Studio of Light"
                className="h-14 md:h-16 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`navbar-link font-medium ${
                    location.pathname === item.href
                      ? 'text-gold-600 dark:text-gold-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600 dark:bg-gold-400"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-200"
                aria-label={
                  isOpen
                    ? t('accessibility.closeMenu')
                    : t('accessibility.openMenu')
                }
              >
                {isOpen ? (
                  <X className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Language Switcher in Mobile Menu */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
