import { Helmet } from 'react-helmet-async';

function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 relative z-0">
      <Helmet>
        <title>Termeni și condiții - dr.dent</title>
        <meta name="description" content="Termeni și condiții de utilizare a site-ului drdent.ro." />
        <link rel="canonical" href="https://drdent.ro/termenii-conditii" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Termeni și condiții - dr.dent" />
        <meta property="og:description" content="Termeni și condiții de utilizare a site-ului drdent.ro." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drdent.ro/termenii-conditii" />
        <meta property="og:locale" content="ro_RO" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
            Termeni și condiții
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-2">
            Regulile de utilizare a site-ului
          </p>
        </div>
      </section>

      <section className="section bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-gray-600 mb-6"><strong>Ultima actualizare: 11.05.2026</strong></p>
            
            <p>Acești Termeni și condiții stabilesc regulile de utilizare a site-ului drdent.ro.</p>
            <p>Prin accesarea site-ului, sunteți de acord cu acești termeni. Dacă nu sunteți de acord cu termenii prezentați, vă rugăm să nu utilizați site-ul.</p>

            <h2>1. Informații generale</h2>
            <p>Site-ul drdent.ro este administrat de:</p>
            <p><strong>DR.CIOMAG ELENA-ANCA - CABINET MEDICAL STOMATOLOGIC</strong><br/>
            CUI: 23626870<br/>
            Sediu: Municipiul București, Sector 2, str. Grigore Ionescu, nr. 100, bl. 34, sc. A, et. P, ap. 2<br/>
            E-mail: info@drdent.com<br/>
            Telefon: 021 344 9317</p>
            <p>Site-ul are rol de prezentare a cabinetului, a serviciilor stomatologice și a informațiilor utile pentru pacienți.</p>

            <h2>2. Scopul site-ului</h2>
            <p>Site-ul oferă informații despre:</p>
            <ul>
              <li>serviciile stomatologice disponibile;</li>
              <li>echipa medicală;</li>
              <li>locația cabinetului;</li>
              <li>metodele de contact;</li>
              <li>articole și resurse educative despre sănătatea orală.</li>
            </ul>
            <p>Informațiile publicate pe site au caracter general și informativ.</p>

            <h2>3. Site-ul nu este magazin online</h2>
            <p>Site-ul drdent.ro nu permite achiziționarea de produse sau servicii online și nu procesează plăți online.</p>
            <p>Programările sau solicitările transmise prin site, telefon sau e-mail nu reprezintă o comandă online, ci o cerere de contact sau programare, care urmează să fie confirmată de cabinet.</p>

            <h2>4. Informații medicale</h2>
            <p>Informațiile medicale publicate pe site au scop educativ și nu înlocuiesc consultația stomatologică, diagnosticul sau recomandarea personalizată a medicului.</p>
            <p>Pentru un diagnostic corect și un plan de tratament adaptat, este necesară consultarea directă a unui medic stomatolog.</p>

            <h2>5. Programări și solicitări</h2>
            <p>Utilizatorii pot contacta cabinetul prin formular, telefon sau e-mail pentru informații sau programări.</p>
            <p>Transmiterea unei solicitări nu garantează automat disponibilitatea unei programări la data sau ora dorită. Programarea devine valabilă doar după confirmarea din partea cabinetului.</p>

            <h2>6. Prețuri și servicii</h2>
            <p>Dacă pe site sunt afișate informații despre servicii sau prețuri, acestea au caracter informativ și pot fi actualizate.</p>
            <p>Costul final al tratamentului poate varia în funcție de consultație, diagnostic, complexitatea cazului și recomandarea medicului.</p>

            <h2>7. Drepturi de autor</h2>
            <p>Conținutul publicat pe site, inclusiv textele, imaginile, elementele grafice, structura paginilor și materialele informative, aparține Dr. Dent sau partenerilor săi și este protejat de legislația privind drepturile de autor.</p>
            <p>Copierea, distribuirea sau folosirea conținutului fără acordul scris al titularului este interzisă.</p>

            <h2>8. Utilizarea corectă a site-ului</h2>
            <p>Utilizatorii se obligă să folosească site-ul în mod legal și să nu transmită:</p>
            <ul>
              <li>mesaje false sau abuzive;</li>
              <li>conținut ilegal, ofensator sau defăimător;</li>
              <li>solicitări automate sau tentative de afectare a funcționării site-ului;</li>
              <li>date care nu le aparțin.</li>
            </ul>

            <h2>9. Limitarea răspunderii</h2>
            <p>Depunem eforturi pentru ca informațiile de pe site să fie corecte și actualizate. Totuși, pot exista erori, omisiuni sau informații care se modifică în timp.</p>
            <p>Nu ne asumăm răspunderea pentru decizii luate exclusiv pe baza informațiilor de pe site, fără consult medical de specialitate.</p>

            <h2>10. Link-uri și servicii externe</h2>
            <p>Site-ul poate conține link-uri sau integrări către servicii externe, cum ar fi Google Maps.</p>
            <p>Nu suntem responsabili pentru conținutul, politicile sau funcționarea site-urilor și serviciilor externe. Utilizarea acestora se face conform termenilor și politicilor furnizorilor respectivi.</p>

            <h2>11. Protecția datelor personale</h2>
            <p>Prelucrarea datelor personale se realizează conform Politicii de confidențialitate, disponibilă pe site.</p>

            <h2>12. Modificarea termenilor</h2>
            <p>Ne rezervăm dreptul de a modifica acești Termeni și condiții ori de câte ori este necesar.</p>
            <p>Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei actualizări.</p>

            <h2>13. Legea aplicabilă</h2>
            <p>Acești Termeni și condiții sunt guvernați de legislația din România.</p>
            <p>Eventualele neînțelegeri vor fi soluționate pe cale amiabilă, iar dacă acest lucru nu este posibil, de instanțele competente din România.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;