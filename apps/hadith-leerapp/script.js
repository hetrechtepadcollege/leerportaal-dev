const hadiths = [
  {
    cat: 'Intentie',
    catKleur: 'rgba(99, 102, 241, 0.1)',
    catTekst: '#4338CA',
    kort: 'Handelingen worden beoordeeld op hun intenties.',
    arabisch: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    nl: 'Voorwaar, handelingen worden beoordeeld op hun intenties, en elke persoon zal krijgen wat hij heeft geïntendeerd.',
    bron: 'Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim',
    uitleg: 'Dit is een van de fundamentele hadiths van de Islam. Het leert ons dat elk handelen, hoe klein ook, gebaseerd moet zijn op de juiste intentie: ter wille van Allah. Een goede daad zonder intentie heeft weinig waarde.'
  },
  {
    cat: 'Goedheid',
    catKleur: 'rgba(31, 120, 70, 0.1)',
    catTekst: '#1a5c38',
    kort: 'Niemand gelooft volledig totdat hij voor zijn broeder wil wat hij voor zichzelf wil.',
    arabisch: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    nl: 'Niemand van jullie gelooft (volledig) totdat hij voor zijn broeder wil wat hij voor zichzelf wil.',
    bron: 'Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim',
    uitleg: 'Dit is de Gouden Regel in de Islam. Het leert ons empathie en medeleven. Als we oprecht geloven, moeten we ook het goede voor anderen willen. Dit is de basis van solidariteit in de islamitische gemeenschap.'
  },
  {
    cat: 'Kennis',
    catKleur: 'rgba(212, 175, 55, 0.15)',
    catTekst: '#7a5f0a',
    kort: 'Het zoeken naar kennis is een plicht voor elke moslim.',
    arabisch: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    nl: 'Het zoeken naar kennis is een verplichting voor elke moslim.',
    bron: 'Sunan Ibn Mājah',
    uitleg: 'De Islam legt grote nadruk op kennis. Dit geldt niet alleen voor religieuze kennis, maar ook voor algemene kennis die de mensheid ten goede komt. Moslims worden aangespoord om gedurende hun hele leven te blijven leren.'
  },
  {
    cat: 'Geduld',
    catKleur: 'rgba(14, 116, 144, 0.1)',
    catTekst: '#0e7490',
    kort: 'Hoe wonderlijk is de zaak van de gelovige — al zijn zaken zijn goed voor hem.',
    arabisch: 'عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ',
    nl: 'Hoe wonderlijk is de zaak van de gelovige! Voorwaar, al zijn zaken zijn goed voor hem. Als goede tijden hem treffen, is hij dankbaar — dat is goed voor hem. Als tegenspoed hem treft, is hij geduldig — dat is ook goed voor hem.',
    bron: 'Ṣaḥīḥ Muslim',
    uitleg: 'Deze hadith leert ons de islamitische kijk op het leven: alles wat een gelovige overkomt is uiteindelijk goed, omdat hij met dankbaarheid of geduld reageert. Dit geeft gemoedsrust in moeilijke tijden.'
  },
  {
    cat: 'Karakter',
    catKleur: 'rgba(220, 38, 38, 0.1)',
    catTekst: '#991b1b',
    kort: 'De beste onder jullie zijn degenen met het beste karakter.',
    arabisch: 'خَيْرُكُمْ أَحْسَنُكُمْ خُلُقًا',
    nl: 'De besten onder jullie zijn degenen met het beste karakter.',
    bron: 'Ṣaḥīḥ al-Bukhārī',
    uitleg: 'De Profeet ﷺ benadrukte voortdurend de waarde van goed karakter. Kennis en aanbidding zijn belangrijk, maar ze moeten gepaard gaan met een mooi karakter in omgang met anderen.'
  },
  {
    cat: 'Tong',
    catKleur: 'rgba(124, 58, 237, 0.1)',
    catTekst: '#5b21b6',
    kort: 'Wie in Allah en de Laatste Dag gelooft, laat hem goed spreken of zwijgen.',
    arabisch: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    nl: 'Wie in Allah en de Laatste Dag gelooft, laat hem goed spreken of zwijgen.',
    bron: 'Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim',
    uitleg: 'Woorden hebben grote kracht. De Islam leert ons bewust om te gaan met wat we zeggen. Roddel, leugens en kwetsende woorden zijn verboden. Als je niets goeds kunt zeggen, is het beter te zwijgen.'
  },
  {
    cat: 'Dua',
    catKleur: 'rgba(31, 120, 70, 0.1)',
    catTekst: '#1a5c38',
    kort: 'Dua (smeekbede) is het merg van de aanbidding.',
    arabisch: 'الدُّعَاءُ مُخُّ الْعِبَادَةِ',
    nl: 'Dua (smeekbede) is het merg van de aanbidding.',
    bron: 'Sunan at-Tirmidhī',
    uitleg: 'Dua is een directe verbinding tussen de gelovige en Allah. Het is het teken van de overgave van de mens aan Allah en zijn erkenning dat alles van Allah komt. Moslims worden aangemoedigd om in alle situaties tot Allah te smeken.'
  },
  {
    cat: 'Barmhartigheid',
    catKleur: 'rgba(234, 88, 12, 0.1)',
    catTekst: '#9a3412',
    kort: 'De barmhartigen — Allah is barmhartig voor hen.',
    arabisch: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ',
    nl: 'De barmhartigen, Allah is barmhartig voor hen. Wees barmhartig voor degenen op aarde, zodat Degene in de hemel barmhartig is voor jou.',
    bron: 'Sunan Abū Dāwūd & Sunan at-Tirmidhī',
    uitleg: 'Barmhartigheid is een van de centrale deugden in de Islam. Wie anderen met medeleven behandelt, zal zelf Gods barmhartigheid ontvangen. Dit geldt voor mensen, dieren en de schepping als geheel.'
  },
  {
    cat: 'Werk',
    catKleur: 'rgba(31, 41, 77, 0.08)',
    catTekst: '#1f294d',
    kort: 'Allah houdt van iemand die, wanneer hij iets doet, dit goed en vakkundig uitvoert.',
    arabisch: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
    nl: 'Voorwaar, Allah houdt ervan dat wanneer iemand van jullie iets doet, hij het met zorg en vakmanschap uitvoert.',
    bron: 'Al-Bayhaqī',
    uitleg: 'Uitmuntendheid (Ihsan) is een islamitische waarde. Of het nu werk, studie, gebed of vriendelijkheid is — moslims worden aangespoord alles met volle toewijding te doen, alsof Allah toekijkt.'
  },
  {
    cat: 'Reinheid',
    catKleur: 'rgba(14, 116, 144, 0.1)',
    catTekst: '#0e7490',
    kort: 'Reinheid is de helft van het geloof.',
    arabisch: 'الطُّهُورُ شَطْرُ الْإِيمَانِ',
    nl: 'Reinheid is de helft van het geloof.',
    bron: 'Ṣaḥīḥ Muslim',
    uitleg: 'Reinheid in de Islam omvat zowel de fysieke reinheid (wudu, ghusl, schone kleding) als de innerlijke reinheid van het hart. Beide zijn essentieel voor een compleet geloof.'
  }
];

