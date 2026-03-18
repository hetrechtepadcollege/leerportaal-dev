(function () {
    'use strict';

    /* ===== Word Data ===== */

    var WORDS = [
        { word: 'TAWHIED', meaning: 'Monothe\u00efsme \u2014 het geloof in de eenheid van Allah', category: 'Begrippen', hintAyah: '\u201cZeg: Hij is Allah, de Enige.\u201d (Koran 112:1)', hintDef: 'Het fundament van de islam: het geloof dat Allah E\u00e9n is, zonder deelgenoten.' },
        { word: 'SALAAT', meaning: 'Het rituele gebed', category: 'Gebed', hintAyah: '\u201cOnderhoud het gebed, want het gebed weerhoudt van het slechte en verwerpelijke.\u201d (Koran 29:45)', hintDef: 'De tweede zuil van de islam, vijf keer per dag verricht.' },
        { word: 'ZAKAAT', meaning: 'Verplichte armenbelasting', category: 'Begrippen', hintAyah: '\u201cEn onderhoud het gebed en geef de zakaat.\u201d (Koran 2:43)', hintDef: 'De derde zuil van de islam: 2,5% van je spaargeld geven aan de armen.' },
        { word: 'HADITH', meaning: 'Overlevering van de Profeet \uFDFA', category: 'Begrippen', hintAyah: '\u201cEn wat de Boodschapper jullie geeft, neem dat aan.\u201d (Koran 59:7)', hintDef: 'Een opgetekende uitspraak, handeling of goedkeuring van de Profeet \uFDFA.' },
        { word: 'SOENNAH', meaning: 'De traditie van de Profeet \uFDFA', category: 'Begrippen', hintAyah: '\u201cIn de Boodschapper van Allah hebben jullie een mooi voorbeeld.\u201d (Koran 33:21)', hintDef: 'De levenswijze, gewoonten en praktijken van de Profeet \uFDFA.' },
        { word: 'WOEDHOE', meaning: 'Rituele wassing', category: 'Gebed', hintAyah: '\u201cO jullie die geloven, als jullie opstaan voor het gebed, was dan jullie gezichten\u2026\u201d (Koran 5:6)', hintDef: 'De rituele reiniging met water v\u00f3\u00f3r het gebed.' },
        { word: 'SADAQAH', meaning: 'Vrijwillige liefdadigheid', category: 'Begrippen', hintAyah: '\u201cWie is het die Allah een goede lening wil geven?\u201d (Koran 2:245)', hintDef: 'Elke vorm van vrijwillige gift of goede daad voor de zaak van Allah.' },
        { word: 'TAQWA', meaning: 'Godvrezendheid / godsbewustzijn', category: 'Begrippen', hintAyah: '\u201cO jullie die geloven, vrees Allah zoals Hij gevreesd dient te worden.\u201d (Koran 3:102)', hintDef: 'Een bewustzijn van Allah dat je beschermt tegen zonden.' },
        { word: 'HIDJAAB', meaning: 'Bedekking / sluier', category: 'Begrippen', hintAyah: '\u201cO Profeet, zeg tegen je vrouwen, je dochters en de vrouwen van de gelovigen dat zij hun overkleden over zich heen laten hangen.\u201d (Koran 33:59)', hintDef: 'De islamitische kledingvoorschriften, in het bijzonder de hoofdbedekking voor vrouwen.' },
        { word: 'DHIKR', meaning: 'Het gedenken van Allah', category: 'Begrippen', hintAyah: '\u201cGedenk Mij en Ik zal jullie gedenken.\u201d (Koran 2:152)', hintDef: 'Het noemen en herinneren van Allah, met het hart en de tong.' },
        { word: 'QADR', meaning: 'Voorbeschikking', category: 'Begrippen', hintAyah: '\u201cVoorwaar, alle zaken hebben Wij in mate (qadr) geschapen.\u201d (Koran 54:49)', hintDef: 'Het geloof dat Allah alles heeft voorbestemd en vastgelegd.' },
        { word: 'SJAHADA', meaning: 'Geloofsbelijdenis', category: 'Begrippen', hintAyah: '\u201cAllah getuigt dat er geen god is dan Hij.\u201d (Koran 3:18)', hintDef: 'De eerste zuil van de islam: getuigen dat er geen god is dan Allah en dat Mohammed Zijn boodschapper is.' },
        { word: 'IEMAAN', meaning: 'Geloof', category: 'Begrippen', hintAyah: '\u201cDe gelovigen zijn slechts degenen wier harten sidderen wanneer Allah wordt genoemd.\u201d (Koran 8:2)', hintDef: 'Het innerlijke geloof in Allah, Zijn engelen, boeken, profeten, de Laatste Dag en de voorbeschikking.' },
        { word: 'IHSAAN', meaning: 'Uitmuntendheid in aanbidding', category: 'Begrippen', hintAyah: '\u201cVoorwaar, Allah beveelt rechtvaardigheid en het goede (ihsaan).\u201d (Koran 16:90)', hintDef: 'Allah aanbidden alsof je Hem ziet; als je Hem niet ziet, weet dat Hij jou ziet.' },
        { word: 'FITRAH', meaning: 'De aangeboren aard', category: 'Begrippen', hintAyah: '\u201cDe fitrah van Allah waarmee Hij de mensen heeft geschapen.\u201d (Koran 30:30)', hintDef: 'De zuivere, aangeboren natuur waarmee elk mens geboren wordt \u2014 geneigd tot het goede.' },
        { word: 'BARAKAH', meaning: 'Zegening van Allah', category: 'Begrippen', hintAyah: '\u201cEn als de bewoners van de steden hadden geloofd, dan zouden Wij voor hen zegeningen hebben geopend.\u201d (Koran 7:96)', hintDef: 'Goddelijke zegening die groei, overvloed en goed brengt in alles wat het raakt.' },
        { word: 'TAWBAH', meaning: 'Berouw', category: 'Begrippen', hintAyah: '\u201cEn keer terug tot Allah in berouw, o gelovigen, opdat jullie succesvol zullen zijn.\u201d (Koran 24:31)', hintDef: 'Oprecht berouw tonen en terugkeren naar Allah na een zonde.' },
        { word: 'RISAALAH', meaning: 'Boodschap / profeetschap', category: 'Profeten', hintAyah: '\u201cO Boodschapper, verkondig wat aan jou is neergezonden.\u201d (Koran 5:67)', hintDef: 'De goddelijke boodschap die via profeten aan de mensheid is overgebracht.' },
        { word: 'KHALIEF', meaning: 'Opvolger / leider', category: 'Begrippen', hintAyah: '\u201cIk zal op aarde een khalief (plaatsvervanger) aanstellen.\u201d (Koran 2:30)', hintDef: 'Een leider van de moslimgemeenschap, plaatsvervanger van de Profeet \uFDFA in bestuur.' },
        { word: 'OEMMA', meaning: 'De islamitische gemeenschap', category: 'Begrippen', hintAyah: '\u201cJullie zijn de beste gemeenschap (oemma) die voor de mensen is voortgebracht.\u201d (Koran 3:110)', hintDef: 'De wereldwijde gemeenschap van alle moslims, verbonden door geloof.' },
        { word: 'SOERA', meaning: 'Hoofdstuk van de Koran', category: 'Koran', hintAyah: '\u201cEn als jullie in twijfel verkeren, breng dan een gelijkwaardige soera voort.\u201d (Koran 2:23)', hintDef: 'Een van de 114 hoofdstukken waarin de Koran is ingedeeld.' },
        { word: 'AYAH', meaning: 'Vers / teken', category: 'Koran', hintAyah: '\u201cVoorwaar, in de schepping van de hemelen en de aarde zijn tekenen (ayaat).\u201d (Koran 3:190)', hintDef: 'Een vers uit de Koran, maar ook: een teken van Allah in de schepping.' },
        { word: 'DAWAH', meaning: 'Uitnodiging tot de islam', category: 'Begrippen', hintAyah: '\u201cNodig uit tot de weg van jouw Heer met wijsheid en goede aansporing.\u201d (Koran 16:125)', hintDef: 'Het uitnodigen en oproepen van anderen tot de islam.' },
        { word: 'HIDJRA', meaning: 'Emigratie (van de Profeet)', category: 'Profeten', hintAyah: '\u201cZij die ge\u00ebmigreerd zijn en verdreven uit hun huizen\u2026\u201d (Koran 59:8)', hintDef: 'De emigratie van de Profeet \uFDFA van Mekka naar Medina in 622 n.Chr., het begin van de islamitische kalender.' },
        { word: 'SJIRK', meaning: 'Deelgenoten toekennen aan Allah', category: 'Begrippen', hintAyah: '\u201cVoorwaar, Allah vergeeft niet dat er deelgenoten aan Hem worden toegekend.\u201d (Koran 4:48)', hintDef: 'De grootste zonde in de islam: het aanbidden van iets of iemand naast Allah.' },
        { word: 'SIYAAM', meaning: 'Het vasten', category: 'Gebed', hintAyah: '\u201cO jullie die geloven, het vasten (siyaam) is jullie voorgeschreven.\u201d (Koran 2:183)', hintDef: 'De vierde zuil van de islam: onthouding van eten, drinken en andere zaken van zonsopgang tot zonsondergang.' },
        { word: 'HADJ', meaning: 'De bedevaart naar Mekka', category: 'Begrippen', hintAyah: '\u201cEn de hadj naar het Huis is een plicht tegenover Allah voor de mensen die daartoe in staat zijn.\u201d (Koran 3:97)', hintDef: 'De vijfde zuil van de islam: de pelgrimage naar Mekka, eenmaal in het leven voor wie het kan.' },
        { word: 'DJINN', meaning: 'Onzichtbare wezens', category: 'Begrippen', hintAyah: '\u201cEn Ik heb de djinn en de mens slechts geschapen om Mij te aanbidden.\u201d (Koran 51:56)', hintDef: 'Wezens geschapen uit rookloos vuur, met vrije wil, die naast de mensen bestaan.' },
        { word: 'SABR', meaning: 'Geduld en standvastigheid', category: 'Begrippen', hintAyah: '\u201cVoorwaar, Allah is met de geduldigen (saabirien).\u201d (Koran 2:153)', hintDef: 'Standvastig volharden in gehoorzaamheid aan Allah, ook bij tegenspoed.' },
        { word: 'NIKAH', meaning: 'Het islamitisch huwelijk', category: 'Begrippen', hintAyah: '\u201cEn van Zijn tekenen is dat Hij voor jullie echtgenotes heeft geschapen.\u201d (Koran 30:21)', hintDef: 'Het huwelijkscontract in de islam, een verbond voor Allah.' }
    ];

    var MAX_GUESSES = 5;
    var STREAK_MILESTONES = [3, 7, 14, 30];

    /* ===== Daily Word ===== */

    function todayKey() {
        var d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function getDayNumber() {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var epoch = new Date(2026, 0, 1);
        epoch.setHours(0, 0, 0, 0);
        return Math.floor((today - epoch) / 86400000);
    }

    function getDailyWord() {
        var days = getDayNumber();
        var idx = ((days % WORDS.length) + WORDS.length) % WORDS.length;
        return WORDS[idx];
    }

    /* ===== State ===== */

    var STORAGE_KEY = 'woordmeesterState';

    function defaultState() {
        return {
            version: 1,
            currentDate: todayKey(),
            guesses: [],
            hintsUsed: 0,
            solved: false,
            failed: false,
            currentInput: '',
            stats: {
                played: 0,
                won: 0,
                currentStreak: 0,
                maxStreak: 0,
                distribution: [0, 0, 0, 0, 0]
            }
        };
    }

    var state = defaultState();

    function loadState() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed && parsed.version === 1) {
                    state = parsed;
                    if (!state.currentInput) state.currentInput = '';
                    if (!state.stats) state.stats = defaultState().stats;
                }
            }
        } catch (e) { /* ignore */ }

        /* Reset game if new day */
        if (state.currentDate !== todayKey()) {
            var stats = state.stats;
            state = defaultState();
            state.stats = stats;
        }
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

    var boardEl = document.getElementById('board');
    var resultSection = document.getElementById('result-section');
    var resultStars = document.getElementById('result-stars');
    var resultText = document.getElementById('result-text');
    var resultWord = document.getElementById('result-word');
    var resultMeaning = document.getElementById('result-meaning');
    var shareBtn = document.getElementById('share-btn');
    var shareCopied = document.getElementById('share-copied');
    var keyboard = document.getElementById('keyboard');
    var confettiContainer = document.getElementById('confetti-container');

    var hintBtns = [
        document.getElementById('hint-btn-1'),
        document.getElementById('hint-btn-2'),
        document.getElementById('hint-btn-3'),
        document.getElementById('hint-btn-4')
    ];
    var hintCards = [
        document.getElementById('hint-card-1'),
        document.getElementById('hint-card-2'),
        document.getElementById('hint-card-3'),
        document.getElementById('hint-card-4')
    ];
    var hintTexts = [
        document.getElementById('hint-text-1'),
        document.getElementById('hint-text-2'),
        document.getElementById('hint-text-3'),
        document.getElementById('hint-text-4')
    ];

    var statsModal = document.getElementById('stats-modal');
    var statsClose = document.getElementById('stats-close');
    var statsGrid = document.getElementById('stats-grid');
    var distributionEl = document.getElementById('distribution');
    var statsBtn = document.getElementById('stats-btn');

    var infoModal = document.getElementById('info-modal');
    var infoClose = document.getElementById('info-close');
    var infoBtn = document.getElementById('info-btn');

    var dailyWord = null;
    var gameOver = false;

    /* ===== Render Board ===== */

    function renderBoard() {
        var word = dailyWord.word;
        var len = word.length;
        var html = '';

        for (var r = 0; r < MAX_GUESSES; r++) {
            html += '<div class="guess-row" data-row="' + r + '">';
            var guess = state.guesses[r] || '';
            var isCurrentRow = r === state.guesses.length && !gameOver;
            var input = isCurrentRow ? state.currentInput : '';

            for (var c = 0; c < len; c++) {
                var letter = '';
                var cls = 'tile';

                if (r < state.guesses.length) {
                    /* Past guess */
                    letter = guess[c] || '';
                    if (guess === word) {
                        cls += ' tile--correct';
                    }
                } else if (isCurrentRow) {
                    letter = input[c] || '';
                    if (letter) cls += ' tile--filled';
                    cls += ' tile--current-row';
                }

                html += '<div class="' + cls + '">' + letter + '</div>';
            }
            html += '</div>';
        }

        boardEl.innerHTML = html;
    }

    /* ===== Render Hints ===== */

    function renderHints() {
        var word = dailyWord;

        /* Populate hint texts */
        hintTexts[0].textContent = word.category;
        hintTexts[1].textContent = word.hintAyah;
        hintTexts[2].textContent = word.hintDef;
        hintTexts[3].textContent = 'Het woord begint met de letter: ' + word.word[0];

        /* Show/hide based on state */
        for (var i = 0; i < 4; i++) {
            if (i < state.hintsUsed) {
                hintBtns[i].classList.add('used');
                hintBtns[i].disabled = true;
                hintCards[i].classList.add('show');
            } else {
                hintBtns[i].classList.remove('used');
                hintCards[i].classList.remove('show');
                /* Enable only the next available hint */
                hintBtns[i].disabled = i > state.hintsUsed || gameOver;
            }
        }
    }

    /* ===== Hint Handler ===== */

    function useHint() {
        if (gameOver || state.hintsUsed >= 4) return;

        state.hintsUsed++;
        saveState();
        renderHints();
        gcEvent('woordmeester/hint-' + state.hintsUsed + '-gebruikt', 'Hint ' + state.hintsUsed + ' gebruikt');
    }

    /* ===== Keyboard Input ===== */

    function handleKey(key) {
        if (gameOver) return;

        var word = dailyWord.word;

        if (key === 'BACKSPACE') {
            if (state.currentInput.length > 0) {
                state.currentInput = state.currentInput.slice(0, -1);
                renderBoard();
            }
            return;
        }

        if (key === 'ENTER') {
            submitGuess();
            return;
        }

        /* Letter key */
        if (/^[A-Z]$/.test(key) && state.currentInput.length < word.length) {
            state.currentInput += key;
            renderBoard();
        }
    }

    /* ===== Submit Guess ===== */

    function submitGuess() {
        var word = dailyWord.word;
        var guess = state.currentInput.toUpperCase();

        if (guess.length !== word.length) return;

        state.guesses.push(guess);
        state.currentInput = '';
        saveState();

        if (guess === word) {
            /* Correct! */
            gameOver = true;
            state.solved = true;
            saveState();
            renderBoard();
            animateCorrectRow(state.guesses.length - 1);

            setTimeout(function () {
                handleWin();
            }, word.length * 150 + 300);
        } else if (state.guesses.length >= MAX_GUESSES) {
            /* Game over */
            gameOver = true;
            state.failed = true;
            saveState();
            renderBoard();
            animateWrongRow(state.guesses.length - 1);

            setTimeout(function () {
                handleLoss();
            }, 600);
        } else {
            /* Wrong but continue */
            renderBoard();
            animateWrongRow(state.guesses.length - 1);
        }
    }

    /* ===== Animations ===== */

    function animateCorrectRow(rowIndex) {
        var row = boardEl.querySelector('[data-row="' + rowIndex + '"]');
        if (!row) return;
        var tiles = row.querySelectorAll('.tile');
        tiles.forEach(function (tile, i) {
            setTimeout(function () {
                tile.classList.add('tile--flip');
                setTimeout(function () {
                    tile.classList.add('tile--correct');
                }, 250);
            }, i * 150);
        });
    }

    function animateWrongRow(rowIndex) {
        var row = boardEl.querySelector('[data-row="' + rowIndex + '"]');
        if (!row) return;
        row.style.animation = 'shake 0.4s ease';
        setTimeout(function () {
            row.style.animation = '';
        }, 400);
    }

    function spawnConfetti() {
        var colors = ['#28a745', '#0f7b4f', '#f0a500', '#dc3545', '#6f42c1', '#007bff'];
        var count = 40;

        for (var i = 0; i < count; i++) {
            (function (idx) {
                setTimeout(function () {
                    var piece = document.createElement('div');
                    piece.className = 'confetti-piece';
                    piece.style.left = Math.random() * 100 + '%';
                    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
                    piece.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
                    piece.style.width = (6 + Math.random() * 6) + 'px';
                    piece.style.height = (6 + Math.random() * 6) + 'px';
                    confettiContainer.appendChild(piece);

                    setTimeout(function () {
                        if (piece.parentNode) piece.parentNode.removeChild(piece);
                    }, 3500);
                }, idx * 50);
            })(i);
        }
    }

    /* ===== Win / Loss ===== */

    function getStars() {
        return Math.max(1, 4 - state.hintsUsed);
    }

    function handleWin() {
        var stars = getStars();

        /* Update stats */
        state.stats.played++;
        state.stats.won++;
        state.stats.currentStreak++;
        if (state.stats.currentStreak > state.stats.maxStreak) {
            state.stats.maxStreak = state.stats.currentStreak;
        }
        var distIdx = Math.min(state.guesses.length - 1, 4);
        state.stats.distribution[distIdx]++;
        saveState();

        /* Show result */
        var starStr = '';
        for (var i = 0; i < stars; i++) starStr += '\u2b50';
        resultStars.textContent = starStr;
        resultText.textContent = 'Gefeliciteerd! Je hebt het woord geraden!';
        resultWord.textContent = dailyWord.word;
        resultMeaning.textContent = dailyWord.meaning;
        resultSection.classList.add('show');

        spawnConfetti();
        renderHints();

        gcEvent('woordmeester/woord-geraden', 'Woord geraden');

        /* Streak milestones */
        STREAK_MILESTONES.forEach(function (m) {
            if (state.stats.currentStreak === m) {
                gcEvent('woordmeester/streak-' + m, 'Streak ' + m);
            }
        });
    }

    function handleLoss() {
        /* Update stats */
        state.stats.played++;
        state.stats.currentStreak = 0;
        saveState();

        /* Show result */
        resultStars.textContent = '';
        resultText.textContent = 'Helaas! Het woord was:';
        resultWord.textContent = dailyWord.word;
        resultMeaning.textContent = dailyWord.meaning;
        resultSection.classList.add('show');
        renderHints();

        gcEvent('woordmeester/woord-niet-geraden', 'Woord niet geraden');
    }

    /* ===== Share ===== */

    function shareResult() {
        var dayNum = getDayNumber() + 1;
        var stars = getStars();
        var starStr = '';
        for (var i = 0; i < stars; i++) starStr += '\u2b50';

        var text = 'Woordmeester \ud83d\udd4c Dag ' + dayNum + '\n';
        text += starStr + ' (' + stars + '/4 sterren)\n';
        text += '\ud83d\udca1 ' + state.hintsUsed + ' hint' + (state.hintsUsed !== 1 ? 's' : '') + ' gebruikt\n';

        if (state.solved) {
            text += 'Poging ' + state.guesses.length + '/' + MAX_GUESSES + '\n\n';
            var greenRow = '';
            for (var j = 0; j < dailyWord.word.length; j++) greenRow += '\ud83d\udfe9';
            text += greenRow + '\n';
        } else {
            text += 'Niet geraden\n';
        }

        text += '\nleer.hetrechtepadcollege.nl/apps/woordmeester/';

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                shareCopied.classList.add('show');
                setTimeout(function () { shareCopied.classList.remove('show'); }, 2500);
            });
        }

        gcEvent('woordmeester/gedeeld-whatsapp', 'Resultaat gedeeld');
    }

    /* ===== Stats Modal ===== */

    function renderStats() {
        var s = state.stats;
        var winPct = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;

        statsGrid.innerHTML = '<div class="stat-item"><span class="stat-number">' + s.played + '</span><span class="stat-label">Gespeeld</span></div>' +
            '<div class="stat-item"><span class="stat-number">' + winPct + '%</span><span class="stat-label">Gewonnen</span></div>' +
            '<div class="stat-item"><span class="stat-number">' + s.currentStreak + '</span><span class="stat-label">Huidige streak</span></div>' +
            '<div class="stat-item"><span class="stat-number">' + s.maxStreak + '</span><span class="stat-label">Max streak</span></div>';

        var maxDist = Math.max.apply(null, s.distribution.concat([1]));
        var distHtml = '<h3>Verdeling pogingen</h3>';
        for (var i = 0; i < 5; i++) {
            var pct = Math.max(10, Math.round(s.distribution[i] / maxDist * 100));
            var highlight = (state.solved && state.guesses.length - 1 === i) ? ' highlight' : '';
            distHtml += '<div class="dist-row"><span class="dist-label">' + (i + 1) + '</span><div class="dist-bar' + highlight + '" style="width:' + pct + '%">' + s.distribution[i] + '</div></div>';
        }
        distributionEl.innerHTML = distHtml;
    }

    function showStats() {
        renderStats();
        statsModal.classList.add('active');
    }

    function hideStats() {
        statsModal.classList.remove('active');
    }

    function showInfo() {
        infoModal.classList.add('active');
    }

    function hideInfo() {
        infoModal.classList.remove('active');
    }

    /* ===== Init ===== */

    function init() {
        loadState();
        dailyWord = getDailyWord();
        gameOver = state.solved || state.failed;

        renderBoard();
        renderHints();

        /* If game already over, show result */
        if (state.solved) {
            resultStars.textContent = '';
            var stars = getStars();
            for (var i = 0; i < stars; i++) resultStars.textContent += '\u2b50';
            resultText.textContent = 'Je hebt het woord geraden!';
            resultWord.textContent = dailyWord.word;
            resultMeaning.textContent = dailyWord.meaning;
            resultSection.classList.add('show');
        } else if (state.failed) {
            resultStars.textContent = '';
            resultText.textContent = 'Helaas! Het woord was:';
            resultWord.textContent = dailyWord.word;
            resultMeaning.textContent = dailyWord.meaning;
            resultSection.classList.add('show');
        }

        /* Keyboard clicks */
        keyboard.addEventListener('click', function (e) {
            var btn = e.target.closest('.key');
            if (!btn) return;
            var key = btn.getAttribute('data-key');
            handleKey(key);
        });

        /* Physical keyboard */
        document.addEventListener('keydown', function (e) {
            if (statsModal.classList.contains('active') || infoModal.classList.contains('active')) return;

            if (e.key === 'Backspace') {
                e.preventDefault();
                handleKey('BACKSPACE');
            } else if (e.key === 'Enter') {
                e.preventDefault();
                handleKey('ENTER');
            } else if (/^[a-zA-Z]$/.test(e.key)) {
                handleKey(e.key.toUpperCase());
            }
        });

        /* Hint buttons */
        hintBtns.forEach(function (btn) {
            btn.addEventListener('click', useHint);
        });

        /* Share */
        shareBtn.addEventListener('click', shareResult);

        /* Stats modal */
        statsBtn.addEventListener('click', showStats);
        statsClose.addEventListener('click', hideStats);
        statsModal.addEventListener('click', function (e) { if (e.target === statsModal) hideStats(); });

        /* Info modal */
        infoBtn.addEventListener('click', showInfo);
        infoClose.addEventListener('click', hideInfo);
        infoModal.addEventListener('click', function (e) { if (e.target === infoModal) hideInfo(); });

        /* Escape key */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                hideStats();
                hideInfo();
            }
        });

        /* Track */
        gcEvent('woordmeester/app-gestart', 'App gestart');

        /* Show info on first visit */
        if (state.stats.played === 0 && !state.solved && !state.failed && state.guesses.length === 0) {
            showInfo();
        }
    }

    /* ===== Start ===== */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
