# Woordmeester

## Doel & doelgroep
Dagelijks woordpuzzelspel met islamitische/Arabische begrippen voor een breed volwassen publiek. Spelers raden het woord aan de hand van inhoudelijke hints uit Koran en Hadith.

## Speelmechaniek
- Eén woord per dag (deterministisch op basis van datum, geen server nodig)
- Maximaal 5 pogingen — typ het volledige woord
- 4 progressieve hints: categorie → Koranvers → definitie → eerste letter
- Elke gebruikte hint verlaagt de score (4 sterren - hints = score, minimum 1)
- Resultaat deelbaar als tekst voor WhatsApp/social media

## Bestandsstructuur
- `index.html` — Hoofdpagina met game board en on-screen keyboard
- `style.css` — Clean/minimalistisch thema (emerald/amber, NIET donkerblauw/goud)
- `script.js` — Spellogica, woordenlijst (30 woorden), state management

## GoatCounter events
- `woordmeester/app-gestart` — bij laden
- `woordmeester/woord-geraden` — bij correct antwoord
- `woordmeester/woord-niet-geraden` — na 5 foute pogingen
- `woordmeester/hint-{1-4}-gebruikt` — bij gebruik van hint
- `woordmeester/gedeeld-whatsapp` — bij delen resultaat
- `woordmeester/streak-{n}` — bij streak milestones (3, 7, 14, 30)

## Woordenlijst uitbreidingsregels
- Woorden staan in `WORDS` array in `script.js`
- Elk woord: `{ word, meaning, category, hintAyah, hintDef }`
- Woorden in hoofdletters, Nederlandse transliteratie
- Bij toevoegen: `getDailyWord()` cyclet automatisch door alle woorden op basis van datum

## Ontwikkelnotities
- Clean/minimal thema (emerald/amber), NIET donkerblauw/goud
- Staat in localStorage (sleutel: `woordmeesterState`)
- Google Fonts: Inter, JetBrains Mono
- Dagelijkse woordselectie: deterministisch op basis van dagen sinds 1 januari 2026
- On-screen keyboard + fysiek toetsenbord worden beide ondersteund
