const CATEGORIE_META = {
  "Profeten":               { kleur: "#1B6B3A", licht: "#E8F5EE", icoon: "✦" },
  "Ṣaḥāba":                { kleur: "#7B4A00", licht: "#FFF3E0", icoon: "☽" },
  "Familie van de Profeet": { kleur: "#5C2D91", licht: "#F3E8FF", icoon: "◈" },
  "Tābiʿūn":               { kleur: "#0D5C7A", licht: "#E1F4FB", icoon: "❖" },
  "Geleerden":              { kleur: "#8B1A2D", licht: "#FDE8EC", icoon: "✿" },
};

const STARTDATUM = new Date("2025-01-01");

let staat = {
  persoon: null,
  dagIndex: 0,
  aantalHints: 0,
  geradenOpHint: null, // 1-6 als geraden, 0 als onthulde
  foutePogingen: 0,
  afgerond: false,
};

function getDagString() {
  return new Date().toISOString().split("T")[0];
}

function getDagIndex() {
  const nu = new Date();
  const verschil = Math.floor((nu - STARTDATUM) / 86400000);
  return verschil % PERSONEN.length;
}

function laadOpgeslagenStaat() {
  try {
    const raw = localStorage.getItem("wiebeniek_staat");
    if (!raw) return null;
    const opgeslagen = JSON.parse(raw);
    if (opgeslagen.datum !== getDagString()) return null;
    return opgeslagen;
  } catch { return null; }
}

function slaStaatOp() {
  localStorage.setItem("wiebeniek_staat", JSON.stringify({
    datum: getDagString(),
    dagIndex: staat.dagIndex,
    aantalHints: staat.aantalHints,
    geradenOpHint: staat.geradenOpHint,
    foutePogingen: staat.foutePogingen,
    afgerond: staat.afgerond,
  }));
}

function normaliseer(tekst) {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ḥḍṭẓṣḍḷḳṁṅ]/g, c => ({ ḥ:"h",ḍ:"d",ṭ:"t",ẓ:"z",ṣ:"s",ḷ:"l",ḳ:"k",ṁ:"m",ṅ:"n" }[c] || c))
    .replace(/ā/g, "a").replace(/ī/g, "i").replace(/ū/g, "u")
    .replace(/ʿ|ʾ|'/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function controleerRaad(invoer) {
  const genorm = normaliseer(invoer);
  if (genorm.length < 2) return false;
  const kandidaten = [staat.persoon.naam, ...(staat.persoon.alternatieven || [])];
  return kandidaten.some(k => {
    const kn = normaliseer(k);
    return kn === genorm || kn.includes(genorm) || genorm.includes(kn.split(" ")[0]);
  });
}

function sterrenTekst(geradenOp) {
  if (geradenOp === null || geradenOp === 0) return "☆☆☆☆☆☆";
  const vol = 7 - geradenOp;
  return "★".repeat(vol) + "☆".repeat(6 - vol);
}

function deelTekst() {
  const p = staat.persoon;
  const g = staat.geradenOpHint;
  const sterren = sterrenTekst(g);
  const tekst = g
    ? `Ik raadde "${p.naam}" in ${g} van 6 hints!\n${sterren}`
    : `Ik heb "${p.naam}" niet kunnen raden — maar ik heb 6 nieuwe feiten geleerd!`;
  return `Wie Ben Ik? — ${getDagString()}\n${tekst}\n\nhttps://hetrechtepad.nl/apps/wie-ben-ik/`;
}

// ── RENDER ─────────────────────────────────────────────────────────────────

function renderCategorieBadge() {
  const meta = CATEGORIE_META[staat.persoon.categorie];
  document.getElementById("categorie-badge").textContent = staat.persoon.categorie;
  document.getElementById("categorie-badge").style.background = meta.licht;
  document.getElementById("categorie-badge").style.color = meta.kleur;
  document.getElementById("categorie-icoon").textContent = meta.icoon;
  document.getElementById("categorie-icoon").style.color = meta.kleur;
}

function renderHints() {
  const container = document.getElementById("hints-container");
  container.innerHTML = "";
  for (let i = 0; i < staat.aantalHints; i++) {
    const kaart = document.createElement("div");
    kaart.className = "hint-kaart" + (i === staat.aantalHints - 1 ? " nieuw" : "");
    kaart.innerHTML = `<span class="hint-nr">${i + 1}</span><span class="hint-tekst">${staat.persoon.hints[i]}</span>`;
    container.appendChild(kaart);
  }
}

function renderSterre() {
  const sterren = document.getElementById("sterren");
  sterren.textContent = sterrenTekst(staat.geradenOpHint);
}

function renderTeller() {
  const max = staat.persoon.hints.length;
  document.getElementById("hint-teller").textContent = `Hint ${staat.aantalHints} van ${max}`;
}

