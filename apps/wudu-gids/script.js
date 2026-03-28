// Wudu Gids - Stap-voor-stap interactieve wudu gids

const stappen = [
  {
    emoji: '🤲',
    titel: 'Niyyah (Intentie)',
    arabisch: 'نِيَّة',
    beschrijving: 'Maak de intentie (niyyah) in je hart om Wudu te verrichten ter wille van Allah. Dit hoeft niet hardop; het moet in je hart zijn.',
    tip: {
      titel: 'Sunnah:',
      tekst: 'Zeg Bismillah (بِسْمِ اللهِ) — In de naam van Allah.'
    }
  },
  {
    emoji: '👐',
    titel: 'Handen wassen',
    arabisch: 'غَسْلُ الْيَدَيْنِ',
    beschrijving: 'Was beide handen drie keer tot aan de polsen. Begin met de rechterhand. Zorg dat water alle delen bereikt, inclusief tussen de vingers.',
    tip: {
      titel: 'Let op:',
      tekst: 'Begin altijd met de rechterhand.'
    }
  },
  {
    emoji: '💧',
    titel: 'Mond spoelen',
    arabisch: 'الْمَضْمَضَة',
    beschrijving: 'Neem water in de mond met de rechterhand, spoel goed rond en spuug het uit. Doe dit drie keer.',
    tip: {
      titel: 'Sunnah:',
      tekst: 'Gebruik een miswak voor het spoelen van de mond.'
    }
  },
  {
    emoji: '👃',
    titel: 'Neus spoelen',
    arabisch: 'الِاسْتِنْشَاق',
    beschrijving: 'Trek water op in de neus met de rechterhand en blaas het daarna uit met de linkerhand. Doe dit drie keer.',
    tip: {
      titel: 'Tip:',
      tekst: 'Bij het vasten: wees voorzichtig dat het water niet te ver doordringt.'
    }
  },
  {
    emoji: '😊',
    titel: 'Gezicht wassen',
    arabisch: 'غَسْلُ الْوَجْهِ',
    beschrijving: 'Was het hele gezicht drie keer: van het haargrens tot de kin, en van oor tot oor. Zorg dat geen enkel deel droog blijft.',
    tip: {
      titel: 'Verplichting:',
      tekst: 'Het wassen van het gezicht is fard (verplicht) van de Wudu.'
    }
  },
  {
    emoji: '💪',
    titel: 'Armen wassen',
    arabisch: 'غَسْلُ الذِّرَاعَيْنِ',
    beschrijving: 'Was de rechterarm drie keer van de vingertoppen tot en met de elleboog. Daarna hetzelfde met de linkerarm.',
    tip: {
      titel: 'Let op:',
      tekst: 'De ellebogen meewassen is verplicht.'
    }
  },
  {
    emoji: '🙌',
    titel: 'Hoofd afvegen (Mas\'h)',
    arabisch: 'مَسْح الرَّأْس',
    beschrijving: 'Veeg met natte handen eenmaal over het hoofd — van het voorhoofd naar de nek en terug. Gebruik de binnenkant van beide handen.',
    tip: {
      titel: 'Sunnah:',
      tekst: 'Veeg daarna ook de oren af: binnenkant met wijsvingers, buitenkant met duimen.'
    }
  },
  {
    emoji: '🦶',
    titel: 'Voeten wassen',
    arabisch: 'غَسْلُ الْقَدَمَيْنِ',
    beschrijving: 'Was de rechtervoet drie keer tot aan de enkel (inclusief). Zorg dat water tussen de tenen komt. Daarna hetzelfde met de linkervoet.',
    tip: {
      titel: 'Verplichting:',
      tekst: 'De enkels meewassen is verplicht. Gebruik de linker pink om tussen de tenen te wassen.'
    }
  }
];

let currentIndex = 0;

/**
 * GoatCounter tracking wrapper
 */
