/* ============================================================
   De 99 Namen van Allah (Asmā' ul-Ḥusnā)
   HRPC Leerportaal — script.js
   Bronnen: Ṣaḥīḥ at-Tirmidhī 3507, commentaar van
   Imam al-Bayhaqī (Al-Asmāʾ waṣ-Ṣifāt),
   Ibn al-Qayyim (Al-Kāfiya ash-Shāfiya — met Ḥanafī filter),
   Sa'dī (Tawḍīḥ al-Kafīya) — Māturīdī aqīda
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────
   DATA: 99 Namen
   ────────────────────────────────────────────────────────── */
const NAMEN = [
  { nr: 1,  arabisch: 'اللَّهُ',            transliteratie: 'Allāh',               betekenis: 'God — de Almachtige',                        uitleg: 'De persoonsnaam van de Schepper die alle volmaakte eigenschappen in zich verenigt. Dit is de enige naam die uitsluitend aan Hem toebehoort en nooit door een mens kan worden gedragen. Alle andere namen zijn omschrijvingen van Zijn eigenschappen; deze naam omvat ze allen.' },
  { nr: 2,  arabisch: 'الرَّحْمٰنُ',        transliteratie: 'Ar-Raḥmān',           betekenis: 'De Meest Barmhartige',                       uitleg: 'Zijn barmhartigheid omvat alle schepselen in dit leven — gelovige en ongelovige. Deze naam verwijst naar de alomvattende, universele barmhartigheid waarmee Allah het bestaan zelf onderhoudt en tot stand brengt.' },
  { nr: 3,  arabisch: 'الرَّحِيمُ',         transliteratie: 'Ar-Raḥīm',            betekenis: 'De Genadevolle',                             uitleg: 'Zijn barmhartigheid op de Dag des Oordeels is speciaal voor de gelovigen. Ar-Raḥīm duidt op de bijzondere, voortdurende genade die Allah de gelovigen schenkt, zowel in dit leven als in het Hiernamaals.' },
  { nr: 4,  arabisch: 'الْمَلِكُ',          transliteratie: 'Al-Malik',             betekenis: 'De Koning',                                  uitleg: 'Allah is de absolute Heerser over al wat bestaat — zowel in dit leven als in het Hiernamaals. Zijn koningschap behoeft geen troonsopvolging en kent geen einde. Alle andere macht is aan Hem ontleend.' },
  { nr: 5,  arabisch: 'الْقُدُّوسُ',        transliteratie: 'Al-Quddūs',           betekenis: 'De Heilige',                                 uitleg: 'Allah is vrij van elke onvolmaaktheid, gebrekkigheid en tekort. Hij is verheven boven alles wat niet bij Zijn majesteit past. De engelen roepen deze naam uit bij hun tasbīḥ (lofprijzing).' },
  { nr: 6,  arabisch: 'السَّلَامُ',         transliteratie: 'As-Salām',            betekenis: 'De Schenker van Vrede',                      uitleg: 'Allah is vrij van elk tekort en elke smet. Hij is de bron van alle werkelijke vrede — de vrede van het hart, de vrede in de gemeenschap, en de vrede van het Paradijs dat door Hem wordt geschonken.' },
  { nr: 7,  arabisch: 'الْمُؤْمِنُ',        transliteratie: 'Al-Mu\'min',          betekenis: 'De Gever van Veiligheid',                    uitleg: 'Allah schenkt veiligheid aan Zijn dienaren en bevestigt de waarheid van de profeten. Op de Dag des Oordeels zal Hij de gelovigen veiligheid geven voor de vrees die anderen overmant.' },
  { nr: 8,  arabisch: 'الْمُهَيْمِنُ',      transliteratie: 'Al-Muhaymin',         betekenis: 'De Waakzame Bewaker',                        uitleg: 'Allah is de Bewaker en Beschermer over al Zijn schepselen. Hij ziet elke daad, kent elk geheim en beschermt degenen die op Hem vertrouwen. Niets ontsnapt aan Zijn waking.' },
  { nr: 9,  arabisch: 'الْعَزِيزُ',         transliteratie: 'Al-\'Azīz',           betekenis: 'De Almachtige',                              uitleg: 'Allah is onoverwinnelijk en onomstreden. Zijn macht overtreft alles en er is niets dat Hem kan weerstaan of overweldigen. Al-\'Azīz betekent ook: de Zeldzame en Waardevolle — er bestaat niemand die Zijn gelijke is.' },
  { nr: 10, arabisch: 'الْجَبَّارُ',        transliteratie: 'Al-Jabbār',           betekenis: 'De Onoverwinnelijke',                        uitleg: 'Allah overtreft in kracht en heerlijkheid alles wat bestaat. Jabbār duidt ook op Degene die de gebroken harten heelt en de breuk van het universum herstelt. Hij dwingt niets ten onrechte af.' },
  { nr: 11, arabisch: 'الْمُتَكَبِّرُ',     transliteratie: 'Al-Mutakabbir',       betekenis: 'De Verhevene — de Bezitter van Grootheid',   uitleg: 'Allah is de Bezitter van alle grootheid en verhevenheid. Bij Hem heeft trots zijn rechtmatige plaats — want er is werkelijk niemand die met Hem gelijk is. Voor een mens is trots een gebrek; voor Allah is het een bevestiging van de werkelijkheid.' },
  { nr: 12, arabisch: 'الْخَالِقُ',         transliteratie: 'Al-Khāliq',           betekenis: 'De Schepper',                                uitleg: 'Allah schept iets uit het niets, zonder voorbeeld of model te volgen. Geen enkel wezen bezit deze eigenschap op werkelijke wijze. Al-Khāliq duidt op het scheppen vanuit het absolute niets.' },
  { nr: 13, arabisch: 'الْبَارِئُ',         transliteratie: 'Al-Bāri\'',           betekenis: 'De Maker',                                   uitleg: 'Allah onderscheidt en ordent Zijn schepselen, en geeft elk wezen zijn eigen unieke kenmerken. Al-Bāri\' benadrukt het vormen en onderscheiden van schepselen van elkaar.' },
  { nr: 14, arabisch: 'الْمُصَوِّرُ',       transliteratie: 'Al-Muṣawwir',         betekenis: 'De Vormer van Gestalten',                    uitleg: 'Allah geeft elk schepsel zijn bijzondere vorm en gedaante. In de baarmoeder vormt Hij het kind naar Zijn wil — de Koran noemt dit uitdrukkelijk. Geen twee schepselen zijn door Hem hetzelfde gemaakt.' },
  { nr: 15, arabisch: 'الْغَفَّارُ',        transliteratie: 'Al-Ghaffār',          betekenis: 'De Alvergevende',                            uitleg: 'Allah vergeeft keer op keer, telkens als Zijn dienaren zich oprecht berouwen. Al-Ghaffār benadrukt de herhaaldelijkheid van de vergiffenis — ongeacht hoe vaak een zonde wordt begaan met oprecht berouw.' },
  { nr: 16, arabisch: 'الْقَهَّارُ',        transliteratie: 'Al-Qahhār',           betekenis: 'De Overweldigende',                          uitleg: 'Allah heeft volledige heerschappij over al Zijn schepselen. Alles is aan Zijn macht onderworpen. Op de Dag des Oordeels zal Hij vragen: "Van wie is de macht heden?" en Zelf antwoorden: "Van Allah, de Enige, de Overweldigende."' },
  { nr: 17, arabisch: 'الْوَهَّابُ',        transliteratie: 'Al-Wahhāb',           betekenis: 'De Gulle Gever',                             uitleg: 'Allah geeft zonder onderbreking en zonder vergoeding te verwachten. Zijn gaven kennen geen uitputting en zijn niet afhankelijk van de verdienste van de ontvanger. Al-Wahhāb duidt op pure, onverdeelde vrijgevigheid.' },
  { nr: 18, arabisch: 'الرَّزَّاقُ',        transliteratie: 'Ar-Razzāq',           betekenis: 'De Voorziener',                              uitleg: 'Allah voorziet elk schepsel — mens, dier, plant — in al zijn behoeften. Het levensonderhoud (rizq) omvat niet alleen voedsel maar alles wat een wezen nodig heeft om te leven en te gedijen.' },
  { nr: 19, arabisch: 'الْفَتَّاحُ',        transliteratie: 'Al-Fattāḥ',           betekenis: 'De Opener',                                  uitleg: 'Allah opent de deuren van barmhartigheid, voorziening en uitkomst voor wie het vraagt. Hij opent ook de harten voor kennis en leiding. Elke uitweg en elke mogelijkheid in het leven komt van Hem.' },
  { nr: 20, arabisch: 'الْعَلِيمُ',         transliteratie: 'Al-\'Alīm',           betekenis: 'De Alwetende',                               uitleg: 'Allahs kennis omvat alles — het verleden, het heden en de toekomst, het zichtbare en het verborgene, de gedachten van harten en de beweging van bladeren. Zijn kennis heeft geen begin, geen einde en kent geen lacunes.' },
  { nr: 21, arabisch: 'الْقَابِضُ',         transliteratie: 'Al-Qābiḍ',            betekenis: 'De Bedwinger',                               uitleg: 'Allah onthoudt en beperkt naar Zijn wijsheid. Hij kan de rizq beperken als een beproeving, de ziel wegnemen bij de dood, of harten samentrekken als les. Al-Qābiḍ en Al-Bāsiṭ worden altijd samen in evenwicht gezien.' },
  { nr: 22, arabisch: 'الْبَاسِطُ',         transliteratie: 'Al-Bāsiṭ',            betekenis: 'De Uitbreider',                              uitleg: 'Allah verbreedt de rizq, verlicht het hart en opent de borst voor wie Hij wil. Hij schenkt overvloed wanneer dat in Zijn wijsheid goed is. Al-Bāsiṭ werkt altijd samen met Al-Qābiḍ — Allah geeft en neemt in volmaakte wijsheid.' },
  { nr: 23, arabisch: 'الْخَافِضُ',         transliteratie: 'Al-Khāfiḍ',           betekenis: 'De Vernederende',                            uitleg: 'Allah verlaagt de trotse tyrannen en bagatelliseert de vijanden van de waarheid. Wat Hij vernedert is vernederd; er is geen kracht die dit kan keren. Dit is altijd in Zijn absolute rechtvaardigheid.' },
  { nr: 24, arabisch: 'الرَّافِعُ',         transliteratie: 'Ar-Rāfi\'',           betekenis: 'De Verheffende',                             uitleg: 'Allah verheft de gelovigen in rang en aanzien — in dit leven of in het Hiernamaals. Hij verheft de rechtvaardigen, de martelaren, de gelovigen die standvast zijn. De echte verhoging is die welke Allah geeft.' },
  { nr: 25, arabisch: 'الْمُعِزُّ',         transliteratie: 'Al-Mu\'izz',          betekenis: 'De Vereerder',                               uitleg: 'Allah schenkt eer en aanzien aan wie Hij wil. Ware eer is niet van mensen maar van Allah. Wie eer zoekt zonder Allah hoeft het nergens anders te zoeken — eer behoort Allah geheel toe.' },
  { nr: 26, arabisch: 'الْمُذِلُّ',         transliteratie: 'Al-Mudhill',           betekenis: 'De Vernederaar',                             uitleg: 'Allah vernedert wie Hij wil, naar Zijn wijsheid en rechtvaardigheid. Wie trots op Allah loochent of de gelovigen onderdrukt, wordt door Hem vernederd. Dit benadrukt dat echte macht uitsluitend bij Allah berust.' },
  { nr: 27, arabisch: 'السَّمِيعُ',         transliteratie: 'As-Samī\'',           betekenis: 'De Alhorende',                               uitleg: 'Allah hoort elke smeekbede, elk gefluister, elk geheim gesprek en elke kreun van verdriet. Zijn gehoor heeft geen orgaan en kent geen afstand. Hij hoort de du\'ā\' die in de diepte van het hart wordt gesproken.' },
  { nr: 28, arabisch: 'الْبَصِيرُ',         transliteratie: 'Al-Baṣīr',            betekenis: 'De Alziende',                                uitleg: 'Allah ziet alles — wat openbaar is en wat verborgen is. Geen duisternis, geen diepte en geen innerlijk geheim onttrekkt zich aan Zijn zicht. Hij ziet de mieren die 's nachts over de zwarte rots lopen.' },
  { nr: 29, arabisch: 'الْحَكَمُ',          transliteratie: 'Al-Ḥakam',            betekenis: 'De Rechter',                                 uitleg: 'Allah is de uiteindelijke Rechter over alle zaken. Zijn oordeel is onherroepelijk en volkomen rechtvaardig. In dit leven worden oordelen soms onrechtvaardig uitgesproken — maar bij Allah is het oordeel absoluut zuiver.' },
  { nr: 30, arabisch: 'الْعَدْلُ',          transliteratie: 'Al-\'Adl',            betekenis: 'De Rechtvaardige',                           uitleg: 'Allah handelt in alles met absolute rechtvaardigheid. Er is bij Hem geen willekeur, geen vriendjespolitiek en geen onrecht. Al-\'Adl benadrukt dat Zijn rechtvaardigheid een inherente eigenschap is — niet iets dat Hij bereikt maar iets dat Hij is.' },
  { nr: 31, arabisch: 'اللَّطِيفُ',         transliteratie: 'Al-Laṭīf',            betekenis: 'De Subtiele, de Vriendelijke',               uitleg: 'Allah kent de fijnste details van alle dingen en handelt met uiterste zachtheid en zachtzinnigheid. Hij bereikt Zijn doelen op manieren die wij niet zien of verwachten — subtiel en vol medeleven.' },
  { nr: 32, arabisch: 'الْخَبِيرُ',         transliteratie: 'Al-Khabīr',           betekenis: 'De Albewauste',                              uitleg: 'Allah heeft volledige, diepgaande kennis van de innerlijke werkelijkheid van alle dingen. Al-Khabīr gaat verder dan weten — het duidt op het doordringen tot de kern van elk ding, zichtbaar en onzichtbaar.' },
  { nr: 33, arabisch: 'الْحَلِيمُ',         transliteratie: 'Al-Ḥalīm',            betekenis: 'De Lankmoedige',                             uitleg: 'Allah bestraft niet onmiddellijk ondanks Zijn vermogen daartoe. Zijn lankmoedigheid geeft de zondaar ruimte voor berouw. Dit is geen onvermogen maar een bewuste keuze uit barmhartigheid en wijsheid.' },
  { nr: 34, arabisch: 'الْعَظِيمُ',         transliteratie: 'Al-\'Aẓīm',           betekenis: 'De Onmetelijk Grote',                        uitleg: 'Allahs grootheid overtreft elk begrip. Zijn Troon (\'Arsh) omvat de hemelen en aarde, en toch is Hij nog groter dan Zijn Troon. Al-\'Aẓīm duidt op een grootheid die alle menselijk voorstelling te boven gaat.' },
  { nr: 35, arabisch: 'الْغَفُورُ',         transliteratie: 'Al-Ghafūr',           betekenis: 'De Vergevende',                              uitleg: 'Allah verbergt en vergeeft de zonden van de berouwvolle dienaar. Al-Ghafūr benadrukt het bedekken en wissen van zonden — als door de vergiffenis de zonde volledig ongedaan wordt gemaakt.' },
  { nr: 36, arabisch: 'الشَّكُورُ',         transliteratie: 'Ash-Shakūr',          betekenis: 'De Dankbare, de Erkennende',                 uitleg: 'Allah erkent en beloont zelfs het kleinste goede dat een dienaar doet. Een klein gebaar van oprechtheid wordt door Hem veelvuldig vermenigvuldigd. Dit is Zijn vrijgevigheid tegenover de dienaren.' },
  { nr: 37, arabisch: 'الْعَلِيُّ',         transliteratie: 'Al-\'Alī',            betekenis: 'De Verhevene',                               uitleg: 'Allah is verheven boven alle schepselen in Zijn wezen, kenmerken en daden. Zijn verhevenheid is absoluut — niet relatief of tijdelijk. Al-\'Alī en Al-Kabīr worden in de Koran naast elkaar gebruikt (2:255).' },
  { nr: 38, arabisch: 'الْكَبِيرُ',         transliteratie: 'Al-Kabīr',            betekenis: 'De Grote',                                   uitleg: 'Allahs grootheid omvat alles. Hij is groter dan enig schepsel kan bevatten of beschrijven. Al-Kabīr benadrukt dat alle andere grootheid in vergelijking tot de Zijne onbeduidend is.' },
  { nr: 39, arabisch: 'الْحَفِيظُ',         transliteratie: 'Al-Ḥafīẓ',            betekenis: 'De Behoeder',                                uitleg: 'Allah bewaart en beschermt al Zijn schepselen. Hij bewaart de Koran voor vervalsinag, bewaart de goede daden van de dienaren en beschermt wie Hij wil tegen kwaad en rampen.' },
  { nr: 40, arabisch: 'الْمُقِيتُ',         transliteratie: 'Al-Muqīt',            betekenis: 'De Onderhouder',                             uitleg: 'Allah onderhoudt en voedt al Zijn schepselen en heeft volledige kennis van en macht over hun behoeften. Al-Muqīt omvat zowel het lichamelijke als het geestelijke onderhoud.' },
  { nr: 41, arabisch: 'الْحَسِيبُ',         transliteratie: 'Al-Ḥasīb',            betekenis: 'De Berekenende, de Voldoende',               uitleg: 'Allah neemt volledige rekening van elk goed en kwaad. Op de Dag des Oordeels zal Hij de perfecte afrekening uitvoeren. Al-Ḥasīb betekent ook: Degene Die voor Zijn dienaren voldoende is — wie op Allah vertrouwt, heeft genoeg.' },
  { nr: 42, arabisch: 'الْجَلِيلُ',         transliteratie: 'Al-Jalīl',            betekenis: 'De Majesteitelijke',                         uitleg: 'Allahs majesteit is onovertroffen. Al-Jalīl verwijst naar de majesteit die voortkomt uit Zijn onbegrensde macht, kennis en verhevenheid. Wie Zijn majesteit werkelijk inziet, valt in diep ontzag neer.' },
  { nr: 43, arabisch: 'الْكَرِيمُ',         transliteratie: 'Al-Karīm',            betekenis: 'De Edele, de Vrijgevige',                    uitleg: 'Allah is edel in Zijn vergiffenis en vrijgevig in Zijn gaven. Al-Karīm geeft niet alleen wanneer gevraagd — Hij geeft ook uit Zichzelf, meer dan men verwacht of verdient.' },
  { nr: 44, arabisch: 'الرَّقِيبُ',         transliteratie: 'Ar-Raqīb',            betekenis: 'De Waakzame',                                uitleg: 'Allah is altijd waakzaam over elk schepsel. Geen gedachte, geen beweging en geen verborgen intentie ontgaat Zijn waakzaamheid. De dienaar die dit beseft leeft in constante bewustheid (murāqaba).' },
  { nr: 45, arabisch: 'الْمُجِيبُ',         transliteratie: 'Al-Mujīb',            betekenis: 'De Verhorer van Smeekbeden',                 uitleg: 'Allah verhoort de du\'ā\' van wie Hem aanroept. De Koran belooft: "Roep Mij aan, Ik zal u verhoren." (40:60). Al-Mujīb duidt op onmiddellijke ontvangst — ook al ziet de dienaar het antwoord pas later.' },
  { nr: 46, arabisch: 'الْوَاسِعُ',         transliteratie: 'Al-Wāsi\'',           betekenis: 'De Alomvattende',                            uitleg: 'Allahs barmhartigheid, kennis en voorziening omvatten alle schepselen. Er is geen beperking aan Zijn vermogen of capaciteit. Zijn vrijgevigheid wordt niet minder door wat gegeven wordt.' },
  { nr: 47, arabisch: 'الْحَكِيمُ',         transliteratie: 'Al-Ḥakīm',            betekenis: 'De Wijze',                                   uitleg: 'Allah plaatst alles op de juiste plek en op het juiste moment. Zijn wijsheid omvat het volledig begrijpen van oorzaken en gevolgen. Wat wij als ramp of onrechtvaardigheid zien, is in Zijn wijsheid doordacht.' },
  { nr: 48, arabisch: 'الْوَدُودُ',         transliteratie: 'Al-Wadūd',            betekenis: 'De Liefderijke',                             uitleg: 'Allah houdt van Zijn dienaren en wenst hen het goede toe. Al-Wadūd duidt op een warme, oprechte liefde — niet een koele afstand. Hij houdt van de gelovigen en zij mogen van Hem houden.' },
  { nr: 49, arabisch: 'الْمَجِيدُ',         transliteratie: 'Al-Majīd',            betekenis: 'De Roemrijke',                               uitleg: 'Allah is verheven in lof en ruim in vrijgevigheid. Al-Majīd combineert majesteit en nobele vrijgevigheid. De lof die aan Allah toekomt is oneindig uitgebreid en overstijgt elk menselijk begrip.' },
  { nr: 50, arabisch: 'الْبَاعِثُ',         transliteratie: 'Al-Bā\'ith',          betekenis: 'De Opwekker',                                uitleg: 'Allah wekt de doden op op de Dag des Oordeels. Al-Bā\'ith verwijst naar de opstanding die de basis vormt van de islamitische geloofsleer: alle mensen zullen worden opgewekt voor de afrekening.' },
  { nr: 51, arabisch: 'الشَّهِيدُ',         transliteratie: 'Ash-Shahīd',          betekenis: 'De Alwetende Getuige',                       uitleg: 'Allah is getuige van alles, overal en altijd. Hij is aanwezig bij elke daad, elk woord en elke gedachte. Op de Dag des Oordeels zal Allah Zelf getuige zijn over de daden van Zijn schepselen.' },
  { nr: 52, arabisch: 'الْحَقُّ',           transliteratie: 'Al-Ḥaqq',             betekenis: 'De Absolute Waarheid',                       uitleg: 'Allah is de enige werkelijke werkelijkheid. Alles wat naast Hem bestaat, heeft zijn bestaan van Hem ontvangen. Al-Ḥaqq duidt op de absolute, zelfstandige werkelijkheid die nooit kan ophouden te bestaan.' },
  { nr: 53, arabisch: 'الْوَكِيلُ',         transliteratie: 'Al-Wakīl',            betekenis: 'De Waarborg, de Betrouwbare',                uitleg: 'Allah is de volmaakte Vertrouweling van wie op Hem steunt. Tawakkul (vertrouwen op Allah) is een van de hoogste islamitische deugden. "Allah is ons voldoende en Hij is de beste Wakīl." (3:173)' },
  { nr: 54, arabisch: 'الْقَوِيُّ',         transliteratie: 'Al-Qawī',             betekenis: 'De Sterke',                                  uitleg: 'Allahs kracht kent geen grenzen en wordt door niets getemperd. Al-Qawī duidt op absolute kracht — niet de relatieve kracht van een sterk schepsel, maar de oerbron van alle kracht in het universum.' },
  { nr: 55, arabisch: 'الْمَتِينُ',         transliteratie: 'Al-Matīn',            betekenis: 'De Standvastige',                            uitleg: 'Allahs kracht is onwrikbaar en Zijn besluiten zijn onomkeerbaar. Al-Matīn duidt op een stevigheid die niet door druk of verstreken tijd afneemt. Zijn beloften en waarschuwingen zijn absoluut.' },
  { nr: 56, arabisch: 'الْوَلِيُّ',         transliteratie: 'Al-Walī',             betekenis: 'De Beschermvriend',                          uitleg: 'Allah is de Walī (vriend en beschermer) van de gelovigen. Hij leidt hen uit de duisternis naar het licht. De gelovige heeft Allah als vriend — en dat is het grootste geschenk dat bestaat.' },
  { nr: 57, arabisch: 'الْحَمِيدُ',         transliteratie: 'Al-Ḥamīd',            betekenis: 'De Loffelijke',                              uitleg: 'Alle lof is aan Allah, ongeacht of Zijn schepselen Hem prijzen of niet. Al-Ḥamīd duidt op een intrinsieke loffelijkheid — niet afhankelijk van erkenning door anderen. De hemelen en aarde prijzen Hem voortdurend.' },
  { nr: 58, arabisch: 'الْمُحْصِي',         transliteratie: 'Al-Muḥṣī',            betekenis: 'De Teller van Alles',                        uitleg: 'Allah telt en bewaart elke daad, elk woord en elke gedachte — hoe klein ook. Niets gaat verloren in Zijn telling. De Koran zegt: "En alles hebben Wij in een duidelijk register opgetekend." (36:12)' },
  { nr: 59, arabisch: 'الْمُبْدِئُ',        transliteratie: 'Al-Mubdi\'',          betekenis: 'De Aanvanger van de Schepping',              uitleg: 'Allah begon de schepping vanuit het niets, zonder voorbeeld of hulp. Al-Mubdi\' duidt op de daad van het eerste scheppen — de creatio ex nihilo die alleen Allah toekomt.' },
  { nr: 60, arabisch: 'الْمُعِيدُ',         transliteratie: 'Al-Mu\'īd',           betekenis: 'De Hersteller',                              uitleg: 'Allah herneemt de schepping na haar dood en doet haar opnieuw tot leven komen. Al-Mu\'īd en Al-Mubdi\' werken samen: Hij die begint, zal ook herstellen. Dit bewijst de opstanding.' },
  { nr: 61, arabisch: 'الْمُحْيِي',         transliteratie: 'Al-Muḥyī',            betekenis: 'De Levendmaker',                             uitleg: 'Allah geeft het leven aan alle levende wezens. Hij beademt de ziel in de embryo, wekt de doden op en geeft spiritueel leven aan de harten die Zijn licht ontvangen.' },
  { nr: 62, arabisch: 'الْمُمِيتُ',         transliteratie: 'Al-Mumīt',            betekenis: 'De Doodsmaker',                              uitleg: 'Allah bepaalt het moment van de dood en laat het leven eindigen wanneer de bepaalde tijd is afgelopen. De dood is niet een defeat — het is Allahs beslissing die het begin van de eeuwigheid markeert.' },
  { nr: 63, arabisch: 'الْحَيُّ',           transliteratie: 'Al-Ḥayy',             betekenis: 'De Levende',                                 uitleg: 'Allah leeft met een leven dat geen begin, geen einde en geen behoefte kent. Zijn leven is volkomen zelfstandig en verschilt totaal van het leven van schepselen. "Allāhu lā ilāha illā Huwa l-Ḥayyu l-Qayyūm." (2:255)' },
  { nr: 64, arabisch: 'الْقَيُّومُ',        transliteratie: 'Al-Qayyūm',           betekenis: 'De Zelfstandige Onderhouder',                uitleg: 'Allah heeft Zichzelf in stand en houdt al het andere in stand. Zonder Zijn voortdurende instandhouding zou het universum onmiddellijk ophouden te bestaan. Al-Ḥayy en Al-Qayyūm zijn de twee meest centrale namen in het Koran-vers "Āyat al-Kursī." (2:255)' },
  { nr: 65, arabisch: 'الْوَاجِدُ',         transliteratie: 'Al-Wājid',            betekenis: 'De Alles-Vindende',                          uitleg: 'Allah vindt alles wat Hij wil — er is niets buiten Zijn bereik. Wat Hij zoekt, vindt Hij; wat Hij wil, bereikt Hij. Zijn wil wordt nooit door een gebrek aan middelen belemmerd.' },
  { nr: 66, arabisch: 'الْمَاجِدُ',         transliteratie: 'Al-Mājid',            betekenis: 'De Edele, de Roemrijke',                     uitleg: 'Allah is ruim in vrijgevigheid en verheven in eer. Al-Mājid combineert generositeit met majesteit — Hij geeft overvloedig en is tegelijk oneindig verheven. Dit is de naam die in de taṣliya (ṣalawāt) voorkomt.' },
  { nr: 67, arabisch: 'الْوَاحِدُ',         transliteratie: 'Al-Wāḥid',            betekenis: 'De Enige',                                   uitleg: 'Allah is Één in Zijn wezen, kenmerken en daden. Er is geen tweede naast Hem, geen partner en geen tegenhanger. Al-Wāḥid duidt op numerieke eenheid — er bestaat slechts Één God.' },
  { nr: 68, arabisch: 'الْأَحَدُ',          transliteratie: 'Al-Aḥad',             betekenis: 'De Unieke, de Absolute Enige',               uitleg: 'Allah is uniek in absolute zin — er is niets dat ook maar op Hem lijkt. Al-Aḥad gaat verder dan Al-Wāḥid: het duidt op uniciteit die elk vergelijk uitsluit. Dit is de centrale naam in Sūrat al-Ikhlāṣ (112): "Qul Huwa Allāhu Aḥad."' },
  { nr: 69, arabisch: 'الصَّمَدُ',          transliteratie: 'Aṣ-Ṣamad',           betekenis: 'De Eeuwige, de Onafhankelijke',              uitleg: 'Allah heeft niemand nodig en alle schepselen hebben Hem nodig. Aṣ-Ṣamad is de naam die in Sūrat al-Ikhlāṣ staat naast Al-Aḥad. Het duidt op absolute zelfstandigheid — Allah eet niet, drinkt niet en slaapt niet.' },
  { nr: 70, arabisch: 'الْقَادِرُ',         transliteratie: 'Al-Qādir',            betekenis: 'De Machtige',                                uitleg: 'Allah heeft de macht te doen wat Hij wil. Al-Qādir en Al-Muqtadir zijn verwante namen — maar Al-Qādir duidt meer op de aanwezigheid van vermogen en Al-Muqtadir op de daadwerkelijke uitoefening ervan.' },
  { nr: 71, arabisch: 'الْمُقْتَدِرُ',      transliteratie: 'Al-Muqtadir',         betekenis: 'De Alvermogende',                            uitleg: 'Allah voert Zijn wil daadwerkelijk uit — Zijn macht is niet theoretisch maar altijd actief en onbeperkt. Al-Muqtadir duidt op absolute heerschappij en effectieve uitvoering van elke wil.' },
  { nr: 72, arabisch: 'الْمُقَدِّمُ',       transliteratie: 'Al-Muqaddim',         betekenis: 'De Voorzettende',                            uitleg: 'Allah brengt naar voren wat Hij wil — Hij verheft wie Hij wil in rang, tijd of positie. Al-Muqaddim en Al-Mu\'akhkhir werken samen: Allah bepaalt wie vooraan staat en wie achteraan.' },
  { nr: 73, arabisch: 'الْمُؤَخِّرُ',       transliteratie: 'Al-Mu\'akhkhir',      betekenis: 'De Uitsteller',                              uitleg: 'Allah stelt uit wat Hij wil — straf, dood, of positie. Zijn uitstellen is niet nalatigheid maar wijsheid. De zondaar die niet onmiddellijk gestraft wordt, ontvangt een kans op berouw.' },
  { nr: 74, arabisch: 'الْأَوَّلُ',         transliteratie: 'Al-Awwal',            betekenis: 'De Eerste',                                  uitleg: 'Allah is de Eerste zonder begin. Vóór Hem was er niets. De Profeet ﷺ bad: "Jij bent Al-Awwal — er is niets vóór U." Al-Awwal bevestigt dat Allah geen schepper heeft en geen aanvang kent.' },
  { nr: 75, arabisch: 'الْآخِرُ',           transliteratie: 'Al-Ākhir',            betekenis: 'De Laatste',                                 uitleg: 'Allah is de Laatste zonder einde. Na de vernietiging van alles zal Allah blijven. "Alles vergaat behalve Zijn aangezicht." (28:88). Al-Ākhir geeft de dienaar troost: wat vergaat is tijdelijk, wat bij Allah is, is eeuwig.' },
  { nr: 76, arabisch: 'الظَّاهِرُ',         transliteratie: 'Aẓ-Ẓāhir',           betekenis: 'De Openbare',                                uitleg: 'Allah is manifest — Zijn tekenen zijn overal zichtbaar in de schepping. Er is niets boven Hem. Aẓ-Ẓāhir duidt ook op Zijn manifest bewijs: de schepping zelf wijst naar Hem.' },
  { nr: 77, arabisch: 'الْبَاطِنُ',         transliteratie: 'Al-Bāṭin',            betekenis: 'De Verborgene',                              uitleg: 'Allah is nabij en toch niet te omvatten — Zijn wezen is verborgen voor de schepselen. Er is niets dichter bij dan Hij. Al-Ẓāhir en Al-Bāṭin werken samen: manifest in Zijn tekenen, verborgen in Zijn wezen.' },
  { nr: 78, arabisch: 'الْوَالِي',          transliteratie: 'Al-Wālī',             betekenis: 'De Bestuurder',                              uitleg: 'Allah bestuurt het universum en overziet alles wat geschiedt. Al-Wālī duidt op bestuurlijke leiding en bescherming — Hij beheert en regelt al het zijnde met volmaakte orde.' },
  { nr: 79, arabisch: 'الْمُتَعَالِي',      transliteratie: 'Al-Muta\'ālī',        betekenis: 'De Allerhoogste',                            uitleg: 'Allah is verheven in absolute zin — boven elke gedachte, elk concept en elke vergelijking. Al-Muta\'ālī duidt op een verhevenheid die actief boven alles uitstijgt, niet enkel passief aanwezig is.' },
  { nr: 80, arabisch: 'الْبَرُّ',           transliteratie: 'Al-Barr',             betekenis: 'De Goedaardige',                             uitleg: 'Allah is goedertieren en vol zorg voor Zijn dienaren. Al-Barr duidt op een diepe goedheid en welwillendheid — Hij handelt met vriendelijkheid en geeft meer dan men verwacht.' },
  { nr: 81, arabisch: 'التَّوَّابُ',        transliteratie: 'At-Tawwāb',           betekenis: 'De Aanvaardende van Berouw',                 uitleg: 'Allah aanvaardt het berouw van Zijn dienaren keer op keer. At-Tawwāb duidt op de constante bereidheid om tawba te aanvaarden — hoe groot de zonde ook is, de deur van berouw staat open.' },
  { nr: 82, arabisch: 'الْمُنْتَقِمُ',      transliteratie: 'Al-Muntaqim',         betekenis: 'De Wraaknemende',                            uitleg: 'Allah neemt wraak op de tirannen en onderdrukkers die Zijn grenzen overschrijden. Al-Muntaqim is niet een negatieve eigenschap — het is de garant van rechtvaardigheid voor wie onrecht heeft geleden.' },
  { nr: 83, arabisch: 'الْعَفُوُّ',         transliteratie: 'Al-\'Afuww',          betekenis: 'De Vergevensgezinde',                        uitleg: 'Allah wist de zonde volledig uit alsof ze nooit heeft bestaan. Al-\'Afuww gaat verder dan Al-Ghafūr: vergiffenis is het bedekken, \'afw is het volledig uitwissen. De beroemde du\'ā\' van Laylat al-Qadr vraagt om deze eigenschap.' },
  { nr: 84, arabisch: 'الرَّؤُوفُ',         transliteratie: 'Ar-Ra\'ūf',           betekenis: 'De Medelevende',                             uitleg: 'Allahs medeleven gaat verder dan gewone barmhartigheid. Ar-Ra\'ūf duidt op een diepe, intense tederheid en zorg. De Koran beschrijft ook de Profeet ﷺ met deze naam, als geschenk van Allah.' },
  { nr: 85, arabisch: 'مَالِكُ الْمُلْكِ',  transliteratie: 'Mālik ul-Mulk',       betekenis: 'Eigenaar van het Koninkrijk',                uitleg: 'Alle macht en bezit zijn van Allah. Koningen en regeringen houden hun macht slechts als een lening van Hem. Op de Dag des Oordeels zal dit absolute eigenaarschap voor iedereen zichtbaar worden.' },
  { nr: 86, arabisch: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', transliteratie: 'Dhū l-Jalāli wal-Ikrām', betekenis: 'Bezitter van Majesteit en Eer',   uitleg: 'Allah bezit de meest verheven majesteit en schenkt eer aan wie Hij wil. De Profeet ﷺ raadde aan deze naam te herhalen in du\'ā\'. Dit is de meest samengestelde naam en omvat zowel Zijn grootheid als Zijn vrijgevigheid.' },
  { nr: 87, arabisch: 'الْمُقْسِطُ',        transliteratie: 'Al-Muqsiṭ',           betekenis: 'De Rechtvaardige Afweger',                   uitleg: 'Allah verdeelt alles met absolute rechtvaardigheid en evenwicht. Al-Muqsiṭ duidt op het meten en toewijzen met de juiste maatstaf — er is bij Hem geen scheve verdeling.' },
  { nr: 88, arabisch: 'الْجَامِعُ',         transliteratie: 'Al-Jāmi\'',           betekenis: 'De Verzamelaar',                             uitleg: 'Allah verzamelt alles op de Dag des Oordeels — elk wezen, elke daad, elk stofdeeltje. Al-Jāmi\' duidt op de volmaakte verzameling voor de afrekening. Niets gaat verloren in Zijn vergadering.' },
  { nr: 89, arabisch: 'الْغَنِيُّ',         transliteratie: 'Al-Ghanī',            betekenis: 'De Rijke, de Zelfvoorzienende',              uitleg: 'Allah heeft niemand en niets nodig. Alles wat wij doen — gebed, zakāt, goede daden — is voor onszelf, niet voor Hem. "O mensen, jullie zijn de behoeftigen tegenover Allah, en Allah is de Rijke, de Lofwaardige." (35:15)' },
  { nr: 90, arabisch: 'الْمُغْنِي',         transliteratie: 'Al-Mughnī',           betekenis: 'De Verrijker',                               uitleg: 'Allah maakt wie Hij wil rijk — niet noodzakelijk in geld, maar in tevredenheid, kennis, deugd of innere vrede. De echte rijkdom is de rijkdom van de ziel (ghinnā an-nafs), die alleen Allah schenkt.' },
  { nr: 91, arabisch: 'الْمَانِعُ',         transliteratie: 'Al-Māni\'',           betekenis: 'De Weerhouder',                              uitleg: 'Allah weerhoudt wat Hij wil — kwaad, rampen, zegeningen — naar Zijn wijsheid. Wat Hij geeft kan niet worden tegengehouden, en wat Hij weerhoudt kan niet worden verkregen.' },
  { nr: 92, arabisch: 'الضَّارُّ',          transliteratie: 'Aḍ-Ḍārr',            betekenis: 'De Schadebringer',                           uitleg: 'Allah laat schade en beproevingen toe als onderdeel van Zijn besturing. Aḍ-Ḍārr duidt niet op willekeur maar op het feit dat alles — ook tegenspoed — van Hem komt en een doel dient.' },
  { nr: 93, arabisch: 'النَّافِعُ',         transliteratie: 'An-Nāfi\'',           betekenis: 'De Nuttige Gever',                           uitleg: 'Allah brengt voordeel en nut naar wie Hij wil. Aḍ-Ḍārr en An-Nāfi\' worden altijd samen gezien: beide goed en kwaad komen van Allah en dienen een doel in Zijn wijsheid.' },
  { nr: 94, arabisch: 'النُّورُ',           transliteratie: 'An-Nūr',              betekenis: 'Het Licht',                                  uitleg: 'Allah is het Licht van de hemelen en de aarde (24:35). Dit licht is niet het gewone licht van de zon — het is het metafysische licht van bestaan, kennis en leiding. De harten die Allah kent, leven in Zijn licht.' },
  { nr: 95, arabisch: 'الْهَادِي',          transliteratie: 'Al-Hādī',             betekenis: 'De Gids',                                    uitleg: 'Allah leidt wie Hij wil naar de rechte weg. Leiding (hidāya) is alleen bij Hem — de Profeet ﷺ kon geen leiding geven; hij kon slechts tonen. De meest waardevolle gave is de leiding naar de Islām.' },
  { nr: 96, arabisch: 'الْبَدِيعُ',         transliteratie: 'Al-Badī\'',           betekenis: 'De Originator',                              uitleg: 'Allah schept op een unieke, ongekende manier — zonder model of voorbeeld. Al-Badī\' duidt op het scheppen van iets volkomen nieuws, iets wat nooit eerder bestond en waarvoor geen blauwdruk was.' },
  { nr: 97, arabisch: 'الْبَاقِي',          transliteratie: 'Al-Bāqī',             betekenis: 'De Eeuwigblijvende',                         uitleg: 'Allah blijft na de vernietiging van al het andere. Alles is vergankelijk; alleen Allah is ewig. Dit geeft de gelovige perspectief: hecht je aan het Blijvende (Allah), niet aan het vergankelijke (dunya).' },
  { nr: 98, arabisch: 'الْوَارِثُ',         transliteratie: 'Al-Wārith',           betekenis: 'De Erfgenaam',                               uitleg: 'Allah erft alles na de dood van al Zijn schepselen. Aan het einde van tijden is er niemand meer die bezit — alleen Allah bezit alles. Dit herinnert ons: we zijn slechts tijdelijke beheerders.' },
  { nr: 99, arabisch: 'الصَّبُورُ',         transliteratie: 'Aṣ-Ṣabūr',           betekenis: 'De Geduldige',                               uitleg: 'Allah haast Zich niet met Zijn straf ondanks Zijn vermogen daartoe. Zijn geduld geeft de mensheid ruimte voor berouw en verbetering. Aṣ-Ṣabūr is de afsluiting van de 99 namen — een herinnering dat Allahs lankmoedigheid een gunst is, geen zwakte.' },
];

/* ──────────────────────────────────────────────────────────
   STATE
   ────────────────────────────────────────────────────────── */
const STORAGE_FAV    = '99namen_favorieten';
const STORAGE_GEZIEN = '99namen_gezien';

let favorieten = new Set(JSON.parse(localStorage.getItem(STORAGE_FAV)    || '[]'));
let gezien      = new Set(JSON.parse(localStorage.getItem(STORAGE_GEZIEN) || '[]'));
let zoekTerm    = '';
let actieveFilter = 'alle'; // 'alle' | 'favorieten'
let huidigModalNr = null;

/* ──────────────────────────────────────────────────────────
   DOM REFERENTIES
   ────────────────────────────────────────────────────────── */
const gridEl          = document.getElementById('namenGrid');
const zoekInput       = document.getElementById('zoekInput');
const filterTabs      = document.querySelectorAll('.filter-tab');
const statGezien      = document.getElementById('statGezien');
const statFav         = document.getElementById('statFav');
const resultatenInfo  = document.getElementById('resultatenInfo');
const modalOverlay    = document.getElementById('modalOverlay');
const modalNr         = document.getElementById('modalNr');
const modalArabisch   = document.getElementById('modalArabisch');
const modalTranslit   = document.getElementById('modalTranslit');
const modalBetekenis  = document.getElementById('modalBetekenis');
const modalUitleg     = document.getElementById('modalUitleg');
const modalFavBtn     = document.getElementById('modalFavBtn');
const modalVorige     = document.getElementById('modalVorige');
const modalVolgende   = document.getElementById('modalVolgende');
const toTopBtn        = document.getElementById('toTopBtn');

/* ──────────────────────────────────────────────────────────
   OPSLAAN
   ────────────────────────────────────────────────────────── */
function slaFavorietenOp() {
  localStorage.setItem(STORAGE_FAV, JSON.stringify([...favorieten]));
}
function slaGezienOp() {
  localStorage.setItem(STORAGE_GEZIEN, JSON.stringify([...gezien]));
}

/* ──────────────────────────────────────────────────────────
   STATS BIJWERKEN
   ────────────────────────────────────────────────────────── */
function updateStats() {
  statGezien.textContent = gezien.size;
  statFav.textContent    = favorieten.size;
}

/* ──────────────────────────────────────────────────────────
   GEFILTERDE LIJST
   ────────────────────────────────────────────────────────── */
function gefilterdeLijst() {
  let lijst = NAMEN;

  if (actieveFilter === 'favorieten') {
    lijst = lijst.filter(n => favorieten.has(n.nr));
  }

  if (zoekTerm.trim()) {
    const q = zoekTerm.toLowerCase().trim();
    lijst = lijst.filter(n =>
      n.arabisch.includes(zoekTerm.trim()) ||
      n.transliteratie.toLowerCase().includes(q) ||
      n.betekenis.toLowerCase().includes(q) ||
      String(n.nr).includes(q)
    );
  }

  return lijst;
}

/* ──────────────────────────────────────────────────────────
   RENDER GRID
   ────────────────────────────────────────────────────────── */
function renderGrid() {
  const lijst = gefilterdeLijst();
  gridEl.innerHTML = '';

  resultatenInfo.textContent = zoekTerm || actieveFilter === 'favorieten'
    ? `${lijst.length} naam${lijst.length !== 1 ? 'en' : ''} gevonden`
    : '';

  if (lijst.length === 0) {
    gridEl.innerHTML = `
      <div class="leeg-melding">
        <p>${actieveFilter === 'favorieten'
          ? 'Je hebt nog geen favorieten opgeslagen.'
          : `Geen namen gevonden voor <strong>"${zoekTerm}"</strong>.`}</p>
      </div>`;
    return;
  }

  lijst.forEach((naam, i) => {
    const isFav  = favorieten.has(naam.nr);
    const isGezien = gezien.has(naam.nr);
    const kaart = document.createElement('article');
    kaart.className = 'naam-kaart';
    kaart.setAttribute('role', 'button');
    kaart.setAttribute('tabindex', '0');
    kaart.setAttribute('aria-label', `Naam ${naam.nr}: ${naam.transliteratie} — ${naam.betekenis}`);
    kaart.style.animationDelay = `${Math.min(i * 0.025, 0.3)}s`;
    kaart.innerHTML = `
      <span class="kaart-nummmer">${String(naam.nr).padStart(2,'0')}</span>
      <p class="kaart-arabisch" dir="rtl" lang="ar">${naam.arabisch}</p>
      <div class="kaart-ondertitels">
        <span class="kaart-translit">${naam.transliteratie}</span>
        <span class="kaart-betekenis">${naam.betekenis}</span>
      </div>
      <button class="kaart-fav-btn ${isFav ? 'actief' : ''}"
              aria-label="${isFav ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten'}"
              title="${isFav ? 'Verwijder favoriet' : 'Favoriet'}"
              data-nr="${naam.nr}">
        ${isFav ? '★' : '☆'}
      </button>
      ${isGezien ? '<span class="kaart-bekeken-badge" aria-hidden="true">✓ gezien</span>' : ''}
    `;

    kaart.addEventListener('click', (e) => {
      if (e.target.classList.contains('kaart-fav-btn')) return;
      openModal(naam.nr);
    });
    kaart.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(naam.nr);
      }
    });

    const favBtn = kaart.querySelector('.kaart-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavoriet(naam.nr, favBtn);
    });

    gridEl.appendChild(kaart);
  });
}

