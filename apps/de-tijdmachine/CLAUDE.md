# De Tijdmachine — App instructies

## Doel
Een interactieve educatieve app waarbij gebruikers 10 historische steden uit de Islamitische Gouden Eeuw ontdekken via een SVG-kaart. Per stad: ontdekkingskaart met geleerde + mini-challenge (multiple choice). Doelgroep: volwassenen.

## Steden (10)
- **Bagdad** — Al-Khwarizmi, Bayt al-Hikma, algebra/algoritme (8e–10e eeuw)
- **Córdoba** — Ibn Rushd (Averroës), bibliotheek 400.000 boeken (10e–12e eeuw)
- **Caïro** — Ibn al-Haytham, optica (10e–11e eeuw)
- **Samarkand** — Ulugh Beg, sterrencatalogus (15e eeuw)
- **Damascus** — Ibn al-Nafis, longcirculatie (13e eeuw)
- **Toledo** — Vertalingsbeweging (12e–13e eeuw)
- **Fez** — Fatima al-Fihri, oudste universiteit 859 (9e eeuw)
- **Istanbul** — Taqi al-Din, mechanische klokken (16e eeuw)
- **Timboektoe** — Sankore universiteit, manuscripten (14e–16e eeuw)
- **Bukhara** — Ibn Sina (Avicenna), Canon der Geneeskunde (10e–11e eeuw)

## Thema
Parchment/manuscript-stijl: `--parchment` (#f5ead0), `--copper` (#b87333), `--brown` (#3d2b1f). Lettertype: Playfair Display (koppen), Source Sans 3 (body). **Bewust ANDERS** dan de donker-marineblauwe portal-stijl.

## Persistentie
- `localStorage` sleutel: `tijdmachineState` (versie 1)
- Slaat op: `visitedCities` (bezocht) en `completedChallenges` (challenge voltooid)

## Functionaliteit
- **Tijdlijnslider**: filtert steden op eeuw (8e t/m 16e eeuw)
- **Ontdekkingskaart**: opent bij klik op stadsmarker, toont geleerde + beschrijving + uitvinding + wetenswaardigheidje + MCQ
- **Verzamellade**: rechterlade met overzicht bezochte/nog te ontdekken steden
- **Voortgangsbalk**: toont X van 10 voltooide challenges

## GoatCounter events
- `tijdmachine/app-gestart` — bij laden
- `tijdmachine/stad-{id}-bezocht` — bij eerste bezoek aan een stad
- `tijdmachine/challenge-{id}-voltooid` — bij correct beantwoorde challenge
- `tijdmachine/alle-steden-bezocht` — bij 100% voltooiing

## Technische notities
- Alle JS in extern `script.js` (IIFE, geen modules)
- SVG viewBox 1000×550; stadsmarkers als `<g class="city-marker" data-city="...">` met `translate(x, y)`
- Stadsmarkers tonen `.visited` (na aanklikken) of `.completed` (na correct antwoord)
- Letop: Toledo (85, 197) en Córdoba (100, 215) zijn bewust iets uit elkaar geplaatst