let alleHadiths = [...hadiths];
let actieveCategorie = null;

// ── TRACKING ──
function trackEvent(pad) {
  if (window.goatcounter && typeof goatcounter.count === 'function') {
    goatcounter.count({
      path: pad,
      title: document.title,
      referrer: document.referrer
    });
  }
}

// ── INIT ──
function initApp() {
  toonDagBanner();
  bouwCatFilters();
  renderLijst(alleHadiths);
  trackEvent('hadith-leerapp/app-gestart');
}

// ── DAY BANNER ──
function toonDagBanner() {
  const dagNum = Math.floor(Date.now() / 86400000) % hadiths.length;
  const hadith = hadiths[dagNum];
  const banner = document.getElementById('dagBanner');

  const catSlug = hadith.cat.toLowerCase().replace(/\s+/g, '-');

  banner.innerHTML = `
    <span class="db-label">Hadith van de Dag</span>
    <p dir="rtl" lang="ar" class="db-arabisch">${hadith.arabisch}</p>
    <div class="db-nl">${hadith.nl}</div>
    <span class="db-bron">${hadith.bron}</span>
  `;
}

// ── FILTERS ──
function bouwCatFilters() {
  const container = document.getElementById('catFilters');
  const cats = [...new Set(hadiths.map(h => h.cat))];

  const allBtn = document.createElement('button');
  allBtn.className = 'cat-btn actief';
  allBtn.textContent = 'Alles';
  allBtn.onclick = () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('actief'));
    allBtn.classList.add('actief');
    actieveCategorie = null;
    filterHadiths();
  };
  container.appendChild(allBtn);

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('actief'));
      btn.classList.add('actief');
      actieveCategorie = cat;
      filterHadiths();
    };
    container.appendChild(btn);
  });
}

// ── FILTER ──
function filterHadiths() {
  const zoekTerm = document.getElementById('zoekInput').value.toLowerCase();
  const gefilterd = alleHadiths.filter(h => {
    const matchCat = !actieveCategorie || h.cat === actieveCategorie;
    const matchZoek = !zoekTerm ||
      h.kort.toLowerCase().includes(zoekTerm) ||
      h.nl.toLowerCase().includes(zoekTerm) ||
      h.arabisch.includes(zoekTerm);
    return matchCat && matchZoek;
  });
  renderLijst(gefilterd);
}

// ── RENDER ──
function renderLijst(lijst) {
  const container = document.getElementById('hadithLijst');
  container.innerHTML = '';

  if (lijst.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--muted);">Geen hadiths gevonden</div>';
    return;
  }

  lijst.forEach((hadith, i) => {
    const kaart = document.createElement('div');
    kaart.className = 'hadith-kaart';

    const catSlug = hadith.cat.toLowerCase().replace(/\s+/g, '-');

    kaart.innerHTML = `
      <div class="hk-header" onclick="toggleKaart(this.parentElement)">
        <div class="hk-cat" style="background-color: ${hadith.catKleur}; color: ${hadith.catTekst};">${hadith.cat}</div>
        <div class="hk-kort">${hadith.kort}</div>
        <div class="hk-pijl">▼</div>
      </div>
      <div class="hk-body">
        <div class="hk-arabisch-wrap">
          <p dir="rtl" lang="ar" class="hk-arabisch">${hadith.arabisch}</p>
        </div>
        <div class="hk-nl">${hadith.nl}</div>
        <div class="hk-uitleg-wrap">
          <span class="hk-uitleg-titel">Uitleg</span>
          <p class="hk-uitleg">${hadith.uitleg}</p>
        </div>
        <div class="hk-bron">${hadith.bron}</div>
      </div>
    `;

    container.appendChild(kaart);
  });
}

// ── TOGGLE ──
function toggleKaart(kaart) {
  kaart.classList.toggle('open');

  if (kaart.classList.contains('open')) {
    const cat = kaart.querySelector('.hk-cat').textContent;
    const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
    trackEvent(`hadith-leerapp/hadith-geopend/${catSlug}`);
  }
}

// ── INIT ON LOAD ──
document.addEventListener('DOMContentLoaded', initApp);
