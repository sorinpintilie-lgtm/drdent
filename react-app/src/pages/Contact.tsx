import { MapPin, Phone, Mail, Clock, AlertCircle, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

/**
 * Contact Page Component
 * Contact information and form
 */
function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Contact DrDent București Sector 2 | Programări</title>
        <meta name="description" content="Datele de contact DrDent din București, Sector 2: adresă, telefon, email, program și formular pentru programări stomatologice." />
        <link rel="canonical" href="https://drdent.ro/contact" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Contact DrDent București Sector 2 | Programări" />
        <meta property="og:description" content="Datele de contact DrDent din București, Sector 2: adresă, telefon, email, program și formular pentru programări stomatologice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drdent.ro/contact" />
        <meta property="og:locale" content="ro_RO" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contactați-ne
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Suntem aici să vă răspundem la întrebări și să vă programăm
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Address */}
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Locație</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strada Arh. Ionescu Grigore Nr.100<br />
                bl. 34, sc. 1, ap. 2, interfon 02<br />
                sector 2, București
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Telefon</h3>
              <a href="tel:+40726530591" className="text-primary-600 hover:text-primary-700 font-semibold">
                0726 530 591
              </a>
              <br></br>
              <a href="tel:+40724055872" className="text-primary-600 hover:text-primary-700 font-semibold">
                0724 055 872
              </a>
              
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Email</h3>
              <a href="mailto:programare@drdent.ro" className="text-primary-600 hover:text-primary-700 font-semibold">
                programare@drdent.ro
              </a>
            </div>

            {/* Hours */}
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Luni - Vineri: 09:00 - 20:00<br />
                Sâmbătă: 09:00 - 14:00<br />
                Duminică: Închis
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                Trimiteți-ne un mesaj
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Ion Popescu"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="0712 345 678"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="ion.popescu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cum vă putem ajuta?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Trimite mesajul
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Prin trimiterea acestui formular, sunteți de acord cu{' '}
                <a href="/politica-confidentialitate" className="text-primary-600 hover:text-primary-700 underline">
                  Politica de confidențialitate
                </a>{' '}
                și{' '}
                <a href="/politica-cookies" className="text-primary-600 hover:text-primary-700 underline">
                  Politica de cookies
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-16 h-16 text-red-600" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Urgență dentară?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Pentru urgențe dentare, sunați imediat la numărul nostru de telefon.
            </p>
            <a
              href="tel:+40726530591"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Sună Acum: 0726 530 591
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