/* ──────────────────────────────────────────────────────────
   FAVORIET TOGGLE
   ────────────────────────────────────────────────────────── */
function toggleFavoriet(nr, btn) {
  if (favorieten.has(nr)) {
    favorieten.delete(nr);
    if (btn) { btn.textContent = '☆'; btn.classList.remove('actief'); btn.setAttribute('aria-label','Voeg toe aan favorieten'); }
    if (modalFavBtn && huidigModalNr === nr) updateModalFavBtn();
  } else {
    favorieten.add(nr);
    if (btn) { btn.textContent = '★'; btn.classList.add('actief'); btn.setAttribute('aria-label','Verwijder uit favorieten'); }
    if (modalFavBtn && huidigModalNr === nr) updateModalFavBtn();
    // GoatCounter
    const naam = NAMEN.find(n => n.nr === nr);
    if (naam) gc('99-namen/gefavoriet/' + naam.transliteratie.replace(/[^a-zA-Z]/g,''));
  }
  slaFavorietenOp();
  updateStats();
  if (actieveFilter === 'favorieten') renderGrid();
}

function updateModalFavBtn() {
  if (!modalFavBtn || !huidigModalNr) return;
  const isFav = favorieten.has(huidigModalNr);
  modalFavBtn.classList.toggle('actief', isFav);
  modalFavBtn.innerHTML = isFav ? '★ Verwijder favoriet' : '☆ Voeg toe aan favorieten';
}

