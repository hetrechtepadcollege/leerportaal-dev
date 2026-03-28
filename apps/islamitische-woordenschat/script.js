const woorden = [
  { ar: 'الصَّلَاة', tr: 'As-Salah', nl: 'Het gebed', cat: 'Gebed', vb: 'De salah is een van de 5 pillaren van de Islam.' },
  { ar: 'الرَّكْعَة', tr: 'Ar-Rakʿah', nl: 'Een gebedsronde', cat: 'Gebed', vb: 'Fajr heeft 2 rakʿaat.' },
  { ar: 'الْقِبْلَة', tr: 'Al-Qibla', nl: 'Gebedsrichting naar Mekka', cat: 'Gebed', vb: 'Moslims bidden in de richting van de Qibla.' },
  { ar: 'الْأَذَان', tr: 'Al-Adhan', nl: 'De gebedoproep', cat: 'Gebed', vb: 'De muezzin roept de Adhan op.' },
  { ar: 'الطَّهَارَة', tr: 'At-Tahara', nl: 'Rituele reinheid', cat: 'Gebed', vb: 'Tahara is vereist voor het gebed.' },
  { ar: 'التَّوْحِيد', tr: 'At-Tawheed', nl: 'De eenheid van Allah', cat: 'Aqidah', vb: 'Tawheed is het fundament van de islamitische leer.' },
  { ar: 'الْإِيمَان', tr: 'Al-Iman', nl: 'Het geloof', cat: 'Aqidah', vb: 'Iman heeft 6 pijlers.' },
  { ar: 'التَّقْوَى', tr: 'At-Taqwa', nl: 'Godsvrucht en godsbewustzijn', cat: 'Aqidah', vb: 'Taqwa is de beste reisbagage.' },
  { ar: 'الشِّرْك', tr: 'Ash-Shirk', nl: 'Deelgenoten aan Allah toekennen', cat: 'Aqidah', vb: 'Shirk is de grootste zonde in de Islam.' },
  { ar: 'الْفَرْض', tr: 'Al-Fard', nl: 'Religieuze verplichting', cat: 'Fiqh', vb: 'Salah is een fard voor elke moslim.' },
  { ar: 'السُّنَّة', tr: 'As-Sunnah', nl: 'De leefwijze van de Profeet ﷺ', cat: 'Fiqh', vb: 'Sunnah bidden geeft extra beloning.' },
  { ar: 'الْحَلَال', tr: 'Al-Halal', nl: 'Toegestaan', cat: 'Fiqh', vb: 'Halal voedsel is voor moslims vrij te consumeren.' },
  { ar: 'الْحَرَام', tr: 'Al-Haram', nl: 'Verboden', cat: 'Fiqh', vb: 'Alcohol is haram in de Islam.' },
  { ar: 'الْآيَة', tr: 'Al-Ayah', nl: 'Een vers uit de Quran', cat: 'Quran', vb: 'Al-Fatiha heeft 7 ayaat.' },
  { ar: 'الْحِفْظ', tr: 'Al-Hifz', nl: 'Memorisatie van de Quran', cat: 'Quran', vb: 'Iemand die de Quran memoreert heet een Hafiz.' },
  { ar: 'التَّجْوِيد', tr: 'At-Tajweed', nl: 'Regels voor correcte Quranrecitatie', cat: 'Quran', vb: 'Tajweed verbetert de uitspraak van de Quran.' },
  { ar: 'الصَّبْر', tr: 'As-Sabr', nl: 'Geduld', cat: 'Moraal', vb: '"Allah is met de geduldigen." (Quran 2:153)' },
  { ar: 'الشُّكْر', tr: 'Ash-Shukr', nl: 'Dankbaarheid', cat: 'Moraal', vb: '"Als jullie dankbaar zijn, zal Ik jullie meer geven." (Quran 14:7)' },
  { ar: 'التَّوَاضُع', tr: 'At-Tawadu', nl: 'Bescheidenheid en nederigheid', cat: 'Moraal', vb: 'De Profeet ﷺ was de meest bescheiden persoon.' },
  { ar: 'الصِّدْق', tr: 'As-Sidq', nl: 'Eerlijkheid en oprechtheid', cat: 'Moraal', vb: 'Eerlijkheid leidt naar het goede en het goede naar het Paradijs.' },
  { ar: 'الرَّحْمَة', tr: 'Ar-Rahma', nl: 'Barmhartigheid en genade', cat: 'Moraal', vb: '"De Barmhartigen worden door de Meest Barmhartige begenadigd." (Hadith)' },
  { ar: 'الْهِجْرَة', tr: 'Al-Hijra', nl: 'Migratie — de Profeet ﷺ naar Medina', cat: 'Geschiedenis', vb: 'De Hijra markeert het begin van de islamitische kalender.' },
  { ar: 'الصَّحَابَة', tr: 'As-Sahaba', nl: 'De metgezellen van de Profeet ﷺ', cat: 'Geschiedenis', vb: 'De Sahaba zijn de beste generatie van de Islam.' },
  { ar: 'الْخِلَافَة', tr: 'Al-Khilafa', nl: 'Het islamitische leiderschap (Kalifaat)', cat: 'Geschiedenis', vb: 'Na de Profeet ﷺ namen de vier Khulafa ar-Rashidun het leiderschap over.' },
  { ar: 'الْأُمَّة', tr: 'Al-Umma', nl: 'De islamitische wereldgemeenschap', cat: 'Gemeenschap', vb: '"De gelovigen zijn als één lichaam." (Hadith)' }
];

