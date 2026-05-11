import { BookOpen, ShieldCheck, Stethoscope } from 'lucide-react';

export type ResourceCategoryKey = 'ghiduri' | 'educatie' | 'tratamente';

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourceSection {
  heading: string;
  paragraphs: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: ResourceCategoryKey;
  categoryTitle: string;
  seoTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  readTime: string;
  lastUpdated: string;
  content: ResourceSection[];
  faq?: ResourceFaq[];
  related?: string[];
  primaryRoute?: string;
  primaryRouteLabel?: string;
}

export interface ResourceCategoryMeta {
  title: string;
  icon: typeof BookOpen;
  intro: string;
}

export const resourceCategoryMeta: Record<ResourceCategoryKey, ResourceCategoryMeta> = {
  ghiduri: {
    title: 'Ghiduri de îngrijire',
    icon: ShieldCheck,
    intro:
      'Recomandări practice pentru pregătirea tratamentelor, îngrijirea după proceduri și menținerea rezultatelor pe termen lung.',
  },
  educatie: {
    title: 'Educație dentară',
    icon: BookOpen,
    intro:
      'Articole explicative despre carii, gingii, prevenție și decizii informate înainte de tratamente stomatologice.',
  },
  tratamente: {
    title: 'Tratamente și soluții',
    icon: Stethoscope,
    intro:
      'Resurse cu intenție puternică de căutare pentru pacienții care caută tratamente, pași clari, recuperare și informații utile înainte de programare.',
  },
};

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'inainte-de-tratament',
    title: 'Înainte de tratament',
    description:
      'Pregătiți-vă pentru vizita la dentist cu acest ghid complet și aflați ce informații este bine să aveți la consultație.',
    excerpt:
      'Ce trebuie să știți înainte de consultație, investigații și proceduri stomatologice.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Înainte de tratament stomatologic: cum te pregătești | DrDent',
    metaDescription:
      'Află cum te pregătești pentru un tratament stomatologic, ce informații să comunici medicului și ce recomandări sunt utile înainte de consultație.',
    seoKeywords: [
      'inainte de tratament stomatologic',
      'pregatire consultatie dentist',
      'ce faci inainte de tratament dentar',
      'pregatire inainte de interventie dentara',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Programează o consultație',
    content: [
      {
        heading: 'De ce contează pregătirea înainte de tratament',
        paragraphs: [
          'Multe tratamente stomatologice decurg mai ușor atunci când pacientul ajunge pregătit la consultație. Pregătirea nu înseamnă doar să fii prezent la timp, ci să oferi medicului informațiile corecte despre starea ta de sănătate, simptomele actuale și obiectivele pe care le ai.',
          'În cabinet, aceste detalii ajută la stabilirea unui plan de tratament realist, sigur și adaptat. În plus, un pacient informat înțelege mai bine etapele, costurile, recuperarea și limitele fiecărei soluții.',
        ],
      },
      {
        heading: 'Ce informații trebuie comunicate medicului',
        paragraphs: [
          'Spune medicului dacă ai afecțiuni generale, alergii, tratamente medicamentoase, probleme de coagulare, intervenții recente sau episoade neplăcute la proceduri stomatologice anterioare. Aceste informații pot influența anestezia, planul de tratament sau momentul optim pentru anumite proceduri.',
          'Este util să menționezi și dacă ai dureri, sensibilitate la cald sau rece, sângerări gingivale, dificultăți la masticație, lucrări vechi sau dorințe estetice. Cu cât informația este mai clară, cu atât diagnosticul și recomandarea vor fi mai precise.',
        ],
      },
      {
        heading: 'Cum te pregătești practic înainte de programare',
        paragraphs: [
          'Înainte de consultație, este recomandat un periaj corect și o igienă orală cât mai bună, fără a traumatiza gingiile. Dacă ai radiografii, planuri de tratament mai vechi sau analize relevante, le poți aduce la cabinet.',
          'Pentru tratamente mai complexe, medicul poate recomanda să mănânci ușor înainte, să eviți fumatul, să nu întrerupi anumite medicamente fără acord medical și să ai suficient timp după programare pentru recuperare sau controale suplimentare.',
        ],
      },
      {
        heading: 'Întrebări utile pe care merită să le pui',
        paragraphs: [
          'Nu ezita să întrebi care este diagnosticul, ce alternative există, cât durează tratamentul, ce presupune recuperarea și care sunt costurile etapizate. Pacienții care pun întrebări iau de regulă decizii mai bune și respectă mai ușor recomandările primite.',
          'Dacă ai anxietate, menționează acest lucru din start. O comunicare sinceră îl ajută pe medic să adapteze ritmul consultației, explicațiile și modul în care este organizată experiența în cabinet.',
        ],
      },
    ],
    faq: [
      {
        question: 'Trebuie să mănânc înainte de consultația stomatologică?',
        answer:
          'Pentru majoritatea consultațiilor este util să nu veniți nemâncat, dar recomandarea exactă depinde de procedura planificată și de indicațiile medicului.',
      },
      {
        question: 'Este important să spun dacă iau tratament medicamentos?',
        answer:
          'Da. Tratamentul medicamentos, alergiile și bolile generale pot influența anestezia, indicațiile postoperatorii și siguranța procedurii.',
      },
      {
        question: 'Ce fac dacă am frică de dentist?',
        answer:
          'Spuneți acest lucru la programare și în cabinet. O echipă bună poate adapta comunicarea și etapele tratamentului astfel încât experiența să fie mai ușor de tolerat.',
      },
    ],
    related: ['dupa-extractie-dentara', 'dupa-implant-dentar', 'durere-de-masea'],
  },
  {
    slug: 'dupa-extractie-dentara',
    title: 'După extracție dentară',
    description:
      'Instrucțiuni clare pentru îngrijirea post-extracție și o vindecare cât mai bună.',
    excerpt:
      'Recomandări utile după extracție: sângerare, alimentație, igienă și semnale de alarmă.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'După extracție dentară: recomandări și recuperare | DrDent',
    metaDescription:
      'Vezi ce este recomandat după extracția dentară, cum reduci disconfortul și când trebuie să revii la medicul stomatolog.',
    seoKeywords: [
      'dupa extractie dentara',
      'recomandari dupa extractie',
      'recuperare dupa extractie masea',
      'ce faci dupa ce scoti o masea',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Solicită control după extracție',
    content: [
      {
        heading: 'Primele ore după extracție',
        paragraphs: [
          'După o extracție dentară, organismul începe imediat procesul de vindecare. Cheagul format în alveolă are un rol esențial, pentru că protejează zona și susține regenerarea normală a țesuturilor.',
          'În primele ore este normal să existe o ușoară sângerare, sensibilitate sau senzație de presiune. De regulă, aceste manifestări se diminuează dacă sunt respectate indicațiile primite în cabinet.',
        ],
      },
      {
        heading: 'Ce este recomandat în primele 24 de ore',
        paragraphs: [
          'În această perioadă, este bine să evitați clătirea energică, scuipatul repetat, băuturile foarte fierbinți și alimentele dure. Toate acestea pot destabiliza cheagul și pot prelungi vindecarea.',
          'De obicei sunt recomandate alimente moi, la temperatură moderată, hidratare adecvată și repaus relativ. Dacă medicul a prescris calmante sau alte indicații, ele trebuie urmate conform recomandării.',
        ],
      },
      {
        heading: 'Igienă, fumat și efort fizic',
        paragraphs: [
          'Igiena orală nu trebuie abandonată, dar trebuie adaptată. Dinții pot fi curățați cu atenție, evitând agresarea directă a zonei operate în primele zile. Medicul poate recomanda clătiri blânde sau alte măsuri specifice, în funcție de caz.',
          'Fumatul, alcoolul și efortul fizic intens sunt de evitat, pentru că pot accentua sângerarea, inflamația și disconfortul. Aceste recomandări contează mai ales în primele 24-72 de ore.',
        ],
      },
      {
        heading: 'Semnale de alarmă și când revii la control',
        paragraphs: [
          'Durerea accentuată care crește după câteva zile, sângerarea persistentă, gustul neplăcut, mirosul neplăcut, febra sau umflătura importantă sunt motive pentru a contacta cabinetul. Nu toate indică o complicație severă, dar merită evaluate.',
          'Un control la timp poate face diferența între o recuperare simplă și o evoluție neplăcută. Dacă ai nelămuriri, este mai sigur să ceri o reevaluare decât să încerci soluții improvizate acasă.',
        ],
      },
    ],
    faq: [
      {
        question: 'Este normal să doară după extracție dentară?',
        answer:
          'Da, un anumit grad de durere și sensibilitate este normal, mai ales în primele zile. Durerea puternică sau în creștere trebuie însă evaluată.',
      },
      {
        question: 'Pot să fumez după extracție?',
        answer:
          'Este recomandat să evitați fumatul după extracție, în special în primele zile, deoarece poate întârzia vindecarea și crește riscul de complicații.',
      },
      {
        question: 'Când trebuie să sun medicul?',
        answer:
          'Dacă aveți sângerare persistentă, febră, durere intensă, umflătură mare sau gust neplăcut, contactați medicul stomatolog pentru reevaluare.',
      },
    ],
    related: ['inainte-de-tratament', 'maseaua-de-minte', 'durere-de-masea'],
  },
  {
    slug: 'dupa-implant-dentar',
    title: 'După implant dentar',
    description:
      'Ghid practic pentru perioada postoperatorie și menținerea unui implant dentar sănătos.',
    excerpt:
      'Cum îngrijești zona implantului, ce este normal după intervenție și cum susții osteointegrarea.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'După implant dentar: îngrijire și recuperare | DrDent',
    metaDescription:
      'Află ce recomandări sunt utile după implant dentar, cum decurge perioada de vindecare și când trebuie făcut controlul.',
    seoKeywords: [
      'dupa implant dentar',
      'ingrijire implant dentar',
      'vindecare dupa implant',
      'recomandari dupa implant dentar',
    ],
    readTime: '7 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Programează controlul postoperator',
    content: [
      {
        heading: 'Ce urmează imediat după inserarea implantului',
        paragraphs: [
          'După inserarea implantului dentar, este normal să apară o sensibilitate locală, o ușoară umflătură și disconfort controlabil. Intensitatea simptomelor depinde de complexitatea intervenției, de volumul de os implicat și de eventualele proceduri asociate.',
          'În cele mai multe cazuri, evoluția este bună dacă pacientul respectă recomandările primite în cabinet. Scopul principal în această etapă este protejarea zonei și susținerea osteointegrării.',
        ],
      },
      {
        heading: 'Ce înseamnă osteointegrarea',
        paragraphs: [
          'Osteointegrarea este procesul prin care implantul se stabilizează în os. Nu este o etapă care se vede din exterior, dar este esențială pentru succesul pe termen lung al tratamentului.',
          'În această perioadă, controalele periodice, igiena și evitarea supraîncărcării mecanice a zonei sunt importante. Medicul urmărește evoluția pentru a decide momentul potrivit pentru etapa protetică.',
        ],
      },
      {
        heading: 'Alimentație și igienă în perioada de vindecare',
        paragraphs: [
          'În primele zile sunt de preferat alimentele moi, la temperatură moderată, și evitarea masticației pe partea tratată atunci când medicul recomandă acest lucru. Fumatul și alcoolul pot afecta vindecarea și sunt de evitat.',
          'Igiena trebuie menținută corect, dar delicat. Zona implantului se îngrijește conform indicațiilor primite, iar restul cavității orale trebuie curățat cu atenție pentru a reduce încărcarea bacteriană.',
        ],
      },
      {
        heading: 'Când trebuie cerut un control mai repede',
        paragraphs: [
          'Durerea care se agravează, umflătura importantă, sângerarea persistentă, gustul neplăcut sau mobilitatea în zona tratată sunt motive pentru a contacta medicul. Nu toate indică o complicație majoră, dar trebuie evaluate fără amânare.',
          'Un implant dentar are șanse foarte bune de succes atunci când planificarea este corectă și indicațiile de după intervenție sunt respectate. Comunicarea rapidă cu echipa medicală contează la fel de mult ca procedura în sine.',
        ],
      },
    ],
    faq: [
      {
        question: 'Este normal să apară umflătură după implant dentar?',
        answer:
          'Da, o umflare moderată poate apărea după intervenție și se diminuează de regulă treptat. Evoluția exactă depinde de complexitatea cazului.',
      },
      {
        question: 'Cât durează vindecarea după implant?',
        answer:
          'Vindecarea inițială durează zile sau săptămâni, iar osteointegrarea se desfășoară pe o perioadă mai lungă, stabilită de medic în funcție de caz.',
      },
      {
        question: 'Pot să mănânc normal imediat după intervenție?',
        answer:
          'În general, se recomandă o alimentație moale și evitarea zonei tratate în primele zile, după indicațiile primite în cabinet.',
      },
    ],
    related: ['implanturile-dentare-explicate', 'implant-dentar-bucuresti', 'inainte-de-tratament'],
  },
  {
    slug: 'ingrijirea-coroanelor-facetelor',
    title: 'Îngrijirea coroanelor și fațetelor',
    description:
      'Sfaturi utile pentru păstrarea restaurărilor estetice în stare foarte bună.',
    excerpt:
      'Cum întreții coroanele și fațetele pentru a le păstra aspectul și durabilitatea.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijirea coroanelor și fațetelor dentare | DrDent',
    metaDescription:
      'Vezi cum se întrețin corect coroanele și fațetele dentare și ce obiceiuri trebuie evitate pentru rezultate de durată.',
    seoKeywords: [
      'ingrijirea coroanelor dentare',
      'ingrijirea fatetelor',
      'cum intretii fatetele dentare',
      'cum cureti coroanele dentare',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile protetice și estetice',
    content: [
      {
        heading: 'De ce întreținerea corectă face diferența',
        paragraphs: [
          'Coroanele și fațetele dentare pot oferi rezultate estetice foarte bune, dar durabilitatea lor depinde și de modul în care sunt îngrijite. Materialele moderne sunt rezistente, însă gingiile, dinții suport și mușcătura au în continuare nevoie de atenție constantă.',
          'Mulți pacienți cred că o lucrare estetică nu mai necesită aceeași disciplină ca dinții naturali. În realitate, tocmai menținerea unei igiene corecte și a controalelor regulate protejează investiția făcută.',
        ],
      },
      {
        heading: 'Cum arată rutina zilnică potrivită',
        paragraphs: [
          'Periajul de două ori pe zi, folosirea mijloacelor auxiliare de igienă și curățarea atentă a marginilor lucrărilor sunt pași esențiali. Scopul este prevenirea inflamației gingivale și a acumulării de placă bacteriană în jurul restaurărilor.',
          'Dacă medicul recomandă periuțe interdentare, duș bucal sau tehnici speciale de curățare, aceste indicații merită respectate. Îngrijirea adaptată tipului de lucrare poate prelungi semnificativ rezultatul obținut.',
        ],
      },
      {
        heading: 'Obiceiuri care pot compromite rezultatul',
        paragraphs: [
          'Mușcarea obiectelor dure, rosul unghiilor, deschiderea ambalajelor cu dinții și scrâșnirea dinților fără protecție adecvată pot produce fisuri, desprinderi sau suprasolicitare mecanică.',
          'Chiar dacă lucrarea pare stabilă, aceste obiceiuri pot afecta marginile coroanei, adeziunea fațetei sau țesuturile din jur. Pentru pacienții cu bruxism, medicul poate recomanda gutieră de protecție.',
        ],
      },
      {
        heading: 'Când este bine să mergi la control',
        paragraphs: [
          'Dacă observi sensibilitate, inflamație gingivală, modificări de culoare la marginea lucrării, senzația că lucrarea nu mai este confortabilă sau orice schimbare de mușcătură, este util un consult stomatologic.',
          'Controalele periodice ajută la verificarea etanșeității, a igienei și a echilibrului funcțional. Multe probleme pot fi corectate simplu dacă sunt observate din timp.',
        ],
      },
    ],
    faq: [
      {
        question: 'Coroanele și fațetele trebuie curățate diferit față de dinții naturali?',
        answer:
          'Baza rămâne aceeași, dar uneori sunt utile mijloace auxiliare și tehnici recomandate de medic pentru a curăța corect marginile lucrărilor.',
      },
      {
        question: 'Pot să albesc fațetele sau coroanele?',
        answer:
          'Nu în același mod în care se albesc dinții naturali. De aceea este importantă evaluarea profesională înainte de orice procedură estetică suplimentară.',
      },
      {
        question: 'Ce fac dacă simt că lucrarea nu mai este confortabilă?',
        answer:
          'Programați un control. O senzație de presiune, mobilitate sau disconfort nu trebuie ignorată.',
      },
    ],
    related: ['albirea-dentara-optiuni-rezultate', 'ingrijire-zilnica-orala', 'ingrijirea-protezelor-dentare'],
  },
  {
    slug: 'ingrijire-zilnica-orala',
    title: 'Îngrijire zilnică orală',
    description:
      'Rutina de bază pentru sănătatea orală pe termen lung.',
    excerpt:
      'Periaj, ață dentară, controale periodice și recomandări simple pentru prevenție.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijire zilnică orală: rutină corectă pentru dinți și gingii | DrDent',
    metaDescription:
      'Află cum arată o rutină corectă de îngrijire orală și ce pași sunt importanți pentru prevenirea cariilor și inflamațiilor gingivale.',
    seoKeywords: [
      'ingrijire zilnica orala',
      'rutina igiena orala',
      'cum te speli corect pe dinti',
      'prevenire carii si gingivita',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Programează un control preventiv',
    content: [
      {
        heading: 'Ce înseamnă o rutină corectă',
        paragraphs: [
          'Îngrijirea orală de zi cu zi este baza prevenirii cariilor, a inflamațiilor gingivale și a problemelor dentare costisitoare. O rutină corectă nu înseamnă doar frecvență, ci și tehnică bună și consecvență.',
          'Mulți pacienți se spală pe dinți zilnic, dar nu curăță eficient zonele dintre dinți, linia gingivală sau suprafețele greu accesibile. Tocmai aceste detalii fac diferența între o igienă acceptabilă și una eficientă.',
        ],
      },
      {
        heading: 'Periaj, ață dentară și produse auxiliare',
        paragraphs: [
          'Periajul de cel puțin două ori pe zi, cu o tehnică blândă și corectă, rămâne esențial. Ața dentară sau periuțele interdentare completează curățarea în zonele unde periuța obișnuită nu ajunge bine.',
          'Apa de gură, dușul bucal sau alte produse trebuie folosite cu logică și, ideal, la recomandarea medicului. Nu toate produsele sunt utile pentru orice pacient, iar uneori excesul poate irita inutil mucoasele.',
        ],
      },
      {
        heading: 'Rolul alimentației și al obiceiurilor zilnice',
        paragraphs: [
          'Consumul frecvent de gustări zaharoase, băuturi acide, fumatul și lipsa hidratării pot influența negativ mediul oral. Nu contează doar cantitatea de zahăr, ci și frecvența cu care dinții sunt expuși la atacuri acide și la acumularea plăcii bacteriene.',
          'O rutină bună înseamnă și limite sănătoase: mai puține ronțăieli continue, mai puține băuturi acide și atenție la semne precum sângerare gingivală, halenă persistentă sau sensibilitate.',
        ],
      },
      {
        heading: 'De ce controalele regulate rămân importante',
        paragraphs: [
          'Chiar și pacienții care se îngrijesc bine acasă au nevoie de controale periodice și igienizări profesionale. Unele leziuni incipiente nu dor și pot trece ușor neobservate între vizitele la medic.',
          'Prevenția corectă costă de regulă mai puțin decât tratamentul complicațiilor. Un control regulat ajută la depistarea problemelor la timp și la ajustarea rutinei de igienă în funcție de nevoile reale.',
        ],
      },
    ],
    faq: [
      {
        question: 'Este suficient periajul dacă mă spăl bine pe dinți?',
        answer:
          'Nu întotdeauna. Zonele interdentare și linia gingivală au nevoie adesea de ață dentară sau periuțe interdentare pentru o curățare completă.',
      },
      {
        question: 'Apa de gură poate înlocui periajul?',
        answer:
          'Nu. Apa de gură poate completa igiena, dar nu înlocuiește periajul și curățarea mecanică a plăcii bacteriene.',
      },
      {
        question: 'Cât de des este recomandat controlul stomatologic?',
        answer:
          'Frecvența exactă depinde de riscul individual, dar controalele regulate sunt importante chiar și atunci când nu există durere.',
      },
    ],
    related: ['intelegerea-cariilor-dentare', 'boala-parodontala', 'gingii-care-sangereaza'],
  },
  {
    slug: 'ingrijirea-protezelor-dentare',
    title: 'Îngrijirea protezelor dentare',
    description:
      'Recomandări simple pentru curățarea, depozitarea și întreținerea protezelor.',
    excerpt:
      'Cum păstrezi protezele curate, confortabile și funcționale zi de zi.',
    category: 'ghiduri',
    categoryTitle: resourceCategoryMeta.ghiduri.title,
    seoTitle: 'Îngrijirea protezelor dentare: recomandări utile | DrDent',
    metaDescription:
      'Vezi cum se întrețin corect protezele dentare, ce produse pot fi folosite și când este recomandat controlul stomatologic.',
    seoKeywords: [
      'ingrijirea protezelor dentare',
      'cum cureti proteza dentara',
      'intretinere proteze',
      'cum porti corect proteza dentara',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile protetice',
    content: [
      {
        heading: 'De ce protezele au nevoie de întreținere atentă',
        paragraphs: [
          'Protezele dentare trebuie curățate și întreținute regulat pentru a rămâne confortabile, stabile și igienice. Chiar dacă nu sunt dinți naturali, protezele pot reține placă, resturi alimentare și microorganisme care irită mucoasa orală.',
          'O proteză bine întreținută ajută la masticație, vorbire și confort zilnic. În schimb, o proteză murdară, instabilă sau neadaptată poate produce leziuni, halitoză și inflamație.',
        ],
      },
      {
        heading: 'Curățare zilnică și depozitare corectă',
        paragraphs: [
          'Proteza trebuie curățată zilnic cu produse recomandate și clătită după mese, atunci când este posibil. Este important să nu fie folosite metode agresive sau produse nepotrivite care pot deteriora materialul.',
          'Depozitarea corectă și manipularea atentă sunt la fel de importante. În funcție de tipul protezei și de recomandarea medicului, aceasta poate fi îndepărtată noaptea pentru a permite mucoasei să se odihnească.',
        ],
      },
      {
        heading: 'Semne că proteza are nevoie de ajustare',
        paragraphs: [
          'Durerea, zonele de presiune, dificultatea la mestecat, mobilitatea protezei sau sunetele neobișnuite la vorbire pot indica faptul că adaptarea nu mai este optimă. Structurile orale se schimbă în timp, iar proteza poate avea nevoie de ajustare.',
          'Mulți pacienți încearcă să se obișnuiască cu disconfortul, dar acest lucru poate agrava iritația locală. Un control simplu poate corecta problema mult mai ușor decât o perioadă lungă de tolerare a durerii.',
        ],
      },
      {
        heading: 'Controale și igiena cavității orale',
        paragraphs: [
          'Chiar și cu proteză, igiena orală a mucoasei, gingiilor și a eventualilor dinți restanți rămâne foarte importantă. Nu se curăță doar proteza, ci întreaga cavitate orală.',
          'Controalele periodice ajută la verificarea adaptării, a stării mucoasei și a stabilității lucrării. Astfel, confortul și funcționalitatea pot fi menținute pe termen lung.',
        ],
      },
    ],
    faq: [
      {
        question: 'Trebuie să scot proteza noaptea?',
        answer:
          'În multe situații, da, dar recomandarea exactă depinde de tipul protezei și de indicațiile medicului.',
      },
      {
        question: 'Pot să curăț proteza cu pastă de dinți obișnuită?',
        answer:
          'Nu întotdeauna. Unele produse pot fi prea abrazive, iar medicul sau tehnicianul poate recomanda variante mai potrivite.',
      },
      {
        question: 'Ce fac dacă proteza mă rănește?',
        answer:
          'Este indicat un control pentru ajustare. Nu încercați să modificați singur proteza și nu amânați dacă durerea persistă.',
      },
    ],
    related: ['ingrijire-zilnica-orala', 'ingrijirea-coroanelor-facetelor'],
  },
  {
    slug: 'intelegerea-cariilor-dentare',
    title: 'Înțelegerea cariilor dentare',
    description:
      'Cum se formează cariile, de ce apar și ce poți face pentru prevenție.',
    excerpt:
      'Un ghid clar despre cauzele cariilor, prevenție și tratament la timp.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Carii dentare: cauze, prevenție și tratament | DrDent',
    metaDescription:
      'Află cum apar cariile dentare, ce factori le favorizează și de ce tratamentul timpuriu ajută la păstrarea dintelui natural.',
    seoKeywords: [
      'carii dentare',
      'cum apar cariile',
      'tratament carii',
      'prevenire carii dentare',
    ],
    readTime: '7 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile stomatologice',
    content: [
      {
        heading: 'Cum se formează o carie dentară',
        paragraphs: [
          'Caria nu apare dintr-o singură cauză, ci din interacțiunea dintre bacteriile din placă, zaharurile fermentabile, timpul de expunere și susceptibilitatea dintelui. Acizii produși de bacterii atacă smalțul, iar dacă procesul continuă, leziunea avansează spre straturile mai profunde.',
          'În primele faze, pacientul poate să nu simtă nimic. Tocmai de aceea, cariile mici sunt deseori descoperite la control sau pe radiografie, înainte să producă durere.',
        ],
      },
      {
        heading: 'Factori care cresc riscul',
        paragraphs: [
          'Igiena incompletă, gustările frecvente, băuturile dulci sau acide, lipsa fluorului, gura uscată și anumite obiceiuri alimentare pot crește riscul de carii. Contează nu doar cât zahăr este consumat, ci și cât de des se repetă atacurile acide asupra smalțului.',
          'Lucrările vechi infiltrate, înghesuirile dentare sau dificultatea de igienizare în anumite zone pot favoriza și ele apariția leziunilor carioase.',
        ],
      },
      {
        heading: 'Ce simptome pot apărea',
        paragraphs: [
          'Sensibilitatea la rece, dulce sau mestecat poate fi un semn că leziunea a progresat. Uneori apar pete, modificări de culoare, retenție alimentară sau durere spontană, însă în alte situații pacientul nu observă aproape nimic până când problema devine mai avansată.',
          'Tocmai din acest motiv, lipsa durerii nu înseamnă lipsa problemei. Controalele periodice și investigațiile recomandate sunt importante pentru diagnostic corect.',
        ],
      },
      {
        heading: 'Cum previi și când tratezi',
        paragraphs: [
          'Prevenția înseamnă igienă bună, alimentație echilibrată, controale regulate și igienizări profesionale. În funcție de risc, medicul poate recomanda și măsuri suplimentare pentru protecția smalțului.',
          'Când caria este tratată la timp, soluția este de obicei mai simplă și mai conservatoare. Cu cât leziunea este ignorată mai mult, cu atât crește riscul de afectare profundă și de tratamente mai complexe.',
        ],
      },
    ],
    faq: [
      {
        question: 'Cariile dor întotdeauna?',
        answer:
          'Nu. În fazele incipiente, cariile pot evolua fără simptome evidente și pot fi depistate doar la control.',
      },
      {
        question: 'Se poate opri o carie fără tratament?',
        answer:
          'Unele leziuni foarte incipiente pot fi monitorizate sau remineralizate în anumite condiții, dar acest lucru se stabilește doar după evaluare clinică.',
      },
      {
        question: 'Cât de repede se agravează o carie?',
        answer:
          'Evoluția diferă de la un pacient la altul, în funcție de igienă, alimentație, poziția dintelui și alți factori de risc.',
      },
    ],
    related: ['durere-de-masea', 'ingrijire-zilnica-orala', 'sanatatea-orala-la-copii'],
  },
  {
    slug: 'boala-parodontala',
    title: 'Boala parodontală',
    description:
      'Ghid despre simptome, cauze și importanța tratamentului precoce pentru gingii și osul de susținere.',
    excerpt:
      'Semne, riscuri și tratament pentru boala parodontală.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Boala parodontală: simptome, cauze și tratament | DrDent',
    metaDescription:
      'Vezi care sunt semnele bolii parodontale și de ce diagnosticul precoce este important pentru menținerea dinților pe termen lung.',
    seoKeywords: [
      'boala parodontala',
      'simptome parodontoza',
      'tratament gingii',
      'parodontoza tratament',
    ],
    readTime: '7 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile parodontale',
    content: [
      {
        heading: 'Ce este boala parodontală',
        paragraphs: [
          'Boala parodontală afectează gingiile și structurile care susțin dinții. Nu este doar o problemă de suprafață, pentru că în formele avansate poate implica pierdere de os și mobilitate dentară.',
          'Mulți pacienți folosesc termenul de parodontoză pentru orice sângerare gingivală, dar există diferențe între gingivită și boala parodontală instalată. Diagnosticul corect se stabilește în cabinet, prin examen clinic și investigații specifice.',
        ],
      },
      {
        heading: 'Semne pe care nu este bine să le ignori',
        paragraphs: [
          'Sângerarea la periaj, gingiile roșii sau umflate, respirația neplăcută, retracția gingivală și sensibilitatea locală sunt semne care merită evaluate. În stadii mai avansate poate apărea mobilitatea dinților sau modificarea mușcăturii.',
          'Faptul că boala parodontală nu doare mereu intens este unul dintre motivele pentru care pacienții amână consultul. Tocmai această evoluție discretă o face periculoasă.',
        ],
      },
      {
        heading: 'De ce apare și cine are risc mai mare',
        paragraphs: [
          'Placa bacteriană și tartrul au un rol major, dar boala parodontală este influențată și de igiena orală, fumat, predispoziție individuală, diabet, dezechilibre hormonale sau lucrări greu de igienizat.',
          'De aceea, două persoane cu obiceiuri aparent similare pot avea evoluții diferite. Evaluarea individuală este importantă pentru a înțelege cauza reală și ritmul de progresie.',
        ],
      },
      {
        heading: 'Cum ajută tratamentul timpuriu',
        paragraphs: [
          'Tratamentul precoce urmărește reducerea inflamației, controlul plăcii bacteriene și stabilizarea țesuturilor. În funcție de stadiu, planul poate include igienizare profesională, detartraj, chiuretaj, reevaluări și recomandări personalizate de igienă.',
          'Cu cât intervenția este mai devreme, cu atât șansele de a păstra dinții și suportul osos sunt mai bune. Boala parodontală poate fi controlată, dar cere consecvență și controale regulate.',
        ],
      },
    ],
    faq: [
      {
        question: 'Sângerarea gingiilor înseamnă automat parodontoză?',
        answer:
          'Nu automat, dar este un semn important care trebuie evaluat. Poate fi gingivită sau o problemă parodontală într-o fază mai avansată.',
      },
      {
        question: 'Boala parodontală se poate vindeca?',
        answer:
          'Poate fi controlată foarte bine, mai ales când este depistată timpuriu, dar are nevoie de tratament și întreținere constantă.',
      },
      {
        question: 'Fumatul influențează gingiile?',
        answer:
          'Da. Fumatul este un factor de risc important și poate masca uneori semnele evidente de inflamație.',
      },
    ],
    related: ['gingii-care-sangereaza', 'ingrijire-zilnica-orala', 'durere-de-masea'],
  },
  {
    slug: 'implanturile-dentare-explicate',
    title: 'Implanturile dentare explicate',
    description:
      'Un articol introductiv despre rolul, beneficiile și îngrijirea implanturilor dentare.',
    excerpt:
      'Ce este un implant dentar și ce trebuie să știi înainte de a lua o decizie.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Implanturi dentare explicate: beneficii și etape | DrDent',
    metaDescription:
      'Află pe scurt cum funcționează implanturile dentare, care sunt beneficiile și ce implică îngrijirea lor.',
    seoKeywords: [
      'implanturi dentare',
      'ce este implantul dentar',
      'beneficii implant dentar',
      'cand se recomanda implant dentar',
    ],
    readTime: '7 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile de implantologie',
    content: [
      {
        heading: 'Ce este un implant dentar',
        paragraphs: [
          'Implantul dentar este o soluție folosită pentru înlocuirea unui dinte lipsă sau a mai multor dinți lipsă, atunci când situația clinică permite. El preia rolul rădăcinii și susține ulterior o coroană, o punte sau alt tip de lucrare protetică.',
          'Deși ideea pare simplă, indicația corectă depinde de mai mulți factori: volumul de os, starea gingiilor, sănătatea generală, mușcătura și obiectivele pacientului.',
        ],
      },
      {
        heading: 'Care sunt beneficiile principale',
        paragraphs: [
          'Implanturile pot oferi stabilitate bună, confort la masticație și un rezultat estetic apropiat de natural atunci când sunt planificate și întreținute corect. Un avantaj important este că, în multe cazuri, nu este nevoie de șlefuirea dinților vecini pentru a înlocui un singur dinte lipsă.',
          'Pentru mulți pacienți, beneficiul major este recâștigarea funcției și a încrederii. Totuși, un implant nu este o soluție automată pentru orice lipsă dentară, iar consultația rămâne etapa decisivă.',
        ],
      },
      {
        heading: 'Ce presupune tratamentul',
        paragraphs: [
          'Tratamentul începe cu evaluarea clinică și imagistică. Medicul stabilește dacă este nevoie doar de inserarea implantului sau și de etape suplimentare, cum ar fi regenerare osoasă, extracții sau tratamente pregătitoare.',
          'După inserare urmează perioada de vindecare și osteointegrare, apoi etapa protetică. Durata totală diferă în funcție de complexitatea cazului și de răspunsul biologic individual.',
        ],
      },
      {
        heading: 'Îngrijire și controale pe termen lung',
        paragraphs: [
          'Implantul dentar are nevoie de igienă atentă și controale regulate, la fel ca orice altă lucrare dentară. Lipsa durerii nu înseamnă automat că totul este perfect, de aceea reevaluările periodice sunt importante.',
          'Pacienții care întrețin corect zona implantului și respectă controalele au șanse mai bune de stabilitate și durabilitate pe termen lung.',
        ],
      },
    ],
    faq: [
      {
        question: 'Implantul dentar este același lucru cu dintele definitiv?',
        answer:
          'Implantul este suportul inserat în os. Peste el se realizează ulterior partea protetică, în funcție de planul de tratament.',
      },
      {
        question: 'Oricine poate primi implant dentar?',
        answer:
          'Nu automat. Este necesară o evaluare clinică și imagistică pentru a vedea dacă există condițiile locale și generale potrivite.',
      },
      {
        question: 'Un implant durează toată viața?',
        answer:
          'Poate avea o durată foarte bună în timp, dar rezultatul depinde de planificare, igienă, controale și de comportamentul pacientului.',
      },
    ],
    related: ['implant-dentar-bucuresti', 'dupa-implant-dentar', 'inainte-de-tratament'],
  },
  {
    slug: 'albirea-dentara-optiuni-rezultate',
    title: 'Albirea dentară: opțiuni și rezultate',
    description:
      'Metode de albire dentară și criterii care te ajută să alegi varianta potrivită.',
    excerpt:
      'Ce opțiuni există pentru albire și la ce rezultate te poți aștepta.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Albirea dentară: opțiuni, siguranță și rezultate | DrDent',
    metaDescription:
      'Află ce variante de albire dentară există și de ce evaluarea profesională este importantă înainte de tratament.',
    seoKeywords: [
      'albire dentara',
      'optiuni albire dentara',
      'rezultate albire dentara',
      'albire dentara profesionala',
    ],
    readTime: '6 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile estetice',
    content: [
      {
        heading: 'De ce este importantă evaluarea înainte de albire',
        paragraphs: [
          'Albirea dentară este o procedură estetică frecvent solicitată, dar nu orice colorare dentară răspunde la fel la tratament. Unele nuanțe sunt influențate de obiceiuri alimentare, altele de structură dentară, tratamente vechi sau de particularități ale smalțului.',
          'De aceea, evaluarea profesională înainte de albire este utilă pentru a vedea dacă există carii, sensibilitate, lucrări vizibile sau alte probleme care ar trebui rezolvate înainte.',
        ],
      },
      {
        heading: 'Ce opțiuni există în practică',
        paragraphs: [
          'În funcție de caz, pot exista variante realizate în cabinet, variante supravegheate pentru acasă sau combinații între ele. Alegerea nu se face doar după dorința de a obține un alb mai intens, ci și după starea dinților și obiectivul realist al pacientului.',
          'Rezultatele pot fi bune atunci când procedura este făcută controlat și când pacientul înțelege ce se poate obține și ce limitări există în raport cu culoarea de plecare.',
        ],
      },
      {
        heading: 'Ce factori influențează rezultatul',
        paragraphs: [
          'Tipul de colorare, grosimea smalțului, obiceiurile alimentare, fumatul și existența lucrărilor protetice în zona vizibilă pot influența rezultatul final. Albirea nu schimbă culoarea coroanelor, fațetelor sau obturațiilor existente.',
          'Acest lucru este important de înțeles înainte de tratament, pentru că uneori este nevoie și de alte ajustări estetice pentru un rezultat armonios.',
        ],
      },
      {
        heading: 'Cum menții rezultatul mai mult timp',
        paragraphs: [
          'După albire, unele obiceiuri influențează direct menținerea nuanței obținute. Igiena bună, reducerea expunerii la coloranți și controalele periodice ajută la păstrarea rezultatului.',
          'Pentru unii pacienți, strategia corectă nu este doar albirea, ci un plan estetic complet, stabilit împreună cu medicul, în funcție de zâmbet și de istoricul dentar.',
        ],
      },
    ],
    faq: [
      {
        question: 'Albirea dentară funcționează la fel pentru toți pacienții?',
        answer:
          'Nu. Rezultatul depinde de cauza colorării, de structura dintelui și de starea generală a cavității orale.',
      },
      {
        question: 'Albirea schimbă culoarea coroanelor și fațetelor?',
        answer:
          'Nu în același mod ca dinții naturali, motiv pentru care evaluarea estetică înainte de tratament este importantă.',
      },
      {
        question: 'Este bine să fac albire fără consult?',
        answer:
          'Nu este recomandat. Un consult ajută la alegerea metodei potrivite și la evitarea procedurilor nepotrivite pentru situația clinică.',
      },
    ],
    related: ['ingrijirea-coroanelor-facetelor', 'ingrijire-zilnica-orala'],
  },
  {
    slug: 'sanatatea-orala-la-copii',
    title: 'Sănătatea orală la copii',
    description:
      'Ghid pentru părinți despre prevenție, igienă și primele controale stomatologice.',
    excerpt:
      'Cum susții sănătatea orală a copilului de la primii dinți până la adolescență.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Sănătatea orală la copii: prevenție și controale | DrDent',
    metaDescription:
      'Află ce contează în îngrijirea dentară a copiilor, de la primii dinți până la obiceiuri sănătoase pe termen lung.',
    seoKeywords: [
      'sanatatea orala la copii',
      'ingrijire dentara copii',
      'preventie carii copii',
      'primul control stomatologic copil',
    ],
    readTime: '7 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/stomatologie-pediatrica',
    primaryRouteLabel: 'Vezi stomatologia pediatrică',
    content: [
      {
        heading: 'De ce contează primii ani',
        paragraphs: [
          'Sănătatea orală a copilului începe devreme, încă din perioada apariției primilor dinți. Dinții temporari au rol important în masticație, vorbire, dezvoltarea armonioasă și ghidarea erupției dinților permanenți.',
          'Ideea că dinții de lapte nu trebuie îngrijiți atent pentru că oricum se schimbă este greșită. Problemele netratate pot influența confortul copilului, alimentația și viitoarea dentiție.',
        ],
      },
      {
        heading: 'Igiena și obiceiurile sănătoase',
        paragraphs: [
          'Periajul adaptat vârstei, supravegherea de către părinte și obiceiurile alimentare corecte sunt esențiale. Nu este vorba doar despre evitarea dulciurilor, ci și despre ritmul gustărilor, băuturile consumate și consecvența rutinei zilnice.',
          'Copiii învață prin repetiție și exemplu. O experiență pozitivă și constantă în jurul igienei orale are efect pe termen lung.',
        ],
      },
      {
        heading: 'Rolul controalelor stomatologice',
        paragraphs: [
          'Vizitele regulate la stomatolog ajută la depistarea timpurie a cariilor, a problemelor de erupție și a altor dezechilibre. În plus, copilul se familiarizează cu mediul din cabinet într-un mod calm, fără a asocia mersul la dentist doar cu durerea.',
          'Un control periodic este și o ocazie bună pentru părinți să primească recomandări clare despre igienă, erupție, dietă și nevoile specifice vârstei.',
        ],
      },
      {
        heading: 'Când este bine să ceri evaluare mai repede',
        paragraphs: [
          'Durerea, sensibilitatea, petele pe dinți, sângerarea gingiilor, dificultățile la masticație sau orice modificare observată de părinte merită evaluate. De multe ori, problemele descoperite la timp se rezolvă mai simplu și cu mai puțin stres pentru copil.',
          'Scopul stomatologiei pediatrice nu este doar tratamentul, ci și construirea unei relații sănătoase cu prevenția și cu mediul medical.',
        ],
      },
    ],
    faq: [
      {
        question: 'Când este bine să meargă copilul prima dată la stomatolog?',
        answer:
          'Momentul exact se stabilește în funcție de vârstă și context, dar vizitele timpurii ajută la prevenție și acomodare.',
      },
      {
        question: 'Dinții de lapte trebuie tratați?',
        answer:
          'Da. Dinții temporari au rol important și problemele lor netratate pot afecta confortul și dezvoltarea orală.',
      },
      {
        question: 'Cum fac vizita la dentist mai ușoară pentru copil?',
        answer:
          'Prin calm, explicații simple, evitarea amenințărilor și alegerea unui mediu prietenos pentru copii.',
      },
    ],
    related: ['intelegerea-cariilor-dentare', 'aparat-dentar-bucuresti', 'inainte-de-tratament'],
  },
  {
    slug: 'implant-dentar-bucuresti',
    title: 'Implant dentar în București: preț, etape, vindecare și când ai nevoie',
    description:
      'Află când este recomandat implantul dentar, cum decurge tratamentul și ce factori pot influența costul final.',
    excerpt:
      'Un ghid complet despre implantul dentar în București: indicații, etape, recuperare și întrebări frecvente.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Implant dentar în București: preț, etape și vindecare | DrDent',
    metaDescription:
      'Implant dentar în București: vezi când este recomandat, care sunt etapele tratamentului, cum decurge vindecarea și ce influențează prețul.',
    seoKeywords: [
      'implant dentar bucuresti',
      'pret implant dentar bucuresti',
      'etape implant dentar',
      'vindecare dupa implant dentar',
      'consult implant dentar bucuresti',
    ],
    readTime: '9 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile DrDent',
    content: [
      {
        heading: 'Când este recomandat implantul dentar',
        paragraphs: [
          'Implantul dentar este una dintre cele mai moderne și stabile soluții pentru înlocuirea unui dinte lipsă sau a mai multor dinți lipsă. Este recomandat atunci când pacientul are nevoie de o variantă fixă, funcțională și estetică, fără a compromite inutil dinții vecini.',
          'În practică, implantul poate fi luat în calcul după extracții, fracturi, carii extinse, boală parodontală controlată sau alte situații în care dintele nu mai poate fi păstrat. Indicația reală se stabilește însă după evaluare clinică și imagistică.',
          'Pentru pacienții care caută implant dentar în București, consultația inițială rămâne etapa cea mai importantă. Acolo se vede dacă există suficient os, dacă gingiile sunt sănătoase și ce variante de tratament au sens în contextul fiecărui caz.',
        ],
      },
      {
        heading: 'Cum decurge tratamentul pas cu pas',
        paragraphs: [
          'Tratamentul începe cu consultația, investigațiile imagistice și planificarea. Uneori este nevoie doar de inserarea implantului, alteori de tratamente pregătitoare precum extracții, regenerare osoasă sau alte intervenții complementare.',
          'După inserare urmează etapa de vindecare și osteointegrare. Abia după această fază se continuă cu restaurarea protetică, atunci când medicul confirmă că baza biologică este stabilă.',
          'Durata totală diferă de la caz la caz. De aceea, un răspuns generic despre cât durează implantul dentar este mai puțin util decât un plan personalizat, explicat clar în urma consultației.',
        ],
      },
      {
        heading: 'Cum decurge recuperarea și ce recomandări contează',
        paragraphs: [
          'Perioada imediat următoare procedurii poate include sensibilitate, umflare moderată și disconfort controlabil. Respectarea indicațiilor privind igiena, alimentația și controalele este esențială pentru o vindecare bună.',
          'Pacientul trebuie să înțeleagă că succesul implantului nu depinde doar de procedura chirurgicală, ci și de perioada postoperatorie. Fumatul, lipsa igienei sau amânarea controalelor pot afecta rezultatul.',
          'În multe cazuri, recuperarea este mai simplă decât se așteaptă pacientul, însă evoluția exactă este influențată de complexitatea intervenției și de contextul biologic individual.',
        ],
      },
      {
        heading: 'Ce poate influența costul implantului dentar',
        paragraphs: [
          'Prețul final depinde de complexitatea cazului, de numărul de implanturi, de necesitatea procedurilor pregătitoare, de componenta protetică și de etapele implicate în planul complet. Nu există un singur cost universal valabil pentru toate cazurile.',
          'Din acest motiv, este mai corect să discuți despre estimare după evaluare, nu doar despre un preț izolat văzut online. Pentru pacient, contează planul complet, predictibilitatea și calitatea etapelor incluse.',
          'În București, mulți pacienți caută rapid informații despre cost și recuperare, însă o consultație bine făcută clarifică atât partea financiară, cât și șansele reale de succes.',
        ],
      },
      {
        heading: 'Când merită să ceri consultația',
        paragraphs: [
          'Dacă ai unul sau mai mulți dinți lipsă, dacă ai o lucrare veche instabilă sau dacă vrei să înțelegi ce variante există pentru reabilitare, consultația de implantologie este punctul de plecare potrivit.',
          'Scopul nu este să primești automat recomandarea de implant, ci să înțelegi dacă este soluția potrivită pentru cazul tău, ce alternative există și care este ordinea corectă a tratamentului.',
          'Un plan bun este realist, explicat clar și adaptat nevoilor funcționale, estetice și financiare ale pacientului.',
        ],
      },
    ],
    faq: [
      {
        question: 'Implantul dentar este dureros?',
        answer:
          'Procedura se face cu anestezie, iar disconfortul postoperator depinde de complexitatea cazului. Medicul explică din timp la ce să vă așteptați.',
      },
      {
        question: 'Cât durează până primesc dintele definitiv?',
        answer:
          'Durata diferă în funcție de vindecare, osteointegrare și planul protetic. Nu există același calendar pentru toate cazurile.',
      },
      {
        question: 'Se poate face implant dacă lipsește os?',
        answer:
          'În unele situații, da, cu proceduri pregătitoare. Decizia se ia doar după evaluare clinică și imagistică.',
      },
    ],
    related: ['implanturile-dentare-explicate', 'dupa-implant-dentar', 'inainte-de-tratament'],
  },
  {
    slug: 'aparat-dentar-bucuresti',
    title: 'Aparat dentar în București: tipuri, preț, durată și cum alegi varianta potrivită',
    description:
      'Ghid util pentru pacienții care caută informații clare despre tratamentul ortodontic și variantele disponibile.',
    excerpt:
      'Ce trebuie să știi despre aparatul dentar: tipuri, durată, costuri și adaptarea la stilul tău de viață.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Aparat dentar în București: tipuri, preț și durată | DrDent',
    metaDescription:
      'Află când este recomandat aparatul dentar, ce tipuri există, cât poate dura tratamentul și ce factori influențează costul și alegerea aparatului.',
    seoKeywords: [
      'aparat dentar bucuresti',
      'pret aparat dentar bucuresti',
      'tipuri aparat dentar',
      'durata tratament ortodontic',
      'consult ortodontie bucuresti',
    ],
    readTime: '9 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile ortodontice',
    content: [
      {
        heading: 'Când este recomandat aparatul dentar',
        paragraphs: [
          'Aparatul dentar este recomandat atunci când dinții nu sunt aliniați corect, când mușcătura este dezechilibrată sau când spațiile și înghesuirile afectează estetica, igiena și funcția. Tratamentul ortodontic nu este doar despre zâmbet, ci și despre distribuirea corectă a forțelor și protejarea dinților pe termen lung.',
          'Mulți pacienți caută aparat dentar în București pentru motive estetice, însă consultul ortodontic evidențiază adesea și motive funcționale: mușcătură incorectă, migrarea dinților, uzură inegală sau dificultate de igienizare.',
          'Tratamentul poate fi recomandat atât adolescenților, cât și adulților. Important este ca planul să fie personalizat și realist în raport cu vârsta, obiectivele și particularitățile cazului.',
        ],
      },
      {
        heading: 'Ce tipuri de aparat dentar există',
        paragraphs: [
          'În practică, pacienții aleg între variante metalice, estetice și alte soluții moderne, în funcție de indicație și preferințe. Aparatul metalic rămâne una dintre cele mai eficiente și predictibile opțiuni, mai ales în cazurile care cer control bun asupra mișcărilor dentare.',
          'Aparatele ceramice sau alte variante mai discrete sunt preferate de pacienții care pun accent și pe aspectul vizual în timpul tratamentului. În anumite situații, medicul poate discuta și alte soluții, dacă ele sunt potrivite clinic.',
          'Alegerea nu se face doar după aparență. Contează complexitatea cazului, disciplina pacientului, durata estimată și recomandarea ortodontului.',
        ],
      },
      {
        heading: 'Cât poate dura tratamentul ortodontic',
        paragraphs: [
          'Durata tratamentului variază în funcție de severitatea înghesuirii, tipul mușcăturii, vârsta pacientului și complianța la recomandări. Unele cazuri sunt mai simple, altele au nevoie de monitorizare îndelungată și ajustări atente.',
          'Pacientul trebuie să știe că aparatul dentar nu înseamnă doar montaj, ci un proces complet: diagnostic, planificare, activări, reevaluări și retenție. Etapa de contenție este esențială pentru stabilitatea rezultatului.',
          'De aceea, durata se discută realist în cabinet, după ce medicul înțelege exact tipul de problemă și răspunsul așteptat la tratament.',
        ],
      },
      {
        heading: 'Ce influențează costul aparatului dentar',
        paragraphs: [
          'Costul depinde de tipul aparatului, complexitatea cazului, durata estimată, investigațiile necesare și eventualele tratamente pregătitoare. Uneori, înainte de montaj, sunt indicate igienizări, tratamente carioase sau alte corecții.',
          'Din acest motiv, o estimare serioasă se face după consult ortodontic, nu doar pe baza unei liste de prețuri. Pentru pacient, este important să înțeleagă costul etapizat și ce include planul recomandat.',
          'Alegerea corectă ține cont de echilibrul dintre obiectivul estetic, eficiența clinică și buget.',
        ],
      },
      {
        heading: 'Cum alegi varianta potrivită',
        paragraphs: [
          'Varianta potrivită se alege după consult și discuție deschisă despre așteptări. Pentru unii pacienți contează discreția, pentru alții rezistența și eficiența, iar pentru alții important este stilul de viață și disponibilitatea pentru controale regulate.',
          'Un plan bun ține cont și de capacitatea de a menține o igienă foarte bună pe durata tratamentului. Fără această disciplină, riscul de pete, inflamații gingivale sau complicații crește.',
          'Când diagnosticul este corect și recomandarea este bine explicată, șansele de a obține un rezultat stabil și armonios cresc semnificativ.',
        ],
      },
    ],
    faq: [
      {
        question: 'La ce vârstă se poate purta aparat dentar?',
        answer:
          'Tratamentul ortodontic poate fi recomandat atât copiilor, cât și adulților, în funcție de diagnosticul stabilit la consultație.',
      },
      {
        question: 'Aparatul dentar este doar pentru estetică?',
        answer:
          'Nu. El poate corecta și probleme funcționale care afectează mușcătura, igienizarea și uzura dentară.',
      },
      {
        question: 'Cât de des sunt necesare controalele?',
        answer:
          'Frecvența controalelor depinde de tipul aparatului și de planul de tratament, iar monitorizarea regulată este esențială.',
      },
    ],
    related: ['sanatatea-orala-la-copii', 'ingrijire-zilnica-orala', 'inainte-de-tratament'],
  },
  {
    slug: 'durere-de-masea',
    title: 'Durere de măsea: cauze, ce poți face acasă și când trebuie să ajungi urgent la dentist',
    description:
      'Un articol util pentru pacienții care caută rapid răspunsuri atunci când apare durerea de măsea.',
    excerpt:
      'De la sensibilitate la urgență stomatologică: ce poate însemna durerea de măsea și când trebuie evaluată.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Durere de măsea: cauze, ce faci și când mergi la dentist | DrDent',
    metaDescription:
      'Află care sunt cauzele durerii de măsea, ce poți face temporar acasă și când trebuie să mergi urgent la medicul stomatolog.',
    seoKeywords: [
      'durere de masea',
      'ce faci cand te doare maseaua',
      'durere masea noaptea',
      'urgenta stomatologica bucuresti',
      'durere de masea tratament',
    ],
    readTime: '8 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Solicită evaluare rapidă',
    content: [
      {
        heading: 'De ce apare durerea de măsea',
        paragraphs: [
          'Durerea de măsea poate avea multiple cauze: carie profundă, inflamație a nervului dentar, infecție, fisură dentară, lucrare compromisă, erupție dificilă a măselei de minte sau probleme gingivale. Intensitatea durerii nu arată singură gravitatea, dar este un semnal clar că zona trebuie evaluată.',
          'Unii pacienți resimt durere ascuțită la rece sau dulce, alții o presiune constantă, pulsații sau durere care iradiază către ureche, mandibulă sau cap. Tiparul simptomelor poate orienta diagnosticul, dar nu înlocuiește consultația.',
          'Când durerea apare noaptea sau se agravează progresiv, de obicei există deja o problemă dentară sau inflamatorie care nu ar trebui amânată.',
        ],
      },
      {
        heading: 'Ce poți face temporar acasă',
        paragraphs: [
          'Acasă, scopul este doar controlul temporar al disconfortului, nu tratarea cauzei. Poți evita alimentele foarte reci, foarte fierbinți sau dure și este bine să păstrezi o igienă blândă, dar corectă, pentru a nu lăsa resturi alimentare în zona dureroasă.',
          'În funcție de recomandările medicale generale pe care le poți urma în siguranță, un calmant uzual poate ajuta temporar. Totuși, automedicația nu trebuie să înlocuiască prezentarea la stomatolog.',
          'Aplicarea unor soluții improvizate direct pe dinte sau gingie poate irita suplimentar țesuturile și nu rezolvă infecția sau inflamația.',
        ],
      },
      {
        heading: 'Ce să nu faci',
        paragraphs: [
          'Nu ignora durerea care se repetă, nu aplica substanțe agresive pe dinte și nu amâna consultația doar pentru că durerea a cedat temporar. Uneori, calmarea simptomelor poate fi urmată de o agravare bruscă a infecției.',
          'Nu lua antibiotice fără indicație și nu presupune că problema se va rezolva de la sine. Ceea ce tratează cu adevărat situația este identificarea cauzei: carie, infecție, fractură, afectare pulpară sau altă complicație.',
        ],
      },
      {
        heading: 'Când este nevoie de evaluare urgentă',
        paragraphs: [
          'Durerea intensă, umflătura, febra, dificultatea la masticație, sensibilitatea accentuată la atingere sau apariția unui gust neplăcut în gură sunt semne care justifică evaluarea rapidă. Dacă durerea este însoțită de dificultate la deschiderea gurii, situația trebuie tratată cu și mai multă atenție.',
          'În București, mulți pacienți caută mai întâi informații online înainte de programare. Totuși, atunci când durerea persistă, consultul stomatologic este pasul care face diferența între un tratament simplu și o complicație mai dificilă.',
        ],
      },
      {
        heading: 'Ce tratamente poate recomanda medicul',
        paragraphs: [
          'Tratamentul depinde de cauză. Uneori este suficientă o obturație dacă problema este depistată la timp. În alte situații poate fi necesar un tratament de canal, refacerea unei lucrări, managementul unei infecții sau chiar extracția dacă dintele nu mai poate fi salvat.',
          'Scopul nu este doar calmarea durerii, ci păstrarea pe cât posibil a dintelui și a funcției. Cu cât pacientul ajunge mai devreme la medic, cu atât cresc șansele unui tratament mai simplu și mai conservator.',
        ],
      },
    ],
    faq: [
      {
        question: 'Durerea de măsea poate trece singură?',
        answer:
          'Uneori simptomul se poate diminua temporar, dar cauza rămâne. De aceea este important consultul stomatologic, mai ales dacă durerea revine.',
      },
      {
        question: 'Când este durerea de măsea o urgență?',
        answer:
          'Durerea severă, umflătura, febra, secrețiile sau dificultatea la masticație și deschiderea gurii sunt semne care justifică evaluarea rapidă.',
      },
      {
        question: 'Pot să iau antibiotic dacă mă doare măseaua?',
        answer:
          'Nu fără indicație medicală. Antibioticele nu sunt soluția universală și pot întârzia diagnosticul corect.',
      },
    ],
    related: ['intelegerea-cariilor-dentare', 'maseaua-de-minte', 'gingii-care-sangereaza'],
  },
  {
    slug: 'maseaua-de-minte',
    title: 'Măseaua de minte: când trebuie monitorizată, tratată sau extrasă',
    description:
      'Un ghid clar pentru pacienții care vor să înțeleagă când măseaua de minte creează probleme și când extracția este luată în calcul.',
    excerpt:
      'Semne, riscuri și indicații privind măseaua de minte: când o urmărești și când este nevoie de intervenție.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Măseaua de minte: când se tratează sau se extrage | DrDent',
    metaDescription:
      'Află când măseaua de minte poate fi păstrată, când trebuie monitorizată și în ce situații extracția este recomandată.',
    seoKeywords: [
      'maseaua de minte',
      'extractie masea de minte',
      'durere masea de minte',
      'cand se scoate maseaua de minte',
      'chirurgie orala bucuresti',
    ],
    readTime: '8 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile de chirurgie orală',
    content: [
      {
        heading: 'De ce creează probleme măseaua de minte',
        paragraphs: [
          'Măseaua de minte poate erupe complet, parțial sau poate rămâne inclusă. Problemele apar frecvent atunci când nu are suficient spațiu, când erupția este parțială sau când poziția ei face dificilă igienizarea și afectează dintele vecin.',
          'Unii pacienți nu au niciun simptom și descoperă problema la control sau pe radiografie. Alții resimt durere, presiune, inflamație gingivală, dificultate la deschiderea gurii sau episoade repetate de infecție locală.',
        ],
      },
      {
        heading: 'Când este suficientă monitorizarea',
        paragraphs: [
          'Nu orice măsea de minte trebuie extrasă automat. Dacă este poziționată favorabil, poate fi curățată corect și nu produce leziuni, medicul poate recomanda monitorizare periodică.',
          'Monitorizarea este importantă mai ales când măseaua are potențial să creeze probleme în timp. Scopul este identificarea schimbărilor înainte ca ele să ducă la durere, infecție sau afectarea dintelui vecin.',
        ],
      },
      {
        heading: 'Când extracția devine o opțiune',
        paragraphs: [
          'Extracția este luată în calcul când apar dureri repetate, inflamație, lipsă de spațiu, carii greu de tratat, afectarea dintelui vecin, infecții sau alte riscuri locale. În anumite cazuri, măseaua de minte inclusă este evaluată și din perspectivă ortodontică sau protetică.',
          'Decizia nu se bazează doar pe simptome, ci și pe poziție, acces, risc și imagine radiologică. O evaluare bună clarifică dacă este vorba despre monitorizare, tratament local sau extracție.',
        ],
      },
      {
        heading: 'Cum te pregătești și ce urmează după extracție',
        paragraphs: [
          'Înainte de extracție, medicul explică procedura, investigațiile necesare și recomandările postoperatorii. După intervenție, perioada de recuperare depinde de complexitatea cazului și de respectarea indicațiilor primite.',
          'Pacientul trebuie să urmărească semnele normale și semnalele de alarmă. O bună comunicare cu echipa medicală reduce anxietatea și contribuie la o recuperare mai predictibilă.',
        ],
      },
      {
        heading: 'Când trebuie să ceri consultația',
        paragraphs: [
          'Dacă ai episoade de durere în spatele arcadei, inflamație gingivală, miros neplăcut, dificultate la mestecat sau ai primit pe radiografie observația că măseaua de minte este inclusă, merită o consultație de chirurgie orală.',
          'Scopul consultației este să afli dacă trebuie doar urmărită, tratată sau extrasă. Decizia corectă se ia în cabinet, nu doar pe baza simptomelor ocazionale sau a părerilor din jur.',
        ],
      },
    ],
    faq: [
      {
        question: 'Trebuie scoasă orice măsea de minte?',
        answer:
          'Nu. Unele măsele de minte pot fi doar monitorizate, dacă sunt poziționate favorabil și nu creează probleme.',
      },
      {
        question: 'Cum știu dacă măseaua de minte este inclusă?',
        answer:
          'De regulă, acest lucru se confirmă clinic și imagistic, în urma unui consult stomatologic sau de chirurgie orală.',
      },
      {
        question: 'Durerea în spatele arcadei înseamnă automat extracție?',
        answer:
          'Nu automat. Poate fi nevoie de evaluare, monitorizare sau tratament local, în funcție de cauza reală.',
      },
    ],
    related: ['dupa-extractie-dentara', 'durere-de-masea', 'inainte-de-tratament'],
  },
  {
    slug: 'gingii-care-sangereaza',
    title: 'Gingii care sângerează: cauze, diferența dintre gingivită și parodontoză și când trebuie să te programezi',
    description:
      'Explicații clare pentru pacienții care observă sângerare gingivală și vor să înțeleagă cât de gravă poate fi.',
    excerpt:
      'De la gingivită la parodontoză: ce înseamnă sângerarea gingiilor și când este cazul să mergi la medic.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Gingii care sângerează: cauze și tratament | DrDent',
    metaDescription:
      'Află de ce sângerează gingiile, care este diferența dintre gingivită și parodontoză și când este recomandat consultul stomatologic.',
    seoKeywords: [
      'gingii care sangereaza',
      'gingivita tratament',
      'parodontoza simptome',
      'de ce imi sangereaza gingiile',
      'tratament gingii bucuresti',
    ],
    readTime: '8 min',
    lastUpdated: '2026-03-17',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi tratamentele parodontale',
    content: [
      {
        heading: 'Este normal să sângereze gingiile',
        paragraphs: [
          'Sângerarea gingiilor nu ar trebui considerată normală, chiar dacă mulți pacienți o observă doar la periaj și o ignoră. De cele mai multe ori, ea este un semn de inflamație locală produsă de placa bacteriană, tartru sau igienizare incorectă.',
          'În unele situații, sângerarea poate fi însoțită de gingii roșii, sensibile, umflate sau de respirație neplăcută. Aceste semne indică faptul că țesuturile gingivale au nevoie de evaluare și tratament.',
        ],
      },
      {
        heading: 'Cele mai frecvente cauze',
        paragraphs: [
          'Cauzele frecvente includ placa bacteriană, tartrul, tehnica incorectă de periaj, lucrările greu de igienizat, fumatul și anumite dezechilibre generale. Uneori, sângerarea apare în jurul zonelor unde pacientul evită periajul tocmai pentru că simte sensibilitate.',
          'Faptul că gingia sângerează nu înseamnă că trebuie oprită igienizarea. Din contră, este nevoie de o evaluare corectă și de instrucțiuni personalizate de igienă.',
        ],
      },
      {
        heading: 'Diferența dintre gingivită și parodontoză',
        paragraphs: [
          'Gingivita este inflamația gingiei și poate fi reversibilă dacă este tratată la timp. Parodontoza sau boala parodontală implică afectarea structurilor de susținere ale dintelui și reprezintă o problemă mai complexă.',
          'Practic, gingivita este un semnal de alarmă. Dacă este ignorată, în anumite cazuri poate evolua către forme mai severe de afectare parodontală.',
          'Pacienții care caută informații despre gingii care sângerează trebuie să înțeleagă că nu este vorba doar despre un disconfort minor, ci despre un simptom relevant clinic.',
        ],
      },
      {
        heading: 'Ce tratamente există',
        paragraphs: [
          'Tratamentul depinde de cauză și de stadiu. Poate include igienizare profesională, detartraj, air-flow, instrucțiuni personalizate de igienă și reevaluare. În cazurile mai avansate, planul poate include tratamente parodontale specifice.',
          'Scopul este reducerea inflamației, controlul plăcii bacteriene și stabilizarea țesuturilor. Pacientul are și un rol important, pentru că igiena de acasă și controalele regulate influențează direct evoluția.',
        ],
      },
      {
        heading: 'Când trebuie să te programezi',
        paragraphs: [
          'Dacă sângerarea este repetată, apare spontan, este însoțită de sensibilitate, respirație neplăcută sau retracție gingivală, este indicat un consult stomatologic.',
          'În București, mulți pacienți caută mai întâi online informații despre gingivită sau parodontoză, însă diferența reală o face evaluarea clinică. Un diagnostic corect permite tratamentul potrivit și poate preveni pierderea suportului dentar.',
        ],
      },
    ],
    faq: [
      {
        question: 'De ce îmi sângerează gingiile la periaj?',
        answer:
          'Cel mai frecvent, cauza este inflamația gingivală produsă de placa bacteriană și tartru, dar este importantă evaluarea medicală pentru confirmare.',
      },
      {
        question: 'Sângerarea gingiilor înseamnă automat parodontoză?',
        answer:
          'Nu automat. Poate fi gingivită sau altă problemă locală, dar simptomul nu trebuie ignorat pentru că poate evolua.',
      },
      {
        question: 'Se vindecă gingivita?',
        answer:
          'În multe situații, da, dacă este depistată la timp și tratată corect, împreună cu o igienă orală bună.',
      },
    ],
    related: ['boala-parodontala', 'ingrijire-zilnica-orala', 'durere-de-masea'],
  },
  {
    slug: 'sensibilitate-dentara',
    title: 'Sensibilitate dentară: de ce apare la rece, cald sau dulce și când trebuie să mergi la dentist',
    description: 'Explicații clare despre sensibilitatea dentară, cauze frecvente și momentele în care este indicat un consult stomatologic.',
    excerpt: 'De ce apar dinții sensibili, ce poate însemna acest simptom și când nu mai este bine să îl ignori.',
    category: 'educatie',
    categoryTitle: resourceCategoryMeta.educatie.title,
    seoTitle: 'Sensibilitate dentară: cauze, simptome și când mergi la dentist | DrDent',
    metaDescription: 'Află de ce apare sensibilitatea dentară la rece, cald sau dulce, ce cauze pot exista și când este recomandat un consult stomatologic.',
    seoKeywords: [
      'sensibilitate dentara',
      'dinti sensibili la rece',
      'durere la rece dinti',
      'sensibilitate dentara cauze',
      'dinti sensibili la cald sau dulce',
    ],
    readTime: '7 min',
    lastUpdated: '2026-04-01',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Programează un consult stomatologic',
    content: [
      {
        heading: 'Ce înseamnă sensibilitatea dentară',
        paragraphs: [
          'Sensibilitatea dentară este un disconfort scurt, ascuțit sau repetitiv care apare atunci când dinții intră în contact cu stimuli precum rece, cald, dulce, acru sau chiar aer rece. Pentru unii pacienți, senzația apare doar ocazional. Pentru alții, devine suficient de frecventă încât începe să afecteze alimentația, periajul sau confortul de zi cu zi.',
          'Important este că sensibilitatea dentară nu reprezintă un diagnostic în sine, ci un simptom. Ea poate avea cauze simple și ușor de controlat, dar poate semnala și probleme care au nevoie de evaluare stomatologică.'
        ],
      },
      {
        heading: 'De ce apare la rece, cald sau dulce',
        paragraphs: [
          'În mod normal, smalțul și gingia protejează zonele sensibile ale dintelui. Atunci când această protecție scade, stimulii termici sau chimici pot ajunge mai ușor la structurile interne ale dintelui și pot provoca durere sau disconfort.',
          'De aceea, unii pacienți simt o reacție puternică atunci când beau apă rece, consumă alimente dulci sau respiră aer rece. Uneori sensibilitatea apare doar într-un anumit dinte, iar alteori afectează mai mulți dinți în același timp.'
        ],
      },
      {
        heading: 'Cauze frecvente ale sensibilității dentare',
        paragraphs: [
          'Printre cauzele frecvente se numără retracția gingivală, periajul prea agresiv, uzura smalțului, consumul frecvent de alimente și băuturi acide, cariile incipiente, fisurile dentare, lucrările dentare care trebuie verificate sau inflamațiile gingivale. Uneori, sensibilitatea poate apărea și după anumite proceduri stomatologice, fără să însemne automat o complicație.',
          'Există și situații în care pacientul crede că are doar dinți sensibili, dar în realitate este vorba despre o carie, o problemă la nivelul gingiei, un contact incorect între dinți sau o altă cauză care trebuie diferențiată clinic. Tocmai de aceea, sensibilitatea care persistă nu este bine să fie tratată doar empiric, fără evaluare.'
        ],
      },
      {
        heading: 'Când poate apărea după albire, igienizare sau periaj',
        paragraphs: [
          'După unele proceduri estetice sau de igienizare, sensibilitatea poate apărea temporar și se poate reduce treptat în zilele următoare. Intensitatea și durata depind de sensibilitatea individuală, de starea inițială a dinților și de particularitățile fiecărui caz clinic.',
          'Pe de altă parte, dacă disconfortul apare frecvent după periaj, în timpul masticației sau la contactul cu alimente obișnuite, este util să fie analizată tehnica de periaj, tipul de periuță folosit, existența retracției gingivale sau a altor cauze locale. Nu orice sensibilitate este „normală”, chiar dacă pare ușor de suportat.'
        ],
      },
      {
        heading: 'Ce poți face și când trebuie să mergi la dentist',
        paragraphs: [
          'Dacă sensibilitatea este ușoară și recent apărută, poate ajuta evitarea temporară a alimentelor foarte reci sau acide, folosirea unei tehnici de periaj blânde și alegerea produselor recomandate de medic pentru dinți sensibili. Totuși, aceste măsuri nu înlocuiesc evaluarea atunci când simptomul persistă sau reapare.',
          'Este recomandat să mergi la dentist dacă sensibilitatea durează, se agravează, apare într-un singur dinte, este însoțită de durere spontană, sângerare gingivală, disconfort la masticație sau dacă ai observat retracție gingivală, fisuri ori modificări vizibile la nivelul dintelui. Un consult corect poate stabili cauza reală și soluția potrivită pentru cazul tău.'
        ],
      },
    ],
    faq: [
      {
        question: 'Este normal să mă doară dinții la rece din când în când?',
        answer: 'O sensibilitate scurtă poate apărea ocazional, dar dacă se repetă frecvent, se intensifică sau afectează alimentația și periajul, este bine să fie evaluată stomatologic.',
      },
      {
        question: 'Sensibilitatea dentară înseamnă automat carie?',
        answer: 'Nu automat. Poate avea mai multe cauze, de la retracție gingivală și uzură de smalț până la carii, fisuri sau inflamații locale. Diferența se face prin consult clinic.',
      },
      {
        question: 'Ce fac dacă sensibilitatea a apărut după albire dentară?',
        answer: 'În unele cazuri, sensibilitatea după albire poate fi temporară. Dacă persistă, este intensă sau nu se reduce treptat, merită să discuți cu medicul stomatolog pentru reevaluare și recomandări adaptate.',
      },
    ],
    related: [
      'albirea-dentara-optiuni-rezultate',
      'boala-parodontala',
      'ingrijire-zilnica-orala',
    ],
  },
  {
    slug: 'tratament-de-canal',
    title: 'Tratament de canal: când este necesar, cum se desfășoară și ce trebuie să știți despre recuperare',
    description: 'Aflați când este recomandat tratamentul de canal, cum decurge procedura și la ce să vă așteptați după intervenție. Un ghid clar pentru pacienții care vor să înțeleagă mai bine această etapă de tratament.',
    excerpt: 'Tratamentul de canal este una dintre procedurile prin care un dinte afectat în profunzime poate fi salvat. Dacă apar durere persistentă, sensibilitate accentuată sau semne de infecție, este important să înțelegeți când este necesar acest tratament, cum se desfășoară și cum decurge recuperarea după procedură.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Tratament de canal: când este necesar și cum se desfășoară',
    metaDescription: 'Când este necesar tratamentul de canal, cum se desfășoară și cât durează recuperarea. Informații clare pentru pacienții care se pregătesc de un consult stomatologic.',
    seoKeywords: [
      'tratament de canal',
      'când este necesar tratamentul de canal',
      'cum se face tratamentul de canal',
      'recuperare după tratament de canal',
      'durere după tratament de canal',
      'infecție dentară tratament',
      'endodonție',
      'nerv scos la dinte',
    ],
    readTime: '6 min',
    lastUpdated: '2026-04-20',
    primaryRoute: '/servicii',
    primaryRouteLabel: 'Vezi serviciile',
    content: [
      {
        heading: 'Ce este tratamentul de canal',
        paragraphs: [
          'Tratamentul de canal, numit și tratament endodontic, este procedura prin care se îndepărtează țesutul afectat din interiorul dintelui, se curăță și se dezinfectează canalele radiculare, iar apoi acestea se sigilează. Scopul tratamentului este salvarea dintelui natural atunci când pulpa dentară este inflamată sau infectată. Procedura este parte din stomatologia conservatoare modernă și urmărește păstrarea dintelui pe arcadă, atunci când acest lucru este posibil. Informația despre rolul tratamentului endodontic în salvarea dintelui este susținută de ghidurile Asociației Americane de Endodonție și de resursele Mayo Clinic.',
        ],
      },
      {
        heading: 'Când este necesar tratamentul de canal',
        paragraphs: [
          'Tratamentul de canal poate fi recomandat atunci când caria a avansat în profunzime, când există o inflamație severă a nervului dentar, o infecție la rădăcina dintelui sau când dintele a fost afectat de un traumatism. În unele situații, dintele poate părea intact la exterior, dar în interior există deja modificări care necesită tratament. De aceea, diagnosticul corect se stabilește în urma consultului clinic și a investigațiilor imagistice. Indicațiile uzuale pentru tratament endodontic sunt descrise în sursele medicale de referință.',
        ],
      },
      {
        heading: 'Semne care pot indica nevoia unui tratament de canal',
        paragraphs: [
          'Printre simptomele care pot sugera necesitatea unui tratament de canal se numără:',
          'durere dentară persistentă',
          'sensibilitate intensă la rece sau la cald',
          'disconfort la masticație',
          'senzație de presiune în jurul dintelui',
          'inflamație sau umflare la nivelul gingiei',
          'modificarea culorii dintelui',
          'apariția unei infecții sau a unui abces',
          'Este important de reținut că nu toate infecțiile dentare provoacă din prima durere puternică. Uneori, problema este descoperită la control, înainte să apară un episod dureros sever.',
        ],
      },
      {
        heading: 'Cum se desfășoară tratamentul de canal',
        paragraphs: [
          'Tratamentul începe cu evaluarea clinică a dintelui și stabilirea diagnosticului. După anestezie locală, medicul creează acces în interiorul dintelui, îndepărtează țesutul afectat, curăță și dezinfectează canalele radiculare, apoi le sigilează. În funcție de situație, dintele este ulterior reconstruit, iar uneori poate fi recomandată o coroană pentru protecție și rezistență pe termen lung.',
          'Pentru pacient, este important să știe că tratamentul nu urmărește doar eliminarea durerii, ci și controlul infecției și păstrarea funcționalității dintelui.',
        ],
      },
      {
        heading: 'Tratamentul de canal doare?',
        paragraphs: [
          'Una dintre cele mai frecvente temeri ale pacienților este legată de durere. În realitate, tratamentul de canal se realizează cu anestezie locală, iar procedurile moderne sunt concepute pentru a reduce cât mai mult disconfortul. În cele mai multe cazuri, durerea asociată infecției dentare este mai mare decât cea resimțită în timpul tratamentului. Ghidurile pentru pacienți publicate de organizațiile medicale și de clinicile de referință descriu tratamentul modern de canal ca fiind, de regulă, bine tolerat.',
        ],
      },
      {
        heading: 'Cât durează tratamentul',
        paragraphs: [
          'Durata tratamentului diferă de la un caz la altul. Ea depinde de dintele afectat, de numărul canalelor, de anatomia rădăcinilor și de prezența sau absența unei infecții active. Unele cazuri pot fi tratate într-o singură ședință, iar altele pot necesita mai multe vizite. Din perspectiva pacientului, cel mai important este ca tratamentul să fie realizat corect, cu atenție la fiecare etapă, nu grăbit.',
        ],
      },
      {
        heading: 'Cum decurge recuperarea',
        paragraphs: [
          'După tratament, este posibil să apară o sensibilitate ușoară sau moderată în zona dintelui, mai ales la masticație, pentru câteva zile. Acest lucru este normal în multe situații și nu înseamnă neapărat că tratamentul nu a reușit. În general, recuperarea este ușoară, iar pacientul își poate relua activitățile obișnuite destul de repede. Disconfortul tinde să scadă treptat în zilele următoare, conform ghidurilor de îngrijire post-tratament.',
        ],
      },
      {
        heading: 'Ce este normal după tratament',
        paragraphs: [
          'După un tratament de canal, pot apărea:',
          'sensibilitate la atingere sau mușcătură',
          'o ușoară jenă locală',
          'senzație de presiune în primele zile',
          'disconfort temporar până la finalizarea reconstrucției definitive',
          'Aceste reacții pot face parte din evoluția normală post-tratament, atâta timp cât se reduc progresiv.',
        ],
      },
      {
        heading: 'Când trebuie să reveniți la medic',
        paragraphs: [
          'Este recomandat să reveniți cât mai curând la medic dacă apar:',
          'durere intensă care nu cedează',
          'umflătură care se accentuează',
          'senzația că mușcătura nu este corectă',
          'revenirea simptomelor după o perioadă de ameliorare',
          'pierderea obturației provizorii sau definitive',
          'Un control la timp poate preveni complicațiile și poate ajuta la ajustarea tratamentului, dacă este necesar.',
        ],
      },
      {
        heading: 'De ce este important să nu amânați',
        paragraphs: [
          'Atunci când nervul dintelui este afectat, amânarea tratamentului poate favoriza evoluția infecției și poate reduce șansele de a păstra dintele. În multe cazuri, cu cât tratamentul este început mai repede, cu atât intervenția poate fi mai simplă și prognosticul mai bun. Această concluzie este în linie cu recomandările generale privind managementul infecțiilor dentare și al afectării pulpei dentare.',
        ],
      },
      {
        heading: 'Concluzie',
        paragraphs: [
          'Tratamentul de canal este o soluție eficientă atunci când un dinte este afectat în profunzime, dar poate fi încă salvat. Cu un diagnostic corect și un plan de tratament bine stabilit, această procedură poate elimina infecția, reduce disconfortul și ajuta la păstrarea dintelui natural. Dacă aveți simptome precum durere persistentă, sensibilitate accentuată sau inflamație în jurul unui dinte, un consult stomatologic este cel mai bun pas pentru a afla ce tratament este necesar.',
        ],
      },
    ],
    faq: [
      {
        question: 'Când este necesar tratamentul de canal?',
        answer: 'Tratamentul de canal este necesar atunci când pulpa dintelui este inflamată sau infectată, de obicei din cauza unei carii profunde, a unei infecții sau a unui traumatism.',
      },
      {
        question: 'Tratamentul de canal se face cu anestezie?',
        answer: 'Da, în mod obișnuit tratamentul se face cu anestezie locală, pentru ca procedura să fie cât mai confortabilă pentru pacient.',
      },
      {
        question: 'Cât durează recuperarea după tratament?',
        answer: 'În general, disconfortul este ușor și temporar. Mulți pacienți își reiau activitățile normale rapid, iar sensibilitatea scade treptat în următoarele zile.',
      },
      {
        question: 'După tratament mai trebuie făcut ceva?',
        answer: 'În multe cazuri, da. După tratamentul de canal, dintele poate avea nevoie de reconstrucție sau de o coroană, pentru protecție și rezistență pe termen lung.',
      },
      {
        question: 'Ce se întâmplă dacă amân tratamentul?',
        answer: 'Amânarea poate duce la agravarea infecției, la dureri mai mari și, în unele cazuri, la pierderea dintelui.',
      },
    ],
    related: ['durere-de-masea', 'implant-dentar-bucuresti', 'ingrijirea-coroanelor-facetelor'],
  },
  {
    slug: 'detartraj-dentar',
    title: 'Detartraj dentar: cât de des se face, ce beneficii are și când este recomandat',
    description: 'Află ce este detartrajul dentar, de ce este important pentru sănătatea gingiilor și cât de des este recomandat în funcție de fiecare pacient.',
    excerpt: 'Detartrajul ajută la îndepărtarea tartrului și la prevenirea inflamațiilor gingivale. Vezi când este recomandat și de ce nu trebuie amânat.',
    category: 'tratamente',
    categoryTitle: resourceCategoryMeta.tratamente.title,
    seoTitle: 'Detartraj dentar: beneficii, frecvență și recomandări | DrDent',
    metaDescription: 'Află cât de des se face detartrajul dentar, ce beneficii are și de ce este important pentru prevenirea gingivitei și a problemelor parodontale.',
    seoKeywords: [
      'detartraj dentar',
      'cat de des se face detartrajul',
      'detartraj bucuresti',
      'igienizare dentara profesionala',
      'tartru dentar',
      'detartraj si airflow',
      'prevenire gingivita',
    ],
    readTime: '7 min',
    lastUpdated: '2026-05-01',
    primaryRoute: '/contact',
    primaryRouteLabel: 'Programează o igienizare dentară',
    content: [
      {
        heading: 'Ce este detartrajul dentar',
        paragraphs: [
          'Detartrajul dentar este procedura prin care medicul stomatolog îndepărtează tartrul depus pe dinți și în apropierea gingiilor. Tartrul nu poate fi curățat eficient acasă prin periaj obișnuit, deoarece este o depunere mineralizată care aderă puternic pe suprafața dentară.',
          'Scopul detartrajului nu este doar estetic. Procedura ajută la menținerea gingiilor sănătoase, reduce inflamația locală și contribuie la prevenirea problemelor parodontale atunci când este realizată periodic.',
        ],
      },
      {
        heading: 'De ce apare tartrul',
        paragraphs: [
          'Tartrul se formează atunci când placa bacteriană nu este îndepărtată complet și se mineralizează în timp. Zonele greu accesibile, periajul incomplet, lipsa folosirii aței dentare sau anumite particularități ale salivei pot favoriza acumularea lui.',
          'Chiar și pacienții care se spală zilnic pe dinți pot avea depuneri de tartru. De aceea, igienizarea profesională nu înlocuiește rutina de acasă, ci o completează.',
        ],
      },
      {
        heading: 'Cât de des este recomandat detartrajul',
        paragraphs: [
          'Frecvența detartrajului se stabilește în funcție de fiecare pacient. Pentru unele persoane, o igienizare profesională la 6 luni poate fi suficientă. Pentru pacienții cu inflamații gingivale, tartru abundent, lucrări dentare, implanturi sau risc parodontal, medicul poate recomanda controale mai dese.',
          'Nu există o regulă unică potrivită pentru toată lumea. Cel mai corect este ca medicul să evalueze gingiile, nivelul de igienă, prezența tartrului și istoricul pacientului înainte de a recomanda intervalul potrivit.',
        ],
      },
      {
        heading: 'Detartrajul doare?',
        paragraphs: [
          'În general, detartrajul este o procedură bine tolerată. Pacienții pot simți vibrații, presiune locală sau sensibilitate, mai ales dacă există inflamație gingivală, retracții gingivale sau tartru acumulat în cantitate mare.',
          'Dacă există disconfort, medicul poate adapta procedura. Este important ca pacientul să comunice orice sensibilitate, pentru ca igienizarea să fie realizată cât mai confortabil.',
        ],
      },
      {
        heading: 'Ce se întâmplă după detartraj',
        paragraphs: [
          'După detartraj, gingiile pot fi ușor sensibile pentru o perioadă scurtă, mai ales dacă înainte existau inflamație sau sângerare. De obicei, această sensibilitate se reduce treptat, iar senzația de curățenie este vizibilă rapid.',
          'Medicul poate recomanda o tehnică mai bună de periaj, folosirea aței dentare, periuțe interdentare sau controale periodice. Rezultatul se menține mai bine atunci când igiena de acasă este corectă și constantă.',
        ],
      },
    ],
    faq: [
      {
        question: 'Detartrajul afectează smalțul?',
        answer: 'Detartrajul realizat corect, în cabinet, nu are ca scop afectarea smalțului, ci îndepărtarea tartrului și a depunerilor de pe suprafața dentară.',
      },
      {
        question: 'Este normal să sângereze gingiile după detartraj?',
        answer: 'Poate apărea o ușoară sensibilitate sau sângerare dacă gingiile erau deja inflamate. Dacă simptomele persistă sau se agravează, este indicat un control.',
      },
      {
        question: 'Detartrajul albește dinții?',
        answer: 'Detartrajul îndepărtează tartrul și unele depuneri, dar nu schimbă nuanța internă a dintelui așa cum o face o procedură de albire dentară.',
      },
    ],
    related: [
      'gingii-care-sangereaza',
      'boala-parodontala',
      'ingrijire-zilnica-orala',
    ],
  },
];

export function getResource(slug: string) {
  return resourcesData.find((resource) => resource.slug === slug);
}

export function getRelatedResources(slugs: string[] = []) {
  return resourcesData.filter((resource) => slugs.includes(resource.slug));
}

export function groupResourcesByCategory() {
  return Object.entries(resourceCategoryMeta).map(([categoryKey, meta]) => ({
    category: categoryKey as ResourceCategoryKey,
    title: meta.title,
    icon: meta.icon,
    intro: meta.intro,
    resources: resourcesData.filter((resource) => resource.category === categoryKey),
  }));
}
