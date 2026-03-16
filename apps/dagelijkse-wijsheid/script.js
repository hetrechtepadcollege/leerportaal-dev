(function () {
    'use strict';

    /* ======================================================
       1. DATA — 365 Daily Wisdoms
       ====================================================== */

var WISDOMS_QURAN = [
    // 1
    {
        type: 'quran',
        ar: 'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ',
        nl: 'In de naam van Allah, de Erbarmer, de Meest Barmhartige.',
        source: 'Soera al-Fātiḥah 1:1',
        context: 'De openingswoorden van de Koran waarmee elke handeling gezegend wordt. Deze formule herinnert de gelovige eraan dat alles begint met Gods naam.',
        scholar: null
    },
    // 2
    {
        type: 'quran',
        ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        nl: 'U alleen aanbidden wij en U alleen vragen wij om hulp.',
        source: 'Soera al-Fātiḥah 1:5',
        context: 'De kern van tawḥīd: alle aanbidding en alle hulp worden uitsluitend bij Allah gezocht. Dit vers vormt het hart van het dagelijkse gebed.',
        scholar: null
    },
    // 3
    {
        type: 'quran',
        ar: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ',
        nl: 'Dit is het Boek waaraan geen twijfel is, een leidraad voor de godvrezenden.',
        source: 'Soera al-Baqarah 2:2',
        context: 'De Koran wordt gepresenteerd als een onbetwijfelbare bron van leiding voor hen die God vrezen en bewust leven.',
        scholar: null
    },
    // 4
    {
        type: 'quran',
        ar: 'وَإِلَـٰهُكُمْ إِلَـٰهٌ وَاحِدٌ لَّا إِلَـٰهَ إِلَّا هُوَ الرَّحْمَـٰنُ الرَّحِيمُ',
        nl: 'En jullie God is één God; er is geen god dan Hij, de Erbarmer, de Meest Barmhartige.',
        source: 'Soera al-Baqarah 2:163',
        context: 'Een krachtige verklaring van de eenheid van God, direct gekoppeld aan Zijn barmhartigheid. Monotheïsme en genade gaan hand in hand.',
        scholar: null
    },
    // 5
    {
        type: 'quran',
        ar: 'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
        nl: 'Er is geen dwang in de godsdienst. De juiste weg is duidelijk onderscheiden van de dwaling.',
        source: 'Soera al-Baqarah 2:256',
        context: 'Een fundamenteel beginsel van geloofsvrijheid in de islam. Geloof moet voortkomen uit innerlijke overtuiging, niet uit dwang.',
        scholar: null
    },
    // 6
    {
        type: 'quran',
        ar: 'اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
        nl: 'Allah — er is geen god dan Hij, de Levende, de Zelfstandige. Sluimer noch slaap overvalt Hem.',
        source: 'Soera al-Baqarah 2:255',
        context: 'Āyat al-Kursī, het Troonvers, beschrijft de absolute soevereiniteit en waakzaamheid van Allah over de hele schepping.',
        scholar: null
    },
    // 7
    {
        type: 'quran',
        ar: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        nl: 'Allah belast geen ziel boven haar vermogen.',
        source: 'Soera al-Baqarah 2:286',
        context: 'Een troostrijke belofte dat elke beproeving draagbaar is. God kent de grenzen van ieder mens en overschrijdt die nooit.',
        scholar: null
    },
    // 8
    {
        type: 'quran',
        ar: 'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا',
        nl: 'Onze Heer, bestraf ons niet als wij vergeten of fouten maken.',
        source: 'Soera al-Baqarah 2:286',
        context: 'Een smeekbede die de menselijke feilbaarheid erkent en Gods vergeving afsmeekt. Een gebed dat de Profeet ﷺ bijzonder aanmoedigde.',
        scholar: null
    },
    // 9
    {
        type: 'quran',
        ar: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',
        nl: 'En verlies de moed niet en wees niet bedroefd, want jullie zullen de hoogsten zijn als jullie gelovigen zijn.',
        source: 'Soera Āl ʿImrān 3:139',
        context: 'Een bemoediging na tegenslag: geloof geeft innerlijke kracht en waardigheid, ongeacht de uiterlijke omstandigheden.',
        scholar: null
    },
    // 10
    {
        type: 'quran',
        ar: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',
        nl: 'En houdt jullie allen vast aan het touw van Allah en weest niet verdeeld.',
        source: 'Soera Āl ʿImrān 3:103',
        context: 'Een oproep tot eenheid en saamhorigheid onder gelovigen. Het touw van Allah symboliseert de Koran en de gemeenschappelijke band van geloof.',
        scholar: null
    },
    // 11
    {
        type: 'quran',
        ar: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ',
        nl: 'Jullie zijn de beste gemeenschap die voor de mensheid is voortgebracht: jullie gebieden het goede en verbieden het verwerpelijke.',
        source: 'Soera Āl ʿImrān 3:110',
        context: 'De moslimgemeenschap draagt een verantwoordelijkheid om het goede te bevorderen en het kwade te bestrijden, als dienst aan de hele mensheid.',
        scholar: null
    },
    // 12
    {
        type: 'quran',
        ar: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',
        nl: 'Voorwaar, in de schepping van de hemelen en de aarde en in de afwisseling van nacht en dag zijn tekenen voor de verstandigen.',
        source: 'Soera Āl ʿImrān 3:190',
        context: 'De natuur is een open boek vol goddelijke tekenen. Nadenken over de schepping is een vorm van aanbidding voor wie verstand bezit.',
        scholar: null
    },
    // 13
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ',
        nl: 'O mensen, vreest jullie Heer die jullie uit één enkele ziel heeft geschapen.',
        source: 'Soera al-Nisāʾ 4:1',
        context: 'Alle mensen delen dezelfde oorsprong, wat de fundamentele gelijkwaardigheid van de mensheid benadrukt.',
        scholar: null
    },
    // 14
    {
        type: 'quran',
        ar: 'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا',
        nl: 'Voorwaar, Allah gebiedt jullie de toevertrouwde zaken aan hun rechtmatige eigenaars terug te geven.',
        source: 'Soera al-Nisāʾ 4:58',
        context: 'Betrouwbaarheid en het nakomen van verantwoordelijkheden zijn fundamentele islamitische waarden die het fundament van een rechtvaardige samenleving vormen.',
        scholar: null
    },
    // 15
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ',
        nl: 'O jullie die geloven, weest standvastig in de rechtvaardigheid als getuigen voor Allah, ook al is het tegen jullie zelf.',
        source: 'Soera al-Nisāʾ 4:135',
        context: 'Rechtvaardigheid staat boven eigenbelang. Een gelovige moet eerlijk getuigen, zelfs als dat nadelig is voor hemzelf.',
        scholar: null
    },
    // 16
    {
        type: 'quran',
        ar: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
        nl: 'Heden heb Ik jullie godsdienst voor jullie vervolmaakt en Mijn gunst aan jullie voltooid, en Ik heb de islam als godsdienst voor jullie gekozen.',
        source: 'Soera al-Māʾidah 5:3',
        context: 'Dit vers werd geopenbaard tijdens de afscheidsbedevaart en markeert de voltooiing van de islamitische boodschap.',
        scholar: null
    },
    // 17
    {
        type: 'quran',
        ar: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
        nl: 'Wie een ziel doodt — niet wegens een andere ziel of verdorvenheid op aarde — het is alsof hij de gehele mensheid heeft gedood.',
        source: 'Soera al-Māʾidah 5:32',
        context: 'De onschendbaarheid van het menselijk leven is een absoluut principe. Elk individu vertegenwoordigt de gehele mensheid.',
        scholar: null
    },
    // 18
    {
        type: 'quran',
        ar: 'وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ',
        nl: 'En bij Hem zijn de sleutels van het onwaarneembare; niemand kent ze behalve Hij.',
        source: 'Soera al-Anʿām 6:59',
        context: 'Gods alwetendheid omvat het verborgene dat voor de schepping ontoegankelijk is. Dit nodigt uit tot nederigheid en vertrouwen.',
        scholar: null
    },
    // 19
    {
        type: 'quran',
        ar: 'وَهُوَ الَّذِي جَعَلَ لَكُمُ النُّجُومَ لِتَهْتَدُوا بِهَا فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ',
        nl: 'En Hij is het die de sterren voor jullie heeft gemaakt, opdat jullie daarmee de weg vinden in de duisternissen van het land en de zee.',
        source: 'Soera al-Anʿām 6:97',
        context: 'De sterren als navigatiemiddel tonen Gods zorg voor de mens. De schepping is doelgericht ingericht ten dienste van de mensheid.',
        scholar: null
    },
    // 20
    {
        type: 'quran',
        ar: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',
        nl: 'Zeg: "Voorwaar, mijn gebed, mijn offer, mijn leven en mijn sterven behoren toe aan Allah, de Heer der werelden."',
        source: 'Soera al-Anʿām 6:162',
        context: 'Totale overgave aan Allah: elk aspect van het leven — van aanbidding tot de dood — wordt gewijd aan de Schepper.',
        scholar: null
    },
    // 21
    {
        type: 'quran',
        ar: 'ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ',
        nl: 'Roept jullie Heer aan in nederigheid en in het verborgene. Voorwaar, Hij houdt niet van de overtreders.',
        source: 'Soera al-Aʿrāf 7:55',
        context: 'Smeekbeden worden het beste in stilte en met oprechte nederigheid verricht, niet als vertoon maar als intieme communicatie met God.',
        scholar: null
    },
    // 22
    {
        type: 'quran',
        ar: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        nl: 'Weet dat door het gedenken van Allah de harten tot rust komen.',
        source: 'Soera al-Raʿd 13:28',
        context: 'Innerlijke vrede wordt gevonden in de herinnering aan God. Dhikr is het medicijn voor onrust en bezorgdheid.',
        scholar: null
    },
    // 23
    {
        type: 'quran',
        ar: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
        nl: 'Voorwaar, Allah verandert de toestand van een volk niet totdat zij veranderen wat in henzelf is.',
        source: 'Soera al-Raʿd 13:11',
        context: 'Verandering begint van binnenuit. God koppelt collectieve vooruitgang aan individuele innerlijke transformatie.',
        scholar: null
    },
    // 24
    {
        type: 'quran',
        ar: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ',
        nl: 'En voorzeker hebben Wij de kinderen van Adam geëerd en hen over land en zee gedragen.',
        source: 'Soera al-Isrāʾ 17:70',
        context: 'De inherente waardigheid van ieder mens is een goddelijk geschenk. Dit vers vormt de basis voor mensenrechten in de islam.',
        scholar: null
    },
    // 25
    {
        type: 'quran',
        ar: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
        nl: 'En jouw Heer heeft bepaald dat jullie niemand aanbidden dan Hem alleen, en dat jullie goed zijn voor de ouders.',
        source: 'Soera al-Isrāʾ 17:23',
        context: 'Direct na het gebod van monotheïsme komt het eerbiedigen van ouders — dit toont het enorme belang van ouderlijke liefde in de islam.',
        scholar: null
    },
    // 26
    {
        type: 'quran',
        ar: 'وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        nl: 'En zeg: "Mijn Heer, ontferm U over hen beiden, zoals zij mij in mijn kindertijd hebben grootgebracht."',
        source: 'Soera al-Isrāʾ 17:24',
        context: 'Een prachtig smeekgebed voor de ouders dat dankbaarheid uitdrukt voor hun zorg en opoffering.',
        scholar: null
    },
    // 27
    {
        type: 'quran',
        ar: 'وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا',
        nl: 'En wandel niet hovaardig op de aarde rond; je kunt de aarde immers niet splijten noch de bergen in hoogte bereiken.',
        source: 'Soera al-Isrāʾ 17:37',
        context: 'Een vermaning tegen arrogantie: de mens is klein vergeleken met de schepping en dient bescheiden te leven.',
        scholar: null
    },
    // 28
    {
        type: 'quran',
        ar: 'الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا',
        nl: 'Bezit en kinderen zijn de versiering van het wereldse leven, maar de blijvende goede werken zijn beter bij jouw Heer in beloning.',
        source: 'Soera al-Kahf 18:46',
        context: 'Materiële zaken zijn tijdelijk; goede daden zijn eeuwig. Dit vers helpt om prioriteiten in het leven recht te zetten.',
        scholar: null
    },
    // 29
    {
        type: 'quran',
        ar: 'قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي',
        nl: 'Zeg: "Als de zee inkt zou zijn voor de woorden van mijn Heer, dan zou de zee opraken voordat de woorden van mijn Heer opraken."',
        source: 'Soera al-Kahf 18:109',
        context: 'Gods kennis en wijsheid zijn oneindig — zelfs alle oceanen als inkt zouden niet volstaan om ze neer te schrijven.',
        scholar: null
    },
    // 30
    {
        type: 'quran',
        ar: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
        nl: 'En Wij hebben jou slechts als genade voor de werelden gezonden.',
        source: 'Soera al-Anbiyāʾ 21:107',
        context: 'De Profeet Muḥammad ﷺ werd gezonden als genade voor de hele schepping, niet alleen voor de moslims.',
        scholar: null
    },
    // 31
    {
        type: 'quran',
        ar: 'لَا إِلَـٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        nl: 'Er is geen god dan U! Verheven bent U! Voorwaar, ik behoorde tot de onrechtplegers.',
        source: 'Soera al-Anbiyāʾ 21:87',
        context: 'De smeekbede van profeet Yūnus vanuit de buik van de vis. Een krachtig gebed van berouw en erkenning van eigen tekortkomingen.',
        scholar: null
    },
    // 32
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
        nl: 'O mensen, Wij hebben jullie geschapen uit een man en een vrouw, en Wij hebben jullie tot volkeren en stammen gemaakt opdat jullie elkaar leren kennen.',
        source: 'Soera al-Ḥujurāt 49:13',
        context: 'Diversiteit is door God gewild als middel tot wederzijdse kennis en begrip. Het enige criterium van voorrang is godsbewustzijn.',
        scholar: null
    },
    // 33
    {
        type: 'quran',
        ar: 'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',
        nl: 'Voorwaar, de edelste van jullie bij Allah is degene die het meest godvrezend is.',
        source: 'Soera al-Ḥujurāt 49:13',
        context: 'Niet afkomst of rijkdom, maar taqwā — godsbewustzijn — bepaalt de waarde van een mens bij Allah.',
        scholar: null
    },
    // 34
    {
        type: 'quran',
        ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        nl: 'Voorwaar, met de moeilijkheid komt de verlichting. Voorwaar, met de moeilijkheid komt de verlichting.',
        source: 'Soera al-Sharḥ 94:5-6',
        context: 'Tweemaal herhaald voor nadruk: na iedere beproeving volgt verlichting. De herhaling versterkt de belofte van hoop.',
        scholar: null
    },
    // 35
    {
        type: 'quran',
        ar: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
        nl: 'En wanneer Mijn dienaren jou over Mij vragen — voorwaar, Ik ben nabij. Ik verhoor de smeekbede van de smekende wanneer hij Mij aanroept.',
        source: 'Soera al-Baqarah 2:186',
        context: 'God is altijd dichtbij en luistert naar elke smeekbede. Er is geen bemiddelaar nodig tussen de mens en zijn Schepper.',
        scholar: null
    },
    // 36
    {
        type: 'quran',
        ar: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        nl: 'En Wij zijn dichter bij hem dan zijn halsslagader.',
        source: 'Soera Qāf 50:16',
        context: 'Gods nabijheid is intenser dan welke menselijke band ook. Hij kent elke gedachte en fluistering van het hart.',
        scholar: null
    },
    // 37
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ',
        nl: 'O jullie die geloven, weest geduldig en spoort elkaar aan tot geduld, en weest standvastig en vreest Allah, opdat jullie zullen slagen.',
        source: 'Soera Āl ʿImrān 3:200',
        context: 'Geduld kent drie niveaus: persoonlijk geduld, anderen aanmoedigen, en standvastig blijven. Samen leiden zij tot succes.',
        scholar: null
    },
    // 38
    {
        type: 'quran',
        ar: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ',
        nl: 'En Wij zullen jullie zeker beproeven met iets van vrees, honger, verlies van bezittingen, levens en vruchten. En verkondig goed nieuws aan de geduldigen.',
        source: 'Soera al-Baqarah 2:155',
        context: 'Beproevingen zijn onvermijdelijk maar zinvol. De ware beloning wacht degenen die geduldig volharden.',
        scholar: null
    },
    // 39
    {
        type: 'quran',
        ar: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
        nl: 'Degenen die, wanneer een ramp hen treft, zeggen: "Voorwaar, wij behoren aan Allah toe en tot Hem keren wij terug."',
        source: 'Soera al-Baqarah 2:156',
        context: 'De uitspraak "innā lillāhi wa innā ilayhi rājiʿūn" is het islamitische antwoord op verlies en verdriet, en brengt berusting en troost.',
        scholar: null
    },
    // 40
    {
        type: 'quran',
        ar: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        nl: 'En wie op Allah vertrouwt, voor hem is Hij voldoende.',
        source: 'Soera al-Ṭalāq 65:3',
        context: 'Tawakkul — oprecht vertrouwen op God — brengt de zekerheid dat Allah voor al je zaken zal zorgen.',
        scholar: null
    },
    // 41
    {
        type: 'quran',
        ar: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
        nl: 'En wie Allah vreest, voor hem zal Hij een uitweg maken. En Hij zal hem voorzien vanwaar hij het niet verwacht.',
        source: 'Soera al-Ṭalāq 65:2-3',
        context: 'Godsbewustzijn opent onverwachte deuren. Allah voorziet degenen die Hem vrezen op manieren die zij niet hadden kunnen voorzien.',
        scholar: null
    },
    // 42
    {
        type: 'quran',
        ar: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',
        nl: 'En voorzeker hebben Wij de Koran gemakkelijk gemaakt ter herinnering; is er dan iemand die er lering uit trekt?',
        source: 'Soera al-Qamar 54:17',
        context: 'De Koran is toegankelijk gemaakt voor iedereen die wil leren. Dit vers is een uitnodiging tot reflectie en studie.',
        scholar: null
    },
    // 43
    {
        type: 'quran',
        ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        nl: 'Lees voor! In de naam van jouw Heer die heeft geschapen.',
        source: 'Soera al-ʿAlaq 96:1',
        context: 'De allereerste openbaring aan de Profeet ﷺ. Kennis en onderwijs staan aan de basis van de islamitische beschaving.',
        scholar: null
    },
    // 44
    {
        type: 'quran',
        ar: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ',
        nl: 'Hij onderwees de mens wat hij niet wist.',
        source: 'Soera al-ʿAlaq 96:5',
        context: 'Alle kennis is uiteindelijk een geschenk van God. Het zoeken naar kennis is een daad van aanbidding.',
        scholar: null
    },
    // 45
    {
        type: 'quran',
        ar: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
        nl: 'En zeg: "Mijn Heer, vermeerder mij in kennis."',
        source: 'Soera Ṭā-Hā 20:114',
        context: 'De Profeet ﷺ werd opgedragen te bidden om meer kennis — een aansporing voor elke moslim om nooit te stoppen met leren.',
        scholar: null
    },
    // 46
    {
        type: 'quran',
        ar: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',
        nl: 'Zeg: "Zijn degenen die weten en degenen die niet weten gelijk?"',
        source: 'Soera al-Zumar 39:9',
        context: 'Kennis verheft de mens. De Koran maakt een duidelijk onderscheid tussen wetenden en onwetenden.',
        scholar: null
    },
    // 47
    {
        type: 'quran',
        ar: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',
        nl: 'Allah verheft degenen onder jullie die geloven, en degenen aan wie kennis is gegeven, in rang.',
        source: 'Soera al-Mujādilah 58:11',
        context: 'Geloof en kennis samen verheffen de mens in rang bij Allah. Kennis zonder geloof of geloof zonder kennis is onvolledig.',
        scholar: null
    },
    // 48
    {
        type: 'quran',
        ar: 'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',
        nl: 'Slechts de geleerden onder Zijn dienaren vrezen Allah werkelijk.',
        source: 'Soera Fāṭir 35:28',
        context: 'Ware kennis leidt tot diep ontzag voor God. De geleerden die de schepping het best kennen, vrezen Allah het meest.',
        scholar: null
    },
    // 49
    {
        type: 'quran',
        ar: 'وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ * إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        nl: 'Bij de tijd! Voorwaar, de mens lijdt verlies. Behalve degenen die geloven, goede werken verrichten, en elkaar aansporen tot de waarheid en tot geduld.',
        source: 'Soera al-ʿAṣr 103:1-3',
        context: 'In slechts drie verzen vat deze soera het hele recept voor succes samen: geloof, goede daden, waarheid en geduld.',
        scholar: null
    },
    // 50
    {
        type: 'quran',
        ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        nl: 'Zeg: "Hij is Allah, de Enige. Allah, de Onafhankelijke. Hij verwekt niet, noch is Hij verwekt. En niets is aan Hem gelijkwaardig."',
        source: 'Soera al-Ikhlāṣ 112:1-4',
        context: 'Deze korte soera bevat de essentie van tawḥīd en beschrijft Gods unieke eenheid en onvergelijkbaarheid.',
        scholar: null
    },
    // 51
    {
        type: 'quran',
        ar: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        nl: 'Zeg: "Ik zoek toevlucht bij de Heer van de dageraad."',
        source: 'Soera al-Falaq 113:1',
        context: 'Het zoeken van bescherming bij Allah tegen alle vormen van kwaad — een dagelijks gebed van vertrouwen en overgave.',
        scholar: null
    },
    // 52
    {
        type: 'quran',
        ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَـٰهِ النَّاسِ',
        nl: 'Zeg: "Ik zoek toevlucht bij de Heer van de mensen, de Koning van de mensen, de God van de mensen."',
        source: 'Soera al-Nās 114:1-3',
        context: 'Allah wordt in drie hoedanigheden aangeroepen: als Heer, Koning en God van de mensen, voor volledige bescherming.',
        scholar: null
    },
    // 53
    {
        type: 'quran',
        ar: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
        nl: 'En tot Zijn tekenen behoort dat Hij voor jullie van jullie eigen soort echtgenoten heeft geschapen, opdat jullie bij hen rust vinden, en Hij heeft liefde en barmhartigheid tussen jullie geplaatst.',
        source: 'Soera al-Rūm 30:21',
        context: 'Het huwelijk is een teken van God: het biedt rust, liefde en barmhartigheid. De relatie tussen echtgenoten weerspiegelt Gods genade.',
        scholar: null
    },
    // 54
    {
        type: 'quran',
        ar: 'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',
        nl: 'En tot Zijn tekenen behoren de schepping van de hemelen en de aarde, en het verschil in jullie talen en kleuren.',
        source: 'Soera al-Rūm 30:22',
        context: 'Taal- en kleurverscheidenheid zijn goddelijke tekenen, geen bronnen van verdeeldheid. Diversiteit is onderdeel van Gods plan.',
        scholar: null
    },
    // 55
    {
        type: 'quran',
        ar: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',
        nl: 'En helpt elkaar in goedheid en godsvrucht, en helpt elkaar niet in zonde en vijandigheid.',
        source: 'Soera al-Māʾidah 5:2',
        context: 'Samenwerking wordt aangemoedigd in het goede en verboden in het kwade. Dit is het fundament van een gezonde gemeenschap.',
        scholar: null
    },
    // 56
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ',
        nl: 'O jullie die geloven, vermijdt veel vermoedens; sommige vermoedens zijn immers zondig.',
        source: 'Soera al-Ḥujurāt 49:12',
        context: 'Achterdocht en ongegrond wantrouwen beschadigen relaties. De islam leert het vermijden van negatieve aannames over anderen.',
        scholar: null
    },
    // 57
    {
        type: 'quran',
        ar: 'وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا',
        nl: 'En bespiedt niet en spreekt niet kwaad over elkaar achter elkaars rug.',
        source: 'Soera al-Ḥujurāt 49:12',
        context: 'Roddel en spionage zijn verboden. Dit vers beschermt de privacy en eer van elk individu in de gemeenschap.',
        scholar: null
    },
    // 58
    {
        type: 'quran',
        ar: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ',
        nl: 'Voorwaar, Allah gebiedt rechtvaardigheid, weldadigheid en het geven aan de verwanten.',
        source: 'Soera al-Naḥl 16:90',
        context: 'Drie fundamentele geboden in één vers: rechtvaardigheid, uitmuntendheid in het goede, en zorg voor familie.',
        scholar: null
    },
    // 59
    {
        type: 'quran',
        ar: 'وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا',
        nl: 'En kom het verbond na; voorwaar, over het verbond zal verantwoording worden gevraagd.',
        source: 'Soera al-Isrāʾ 17:34',
        context: 'Het nakomen van beloften en overeenkomsten is een heilige plicht waarover men op de Dag des Oordeels rekenschap aflegt.',
        scholar: null
    },
    // 60
    {
        type: 'quran',
        ar: 'وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَـٰئِكَ كَانَ عَنْهُ مَسْئُولًا',
        nl: 'En volg niet datgene waarvan je geen kennis hebt; voorwaar, het gehoor, het gezicht en het hart — over al deze zal verantwoording worden gevraagd.',
        source: 'Soera al-Isrāʾ 17:36',
        context: 'Een gebod tot zorgvuldigheid in informatie: verspreid niets zonder verificatie. De zintuigen en het verstand zijn een vertrouwde verantwoordelijkheid.',
        scholar: null
    },
    // 61
    {
        type: 'quran',
        ar: 'وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَلَذِكْرُ اللَّهِ أَكْبَرُ',
        nl: 'En verricht het gebed; voorwaar, het gebed weerhoudt van verdorvenheid en het verwerpelijke. En het gedenken van Allah is het grootst.',
        source: 'Soera al-ʿAnkabūt 29:45',
        context: 'Het gebed is niet slechts een ritueel maar een moreel kompas dat de gelovige weghoudt van het slechte.',
        scholar: null
    },
    // 62
    {
        type: 'quran',
        ar: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتُ النَّعِيمِ',
        nl: 'Voorwaar, degenen die geloven en goede werken verrichten, voor hen zijn de tuinen van gelukzaligheid.',
        source: 'Soera Luqmān 31:8',
        context: 'Geloof gekoppeld aan goede daden leidt tot het paradijs. Het een zonder het ander is onvolledig.',
        scholar: null
    },
    // 63
    {
        type: 'quran',
        ar: 'وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ',
        nl: 'En toen Luqmān tot zijn zoon zei, terwijl hij hem vermaande: "O mijn zoon, ken Allah geen deelgenoten toe; voorwaar, veelgodendom is een groot onrecht."',
        source: 'Soera Luqmān 31:13',
        context: 'De wijze Luqmān leert zijn zoon de allerbelangrijkste les: de eenheid van God. Opvoeding begint met tawḥīd.',
        scholar: null
    },
    // 64
    {
        type: 'quran',
        ar: 'يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ',
        nl: 'O mijn zoon, verricht het gebed, gebied het goede, verbied het verwerpelijke en wees geduldig met wat je overkomt.',
        source: 'Soera Luqmān 31:17',
        context: 'Luqmāns opvoedingsadvies omvat gebed, moreel leiderschap en geduld — een tijdloos recept voor karakter.',
        scholar: null
    },
    // 65
    {
        type: 'quran',
        ar: 'وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ',
        nl: 'En wend je wang niet af van de mensen en wandel niet hovaardig op de aarde rond. Voorwaar, Allah houdt niet van elke verwaande opschepper.',
        source: 'Soera Luqmān 31:18',
        context: 'Bescheidenheid in houding en gedrag is een kernwaarde. Arrogantie in woord en daad is Allah onwelgevallig.',
        scholar: null
    },
    // 66
    {
        type: 'quran',
        ar: 'وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ',
        nl: 'En wees bescheiden in je manier van lopen en demp je stem; voorwaar, het lelijkste geluid is het balken van ezels.',
        source: 'Soera Luqmān 31:19',
        context: 'Luqmān leert zijn zoon fijnzinnigheid: matig je tred en je stem. Luidruchtigheid en opzichtigheid zijn geen deugden.',
        scholar: null
    },
    // 67
    {
        type: 'quran',
        ar: 'إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنسَانُ',
        nl: 'Voorwaar, Wij hebben het toevertrouwde aangeboden aan de hemelen, de aarde en de bergen, maar zij weigerden het te dragen en vreesden het. Maar de mens nam het op zich.',
        source: 'Soera al-Aḥzāb 33:72',
        context: 'De mens draagt een unieke verantwoordelijkheid die zelfs de hemelen en bergen niet aandurfden: het morele rentmeesterschap.',
        scholar: null
    },
    // 68
    {
        type: 'quran',
        ar: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
        nl: 'Voorwaar, Allah en Zijn engelen zenden zegeningen over de Profeet. O jullie die geloven, zendt zegeningen over hem en begroet hem met de vredesgroet.',
        source: 'Soera al-Aḥzāb 33:56',
        context: 'Het zenden van zegeningen over de Profeet ﷺ is een daad die Allah Zelf en de engelen verrichten, en gelovigen worden uitgenodigd hierin deel te nemen.',
        scholar: null
    },
    // 69
    {
        type: 'quran',
        ar: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',
        nl: 'Zeg: "O Mijn dienaren die buitensporig zijn geweest jegens zichzelf, wanhoopt niet aan de barmhartigheid van Allah. Voorwaar, Allah vergeeft alle zonden."',
        source: 'Soera al-Zumar 39:53',
        context: 'Het meest hoopvolle vers van de Koran: hoe groot de zonden ook zijn, Gods barmhartigheid is groter. Wanhoop is ongegrond.',
        scholar: null
    },
    // 70
    {
        type: 'quran',
        ar: 'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ',
        nl: 'En wanneer ik ziek word, is Hij het die mij geneest.',
        source: 'Soera al-Shuʿarāʾ 26:80',
        context: 'De woorden van Ibrāhīm die alle genezing aan Allah toeschrijft. Ziekte en gezondheid zijn in Gods hand.',
        scholar: null
    },
    // 71
    {
        type: 'quran',
        ar: 'رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي * يَفْقَهُوا قَوْلِي',
        nl: 'Mijn Heer, verruim mijn borst, en vergemakkelijk mijn zaak, en los de knoop van mijn tong, opdat zij mijn woord begrijpen.',
        source: 'Soera Ṭā-Hā 20:25-28',
        context: 'Het smeekgebed van Mūsā voordat hij zijn missie begon. Een gebed om moed, gemak en welsprekendheid dat iedereen kan bidden.',
        scholar: null
    },
    // 72
    {
        type: 'quran',
        ar: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ',
        nl: 'Mijn Heer, stel mij in staat dankbaar te zijn voor Uw gunst waarmee U mij en mijn ouders begunstigd hebt, en goede werken te verrichten die U behagen.',
        source: 'Soera al-Naml 27:19',
        context: 'Het gebed van Sulaymān dat dankbaarheid koppelt aan de wens om goede daden te verrichten. Dankbaarheid uit zich in handelen.',
        scholar: null
    },
    // 73
    {
        type: 'quran',
        ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        nl: 'Onze Heer, geef ons in de wereld het goede en in het hiernamaals het goede, en behoed ons voor de bestraffing van het Vuur.',
        source: 'Soera al-Baqarah 2:201',
        context: 'Een alomvattend smeekgebed dat het beste van beide werelden vraagt. De Profeet ﷺ bad dit gebed zeer frequent.',
        scholar: null
    },
    // 74
    {
        type: 'quran',
        ar: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
        nl: 'Onze Heer, schenk ons uit onze echtgenoten en ons nageslacht verkoeling voor onze ogen, en maak ons tot een voorbeeld voor de godvrezenden.',
        source: 'Soera al-Furqān 25:74',
        context: 'Een smeekbede voor een gezegend gezinsleven. Het ultieme geluk wordt gevonden in een vroom en harmonieus gezin.',
        scholar: null
    },
    // 75
    {
        type: 'quran',
        ar: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا إِنَّهُم مُّغْرَقُونَ',
        nl: 'En bouw het schip onder Onze ogen en Onze openbaring, en spreek Mij niet aan over degenen die onrecht plegen; zij zullen verdronken worden.',
        source: 'Soera Hūd 11:37',
        context: 'Allah instrueert Nūḥ om de ark te bouwen onder Zijn hoede. Gods bescherming is er voor wie gehoorzaamt, ook als de wereld spot.',
        scholar: null
    },
    // 76
    {
        type: 'quran',
        ar: 'وَقَالَ ارْكَبُوا فِيهَا بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا إِنَّ رَبِّي لَغَفُورٌ رَّحِيمٌ',
        nl: 'En hij zei: "Stap erin, in de naam van Allah is haar varen en haar aanleggen. Voorwaar, mijn Heer is zeker Vergevingsgezind, Barmhartig."',
        source: 'Soera Hūd 11:41',
        context: 'Nūḥ vertrouwt zijn reis volledig aan Allah toe. Elke reis en onderneming begint met het noemen van Gods naam.',
        scholar: null
    },
    // 77
    {
        type: 'quran',
        ar: 'إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا',
        nl: 'Voorwaar, ik stel mijn vertrouwen in Allah, mijn Heer en jullie Heer. Er is geen schepsel of Hij grijpt het bij zijn voorhoofdslok.',
        source: 'Soera Hūd 11:56',
        context: 'De woorden van Hūd die totaal vertrouwen uitdrukken: Allah heeft controle over elk levend wezen zonder uitzondering.',
        scholar: null
    },
    // 78
    {
        type: 'quran',
        ar: 'لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ',
        nl: 'Voorzeker was er in hun verhalen een les voor de verstandigen.',
        source: 'Soera Yūsuf 12:111',
        context: 'De verhalen van de profeten zijn geen entertainment maar bevatten diepe lessen voor wie nadenkt en reflecteert.',
        scholar: null
    },
    // 79
    {
        type: 'quran',
        ar: 'إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',
        nl: 'Voorwaar, wie godvrezend is en geduldig, Allah laat de beloning van de weldoeners niet verloren gaan.',
        source: 'Soera Yūsuf 12:90',
        context: 'De uitkomst van Yūsufs verhaal: taqwā en geduld worden uiteindelijk altijd beloond, hoe lang de beproeving ook duurt.',
        scholar: null
    },
    // 80
    {
        type: 'quran',
        ar: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ',
        nl: 'En verlies de hoop op de verlichting van Allah niet; voorwaar, alleen het ongelovige volk verliest de hoop op de verlichting van Allah.',
        source: 'Soera Yūsuf 12:87',
        context: 'De woorden van Yaʿqūb aan zijn zonen: hoop op Allah opgeven is een teken van ongeloof. De gelovige verliest nooit de hoop.',
        scholar: null
    },
    // 81
    {
        type: 'quran',
        ar: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
        nl: 'Gedenkt Mij dus, dan gedenk Ik jullie. En weest Mij dankbaar en weest niet ondankbaar jegens Mij.',
        source: 'Soera al-Baqarah 2:152',
        context: 'Een wederkerige belofte: wie God gedenkt, wordt door God gedacht. Dhikr en dankbaarheid zijn de sleutels tot deze relatie.',
        scholar: null
    },
    // 82
    {
        type: 'quran',
        ar: 'وَلَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ',
        nl: 'Als jullie dankbaar zijn, zal Ik jullie zeker vermeerderen. Maar als jullie ondankbaar zijn, voorwaar, Mijn bestraffing is hard.',
        source: 'Soera Ibrāhīm 14:7',
        context: 'Dankbaarheid brengt meer zegeningen, ondankbaarheid brengt verlies. Shukr is een sleutel tot voorspoed.',
        scholar: null
    },
    // 83
    {
        type: 'quran',
        ar: 'وَآتَاكُم مِّن كُلِّ مَا سَأَلْتُمُوهُ وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا',
        nl: 'En Hij gaf jullie van alles wat jullie Hem vroegen. En als jullie de gunsten van Allah zouden tellen, zouden jullie ze niet kunnen opsommen.',
        source: 'Soera Ibrāhīm 14:34',
        context: 'Gods zegeningen zijn ontelbaar. Dit besef wekt diepe dankbaarheid en nederigheid in het hart van de gelovige.',
        scholar: null
    },
    // 84
    {
        type: 'quran',
        ar: 'هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ',
        nl: 'Hij is het die de kalmte heeft neergezonden in de harten van de gelovigen, opdat zij geloof aan hun geloof toevoegen.',
        source: 'Soera al-Fatḥ 48:4',
        context: 'Sakīnah — goddelijke rust — wordt als geschenk in het hart van gelovigen geplaatst om hun geloof te versterken.',
        scholar: null
    },
    // 85
    {
        type: 'quran',
        ar: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
        nl: 'En voorwaar, jij beschikt over een voortreffelijk karakter.',
        source: 'Soera al-Qalam 68:4',
        context: 'Gods getuigenis over het karakter van de Profeet ﷺ. Goed karakter is de hoogste lof die een mens kan ontvangen.',
        scholar: null
    },
    // 86
    {
        type: 'quran',
        ar: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
        nl: 'En jouw Heer zal jou zeker geven, zodat je tevreden zult zijn.',
        source: 'Soera al-Ḍuḥā 93:5',
        context: 'Een persoonlijke belofte van God aan Zijn Profeet, maar ook een troost voor iedere gelovige: het beste komt nog.',
        scholar: null
    },
    // 87
    {
        type: 'quran',
        ar: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ * وَوَجَدَكَ ضَالًّا فَهَدَىٰ * وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ',
        nl: 'Heeft Hij jou niet als wees gevonden en je onderdak gegeven? En heeft Hij jou niet zoekend gevonden en je geleid? En heeft Hij jou niet behoeftig gevonden en je rijk gemaakt?',
        source: 'Soera al-Ḍuḥā 93:6-8',
        context: 'God herinnert de Profeet ﷺ aan Zijn eerdere zorg. Wie Gods hulp in het verleden herkent, vertrouwt op Zijn hulp in de toekomst.',
        scholar: null
    },
    // 88
    {
        type: 'quran',
        ar: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ * وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ',
        nl: 'Wat de wees betreft: onderdruk hem niet. En wat de vragende betreft: wijs hem niet af.',
        source: 'Soera al-Ḍuḥā 93:9-10',
        context: 'Sociale verantwoordelijkheid vloeit voort uit eigen ervaringen van nood. Wie zelf geholpen is, helpt anderen.',
        scholar: null
    },
    // 89
    {
        type: 'quran',
        ar: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ * وَوَضَعْنَا عَنكَ وِزْرَكَ',
        nl: 'Hebben Wij jouw borst niet verruimd? En hebben Wij jou niet van je last verlicht?',
        source: 'Soera al-Sharḥ 94:1-2',
        context: 'God herinnert aan eerdere verlichting als troost bij nieuwe moeilijkheden. Verruiming van het hart is een goddelijk geschenk.',
        scholar: null
    },
    // 90
    {
        type: 'quran',
        ar: 'فَإِذَا فَرَغْتَ فَانصَبْ * وَإِلَىٰ رَبِّكَ فَارْغَبْ',
        nl: 'En wanneer je klaar bent, span je dan in. En richt je verlangen tot jouw Heer.',
        source: 'Soera al-Sharḥ 94:7-8',
        context: 'Na het volbrengen van een taak volgt niet rust maar toewijding aan God. Het leven is een aaneenschakeling van zinvol streven.',
        scholar: null
    },
    // 91
    {
        type: 'quran',
        ar: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ * فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        nl: 'Voorwaar, Wij hebben jou al-Kawthar gegeven. Bid dan tot jouw Heer en offer.',
        source: 'Soera al-Kawthar 108:1-2',
        context: 'Al-Kawthar — het overvloedige goede — is een geschenk aan de Profeet ﷺ. Dankbaarheid wordt uitgedrukt door gebed en offervaardigheid.',
        scholar: null
    },
    // 92
    {
        type: 'quran',
        ar: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        nl: 'Gezegend is Hij in Wiens hand het koninkrijk is, en Hij is tot alles in staat.',
        source: 'Soera al-Mulk 67:1',
        context: 'De opening van Soera al-Mulk benadrukt Gods absolute soevereiniteit en almacht over de gehele schepping.',
        scholar: null
    },
    // 93
    {
        type: 'quran',
        ar: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',
        nl: 'Hij die de dood en het leven heeft geschapen om jullie te beproeven: wie van jullie het beste handelt.',
        source: 'Soera al-Mulk 67:2',
        context: 'Het leven is een test van kwaliteit, niet kwantiteit. Het gaat niet om hoeveel je doet, maar hoe goed je het doet.',
        scholar: null
    },
    // 94
    {
        type: 'quran',
        ar: 'إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍ كَانَ مِزَاجُهَا كَافُورًا',
        nl: 'Voorwaar, de vromen zullen drinken uit een beker waarvan het mengsel kamfer is.',
        source: 'Soera al-Insān 76:5',
        context: 'Een beschrijving van het paradijs: verfijnde beloningen wachten de vromen. De belofte van het hiernamaals motiveert tot goedheid.',
        scholar: null
    },
    // 95
    {
        type: 'quran',
        ar: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا',
        nl: 'En zij geven voedsel, ondanks hun eigen behoefte eraan, aan de arme, de wees en de gevangene.',
        source: 'Soera al-Insān 76:8',
        context: 'Ware vrijgevigheid is geven terwijl je het zelf nodig hebt. Dit vers beschrijft de hoogste vorm van naastenliefde.',
        scholar: null
    },
    // 96
    {
        type: 'quran',
        ar: 'إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا',
        nl: 'Wij voeden jullie slechts omwille van het Aangezicht van Allah; wij verlangen van jullie geen beloning en geen dank.',
        source: 'Soera al-Insān 76:9',
        context: 'Oprecht geven verwacht niets terug — zelfs geen dankbaarheid. De enige motivatie is Gods welbehagen.',
        scholar: null
    },
    // 97
    {
        type: 'quran',
        ar: 'كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ * أَن رَّآهُ اسْتَغْنَىٰ',
        nl: 'Welnee! Voorwaar, de mens is werkelijk opstandig. Omdat hij zichzelf als onafhankelijk beschouwt.',
        source: 'Soera al-ʿAlaq 96:6-7',
        context: 'Rijkdom en macht kunnen tot arrogantie leiden. Wanneer de mens zich onafhankelijk van God waant, vervalt hij in opstandigheid.',
        scholar: null
    },
    // 98
    {
        type: 'quran',
        ar: 'هُوَ اللَّهُ الَّذِي لَا إِلَـٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَـٰنُ الرَّحِيمُ',
        nl: 'Hij is Allah, er is geen god dan Hij, Kenner van het onwaarneembare en het waarneembare. Hij is de Erbarmer, de Meest Barmhartige.',
        source: 'Soera al-Ḥashr 59:22',
        context: 'Het begin van de slotverzen van Soera al-Ḥashr die Gods schoonste namen opsommen en Zijn unieke eigenschappen beschrijven.',
        scholar: null
    },
    // 99
    {
        type: 'quran',
        ar: 'هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ',
        nl: 'Hij is Allah, de Schepper, de Maker, de Vormgever. Aan Hem behoren de schoonste namen.',
        source: 'Soera al-Ḥashr 59:24',
        context: 'Drie namen die Gods scheppingsproces beschrijven: Hij ontwerpt, brengt tot bestaan en geeft vorm. Alle schoonheid komt van Hem.',
        scholar: null
    },
    // 100
    {
        type: 'quran',
        ar: 'يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ',
        nl: 'Alles wat in de hemelen en op de aarde is, verheerlijkt Hem. En Hij is de Almachtige, de Alwijze.',
        source: 'Soera al-Ḥashr 59:24',
        context: 'De gehele schepping — bewust en onbewust — prijst God. De mens is uitgenodigd bewust mee te doen in deze kosmische lofprijzing.',
        scholar: null
    },
    // 101
    {
        type: 'quran',
        ar: 'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ',
        nl: 'En de hemel hebben Wij gebouwd met kracht, en voorwaar, Wij breiden haar uit.',
        source: 'Soera al-Dhāriyāt 51:47',
        context: 'Een verwijzing naar de uitdijing van het universum, eeuwen voordat de wetenschap dit ontdekte. De Koran spoort aan tot kosmische reflectie.',
        scholar: null
    },
    // 102
    {
        type: 'quran',
        ar: 'وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ * وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ',
        nl: 'En op de aarde zijn tekenen voor hen die overtuigd zijn. En in jullie zelf; zien jullie dan niet?',
        source: 'Soera al-Dhāriyāt 51:20-21',
        context: 'Gods tekenen zijn overal: in de natuur en in de mens zelf. Zelfreflectie is een weg naar godskennis.',
        scholar: null
    },
    // 103
    {
        type: 'quran',
        ar: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
        nl: 'En Ik heb de djinn en de mens slechts geschapen om Mij te aanbidden.',
        source: 'Soera al-Dhāriyāt 51:56',
        context: 'Het ultieme levensdoel: de mens is geschapen om God te aanbidden. Aanbidding omvat elk aspect van een bewust geleefd leven.',
        scholar: null
    },
    // 104
    {
        type: 'quran',
        ar: 'مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ وَمَا أُرِيدُ أَن يُطْعِمُونِ',
        nl: 'Ik verlang van hen geen levensonderhoud en Ik verlang niet dat zij Mij voeden.',
        source: 'Soera al-Dhāriyāt 51:57',
        context: 'God heeft niets nodig van Zijn schepping. Aanbidding is niet voor Gods behoefte maar voor het welzijn van de mens.',
        scholar: null
    },
    // 105
    {
        type: 'quran',
        ar: 'إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ',
        nl: 'Voorwaar, Allah is de Voorziener, de Bezitter van kracht, de Standvastige.',
        source: 'Soera al-Dhāriyāt 51:58',
        context: 'Allah is de ultieme Voorziener. Vertrouwen op Zijn voorziening bevrijdt van existentiële angst over levensonderhoud.',
        scholar: null
    },
    // 106
    {
        type: 'quran',
        ar: 'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ',
        nl: 'En het kan zijn dat jullie iets haten terwijl het goed voor jullie is, en het kan zijn dat jullie iets liefhebben terwijl het slecht voor jullie is.',
        source: 'Soera al-Baqarah 2:216',
        context: 'De menselijke perceptie is beperkt. Wat onaangenaam lijkt kan een verborgen zegen zijn, en omgekeerd. Vertrouw op Gods wijsheid.',
        scholar: null
    },
    // 107
    {
        type: 'quran',
        ar: 'وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ',
        nl: 'En Allah weet en jullie weten niet.',
        source: 'Soera al-Baqarah 2:216',
        context: 'Een simpele maar diepe waarheid: Gods kennis is volmaakt, de onze beperkt. Dit inzicht brengt overgave en vertrouwen.',
        scholar: null
    },
    // 108
    {
        type: 'quran',
        ar: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
        nl: 'Voorzeker hebben Wij de mens in de beste vorm geschapen.',
        source: 'Soera al-Tīn 95:4',
        context: 'De mens is geschapen in de beste gestalte — fysiek, intellectueel en spiritueel. Dit is de basis van menselijke waardigheid.',
        scholar: null
    },
    // 109
    {
        type: 'quran',
        ar: 'وَنَفْسٍ وَمَا سَوَّاهَا * فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا * قَدْ أَفْلَحَ مَن زَكَّاهَا',
        nl: 'Bij de ziel en Wie haar heeft gevormd, en haar haar verdorvenheid en haar godsvrucht heeft ingegeven. Geslaagd is degene die haar zuivert.',
        source: 'Soera al-Shams 91:7-9',
        context: 'De mens kent goed en kwaad. Succes ligt in het zuiveren van de ziel — tazkiyah — door bewust voor het goede te kiezen.',
        scholar: null
    },
    // 110
    {
        type: 'quran',
        ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ * الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ',
        nl: 'Waarlijk geslaagd zijn de gelovigen, die in hun gebed nederig zijn.',
        source: 'Soera al-Muʾminūn 23:1-2',
        context: 'Khushūʿ — nederige concentratie in het gebed — is het eerste kenmerk van succesvolle gelovigen.',
        scholar: null
    },
    // 111
    {
        type: 'quran',
        ar: 'وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ',
        nl: 'En degenen die zich van zinloos gepraat afwenden.',
        source: 'Soera al-Muʾminūn 23:3',
        context: 'Succesvolle gelovigen vermijden nutteloos tijdverdrijf. Zij besteden hun tijd en energie aan wat waardevol is.',
        scholar: null
    },
    // 112
    {
        type: 'quran',
        ar: 'وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ',
        nl: 'En degenen die hun toevertrouwde zaken en hun verbond nakomen.',
        source: 'Soera al-Muʾminūn 23:8',
        context: 'Betrouwbaarheid en het nakomen van beloften zijn onlosmakelijk verbonden met oprecht geloof.',
        scholar: null
    },
    // 113
    {
        type: 'quran',
        ar: 'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ',
        nl: 'Weer het kwade af met dat wat beter is; dan zal degene met wie je in vijandschap leefde, worden als een boezemvriend.',
        source: 'Soera Fuṣṣilat 41:34',
        context: 'Goedheid overwint vijandschap. Door kwaad met goed te beantwoorden, kunnen de hardste harten worden verzacht.',
        scholar: null
    },
    // 114
    {
        type: 'quran',
        ar: 'وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ',
        nl: 'En het goede en het kwade zijn niet gelijk.',
        source: 'Soera Fuṣṣilat 41:34',
        context: 'Een eenvoudig maar krachtig principe: goed en kwaad zijn fundamenteel verschillend. Kies altijd voor het goede.',
        scholar: null
    },
    // 115
    {
        type: 'quran',
        ar: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ',
        nl: 'En degenen die zich voor Ons inspannen, zullen Wij zeker leiden op Onze wegen. En voorwaar, Allah is met de weldoeners.',
        source: 'Soera al-ʿAnkabūt 29:69',
        context: 'Oprechte inspanning wordt beloond met goddelijke leiding. Wie zich inzet op Gods pad, wordt niet aan zichzelf overgelaten.',
        scholar: null
    },
    // 116
    {
        type: 'quran',
        ar: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
        nl: 'Onze Heer, aanvaard van ons; voorwaar, U bent de Alhorende, de Alwetende.',
        source: 'Soera al-Baqarah 2:127',
        context: 'Het gebed van Ibrāhīm en Ismāʿīl bij het bouwen van de Kaʿbah. Zelfs grote daden vereisen de smeekbede om aanvaarding.',
        scholar: null
    },
    // 117
    {
        type: 'quran',
        ar: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',
        nl: 'Onze Heer, maak ons beiden overgegeven aan U, en maak van ons nageslacht een gemeenschap die aan U is overgegeven.',
        source: 'Soera al-Baqarah 2:128',
        context: 'Ibrāhīm bad niet alleen voor zichzelf maar ook voor zijn nageslacht. Ouderlijke smeekbeden voor de volgende generatie zijn van groot belang.',
        scholar: null
    },
    // 118
    {
        type: 'quran',
        ar: 'وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ',
        nl: 'En haast jullie naar vergiffenis van jullie Heer en naar een paradijs zo wijd als de hemelen en de aarde, voorbereid voor de godvrezenden.',
        source: 'Soera Āl ʿImrān 3:133',
        context: 'De gelovige wordt aangespoord om zich te haasten naar vergeving en het paradijs. Uitstel is onwijs wanneer het om het hiernamaals gaat.',
        scholar: null
    },
    // 119
    {
        type: 'quran',
        ar: 'الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
        nl: 'Degenen die uitgeven in voorspoed en tegenspoed, en die hun woede inhouden en de mensen vergeven.',
        source: 'Soera Āl ʿImrān 3:134',
        context: 'Drie kenmerken van de godvrezenden: vrijgevigheid in alle omstandigheden, woede beheersen en anderen vergeven.',
        scholar: null
    },
    // 120
    {
        type: 'quran',
        ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا * وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا',
        nl: 'O jullie die geloven, gedenkt Allah met veelvuldig gedenken. En prijst Hem in de ochtend en in de avond.',
        source: 'Soera al-Aḥzāb 33:41-42',
        context: 'Dhikr is geen incidentele activiteit maar een voortdurende staat. De ochtend en avond zijn bijzonder gezegende tijden voor gedenking.',
        scholar: null
    },
    // 121
    {
        type: 'quran',
        ar: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ',
        nl: 'Verheven is Hij die Zijn dienaar bij nacht heeft gevoerd van de Heilige Moskee naar de Verste Moskee, waarvan Wij de omgeving hebben gezegend.',
        source: 'Soera al-Isrāʾ 17:1',
        context: 'De nachtelijke reis (al-Isrāʾ) van de Profeet ﷺ naar Jeruzalem, een wonder dat de verbondenheid van de heilige plaatsen bevestigt.',
        scholar: null
    },
    // 122
    {
        type: 'quran',
        ar: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ',
        nl: 'En Wij zenden van de Koran neer wat genezing en barmhartigheid is voor de gelovigen.',
        source: 'Soera al-Isrāʾ 17:82',
        context: 'De Koran is zowel genezing voor het hart als barmhartigheid voor de ziel. Het reciteren en overdenken ervan brengt innerlijke heling.',
        scholar: null
    }
];