let geleerdWoorden = new Set();
let geactiveerdCategorieen = new Set();
let huidigeFcIndex = 0;
let fcGeklapt = false;

function trackEvent(pad) {
  if (window.goatcounter) {
    window.goatcounter.count({ path: pad, title: document.title, referrer: document.referrer });
  }
}

function initApp() {
  laadOpgeslagenGegevens();
  bouwCatFilters();
  renderGrid(woorden);
  laadFlashcard();
  updateStats();
  setupTablisteners();
  trackEvent('islamitische-woordenschat/app-gestart');
}

function laadOpgeslagenGegevens() {
  const opgeslagen = localStorage.getItem('iwg-geleerd');
  if (opgeslagen) geleerdWoorden = new Set(JSON.parse(opgeslagen));
}

function slaGegevensOp() {
  localStorage.setItem('iwg-geleerd', JSON.stringify(Array.from(geleerdWoorden)));
}

function bouwCatFilters() {
  const catFiltersDiv = document.getElementById('catFilters');
  const uniekeCats = [...new Set(woorden.map(w => w.cat))].sort();

  const allesBtn = document.createElement('button');
  allesBtn.className = 'cat-btn actief';
  allesBtn.textContent = 'Alles';
  allesBtn.onclick = () => toggleCat('Alles');
  catFiltersDiv.appendChild(allesBtn);

  uniekeCats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = cat;
    btn.onclick = () => toggleCat(cat);
    catFiltersDiv.appendChild(btn);
  });

  geactiveerdCategorieen.add('Alles');
}

function toggleCat(cat) {
  if (cat === 'Alles') {
    geactiveerdCategorieen.clear();
    geactiveerdCategorieen.add('Alles');
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.toggle('actief', btn.textContent === 'Alles');
    });
  } else {
    geactiveerdCategorieen.delete('Alles');
    if (geactiveerdCategorieen.has(cat)) {
      geactiveerdCategorieen.delete(cat);
    } else {
      geactiveerdCategorieen.add(cat);
    }

    if (geactiveerdCategorieen.size === 0) {
      geactiveerdCategorieen.add('Alles');
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('actief', btn.textContent === 'Alles');
      });
      return;
    }

    document.querySelectorAll('.cat-btn').forEach(btn => {
      const isAlles = btn.textContent === 'Alles';
      const isCat = btn.textContent === cat;
      if (isAlles) {
        btn.classList.toggle('actief', geactiveerdCategorieen.has('Alles'));
      } else if (isCat) {
        btn.classList.toggle('actief');
      }
    });
  }

  filterWoorden();
  trackEvent('islamitische-woordenschat/categorie-gefilterd');
}

function filterWoorden() {
  const zoekTekst = document.getElementById('zoekInput').value.toLowerCase();
  const gefilterd = woorden.filter(w => {
    const catMatch = geactiveerdCategorieen.has('Alles') || geactiveerdCategorieen.has(w.cat);
    const zoekMatch = w.nl.toLowerCase().includes(zoekTekst) || w.tr.toLowerCase().includes(zoekTekst) || w.ar.includes(zoekTekst);
    return catMatch && zoekMatch;
  });
  renderGrid(gefilterd);
}