function trackEvent(pad) {
  if (window.goatcounter) {
    window.goatcounter.count({
      path: pad,
      title: document.title,
      referrer: document.referrer
    });
  }
}

/**
 * Initialize the app
 */
function initApp() {
  // Build progress dots
  const progressHtml = stappen
    .map((_, i) => `<div class="stap-dot" data-index="${i}"></div>`)
    .join('');
  document.getElementById('stapProgress').innerHTML = progressHtml;

  // Build overview list
  const overzichtHtml = stappen
    .map((stap, i) => `
      <div class="overzicht-item">
        <div class="ov-num">${i + 1}</div>
        <div class="ov-emoji">${stap.emoji}</div>
        <div class="ov-content">
          <h3>${stap.titel}</h3>
          <div class="ov-arabisch" dir="rtl" lang="ar">${stap.arabisch}</div>
          <p>${stap.beschrijving}</p>
        </div>
      </div>
    `)
    .join('');
  document.getElementById('overzichtList').innerHTML = overzichtHtml;

  // Set up tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.dataset.tab;
      switchTab(tabName);
      trackEvent(`wudu-gids/tab-${tabName}`);
    });
  });

  // Show first step
  toonStap(0);

  // Track app start
  trackEvent('wudu-gids/app-gestart');
}

/**
 * Switch between tabs
 */
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabName}`);
  });
}

/**
 * Display a step
 */
function toonStap(index) {
  if (index < 0 || index >= stappen.length) return;

  currentIndex = index;
  const stap = stappen[index];

  // Render step card
  const stepHtml = `
    <div class="stap-visual">
      <div class="stap-badge">${index + 1}</div>
      <div class="stap-emoji">${stap.emoji}</div>
      <div class="stap-titels">
        <h2>${stap.titel}</h2>
        <div class="stap-arabisch" dir="rtl" lang="ar">${stap.arabisch}</div>
      </div>
    </div>
    <p class="stap-desc">${stap.beschrijving}</p>
    <div class="stap-tip">
      <strong>${stap.tip.titel}</strong>
      ${stap.tip.tekst}
    </div>
  `;
  document.getElementById('stapCard').innerHTML = stepHtml;

  // Update progress dots
  document.querySelectorAll('.stap-dot').forEach((dot, i) => {
    dot.classList.remove('gedaan', 'actief');
    if (i < index) dot.classList.add('gedaan');
    if (i === index) dot.classList.add('actief');
  });

  // Update step counter
  document.getElementById('stapTeller').textContent = `${index + 1} / ${stappen.length}`;

  // Update button states
  document.getElementById('btnVorige').disabled = index === 0;
  document.getElementById('btnVolgende').disabled = false;

  // Hide completion card
  document.getElementById('voltooiingCard').classList.add('hidden');
  document.getElementById('stapCard').classList.remove('hidden');
}

/**
 * Go to next step
 */
function volgendeStap() {
  if (currentIndex === stappen.length - 1) {
    // Show completion card
    document.getElementById('stapCard').classList.add('hidden');
    document.getElementById('voltooiingCard').classList.remove('hidden');
    trackEvent(`wudu-gids/stap-${currentIndex + 1}-voltooid`);
    trackEvent('wudu-gids/quiz-voltooid');
  } else {
    trackEvent(`wudu-gids/stap-${currentIndex + 2}-gestart`);
    toonStap(currentIndex + 1);
  }
}

/**
 * Go to previous step
 */
function vorigeStap() {
  if (currentIndex > 0) {
    toonStap(currentIndex - 1);
  }
}

/**
 * Restart from beginning
 */
function herstart() {
  currentIndex = 0;
  document.getElementById('voltooiingCard').classList.add('hidden');
  document.getElementById('stapCard').classList.remove('hidden');
  toonStap(0);
  trackEvent('wudu-gids/app-herstart');
}

// Initialize app on load
document.addEventListener('DOMContentLoaded', initApp);
