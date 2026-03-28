// ── LETTERS DATA ──
const letters = [
  { ar: 'ا', name: 'Alif', roman: 'a / ā', sound: 'Als de \'a\' in \'vader\'', forms: ['ا','ا','ا','ا'] },
  { ar: 'ب', name: 'Ba', roman: 'b', sound: 'Als de \'b\' in \'boom\'', forms: ['بـ','ـبـ','ـب','ب'] },
  { ar: 'ت', name: 'Ta', roman: 't', sound: 'Als de \'t\' in \'tafel\'', forms: ['تـ','ـتـ','ـت','ت'] },
  { ar: 'ث', name: 'Tha', roman: 'th', sound: 'Als de \'th\' in \'think\'', forms: ['ثـ','ـثـ','ـث','ث'] },
  { ar: 'ج', name: 'Jim', roman: 'j', sound: 'Als de \'j\' in \'jaar\'', forms: ['جـ','ـجـ','ـج','ج'] },
  { ar: 'ح', name: 'Ha', roman: 'ḥ', sound: 'Diepe \'h\', vanuit de keel', forms: ['حـ','ـحـ','ـح','ح'] },
  { ar: 'خ', name: 'Kha', roman: 'kh', sound: 'Als de \'ch\' in \'loch\'', forms: ['خـ','ـخـ','ـخ','خ'] },
  { ar: 'د', name: 'Dal', roman: 'd', sound: 'Als de \'d\' in \'deur\'', forms: ['د','د','ـد','د'] },
  { ar: 'ذ', name: 'Dhal', roman: 'dh', sound: 'Als de \'th\' in \'this\'', forms: ['ذ','ذ','ـذ','ذ'] },
  { ar: 'ر', name: 'Ra', roman: 'r', sound: 'Gerolde \'r\'', forms: ['ر','ر','ـر','ر'] },
  { ar: 'ز', name: 'Zay', roman: 'z', sound: 'Als de \'z\' in \'zee\'', forms: ['ز','ز','ـز','ز'] },
  { ar: 'س', name: 'Sin', roman: 's', sound: 'Als de \'s\' in \'ster\'', forms: ['سـ','ـسـ','ـس','س'] },
  { ar: 'ش', name: 'Shin', roman: 'sh', sound: 'Als de \'sj\' in \'sjaal\'', forms: ['شـ','ـشـ','ـش','ش'] },
  { ar: 'ص', name: 'Sad', roman: 'ṣ', sound: 'Nadruk-\'s\', zwaar', forms: ['صـ','ـصـ','ـص','ص'] },
  { ar: 'ض', name: 'Dad', roman: 'ḍ', sound: 'Nadruk-\'d\', zwaar', forms: ['ضـ','ـضـ','ـض','ض'] },
  { ar: 'ط', name: 'Ta (zwaar)', roman: 'ṭ', sound: 'Nadruk-\'t\', zwaar', forms: ['طـ','ـطـ','ـط','ط'] },
  { ar: 'ظ', name: 'Dha (zwaar)', roman: 'ẓ', sound: 'Nadruk-\'dh\', zwaar', forms: ['ظـ','ـظـ','ـظ','ظ'] },
  { ar: 'ع', name: '\'Ain', roman: 'ʿ', sound: 'Keelklank, uniek Arabisch', forms: ['عـ','ـعـ','ـع','ع'] },
  { ar: 'غ', name: 'Ghain', roman: 'gh', sound: 'Gegurgel achter in keel', forms: ['غـ','ـغـ','ـغ','غ'] },
  { ar: 'ف', name: 'Fa', roman: 'f', sound: 'Als de \'f\' in \'fiets\'', forms: ['فـ','ـفـ','ـف','ف'] },
  { ar: 'ق', name: 'Qaf', roman: 'q', sound: 'Diepe \'k\', achterin keel', forms: ['قـ','ـقـ','ـق','ق'] },
  { ar: 'ك', name: 'Kaf', roman: 'k', sound: 'Als de \'k\' in \'kat\'', forms: ['كـ','ـكـ','ـك','ك'] },
  { ar: 'ل', name: 'Lam', roman: 'l', sound: 'Als de \'l\' in \'licht\'', forms: ['لـ','ـلـ','ـل','ل'] },
  { ar: 'م', name: 'Mim', roman: 'm', sound: 'Als de \'m\' in \'maan\'', forms: ['مـ','ـمـ','ـم','م'] },
  { ar: 'ن', name: 'Nun', roman: 'n', sound: 'Als de \'n\' in \'nacht\'', forms: ['نـ','ـنـ','ـن','ن'] },
  { ar: 'ه', name: 'Ha (zacht)', roman: 'h', sound: 'Als de \'h\' in \'huis\'', forms: ['هـ','ـهـ','ـه','ه'] },
  { ar: 'و', name: 'Waw', roman: 'w / ū', sound: 'Als \'w\' of lange \'oe\'', forms: ['و','و','ـو','و'] },
  { ar: 'ي', name: 'Ya', roman: 'y / ī', sound: 'Als \'j\' of lange \'ie\'', forms: ['يـ','ـيـ','ـي','ي'] }
];