var WISDOMS_HADITH = [
    // === CHARACTER / AKHLĀQ ===
    {
        type: 'hadith',
        ar: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
        nl: 'Ik ben slechts gezonden om de goede karaktereigenschappen te vervolmaken.',
        source: 'Muwaṭṭa\' Mālik',
        context: 'De kern van de profetische missie is het perfectioneren van goed gedrag en nobele karaktereigenschappen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلَاقًا',
        nl: 'De meest geliefden onder jullie bij mij, en degenen die op de Dag des Oordeels het dichtst bij mij zullen zitten, zijn degenen met het beste karakter.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Goed karakter is de snelste weg naar nabijheid bij de Profeet ﷺ in het Hiernamaals.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَثْقَلُ شَيْءٍ فِي الْمِيزَانِ الْخُلُقُ الْحَسَنُ',
        nl: 'Het zwaarste dat op de Weegschaal wordt geplaatst, is goed karakter.',
        source: 'Sunan Abū Dāwūd',
        context: 'Op de Dag des Oordeels weegt goed karakter zwaarder dan veel andere daden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْمُؤْمِنُ يَأْلَفُ وَيُؤْلَفُ وَلَا خَيْرَ فِيمَنْ لَا يَأْلَفُ وَلَا يُؤْلَفُ',
        nl: 'De gelovige is vriendelijk en toegankelijk, en er is geen goed in iemand die niet vriendelijk is noch als vriendelijk wordt ervaren.',
        source: 'Musnad Aḥmad',
        context: 'Sociaal en benaderbaar zijn is een teken van geloof.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
        nl: 'De sterke is niet degene die anderen neerwerpt, maar de sterke is degene die zichzelf beheerst in woede.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Ware kracht ligt in zelfbeheersing, niet in fysieke dominantie.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        nl: 'Wie in Allah en de Laatste Dag gelooft, laat hem iets goeds zeggen of zwijgen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Bewust spreken is een fundamenteel aspect van geloof. Stilte is soms wijzer dan woorden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
        nl: 'Vrees Allah waar je ook bent, laat een slechte daad volgen door een goede die haar uitwist, en behandel de mensen met goed karakter.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Drie alomvattende adviezen die het hele spirituele pad samenvatten: godvrezendheid, berouw en goed gedrag.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا',
        nl: 'Wees niet jaloers op elkaar, bied niet vals tegen elkaar, haat elkaar niet, keer elkaar niet de rug toe, en wees broeders als dienaren van Allah.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Een uitgebreid verbod op de ziekten die gemeenschappen van binnenuit vernietigen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ',
        nl: 'Hoed jullie voor achterdocht, want achterdocht is de meest leugenachtige vorm van spraak.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Slechte vermoedens over anderen vergiftigen relaties en zijn zelden gebaseerd op waarheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ',
        nl: 'Bescheidenheid brengt niets dan goeds.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Ḥayā\u2019 (schroom en bescheidenheid) is een beschermende eigenschap die de mens behoedt voor slechte daden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ',
        nl: 'Bescheidenheid is een tak van het geloof.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Bescheidenheid is niet slechts een culturele deugd maar een integraal onderdeel van īmān.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ',
        nl: 'Liefdadigheid vermindert geen bezit, Allah vermeerdert de eer van wie vergeeft, en wie zich voor Allah verootmoedigt, wordt door Hem verheven.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Drie paradoxen van het geloof: geven verrijkt, vergeven verheft, en nederigheid leidt tot eer.',
        scholar: null
    },
    // === MERCY / BARMHARTIGHEID ===
    {
        type: 'hadith',
        ar: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
        nl: 'De barmhartigen worden begenadigd door de Barmhartige. Wees barmhartig voor wie op aarde is, dan is Hij die in de hemel is barmhartig voor jullie.',
        source: 'Sunan Abū Dāwūd',
        context: 'Barmhartigheid is een universeel principe: wie barmhartig is voor de schepping, ontvangt barmhartigheid van de Schepper.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ لَا يَرْحَمُ لَا يُرْحَمُ',
        nl: 'Wie geen barmhartigheid toont, zal geen barmhartigheid ontvangen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Barmhartigheid is wederkerig: je ontvangt wat je geeft.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا يَرْحَمُ اللَّهُ مَنْ لَا يَرْحَمُ النَّاسَ',
        nl: 'Allah is niet barmhartig voor wie niet barmhartig is voor de mensen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Onze omgang met mensen is direct verbonden met hoe Allah ons behandelt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ لِلَّهِ مِائَةَ رَحْمَةٍ أَنْزَلَ مِنْهَا رَحْمَةً وَاحِدَةً بَيْنَ الْجِنِّ وَالْإِنْسِ وَالْبَهَائِمِ وَالْهَوَامِّ',
        nl: 'Allah heeft honderd delen van barmhartigheid, waarvan Hij er slechts één heeft neergezonden onder de djinn, de mensen, de dieren en de insecten.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Alle compassie die wij in deze wereld zien is slechts één honderdste van Allah\'s barmhartigheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ',
        nl: 'In het dienen van elk levend wezen schuilt een beloning.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Vriendelijkheid jegens dieren en alle levende wezens is een daad van aanbidding.',
        scholar: null
    },
    // === GEBED / DHIKR / DU'Ā ===
    {
        type: 'hadith',
        ar: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
        nl: 'Smeekbede is de essentie van aanbidding.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Du\'ā is niet slechts een onderdeel van aanbidding, het is de kern ervan, want het toont volledige afhankelijkheid van Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ',
        nl: 'Het dichtst dat een dienaar bij zijn Heer is, is wanneer hij in prosternatie is. Vermeerder dus jullie smeekbeden daarin.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De sudjūd is het moment van grootste nabijheid tot Allah, het ideale moment voor smeekbeden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ حَافَظَ عَلَى أَرْبَعِ رَكَعَاتٍ قَبْلَ الظُّهْرِ وَأَرْبَعٍ بَعْدَهَا حَرَّمَهُ اللَّهُ عَلَى النَّارِ',
        nl: 'Wie volhoudt in het verrichten van vier raka\'āt vóór en vier ná het middaggebed, Allah maakt het Vuur verboden voor hem.',
        source: 'Sunan Abū Dāwūd',
        context: 'Vrijwillige gebeden rond de verplichte gebeden zijn een schild tegen het Hellevuur.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الصَّلَاةُ نُورٌ',
        nl: 'Het gebed is licht.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Het gebed verlicht het hart, het gezicht en het pad van de gelovige, zowel in dit leven als in het Hiernamaals.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَثَلُ الصَّلَوَاتِ الْخَمْسِ كَمَثَلِ نَهْرٍ غَمْرٍ عَلَى بَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ',
        nl: 'De gelijkenis van de vijf dagelijkse gebeden is als een overvloedige rivier bij de deur van ieder van jullie, waarin hij zich vijf keer per dag wast.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Zoals regelmatig baden het lichaam reinigt, zo reinigen de vijf gebeden de ziel van zonden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
        nl: 'Twee woorden die licht zijn op de tong, zwaar op de Weegschaal en geliefd bij de Barmhartige: "Subḥāna Allāh wa biḥamdihi, Subḥāna Allāhi l-ʿAẓīm."',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Eenvoudige woorden van dhikr kunnen een enorm gewicht hebben bij Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَحَبُّ الْكَلَامِ إِلَى اللَّهِ أَرْبَعٌ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
        nl: 'De meest geliefde woorden bij Allah zijn vier: Subḥāna Allāh, Al-ḥamdu lillāh, Lā ilāha illa Allāh en Allāhu Akbar.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De vier fundamentele uitdrukkingen van dhikr omvatten lofprijzing, dankbaarheid, eenheid en grootheid van Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَلَا أُنَبِّئُكُمْ بِخَيْرِ أَعْمَالِكُمْ وَأَزْكَاهَا عِنْدَ مَلِيكِكُمْ وَأَرْفَعِهَا فِي دَرَجَاتِكُمْ خَيْرٌ لَكُمْ مِنْ إِنْفَاقِ الذَّهَبِ وَالْوَرِقِ قَالُوا بَلَى قَالَ ذِكْرُ اللَّهِ',
        nl: 'Zal ik jullie vertellen wat de beste en zuiverste van jullie daden is bij jullie Heer, de hoogste in rang, beter dan het uitgeven van goud en zilver? Zij zeiden: Ja. Hij zei: Het gedenken van Allah.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Dhikr (het gedenken van Allah) is de meest verheven daad, toegankelijk voor iedereen ongeacht rijkdom of status.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا',
        nl: 'Wie een letter van het Boek van Allah leest, krijgt daarvoor een goede daad, en elke goede daad wordt tienvoudig beloond.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Elke letter van de Koran die wordt gereciteerd levert immense beloningen op.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا',
        nl: 'Wie eenmaal de ṣalawāt over mij uitspreekt, Allah zegent hem daarvoor tienvoudig.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Het uitspreken van zegeningen over de Profeet ﷺ wordt veelvoudig terugbeloon door Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِذَا مَرَرْتُمْ بِرِيَاضِ الْجَنَّةِ فَارْتَعُوا قَالُوا وَمَا رِيَاضُ الْجَنَّةِ قَالَ حِلَقُ الذِّكْرِ',
        nl: 'Wanneer jullie langs de tuinen van het Paradijs komen, vertoef er dan. Zij vroegen: Wat zijn de tuinen van het Paradijs? Hij zei: De kringen van dhikr.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Bijeenkomsten van dhikr zijn als stukjes Paradijs op aarde.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي',
        nl: 'Bid zoals jullie mij hebben zien bidden.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het gebed dient verricht te worden volgens de exacte wijze van de Profeet ﷺ.',
        scholar: null
    },
    // === VASTEN / CHARITY ===
    {
        type: 'hadith',
        ar: 'الصِّيَامُ جُنَّةٌ',
        nl: 'Het vasten is een schild.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Vasten beschermt de gelovige tegen zonden en tegen het Hellevuur.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        nl: 'Wie de Ramadan vast uit geloof en hoop op beloning, diens voorgaande zonden worden vergeven.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het vasten in Ramadan met oprechte intentie is een middel tot complete vergeving.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ',
        nl: 'Wie een vastende te eten geeft, ontvangt dezelfde beloning als de vastende.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Het voeden van vastenden is een daad met een immense beloning, gelijk aan het vasten zelf.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا مِنْ يَوْمٍ أَكْثَرَ مِنْ أَنْ يُعْتِقَ اللَّهُ فِيهِ عَبْدًا مِنَ النَّارِ مِنْ يَوْمِ عَرَفَةَ',
        nl: 'Er is geen dag waarop Allah meer mensen van het Hellevuur bevrijdt dan de dag van ʿArafah.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De dag van ʿArafah is de meest gezegende dag van het jaar voor bevrijding van de ziel.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'تَصَدَّقُوا وَلَوْ بِتَمْرَةٍ',
        nl: 'Geef liefdadigheid, al is het maar een dadel.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Geen gift is te klein. Elke daad van liefdadigheid telt, ongeacht de omvang.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ',
        nl: 'Liefdadigheid dooft zonden zoals water vuur dooft.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Ṣadaqah heeft een zuiverende werking op de ziel en wist de sporen van zonden uit.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ',
        nl: 'Bescherm jezelf tegen het Hellevuur, al is het met een halve dadel.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Zelfs de kleinste daad van liefdadigheid kan een bescherming zijn tegen het Vuur.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى',
        nl: 'De gevende hand is beter dan de ontvangende hand.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Geven is edeler dan ontvangen. De islam moedigt aan om een gever te zijn.',
        scholar: null
    },
    // === KENNIS ===
    {
        type: 'hadith',
        ar: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        nl: 'Het zoeken van kennis is een plicht voor iedere moslim.',
        source: 'Sunan Ibn Mājah',
        context: 'Het verwerven van kennis is niet optioneel maar een religieuze verplichting voor elke moslim.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
        nl: 'Wie een pad bewandelt om kennis te zoeken, voor hem maakt Allah een pad naar het Paradijs gemakkelijk.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Het zoeken van kennis is een directe weg naar het Paradijs.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ',
        nl: 'Waarlijk, de geleerden zijn de erfgenamen van de profeten.',
        source: 'Sunan Abū Dāwūd',
        context: 'Geleerden bekleden een verheven positie omdat zij het profetische erfgoed van kennis voortzetten.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'بَلِّغُوا عَنِّي وَلَوْ آيَةً',
        nl: 'Draag van mij over, al is het maar één vers.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Iedereen heeft de verantwoordelijkheid om kennis door te geven, hoe weinig het ook is.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
        nl: 'De besten onder jullie zijn degenen die de Koran leren en onderwijzen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het leren en onderwijzen van de Koran is de meest nobele bezigheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
        nl: 'Wanneer een mens sterft, worden al zijn daden beëindigd, behalve drie: doorlopende liefdadigheid, kennis waarvan geprofiteerd wordt, of een vroom kind dat voor hem bidt.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Drie daden blijven belonen na de dood: voortdurende liefdadigheid, nuttige kennis en een vroom nageslacht.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
        nl: 'Wie Allah goed wil doen, schenkt Hij begrip van de religie.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Religieus begrip is een teken van Allah\'s welbehagen en Zijn goedheid jegens een persoon.',
        scholar: null
    },
    // === FAMILIE / BUREN / GEMEENSCHAP ===
    {
        type: 'hadith',
        ar: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي',
        nl: 'De besten onder jullie zijn degenen die het beste zijn voor hun familie, en ik ben de beste van jullie voor mijn familie.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Ware goedheid begint thuis. De Profeet ﷺ was het beste voorbeeld in de omgang met zijn gezin.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ',
        nl: 'Jibrīl bleef mij aanmanen over de rechten van de buurman, totdat ik dacht dat hij hem tot erfgenaam zou maken.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De rechten van de buurman zijn zo belangrijk in de islam dat ze bijna gelijkstaan aan familierechten.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ',
        nl: 'Wie in Allah en de Laatste Dag gelooft, laat hem zijn buurman eren.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het respecteren van buren is een direct gevolg van oprecht geloof.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ',
        nl: 'Wie in Allah en de Laatste Dag gelooft, laat hem zijn gast eren.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Gastvrijheid is een teken van geloof en een nobele eigenschap in de islam.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        nl: 'Niemand van jullie gelooft werkelijk totdat hij voor zijn broeder wenst wat hij voor zichzelf wenst.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Ware broederschap vereist dat je het goede voor anderen wenst zoals je het voor jezelf wenst.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى',
        nl: 'De gelijkenis van de gelovigen in hun onderlinge liefde, barmhartigheid en medeleven is als dat van één lichaam: wanneer een ledemaat lijdt, reageert het hele lichaam met slapeloosheid en koorts.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De moslimgemeenschap is als één organisch geheel dat elkaars pijn voelt en deelt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ',
        nl: 'Een moslim is de broeder van een moslim: hij doet hem geen onrecht aan en levert hem niet uit.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Broederschap in de islam brengt concrete verplichtingen met zich mee: bescherming en rechtvaardigheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
        nl: 'Wie een gelovige verlost van een wereldse beproeving, Allah zal hem verlossen van een beproeving op de Dag des Oordeels.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Het verlichten van andermans lasten wordt in het Hiernamaals veelvoudig beloond.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا',
        nl: 'Help je broeder, of hij nu onrecht pleegt of onrecht ondergaat.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De onrechtpleger helpen betekent hem tegenhouden van zijn onrecht — dat is ware hulp.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا يَدْخُلُ الْجَنَّةَ قَاطِعُ رَحِمٍ',
        nl: 'Wie de familiebanden verbreekt, zal het Paradijs niet binnengaan.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het onderhouden van familiebanden (ṣilat al-raḥim) is zo essentieel dat het verbreken ervan een grote zonde is.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ',
        nl: 'Wie wil dat zijn levensonderhoud wordt verruimd en zijn leven wordt verlengd, laat hem zijn familiebanden onderhouden.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het onderhouden van familiebanden brengt barakah in levensonderhoud en levensduur.',
        scholar: null
    },
    // === GEDULD / DANKBAARHEID / TAWAKKUL ===
    {
        type: 'hadith',
        ar: 'عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ',
        nl: 'Hoe wonderlijk is de zaak van de gelovige! Al zijn zaken zijn goed, en dat geldt voor niemand behalve de gelovige. Als hem voorspoed treft, is hij dankbaar en dat is goed voor hem. En als hem tegenspoed treft, is hij geduldig en dat is goed voor hem.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De gelovige wint altijd: bij voorspoed door dankbaarheid, bij tegenspoed door geduld.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ',
        nl: 'Wie geduld nastreeft, Allah schenkt hem geduld. En niemand heeft een gift ontvangen die beter en ruimer is dan geduld.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Geduld (ṣabr) is de beste en ruimste gave die een mens kan ontvangen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ عِظَمَ الْجَزَاءِ مَعَ عِظَمِ الْبَلَاءِ',
        nl: 'Waarlijk, de grootheid van de beloning komt met de grootheid van de beproeving.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Hoe zwaarder de beproeving, hoe groter de beloning voor wie geduldig volhardt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَوْ أَنَّكُمْ تَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا',
        nl: 'Als jullie werkelijk op Allah vertrouwen zoals Hij het verdient, zou Hij jullie voorzien zoals Hij de vogels voorziet: zij gaan \'s ochtends met lege magen en keren \'s avonds verzadigd terug.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Oprecht vertrouwen op Allah (tawakkul) combineert inspanning met overgave, zoals vogels die wel degelijk uitvliegen om voedsel te zoeken.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'احْفَظِ اللَّهَ يَحْفَظْكَ احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ',
        nl: 'Bewaar Allah en Hij zal jou bewaren. Bewaar Allah en je zult Hem voor je vinden.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Wie zich aan Allah\'s geboden houdt, wordt door Allah beschermd en geleid in moeilijke tijden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَاعْلَمْ أَنَّ مَا أَصَابَكَ لَمْ يَكُنْ لِيُخْطِئَكَ وَمَا أَخْطَأَكَ لَمْ يَكُنْ لِيُصِيبَكَ',
        nl: 'Weet dat wat jou heeft getroffen, jou niet kon missen, en wat jou heeft gemist, jou niet kon treffen.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Geloof in de goddelijke voorbeschikking (qadar) brengt rust en acceptatie in het hart.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ وَلَا تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ فَهُوَ أَجْدَرُ أَنْ لَا تَزْدَرُوا نِعْمَةَ اللَّهِ',
        nl: 'Kijk naar wie beneden jullie staat en niet naar wie boven jullie staat, want dat is beter opdat jullie de gunst van Allah niet geringschatten.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Dankbaarheid groeit door te kijken naar wie minder heeft, niet door je te vergelijken met wie meer heeft.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ',
        nl: 'Geen moeheid, ziekte, bezorgdheid, verdriet, pijn of leed treft een moslim, zelfs niet een doorn die hem prikt, of Allah wist daarmee een deel van zijn zonden uit.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Elk lijden, hoe klein ook, is een middel tot zuivering van zonden voor de gelovige.',
        scholar: null
    },
    // === ZUIVERING VAN HET HART (TAZKIYAH) ===
    {
        type: 'hadith',
        ar: 'أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ',
        nl: 'Weet dat er in het lichaam een stuk vlees is: als het gezond is, is het hele lichaam gezond, en als het bedorven is, is het hele lichaam bedorven. Weet dat het het hart is.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het hart is het centrum van spirituele gezondheid. De zuivering van het hart is het fundament van alle goede daden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
        nl: 'Waarlijk, Allah kijkt niet naar jullie uiterlijk of bezittingen, maar Hij kijkt naar jullie harten en daden.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Bij Allah telt de innerlijke staat van het hart, niet uiterlijke schijn of materiële rijkdom.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الطُّهُورُ شَطْرُ الْإِيمَانِ',
        nl: 'Reiniging is de helft van het geloof.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Zuiverheid — zowel uiterlijk als innerlijk — vormt een fundamenteel deel van het geloof.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ الْعَبْدَ إِذَا أَخْطَأَ خَطِيئَةً نُكِتَتْ فِي قَلْبِهِ نُكْتَةٌ سَوْدَاءُ',
        nl: 'Wanneer een dienaar een zonde begaat, wordt er een zwarte stip op zijn hart geplaatst.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Zonden laten letterlijk sporen na op het hart. Berouw en goede daden zijn nodig om het hart te reinigen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ تَعَالَى يَغَارُ وَغَيْرَةُ اللَّهِ أَنْ يَأْتِيَ الْمُؤْمِنُ مَا حَرَّمَ اللَّهُ',
        nl: 'Waarlijk, Allah heeft ghayrah (beschermende ijver), en de ghayrah van Allah is dat de gelovige datgene begaat wat Allah heeft verboden.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Allah\'s beschermende ijver manifesteert zich wanneer Zijn dienaren de grenzen overschrijden die Hij heeft gesteld.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ',
        nl: 'Wie oprecht berouw toont over een zonde, is als iemand die geen zonde heeft begaan.',
        source: 'Sunan Ibn Mājah',
        context: 'Oprecht berouw (tawbah) wist de zonde volledig uit alsof deze nooit was begaan.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ',
        nl: 'Hoogmoed is het afwijzen van de waarheid en het neerkijken op mensen.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De Profeet ﷺ definieerde hoogmoed met twee kenmerken: de waarheid niet accepteren en anderen minachten.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ',
        nl: 'Wie ook maar een greintje hoogmoed in zijn hart heeft, zal het Paradijs niet binnengaan.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Hoogmoed is een van de meest destructieve hartziekten die de toegang tot het Paradijs blokkeert.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْحَسَدُ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ',
        nl: 'Jaloezie verteert goede daden zoals vuur hout verteert.',
        source: 'Sunan Abū Dāwūd',
        context: 'Jaloezie (ḥasad) is een spiritueel gif dat de vruchten van iemands goede daden vernietigt.',
        scholar: null
    },
    // === KARAKTER VAN DE PROFEET ﷺ ===
    {
        type: 'hadith',
        ar: 'كَانَ خُلُقُهُ الْقُرْآنَ',
        nl: 'Zijn karakter was de Koran.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'ʿĀ\'ishah (ra) beschreef het karakter van de Profeet ﷺ als de levende belichaming van de Koran.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا ضَرَبَ رَسُولُ اللَّهِ شَيْئًا قَطُّ بِيَدِهِ وَلَا امْرَأَةً وَلَا خَادِمًا',
        nl: 'De Boodschapper van Allah ﷺ heeft nooit iets met zijn hand geslagen, noch een vrouw, noch een bediende.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De Profeet ﷺ was het toonbeeld van zachtheid en geweldloosheid in zijn persoonlijke omgang.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا خُيِّرَ رَسُولُ اللَّهِ بَيْنَ أَمْرَيْنِ إِلَّا أَخَذَ أَيْسَرَهُمَا مَا لَمْ يَكُنْ إِثْمًا',
        nl: 'Telkens wanneer de Boodschapper van Allah ﷺ de keuze had tussen twee zaken, koos hij de gemakkelijkste, zolang het geen zonde was.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De Profeet ﷺ koos altijd voor gemak en verlichting, wat de geest van de islam weerspiegelt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا عَابَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ طَعَامًا قَطُّ إِنِ اشْتَهَاهُ أَكَلَهُ وَإِنْ كَرِهَهُ تَرَكَهُ',
        nl: 'De Profeet ﷺ heeft nooit voedsel bekritiseerd. Als hij ervan hield, at hij het; als hij het niet luste, liet hij het staan.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Een subtiel maar krachtig voorbeeld van beleefdheid en dankbaarheid in het dagelijks leven.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'كَانَ رَسُولُ اللَّهِ أَحْسَنَ النَّاسِ خُلُقًا',
        nl: 'De Boodschapper van Allah ﷺ had het beste karakter van alle mensen.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Anas ibn Mālik (ra) getuigde na tien jaar persoonlijke dienst van het ongeëvenaarde karakter van de Profeet ﷺ.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَاللَّهِ إِنِّي لَأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً',
        nl: 'Bij Allah, ik vraag Allah om vergeving en toon berouw tot Hem meer dan zeventig keer per dag.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Zelfs de Profeet ﷺ, wiens zonden vergeven waren, toonde constant berouw als voorbeeld voor de ummah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا لَقِيَهُ أَحَدٌ مِنْ أَصْحَابِهِ فَقَامَ مَعَهُ لَمْ يَنْصَرِفْ حَتَّى يَكُونَ الرَّجُلُ هُوَ الَّذِي يَنْصَرِفُ',
        nl: 'Wanneer de Profeet ﷺ iemand van zijn metgezellen ontmoette en bij hem stilstond, ging hij niet weg totdat de ander als eerste wegging.',
        source: 'Sunan Ibn Mājah',
        context: 'De Profeet ﷺ gaf ieder persoon het gevoel dat hij de belangrijkste was door zijn volledige aandacht te schenken.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
        nl: 'Jouw glimlach naar het gezicht van je broeder is een daad van liefdadigheid.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Zelfs een glimlach is een daad van aanbidding en ṣadaqah in de islam.',
        scholar: null
    },
    // === RECHTVAARDIGHEID / EERLIJKHEID / NEDERIGHEID ===
    {
        type: 'hadith',
        ar: 'إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
        nl: 'Waarlijk, eerlijkheid leidt naar rechtschapenheid, en rechtschapenheid leidt naar het Paradijs.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Eerlijkheid is de eerste stap op een keten die uiteindelijk naar het Paradijs leidt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ',
        nl: 'En waarlijk, liegen leidt naar verdorvenheid, en verdorvenheid leidt naar het Hellevuur.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Tegenover de keten van eerlijkheid staat de destructieve keten van leugens die naar het Vuur leidt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'آيَةُ الْمُنَافِقِ ثَلَاثٌ إِذَا حَدَّثَ كَذَبَ وَإِذَا وَعَدَ أَخْلَفَ وَإِذَا اؤْتُمِنَ خَانَ',
        nl: 'De tekenen van een huichelaar zijn drie: wanneer hij spreekt, liegt hij; wanneer hij belooft, breekt hij zijn belofte; en wanneer hem iets wordt toevertrouwd, pleegt hij verraad.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Drie praktische kenmerken waarmee hypocrisie (nifāq) herkend kan worden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        nl: 'Een moslim is degene voor wiens tong en hand andere moslims veilig zijn.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De ware moslim is iemand van wie anderen geen schade ondervinden, niet verbaal en niet fysiek.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
        nl: 'Allah houdt ervan dat wanneer iemand van jullie iets doet, hij het met uitmuntendheid verricht.',
        source: 'Musnad Aḥmad',
        context: 'Iḥsān (uitmuntendheid) in werk is een vorm van aanbidding die Allah liefheeft.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَدِّ الْأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ وَلَا تَخُنْ مَنْ خَانَكَ',
        nl: 'Geef het toevertrouwde terug aan wie jou heeft vertrouwd, en bedrieg niet wie jou heeft bedrogen.',
        source: 'Sunan Abū Dāwūd',
        context: 'Betrouwbaarheid is een absoluut principe: zelfs als anderen jou onrecht doen, mag je niet in onbetrouwbaarheid vervallen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ غَشَّنَا فَلَيْسَ مِنَّا',
        nl: 'Wie ons bedriegt, behoort niet tot ons.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Bedrog in handel, onderwijs of welke interactie dan ook is volledig in strijd met de islamitische ethiek.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ',
        nl: 'Ieder van jullie is een herder en ieder van jullie is verantwoordelijk voor zijn kudde.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Iedereen draagt verantwoordelijkheid binnen zijn of haar invloedssfeer, van leider tot gezinslid.',
        scholar: null
    },
    // === HET HIERNAMAALS / PARADIJS / VERANTWOORDING ===
    {
        type: 'hadith',
        ar: 'كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',
        nl: 'Wees in deze wereld alsof je een vreemdeling bent of een reiziger.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Dit leven is tijdelijk. Wie dat beseft, richt zijn focus op het eeuwige Hiernamaals.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ',
        nl: 'De wereld is de gevangenis van de gelovige en het paradijs van de ongelovige.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De gelovige voelt zich beperkt in deze wereld omdat hij weet dat het ware leven nog komt.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ يَعْنِي الْمَوْتَ',
        nl: 'Gedenk veelvuldig de vernietiger van genietingen, namelijk de dood.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Het gedenken van de dood is geen somberheid maar een middel om prioriteiten helder te krijgen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ وَعَنْ عِلْمِهِ مَا فَعَلَ فِيهِ وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَا أَنْفَقَهُ وَعَنْ جِسْمِهِ فِيمَا أَبْلَاهُ',
        nl: 'De voeten van een dienaar zullen op de Dag des Oordeels niet bewegen totdat hij wordt gevraagd over zijn leven en hoe hij het heeft doorgebracht, over zijn kennis en wat hij ermee heeft gedaan, over zijn bezit en hoe hij het heeft verworven en uitgegeven, en over zijn lichaam en hoe hij het heeft gebruikt.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Op de Dag des Oordeels worden vier fundamentele vragen gesteld over tijd, kennis, geld en gezondheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا',
        nl: 'Roep jezelf ter verantwoording voordat je ter verantwoording wordt geroepen.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Zelfreflectie (muḥāsabah) in dit leven is een voorbereiding op de uiteindelijke verantwoording in het Hiernamaals.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْجَنَّةُ أَقْرَبُ إِلَى أَحَدِكُمْ مِنْ شِرَاكِ نَعْلِهِ وَالنَّارُ مِثْلُ ذَلِكَ',
        nl: 'Het Paradijs is dichter bij ieder van jullie dan de riem van zijn sandaal, en het Hellevuur evenzo.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Elke daad kan de doorslag geven richting het Paradijs of het Hellevuur — beide zijn dichterbij dan we denken.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ وَحُفَّتِ النَّارُ بِالشَّهَوَاتِ',
        nl: 'Het Paradijs is omringd door moeilijkheden, en het Hellevuur is omringd door verlangens.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De weg naar het Paradijs vereist discipline en offers, terwijl de weg naar het Vuur plaveid is met verlokkingen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ خَافَ أَدْلَجَ وَمَنْ أَدْلَجَ بَلَغَ الْمَنْزِلَ',
        nl: 'Wie vreest, vertrekt in de nacht, en wie in de nacht vertrekt, bereikt zijn bestemming.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Gezonde vrees voor Allah motiveert tot actie en voorbereiding, wat uiteindelijk naar veiligheid leidt.',
        scholar: null
    },
    // === LIEFDE VOOR ALLAH EN ZIJN BOODSCHAPPER ﷺ ===
    {
        type: 'hadith',
        ar: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ',
        nl: 'Niemand van jullie gelooft werkelijk totdat ik hem dierbaarder ben dan zijn vader, zijn kind en alle mensen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Ware liefde voor de Profeet ﷺ is een voorwaarde voor compleet geloof.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'ثَلَاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلَاوَةَ الْإِيمَانِ أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا',
        nl: 'Drie eigenschappen: wie ze bezit, proeft de zoetheid van het geloof. Dat Allah en Zijn Boodschapper hem dierbaarder zijn dan al het andere.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De zoetheid van het geloof (ḥalāwat al-īmān) is een tastbare spirituele ervaring die voortkomt uit liefde voor Allah en Zijn Boodschapper ﷺ.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْمَرْءُ مَعَ مَنْ أَحَبَّ',
        nl: 'Een mens zal zijn bij wie hij liefheeft.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Op de Dag des Oordeels wordt men verenigd met wie men liefhad. Liefde voor de vromen leidt tot hun gezelschap.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'قَالَ اللَّهُ تَعَالَى أَنَا عِنْدَ ظَنِّ عَبْدِي بِي',
        nl: 'Allah de Verhevene zegt: Ik ben zoals Mijn dienaar van Mij verwacht.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Allah behandelt ons volgens onze verwachtingen van Hem. Wie goed van Allah denkt, ontvangt goedheid.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'قَالَ اللَّهُ تَعَالَى مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ',
        nl: 'Allah de Verhevene zegt: Wie een vriend van Mij vijandig bejegent, aan hem heb Ik de oorlog verklaard.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Dit hadith qudsī benadrukt de verheven status van de awliyā\' (vrienden van Allah) en de bescherming die zij genieten.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ',
        nl: 'Mijn dienaar blijft tot Mij naderen door vrijwillige daden van aanbidding totdat Ik hem liefheb.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Vrijwillige aanbidding (nawāfil) is de weg naar de bijzondere liefde van Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَحِبُّوا اللَّهَ لِمَا يَغْذُوكُمْ مِنْ نِعَمِهِ وَأَحِبُّونِي بِحُبِّ اللَّهِ',
        nl: 'Heb Allah lief omwille van de gunsten waarmee Hij jullie voedt, en heb mij lief omwille van de liefde voor Allah.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Liefde voor Allah groeit uit het herkennen van Zijn gunsten, en liefde voor de Profeet ﷺ vloeit voort uit liefde voor Allah.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ إِذَا أَحَبَّ عَبْدًا دَعَا جِبْرِيلَ فَقَالَ إِنِّي أُحِبُّ فُلَانًا فَأَحِبَّهُ',
        nl: 'Wanneer Allah een dienaar liefheeft, roept Hij Jibrīl en zegt: Ik houd van die-en-die, houd ook van hem.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Wanneer Allah iemand liefheeft, plaatst Hij acceptatie voor die persoon in de harten van de hemelbewoners en vervolgens de aardbewoners.',
        scholar: null
    },
    // === AANVULLENDE DIVERSE HADITHS ===
    {
        type: 'hadith',
        ar: 'الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا',
        nl: 'De gelovige is voor de andere gelovige als een bouwwerk waarvan de delen elkaar versterken.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Moslims ondersteunen en versterken elkaar, zoals stenen in een gebouw.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ',
        nl: 'Wie de fouten van een moslim bedekt, Allah zal zijn fouten bedekken op de Dag des Oordeels.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het bedekken van andermans tekortkomingen wordt beloond met Allah\'s bedekking van onze eigen tekortkomingen.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ',
        nl: 'Wie het gemakkelijk maakt voor iemand in moeilijkheden, Allah maakt het gemakkelijk voor hem in dit leven en het Hiernamaals.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Verlichting bieden aan mensen in nood wordt dubbel beloond: in dit leven en in het volgende.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ',
        nl: 'Allah helpt de dienaar zolang de dienaar zijn broeder helpt.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Hulp aan anderen is een directe oorzaak van Allah\'s hulp aan jou.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'لَا ضَرَرَ وَلَا ضِرَارَ',
        nl: 'Er mag geen schade worden toegebracht noch schade worden vergolden.',
        source: 'Sunan Ibn Mājah',
        context: 'Een fundamentele rechtsregel in de islam: schade toebrengen en wraakzuchtige vergelding zijn beide verboden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الدِّينُ النَّصِيحَةُ',
        nl: 'De religie is oprecht advies.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'De kern van de islam is naṣīḥah: oprecht advies geven aan Allah, Zijn Boek, Zijn Boodschapper, de leiders en de gewone moslims.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الدِّينُ يُسْرٌ وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ',
        nl: 'De religie is gemak. Niemand maakt de religie streng zonder dat zij hem overwint.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De islam is een religie van gemak en gematigdheid. Overdreven strengheid leidt tot uitputting en opgave.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ',
        nl: 'Waarlijk, Allah is Zachtmoedig en Hij houdt van zachtheid in alle zaken.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Zachtheid en mildheid zijn goddelijke eigenschappen die Allah liefheeft in al onze aangelegenheden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّ اللَّهَ يُعْطِي عَلَى الرِّفْقِ مَا لَا يُعْطِي عَلَى الْعُنْفِ',
        nl: 'Waarlijk, Allah geeft door zachtheid wat Hij niet geeft door hardheid.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Zachte benadering bereikt meer dan harde confrontatie, zowel in wereldse als spirituele zaken.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        nl: 'Wie de Nacht van de Bestemming in gebed doorbrengt uit geloof en hoop op beloning, diens voorgaande zonden worden vergeven.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Laylat al-Qadr is de meest gezegende nacht van het jaar, waarin één nacht van aanbidding meer waard is dan duizend maanden.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        nl: 'Wie de nachten van Ramadan in gebed doorbrengt uit geloof en hoop op beloning, diens voorgaande zonden worden vergeven.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Het nachtgebed (tarāwīḥ/qiyām) in Ramadan is een bijzondere gelegenheid voor vergeving.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلَاتٌ يُقِمْنَ صُلْبَهُ',
        nl: 'Een mens vult geen slechter vat dan zijn buik. Het is voldoende voor de zoon van Adam om een paar happen te nemen die zijn rug recht houden.',
        source: 'Jāmiʿ al-Tirmidhī',
        context: 'Matigheid in eten is zowel spiritueel als lichamelijk gezond. De Profeet ﷺ adviseerde een derde voor eten, een derde voor drinken en een derde voor lucht.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'أَفْضَلُ الْجِهَادِ كَلِمَةُ حَقٍّ عِنْدَ سُلْطَانٍ جَائِرٍ',
        nl: 'De beste jihad is een woord van waarheid tegenover een onrechtvaardige heerser.',
        source: 'Sunan Abū Dāwūd',
        context: 'Moed om de waarheid te spreken tegenover machthebbers is de hoogste vorm van strijd.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
        nl: 'Iḥsān is dat je Allah aanbidt alsof je Hem ziet, en als je Hem niet ziet, weet dan dat Hij jou ziet.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Iḥsān is het hoogste niveau van geloof: een constant bewustzijn van Allah\'s aanwezigheid in alles wat je doet.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً فَأَفْضَلُهَا قَوْلُ لَا إِلَهَ إِلَّا اللَّهُ وَأَدْنَاهَا إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ',
        nl: 'Het geloof heeft meer dan zeventig takken. De hoogste is het uitspreken van "Lā ilāha illa Allāh" en de laagste is het verwijderen van iets schadelijks van de weg.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Geloof omvat een breed spectrum van daden, van de grootse geloofsgetuigenis tot de eenvoudige daad van het opruimen van een obstakel.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        nl: 'Waarlijk, daden worden beoordeeld op basis van intenties, en voor ieder mens geldt wat hij heeft beoogd.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'De intentie (niyyah) is het fundament van elke daad in de islam. Dezelfde handeling kan aanbidding of nutteloos zijn, afhankelijk van de intentie.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ',
        nl: 'Wie iets in deze zaak van ons introduceert dat er niet toe behoort, het wordt afgewezen.',
        source: 'Ṣaḥīḥ al-Bukhārī',
        context: 'Een fundamenteel principe voor het bewaken van de zuiverheid van religieuze praktijk.',
        scholar: null
    },
    {
        type: 'hadith',
        ar: 'مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ وَذَلِكَ أَضْعَفُ الْإِيمَانِ',
        nl: 'Wie van jullie een kwaad ziet, laat hem het veranderen met zijn hand. Als hij dat niet kan, dan met zijn tong. En als hij dat niet kan, dan met zijn hart, en dat is de zwakste vorm van geloof.',
        source: 'Ṣaḥīḥ Muslim',
        context: 'Het tegengaan van onrecht is een gelaagde verplichting: fysiek, verbaal of in het hart, afhankelijk van het vermogen.',
        scholar: null
    }
];