function toonOnthulling() {
  const p = staat.persoon;
  const meta = CATEGORIE_META[p.categorie];
  document.getElementById("game-scherm").classList.add("verborgen");
  document.getElementById("onthulling-scherm").classList.remove("verborgen");

  const g = staat.geradenOpHint;
  document.getElementById("onth-sterren").textContent = sterrenTekst(g);
  document.getElementById("onth-score-label").textContent = g
    ? `Geraden in ${g} hint${g !== 1 ? "s" : ""}!`
    : "Niet geraden — maar je leerde hem kennen!";

  document.getElementById("onth-categorie").textContent = p.categorie;
  document.getElementById("onth-categorie").style.background = meta.licht;
  document.getElementById("onth-categorie").style.color = meta.kleur;

  document.getElementById("onth-arabisch").textContent = p.arabisch;
  document.getElementById("onth-naam").textContent = p.naam;
  document.getElementById("onth-eretitel").textContent = p.eretitel;
  document.getElementById("onth-biografie").textContent = p.biografie;
  document.getElementById("onth-header-icoon").textContent = meta.icoon;
  document.getElementById("onth-header-icoon").style.color = meta.kleur;

  // Toon alle hints op het eindscherm
  const onthHints = document.getElementById("onth-hints-container");
  onthHints.innerHTML = "";
  p.hints.forEach((hint, i) => {
    const kaart = document.createElement("div");
    kaart.className = "hint-kaart";
    kaart.innerHTML = `<span class="hint-nr">${i + 1}</span><span class="hint-tekst">${hint}</span>`;
    onthHints.appendChild(kaart);
  });
}

function herstelSpel() {
  // Herstel een in-progress spel vanuit localStorage
  renderCategorieBadge();
  renderHints();
  renderTeller();
  renderSterre();
  document.getElementById("game-scherm").classList.remove("verborgen");
  document.getElementById("invoer-sectie").classList.remove("verborgen");
  if (staat.aantalHints >= staat.persoon.hints.length) {
    document.getElementById("onthul-knop").classList.remove("verborgen");
  } else {
    document.getElementById("volgende-hint-knop").classList.remove("verborgen");
  }
  koppelEventListeners();
}

// ── EVENT LISTENERS ────────────────────────────────────────────────────────

function koppelEventListeners() {
  document.getElementById("volgende-hint-knop").addEventListener("click", volgendHint);
  document.getElementById("onthul-knop").addEventListener("click", () => onthul(0));
  document.getElementById("raad-knop").addEventListener("click", verwerkRaad);
  document.getElementById("raad-invoer").addEventListener("keydown", e => {
    if (e.key === "Enter") verwerkRaad();
  });
}

// ── ACTIES ─────────────────────────────────────────────────────────────────

function volgendHint() {
  if (staat.aantalHints >= staat.persoon.hints.length) return;
  staat.aantalHints++;
  renderHints();
  renderTeller();
  slaStaatOp();

  if (staat.aantalHints >= staat.persoon.hints.length) {
    document.getElementById("volgende-hint-knop").classList.add("verborgen");
    document.getElementById("onthul-knop").classList.remove("verborgen");
  }
  document.getElementById("raad-invoer").focus();
}

function onthul(geradenOp = 0) {
  staat.geradenOpHint = geradenOp;
  staat.afgerond = true;
  slaStaatOp();
  renderSterre();
  setTimeout(toonOnthulling, geradenOp ? 600 : 0);
}

function verwerkRaad() {
  const invoer = document.getElementById("raad-invoer").value.trim();
  if (!invoer) return;

  if (controleerRaad(invoer)) {
    document.getElementById("raad-invoer").classList.add("correct");
    document.getElementById("feedback").textContent = "✓ Correct!";
    document.getElementById("feedback").className = "feedback correct";
    document.getElementById("invoer-sectie").classList.add("verborgen");
    document.getElementById("volgende-hint-knop").classList.add("verborgen");
    document.getElementById("onthul-knop").classList.add("verborgen");
    onthul(staat.aantalHints);
  } else {
    staat.foutePogingen++;
    slaStaatOp();
    document.getElementById("raad-invoer").classList.add("fout");
    document.getElementById("feedback").textContent = "Helaas — probeer opnieuw.";
    document.getElementById("feedback").className = "feedback fout";
    setTimeout(() => {
      document.getElementById("raad-invoer").classList.remove("fout");
      document.getElementById("raad-invoer").value = "";
    }, 700);
  }
}

function kopieerDeel() {
  const tekst = deelTekst();
  navigator.clipboard.writeText(tekst).then(() => {
    const knop = document.getElementById("deel-knop");
    knop.textContent = "✓ Gekopieerd!";
    setTimeout(() => knop.textContent = "Deel resultaat", 2000);
  }).catch(() => {
    prompt("Kopieer en deel:", tekst);
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────

function init() {
  staat.dagIndex = getDagIndex();
  staat.persoon = PERSONEN[staat.dagIndex];

  const opgeslagen = laadOpgeslagenStaat();
  if (opgeslagen) {
    staat.aantalHints = opgeslagen.aantalHints;
    staat.geradenOpHint = opgeslagen.geradenOpHint;
    staat.foutePogingen = opgeslagen.foutePogingen;
    staat.afgerond = opgeslagen.afgerond;

    if (staat.afgerond) {
      toonOnthulling();
    } else {
      herstelSpel();
    }
    return;
  }

  // Nieuw spel
  staat.aantalHints = 1;
  renderCategorieBadge();
  renderHints();
  renderTeller();
  renderSterre();
  slaStaatOp();

  document.getElementById("game-scherm").classList.remove("verborgen");
  document.getElementById("volgende-hint-knop").classList.remove("verborgen");
  document.getElementById("invoer-sectie").classList.remove("verborgen");

  koppelEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("onthulling-deel-knop")?.addEventListener("click", kopieerDeel);
  init();
});
