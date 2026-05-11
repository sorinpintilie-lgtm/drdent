import { Helmet } from 'react-helmet-async';

function CookiePolicy() {
  return (
    <div className="min-h-screen pt-20 relative z-0">
      <Helmet>
        <title>Politica de cookies - dr.dent</title>
        <meta name="description" content="Politica de cookies a cabinetului stomatologic dr.dent din București." />
        <link rel="canonical" href="https://drdent.ro/politica-cookies" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Politica de cookies - dr.dent" />
        <meta property="og:description" content="Politica de cookies a cabinetului stomatologic dr.dent din București." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drdent.ro/politica-cookies" />
        <meta property="og:locale" content="ro_RO" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
            Politica de cookies
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-2">
            Gestionarea cookie-urilor pe site-ul nostru
          </p>
        </div>
      </section>

      <section className="section bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-gray-600 mb-6"><strong>Ultima actualizare: 11.05.2026</strong></p>
            
            <p>Această Politică de cookies explică modul în care site-ul drdent.ro poate utiliza cookie-uri și tehnologii similare.</p>
            <p>Site-ul drdent.ro este un site de prezentare pentru servicii stomatologice și nu funcționează ca magazin online.</p>

            <h2>1. Ce sunt cookie-urile</h2>
            <p>Cookie-urile sunt fișiere mici plasate pe dispozitivul utilizatorului atunci când acesta accesează un site web. Acestea pot ajuta la funcționarea corectă a site-ului, la memorarea unor preferințe sau la încărcarea anumitor servicii externe.</p>

            <h2>2. Ce tipuri de cookie-uri putem folosi</h2>
            <p>Site-ul poate folosi următoarele categorii de cookie-uri:</p>
            <h3>Cookie-uri necesare</h3>
            <p>Acestea sunt necesare pentru funcționarea corectă a site-ului și nu pot fi dezactivate din sistemele noastre.</p>
            <h3>Cookie-uri de funcționalitate</h3>
            <p>Acestea pot fi folosite pentru afișarea corectă a unor elemente de pe site, cum ar fi harta locației cabinetului.</p>
            <h3>Cookie-uri ale serviciilor externe</h3>
            <p>Site-ul poate include servicii externe, precum Google Maps, pentru afișarea locației cabinetului. Aceste servicii pot plasa propriile cookie-uri sau pot colecta date tehnice atunci când sunt încărcate în pagină.</p>

            <h2>3. Google Maps</h2>
            <p>Pe site poate fi integrată o hartă Google Maps pentru a facilita identificarea locației cabinetului.</p>
            <p>Prin utilizarea acestei funcționalități, este posibil ca anumite date tehnice să fie transmise către Google, conform politicilor proprii ale acestui furnizor.</p>

            <h2>4. Folosim cookie-uri de marketing?</h2>
            <p>În prezent, site-ul drdent.ro nu este gândit ca magazin online și nu folosește cookie-uri pentru procesarea comenzilor sau plăților online.</p>
            <p>Dacă în viitor vor fi implementate servicii precum Google Analytics, Meta Pixel sau alte instrumente de marketing, această politică va fi actualizată corespunzător.</p>

            <h2>5. Cum puteți controla cookie-urile</h2>
            <p>Puteți controla sau șterge cookie-urile din setările browserului utilizat. Majoritatea browserelor permit blocarea cookie-urilor, ștergerea acestora sau afișarea unei notificări înainte de plasarea lor.</p>
            <p>Dezactivarea anumitor cookie-uri poate afecta funcționarea unor elemente ale site-ului, cum ar fi afișarea hărții.</p>

            <h2>6. Actualizarea politicii</h2>
            <p>Această Politică de cookies poate fi modificată periodic. Orice actualizare va fi publicată pe această pagină, împreună cu data ultimei actualizări.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookiePolicy;