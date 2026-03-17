/* ═══════════════════════════════════════════════════════
   De Weg naar Istiqāmah — script.js
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── GoatCounter ─────────────────────────────────────── */
  function trackEvent(eventName) {
    if (typeof window.goatcounter !== 'undefined' && window.goatcounter.count) {
      window.goatcounter.count({ path: eventName });
    }
  }

  /* ── Constanten ──────────────────────────────────────── */
  var STORAGE_KEY = 'wegNaarIstiqmahV1';

  // Ramadan 2026 — data kunnen handmatig worden aangepast in CLAUDE.md
  var RAMADAN_START     = new Date(2026,  1, 19, 0, 0, 0); // 19 feb 2026
  var LAST_TEN_START    = new Date(2026,  2, 10, 0, 0, 0); // 10 mrt = avond van nacht 21
  var EID_DATE          = new Date(2026,  2, 21, 0, 0, 0); // 21 mrt 2026
  var FORTY_DAYS_END    = new Date(2026,  3, 30, 0, 0, 0); // 30 apr 2026

  var ODD_NIGHTS = [21, 23, 25, 27, 29];

  // Benadering gebedstijden Amsterdam voor de laatste 10 nachten
  // [uur, minuten]
  var MAGHRIB_TIME = [18, 45];
  var ISHA_TIME    = [20, 15];
  var FAJR_TIME    = [ 5, 30];

  /* ── State ───────────────────────────────────────────── */
  function defaultState() {
    return {
      version: 1,
      intentions: [],        // [{id, label}]
      nightData: {},         // { 21: { visited: true }, … }
      currentDuaIndex: 0,
      fortyDays: {}          // { 'YYYY-MM-DD': { salah: true, … } }
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState();
    } catch (e) { return defaultState(); }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  var state = loadState();

  /* ── Datumhulp ───────────────────────────────────────── */
  function today() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function detectPhase() {
    var now = today();
    if (now < LAST_TEN_START)  return 'waiting';
    if (now <= EID_DATE)       return 'night';
    if (now <= FORTY_DAYS_END) return 'forty';
    return 'complete';
  }

  function getCurrentRamadanNight() {
    // Ramadannacht = avond van dag X / ochtend van dag X+1
    var diffMs   = today() - RAMADAN_START;
    var diffDays = Math.floor(diffMs / 86400000) + 1;
    return diffDays; // Bijv. dag 21 = nacht 21
  }

  function getNightProgress() {
    // 0 = begin nacht (maghrib), 1 = einde (fajr)
    var now = new Date();
    var h = now.getHours(), m = now.getMinutes();
    var totalMin = (24 - MAGHRIB_TIME[0]) * 60 - MAGHRIB_TIME[1]
                 + FAJR_TIME[0] * 60 + FAJR_TIME[1]; // ~645 min
    var elapsedMin;
    if (h > MAGHRIB_TIME[0] || (h === MAGHRIB_TIME[0] && m >= MAGHRIB_TIME[1])) {
      elapsedMin = (h - MAGHRIB_TIME[0]) * 60 + (m - MAGHRIB_TIME[1]);
    } else if (h < FAJR_TIME[0] || (h === FAJR_TIME[0] && m <= FAJR_TIME[1])) {
      elapsedMin = (24 - MAGHRIB_TIME[0]) * 60 - MAGHRIB_TIME[1] + h * 60 + m;
    } else {
      return 1; // overdag
    }
    return Math.min(1, Math.max(0, elapsedMin / totalMin));
  }

  function getDayInForty() {
    var diff = Math.floor((today() - EID_DATE) / 86400000) + 1;
    return Math.max(1, Math.min(40, diff));
  }

  /* ── Fase-routing ────────────────────────────────────── */
  function showPhase(id) {
    document.querySelectorAll('.phase').forEach(function (el) {
      el.classList.toggle('active', el.id === id);
    });
  }

  /* ══════════════════════════════════════════
     STERREN
     ══════════════════════════════════════════ */
  function initStars() {
    var container = document.getElementById('stars');
    var count = Math.min(70, Math.floor(window.innerWidth / 12));
    for (var i = 0; i < count; i++) {
      var s = document.createElement('div');
      s.className = 'star' + (Math.random() > 0.72 ? ' star--gold' : '');
      s.style.left  = (Math.random() * 100) + '%';
      s.style.top   = (Math.random() * 100) + '%';
      s.style.setProperty('--dur',   (2 + Math.random() * 4).toFixed(1) + 's');
      s.style.setProperty('--delay', (Math.random() * 6).toFixed(1) + 's');
      container.appendChild(s);
    }
  }

  /* ══════════════════════════════════════════
     WACHTSCHERM
     ══════════════════════════════════════════ */
  function initWaiting() {
    function update() {
      var diff = LAST_TEN_START - new Date();
      if (diff <= 0) {
        document.getElementById('waitingCountdown').textContent = 'De Laatste Nachten zijn begonnen!';
        return;
      }
      var days  = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins  = Math.floor((diff % 3600000) / 60000);
      var parts = [];
      if (days  > 0) parts.push(days  + ' dag'  + (days  !== 1 ? 'en' : ''));
      if (hours > 0) parts.push(hours + ' uur');
      parts.push(String(mins).padStart(2,'0') + ' min');
      document.getElementById('waitingCountdown').textContent = 'Nog ' + parts.join(', ');
    }
    update();
    setInterval(update, 60000);
  }

  /* ══════════════════════════════════════════
     FASE 1: DE LAATSTE NACHTEN
     ══════════════════════════════════════════ */

  /* ── Inhoud: Smeekbeden & Verzen ─────────────────────── */
  var DUAS_AND_VERSES = [
    {
      arabic:      'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translit:    'Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa faʿfu ʿannī',
      translation: 'O Allah, U bent vergevingsgezind, U houdt van vergeven — vergeef mij.',
      source:      'Tirmidhi — aan te bevelen in Laylatul Qadr'
    },
    {
      arabic:      'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      translit:    'Rabbanā ātinā fī d-dunyā ḥasanatan wa fī l-ākhirati ḥasanatan wa qinā ʿadhāba n-nār',
      translation: 'Onze Heer, geef ons het goede in dit leven en het goede in het hiernamaals en bescherm ons tegen de straf van het vuur.',
      source:      'Al-Baqarah 2:201'
    },
    {
      arabic:      'سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
      translit:    'Subḥānaka innī kuntu mina ẓ-ẓālimīn',
      translation: 'Geprezen bent U, ik behoorde tot de onrechtplegers.',
      source:      'Al-Anbiyāʾ 21:87 — du\'a van de Profeet Yūnus (vrede zij met hem)'
    },
    {
      arabic:      'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',
      translit:    'Rabbi ghfir lī wa tub ʿalayya innaka anta t-tawwābu r-raḥīm',
      translation: 'Mijn Heer, vergeef mij en aanvaard mijn berouw. Voorwaar, U bent de Meest Berouwaanvaardende, de Meest Barmhartige.',
      source:      'Overgeleverd door Aisha (moge Allah tevreden met haar zijn) — Bukhārī & Muslim'
    },
    {
      arabic:      'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      translit:    'Allāhumma innī asʾaluka l-jannata wa aʿūdhu bika mina n-nār',
      translation: 'O Allah, ik vraag U om het paradijs en ik zoek toevlucht bij U tegen het vuur.',
      source:      'Abū Dāwūd'
    },
    {
      arabic:      'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ',
      translit:    'Allāhumma innī aʿūdhu bi-riḍāka min sakhaṭika wa bi-muʿāfātika min ʿuqūbatik',
      translation: 'O Allah, ik zoek toevlucht in Uw tevredenheid voor Uw toorn, en in Uw vergiffenis voor Uw bestraffing.',
      source:      'Muslim'
    },
    {
      arabic:      'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
      translit:    'Innā anzalnāhu fī laylati l-qadr. Wa mā adrāka mā laylatu l-qadr. Laylatu l-qadri khayrun min alfi shahr.',
      translation: 'Voorwaar, Wij hebben hem geopenbaard in de Nacht van de Bepaling. En wat doet jou weten wat de Nacht van de Bepaling is? De Nacht van de Bepaling is beter dan duizend maanden.',
      source:      'Soerat Al-Qadr (97:1-3)'
    },
    {
      arabic:      'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
      translit:    'Wa idhā saʾalaka ʿibādī ʿannī fa-innī qarīb. Ujību daʿwata d-dāʿi idhā daʿān.',
      translation: 'En wanneer Mijn dienaren jou over Mij vragen: voorwaar, Ik ben nabij. Ik beantwoord de smeekbede van degene die smeekt wanneer hij Mij aanroept.',
      source:      'Al-Baqarah 2:186'
    },
    {
      arabic:      'رَبِّ زِدْنِي عِلْمًا',
      translit:    'Rabbi zidnī ʿilmā',
      translation: 'Mijn Heer, vermeerdeer mijn kennis.',
      source:      'Ṭā Hā 20:114'
    },
    {
      arabic:      'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
      translit:    'Astaghfiru llāha l-ʿaẓīma lladhī lā ilāha illā huwa l-ḥayyu l-qayyūmu wa atūbu ilayh',
      translation: 'Ik vraag vergeving aan Allah, de Almachtige, naast Wie er geen god is — de Levende, de Zichzelf-staande — en ik keer mij tot Hem in berouw.',
      source:      'Sayyid al-Istighfār — Bukhārī'
    },
    {
      arabic:      'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
      translit:    'Rabbanā lā tuzigh qulūbanā baʿda idh hadaytanā wa hab lanā min ladunka raḥmah',
      translation: 'Onze Heer, laat onze harten niet afdwalen nadat U ons geleid hebt, en schenk ons barmhartigheid van U.',
      source:      'Āl ʿImrān 3:8'
    },
    {
      arabic:      'اللَّهُمَّ اجْعَلْنِي مِمَّنْ يُقِيمُ الصَّلَاةَ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
      translit:    'Allāhumma jʿalnī mimman yuqīmu ṣ-ṣalāta wa min dhurriyyatī rabbanā wa taqabbal duʿāʾ',
      translation: 'Onze Heer, maak mij iemand die het gebed verricht, en ook mijn nakomelingen. Onze Heer, aanvaard mijn smeekbede.',
      source:      'Ibrāhīm 14:40'
    }
  ];

  /* ── Stations van de Nacht ───────────────────────────── */
  var STATIONS = [
    {
      icon:  '📖',
      title: 'Koranrecitatie',
      time:  'Vanaf Maghrib (' + MAGHRIB_TIME[0] + ':' + String(MAGHRIB_TIME[1]).padStart(2,'0') + ')',
      desc:  'Begin de nacht met het reciteren van de Koran. Zelfs een paar verzen met aandacht zijn kostbaar.',
      startFrac: 0,
      endFrac:   0.25
    },
    {
      icon:  '🕌',
      title: 'Nachtgebed (Tarawīḥ / Tahajjud)',
      time:  'Na Isha (' + ISHA_TIME[0] + ':' + String(ISHA_TIME[1]).padStart(2,'0') + ')',
      desc:  'Verricht vrijwillige gebeden. De Profeet (ﷺ) stond lange nachten in gebed tijdens de laatste tien.',
      startFrac: 0.20,
      endFrac:   0.55
    },
    {
      icon:  '🤲',
      title: 'Du\'a & Smeekbeden',
      time:  'Midden van de nacht',
      desc:  'Het midden van de nacht is een bijzonder verheven moment voor du\'a. Smeek Allah voor alles wat je wenst.',
      startFrac: 0.45,
      endFrac:   0.70
    },
    {
      icon:  '🙏',
      title: 'Istighfār (Vergeving)',
      time:  'Late nacht',
      desc:  'De gelovigen vragen vergeving vóór het ochtendgloren. Herhaal de sayyid al-istighfār.',
      startFrac: 0.62,
      endFrac:   0.88
    },
    {
      icon:  '📿',
      title: 'Dzikr & Witr-gebed',
      time:  'Vóór Fajr (' + FAJR_TIME[0] + ':' + String(FAJR_TIME[1]).padStart(2,'0') + ')',
      desc:  'Sluit de nacht af met dzikr en het witr-gebed. Wie de nacht sluit met witr heeft de nacht volledig geëerd.',
      startFrac: 0.80,
      endFrac:   1
    }
  ];

  /* ── Fase 1 initialiseren ────────────────────────────── */
  function initPhase1() {
    renderNightPills();
    renderStations();
    renderDuaCarousel();
    initFocusMode();
    initIntentions();
    startClock();
    updateSubtitle('Jouw metgezel in de Laatste Nachten');
    trackEvent('weg-naar-istiqmah/fase/nacht');
  }

  /* Nacht-selector */
  function renderNightPills() {
    var container = document.getElementById('nightPills');
    var currentNight = getCurrentRamadanNight();
    ODD_NIGHTS.forEach(function (night) {
      var btn = document.createElement('button');
      btn.className = 'night-pill' +
        (night === currentNight ? ' active is-tonight' : '');
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('aria-pressed', night === currentNight ? 'true' : 'false');
      btn.setAttribute('aria-label', 'Nacht ' + night + (night === currentNight ? ' (vanavond)' : ''));
      btn.textContent = 'Nacht ' + night;
      btn.addEventListener('click', function () {
        container.querySelectorAll('.night-pill').forEach(function (p) {
          p.classList.remove('active');
          p.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        trackEvent('weg-naar-istiqmah/nacht/' + night);
      });
      container.appendChild(btn);
    });
  }

  /* Stations */
  function renderStations() {
    var list = document.getElementById('stationsList');
    var progress = getNightProgress();
    list.innerHTML = '';
    STATIONS.forEach(function (station, i) {
      var isActive = progress >= station.startFrac && progress < station.endFrac;
      var isDone   = progress >= station.endFrac;
      var li = document.createElement('li');
      li.className = 'station-item' +
        (isActive ? ' active' : '') +
        (isDone   ? ' done'   : '');
      li.innerHTML =
        '<div class="station-dot" aria-hidden="true"></div>' +
        '<div class="station-card">' +
          '<div class="station-time">' + station.icon + '  ' + station.time + '</div>' +
          '<div class="station-title">' + station.title + '</div>' +
          '<div class="station-desc">'  + station.desc  + '</div>' +
        '</div>';
      list.appendChild(li);
    });
  }

  /* Nachtklok */
  function startClock() {
    updateClock();
    setInterval(updateClock, 30000);
  }

  function updateClock() {
    var now = new Date();
    document.getElementById('nightTime').textContent =
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');

    // Resterende nachttijd
    var fajrToday = new Date(now);
    fajrToday.setHours(FAJR_TIME[0], FAJR_TIME[1], 0, 0);
    if (now.getHours() >= MAGHRIB_TIME[0]) {
      fajrToday.setDate(fajrToday.getDate() + 1);
    }
    var diffMs = fajrToday - now;
    if (diffMs > 0 && diffMs < 12 * 3600000) {
      var h = Math.floor(diffMs / 3600000);
      var m = Math.floor((diffMs % 3600000) / 60000);
      document.getElementById('nightRemaining').textContent =
        'Nog ' + h + 'u ' + String(m).padStart(2,'0') + 'min tot Fajr';
    } else {
      document.getElementById('nightRemaining').textContent = 'Moge jouw nacht aanvaard worden';
    }

    // Voortgangsbalk
    var progress = getNightProgress();
    document.getElementById('skyBarFill').style.width = (progress * 100).toFixed(1) + '%';

    // Stations opnieuw renderen voor actieve staat
    renderStations();
  }

  /* Du'a carrousel */
  var duaIndex = state.currentDuaIndex % DUAS_AND_VERSES.length;
  var duaAutoTimer = null;

  function renderDua(idx) {
    var item = DUAS_AND_VERSES[idx];
    document.getElementById('duaArabic').textContent      = item.arabic;
    document.getElementById('duaTranslit').textContent    = item.translit || '';
    document.getElementById('duaTranslation').textContent = item.translation;
    document.getElementById('duaSource').textContent      = item.source;
    document.getElementById('duaCount').textContent       =
      (idx + 1) + ' / ' + DUAS_AND_VERSES.length;
  }

  function renderDuaCarousel() {
    renderDua(duaIndex);

    document.getElementById('duaNext').addEventListener('click', function () {
      duaIndex = (duaIndex + 1) % DUAS_AND_VERSES.length;
      state.currentDuaIndex = duaIndex;
      saveState();
      renderDua(duaIndex);
      resetDuaTimer();
      trackEvent('weg-naar-istiqmah/dua/navigeer');
    });

    document.getElementById('duaPrev').addEventListener('click', function () {
      duaIndex = (duaIndex - 1 + DUAS_AND_VERSES.length) % DUAS_AND_VERSES.length;
      state.currentDuaIndex = duaIndex;
      saveState();
      renderDua(duaIndex);
      resetDuaTimer();
    });

    startDuaTimer();
  }

  function startDuaTimer() {
    duaAutoTimer = setInterval(function () {
      duaIndex = (duaIndex + 1) % DUAS_AND_VERSES.length;
      state.currentDuaIndex = duaIndex;
      saveState();
      renderDua(duaIndex);
    }, 35000);
  }

  function resetDuaTimer() {
    clearInterval(duaAutoTimer);
    startDuaTimer();
  }

  /* Focusmodus */
  function initFocusMode() {
    var overlay   = document.getElementById('focusOverlay');
    var focusBtn  = document.getElementById('focusBtn');
    var closeBtn  = document.getElementById('focusClose');

    function openFocus() {
      var item = DUAS_AND_VERSES[duaIndex];
      document.getElementById('focusArabic').textContent      = item.arabic;
      document.getElementById('focusTranslation').textContent = item.translation;
      overlay.hidden = false;
      closeBtn.focus();
      trackEvent('weg-naar-istiqmah/focusmodus');
    }

    function closeFocus() {
      overlay.hidden = true;
      focusBtn.focus();
    }

    focusBtn.addEventListener('click', openFocus);
    closeBtn.addEventListener('click', closeFocus);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeFocus();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.hidden) closeFocus();
    });
  }

  /* Voornemens */
  function initIntentions() {
    var checkboxes   = document.querySelectorAll('#intentionsList input[type="checkbox"]');
    var countEl      = document.getElementById('intentionsCount');
    var saveBtn      = document.getElementById('saveIntentionsBtn');
    var savedMsg     = document.getElementById('intentionsSavedMsg');
    var MAX          = 5;
    var MIN          = 3;

    // Herstel opgeslagen intenties
    if (state.intentions && state.intentions.length > 0) {
      state.intentions.forEach(function (intention) {
        var cb = document.querySelector('input[data-habit="' + intention.id + '"]');
        if (cb) cb.checked = true;
      });
      savedMsg.hidden = false;
    }

    function updateCount() {
      var checked = Array.from(checkboxes).filter(function (cb) { return cb.checked; });
      var count   = checked.length;
      countEl.textContent = count + ' van ' + MAX + ' gekozen';
      saveBtn.disabled    = count < MIN;

      // Uitschakel niet-aangevinkte als max bereikt
      checkboxes.forEach(function (cb) {
        var option = cb.closest('.intention-option');
        if (!cb.checked && count >= MAX) {
          option.classList.add('is-disabled');
          cb.disabled = true;
        } else {
          option.classList.remove('is-disabled');
          cb.disabled = false;
        }
      });
    }

    checkboxes.forEach(function (cb) {
      cb.addEventListener('change', updateCount);
    });

    // Eigen gewoonte toevoegen
    var customInput = document.getElementById('customHabitInput');
    var addBtn      = document.getElementById('addCustomHabit');

    function addCustom() {
      var label = customInput.value.trim();
      if (!label) return;
      var checked = Array.from(checkboxes).filter(function (cb) { return cb.checked; });
      if (checked.length >= MAX) return;

      var id = 'custom-' + Date.now();
      var list = document.getElementById('intentionsList');

      var lbl = document.createElement('label');
      lbl.className = 'intention-option';
      lbl.innerHTML =
        '<input type="checkbox" data-habit="' + id + '" data-label="' + label + '" checked />' +
        '<span class="intention-check" aria-hidden="true"></span>' +
        '<span class="intention-text">✏️ ' + label + '</span>';
      list.insertBefore(lbl, document.querySelector('.custom-intention-row'));

      var newCb = lbl.querySelector('input');
      checkboxes = document.querySelectorAll('#intentionsList input[type="checkbox"]');
      newCb.addEventListener('change', updateCount);

      customInput.value = '';
      updateCount();
    }

    addBtn.addEventListener('click', addCustom);
    customInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); addCustom(); }
    });

    // Opslaan
    saveBtn.addEventListener('click', function () {
      var cbs = document.querySelectorAll('#intentionsList input[type="checkbox"]');
      var selected = [];
      cbs.forEach(function (cb) {
        if (cb.checked) {
          selected.push({
            id:    cb.dataset.habit,
            label: cb.dataset.label || cb.closest('label').querySelector('.intention-text').textContent.trim()
          });
        }
      });
      state.intentions = selected;
      saveState();
      savedMsg.hidden = false;
      saveBtn.textContent = 'Opgeslagen ✓';
      saveBtn.disabled = true;
      trackEvent('weg-naar-istiqmah/voornemens-opgeslagen');
    });

    updateCount();
  }

  /* ══════════════════════════════════════════
     FASE 2: 40 DAGEN
     ══════════════════════════════════════════ */

  /* ── Motivatie-hadith ────────────────────────────────── */
  var PERSEVERANCE_HADITH = [
    {
      arabic:      'أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ',
      text:        'De meest geliefde daden bij Allah zijn de meest regelmatige — ook al zijn ze klein.',
      source:      'Bukhārī & Muslim'
    },
    {
      arabic:      'خُذُوا مِنَ الْأَعْمَالِ مَا تُطِيقُونَ',
      text:        'Neem van de daden wat jullie kunnen volhouden. Allah wordt niet moe, totdat jullie moe worden.',
      source:      'Bukhārī'
    },
    {
      arabic:      'اسْتَقِمْ كَمَا أُمِرْتَ',
      text:        'Wees standvastig (istiqāmah) zoals jou opgedragen is.',
      source:      'Hūd 11:112'
    },
    {
      arabic:      'إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ',
      text:        'Degenen die zeggen "Onze Heer is Allah" en daarna standvastig zijn — de engelen dalen op hen neer.',
      source:      'Fuṣṣilat 41:30'
    },
    {
      arabic:      'مَنْ صَامَ رَمَضَانَ ثُمَّ أَتْبَعَهُ سِتًّا مِنْ شَوَّالٍ كَانَ كَصِيَامِ الدَّهْرِ',
      text:        'Wie Ramadan vast en dit opvolgt met zes dagen in Shawwāl, is het alsof hij een heel jaar heeft gevast.',
      source:      'Muslim'
    },
    {
      arabic:      'أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ',
      text:        'Het meest verdienstelijke gebed na de verplichte gebeden is het nachtgebed.',
      source:      'Muslim'
    },
    {
      arabic:      'الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ',
      text:        'Liefdadigheid blust de zonde uit, zoals water vuur blust.',
      source:      'Tirmidhi'
    },
    {
      arabic:      'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
      text:        'Wie een weg bewandelt op zoek naar kennis — Allah maakt voor hem een weg naar het paradijs gemakkelijk.',
      source:      'Muslim'
    },
    {
      arabic:      'مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ',
      text:        'Wie 100 keer per dag "Subḥānallāhi wa biḥamdih" zegt — zijn zonden worden vergeven, zelfs als ze zo talrijk zijn als het schuim van de zee.',
      source:      'Bukhārī & Muslim'
    },
    {
      arabic:      'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
      text:        'Het zoeken van kennis is een plicht voor iedere moslim.',
      source:      'Ibn Mājah'
    },
    {
      arabic:      'مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَاعَدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ',
      text:        'Wie één dag vast omwille van Allah — Allah verwijdert zijn gezicht van het vuur voor de afstand van 70 jaar.',
      source:      'Bukhārī & Muslim'
    },
    {
      arabic:      'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
      text:        'De beste onder jullie is degene die de Koran leert en het onderwijst.',
      source:      'Bukhārī'
    }
  ];

  /* ── Fase 2 initialiseren ────────────────────────────── */
  function initPhase2() {
    var day = getDayInForty();

    renderJourneyHeader(day);
    renderJourneyPath(day);
    renderCheckin(day);
    renderStreak();
    renderMotivation(day);
    renderStats();
    updateSubtitle('40 Dagen Pad naar Istiqāmah');
    trackEvent('weg-naar-istiqmah/fase/veertig');
  }

  /* Voortgangskop */
  function renderJourneyHeader(day) {
    document.getElementById('journeyDayLabel').textContent = 'Dag ' + day + ' van 40';
    var pct = Math.round((day / 40) * 100);
    var fill = document.getElementById('journeyProgressFill');
    fill.style.width = pct + '%';
    var bar = document.getElementById('journeyProgressBar');
    bar.setAttribute('aria-valuenow', pct);
  }

  /* Pad van 40 stippen */
  function renderJourneyPath(currentDay) {
    var container = document.getElementById('journeyPath');
    container.innerHTML = '';
    for (var i = 1; i <= 40; i++) {
      var dot = document.createElement('div');
      dot.className = 'path-dot';
      if (i < currentDay) {
        var key = getKeyForDay(i);
        var dayData = state.fortyDays[key];
        var hasAny = dayData && Object.values(dayData).some(Boolean);
        dot.classList.add(hasAny ? 'done' : 'done'); // past day = done styling regardless
      } else if (i === currentDay) {
        dot.classList.add('today');
      }
      dot.textContent = i;
      dot.setAttribute('aria-label', 'Dag ' + i + (i < currentDay ? ' (voltooid)' : i === currentDay ? ' (vandaag)' : ''));
      container.appendChild(dot);
    }
  }

  function getKeyForDay(dayNum) {
    var d = new Date(EID_DATE);
    d.setDate(d.getDate() + dayNum - 1);
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  /* Check-in */
  function renderCheckin(day) {
    var key  = todayKey();
    var data = state.fortyDays[key] || {};

    // Datum tonen
    var now = new Date();
    var dagen = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
    var maanden = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
    document.getElementById('checkinDate').textContent =
      dagen[now.getDay()] + ' ' + now.getDate() + ' ' + maanden[now.getMonth()] + ' ' + now.getFullYear();

    var list = document.getElementById('habitsList');
    list.innerHTML = '';

    if (!state.intentions || state.intentions.length === 0) {
      list.innerHTML = '<p style="color:var(--on-dark-muted);font-size:.88rem;">Sla eerst je voornemens op in de Laatste Nachten-fase om je dagelijkse check-in te zien.</p>';
      return;
    }

    state.intentions.forEach(function (intention) {
      var isOn = !!data[intention.id];
      var row  = document.createElement('div');
      row.className = 'habit-toggle-row' + (isOn ? ' is-done' : '');

      var label = document.createElement('span');
      label.className = 'habit-toggle-label';
      label.textContent = intention.label;

      var toggleId = 'toggle-' + intention.id;
      var btn = document.createElement('button');
      btn.className   = 'habit-toggle-btn' + (isOn ? ' active' : '');
      btn.id          = toggleId;
      btn.setAttribute('role', 'switch');
      btn.setAttribute('aria-checked', isOn ? 'true' : 'false');
      btn.setAttribute('aria-label', intention.label);

      btn.addEventListener('click', function () {
        var nowOn = btn.getAttribute('aria-checked') === 'true';
        var newOn = !nowOn;
        btn.setAttribute('aria-checked', newOn ? 'true' : 'false');
        btn.classList.toggle('active', newOn);
        row.classList.toggle('is-done', newOn);
        if (!state.fortyDays[key]) state.fortyDays[key] = {};
        state.fortyDays[key][intention.id] = newOn;
        saveState();
      });

      row.appendChild(label);
      row.appendChild(btn);
      list.appendChild(row);
    });

    document.getElementById('checkinSaveBtn').addEventListener('click', function () {
      saveState();
      var msg = document.getElementById('checkinSavedMsg');
      msg.hidden = false;
      renderStreak();
      renderStats();
      renderJourneyPath(day);
      trackEvent('weg-naar-istiqmah/checkin/dag-' + day);
      setTimeout(function () { msg.hidden = true; }, 3000);
    });
  }

  /* Streak */
  function renderStreak() {
    var streak = 0;
    var d = new Date();
    for (var i = 0; i < 40; i++) {
      var k = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');
      var dayData = state.fortyDays[k];
      if (dayData && Object.values(dayData).some(Boolean)) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    document.getElementById('streakNumber').textContent = streak;
    var fire = document.getElementById('streakFire');
    if (streak >= 30)      fire.textContent = '🔥🔥🔥';
    else if (streak >= 14) fire.textContent = '🔥🔥';
    else if (streak >= 3)  fire.textContent = '🔥';
    else                   fire.textContent = '';
  }

  /* Motivatie */
  function renderMotivation(day) {
    var idx  = (day - 1) % PERSEVERANCE_HADITH.length;
    var item = PERSEVERANCE_HADITH[idx];
    document.getElementById('motivationArabic').textContent = item.arabic;
    document.getElementById('motivationText').textContent   = item.text;
    document.getElementById('motivationSource').textContent = item.source;
  }

  /* Statistieken */
  function renderStats() {
    var statsList = document.getElementById('statsList');
    statsList.innerHTML = '';
    if (!state.intentions || state.intentions.length === 0) return;

    var day = getDayInForty();
    state.intentions.forEach(function (intention) {
      var doneCount = 0;
      for (var i = 1; i < day; i++) {
        var k = getKeyForDay(i);
        if (state.fortyDays[k] && state.fortyDays[k][intention.id]) {
          doneCount++;
        }
      }
      var total = day - 1;
      var pct   = total > 0 ? Math.round((doneCount / total) * 100) : 0;

      var row = document.createElement('div');
      row.className = 'stat-row';
      row.innerHTML =
        '<div class="stat-label">' +
          '<span>' + intention.label + '</span>' +
          '<span class="stat-pct">' + pct + '%</span>' +
        '</div>' +
        '<div class="stat-bar">' +
          '<div class="stat-bar-fill" style="width:' + pct + '%"></div>' +
        '</div>';
      statsList.appendChild(row);
    });
  }

  /* ══════════════════════════════════════════
     VOLTOOIINGSCHERM
     ══════════════════════════════════════════ */
  function initComplete() {
    updateSubtitle('40 Dagen Voltooid');
    var statsEl = document.getElementById('completeStats');

    if (!state.intentions || state.intentions.length === 0) {
      statsEl.innerHTML = '<p style="color:var(--on-dark-muted);font-size:.9rem;">Gefeliciteerd met het voltooien van de 40 dagen!</p>';
      return;
    }

    var html = '<div class="stats-list">';
    state.intentions.forEach(function (intention) {
      var doneCount = 0;
      for (var i = 1; i <= 40; i++) {
        var k = getKeyForDay(i);
        if (state.fortyDays[k] && state.fortyDays[k][intention.id]) doneCount++;
      }
      var pct = Math.round((doneCount / 40) * 100);
      html +=
        '<div class="stat-row">' +
          '<div class="stat-label">' +
            '<span>' + intention.label + '</span>' +
            '<span class="stat-pct">' + pct + '%</span>' +
          '</div>' +
          '<div class="stat-bar">' +
            '<div class="stat-bar-fill" style="width:' + pct + '%"></div>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    statsEl.innerHTML = html;

    trackEvent('weg-naar-istiqmah/voltooid');
  }

  /* ══════════════════════════════════════════
     HULPFUNCTIES
     ══════════════════════════════════════════ */
  function updateSubtitle(text) {
    document.getElementById('headerSubtitle').textContent = text;
  }

  /* ══════════════════════════════════════════
     START
     ══════════════════════════════════════════ */
  function init() {
    initStars();
    var phase = detectPhase();

    switch (phase) {
      case 'waiting':
        showPhase('phaseWaiting');
        initWaiting();
        updateSubtitle('De Laatste Nachten beginnen binnenkort');
        break;
      case 'night':
        showPhase('phase1');
        initPhase1();
        break;
      case 'forty':
        showPhase('phase2');
        initPhase2();
        break;
      case 'complete':
        showPhase('phaseComplete');
        initComplete();
        break;
    }

    trackEvent('weg-naar-istiqmah/app-gestart');
  }

  document.addEventListener('DOMContentLoaded', init);

})();