/* ──────────────────────────────────────────────────────────
   MODAL
   ────────────────────────────────────────────────────────── */
function openModal(nr) {
  const naam = NAMEN.find(n => n.nr === nr);
  if (!naam) return;
  huidigModalNr = nr;

  modalNr.textContent         = `Naam ${String(nr).padStart(2,'0')} van 99`;
  modalArabisch.textContent   = naam.arabisch;
  modalTranslit.textContent   = naam.transliteratie;
  modalBetekenis.textContent  = naam.betekenis;
  modalUitleg.textContent     = naam.uitleg;
  updateModalFavBtn();

  modalVorige.disabled   = nr <= 1;
  modalVolgende.disabled = nr >= 99;

  modalOverlay.classList.add('zichtbaar');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Markeer als gezien
  if (!gezien.has(nr)) {
    gezien.add(nr);
    slaGezienOp();
    updateStats();
    renderGrid(); // badge tonen
    gc('99-namen/naam-bekeken/' + naam.transliteratie.replace(/[^a-zA-Z]/g,''));
  }
}

function sluitModal() {
  modalOverlay.classList.remove('zichtbaar');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  huidigModalNr = null;
}

/* ──────────────────────────────────────────────────────────
   GOATCOUNTER HELPER
   ────────────────────────────────────────────────────────── */