var WISDOMS_SCHOLAR = [
    // ========== Imām al-Ghazālī (1-9) ==========
    {
        type: 'scholar',
        ar: 'اعلم أن القلب كالمرآة والشهوات كالصدأ',
        nl: 'Weet dat het hart als een spiegel is, en de begeerten als roest daarop.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī vergelijkt het hart met een spiegel die gepolijst moet worden door geestelijke oefening.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'من عرف نفسه فقد عرف ربه',
        nl: 'Wie zichzelf kent, kent waarlijk zijn Heer.',
        source: 'Kīmiyā al-Sa\'ādah',
        context: 'Dit beroemde adagium staat centraal in al-Ghazālī\'s leer over zelfkennis als weg naar Godskennis.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'العلم بلا عمل جنون والعمل بلا علم لا يكون',
        nl: 'Kennis zonder handelen is waanzin, en handelen zonder kennis is onmogelijk.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī benadrukt de onlosmakelijke band tussen kennis en de praktijk ervan.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'إن الصبر على البلاء يورث القرب من الله',
        nl: 'Geduld bij beproevingen schenkt nabijheid tot Allah.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī beschrijft geduld als een geestelijke trap naar de nabijheid van de Schepper.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'الدنيا مزرعة الآخرة',
        nl: 'De wereld is het zaailand van het hiernamaals.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī leert dat elke daad in dit leven als een zaad is dat in het hiernamaals vruchten draagt.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'أشرف العلوم علم التوحيد وأنفع العلوم علم القلوب',
        nl: 'De edelste wetenschap is de leer van Gods eenheid, en de nuttigste wetenschap is de kennis van de harten.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī plaatst de innerlijke wetenschap van het hart boven uiterlijke geleerdheid.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'اجعل قلبك كالقبر لا يدخله إلا الله',
        nl: 'Maak je hart als een graf: laat er niets in toe behalve Allah.',
        source: 'Kīmiyā al-Sa\'ādah',
        context: 'Al-Ghazālī spoort de zoeker aan om het hart te zuiveren van alles behalve het goddelijke.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'الشكر قيد النعم',
        nl: 'Dankbaarheid is de keten die gunsten vasthoudt.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī leert dat wie dankbaar is, zijn zegeningen behoudt en vermeerdert.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },
    {
        type: 'scholar',
        ar: 'التوبة بداية طريق السالكين',
        nl: 'Berouw is het begin van de weg der reizigers naar Allah.',
        source: 'Iḥyā\' \'Ulūm al-Dīn',
        context: 'Al-Ghazālī beschrijft berouw als de allereerste halte op het spirituele pad.',
        scholar: 'Imām Abū Ḥāmid al-Ghazālī'
    },

    // ========== Imām Abū Ḥanīfah (10-18) ==========
    {
        type: 'scholar',
        ar: 'الفقه معرفة النفس ما لها وما عليها',
        nl: 'Werkelijk begrip is dat de ziel weet wat haar toekomt en wat haar plicht is.',
        source: 'Al-Fiqh al-Akbar',
        context: 'Abū Ḥanīfah definieert fiqh breder dan juridische regels: het omvat zelfkennis en geestelijk inzicht.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'لا تخاصم أحداً في الدين واهجر من يخاصم',
        nl: 'Maak geen ruzie met iemand over religie, en vermijd wie dat wel doet.',
        source: 'Al-\'Ālim wa al-Muta\'allim',
        context: 'Abū Ḥanīfah staat bekend om zijn verdraagzaamheid en afkeer van nutteloze theologische twisten.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'إذا صح الحديث فهو مذهبي',
        nl: 'Wanneer een hadith authentiek is, dan is dat mijn leer.',
        source: 'Overlevering via zijn leerlingen',
        context: 'Abū Ḥanīfah toonde hiermee zijn nederigheid en bereidheid de waarheid te volgen boven eigen mening.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'العلم ما نفع لا ما حُفظ',
        nl: 'Kennis is dat wat baat brengt, niet dat wat slechts onthouden wordt.',
        source: 'Overlevering van Abū Ḥanīfah',
        context: 'Abū Ḥanīfah benadrukte dat nuttige kennis zich vertaalt in daden en karakter.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'من طلب العلم لله لم يضره قلة العمل',
        nl: 'Wie kennis zoekt omwille van Allah, wordt niet geschaad door een tekort aan daden, want de kennis zelf drijft hem tot handelen.',
        source: 'Overlevering van Abū Ḥanīfah',
        context: 'Abū Ḥanīfah leert dat oprechte intentie bij het zoeken van kennis automatisch tot goede daden leidt.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'التواضع خير من الكبر والصمت خير من الكلام فيما لا يعني',
        nl: 'Nederigheid is beter dan hoogmoed, en stilte is beter dan spreken over wat je niet aangaat.',
        source: 'Overlevering van Abū Ḥanīfah',
        context: 'Abū Ḥanīfah stond bekend om zijn terughoudendheid en bescheidenheid in omgang met anderen.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'لولا خوف الله ما تعلمت الفقه',
        nl: 'Zonder godsvrees had ik nooit het recht bestudeerd.',
        source: 'Overlevering via al-Khaṭīb al-Baghdādī',
        context: 'Abū Ḥanīfah beschouwde zijn juridische kennis als een uiting van taqwā, ontzag voor Allah.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'خير الناس من نفع الناس',
        nl: 'De beste der mensen is degene die het nuttigst is voor de mensen.',
        source: 'Overlevering van Abū Ḥanīfah',
        context: 'Abū Ḥanīfah leefde dit principe door zijn enorme bijdragen aan de islamitische jurisprudentie.',
        scholar: 'Imām Abū Ḥanīfah'
    },
    {
        type: 'scholar',
        ar: 'استقيموا ولا تختلفوا فإن الاختلاف هلاك',
        nl: 'Wees standvastig en verdeeld niet, want verdeeldheid is ondergang.',
        source: 'Overlevering van Abū Ḥanīfah',
        context: 'Abū Ḥanīfah pleitte voor eenheid onder de moslims en waarschuwde tegen sektarisme.',
        scholar: 'Imām Abū Ḥanīfah'
    },

    // ========== Ibn 'Aṭā'illāh al-Iskandarī (19-27) ==========
    {
        type: 'scholar',
        ar: 'من علامة الاعتماد على العمل نقصان الرجاء عند وجود الزلل',
        nl: 'Een teken dat je op je eigen daden steunt, is dat je hoop afneemt wanneer je een misstap begaat.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh leert dat ware hoop op Allah niet afhangt van eigen prestaties.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'ما أردت همة سالك أن تقف عندما كشف لها',
        nl: 'De aspiratie van de reiziger naar Allah wil nooit halt houden bij wat hem onthuld is.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh beschrijft de nooit eindigende reis van de ziel naar de oneindige Waarheid.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'أنت حر مما أنت عنه آيس وعبد لما أنت فيه طامع',
        nl: 'Je bent vrij van datgene waarop je de hoop hebt opgegeven, en slaaf van datgene waarnaar je verlangt.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh onthult hoe gehechtheid de ziel gevangen houdt.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'ربما فتح لك باب الطاعة وما فتح لك باب القبول',
        nl: 'Soms wordt de deur van gehoorzaamheid voor je geopend, maar niet de deur van aanvaarding.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh waarschuwt dat uiterlijke aanbidding zonder innerlijke oprechtheid niet voldoende is.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'إلهي كيف أخيب وأنت أملي',
        nl: 'Mijn God, hoe kan ik teleurgesteld worden terwijl U mijn hoop bent?',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Een innig gebed van Ibn \'Aṭā\'illāh dat het diepe vertrouwen in Allah uitdrukt.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'لا تترك الذكر لعدم حضورك مع الله فيه لأن غفلتك عن وجود ذكره أشد من غفلتك في وجود ذكره',
        nl: 'Laat de dhikr niet na omdat je er niet met je hart bij aanwezig bent, want je onachtzaamheid zonder dhikr is erger dan je onachtzaamheid tijdens dhikr.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh moedigt aan om altijd dhikr te doen, zelfs als de concentratie ontbreekt.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'إذا فتح لك وجهة من التعرف فلا تبال معها إن قل عملك',
        nl: 'Wanneer een weg van Godsherkenning voor je geopend wordt, maak je dan niet druk als je daden weinig zijn.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh leert dat innerlijke herkenning van Allah waardevoller is dan uiterlijke hoeveelheid van daden.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'ما طلبت شيئاً وكان الله مطلبك إلا أتاك كل شيء',
        nl: 'Je hebt niets gezocht waarbij Allah je werkelijke doel was, of alles kwam naar je toe.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh laat zien dat wie Allah zoekt, alles vindt wat hij nodig heeft.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },
    {
        type: 'scholar',
        ar: 'من وجد ثمرة عمله عاجلاً فهو دليل على وجود القبول آجلاً',
        nl: 'Wie snel de vruchten van zijn daad ervaart, vindt daarin een teken van aanvaarding in het hiernamaals.',
        source: 'Al-Ḥikam al-\'Aṭā\'iyyah',
        context: 'Ibn \'Aṭā\'illāh wijst op de innerlijke vreugde na een goede daad als teken van goddelijke acceptatie.',
        scholar: 'Ibn \'Aṭā\'illāh al-Iskandarī'
    },

    // ========== Jalāl al-Dīn al-Rūmī (28-36) ==========
    {
        type: 'scholar',
        ar: '',
        nl: 'De wond is de plek waar het Licht je binnentreedt.',
        source: 'Dīwān-e Shams-e Tabrīzī',
        context: 'Rūmī leert dat lijden en gebrokenheid de ziel openen voor goddelijk licht.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Stilte is de taal van God; al het andere is een gebrekkige vertaling.',
        source: 'Dīwān-e Shams-e Tabrīzī',
        context: 'Rūmī wijst op de beperktheid van woorden en de diepte van innerlijke stilte.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Zoek niet naar liefde buiten jezelf; je bent zelf een bron van liefde.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī herinnert eraan dat de goddelijke liefde reeds in het hart van de mens geplaatst is.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Wat je zoekt, zoekt jou ook.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī beschrijft de wederzijdse aantrekking tussen de zoeker en de Gezochte.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Er is een stem die geen woorden gebruikt. Luister.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī nodigt uit tot het luisteren naar de stille stem van het hart en de goddelijke fluistering.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Laat je niet misleiden door de schoonheid van de wereld; zij is slechts een schaduw van de schoonheid van de Schepper.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī moedigt aan om achter de schoonheid van de schepping de Schepper te zien.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Het hart is als een tuin. Wied de onkruiden van jaloezie, hebzucht en haat, en plant de zaden van liefde.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī gebruikt de metafoor van een tuin om de innerlijke zuivering te beschrijven.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Gisteren ben ik slim geweest, daarom wilde ik de wereld veranderen. Vandaag ben ik wijs, daarom verander ik mezelf.',
        source: 'Dīwān-e Shams-e Tabrīzī',
        context: 'Rūmī laat zien dat ware transformatie begint bij de innerlijke verandering van de mens zelf.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },
    {
        type: 'scholar',
        ar: '',
        nl: 'Wees als een boom: laat de dorre bladeren los en vertrouw op de nieuwe die zullen komen.',
        source: 'Mathnawī-ye Ma\'nawī',
        context: 'Rūmī vergelijkt het loslaten van het oude met het vertrouwen op Gods vernieuwende kracht.',
        scholar: 'Jalāl al-Dīn al-Rūmī'
    },

    // ========== Imām al-Nawawī (37-45) ==========
    {
        type: 'scholar',
        ar: 'أول العلم الصمت والثاني الاستماع والثالث الحفظ والرابع العمل والخامس نشره',
        nl: 'Het begin van kennis is stilte, dan luisteren, dan onthouden, dan ernaar handelen, en tot slot het verspreiden ervan.',
        source: 'Al-Majmū\' Sharḥ al-Muhadhdhab',
        context: 'Al-Nawawī beschrijft de vijf trappen van het verwerven van kennis in de juiste volgorde.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'ينبغي لحامل القرآن أن يكون أرفع الناس خلقاً',
        nl: 'De drager van de Koran behoort het edelste karakter onder de mensen te hebben.',
        source: 'Al-Tibyān fī Ādāb Ḥamalat al-Qur\'ān',
        context: 'Al-Nawawī verbindt de omgang met de Koran direct aan morele verfijning.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'الذكر محبوب في جميع الأحوال',
        nl: 'Gedenking van Allah is bemind in alle omstandigheden.',
        source: 'Al-Adhkār',
        context: 'Al-Nawawī moedigt aan om in elke toestand Allah te gedenken, zonder uitzondering.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'من داوم على الأذكار فتح الله له أبواب المعارف',
        nl: 'Wie volhardt in de gedenkingen, voor hem opent Allah de deuren van diepe kennis.',
        source: 'Al-Adhkār',
        context: 'Al-Nawawī legt een verband tussen constante dhikr en het ontvangen van spiritueel inzicht.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'الصبر نصف الإيمان والشكر نصفه الآخر',
        nl: 'Geduld is de helft van het geloof, en dankbaarheid de andere helft.',
        source: 'Sharḥ Ṣaḥīḥ Muslim',
        context: 'Al-Nawawī vat de hele geloofsbeleving samen in twee pijlers: geduld en dankbaarheid.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'الإخلاص روح العبادة',
        nl: 'Oprechtheid is de ziel van de aanbidding.',
        source: 'Riyāḍ al-Ṣāliḥīn',
        context: 'Al-Nawawī benadrukt dat zonder zuivere intentie elke daad van aanbidding leeg is.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'أحب الأعمال إلى الله أدومها وإن قلّ',
        nl: 'De meest geliefde daden bij Allah zijn de meest constante, ook al zijn ze gering.',
        source: 'Riyāḍ al-Ṣāliḥīn',
        context: 'Al-Nawawī leert het belang van regelmaat boven incidentele grootse inspanningen.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'التواضع لا يزيد العبد إلا رفعة',
        nl: 'Nederigheid doet de dienaar slechts toenemen in verhevenheid.',
        source: 'Sharḥ Ṣaḥīḥ Muslim',
        context: 'Al-Nawawī legt uit dat ware nederigheid de mens verheft in de ogen van Allah.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },
    {
        type: 'scholar',
        ar: 'خير الزاد التقوى',
        nl: 'De beste proviand is godsbewustzijn.',
        source: 'Al-Adhkār',
        context: 'Al-Nawawī herinnert eraan dat taqwā de belangrijkste voorziening is voor de reis door dit leven.',
        scholar: 'Imām Yaḥyā ibn Sharaf al-Nawawī'
    },

    // ========== Imām al-Ḥaddād (46-54) ==========
    {
        type: 'scholar',
        ar: 'من أراد أن يصل إلى الله فليلزم الذكر',
        nl: 'Wie tot Allah wil komen, laat hem zich vastklampen aan de gedenking.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād beschouwt dhikr als de directste weg naar de nabijheid van Allah.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'لا تغتر بطول الأمل فإن الموت يأتي بغتة',
        nl: 'Laat je niet misleiden door lange verwachtingen, want de dood komt onverwachts.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād spoort aan om elk moment te benutten, wetende dat het leven eindig is.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'من عرف الله أحبه ومن أحبه أطاعه',
        nl: 'Wie Allah kent, heeft Hem lief, en wie Hem liefheeft, gehoorzaamt Hem.',
        source: 'Al-Naṣā\'iḥ al-Dīniyyah',
        context: 'Al-Ḥaddād beschrijft de natuurlijke keten van kennis, liefde en gehoorzaamheid.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'أصل كل خير الرضا بالله',
        nl: 'De oorsprong van alle goeds is tevredenheid met Allah.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād plaatst riḍā (tevredenheid met Gods beschikking) als fundament van alle deugden.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'إذا أردت أن يفتح الله قلبك فأكثر من الاستغفار',
        nl: 'Als je wilt dat Allah je hart opent, vermeerder dan het vragen om vergiffenis.',
        source: 'Al-Naṣā\'iḥ al-Dīniyyah',
        context: 'Al-Ḥaddād leert dat istighfār de sleutel is tot het openen van het hart.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'لا يستقيم حال العبد إلا بملازمة الأوراد',
        nl: 'De toestand van de dienaar wordt niet recht zonder het naleven van zijn dagelijkse gebeden en recitaties.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād benadrukt het belang van een dagelijks geestelijk programma van awrād.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'أعظم الجهاد مجاهدة النفس',
        nl: 'De grootste strijd is de strijd tegen het eigen ego.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād leert dat de innerlijke jihād tegen de nafs de moeilijkste en meest waardevolle strijd is.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'اليقين نور يقذفه الله في قلب من يشاء',
        nl: 'Zekerheid is een licht dat Allah werpt in het hart van wie Hij wil.',
        source: 'Al-Naṣā\'iḥ al-Dīniyyah',
        context: 'Al-Ḥaddād beschrijft yaqīn als een goddelijk geschenk dat niet door eigen inspanning alleen bereikt wordt.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },
    {
        type: 'scholar',
        ar: 'من حفظ لسانه حفظ دينه',
        nl: 'Wie zijn tong behoedt, behoedt zijn geloof.',
        source: 'Risālat al-Mu\'āwanah',
        context: 'Al-Ḥaddād waarschuwt voor de verwoestende kracht van onbedachtzaam spreken.',
        scholar: 'Imām \'Abdallāh ibn \'Alawī al-Ḥaddād'
    },

    // ========== Al-Ḥasan al-Baṣrī (55-63) ==========
    {
        type: 'scholar',
        ar: 'ما نظرت ببصري ولا نطقت بلساني ولا بطشت بيدي حتى أنظر أعلى طاعة أم على معصية',
        nl: 'Ik kijk niet met mijn ogen, spreek niet met mijn tong, en grijp niet met mijn hand, zonder eerst te overwegen of het gehoorzaamheid of ongehoorzaamheid is.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī was beroemd om zijn extreme waakzaamheid over elke daad.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'يا ابن آدم إنك ما دمت في صلاتك فأنت تقرع باب الملك',
        nl: 'O zoon van Ādam, zolang je in gebed bent, klop je op de deur van de Koning.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī beschrijft het gebed als een directe audiëntie bij Allah.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'المؤمن يصبح حزيناً ويمسي حزيناً لأنه بين مخافتين',
        nl: 'De gelovige wordt \'s ochtends bedroefd wakker en gaat \'s avonds bedroefd slapen, want hij bevindt zich tussen twee angsten: een zonde die voorbij is en een levenstijd die rest.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī beschrijft het constante bewustzijn van de gelovige over zijn verantwoordelijkheid.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'الزهد في الدنيا أن لا تأسى على ما فاتك ولا تفرح بما آتاك',
        nl: 'Onthechting van de wereld is dat je niet treurt om wat je gemist hebt en niet juicht om wat je gekregen hebt.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī definieert zuhd als innerlijke evenwichtigheid tegenover winst en verlies.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'الدنيا حلم والآخرة يقظة',
        nl: 'De wereld is een droom en het hiernamaals is het ontwaken.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī herinnert eraan dat het aardse leven vergankelijk en illusoir is.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'أدركت أقواماً ما كان أحدهم يأخذ من الدنيا إلا ما يقيم به صلبه',
        nl: 'Ik heb mensen meegemaakt die van de wereld slechts namen wat hun lichaam overeind hield.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī verwijst naar de vroomheid van de vroege generatie moslims.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'لا يزال العبد بخير ما كان له واعظ من نفسه',
        nl: 'De dienaar bevindt zich in goede staat zolang hij een vermaner in zichzelf heeft.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī benadrukt het belang van innerlijke zelfreflectie als moreel kompas.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'إن المؤمن قوام على نفسه يحاسب نفسه لله',
        nl: 'De gelovige houdt zichzelf standvastig ter verantwoording omwille van Allah.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī staat bekend als een van de grondleggers van muḥāsabat al-nafs (zelfevaluatie).',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },
    {
        type: 'scholar',
        ar: 'من خاف الله أخاف الله منه كل شيء',
        nl: 'Wie Allah vreest, Allah laat alles hem vrezen. En wie de mensen vreest, Allah laat hem alles vrezen.',
        source: 'Overlevering van al-Ḥasan al-Baṣrī',
        context: 'Al-Ḥasan al-Baṣrī leert dat ware godsvrees bevrijding brengt van alle andere angsten.',
        scholar: 'Al-Ḥasan al-Baṣrī'
    },

    // ========== Ibrāhīm ibn Adham (64-72) ==========
    {
        type: 'scholar',
        ar: 'تركنا الدنيا قبل أن تتركنا',
        nl: 'Wij hebben de wereld verlaten voordat zij ons verliet.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham, die zijn koninkrijk opgaf voor het geestelijke pad, belichaamt ware onthechting.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'لو علم الملوك ما نحن فيه من السرور لجالدونا عليه بالسيوف',
        nl: 'Als koningen wisten welk geluk wij ervaren, zouden zij ons ervoor met zwaarden bevechten.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham beschrijft de innerlijke vreugde die wereldlijke rijkdom ver overtreft.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'ما صدق الله عبد أحب الشهرة',
        nl: 'Niet oprecht tegenover Allah is de dienaar die van bekendheid houdt.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham waarschuwt dat het verlangen naar roem en erkenning de oprechtheid ondermijnt.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'الجوع يميت القلب كما يميت الكثير من الطعام',
        nl: 'Honger kan het hart doden, net zoals te veel eten dat doet. De balans is de weg.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham pleit voor matigheid in alle zaken, ook in ascese.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'من أراد التوبة فليخرج من المظالم وليدع المعاصي',
        nl: 'Wie berouw wil tonen, laat hem onrecht rechtzetten en zonden nalaten.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham beschrijft oprecht berouw als een daad, niet slechts een gevoel.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'الزهد ثلاثة أصناف زهد فرض وزهد فضل وزهد سلامة',
        nl: 'Onthechting kent drie soorten: verplichte onthechting, verdienstelijke onthechting, en onthechting die veiligheid brengt.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham classificeert zuhd in gradaties, wat getuigt van zijn genuanceerde spiritualiteit.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'ما ذقت لذة العيش حتى تركت ما لا يعنيني',
        nl: 'Ik heb de zoetheid van het leven pas geproefd toen ik liet wat mij niet aanging.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham leert dat innerlijke vrede komt door zich te richten op het essentiële.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'من صبر نال ومن قنع استغنى',
        nl: 'Wie geduld heeft, bereikt zijn doel. Wie tevreden is met wat hij heeft, wordt waarlijk rijk.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham verbindt geduld en tevredenheid met ware innerlijke rijkdom.',
        scholar: 'Ibrāhīm ibn Adham'
    },
    {
        type: 'scholar',
        ar: 'أفضل الأعمال سلامة الصدر وسخاء النفس',
        nl: 'De beste daden zijn een zuiver hart en een vrijgevige ziel.',
        source: 'Overlevering van Ibrāhīm ibn Adham',
        context: 'Ibrāhīm ibn Adham benadrukt dat innerlijke zuiverheid en vrijgevigheid de kern van vroomheid vormen.',
        scholar: 'Ibrāhīm ibn Adham'
    },

    // ========== Rābi'ah al-'Adawiyyah (73-81) ==========
    {
        type: 'scholar',
        ar: 'إلهي إن كنت أعبدك خوفاً من نارك فأحرقني فيها وإن كنت أعبدك طمعاً في جنتك فاحرمني منها',
        nl: 'Mijn God, als ik U aanbid uit angst voor het Vuur, verbrand mij erin. En als ik U aanbid uit verlangen naar het Paradijs, ontzeg het mij.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah\'s beroemdste gebed drukt de zuiverste vorm van liefde voor Allah uit, vrij van hoop en vrees.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'حبي لله شغلني عن حب سواه',
        nl: 'Mijn liefde voor Allah heeft mij zo in beslag genomen dat er geen ruimte is voor liefde voor iets anders.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah al-\'Adawiyyah wordt beschouwd als een van de grootste mystici van de liefde voor Allah.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'ما عبدته خوفاً ولا رجاء ولكن حباً له',
        nl: 'Ik heb Hem niet aanbeden uit angst of hoop, maar uit pure liefde voor Hem.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah belichaamt het station van zuivere goddelijke liefde, onvoorwaardelijk en onvermengd.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'الصبر يضيء ولا يحرق',
        nl: 'Geduld verlicht zonder te verbranden.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah vergelijkt geduld met een zacht licht dat de ziel verwarmt zonder pijn.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'استغفارنا يحتاج إلى استغفار',
        nl: 'Ons vragen om vergiffenis heeft zelf vergiffenis nodig.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah wijst op de gebrekkigheid van onze aanbidding en de noodzaak van diepere oprechtheid.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'القلب الذي لا يكون فيه نور فليس بقلب',
        nl: 'Een hart zonder licht erin is geen hart.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah definieert het ware hart als dat wat verlicht is door de nabijheid van Allah.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'اللهم أغرقني في بحر محبتك',
        nl: 'O Allah, laat mij verdrinken in de zee van Uw liefde.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Een smeekbede van Rābi\'ah die haar totale overgave aan de goddelijke liefde uitdrukt.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'من لم يجد حلاوة الذكر في قلبه فليتهم نفسه',
        nl: 'Wie de zoetheid van gedenking niet in zijn hart voelt, laat hem zichzelf beschuldigen.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah leert dat het ontbreken van spirituele smaak een teken is van innerlijke nalatigheid.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },
    {
        type: 'scholar',
        ar: 'لا تكثر من الشكوى فتنسى نعم الله عليك',
        nl: 'Klaag niet te veel, opdat je de gunsten van Allah over jou niet vergeet.',
        source: 'Overlevering van Rābi\'ah al-\'Adawiyyah',
        context: 'Rābi\'ah herinnert eraan dat klagen het zicht op zegeningen vertroebelt.',
        scholar: 'Rābi\'ah al-\'Adawiyyah'
    },

    // ========== Imām al-Shāfi'ī (82-90) ==========
    {
        type: 'scholar',
        ar: 'شكوت إلى وكيع سوء حفظي فأرشدني إلى ترك المعاصي',
        nl: 'Ik klaagde bij Wakī\' over mijn slechte geheugen, en hij adviseerde mij om zonden te laten.',
        source: 'Dīwān al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī verbindt intellectuele helderheid aan morele zuiverheid in deze beroemde verzen.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'ما تواضع أحد لله إلا رفعه الله',
        nl: 'Niemand is nederig geweest omwille van Allah, of Allah verhief hem.',
        source: 'Overlevering van al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī leert dat ware nederigheid altijd beloond wordt met verhevenheid bij Allah.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'رضا الناس غاية لا تدرك',
        nl: 'De tevredenheid van de mensen is een doel dat nooit bereikt wordt.',
        source: 'Dīwān al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī bevrijdt de gelovige van het nutteloze streven naar goedkeuring van anderen.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'من جلس مع الناس ولم يصبر على أذاهم فليس بعاقل',
        nl: 'Wie met mensen omgaat maar geen geduld heeft met hun last, is niet verstandig.',
        source: 'Overlevering van al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī beschouwt geduld met de tekortkomingen van anderen als een teken van ware wijsheid.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'ما ناظرت أحداً إلا تمنيت أن يظهر الحق على لسانه',
        nl: 'Ik heb nooit met iemand gedebatteerd zonder te wensen dat de waarheid via zijn tong zou verschijnen.',
        source: 'Overlevering van al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī toont dat het in een debat om de waarheid moet gaan, niet om winnen.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'إذا خفت على عملك العجب فانظر رضا من تطلب وفي أي ثواب ترغب',
        nl: 'Als je vreest voor zelfingenomenheid over je daden, bedenk dan wiens tevredenheid je zoekt en welke beloning je wenst.',
        source: 'Dīwān al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī biedt een praktisch middel tegen \'ujb (zelfingenomenheid) door herinnering aan de grootheid van Allah.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'لا يكمل المرء حتى يؤثر دينه على هواه',
        nl: 'De mens wordt pas volmaakt wanneer hij zijn geloof verkiest boven zijn begeerten.',
        source: 'Overlevering van al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī stelt dat geestelijke rijpheid komt wanneer geloof de begeerten overstijgt.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'العلم ما نفع لا ما حفظ',
        nl: 'Ware kennis is wat baat brengt, niet wat slechts bewaard wordt in het geheugen.',
        source: 'Dīwān al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī benadrukt dat de waarde van kennis ligt in de toepassing ervan.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },
    {
        type: 'scholar',
        ar: 'من أحب أن يفتح الله قلبه فعليه بالخلوة وقلة الأكل ومجانبة السفهاء',
        nl: 'Wie wil dat Allah zijn hart opent, laat hem afzondering zoeken, matig eten, en dwazen vermijden.',
        source: 'Overlevering van al-Shāfi\'ī',
        context: 'Al-Shāfi\'ī geeft praktische adviezen voor geestelijke opening en innerlijke rust.',
        scholar: 'Imām Muḥammad ibn Idrīs al-Shāfi\'ī'
    },

    // ========== 'Umar ibn al-Khaṭṭāb (91-99) ==========
    {
        type: 'scholar',
        ar: 'حاسبوا أنفسكم قبل أن تحاسبوا',
        nl: 'Roep jezelf ter verantwoording voordat je ter verantwoording wordt geroepen.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar ibn al-Khaṭṭāb, de tweede khalief, legde de basis voor het concept van muḥāsabah (zelfevaluatie).',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'لا تنظر إلى صغر الذنب ولكن انظر إلى عظمة من عصيت',
        nl: 'Kijk niet naar de kleinheid van de zonde, maar naar de grootheid van Degene tegen wie je ongehoorzaam was.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar leert dat elke zonde serieus is vanwege de grootsheid van Allah.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'تعلموا العلم وتعلموا للعلم السكينة والحلم',
        nl: 'Leer kennis, en leer bij die kennis kalmte en zachtmoedigheid.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar verbindt het verwerven van kennis met het ontwikkelen van een kalm en mild karakter.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'من كثر كلامه كثر خطؤه',
        nl: 'Wie veel praat, maakt veel fouten.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar waarschuwt voor de gevaren van buitensporig spreken.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'ما أعطي عبد بعد الإسلام خيراً من أخ صالح',
        nl: 'Aan geen dienaar is na de islam iets beters geschonken dan een rechtschapen broeder.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar benadrukt de onschatbare waarde van oprecht gezelschap op het pad naar Allah.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'أعقل الناس أعذرهم للناس',
        nl: 'De verstandigste onder de mensen is degene die het meest verontschuldigend is tegenover anderen.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar leert dat ware intelligentie zich toont in het zoeken van excuses voor andermans fouten.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'نحن قوم أعزنا الله بالإسلام فمهما ابتغينا العزة بغيره أذلنا الله',
        nl: 'Wij zijn een volk dat Allah heeft vereerd door de islam. Wanneer wij eer zoeken buiten de islam, zal Allah ons vernederen.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar herinnert eraan dat ware waardigheid voortkomt uit geloof en gehoorzaamheid aan Allah.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'كفى بالمرء إثماً أن يحدث بكل ما سمع',
        nl: 'Het is genoeg als zonde voor een mens dat hij alles doorvertelt wat hij hoort.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar waarschuwt voor het klakkeloos verspreiden van informatie zonder verificatie.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },
    {
        type: 'scholar',
        ar: 'اللهم إني أعوذ بك من جلد الفاجر وعجز الثقة',
        nl: 'O Allah, ik zoek mijn toevlucht bij U tegen de brutaliteit van de zondaar en de zwakte van de vertrouweling.',
        source: 'Overlevering van \'Umar ibn al-Khaṭṭāb',
        context: '\'Umar bad om beschermd te worden tegen zowel verdorvenheid als onvermogen.',
        scholar: '\'Umar ibn al-Khaṭṭāb'
    },

    // ========== 'Alī ibn Abī Ṭālib (100-108) ==========
    {
        type: 'scholar',
        ar: 'الناس نيام فإذا ماتوا انتبهوا',
        nl: 'De mensen slapen, en wanneer zij sterven, worden zij wakker.',
        source: 'Overlevering van \'Alī ibn Abī Ṭālib',
        context: '\'Alī ibn Abī Ṭālib, de vierde khalief, vergelijkt het aardse leven met een slaap waaruit de dood ons wekt.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'قيمة كل امرئ ما يحسنه',
        nl: 'De waarde van ieder mens is datgene waarin hij uitblinkt.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī leert dat elk mens een unieke waarde heeft die bepaald wordt door zijn talenten en deugden.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'لا تكن عبد غيرك وقد جعلك الله حراً',
        nl: 'Wees geen slaaf van een ander terwijl Allah je vrij heeft geschapen.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī roept op tot geestelijke vrijheid en onafhankelijkheid van anderen dan Allah.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'العلم خير من المال لأن العلم يحرسك وأنت تحرس المال',
        nl: 'Kennis is beter dan rijkdom, want kennis beschermt jou, terwijl jij rijkdom moet beschermen.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī beargumenteert de superioriteit van kennis boven materieel bezit.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'من كثر حياؤه كثر وقاره',
        nl: 'Wie veel bescheidenheid bezit, bezit veel waardigheid.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī verbindt innerlijke bescheidenheid (ḥayā\') met uiterlijke waardigheid.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'أفضل العبادة انتظار الفرج',
        nl: 'De beste aanbidding is het wachten op verlichting van Allah.',
        source: 'Overlevering van \'Alī ibn Abī Ṭālib',
        context: '\'Alī leert dat geduldig vertrouwen op Allah\'s uitweg een verheven vorm van aanbidding is.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'خالطوا الناس مخالطة إن متم بكوا عليكم وإن عشتم حنوا إليكم',
        nl: 'Ga zo met de mensen om dat wanneer je sterft, zij om je huilen, en wanneer je leeft, zij naar je verlangen.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī moedigt aan tot het bouwen van oprechte, liefdevolle relaties met medemensen.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'إن القلوب تمل كما تمل الأبدان فابتغوا لها طرائف الحكمة',
        nl: 'De harten worden moe zoals de lichamen moe worden, dus zoek voor hen verfrissende wijsheid.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī erkent dat het hart variatie nodig heeft en gevoed moet worden met wijsheid.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },
    {
        type: 'scholar',
        ar: 'من نصب نفسه للناس إماماً فعليه أن يبدأ بتعليم نفسه قبل تعليم غيره',
        nl: 'Wie zichzelf als leider voor de mensen opstelt, laat hij beginnen met het onderwijzen van zichzelf voordat hij anderen onderwijst.',
        source: 'Nahj al-Balāghah',
        context: '\'Alī benadrukt dat leiderschap begint bij zelfontwikkeling en het goede voorbeeld.',
        scholar: '\'Alī ibn Abī Ṭālib'
    },

    // ========== Al-Junayd al-Baghdādī (109-116) ==========
    {
        type: 'scholar',
        ar: 'التصوف أن يميتك الحق عنك ويحييك به',
        nl: 'Taṣawwuf is dat de Waarheid je doet sterven aan jezelf en je doet herleven door Hem.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd, de meester van de Baghdādī school, definieert taṣawwuf als spirituele dood en wedergeboorte.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'طريقنا مضبوط بالكتاب والسنة',
        nl: 'Ons pad is gebonden aan het Boek en de Soennah.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd benadrukt dat authentieke taṣawwuf altijd geworteld is in de Koran en de Profetische traditie.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'العارف من نطق عن حالك وأنت ساكت',
        nl: 'De werkelijk wetende is degene die jouw toestand verwoordt terwijl jij zwijgt.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd beschrijft de spirituele meester als iemand die het onuitgesproken van de leerling doorziet.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'الإخلاص سر بين الله وبين العبد',
        nl: 'Oprechtheid is een geheim tussen Allah en Zijn dienaar.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd leert dat ware ikhlāṣ onzichtbaar is voor anderen en alleen Allah kent de werkelijke intentie.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'أشرف المجالس وأعلاها الجلوس مع الفكرة في ميدان التوحيد',
        nl: 'De edelste en verhevenste bijeenkomst is het zitten in contemplatie op het veld van de Goddelijke Eenheid.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd plaatst de contemplatie over tawḥīd boven alle andere vormen van bijeenkomst.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'من لم يحفظ القرآن ولم يكتب الحديث لا يقتدى به في هذا الأمر',
        nl: 'Wie de Koran niet uit het hoofd kent en de hadith niet heeft bestudeerd, mag in deze zaak niet gevolgd worden.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd stelt dat een spiritueel leider eerst gevestigd moet zijn in de religieuze wetenschappen.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'التوحيد إفراد القدم عن الحدث',
        nl: 'Tawḥīd is het onderscheiden van het Eeuwige van het tijdelijke.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd geeft een diepzinnige definitie van Gods eenheid als het erkennen van het onderscheid tussen Schepper en schepping.',
        scholar: 'Al-Junayd al-Baghdādī'
    },
    {
        type: 'scholar',
        ar: 'الخوف يحجزك عن المعاصي والرجاء يبعثك على الطاعات',
        nl: 'Vrees weerhoudt je van zonden, en hoop drijft je tot gehoorzaamheid.',
        source: 'Overlevering van al-Junayd al-Baghdādī',
        context: 'Al-Junayd beschrijft het evenwicht tussen vrees en hoop als drijvende krachten op het spirituele pad.',
        scholar: 'Al-Junayd al-Baghdādī'
    },

    // ========== Dhū al-Nūn al-Miṣrī (117-121) ==========
    {
        type: 'scholar',
        ar: 'ما رأيت شيئاً إلا رأيت الله قبله وبعده ومعه',
        nl: 'Ik heb niets gezien zonder Allah ervoor, erna en ermee te zien.',
        source: 'Overlevering van Dhū al-Nūn al-Miṣrī',
        context: 'Dhū al-Nūn al-Miṣrī, de grote Egyptische mysticus, beschrijft een staat van voortdurend goddelijk bewustzijn.',
        scholar: 'Dhū al-Nūn al-Miṣrī'
    },
    {
        type: 'scholar',
        ar: 'المعرفة على ثلاثة أوجه معرفة التوحيد ومعرفة الحجة ومعرفة صفات الوحدانية',
        nl: 'Godskennis heeft drie aspecten: kennis van de eenheid, kennis van het bewijs, en kennis van de eigenschappen van de Enige.',
        source: 'Overlevering van Dhū al-Nūn al-Miṣrī',
        context: 'Dhū al-Nūn classificeert ma\'rifah in drie niveaus van diepte en inzicht.',
        scholar: 'Dhū al-Nūn al-Miṣrī'
    },
    {
        type: 'scholar',
        ar: 'التوبة من الذنوب توبة العوام والتوبة من الغفلة توبة الخواص',
        nl: 'Berouw van zonden is het berouw van gewone mensen; berouw van onachtzaamheid is het berouw van de uitverkorenen.',
        source: 'Overlevering van Dhū al-Nūn al-Miṣrī',
        context: 'Dhū al-Nūn maakt onderscheid tussen verschillende niveaus van berouw naargelang de spirituele rang.',
        scholar: 'Dhū al-Nūn al-Miṣrī'
    },
    {
        type: 'scholar',
        ar: 'علامة المحبة أن تكون موافقاً لحبيبك في كل حال',
        nl: 'Het teken van liefde is dat je je Geliefde volgt in elke toestand.',
        source: 'Overlevering van Dhū al-Nūn al-Miṣrī',
        context: 'Dhū al-Nūn definieert goddelijke liefde als volledige harmonie met de wil van de Geliefde.',
        scholar: 'Dhū al-Nūn al-Miṣrī'
    },
    {
        type: 'scholar',
        ar: 'من علامات العارف أن يزداد تواضعاً كلما ازداد علماً',
        nl: 'Een teken van de wetende is dat hij in nederigheid toeneemt naarmate hij in kennis toeneemt.',
        source: 'Overlevering van Dhū al-Nūn al-Miṣrī',
        context: 'Dhū al-Nūn leert dat ware kennis van Allah altijd gepaard gaat met toenemende bescheidenheid.',
        scholar: 'Dhū al-Nūn al-Miṣrī'
    }
];

    // ======================================================
    // APP LOGIC (wordt samengevoegd met WISDOMS data)
    // ======================================================

    // Interleave: quran, hadith, scholar, quran, hadith, scholar...
    var WISDOMS = [];
    var maxLen = Math.max(WISDOMS_QURAN.length, WISDOMS_HADITH.length, WISDOMS_SCHOLAR.length);
    for (var w = 0; w < maxLen; w++) {
        if (w < WISDOMS_QURAN.length)   WISDOMS.push(WISDOMS_QURAN[w]);
        if (w < WISDOMS_HADITH.length)  WISDOMS.push(WISDOMS_HADITH[w]);
        if (w < WISDOMS_SCHOLAR.length) WISDOMS.push(WISDOMS_SCHOLAR[w]);
    }

    // Day of year (1-366)
    function getDayOfYear(date) {
        var start = new Date(date.getFullYear(), 0, 0);
        var diff = date - start;
        return Math.floor(diff / 86400000);
    }

    function getWisdomForDate(date) {
        var day = getDayOfYear(date);
        return WISDOMS[(day - 1) % WISDOMS.length];
    }

    // DOM refs
    var dateLabel   = document.getElementById('dateLabel');
    var typeBadge   = document.getElementById('typeBadge');
    var arabicText  = document.getElementById('arabicText');
    var dutchText   = document.getElementById('dutchText');
    var sourceText  = document.getElementById('sourceText');
    var scholarName = document.getElementById('scholarName');
    var contextText = document.getElementById('contextText');
    var wisdomCard  = document.getElementById('wisdomCard');
    var prevBtn     = document.getElementById('prevBtn');
    var nextBtn     = document.getElementById('nextBtn');
    var shareBtn    = document.getElementById('shareBtn');
    var todayBtn    = document.getElementById('todayBtn');

    var currentDate = new Date();

    var months = ['januari','februari','maart','april','mei','juni',
                  'juli','augustus','september','oktober','november','december'];

    function formatDate(d) {
        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    }

    var typeLabels = { quran: 'Qur\u2019\u0101n', hadith: '\u1E24ad\u012Bth', scholar: 'Geleerde' };

    function renderCard() {
        var wisdom = getWisdomForDate(currentDate);
        var today = new Date();
        var isToday = currentDate.toDateString() === today.toDateString();

        dateLabel.textContent = formatDate(currentDate);
        typeBadge.textContent = typeLabels[wisdom.type] || wisdom.type;
        typeBadge.className = 'type-badge type-' + wisdom.type;

        if (wisdom.ar) {
            arabicText.textContent = wisdom.ar;
            arabicText.style.display = '';
        } else {
            arabicText.style.display = 'none';
        }

        dutchText.textContent = wisdom.nl;
        sourceText.textContent = '\u2014 ' + wisdom.source;

        if (wisdom.scholar) {
            scholarName.textContent = wisdom.scholar;
            scholarName.style.display = '';
        } else {
            scholarName.style.display = 'none';
        }

        contextText.textContent = wisdom.context;
        wisdomCard.className = 'wisdom-card accent-' + wisdom.type;
        todayBtn.style.display = isToday ? 'none' : '';
    }

    // Navigation
    function navigate(delta) {
        currentDate = new Date(currentDate.getTime() + delta * 86400000);
        renderCard();
        gcEvent('dagelijkse-wijsheid/navigatie', delta > 0 ? 'volgende' : 'vorige');
    }

    prevBtn.addEventListener('click', function () { navigate(-1); });
    nextBtn.addEventListener('click', function () { navigate(1); });
    todayBtn.addEventListener('click', function () {
        currentDate = new Date();
        renderCard();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });

    // Canvas export
    shareBtn.addEventListener('click', function () {
        generateShareImage(getWisdomForDate(currentDate));
    });

    function generateShareImage(wisdom) {
        var W = 1080, H = 1350;
        var canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        var ctx = canvas.getContext('2d');

        // Background gradient
        var grad = ctx.createLinearGradient(0, 0, 0, H);
        if (wisdom.type === 'quran') {
            grad.addColorStop(0, '#1a6b4e');
            grad.addColorStop(1, '#0d3b2a');
        } else if (wisdom.type === 'hadith') {
            grad.addColorStop(0, '#2c5282');
            grad.addColorStop(1, '#1a365d');
        } else {
            grad.addColorStop(0, '#744210');
            grad.addColorStop(1, '#4a2c0a');
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Decorative border
        ctx.strokeStyle = 'rgba(255,255,255,.12)';
        ctx.lineWidth = 2;
        var m = 60;
        ctx.strokeRect(m, m, W - m * 2, H - m * 2);

        // Type badge
        ctx.fillStyle = 'rgba(255,255,255,.5)';
        ctx.font = '600 26px "DM Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText((typeLabels[wisdom.type] || '').toUpperCase(), W / 2, 140);

        // Arabic text
        var nlStartY = 400;
        if (wisdom.ar) {
            ctx.fillStyle = '#ffffff';
            ctx.font = '48px "AlQalamQuranMajeed", serif';
            ctx.textAlign = 'center';
            ctx.direction = 'rtl';
            nlStartY = wrapText(ctx, wisdom.ar, W / 2, 280, W - 200, 68) + 60;
            ctx.direction = 'ltr';
        }

        // Dutch text
        ctx.fillStyle = 'rgba(255,255,255,.88)';
        ctx.font = 'italic 34px "Playfair Display", Georgia, serif';
        ctx.textAlign = 'center';
        var sourceY = wrapText(ctx, '\u201C' + wisdom.nl + '\u201D', W / 2, nlStartY, W - 180, 50) + 50;

        // Source
        ctx.fillStyle = 'rgba(255,255,255,.45)';
        ctx.font = '24px "DM Sans", sans-serif';
        ctx.fillText('\u2014 ' + wisdom.source, W / 2, sourceY);

        // Scholar name
        if (wisdom.scholar) {
            ctx.fillStyle = 'rgba(255,255,255,.55)';
            ctx.font = '500 26px "DM Sans", sans-serif';
            ctx.fillText(wisdom.scholar, W / 2, sourceY + 40);
        }

        // Logo
        var logo = document.getElementById('brandLogo');
        if (logo && logo.complete && logo.naturalHeight > 0) {
            var logoH = 50;
            var logoW = logo.naturalWidth * (logoH / logo.naturalHeight);
            ctx.globalAlpha = 0.5;
            ctx.drawImage(logo, (W - logoW) / 2, H - 130, logoW, logoH);
            ctx.globalAlpha = 1;
        }

        // Export
        canvas.toBlob(function (blob) {
            if (!blob) return;
            if (navigator.share && navigator.canShare) {
                var file = new File([blob], 'dagelijkse-wijsheid.png', { type: 'image/png' });
                var shareData = { files: [file], title: 'Dagelijkse Wijsheid' };
                if (navigator.canShare(shareData)) {
                    navigator.share(shareData).catch(function () {});
                } else {
                    downloadBlob(blob);
                }
            } else {
                downloadBlob(blob);
            }
            gcEvent('dagelijkse-wijsheid/gedeeld', wisdom.type);
        }, 'image/png');
    }

    function downloadBlob(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'dagelijkse-wijsheid.png';
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
    }

    // Wrap text helper — returns Y after last line
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        for (var i = 0; i < words.length; i++) {
            var test = line + words[i] + ' ';
            if (ctx.measureText(test).width > maxWidth && i > 0) {
                ctx.fillText(line.trim(), x, y);
                line = words[i] + ' ';
                y += lineHeight;
            } else {
                line = test;
            }
        }
        ctx.fillText(line.trim(), x, y);
        return y;
    }

    // GoatCounter
    function gcEvent(path, title) {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({ path: path, title: title || '', event: true });
        }
    }

    // Init
    gcEvent('dagelijkse-wijsheid/app-gestart', 'App gestart');
    renderCard();

})();
