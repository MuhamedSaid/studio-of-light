import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import Home from '@pages/Home';
import About from '@pages/About';
import Portfolio from '@pages/Portfolio';
import Services from '@pages/Services';
import Contact from '@pages/Contact';
import Privacy from '@pages/Privacy';
import Terms from '@pages/Terms';
import NotFound from '@pages/NotFound';
import ScrollToTop from '@components/common/ScrollToTop';

import { ThemeProvider } from './contexts/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.dir();
    // Also update lang attribute
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
