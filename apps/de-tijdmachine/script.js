(function () {
    'use strict';

    /* ===== Data ===== */

    var CITIES = [
        {
            id: 'baghdad',
            name: 'Bagdad',
            nameAr: '\u0628\u063a\u062f\u0627\u062f',
            x: 620, y: 270,
            period: '8e\u201310e eeuw',
            centuryStart: 8,
            centuryEnd: 10,
            scholar: 'Al-Khwarizmi',
            scholarAr: '\u0627\u0644\u062e\u0648\u0627\u0631\u0632\u0645\u064a',
            title: 'Bayt al-Hikma \u2014 Het Huis der Wijsheid',
            description: 'In het 9e-eeuwse Bagdad stichtte kalief Al-Ma\u2019moen het Huis der Wijsheid (Bayt al-Hikma), een centrum voor vertaling en wetenschap. Hier werkte Muhammad ibn Musa al-Khwarizmi, de vader van de algebra. Zijn boek \u201cAl-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala\u201d gaf ons het woord \u2018algebra\u2019. Het woord \u2018algoritme\u2019 komt van zijn naam.',
            invention: 'Algebra & algoritmen',
            funFact: 'Het woord \u201calgoritme\u201d is een verlatijnste versie van Al-Khwarizmi\u2019s naam.',
            challenge: {
                question: 'Welk wiskundig concept danken we aan Al-Khwarizmi?',
                options: ['Algebra', 'Geometrie', 'Calculus', 'Trigonometrie'],
                correctIndex: 0
            }
        },
        {
            id: 'cordoba',
            name: 'C\u00f3rdoba',
            nameAr: '\u0642\u0631\u0637\u0628\u0629',
            x: 100, y: 215,
            period: '10e\u201312e eeuw',
            centuryStart: 10,
            centuryEnd: 12,
            scholar: 'Ibn Rushd (Averro\u00ebs)',
            scholarAr: '\u0627\u0628\u0646 \u0631\u0634\u062f',
            title: 'De Grote Bibliotheek van C\u00f3rdoba',
            description: 'C\u00f3rdoba was het intellectuele hart van al-Andalus. Ibn Rushd (1126\u20131198), bekend in Europa als Averro\u00ebs, schreef commentaren op Aristoteles die het Europese denken diepgaand be\u00efnvloedden. De bibliotheek van kalief Al-Hakam II bevatte naar schatting 400.000 manuscripten.',
            invention: 'Filosofie & commentaren op Aristoteles',
            funFact: 'De bibliotheek van C\u00f3rdoba had 400.000 boeken \u2014 meer dan alle bibliotheken in Europa bij elkaar.',
            challenge: {
                question: 'Hoeveel manuscripten bevatte de bibliotheek van C\u00f3rdoba naar schatting?',
                options: ['40.000', '100.000', '400.000', '1.000.000'],
                correctIndex: 2
            }
        },
        {
            id: 'cairo',
            name: 'Ca\u00efro',
            nameAr: '\u0627\u0644\u0642\u0627\u0647\u0631\u0629',
            x: 490, y: 305,
            period: '10e\u201311e eeuw',
            centuryStart: 10,
            centuryEnd: 11,
            scholar: 'Ibn al-Haytham (Alhazen)',
            scholarAr: '\u0627\u0628\u0646 \u0627\u0644\u0647\u064a\u062b\u0645',
            title: 'De vader van de optica',
            description: 'Ibn al-Haytham (965\u20131040) schreef het Kitab al-Manazir (Boek der Optica) waarin hij bewees dat licht in onze ogen valt, niet eruit komt. Hij legde de basis voor de camera obscura en de wetenschappelijke methode: hypothese, experiment, conclusie.',
            invention: 'Optica, camera obscura & wetenschappelijke methode',
            funFact: 'Ibn al-Haytham deed alsof hij gek was om huisarrest te krijgen, zodat hij in rust kon werken aan zijn boeken.',
            challenge: {
                question: 'Wat bewees Ibn al-Haytham over licht?',
                options: ['Licht komt uit onze ogen', 'Licht valt in onze ogen', 'Licht is onzichtbaar', 'Licht heeft geen snelheid'],
                correctIndex: 1
            }
        },
        {
            id: 'samarkand',
            name: 'Samarkand',
            nameAr: '\u0633\u0645\u0631\u0642\u0646\u062f',
            x: 760, y: 185,
            period: '15e eeuw',
            centuryStart: 15,
            centuryEnd: 15,
            scholar: 'Ulugh Beg',
            scholarAr: '\u0623\u0648\u0644\u0648\u063a \u0628\u0643',
            title: 'Het observatorium van Ulugh Beg',
            description: 'Ulugh Beg (1394\u20131449) was een Timuridische heerser die een van de grootste observatoria van de pre-telescopische wereld bouwde. Zijn sterrencatalogus, de Zij-i Sultani, bevatte de posities van meer dan 1.000 sterren met een precisie die pas eeuwen later werd overtroffen.',
            invention: 'Astronomie & sterrencatalogus',
            funFact: 'De sextant in Ulugh Begs observatorium was zo groot (40 meter radius) dat het gebouw eromheen gebouwd moest worden.',
            challenge: {
                question: 'Hoeveel sterren catalogiseerde Ulugh Beg?',
                options: ['Ongeveer 100', 'Ongeveer 500', 'Meer dan 1.000', 'Meer dan 10.000'],
                correctIndex: 2
            }
        },
        {
            id: 'damascus',
            name: 'Damascus',
            nameAr: '\u062f\u0645\u0634\u0642',
            x: 550, y: 260,
            period: '13e eeuw',
            centuryStart: 13,
            centuryEnd: 13,
            scholar: 'Ibn al-Nafis',
            scholarAr: '\u0627\u0628\u0646 \u0627\u0644\u0646\u0641\u064a\u0633',
            title: 'Ontdekker van de longcirculatie',
            description: 'Ibn al-Nafis (1213\u20131288) was de eerste die de longcirculatie (bloedsomloop door de longen) correct beschreef, drie eeuwen v\u00f3\u00f3r William Harvey. Hij weerlegde Galenus\u2019 theorie dat bloed door onzichtbare pori\u00ebn in het harttussenschot stroomde.',
            invention: 'Pulmonaire bloedsomloop',
            funFact: 'Ibn al-Nafis\u2019 ontdekking werd pas in 1924 herontdekt in een manuscript in Berlijn.',
            challenge: {
                question: 'Wat ontdekte Ibn al-Nafis als eerste?',
                options: ['De zwaartekracht', 'De longcirculatie', 'Bloedgroepen', 'Het zenuwstelsel'],
                correctIndex: 1
            }
        },
        {
            id: 'toledo',
            name: 'Toledo',
            nameAr: '\u0637\u0644\u064a\u0637\u0644\u0629',
            x: 105, y: 222,
            period: '12e\u201313e eeuw',
            centuryStart: 12,
            centuryEnd: 13,
            scholar: 'Gerard van Cremona & vertalers',
            scholarAr: '\u0645\u062a\u0631\u062c\u0645\u0648 \u0637\u0644\u064a\u0637\u0644\u0629',
            title: 'De vertalingsbeweging van Toledo',
            description: 'Na de christelijke verovering van Toledo in 1085 begon een enorme vertalingsbeweging. Moslim-, joodse en christelijke geleerden werkten samen om Arabische werken over wiskunde, astronomie, geneeskunde en filosofie naar het Latijn te vertalen. Dit was de brug waardoor Griekse en Arabische kennis Europa bereikte.',
            invention: 'Kennisoverdracht naar Europa',
            funFact: 'Zonder de vertalers van Toledo had de Europese Renaissance er heel anders uitgezien.',
            challenge: {
                question: 'Welke drie gemeenschappen werkten samen in Toledo?',
                options: ['Grieken, Romeinen, Perzen', 'Moslims, joden, christenen', 'Chinezen, Indi\u00ebrs, Arabieren', 'Turken, Mongolen, Perzen'],
                correctIndex: 1
            }
        },
        {
            id: 'fez',
            name: 'Fez',
            nameAr: '\u0641\u0627\u0633',
            x: 130, y: 272,
            period: '9e eeuw',
            centuryStart: 9,
            centuryEnd: 9,
            scholar: 'Fatima al-Fihri',
            scholarAr: '\u0641\u0627\u0637\u0645\u0629 \u0627\u0644\u0641\u0647\u0631\u064a\u0629',
            title: 'Al-Qarawiyyin \u2014 De oudste universiteit',
            description: 'In 859 stichtte Fatima al-Fihri de Universiteit van al-Qarawiyyin in Fez, erkend door UNESCO en het Guinness Book of Records als de oudste nog bestaande onderwijsinstelling ter wereld. Het begon als een moskee met onderwijs en groeide uit tot een volwaardige universiteit.',
            invention: 'Oudste universiteit ter wereld (859 n.Chr.)',
            funFact: 'Al-Qarawiyyin is ouder dan zowel de Universiteit van Bologna (1088) als Oxford (1096).',
            challenge: {
                question: 'In welk jaar werd Al-Qarawiyyin gesticht?',
                options: ['711', '859', '1088', '1096'],
                correctIndex: 1
            }
        },
        {
            id: 'istanbul',
            name: 'Istanbul',
            nameAr: '\u0625\u0633\u0637\u0646\u0628\u0648\u0644',
            x: 470, y: 195,
            period: '16e eeuw',
            centuryStart: 16,
            centuryEnd: 16,
            scholar: 'Taqi al-Din',
            scholarAr: '\u062a\u0642\u064a \u0627\u0644\u062f\u064a\u0646',
            title: 'Mechanische klokken & observatorium',
            description: 'Taqi al-Din Muhammad ibn Ma\u2019ruf (1526\u20131585) bouwde een observatorium in Istanbul en ontwierp een van de vroegste mechanische klokken. Hij schreef het \u201cBoek van de Sublieme Methoden van Geestelijke Machines\u201d met ontwerpen voor stoommachines, pompen en klokken.',
            invention: 'Mechanische klokken & stoomtechnologie',
            funFact: 'Taqi al-Din beschreef een primitieve stoomturbine, meer dan een eeuw v\u00f3\u00f3r de Europeanen.',
            challenge: {
                question: 'Welke technologie beschreef Taqi al-Din v\u00f3\u00f3r de Europeanen?',
                options: ['Elektriciteit', 'De drukpers', 'Een stoomturbine', 'De telescoop'],
                correctIndex: 2
            }
        },
        {
            id: 'timbuktu',
            name: 'Timboektoe',
            nameAr: '\u062a\u0645\u0628\u0643\u062a\u0648',
            x: 173, y: 380,
            period: '14e\u201316e eeuw',
            centuryStart: 14,
            centuryEnd: 16,
            scholar: 'Geleerden van Sankore',
            scholarAr: '\u0639\u0644\u0645\u0627\u0621 \u0633\u0646\u0643\u0631\u064a',
            title: 'Universiteit van Sankore & manuscripten',
            description: 'De Universiteit van Sankore in Timboektoe was in de 15e en 16e eeuw een van de belangrijkste centra van islamitisch onderwijs in Afrika. Er studeerden naar schatting 25.000 studenten. Honderdduizenden manuscripten over astronomie, wiskunde, recht en geneeskunde werden er geschreven en bewaard.',
            invention: 'Afrikaanse manuscripttraditie & islamitisch onderwijs',
            funFact: 'Er zijn naar schatting 700.000 manuscripten uit Timboektoe bewaard gebleven.',
            challenge: {
                question: 'Hoeveel studenten studeerden er naar schatting aan Sankore?',
                options: ['1.000', '5.000', '25.000', '100.000'],
                correctIndex: 2
            }
        },
        {
            id: 'bukhara',
            name: 'Bukhara',
            nameAr: '\u0628\u062e\u0627\u0631\u0649',
            x: 750, y: 195,
            period: '10e\u201311e eeuw',
            centuryStart: 10,
            centuryEnd: 11,
            scholar: 'Ibn Sina (Avicenna)',
            scholarAr: '\u0627\u0628\u0646 \u0633\u064a\u0646\u0627',
            title: 'De Canon van de Geneeskunde',
            description: 'Ibn Sina (980\u20131037), in Europa bekend als Avicenna, schreef de Al-Qanun fi al-Tibb (Canon van de Geneeskunde), een medische encyclopedie die meer dan 600 jaar als standaardwerk gold op Europese universiteiten. Hij beschreef besmettelijke ziekten, quarantaine en honderden geneesmiddelen.',
            invention: 'Medische encyclopedie & farmacologie',
            funFact: 'Ibn Sina schreef meer dan 450 werken; zijn Canon bevat informatie over 760 geneesmiddelen.',
            challenge: {
                question: 'Hoe lang werd Ibn Sina\u2019s Canon gebruikt op Europese universiteiten?',
                options: ['50 jaar', '200 jaar', 'Meer dan 600 jaar', 'Het werd nooit in Europa gebruikt'],
                correctIndex: 2
            }
        }
    ];

    /* Timeline filter values: index 0 = all, 1..9 = specific centuries */
    var TIMELINE_OPTIONS = [
        { label: 'Alle eeuwen', filter: null },
        { label: '8e eeuw', filter: 8 },
        { label: '9e eeuw', filter: 9 },
        { label: '10e eeuw', filter: 10 },
        { label: '11e eeuw', filter: 11 },
        { label: '12e eeuw', filter: 12 },
        { label: '13e eeuw', filter: 13 },
        { label: '14e\u201315e eeuw', filter: 14 },
        { label: '15e\u201316e eeuw', filter: 15 },
        { label: '16e eeuw', filter: 16 }
    ];

    /* ===== State ===== */

    var STORAGE_KEY = 'tijdmachineState';
    var state = {
        version: 1,
        visitedCities: [],
        completedChallenges: []
    };

    function loadState() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed && parsed.version === 1) {
                    state = parsed;
                }
            }
        } catch (e) { /* ignore */ }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) { /* ignore */ }
    }

    /* ===== GoatCounter ===== */

    function gcEvent(path, title) {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({ path: path, title: title || '', event: true });
        }
    }

    /* ===== DOM Elements ===== */

    var progressText = document.getElementById('progress-text');
    var progressFill = document.getElementById('progress-fill');
    var timelineSlider = document.getElementById('timeline-slider');
    var timelineValue = document.getElementById('timeline-value');
    var overlay = document.getElementById('overlay');
    var closeCardBtn = document.getElementById('close-card');
    var cardPeriod = document.getElementById('card-period');
    var cardTitle = document.getElementById('card-title');
    var cardScholar = document.getElementById('card-scholar');
    var cardScholarAr = document.getElementById('card-scholar-ar');
    var cardDescription = document.getElementById('card-description');
    var cardInvention = document.getElementById('card-invention');
    var cardFunfact = document.getElementById('card-funfact');
    var challengeQuestion = document.getElementById('challenge-question');
    var challengeOptions = document.getElementById('challenge-options');
    var challengeFeedback = document.getElementById('challenge-feedback');
    var challengeSection = document.getElementById('challenge-section');
    var collectedBadge = document.getElementById('collected-badge');
    var drawerToggle = document.getElementById('drawer-toggle');
    var drawerCount = document.getElementById('drawer-count');
    var drawerOverlay = document.getElementById('drawer-overlay');
    var drawer = document.getElementById('discoveries-drawer');
    var drawerClose = document.getElementById('drawer-close');
    var drawerList = document.getElementById('drawer-list');
    var celebration = document.getElementById('celebration');

    var currentCityId = null;

    /* ===== Helpers ===== */

    function getCityById(id) {
        for (var i = 0; i < CITIES.length; i++) {
            if (CITIES[i].id === id) return CITIES[i];
        }
        return null;
    }

    /* ===== Render ===== */

    function updateProgress() {
        var count = state.visitedCities.length;
        progressText.textContent = count + ' van 10 ontdekkingen';
        progressFill.style.width = (count / 10 * 100) + '%';
        drawerCount.textContent = count;
    }

    function updateMarkers() {
        var markers = document.querySelectorAll('.city-marker');
        markers.forEach(function (marker) {
            var cityId = marker.getAttribute('data-city');
            marker.classList.remove('visited', 'completed');
            if (state.completedChallenges.indexOf(cityId) !== -1) {
                marker.classList.add('completed');
            } else if (state.visitedCities.indexOf(cityId) !== -1) {
                marker.classList.add('visited');
            }
        });
    }

    function filterMarkers(centuryFilter) {
        var markers = document.querySelectorAll('.city-marker');
        markers.forEach(function (marker) {
            var cityId = marker.getAttribute('data-city');
            var city = getCityById(cityId);
            if (!city) return;

            if (centuryFilter === null) {
                marker.classList.remove('hidden');
            } else {
                var visible = city.centuryStart <= centuryFilter && city.centuryEnd >= centuryFilter;
                marker.classList.toggle('hidden', !visible);
            }
        });
    }

    function renderDrawer() {
        var html = '';
        CITIES.forEach(function (city) {
            var visited = state.visitedCities.indexOf(city.id) !== -1;
            var completed = state.completedChallenges.indexOf(city.id) !== -1;
            var cls = visited ? '' : ' locked';
            html += '<div class="discovery-item' + cls + '">';
            html += '<div class="info">';
            html += '<h4>' + city.name + (visited ? '' : '') + '</h4>';
            if (visited) {
                html += '<p>' + city.invention + '</p>';
                if (completed) html += '<p style="color:#2e7d32;font-weight:600;font-size:0.75rem;">Challenge voltooid &#10003;</p>';
            } else {
                html += '<p>Nog niet bezocht</p>';
            }
            html += '</div></div>';
        });
        drawerList.innerHTML = html;
    }

    /* ===== City Card ===== */

    function openCity(cityId) {
        var city = getCityById(cityId);
        if (!city) return;

        currentCityId = cityId;

        /* Mark visited */
        if (state.visitedCities.indexOf(cityId) === -1) {
            state.visitedCities.push(cityId);
            saveState();
            gcEvent('tijdmachine/stad-' + cityId + '-bezocht', city.name + ' bezocht');
        }

        /* Populate card */
        cardPeriod.textContent = city.period;
        cardTitle.textContent = city.title;
        cardScholar.textContent = city.scholar;
        cardScholarAr.textContent = city.nameAr;
        cardDescription.textContent = city.description;
        cardInvention.textContent = city.invention;
        cardFunfact.textContent = city.funFact;

        /* Challenge */
        var alreadyCompleted = state.completedChallenges.indexOf(cityId) !== -1;

        challengeQuestion.textContent = city.challenge.question;
        challengeFeedback.className = 'challenge-feedback';
        challengeFeedback.textContent = '';

        var optionsHtml = '';
        city.challenge.options.forEach(function (opt, i) {
            var disabled = alreadyCompleted ? ' disabled' : '';
            var cls = '';
            if (alreadyCompleted && i === city.challenge.correctIndex) cls = ' correct';
            optionsHtml += '<button class="option-btn' + cls + '" data-index="' + i + '"' + disabled + '>' + opt + '</button>';
        });
        challengeOptions.innerHTML = optionsHtml;

        if (alreadyCompleted) {
            challengeSection.style.display = 'block';
            collectedBadge.classList.add('show');
            challengeFeedback.textContent = 'Je hebt deze challenge al voltooid!';
            challengeFeedback.className = 'challenge-feedback show correct';
        } else {
            challengeSection.style.display = 'block';
            collectedBadge.classList.remove('show');
        }

        /* Show overlay */
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        /* Bind answer buttons */
        var btns = challengeOptions.querySelectorAll('.option-btn');
        btns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                if (btn.disabled) return;
                checkAnswer(cityId, parseInt(btn.getAttribute('data-index'), 10));
            });
        });

        updateProgress();
        updateMarkers();
        renderDrawer();
    }

    function closeCity() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        currentCityId = null;
    }

    function checkAnswer(cityId, selectedIndex) {
        var city = getCityById(cityId);
        if (!city) return;

        var btns = challengeOptions.querySelectorAll('.option-btn');
        var correct = selectedIndex === city.challenge.correctIndex;

        /* Disable all buttons */
        btns.forEach(function (btn) {
            btn.disabled = true;
            var idx = parseInt(btn.getAttribute('data-index'), 10);
            if (idx === city.challenge.correctIndex) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !correct) {
                btn.classList.add('wrong');
            }
        });

        if (correct) {
            challengeFeedback.textContent = 'Correct! Goed gedaan!';
            challengeFeedback.className = 'challenge-feedback show correct';

            if (state.completedChallenges.indexOf(cityId) === -1) {
                state.completedChallenges.push(cityId);
                saveState();
                gcEvent('tijdmachine/challenge-' + cityId + '-voltooid', city.name + ' challenge voltooid');
            }

            collectedBadge.classList.add('show');
            updateMarkers();
            renderDrawer();
            checkAllVisited();
        } else {
            challengeFeedback.textContent = 'Helaas! Het juiste antwoord is gemarkeerd.';
            challengeFeedback.className = 'challenge-feedback show wrong';
        }
    }

    function checkAllVisited() {
        if (state.visitedCities.length >= 10 && state.completedChallenges.length >= 10) {
            celebration.classList.add('show');
            gcEvent('tijdmachine/alle-steden-bezocht', 'Alle steden bezocht');
        }
    }

    /* ===== Drawer ===== */

    function openDrawer() {
        drawer.classList.add('open');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        if (!overlay.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }

    /* ===== Timeline ===== */

    function handleTimelineChange() {
        var idx = parseInt(timelineSlider.value, 10);
        var option = TIMELINE_OPTIONS[idx];
        timelineValue.textContent = option.label;
        filterMarkers(option.filter);
    }

    /* ===== Init ===== */

    function init() {
        loadState();

        /* Bind city markers */
        var markers = document.querySelectorAll('.city-marker');
        markers.forEach(function (marker) {
            marker.addEventListener('click', function () {
                var cityId = marker.getAttribute('data-city');
                openCity(cityId);
            });
        });

        /* Card close */
        closeCardBtn.addEventListener('click', closeCity);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeCity();
        });

        /* Drawer */
        drawerToggle.addEventListener('click', openDrawer);
        drawerClose.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);

        /* Timeline */
        timelineSlider.addEventListener('input', handleTimelineChange);

        /* Escape key */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                if (overlay.classList.contains('active')) closeCity();
                if (drawer.classList.contains('open')) closeDrawer();
            }
        });

        /* Initial render */
        updateProgress();
        updateMarkers();
        renderDrawer();
        handleTimelineChange();
        checkAllVisited();

        /* Track */
        gcEvent('tijdmachine/app-gestart', 'App gestart');
    }

    /* ===== Start ===== */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