function renderGrid(lijst) {
  const grid = document.getElementById('woordenGrid');
  grid.innerHTML = '';

  if (lijst.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 32px 0;">Geen woorden gevonden</p>';
    return;
  }

  lijst.forEach((woord) => {
    const kaart = document.createElement('div');
    kaart.className = 'woord-kaart';
    if (geleerdWoorden.has(woord.ar)) kaart.classList.add('geleerd');

    kaart.innerHTML = `<div class="wk-check">✓</div><div class="wk-cat">${woord.cat}</div><div class="wk-arabisch">${woord.ar}</div><div class="wk-naam">${woord.tr}</div><div class="wk-nl">${woord.nl}</div>`;

    kaart.onclick = () => {
      const origIdx = woorden.indexOf(woord);
      toggleGeleerdWoord(origIdx);
      kaart.classList.toggle('geleerd', geleerdWoorden.has(woord.ar));
      trackEvent('islamitische-woordenschat/woord-gemarkeerd');
    };

    grid.appendChild(kaart);
  });
}

function toggleGeleerdWoord(index) {
  const woord = woorden[index];
  if (geleerdWoorden.has(woord.ar)) {
    geleerdWoorden.delete(woord.ar);
  } else {
    geleerdWoorden.add(woord.ar);
  }
  slaGegevensOp();
  updateStats();
}

function updateStats() {
  document.getElementById('statGeleerd').textContent = geleerdWoorden.size + ' geleerd';
  document.getElementById('statTotaal').textContent = woorden.length + ' woorden';
}

function laadFlashcard() {
  if (woorden.length === 0) return;

  const woord = woorden[huidigeFcIndex];
  document.getElementById('fcCat').textContent = woord.cat;
  document.getElementById('fcArabisch').textContent = woord.ar;
  document.getElementById('fcTranslit').textContent = woord.tr;
  document.getElementById('fcNl').textContent = woord.nl;
  document.getElementById('fcVoorbeeld').textContent = woord.vb;
  document.getElementById('fcTeller').textContent = (huidigeFcIndex + 1) + ' / ' + woorden.length;

  const btnGeleerd = document.getElementById('btnGeleerd');
  if (geleerdWoorden.has(woord.ar)) {
    btnGeleerd.classList.add('geleerd');
    btnGeleerd.textContent = '★ Geleerd';
  } else {
    btnGeleerd.classList.remove('geleerd');
    btnGeleerd.textContent = '☆ Markeer als geleerd';
  }

  fcGeklapt = false;
  document.getElementById('fcNl').classList.add('hidden');
  document.getElementById('fcVoorbeeld').classList.add('hidden');
  document.querySelector('.fc-hint').textContent = 'Klik om de betekenis te onthullen';
}

function flipKaart() {
  fcGeklapt = !fcGeklapt;
  const fcNl = document.getElementById('fcNl');
  const fcVb = document.getElementById('fcVoorbeeld');
  const hint = document.querySelector('.fc-hint');

  if (fcGeklapt) {
    fcNl.classList.remove('hidden');
    fcVb.classList.remove('hidden');
    hint.textContent = 'Klik om te verbergen';
  } else {
    fcNl.classList.add('hidden');
    fcVb.classList.add('hidden');
    hint.textContent = 'Klik om de betekenis te onthullen';
  }
  trackEvent('islamitische-woordenschat/kaart-geklapt');
}

function fcVolgende() {
  huidigeFcIndex = (huidigeFcIndex + 1) % woorden.length;
  laadFlashcard();
  trackEvent('islamitische-woordenschat/volgende-kaart');
}

function fcVorige() {
  huidigeFcIndex = (huidigeFcIndex - 1 + woorden.length) % woorden.length;
  laadFlashcard();
  trackEvent('islamitische-woordenschat/vorige-kaart');
}

function toggleGeleerd() {
  const woord = woorden[huidigeFcIndex];
  if (geleerdWoorden.has(woord.ar)) {
    geleerdWoorden.delete(woord.ar);
  } else {
    geleerdWoorden.add(woord.ar);
  }
  slaGegevensOp();
  updateStats();
  laadFlashcard();
  trackEvent('islamitische-woordenschat/fc-geleerd-gemarkeerd');
}

function setupTablisteners() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
      trackEvent('islamitische-woordenschat/tab-' + tab);
    });
  });
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + tab).classList.add('active');
}

document.addEventListener('DOMContentLoaded', initApp);