// ── STATE ──
let geleerd = new Set();
let huidigTab = 'verkennen';
let quizStatus = { goed: 0, fout: 0 };
let huidigeLetter = null;
let quizBeantwoord = false;
let quizVraagNr = 0;

// ── GOATCOUNTER TRACKING ──
function trackEvent(pad, titel) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({
      path: pad,
      title: titel
    });
  }
}

// ── INITIALIZATION ──
function initApp() {
  trackEvent('arabisch-alfabet/app-gestart', 'App gestart');
  bouwLetterGrid();
  setupTabNavigation();
  startQuiz();
}

function bouwLetterGrid() {
  const grid = document.getElementById('lettersGrid');
  grid.innerHTML = '';
  letters.forEach((letter, idx) => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    if (geleerd.has(idx)) {
      card.classList.add('active');
    }
    card.innerHTML = `
      <div class="lc-arabic">${letter.ar}</div>
      <div class="lc-name">${letter.name}</div>
      <div class="lc-roman">${letter.roman}</div>
    `;
    card.onclick = () => toonDetail(idx);
    grid.appendChild(card);
  });
}

function toonDetail(index) {
  huidigeLetter = index;
  const letter = letters[index];
  const detailPanel = document.getElementById('letterDetail');

  // Mark as learned
  if (!geleerd.has(index)) {
    geleerd.add(index);
    trackEvent(`arabisch-alfabet/letter-geopend/${letter.name.toLowerCase()}`, `Letter: ${letter.name}`);
  }

  // Update UI
  document.getElementById('detailArabic').textContent = letter.ar;
  document.getElementById('detailName').textContent = letter.name;
  document.getElementById('detailRoman').textContent = letter.roman;
  document.getElementById('detailSound').textContent = `Uitspraak: ${letter.sound}`;

  // Forms
  const formsGrid = document.getElementById('detailForms');
  formsGrid.innerHTML = '';
  const formLabels = ['Begin', 'Midden', 'Eind', 'Alleen'];
  letter.forms.forEach((form, idx) => {
    const box = document.createElement('div');
    box.className = 'form-box';
    box.innerHTML = `
      <div class="fb-arabic">${form}</div>
      <span class="fb-label">${formLabels[idx]}</span>
    `;
    formsGrid.appendChild(box);
  });

  detailPanel.classList.remove('hidden');
  updateVoortgang();
  bouwLetterGrid(); // Refresh cards to show active state
}

function updateVoortgang() {
  const percentage = (geleerd.size / letters.length) * 100;
  document.getElementById('progressFill').style.width = percentage + '%';
  document.getElementById('progressLabel').textContent = `${geleerd.size} / ${letters.length} geleerd`;
}

function setupTabNavigation() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      // Remove active from all buttons and panels
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      // Add active to clicked button and corresponding panel
      btn.classList.add('active');
      document.getElementById(`tab-${tabName}`).classList.add('active');

      huidigTab = tabName;
      trackEvent(`arabisch-alfabet/tab-${tabName}`, `Tab: ${tabName}`);

      if (tabName === 'quiz') {
        startQuiz();
      }
    });
  });
}

