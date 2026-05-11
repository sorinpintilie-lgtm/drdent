import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as LinkIcon, Phone, Clock, Calendar } from 'lucide-react';
import { scrollToTop } from '@/utils/scroll';

/**
 * Enhanced Footer component with comprehensive sections
 * Mobile-first responsive design with back-to-top functionality
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <footer className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About / Logo Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <img
                src="/images/logo-color.svg"
                alt="Dr.Dent Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Îngrijire dentară profesională cu echipamente moderne și o echipă dedicată sănătății tale orale.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.facebook.com/drdent.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/drdent.ro/?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
              <LinkIcon className="w-5 h-5" />
              <span>Link-uri Rapide</span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Acasă
              </Link>
              <Link
                to="/servicii"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Servicii
              </Link>
              <Link
                to="/preturi"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Tarife
              </Link>
              <Link
                to="/despre-noi"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Echipa Noastră
              </Link>
              <Link
                to="/faq"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Întrebări Frecvente
              </Link>
              <Link
                to="/resources"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Resurse
              </Link>
              <Link
                to="/contact"
                className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
              >
                → Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </h3>
            <div className="space-y-3 text-white/80">
              <a
                href="tel:+40726530591"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0726 530 591</span>
              </a>
              <a
                href="tel:+40724055872"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0724 055 872</span>
              </a>
              <a
                href="mailto:programare@drdent.ro"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>programare@drdent.ro</span>
              </a>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm leading-relaxed">
                  Strada Arh. Ionescu Grigore Nr.100<br />
                  bl. 34, sc. 1, ap. 2, interfon 02<br />
                  sector 2, București
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Program</span>
            </h3>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex justify-between items-center py-1">
                <span>Luni</span>
                <span className="font-semibold text-white">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Marți</span>
                <span className="font-semibold text-white">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Miercuri</span>
                <span className="font-semibold text-white">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Joi</span>
                <span className="font-semibold text-white">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Vineri</span>
                <span className="font-semibold text-white">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Sâmbătă</span>
                <span className="font-semibold text-white">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Duminică</span>
                <span className="font-semibold text-red-300">Închis</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Detalii de contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            © {currentYear} Dr.Dent. Toate drepturile rezervate.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link to="/politica-confidentialitate" className="hover:text-white transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link to="/politica-cookies" className="hover:text-white transition-colors">
              Politica de Cookies
            </Link>
            <Link to="/termenii-conditii" className="hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="border-t border-white/20 pt-6 mt-6 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-2">
            Powered by
            <a
              href="https://visualmarketing.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/sky_logo.png"
                alt="Sky Logo"
                className="h-12 w-auto"
              />
            </a>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl z-30 flex items-center justify-center transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Înapoi sus"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}

export default Footer;