function gc(event) {
  if (typeof window.goatcounter !== 'undefined' && window.goatcounter.count) {
    window.goatcounter.count({ path: event });
  }
}

/* ──────────────────────────────────────────────────────────
   EVENT LISTENERS
   ────────────────────────────────────────────────────────── */
zoekInput.addEventListener('input', () => {
  zoekTerm = zoekInput.value;
  renderGrid();
});

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    actieveFilter = tab.dataset.filter;
    filterTabs.forEach(t => t.classList.toggle('actief', t === tab));
    renderGrid();
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) sluitModal();
});

document.getElementById('modalSluiten').addEventListener('click', sluitModal);

modalFavBtn.addEventListener('click', () => {
  if (huidigModalNr) toggleFavoriet(huidigModalNr, null);
});

modalVorige.addEventListener('click', () => {
  if (huidigModalNr > 1) openModal(huidigModalNr - 1);
});
modalVolgende.addEventListener('click', () => {
  if (huidigModalNr < 99) openModal(huidigModalNr + 1);
});

document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('zichtbaar')) return;
  if (e.key === 'Escape') sluitModal();
  if (e.key === 'ArrowLeft'  && huidigModalNr > 1)  openModal(huidigModalNr - 1);
  if (e.key === 'ArrowRight' && huidigModalNr < 99) openModal(huidigModalNr + 1);
});

toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('scroll', () => {
  toTopBtn.classList.toggle('zichtbaar', window.scrollY > 400);
});

/* ──────────────────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────────────────── */
updateStats();
renderGrid();
gc('99-namen/app-gestart');