// ── QUIZ ──
function startQuiz() {
  if (letters.length === 0) return;

  quizVraagNr++;
  quizBeantwoord = false;

  // Random letter
  const randomIdx = Math.floor(Math.random() * letters.length);
  const letter = letters[randomIdx];

  // Display letter
  document.getElementById('quizLetter').textContent = letter.ar;
  document.getElementById('quizFeedback').innerHTML = '';
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizVolgende').classList.add('hidden');

  // Generate 4 options: 1 correct + 3 wrong
  const options = [randomIdx];
  while (options.length < 4) {
    const wrongIdx = Math.floor(Math.random() * letters.length);
    if (!options.includes(wrongIdx)) {
      options.push(wrongIdx);
    }
  }

  // Shuffle
  const shuffled = options.sort(() => Math.random() - 0.5);

  // Render buttons
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  shuffled.forEach(idx => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = letters[idx].name;
    btn.onclick = () => checkAntwoord(idx, randomIdx);
    optionsContainer.appendChild(btn);
  });

  trackEvent('arabisch-alfabet/quiz-gestart', 'Quiz gestart');
}

function checkAntwoord(gekozenIdx, correctIdx) {
  if (quizBeantwoord) return;

  quizBeantwoord = true;
  const isCorrect = gekozenIdx === correctIdx;
  const correctLetter = letters[correctIdx].name.toLowerCase();

  // Track per question
  const eventPath = isCorrect
    ? `arabisch-alfabet/v${quizVraagNr}-goed`
    : `arabisch-alfabet/v${quizVraagNr}-fout`;
  trackEvent(eventPath, `Vraag ${quizVraagNr}: ${isCorrect ? 'Goed' : 'Fout'}`);

  // Update score
  if (isCorrect) {
    quizStatus.goed++;
    document.getElementById('scoreGoed').textContent = quizStatus.goed;
  } else {
    quizStatus.fout++;
    document.getElementById('scoreFout').textContent = quizStatus.fout;
  }

  // Visual feedback
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach((btn, idx) => {
    btn.classList.add('disabled');
    const optionIdx = Array.from(buttons).indexOf(btn);

    // Find which letter this button represents
    let letterIdx = -1;
    let count = 0;
    for (let i = 0; i < letters.length; i++) {
      let found = false;
      for (let j = 0; j < 4; j++) {
        if (j === optionIdx) {
          letterIdx = i;
          found = true;
          break;
        }
      }
      if (found && count === optionIdx) break;
      count++;
    }

    // Simpler approach: track by position in current quiz
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach((opt, optIdx) => {
      // Determine which letter this option is
      const currentOptions = [correctIdx];
      while (currentOptions.length < 4) {
        const wrongIdx = Math.floor(Math.random() * letters.length);
        if (!currentOptions.includes(wrongIdx)) {
          currentOptions.push(wrongIdx);
        }
      }
      const shuffledForCheck = currentOptions.sort(() => Math.random() - 0.5);

      // Just color based on our tracking
      if (optIdx === 0 || btn === buttons[0]) {
        if (gekozenIdx === correctIdx && gekozenIdx === correctIdx) {
          btn.classList.add('correct');
        } else if (btn === buttons[Array.from(buttons).indexOf(document.querySelector('.quiz-option'))]) {
          if (!isCorrect && gekozenIdx === gekozenIdx) {
            btn.classList.add('wrong');
          }
        }
      }
    });
  });

  // Show correct answer indicator and feedback
  buttons.forEach((btn) => {
    // Get the letter name text from button
    const btnText = btn.textContent;
    const btnLetter = letters.find(l => l.name === btnText);
    const btnIdx = letters.indexOf(btnLetter);

    if (btnIdx === correctIdx) {
      btn.classList.add('correct');
    } else if (btnIdx === gekozenIdx && gekozenIdx !== correctIdx) {
      btn.classList.add('wrong');
    }
  });

  // Feedback message
  const feedback = document.getElementById('quizFeedback');
  if (isCorrect) {
    feedback.textContent = 'Correct! ✓';
    feedback.classList.add('correct');
  } else {
    feedback.textContent = `Fout. Correct antwoord: ${letters[correctIdx].name}`;
    feedback.classList.add('wrong');
  }

  document.getElementById('quizVolgende').classList.remove('hidden');
}

function volgendeVraag() {
  startQuiz();
}

// ── APP START ──
document.addEventListener('DOMContentLoaded', initApp);
