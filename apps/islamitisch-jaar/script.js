// ─── Islamitische kalenderberekening ─────────────────────────────────────────

function gregorianToHijri(year, month, day) {
  const jd =
    Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
    Math.floor((367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12) -
    Math.floor((3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4) +
    day - 32075;

  let l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
    Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l =
    l -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const hMonth = Math.floor((24 * l) / 709);
  const hDay = l - Math.floor((709 * hMonth) / 24);
  const hYear = 30 * n + j - 30;
  return { year: hYear, month: hMonth, day: hDay };
}

function getMoonPhase(date) {
  const knownNewMoon = new Date(2000, 0, 6, 18, 14);
  const lunarCycle = 29.53058867;
  const daysSince = (date - knownNewMoon) / 86400000;
  return ((daysSince % lunarCycle) + lunarCycle) % lunarCycle;
}

// ─── Maanddata ────────────────────────────────────────────────────────────────

const MAANDEN = [
  {
    nummer: 1,
    arabisch: "مُحَرَّم",
    naam: "Muharram",
    betekenis: "De Heilige — verboden maand",
    karakter:
      "Muharram is de eerste maand van het islamitische jaar en een van de vier heilige maanden. Het is een tijd voor reflectie, nieuwe intenties en vernieuwde toewijding.",
    gradient: ["#1a0a0a", "#6b1a1a"],
    gradientLicht: ["#fdf2f2", "#f5d5d5"],
    emoji: "🌙",
    bijzondereDagen: [
      { dag: 1, naam: "Islamitisch Nieuwjaar", beschrijving: "Eerste dag van het nieuwe hijri-jaar — maak intenties en reflecteer." },
      { dag: 9, naam: "Dag vóór Ashura", beschrijving: "Aanbevolen om ook deze dag te vasten." },
      { dag: 10, naam: "Ashura", beschrijving: "De Profeet ﷺ vastte op deze dag. Mozes ﷺ en zijn volk werden gered." },
    ],
    aanbevelingen: [
      "Vast op de 9e én 10e van Muharram (Ashura)",
      "Maak du'a voor het nieuwe jaar — intenties stellen",
      "Besteed de heilige maand aan extra dhikr en Koranrecitatie",
    ],
    hadith: {
      tekst: "De beste vastendag na Ramadan is de maand van Allah, Muharram.",
      bron: "Sahih Muslim",
    },
    portaalApps: [],
    actie: "Vast op de 9e en 10e van Muharram voor de vergiffenis van het afgelopen jaar.",
  },
  {
    nummer: 2,
    arabisch: "صَفَر",
    naam: "Safar",
    betekenis: "Leeg — de maand van de reis",
    karakter:
      "Safar is een maand zonder bijzondere historische gebeurtenissen — en dat is precies de les. Islam leert ons dat elke dag van het jaar waardevol is, ongeacht of er een speciaal moment aan vastzit.",
    gradient: ["#0a1f0a", "#2d5a2d"],
    gradientLicht: ["#f2f8f2", "#d5e8d5"],
    emoji: "🌿",
    bijzondereDagen: [],
    aanbevelingen: [
      "Houd de dagelijkse gebeden met aandacht — istiamah in de 'stille' maanden",
      "Vast op maandag en donderdag (Sunnah van de Profeet ﷺ)",
      "Lees dagelijks Koran, al is het maar een paar verzen",
    ],
    hadith: {
      tekst: "De meest geliefde daden bij Allah zijn die welke het meest consistent zijn, zelfs als ze klein zijn.",
      bron: "Sahih Bukhari & Muslim",
    },
    portaalApps: [],
    actie: "Kies één goede daad die je deze maand elke dag doet — klein maar consistent.",
  },
  {
    nummer: 3,
    arabisch: "رَبِيعُ الأَوَّل",
    naam: "Rabi al-Awwal",
    betekenis: "Eerste lente",
    karakter:
      "In deze maand werd de Profeet Muhammad ﷺ geboren. Het is een tijd om zijn leven te bestuderen, zijn karakter te overdenken en dankbaarheid te uiten voor zijn komst als genade voor de werelden.",
    gradient: ["#0a1a2e", "#1a5c3a"],
    gradientLicht: ["#f0f4ff", "#d5f0e0"],
    emoji: "☀️",
    bijzondereDagen: [
      { dag: 12, naam: "Mawlid an-Nabi ﷺ", beschrijving: "Herdenking van de geboorte van de Profeet Muhammad ﷺ (traditioneel vastgesteld)." },
    ],
    aanbevelingen: [
      "Stuur salaah (zegeningen) op de Profeet ﷺ — extra in deze maand",
      "Lees over zijn Sirah — zijn leven en karakter",
      "Volg een Sunnah die je nog niet deed: tandverzorging (miswak), vriendelijkheid, glimlach",
    ],
    hadith: {
      tekst: "Zend zegeningen op mij — want wie ook één maal zegeningen op mij stuurt, Allah stuurt tien zegeningen op hem.",
      bron: "Sahih Muslim",
    },
    portaalApps: ["sirah-explorer", "sirah-motion"],
    actie: "Stuur vandaag honderd keer salaah op de Profeet ﷺ: اللهم صل على محمد",
  },
  {
    nummer: 4,
    arabisch: "رَبِيعُ الآخِر",
    naam: "Rabi al-Thani",
    betekenis: "Tweede lente",
    karakter:
      "De tweede lentemaand is een tijd van voortgang. De inspiratie van Rabi al-Awwal mag niet verdwijnen — dit is de maand om wat je leerde te verankeren in je dagelijkse leven.",
    gradient: ["#1a2e0a", "#4a7a2d"],
    gradientLicht: ["#f4f8f0", "#e0f0d0"],
    emoji: "🌱",
    bijzondereDagen: [],
    aanbevelingen: [
      "Verdiep één eigenschap van de Profeet ﷺ in je eigen leven",
      "Vast op de witte dagen: 13, 14 en 15 van de maand",
      "Bezoek familie en onderhoud familiebanden (sila ar-rahim)",
    ],
    hadith: {
      tekst: "Wie gelooft in Allah en de Laatste Dag, laat hij zijn familiebanden onderhouden.",
      bron: "Sahih Bukhari",
    },
    portaalApps: [],
    actie: "Neem vandaag contact op met een familielid of vriend die je lang niet gesproken hebt.",
  },
  {
    nummer: 5,
    arabisch: "جُمَادَى الأُولَى",
    naam: "Jumada al-Awwal",
    betekenis: "Eerste droogte",
    karakter:
      "De naam verwijst naar de droge periode. In de islamitische spiritualiteit staat dit voor volharding: doorgaan met aanbidding ook als er geen uiterlijke impuls is. Dat is het teken van oprechtheid.",
    gradient: ["#2e1a0a", "#7a4a1a"],
    gradientLicht: ["#fff8f0", "#f0ddc0"],
    emoji: "🏜️",
    bijzondereDagen: [],
    aanbevelingen: [
      "Evalueer je gebeden — zijn ze op tijd? Met khushoo'?",
      "Geef sadaqah — ook al is het klein",
      "Lees Surah al-Kahf elke vrijdag",
    ],
    hadith: {
      tekst: "Sadaqah blust de zonde zoals water het vuur blust.",
      bron: "Sunan at-Tirmidhi",
    },
    portaalApps: [],
    actie: "Geef vandaag sadaqah — al is het maar een kleine bijdrage aan een goed doel.",
  },
  {
    nummer: 6,
    arabisch: "جُمَادَى الآخِرَة",
    naam: "Jumada al-Thani",
    betekenis: "Tweede droogte",
    karakter:
      "Halverwege het islamitische jaar. Een moment om te pauzeren: wat heb ik dit jaar al gerealiseerd? Welke intenties heb ik aan het begin van Muharram gesteld, en waar sta ik nu?",
    gradient: ["#1e1408", "#6b4f1e"],
    gradientLicht: ["#fff8f0", "#eddcc8"],
    emoji: "⚖️",
    bijzondereDagen: [],
    aanbevelingen: [
      "Doe een tussenevaluatie van je spirituele doelen dit jaar",
      "Maak tawbah — oprechte berouw voor zonden",
      "Vernieuw je intentie (niyyah) voor alle daden",
    ],
    hadith: {
      tekst: "Alle daden worden beoordeeld naar intentie, en ieder krijgt wat hij beoogde.",
      bron: "Sahih Bukhari & Muslim",
    },
    portaalApps: [],
    actie: "Schrijf drie dingen op die je de tweede helft van dit islamitische jaar wilt verbeteren.",
  },
  {
    nummer: 7,
    arabisch: "رَجَب",
    naam: "Rajab",
    betekenis: "Eerbied — de maand van ontzag",
    karakter:
      "Rajab is een van de vier heilige maanden. In deze maand vond de Isra wal Mi'raj plaats: de nachtelijke reis van de Profeet ﷺ naar Jeruzalem en zijn hemelvaart, waarbij de vijf dagelijkse gebeden werden voorgeschreven.",
    gradient: ["#1a0533", "#4c1d95"],
    gradientLicht: ["#f5f0ff", "#e2d5f8"],
    emoji: "✨",
    bijzondereDagen: [
      { dag: 27, naam: "Isra wal Mi'raj (traditioneel)", beschrijving: "De nachtelijke reis en hemelvaart van de Profeet ﷺ — de oorsprong van de vijf dagelijkse gebeden." },
    ],
    aanbevelingen: [
      "Verdiep je in de betekenis van het gebed — waarom vijf keer per dag?",
      "Verhoog vrijwillige gebeden (nawafil) in deze heilige maand",
      "Reflecteer op de Isra wal Mi'raj: de waarde van Masjid al-Aqsa in de Islam",
    ],
    hadith: {
      tekst: "Rajab is de maand van Allah, Sha'ban is mijn maand, en Ramadan is de maand van mijn gemeenschap.",
      bron: "overgeleverd, met discussie over authenticiteit",
    },
    portaalApps: ["gebed-quiz"],
    actie: "Verricht vandaag de Doha-gebed (2–12 raka'at na zonsopgang) — het gebed van de dankbaren.",
  },
  {
    nummer: 8,
    arabisch: "شَعْبَان",
    naam: "Sha'ban",
    betekenis: "Verspreiding — de vergeten maand",
    karakter:
      "Sha'ban is de maand vóór Ramadan. De Profeet ﷺ vastte meer in Sha'ban dan in enige andere maand buiten Ramadan. Het is de maand van voorbereiding — spiritueel, fysiek en mentaal.",
    gradient: ["#0a1a3e", "#1a4a8a"],
    gradientLicht: ["#f0f4ff", "#d0e0f8"],
    emoji: "🌊",
    bijzondereDagen: [
      { dag: 15, naam: "Laylat al-Bara'at", beschrijving: "De nacht van de 15e Sha'ban — traditioneel een nacht van du'a en vergeving." },
    ],
    aanbevelingen: [
      "Begin met vrijwillig vasten ter voorbereiding op Ramadan",
      "Herstel gemiste verplichte vastendagen (qada) van vorig jaar",
      "Stel een Ramadan-plan op: Korandoel, sadaqah, tahajjud",
    ],
    hadith: {
      tekst: "Dit is een maand die mensen verwaarlozen, tussen Rajab en Ramadan. In deze maand worden daden opgeheven naar Allah, en ik wil dat mijn daden opgeheven worden terwijl ik vast.",
      bron: "Sunan an-Nasa'i",
    },
    portaalApps: [],
    actie: "Maak een concreet Ramadan-plan: hoeveel Koran per dag, welke goede daad dagelijks, wanneer tahajjud.",
  },
  {
    nummer: 9,
    arabisch: "رَمَضَان",
    naam: "Ramadan",
    betekenis: "Verbrandende hitte — zuivering",
    karakter:
      "De heiligste maand van het islamitische jaar. Verplicht vasten van zonsopgang tot zonsondergang, verhoogde aanbidding, Koranrecitatie, en de zoektocht naar Laylat al-Qadr in de laatste tien nachten.",
    gradient: ["#1a1f00", "#b8960c"],
    gradientLicht: ["#fffef0", "#f8edb0"],
    emoji: "⭐",
    bijzondereDagen: [
      { dag: 1, naam: "Begin van Ramadan", beschrijving: "De vasten beginnen bij de eerste sikkel van de maan." },
      { dag: 21, naam: "Begin laatste tien nachten", beschrijving: "De meest gezegendste periode — zoek Laylat al-Qadr." },
      { dag: 27, naam: "Laylat al-Qadr (traditioneel)", beschrijving: "Beter dan duizend maanden. Verricht zo veel mogelijk aanbidding." },
    ],
    aanbevelingen: [
      "Voltooi de Koran minstens één keer — plan ~20 pagina's per dag",
      "Verricht Tarawih-gebed elke nacht",
      "Zoek Laylat al-Qadr in de oneven nachten van de laatste tien",
      "Geef Zakat al-Fitr voor Eid",
    ],
    hadith: {
      tekst: "Wanneer Ramadan binnenkomt, worden de poorten van de hemel geopend, de poorten van de hel gesloten, en de duivels geketend.",
      bron: "Sahih Bukhari & Muslim",
    },
    portaalApps: ["ramadan-quiz", "ramadan-explorer", "ramadan-kalender", "tuin-van-dzikr", "nacht-van-qadr"],
    actie: "Plan je dag vandaag rond de gebedstijden — niet andersom.",
  },
  {
    nummer: 10,
    arabisch: "شَوَّال",
    naam: "Shawwal",
    betekenis: "Optillen — verheffen",
    karakter:
      "Na Ramadan begint Shawwal met Eid al-Fitr — een dag van vreugde en dankbaarheid. Maar de maand heeft meer: zes vrijwillige vastendagen, die samen met Ramadan het equivalent zijn van een heel jaar vasten.",
    gradient: ["#0a2e1a", "#1a7a45"],
    gradientLicht: ["#f0fff4", "#c8f0d8"],
    emoji: "🎉",
    bijzondereDagen: [
      { dag: 1, naam: "Eid al-Fitr", beschrijving: "Dag van vreugde. Verbreek je vasten, bid het Eid-gebed en vier met familie." },
    ],
    aanbevelingen: [
      "Verricht zes vrijwillige vastendagen in Shawwal",
      "Onderhoud de goede gewoonten die je in Ramadan opbouwde",
      "Betaal Sadaqah al-Fitr vóór het Eid-gebed",
    ],
    hadith: {
      tekst: "Wie Ramadan vast en dit vervolgt met zes dagen Shawwal, is als degene die het hele jaar gevast heeft.",
      bron: "Sahih Muslim",
    },
    portaalApps: ["ramadan-quiz-eid", "ramadan-deelkaarten"],
    actie: "Plan de zes Shawwal-vastendagen in je agenda — verspreid of aaneengesloten.",
  },
  {
    nummer: 11,
    arabisch: "ذُو الْقَعْدَة",
    naam: "Dhul Qa'dah",
    betekenis: "Bezitter van rust — de stilstaande maand",
    karakter:
      "Een heilige maand van rust en voorbereiding. Historisch gezien was dit de maand waarin moslims zich klaarmakten voor de Hajj. Ook voor wie niet gaat: een tijd van innerlijke voorbereiding en vrede.",
    gradient: ["#2e1f05", "#8b6914"],
    gradientLicht: ["#fffaf0", "#f0e0b0"],
    emoji: "🕌",
    bijzondereDagen: [],
    aanbevelingen: [
      "Verhoog dhikr en istighfar in deze heilige maand",
      "Leer meer over de Hajj — ook als je niet gaat",
      "Onderhoud familiebanden ter voorbereiding op Dhul Hijjah",
    ],
    hadith: {
      tekst: "De heilige maanden zijn vier: Rajab, Dhul Qa'dah, Dhul Hijjah en Muharram.",
      bron: "Sahih Bukhari",
    },
    portaalApps: [],
    actie: "Leer vandaag de Talbiyah — het gebed van de pelgrims: لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ",
  },
  {
    nummer: 12,
    arabisch: "ذُو الْحِجَّة",
    naam: "Dhul Hijjah",
    betekenis: "Bezitter van de bedevaart",
    karakter:
      "De eerste tien dagen van Dhul Hijjah zijn de beste dagen van het jaar — beter dan de laatste tien nachten van Ramadan. Voor iedereen, niet alleen de pelgrims. Dhikr, vasten op Arafah, en Eid al-Adha zijn de hoogtepunten.",
    gradient: ["#0a2e0a", "#1a6b1a"],
    gradientLicht: ["#f0fff0", "#c8f0c8"],
    emoji: "🌿",
    bijzondereDagen: [
      { dag: 1, naam: "Begin beste tien dagen", beschrijving: "Verhoog aanbidding — dhikr, Koran, vrijwillig vasten." },
      { dag: 8, naam: "Dag van Tarwiyah", beschrijving: "Pelgrims reizen naar Mina." },
      { dag: 9, naam: "Dag van Arafah", beschrijving: "De grootste dag van het jaar. Vasten vergeeft twee jaar zonden. Pelgrims staan op de vlakte van Arafah." },
      { dag: 10, naam: "Eid al-Adha", beschrijving: "Dag van het Offer. Qurbani (offerdier), Eid-gebed en vreugde." },
      { dag: 11, naam: "Eerste dag van Tashreeq", beschrijving: "Drie dagen van herdenking en dhikr na Eid." },
    ],
    aanbevelingen: [
      "Vast op de dag van Arafah (9 Dhul Hijjah) — vergeving van twee jaar zonden",
      "Zeg de Takbeer veel: اللهُ أكبر اللهُ أكبر لا إله إلا اللهُ، اللهُ أكبر اللهُ أكبر وللهِ الحمد",
      "Wie qurbani wil doen: knip haar/nagels niet vanaf 1 Dhul Hijjah",
      "Verhoog alle goede daden in de eerste tien dagen",
    ],
    hadith: {
      tekst: "Er zijn geen dagen waarop rechtvaardig handelen Allah meer geliefd is dan in deze tien dagen.",
      bron: "Sahih Bukhari",
    },
    portaalApps: ["tuin-van-dzikr", "de-waardevolle-tien", "gebed-quiz"],
    actie: "Begin vandaag met de takbeer van Dhul Hijjah — hardop, in je hart, en deel het met je gezin.",
  },
];

// ─── "Altijd"-sectie: terugkerende praktijken ────────────────────────────────

const ALTIJD = {
  dagelijks: [
    { naam: "Vijf dagelijkse gebeden", omschrijving: "Fajr, Dhuhr, Asr, Maghrib, Isha — de pijlers van de dag." },
    { naam: "Ochtend- en avonddzkir", omschrijving: "Bescherming en verbinding met Allah bij zonsopgang en -ondergang." },
    { naam: "Koranrecitatie", omschrijving: "Al is het maar één vers per dag — de Koran is een dagelijks gezelschap." },
  ],
  wekelijks: [
    { naam: "Vrijdag (Jumu'ah)", omschrijving: "Bijwonen van het vrijdaggebed, extra salaah op de Profeet ﷺ, Surah al-Kahf lezen." },
    { naam: "Vasten op maandag & donderdag", omschrijving: "Sunnah van de Profeet ﷺ — daden worden op deze dagen gepresenteerd aan Allah." },
  ],
  maandelijks: [
    { naam: "Witte dagen (13, 14, 15)", omschrijving: "Drie vastendagen per maand — wie dit doet heeft als het ware de hele maand gevast." },
    { naam: "Begin van de maand", omschrijving: "Bid bij de nieuwe maan: اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيمَانِ" },
  ],
};

// ─── App-namen voor portaallinks ──────────────────────────────────────────────

const APP_NAMEN = {
  "sirah-explorer": "Sirah Explorer",
  "sirah-motion": "Sirah Motion",
  "gebed-quiz": "Gebed Quiz",
  "ramadan-quiz": "Ramadan Quiz",
  "ramadan-explorer": "Ramadan Explorer",
  "ramadan-kalender": "Ramadan Kalender",
  "tuin-van-dzikr": "Tuin van Dzikr",
  "nacht-van-qadr": "Nacht van Qadr",
  "ramadan-quiz-eid": "Ramadan Quiz Eid",
  "ramadan-deelkaarten": "Ramadan Deelkaarten",
  "de-waardevolle-tien": "De Waardevolle Tien",
};

// ─── Maandfase SVG ────────────────────────────────────────────────────────────

function getMoonSVG(phase) {
  // phase: 0-29.53 (0=nieuwe maan, ~14.7=volle maan)
  const pct = phase / 29.53058867;
  let label, paths;

  if (pct < 0.025 || pct > 0.975) {
    label = "Nieuwe maan";
    paths = `<circle cx="50" cy="50" r="40" fill="#1a1a2e" stroke="#4a4a6a" stroke-width="1.5"/>`;
  } else if (pct < 0.25) {
    label = "Wassende sikkel";
    const x = 50 + 40 * Math.cos(Math.PI * (0.5 - pct * 4));
    paths = `
      <path d="M50,10 A40,40 0 0,1 50,90 A${Math.abs(x - 50)},40 0 0,0 50,10 Z" fill="#f8f0c0" stroke="#d4af37" stroke-width="1"/>`;
  } else if (pct < 0.5) {
    label = "Wassende halve maan";
    const r2 = 40 * Math.abs(1 - (pct - 0.25) * 8);
    paths = `
      <path d="M50,10 A40,40 0 0,1 50,90" fill="none" stroke="none"/>
      <path d="M50,10 A40,40 0 0,1 50,90 A${r2},40 0 0,1 50,10 Z" fill="#f8f0c0" stroke="#d4af37" stroke-width="1"/>`;
  } else if (pct < 0.525) {
    label = "Volle maan";
    paths = `<circle cx="50" cy="50" r="40" fill="#f8f0c0" stroke="#d4af37" stroke-width="1.5"/>`;
  } else if (pct < 0.75) {
    label = "Afnemende maan";
    const r2 = 40 * Math.abs((pct - 0.5) * 8 - 1);
    paths = `
      <path d="M50,10 A40,40 0 0,0 50,90 A${r2},40 0 0,0 50,10 Z" fill="#f8f0c0" stroke="#d4af37" stroke-width="1"/>`;
  } else {
    label = "Afnemende sikkel";
    const x = 50 - 40 * Math.cos(Math.PI * (pct - 0.75) * 4);
    paths = `
      <path d="M50,10 A40,40 0 0,0 50,90 A${Math.abs(x - 50)},40 0 0,1 50,10 Z" fill="#f8f0c0" stroke="#d4af37" stroke-width="1"/>`;
  }

  return { svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${paths}</svg>`, label };
}

// ─── Datumformatter ───────────────────────────────────────────────────────────

const HIJRI_MAANDEN_NL = [
  "", "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
  "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhul Qa'dah", "Dhul Hijjah",
];

// ─── GoatCounter ─────────────────────────────────────────────────────────────

function trackEvent(naam) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: `islamitisch-jaar/${naam}`, title: naam, event: true });
  }
}

// ─── App initialisatie ────────────────────────────────────────────────────────

let huidigeMaandIndex = null;

function init() {
  const vandaag = new Date();
  const hijri = gregorianToHijri(vandaag.getFullYear(), vandaag.getMonth() + 1, vandaag.getDate());
  const maanPhase = getMoonPhase(vandaag);
  const huidigeHijriMaand = hijri.month; // 1-12
  const huidigeHijriDag = hijri.day;
  const huidigeHijriJaar = hijri.year;

  renderNuBlok(hijri, maanPhase, huidigeHijriMaand);
  renderGrid(huidigeHijriMaand);
  renderAltijd();

  // Smooth scroll naar grid na klik op hero-knop
  document.getElementById('btn-ontdek-jaar').addEventListener('click', () => {
    document.getElementById('jaar-grid').scrollIntoView({ behavior: 'smooth' });
    trackEvent('ontdek-jaar-klik');
  });

  document.getElementById('btn-actie').addEventListener('click', () => {
    openModal(huidigeHijriMaand - 1);
    trackEvent('nu-actie-klik');
  });
}

function renderNuBlok(hijri, maanPhase, huidigeHijriMaand) {
  const maand = MAANDEN[huidigeHijriMaand - 1];
  const moon = getMoonSVG(maanPhase);
  const datumTekst = `${hijri.day} ${HIJRI_MAANDEN_NL[hijri.month]} ${hijri.year} H`;
  const dagInMaand = hijri.day;
  const maandVoortgang = Math.round((dagInMaand / 29.5) * 100);

  // Gradient op hero-blok
  const hero = document.getElementById('nu-blok');
  hero.style.background = `linear-gradient(135deg, ${maand.gradient[0]}, ${maand.gradient[1]})`;

  document.getElementById('nu-datum').textContent = datumTekst;
  document.getElementById('nu-arabisch').textContent = maand.arabisch;
  document.getElementById('nu-maandnaam').textContent = maand.naam;
  document.getElementById('nu-karakter').textContent = maand.karakter;
  document.getElementById('nu-actie-tekst').textContent = maand.actie;
  document.getElementById('maan-svg').innerHTML = moon.svg;
  document.getElementById('maan-label').textContent = moon.label;
  document.getElementById('maand-voortgang-balk').style.width = `${maandVoortgang}%`;
  document.getElementById('maand-voortgang-tekst').textContent = `Dag ${hijri.day} van ~29`;
}

function renderGrid(huidigeHijriMaand) {
  const grid = document.getElementById('jaar-grid');
  grid.innerHTML = '';

  MAANDEN.forEach((maand, index) => {
    const isHuidig = (index + 1) === huidigeHijriMaand;
    const card = document.createElement('button');
    card.className = `maand-card${isHuidig ? ' huidig' : ''}`;
    card.style.background = `linear-gradient(135deg, ${maand.gradientLicht[0]}, ${maand.gradientLicht[1]})`;
    if (isHuidig) {
      card.style.outline = `2.5px solid ${maand.gradient[1]}`;
    }
    card.setAttribute('aria-label', `Open ${maand.naam}`);
    card.innerHTML = `
      <span class="maand-nummer">${String(index + 1).padStart(2, '0')}</span>
      <span class="maand-emoji">${maand.emoji}</span>
      <span class="maand-arabisch-klein">${maand.arabisch}</span>
      <span class="maand-naam-kaart">${maand.naam}</span>
      ${isHuidig ? '<span class="nu-badge">Nu</span>' : ''}
    `;
    card.addEventListener('click', () => {
      openModal(index);
      trackEvent(`maand-${maand.naam.toLowerCase().replace(/\s/g, '-')}`);
    });
    grid.appendChild(card);
  });
}

function renderAltijd() {
  const container = document.getElementById('altijd-content');

  const sections = [
    { titel: 'Dagelijks', items: ALTIJD.dagelijks },
    { titel: 'Wekelijks', items: ALTIJD.wekelijks },
    { titel: 'Maandelijks', items: ALTIJD.maandelijks },
  ];

  container.innerHTML = sections.map(s => `
    <div class="altijd-sectie">
      <h4 class="altijd-titel">${s.titel}</h4>
      ${s.items.map(item => `
        <div class="altijd-item">
          <span class="altijd-naam">${item.naam}</span>
          <span class="altijd-omschrijving">${item.omschrijving}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function openModal(index) {
  const maand = MAANDEN[index];
  huidigeMaandIndex = index;

  const modal = document.getElementById('modal');
  const sheet = document.getElementById('modal-sheet');

  // Header gradient
  document.getElementById('modal-header').style.background =
    `linear-gradient(135deg, ${maand.gradient[0]}, ${maand.gradient[1]})`;

  document.getElementById('modal-arabisch').textContent = maand.arabisch;
  document.getElementById('modal-naam').textContent = maand.naam;
  document.getElementById('modal-betekenis').textContent = maand.betekenis;
  document.getElementById('modal-karakter').textContent = maand.karakter;

  // Bijzondere dagen
  const dagenEl = document.getElementById('modal-dagen');
  if (maand.bijzondereDagen.length > 0) {
    dagenEl.innerHTML = `
      <h4 class="modal-sectie-titel">Bijzondere dagen</h4>
      ${maand.bijzondereDagen.map(d => `
        <div class="modal-dag">
          <span class="modal-dag-nummer">${d.dag}</span>
          <div>
            <div class="modal-dag-naam">${d.naam}</div>
            <div class="modal-dag-beschrijving">${d.beschrijving}</div>
          </div>
        </div>
      `).join('')}
    `;
  } else {
    dagenEl.innerHTML = `
      <h4 class="modal-sectie-titel">Bijzondere dagen</h4>
      <p class="modal-geen-dagen">Geen vaste bijzondere dagen — een maand van istiqāmah en volharding.</p>
    `;
  }

  // Aanbevelingen
  document.getElementById('modal-aanbevelingen').innerHTML = `
    <h4 class="modal-sectie-titel">Aanbevolen handelingen</h4>
    ${maand.aanbevelingen.map(a => `<div class="modal-aanbeveling">✦ ${a}</div>`).join('')}
  `;

  // Hadith / vers
  document.getElementById('modal-hadith').innerHTML = `
    <blockquote class="modal-quote">"${maand.hadith.tekst}"</blockquote>
    <cite class="modal-bron">— ${maand.hadith.bron}</cite>
  `;

  // Actie
  document.getElementById('modal-actie').innerHTML = `
    <h4 class="modal-sectie-titel">Wat kun je nu doen?</h4>
    <p class="modal-actie-tekst">${maand.actie}</p>
  `;

  // Portaal-apps
  const appsEl = document.getElementById('modal-apps');
  if (maand.portaalApps.length > 0) {
    appsEl.innerHTML = `
      <h4 class="modal-sectie-titel">Gerelateerde apps</h4>
      <div class="modal-apps-lijst">
        ${maand.portaalApps.map(appId => `
          <a href="../../apps/${appId}/" class="modal-app-link" target="_parent">
            ${APP_NAMEN[appId] || appId}
          </a>
        `).join('')}
      </div>
    `;
  } else {
    appsEl.innerHTML = '';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => sheet.classList.add('open'), 10);
}

function closeModal() {
  const modal = document.getElementById('modal');
  const sheet = document.getElementById('modal-sheet');
  sheet.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => modal.classList.remove('open'), 320);
  huidigeMaandIndex = null;
}

// Sluit modal bij klik op overlay
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.getElementById('modal-sluit').addEventListener('click', closeModal);

// Swipe-to-close op mobile
let touchStartY = 0;
document.getElementById('modal-sheet').addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.getElementById('modal-sheet').addEventListener('touchmove', (e) => {
  const delta = e.touches[0].clientY - touchStartY;
  if (delta > 80) closeModal();
}, { passive: true });

// ─── Start ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', init);
