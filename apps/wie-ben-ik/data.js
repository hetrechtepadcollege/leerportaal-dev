const PERSONEN = [
  // ── PROFETEN ──────────────────────────────────────────────────────────────
  {
    id: 1,
    naam: "Ādam",
    arabisch: "آدَم",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik ben de eerste van mijn soort — er was niemand vóór mij.",
      "Ik werd geschapen zonder vader of moeder.",
      "Mijn eerste woning was het mooiste oord dat er bestaat.",
      "Mijn vrouw en ik maakten een fout, maar Allah vergaf ons.",
      "Ik daalde neer op aarde en begon een nieuw hoofdstuk van de mensheidsgeschiedenis.",
      "Ik ben de vader van de gehele mensheid en de eerste profeet."
    ],
    biografie: "Ādam (عليه السلام) is de eerste mens en eerste profeet. Allah schiep hem uit klei, blies Zijn geest in hem en liet hem wonen in het Paradijs. Na zijn daling naar aarde werd hij de stamvader van alle mensen. Allah onderwees hem de namen van alle dingen — een teken van de kennis waarmee mensen zijn begunstigd.",
    alternatieven: ["adam", "ādam"]
  },
  {
    id: 2,
    naam: "Nūḥ",
    arabisch: "نُوح",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik riep mijn volk 950 jaar lang op tot het geloof.",
      "Weinigen luisterden — de meerderheid spotte met mij.",
      "Op bevel van Allah bouwde ik een groot vaartuig op het droge.",
      "Mijn eigen zoon weigerde aan boord te stappen.",
      "De aarde werd overspoeld door een enorme vloed.",
      "Ik redde de gelovigen en van elk diersoort een paar."
    ],
    biografie: "Nūḥ (عليه السلام) was een profeet die bijna tien eeuwen zijn volk opriep tot het geloof. Zijn geduld en standvastigheid zijn spreekwoordelijk in de Koran. Allah beval hem een ark te bouwen waarmee de gelovigen en de diersoorten de grote vloed overleefden.",
    alternatieven: ["nuh", "noach", "noe"]
  },
  {
    id: 3,
    naam: "Ibrāhīm",
    arabisch: "إِبْرَاهِيم",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik groeide op in een samenleving die afgoden aanbad.",
      "Als jongeman vernielde ik de afgoden van mijn volk, behalve de grootste.",
      "Ik werd in een vuur gegooid, maar Allah maakte het koel en veilig voor mij.",
      "Ik verliet mijn vrouw en zuigeling achter in een kale woestijnvallei op bevel van Allah.",
      "Ik bouwde samen met mijn zoon het heiligste huis op aarde.",
      "Allah noemde mij Zijn 'Khalīl' — Zijn innige vriend."
    ],
    biografie: "Ibrāhīm (عليه السلام) staat bekend als 'Khalīlullāh' — de vriend van Allah. Hij brak met het afgodendom van zijn volk, overleefde het vuur en migreerde naar verschillende landen. Samen met zijn zoon Ismāʿīl bouwde hij de Kaʿba in Mekka. De hadj volgt tot op de dag van vandaag zijn voetsporen.",
    alternatieven: ["ibrahim", "abraham", "ibrahiem"]
  },
  {
    id: 4,
    naam: "Yūsuf",
    arabisch: "يُوسُف",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik was de geliefdste zoon van mijn vader, maar dat wekte jaloezie bij mijn broers.",
      "Mijn broers gooiden mij in een put en verkochten mij als slaaf naar Egypte.",
      "Ik werd verleid door de vrouw van mijn meester maar weigerde, en belandde in de gevangenis.",
      "Ik kon dromen uitleggen — een gave die mij uiteindelijk ver bracht.",
      "Ik werd tot minister van Egypte benoemd en vergaf mijn broers.",
      "Mijn verhaal wordt in de Koran 'de mooiste van alle verhalen' genoemd."
    ],
    biografie: "Yūsuf (عليه السلام) doorstond verraad, slavernij, verlokking en gevangenis, maar bleef standvastig. Allah verhief hem tot een hoge positie in Egypte. Zijn verhaal, volledig opgenomen in Sūrat Yūsuf, geldt als de mooiste vertelling in de Koran — een les over geduld, vergiffenis en Allahs planning.",
    alternatieven: ["yusuf", "jozef", "yoesuf"]
  },
  {
    id: 5,
    naam: "Mūsā",
    arabisch: "مُوسَى",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Als baby werd ik in een mand op de rivier gelegd door mijn moeder.",
      "Ik groeide op in het paleis van de farao — dezelfde tiran die mijn volk onderdrukte.",
      "Allah sprak rechtstreeks tot mij vanuit een brandende struik op de berg.",
      "Met mijn staf sloeg ik op zee en het water spleet in tweeën.",
      "Ik ontving de Tora op de berg Sīnā.",
      "Ik leidde de Banī Isrā'īl uit de slavernij in Egypte naar de vrijheid."
    ],
    biografie: "Mūsā (عليه السلام) is de meest genoemde profeet in de Koran. Hij groeide op als weeskind in het paleis van de farao en werd later door Allah uitgekozen om zijn volk te bevrijden. Allah sprak rechtstreeks met hem, wat hem de titel 'Kalīmullāh' gaf — degene met wie Allah sprak.",
    alternatieven: ["musa", "mozes", "moosa"]
  },
  {
    id: 6,
    naam: "Dāwūd",
    arabisch: "دَاوُود",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Als jonge man versloeg ik een reusachtige krijger met slechts een steen.",
      "Ik had een stem zo mooi dat bergen en vogels met mij meezong.",
      "Allah leerde mij ijzer te bewerken met mijn handen.",
      "Ik ontving een heilig geschrift — de Zabūr (Psalmen).",
      "Ik was tegelijk profeet én rechtvaardige koning.",
      "Ik ben de vader van de profeet Sulaymān."
    ],
    biografie: "Dāwūd (عليه السلام) was profeet en koning van de Banī Isrā'īl. Als jongeman versloeg hij de reus Jālūt (Goliath). Allah gaf hem een bijzondere stem waarmee hij de Psalmen (Zabūr) reciteerde, en leerde hem het bewerken van ijzer. Hij is de vader van profeet Sulaymān.",
    alternatieven: ["dawud", "david", "dawood"]
  },
  {
    id: 7,
    naam: "Sulaymān",
    arabisch: "سُلَيْمَان",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik begreep de taal van dieren en insecten.",
      "De wind en de djinn waren aan mij onderworpen.",
      "Een mier waarschuwde zijn soortgenoten toen mijn leger naderde.",
      "Een koningin van ver reisde naar mij vanwege mijn beroemde wijsheid.",
      "Ik was de rijkste en machtigste profeet-koning die ooit heeft geleefd.",
      "Ik ben de zoon van de profeet Dāwūd."
    ],
    biografie: "Sulaymān (عليه السلام) was profeet en machtig koning. Allah gaf hem heerschappij over mensen, djinn en dieren, en de gave om de taal van dieren te begrijpen. De koningin van Saba, Bilqīs, bekeerde zich na een ontmoeting met hem. Hij staat symbool voor goddelijk gegeven wijsheid en macht.",
    alternatieven: ["sulayman", "salomo", "soeleiman"]
  },
  {
    id: 8,
    naam: "Yūnus",
    arabisch: "يُونُس",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik verliet mijn volk in Ninive zonder toestemming van Allah.",
      "Op een schip werd er loting gehouden en ik verloor.",
      "Ik werd overboord gegooid en door een grote vis ingeslikt.",
      "In de diepte van de zee bad ik: 'Er is geen god dan U, verheven bent U, ik behoorde tot de onrechtplegers.'",
      "Mijn gebed werd verhoord en ik werd aan land gespoeld.",
      "Ik keerde terug naar mijn volk en zij bekeerden zich allemaal."
    ],
    biografie: "Yūnus (عليه السلام) was profeet die zijn volk verliet voor zijn toestemming van Allah. Na zijn avontuur in de buik van de vis keerde hij berouwvol terug. Zijn gebed in het donker — bekend als 'duʿā' Dhū al-Nūn' — wordt door moslims tot op de dag van vandaag gelezen in moeilijke tijden.",
    alternatieven: ["yunus", "jona", "jonas", "yoenoess"]
  },
  {
    id: 9,
    naam: "ʿĪsā",
    arabisch: "عِيسَى",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik werd geboren als een wonder — zonder vader.",
      "Als baby sprak ik al in de wieg om mijn moeder te verdedigen.",
      "Ik kon zieken genezen en blinden licht geven, met toestemming van Allah.",
      "Ik kon doden tot leven wekken, met toestemming van Allah.",
      "De Injīl werd aan mij geopenbaard.",
      "Ik ben niet gestorven maar door Allah omhooggeheven, en ik zal terugkeren."
    ],
    biografie: "ʿĪsā (عليه السلام) is een van de grootste profeten in de islam. Hij werd geboren uit de maagd Maryam als een teken van Allah. Hij verrichtte buitengewone wonderen en verkondigde het geloof in de Ene Allah. In de islamitische eschatologie zal hij terugkeren aan het einde der tijden.",
    alternatieven: ["isa", "jezus", "jesus", "iesa"]
  },
  {
    id: 10,
    naam: "Muḥammad",
    arabisch: "مُحَمَّد",
    eretitel: "صلى الله عليه وسلم",
    categorie: "Profeten",
    hints: [
      "Ik werd geboren als wees — mijn vader overleed voor mijn geboorte, mijn moeder toen ik zes was.",
      "Ik groeide op in Mekka en stond bekend als 'al-Amīn' — de betrouwbare.",
      "Op mijn veertigste ontving ik in de grot Ḥirā' de eerste woorden van de openbaring.",
      "Ik migreerde van Mekka naar Medina — dit markeert het begin van de islamitische kalender.",
      "In één nacht reisde ik van Mekka naar Jeruzalem en steeg ik op naar de hemelen.",
      "Ik ben de laatste profeet en mijn boodschap is voor alle mensen tot het einde der tijden."
    ],
    biografie: "Muḥammad ﷺ is de laatste en grootste profeet van Allah, gezonden als 'genade voor alle werelden'. Hij ontving de Koran in 23 jaar, stichtte de islamitische gemeenschap in Medina en liet een erfenis na van geloof, karakter en wijsheid die tot op de dag van vandaag honderden miljoenen mensen leidt.",
    alternatieven: ["muhammad", "mohammed", "mohammad", "profeet", "de profeet"]
  },

  // ── ṢAḤĀBA ───────────────────────────────────────────────────────────────
  {
    id: 11,
    naam: "Abū Bakr al-Ṣiddīq",
    arabisch: "أَبُو بَكْرٍ الصِّدِّيق",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was de beste vriend van de Profeet ﷺ gedurende zijn hele leven.",
      "Ik was de eerste volwassen vrije man die de islam omarmde.",
      "Ik vergezelde de Profeet ﷺ in de grot Thawr tijdens de gevaarlijkste nacht van de hidjra.",
      "De Profeet ﷺ zei: 'Als ik een innige vriend zou nemen, dan Abū Bakr.'",
      "Ik gaf bijna al mijn rijkdom weg voor de zaak van de islam.",
      "Na de dood van de Profeet ﷺ werd ik de eerste khalīfa van de moslims."
    ],
    biografie: "Abū Bakr al-Ṣiddīq (رضي الله عنه) was de trouwste metgezel van de Profeet ﷺ. Hij was de eerste vrije man die de islam omarmde en hield de jonge moslimgemeenschap samen na het overlijden van de Profeet. Als eerste khalīfa bestreed hij de afvalligheid (ridda) en begon hij met het verzamelen van de Koran.",
    alternatieven: ["abu bakr", "abu bakr al siddiq", "abu baker", "aboe bakr", "siddiq"]
  },
  {
    id: 12,
    naam: "ʿUmar ibn al-Khaṭṭāb",
    arabisch: "عُمَر بْن الخَطَّاب",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Vóór de islam was ik een van de felste tegenstanders van de moslims.",
      "Mijn bekering was zo krachtig dat de moslims daarna openlijk konden bidden bij de Kaʿba.",
      "Ik stond bekend om mijn ongekende rechtvaardigheidszin — ook tegenover mijn eigen familie.",
      "Ik sliep op een mat van palmblad terwijl ik over een wereldrijk heerste.",
      "Onder mijn leiding werden Syrië, Irak, Egypte en Perzië bevrijd.",
      "Ik was de tweede khalīfa en werd 'al-Fārūq' — de Onderscheider van waarheid en valsheid — genoemd."
    ],
    biografie: "ʿUmar ibn al-Khaṭṭāb (رضي الله عنه) was de tweede khalīfa van de moslims. Van felle tegenstander groeide hij uit tot een van de grootste leiders in de islamitische geschiedenis. Zijn leiderschap combineerde absolute rechtvaardigheid met militaire en bestuurlijke genialiteit. Hij breidde het islamitische rijk enorm uit.",
    alternatieven: ["umar", "omar", "oemar", "umar ibn al khattab"]
  },
  {
    id: 13,
    naam: "ʿUthmān ibn ʿAffān",
    arabisch: "عُثْمَان بْن عَفَّان",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Zelfs de engelen zouden bescheiden zijn tegenover mijn bescheidenheid, zo zei de Profeet ﷺ.",
      "Ik trouwde met twee dochters van de Profeet ﷺ, de een na de ander.",
      "Ik kocht een waterput en een uitbreiding van de Moskee van de Profeet ﷺ voor de moslims.",
      "Ik financierde een heel legerkamp — het 'leger van de nood' — uit eigen zak.",
      "Ik liet de Koran op één gezaghebbende standaard vastleggen en over het rijk verspreiden.",
      "Ik was de derde khalīfa en werd 'Dhū al-Nūrayn' — bezitter van twee lichten — genoemd."
    ],
    biografie: "ʿUthmān ibn ʿAffān (رضي الله عنه) was de derde khalīfa. Hij was een van de rijkste metgezellen maar gaf zijn bezit ruimhartig voor de islam. Zijn grootste nalatenschap is de standaardisatie van de Koran: hij liet één gezaghebbende versie vervaardigen en verspreiden, wat de eenheid van de tekst tot op heden bewaart.",
    alternatieven: ["uthman", "oethmaan", "othman", "uthman ibn affan"]
  },
  {
    id: 14,
    naam: "ʿAlī ibn Abī Ṭālib",
    arabisch: "عَلِيّ بْن أَبِي طَالِب",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik groeide op in het huishouden van de Profeet ﷺ vanaf mijn vroegste jeugd.",
      "Ik was de eerste jongen die de islam omarmde.",
      "Op de nacht van de hidjra sliep ik in het bed van de Profeet ﷺ als list tegen de vijanden.",
      "Ik trouwde met de dochter van de Profeet ﷺ.",
      "De Profeet ﷺ zei: 'Ik ben de stad van kennis en ʿAlī is haar poort.'",
      "Ik was de vierde en laatste van de rechtgeleidde khalīfa's."
    ],
    biografie: "ʿAlī ibn Abī Ṭālib (رضي الله عنه) was de neef en schoonzoon van de Profeet ﷺ, getrouwd met Fāṭima. Hij groeide op in het huis van de Profeet en was de eerste jongen die de islam omarmde. Als vierde khalīfa en groot geleerde staat hij centraal in zowel de Soennitische als Shī'ītische traditie.",
    alternatieven: ["ali", "ali ibn abi talib", "ali ibn abu talib", "hazrat ali"]
  },
  {
    id: 15,
    naam: "Abū Hurayra",
    arabisch: "أَبُو هُرَيْرَة",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik omarmde de islam pas laat — in het zevende jaar na de hidjra.",
      "Toch was ik zo'n trouwe aanwezige bij de Profeet ﷺ dat ik meer leerde dan wie ook.",
      "Mijn bijnaam verwijst naar een klein dier waarmee ik als kind speelde.",
      "Ik leed soms honger maar bleef de drempel van de Profeet ﷺ niet verlaten omwille van kennis.",
      "De Profeet ﷺ bad speciaal voor mijn geheugen.",
      "Meer dan 5.000 aḥādīth worden aan mij toegeschreven — ik ben de meest geciteerde verteller."
    ],
    biografie: "Abū Hurayra (رضي الله عنه) omarmde de islam laat maar was sindsdien onafscheidelijk van de Profeet ﷺ. Door zijn uitzonderlijke geheugen — waarvoor de Profeet ﷺ speciaal bad — overleverde hij meer aḥādīth dan welke andere metgezel ook. Zijn naam betekent letterlijk 'vader van het katje'.",
    alternatieven: ["abu hurayra", "abu hurairah", "abu huraira", "aboe hoerairah"]
  },
  {
    id: 16,
    naam: "ʿĀ'isha",
    arabisch: "عَائِشَة",
    eretitel: "رضي الله عنها",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was de dochter van de beste vriend van de Profeet ﷺ.",
      "De Profeet ﷺ zei dat ik van zijn vrouwen de meest geliefde bij hem was.",
      "Een valse beschuldiging werd over mij verspreid, maar Allah openbaarde mijn onschuld in de Koran.",
      "Na het overlijden van de Profeet ﷺ werd ik een van de grootste geleerden van de moslims.",
      "Ṣaḥāba reisden van ver om bij mij te leren.",
      "Ik ben de moeder van de gelovigen en een van de grootste overleveraars van aḥādīth."
    ],
    biografie: "ʿĀ'isha (رضي الله عنها) was echtgenote van de Profeet ﷺ en dochter van Abū Bakr. Ze was een van de meest geleerde mensen van haar tijd: ṣaḥāba kwamen bij haar studeren over fiqh, hadith en Koranuitleg. Ze overleverde duizenden aḥādīth en is tot op de dag van vandaag een van de belangrijkste bronnen in de islamitische wetenschappen.",
    alternatieven: ["aisha", "aishah", "ayesha", "aisja", "aisa"]
  },
  {
    id: 17,
    naam: "Bilāl ibn Rabāḥ",
    arabisch: "بِلَال بْن رَبَاح",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een slaaf van Abessinische afkomst in Mekka.",
      "Mijn meester martelde mij in de brandende woestijnzon vanwege mijn geloof, maar ik bleef volhouden.",
      "Abū Bakr kocht mij vrij.",
      "De Profeet ﷺ koos mij uit vanwege mijn bijzondere stem voor een unieke taak.",
      "Ik klom als eerste op het dak van de Kaʿba om de adhān te roepen na de bevrijding van Mekka.",
      "Ik ben de eerste muezzin van de islam — mijn stem riep de moslims vijf keer per dag op tot het gebed."
    ],
    biografie: "Bilāl ibn Rabāḥ (رضي الله عنه) was de eerste muezzin van de islam. Als slaaf van Abessinische afkomst doorstond hij zware martelingen zonder zijn geloof te verlaten. Zijn vrijkoop door Abū Bakr en zijn latere verheffing tot erepositie symboliseren de islamitische visie op gelijkwaardigheid — afkomst telt niet, vroomheid wel.",
    alternatieven: ["bilal", "bilaal", "bilal ibn rabah"]
  },
  {
    id: 18,
    naam: "Khālid ibn al-Walīd",
    arabisch: "خَالِد بْن الوَلِيد",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was aanvankelijk een van de gevaarlijkste tegenstanders van de moslims op het slagveld.",
      "Bij Uḥud was ik de veldheer die de moslims omsingelde en hun bijna een vernietigende slag toebracht.",
      "Na mijn bekering trok ik ten strijde aan de zijde van de islam.",
      "Ik leidde tientallen veldslagen zonder er ooit één te verliezen.",
      "De Profeet ﷺ gaf mij persoonlijk de eretitel 'Sayf Allāh al-Maslūl'.",
      "Ik ben 'het Getrokken Zwaard van Allah' — de ongeslagen veldheer van de vroege islam."
    ],
    biografie: "Khālid ibn al-Walīd (رضي الله عنه) was een van de grootste militaire genieën in de geschiedenis. Na zijn bekering tot de islam behaalde hij overwinningen in de Ridda-oorlogen, de verovering van Irak en Syrië. Zijn strategie bij de slag van Walaja en Ullays legde de basis voor de islamitische expansie.",
    alternatieven: ["khalid", "khalid ibn al walid", "khaled"]
  },
  {
    id: 19,
    naam: "Salmān al-Fārisī",
    arabisch: "سَلْمَان الفَارِسِيّ",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik werd geboren in Perzië als vuuraanbidder in een gegoede familie.",
      "Ik reisde jarenlang van christelijke geleerde naar geleerde, op zoek naar de ware godsdienst.",
      "Ik belandde als slaaf in Medina, waar ik de beschrijving van de laatste profeet herkende.",
      "De Profeet ﷺ hielp mij mijn vrijheid te kopen.",
      "Mijn idee om een diepe gracht rondom Medina te graven redde de stad van een enorme aanval.",
      "De Profeet ﷺ zei over mij: 'Salmān is van ons, de Ahl al-Bayt.'"
    ],
    biografie: "Salmān al-Fārisī (رضي الله عنه) legde een extraordinaire weg af van Perzisch vuuraanbidder naar geliefde metgezel van de Profeet ﷺ. Zijn idee voor de 'Gracht van Medina' (Khandaq) redde de stad van een beslissende aanslag. De Profeet ﷺ roemde hem als behorende tot de Ahl al-Bayt — zijn huishouden.",
    alternatieven: ["salman", "salman al farisi", "salman de pers"]
  },
  {
    id: 20,
    naam: "ʿAbdullāh ibn Masʿūd",
    arabisch: "عَبْد اللَّه بْن مَسْعُود",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de allereerste moslims en werd daarvoor zwaar gestraft.",
      "Ik was zo dicht bij de Profeet ﷺ dat ik zijn sandalen droeg en zijn geheimen bewaakte.",
      "Ik was de eerste die de Koran luidop reciteerde bij de Kaʿba voor de vijanden van de islam.",
      "De Profeet ﷺ luisterde zelf graag naar mijn Koranrecitatie.",
      "Ik ben een van de grootste autoriteiten in Koranuitleg, fiqh en hadith.",
      "Mijn erfenis vormde de basis waarop Abū Ḥanīfa zijn rechtsschool bouwde."
    ],
    biografie: "ʿAbdullāh ibn Masʿūd (رضي الله عنه) was een van de vroegste en meest geleerde metgezellen. De Profeet ﷺ zei dat moslims de Koran van vier mensen moesten leren — hij was de eerste. Zijn rechtsmethodologie werd de grondslag voor de Ḥanafī-school, via Ibrāhīm al-Nakhaʿī en Ḥammād ibn Abī Sulaymān.",
    alternatieven: ["ibn masud", "abdullah ibn masud", "ibn mes'oed"]
  },

  // ── FAMILIE VAN DE PROFEET ────────────────────────────────────────────────
  {
    id: 21,
    naam: "Khadīja al-Kubrā",
    arabisch: "خَدِيجَة الكُبْرَى",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was een succesvolle en gerespecteerde zakenvrouw in Mekka.",
      "Ik stelde zelf voor te trouwen — ik stuurde een boodschapper naar hem toe.",
      "Toen mijn man bevend thuiskwam na zijn eerste openbaring, omhelsde ik hem en geloofde hem direct.",
      "Ik was de eerste persoon ooit die de islam omarmde.",
      "Ik schonk al mijn rijkdom voor de zaak van de islam.",
      "Ik ben de eerste en meest geliefde echtgenote van de Profeet ﷺ — de moeder van zijn kinderen."
    ],
    biografie: "Khadīja al-Kubrā (رضي الله عنها) was de eerste persoon die de islam omarmde en de meest geliefde echtgenote van de Profeet ﷺ. Haar rijkdom, steun en liefde droegen de Profeet ﷺ in de zwaarste jaren van zijn missie. De Profeet ﷺ herdacht haar jarenlang na haar overlijden met grote eerbied en liefde.",
    alternatieven: ["khadija", "chadiedja", "khadijah", "khadija al kubra"]
  },
  {
    id: 22,
    naam: "Fāṭima al-Zahrā'",
    arabisch: "فَاطِمَة الزَّهْرَاء",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Mijn vader noemde mij 'een deel van hemzelf' — wie mij pijn doet, doet hem pijn.",
      "Ik trouwde met de neef en de meest geliefde jongeman bij mijn vader.",
      "Mijn twee zonen worden 'de leiders van de jongeren van het Paradijs' genoemd.",
      "Ik deelde al mijn etenswaren met gasten zelfs als ik zelf honger had.",
      "Ik stierf slechts maanden na mijn vader — de Profeet ﷺ.",
      "Ik ben de dochter van de Profeet ﷺ en moeder van Ḥasan en Ḥusayn."
    ],
    biografie: "Fāṭima al-Zahrā' (رضي الله عنها) is de meest geliefde dochter van de Profeet ﷺ en de moeder van Ḥasan en Ḥusayn. Ze staat symbool voor vroomheid, opoffering en liefde. Ze overleed enkele maanden na haar vader en is voor alle moslims een voorbeeld van waardigheid en toewijding aan Allah.",
    alternatieven: ["fatima", "fatimah", "faatima", "fatima al zahra"]
  },
  {
    id: 23,
    naam: "Ḥasan ibn ʿAlī",
    arabisch: "الحَسَن بْن عَلِيّ",
    eretitel: "رضي الله عنه",
    categorie: "Familie van de Profeet",
    hints: [
      "De Profeet ﷺ droeg mij als klein kind op zijn schouders tijdens het gebed.",
      "Mijn grootvader zei dat ik op hem leek.",
      "Na de dood van mijn vader erkenden tienduizenden moslims mij als khalīfa.",
      "Ik deed vrijwillig afstand van de macht om een bloedige oorlog onder moslims te voorkomen.",
      "De Profeet ﷺ noemde dat jaar een 'jaar van verzoening' — een profetie over mijn beslissing.",
      "Ik ben de kleinzoon van de Profeet ﷺ en een van de twee leiders van de jongeren van het Paradijs."
    ],
    biografie: "Ḥasan ibn ʿAlī (رضي الله عنه) was de oudste kleinzoon van de Profeet ﷺ. Na de moord op zijn vader ʿAlī deed hij afstand van het khalīfaat om de moslimgemeenschap te herenigen — precies zoals de Profeet ﷺ had voorspeld. Hij staat bekend om zijn grote gulheid en zijn diepe liefde voor vrede.",
    alternatieven: ["hasan", "hassan", "hasan ibn ali"]
  },
  {
    id: 24,
    naam: "Ḥusayn ibn ʿAlī",
    arabisch: "الحُسَيْن بْن عَلِيّ",
    eretitel: "رضي الله عنه",
    categorie: "Familie van de Profeet",
    hints: [
      "De Profeet ﷺ zei van mij: 'Ḥusayn is van mij en ik ben van Ḥusayn.'",
      "Ik weigerde trouw te zweren aan iemand van wie ik vond dat hij onrechtvaardig heerste.",
      "Ik reisde met mijn familie naar Irak op uitnodiging van mensen die mij later lieten vallen.",
      "Op de vlakte van Karbalā' stond ik met een kleine groep tegenover een groot leger.",
      "Mijn martelaarschap op de 10e Muḥarram is een van de meest ingrijpende gebeurtenissen in de islamitische geschiedenis.",
      "Ik ben de jongste kleinzoon van de Profeet ﷺ en zijn liefde voor mij was spreekwoordelijk."
    ],
    biografie: "Ḥusayn ibn ʿAlī (رضي الله عنه) was de jongste kleinzoon van de Profeet ﷺ. Zijn weigering om trouw te zweren aan Yazīd ibn Muʿāwiya en zijn martelaarschap bij Karbalā' (680 n.Chr.) zijn van grote historische en spirituele betekenis. Voor moslims wereldwijd symboliseert hij standvastigheid tegenover onrecht.",
    alternatieven: ["husayn", "hussein", "husain", "hussain", "husayn ibn ali"]
  },
  {
    id: 25,
    naam: "Ḥamza ibn ʿAbd al-Muṭṭalib",
    arabisch: "حَمْزَة بْن عَبْد المُطَّلِب",
    eretitel: "رضي الله عنه",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was de oom én de broer via zoogmoeder van de Profeet ﷺ.",
      "Ik omarmde de islam aanvankelijk uit woede nadat iemand de Profeet ﷺ had vernederd.",
      "Daarna groeide mijn geloof uit tot een rotsvaste overtuiging.",
      "Ik was de dapperste en sterkste strijder van de vroege moslims.",
      "Op de slag bij Uḥud viel ik als martelaar.",
      "De Profeet ﷺ noemde mij 'Sayyid al-Shuhadā'' — de meester der martelaren."
    ],
    biografie: "Ḥamza ibn ʿAbd al-Muṭṭalib (رضي الله عنه) was de sterkste en dapperste oom van de Profeet ﷺ. Zijn bekering gaf de jonge moslimgemeenschap kracht en bescherming. Bij Uḥud stierf hij als martelaar. De Profeet ﷺ treurde diep om zijn overlijden en gaf hem de eretitel 'meester der martelaren'.",
    alternatieven: ["hamza", "hamzah", "hamza ibn abd al muttalib"]
  },
  {
    id: 26,
    naam: "ʿAbbās ibn ʿAbd al-Muṭṭalib",
    arabisch: "العَبَّاس بْن عَبْد المُطَّلِب",
    eretitel: "رضي الله عنه",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was de oom van de Profeet ﷺ en behoorde tot dezelfde Hāshimitische clan.",
      "Ik beschermde de Profeet ﷺ in zijn vroege jaren, ook al was ik zelf toen nog geen moslim.",
      "Ik omarmde de islam tijdens of vlak voor de verovering van Mekka.",
      "De Profeet ﷺ respecteerde mij diep en droeg de moslims op mij te eren als zijn oom.",
      "Mijn nageslacht stichtte later een der machtigste dynastieën in de islamitische wereldgeschiedenis.",
      "De ʿAbbāsidische khalīfa's — die drie eeuwen regeerden — stammen van mij af."
    ],
    biografie: "ʿAbbās ibn ʿAbd al-Muṭṭalib (رضي الله عنه) was de oom van de Profeet ﷺ. Hij steunde de Profeet al vroeg, ook voor zijn bekering. Als stamvader van de ʿAbbāsidische dynastiek (750–1258 n.Chr.) speelt hij een centrale rol in de islamitische politieke geschiedenis.",
    alternatieven: ["abbas", "al-abbas", "abbas ibn abd al muttalib"]
  },
  {
    id: 27,
    naam: "Āmina bint Wahb",
    arabisch: "آمِنَة بِنْت وَهْب",
    eretitel: "",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was een dame uit een vooraanstaande familie in Mekka.",
      "Ik trouwde met ʿAbdullāh ibn ʿAbd al-Muṭṭalib.",
      "Mijn man overleed op een handelsreis voor de geboorte van mijn kind.",
      "Ik zorgde alleen voor mijn kind totdat hij zes jaar oud was.",
      "Ik stierf op een terugreis van Medina en werd begraven in al-Abwā'.",
      "Ik ben de moeder van de Profeet Muḥammad ﷺ."
    ],
    biografie: "Āmina bint Wahb was de moeder van de Profeet Muḥammad ﷺ. Ze verloor haar man voor de geboorte van haar kind en overleed zelf toen de Profeet ﷺ slechts zes jaar oud was. Haar leven was kort maar haar nalatenschap — de opvoeding van de laatste profeet — is eeuwigdurend.",
    alternatieven: ["amina", "aminah", "amina bint wahb"]
  },

  // ── TĀBIʿŪN ──────────────────────────────────────────────────────────────
  {
    id: 28,
    naam: "Ḥasan al-Baṣrī",
    arabisch: "الحَسَن البَصْرِيّ",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik werd geboren in Medina en groeide op in de kring van de ṣaḥāba.",
      "Ik vestigde mij in Baṣra en werd de grootste geleerde van mijn generatie.",
      "Mijn preken over de Hereafter en het belang van zelfbezonning waren berucht ontroerend.",
      "Grote geleerden na mij — zowel in fiqh als in spiritualiteit — bouwden op mijn erfenis.",
      "Ik word beschouwd als een sleutelfiguur in de vroege islamitische spirituele traditie.",
      "Ik ben een van de grootste tābiʿūn en een centrale schakel in de Ṣūfī-overleveringsketen."
    ],
    biografie: "Ḥasan al-Baṣrī (رحمه الله) was een van de grootste tābiʿūn. Hij groeide op in Medina in de kring van metgezellen en vestigde zich later in Baṣra. Zijn diepzinnige uitspraken over de vergankelijkheid van de wereld en de vreze Allah zijn tot op de dag van vandaag in omloop. Hij geldt als een grondlegger van islamitische spiritualiteit.",
    alternatieven: ["hasan al basri", "hasan basri", "hassan al-basri"]
  },
  {
    id: 29,
    naam: "ʿUmar ibn ʿAbd al-ʿAzīz",
    arabisch: "عُمَر بْن عَبْد العَزِيز",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik was een Omajjadische prins die opgroeide in weelde en luxe.",
      "Toen ik aan de macht kwam, stuurde ik al mijn eigen sieraden terug naar de staatskas.",
      "Ik zette familieleden weg die onrechtmatig verkregen rijkdom hadden.",
      "Tijdens mijn korte bewind was er bijna niemand meer die zakāt kon ontvangen — de armoede was zo gedaald.",
      "Ik heerste slechts twee jaar en veertig dagen, maar mijn naam staat in de geschiedenisboeken als de beste van mijn tijd.",
      "Ik word de vijfde rechtgeleide khalīfa genoemd en was een kleinzoon van ʿUmar ibn al-Khaṭṭāb."
    ],
    biografie: "ʿUmar ibn ʿAbd al-ʿAzīz (رحمه الله), ook wel 'ʿUmar II' genoemd, wordt door veel geleerden beschouwd als de vijfde rechtgeleide khalīfa. Zijn korte bewind (717-720 n.Chr.) werd gekenmerkt door ongekende rechtvaardigheid en soberheid. Hij keerde onrecht terug, verlaagde belastingen en verhoogde het welzijn van de bevolking.",
    alternatieven: ["umar ibn abd al aziz", "umar 2", "umar ii", "omar ibn abd al aziz"]
  },
  {
    id: 30,
    naam: "Saʿīd ibn al-Musayyib",
    arabisch: "سَعِيد بْن المُسَيَّب",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Mijn vader en grootvader waren beiden ṣaḥāba van de Profeet ﷺ.",
      "Ik stond bekend als de beste kenner van de uitspraken en beslissingen van ʿUmar ibn al-Khaṭṭāb.",
      "Ik verbleef bijna nooit buiten de moskee van de Profeet ﷺ — het was als mijn tweede thuis.",
      "Ik weigerde trouw te zweren aan een heerser die ik onwaardig achtte en werd daarvoor geslagen.",
      "Geleerden na mij beschreven mij als de grootste faqīh van Medina.",
      "Ik word universeel erkend als de grootste van alle tābiʿūn."
    ],
    biografie: "Saʿīd ibn al-Musayyib (رحمه الله) is de meest geprezen van alle tābiʿūn. Hij groeide op in Medina, leerde van de grote ṣaḥāba en werd een van de grondleggers van de Medinese rechtstraditie. Zijn standvastigheid tegenover politieke druk maakte hem een voorbeeld van geloofsonafhankelijkheid.",
    alternatieven: ["said ibn al musayyib", "sa'id ibn al-musayyib", "ibn musayyib"]
  },
  {
    id: 31,
    naam: "Ibrāhīm al-Nakhaʿī",
    arabisch: "إِبْرَاهِيم النَّخَعِيّ",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik groeide op in Kūfa, omringd door grote metgezellen en tābiʿūn.",
      "Ik was een leerling van ʿAlqama, die zelf een directe leerling was van ʿAbdullāh ibn Masʿūd.",
      "Ik was zo bescheiden dat ik mij verstopte als er bezoekers kwamen die ik niet kende.",
      "Mijn fiqh-methode benadrukte sterke redenering en analogieredenering.",
      "Ik was de leermeester van Ḥammād ibn Abī Sulaymān — die op zijn beurt Abū Ḥanīfa onderwees.",
      "Ik ben een cruciale schakel in de geleerdentketen die leidde tot de Ḥanafī-madhhab."
    ],
    biografie: "Ibrāhīm al-Nakhaʿī (رحمه الله) was de toonaangevende geleerde van Kūfa in zijn generatie. Via zijn leerling Ḥammād ibn Abī Sulaymān vormt hij de directe schakel tussen ʿAbdullāh ibn Masʿūd en Abū Ḥanīfa. Zijn methodologie van redenering en analogie heeft de Ḥanafī-school fundamenteel gevormd.",
    alternatieven: ["ibrahim al nakhai", "ibrahim nakha'i", "nakha'i"]
  },

  // ── GELEERDEN ─────────────────────────────────────────────────────────────
  {
    id: 32,
    naam: "Abū Ḥanīfa",
    arabisch: "أَبُو حَنِيفَة",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Kūfa in het jaar 80 na de hidjra, uit een Perzische familie.",
      "Ik begon als koopman in zijdestoffen, maar een geleerde wees mij de weg naar de kennis.",
      "Ik ontwikkelde een precieze methode om islamitisch recht af te leiden via redenering en analogie.",
      "Ik weigerde een ambt te aanvaarden van de kalief en werd daarvoor gevangengezet.",
      "Ik stierf in de gevangenis van Baghdād — het gerucht gaat dat ik vergiftigd werd.",
      "Ik ben de grondlegger van de grootste en meest verspreide rechtsschool in de islamitische wereld."
    ],
    biografie: "Abū Ḥanīfa al-Nuʿmān (رحمه الله) is de grondlegger van de Ḥanafī-madhhab, de meest verspreide van de vier grote rechtsscholen. Hij werd geboren in Kūfa, ontmoette een aantal ṣaḥāba en leerde van tābiʿūn. Zijn methode van systematisch juridisch redeneren legde de basis voor de islamitische rechtsgeleerdheid als wetenschap.",
    alternatieven: ["abu hanifa", "imam abu hanifa", "aboe hanifa", "al-nu'man", "nu'man ibn thabit"]
  },
  {
    id: 33,
    naam: "Abū Manṣūr al-Māturīdī",
    arabisch: "أَبُو مَنْصُور المَاتُرِيدِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Samarqand, in het huidige Oezbekistan, in de derde en vierde eeuw na de hidjra.",
      "Ik schreef uitgebreide werken ter verdediging van de orthodoxe islamitische geloofsleer.",
      "Mijn voornaamste werk heet 'Kitāb al-Tawḥīd' — het Boek van de Godseenheid.",
      "Ik bestreed rationalistisch-extremistische stromingen die de kern van het geloof ondermijnden.",
      "Ik wordt in één adem met al-Ashʿarī als de twee grote imams van de Soennitische theologie.",
      "De Ḥanafīs volgen in geloofsleer bijna unaniem mijn school — de Māturīdiyya."
    ],
    biografie: "Abū Manṣūr al-Māturīdī (رحمه الله) is een van de twee grote imams van de Soennitische geloofsleer. Zijn systematische verdediging van het orthodoxe geloof — met gebruik van logica en Koran/Soenna — vormt de geloofsbasis van de overgrote meerderheid van de Ḥanafī-moslims wereldwijd. Zijn school staat bekend als de Māturīdiyya.",
    alternatieven: ["maturidi", "al-maturidi", "maturidi imam", "abu mansur al maturidi"]
  },
  {
    id: 34,
    naam: "Abū Ḥāmid al-Ghazālī",
    arabisch: "أَبُو حَامِد الغَزَّالِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik was professor aan de beroemde Niẓāmiyya-academie in Baghdād — het meest prestieuze leerstoel van mijn tijd.",
      "Op het hoogtepunt van mijn roem verliet ik alles: mijn post, status en rijkdom.",
      "Ik doorstond een diepe spirituele crisis en reisde tien jaar lang als anoniem pelgrim.",
      "Ik schreef boeken over theologie, filosofie, fiqh én spirituele zelfontwikkeling.",
      "Mijn meesterwerk draagt de titel 'Iḥyā' ʿUlūm al-Dīn' — de Wederopbloei van de Religieuze Wetenschappen.",
      "Ik word 'Ḥujjat al-Islām' — het Bewijs van de Islam — genoemd."
    ],
    biografie: "Abū Ḥāmid al-Ghazālī (رحمه الله) is een van de invloedrijkste denkers in de islamitische geschiedenis. Zijn 'Iḥyā' ʿUlūm al-Dīn' verbindt islamitische wetenschappen met spirituele zelfontwikkeling en wordt tot op de dag van vandaag gelezen. Na zijn persoonlijke spirituele crisis keerde hij als een vernieuwd man terug.",
    alternatieven: ["ghazali", "al-ghazali", "imam ghazali", "abu hamid al ghazali"]
  },
  {
    id: 35,
    naam: "ʿAbd al-Qādir al-Jīlānī",
    arabisch: "عَبْد القَادِر الجِيلَانِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik reisde als jongeman van Jīlān (Iran) naar Baghdād, op zoek naar kennis.",
      "Ik volgde jarenlang een strenge spirituele training voordat ik publiekelijk begon te onderwijzen.",
      "Ik preekte voor duizenden mensen tegelijk — moslims én niet-moslims kwamen mij horen.",
      "Ik was zowel Ḥanbalī faqīh als diep spiritueel meester.",
      "Mijn nageslacht en leerlingen verspreidden mijn erfenis over de hele islamitische wereld.",
      "Ik ben de stichter van de Qādiriyya en word 'Ghawth al-Aʿẓam' — de grootste hulp — en 'Sulṭān al-Awliyā'' — de sultan der heiligen — genoemd."
    ],
    biografie: "ʿAbd al-Qādir al-Jīlānī (رحمه الله) was geleerde, prediker en spiritueel meester in twaalfde-eeuws Baghdād. Hij combineerde strenge fiqh-kennis met een diep spiritueel leven. De Qādiriyya-orde, opgericht in zijn naam, is een van de oudste en meest verspreide Ṣūfī-orden ter wereld.",
    alternatieven: ["abd al qadir al jilani", "abdul qadir gilani", "al-jilani", "ghaus al azam"]
  },
  {
    id: 36,
    naam: "Jalāl al-Dīn al-Rūmī",
    arabisch: "جَلَال الدِّين الرُّومِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Balkh (het huidige Afghanistan) maar groeide op in Anatolië.",
      "Ik was aanvankelijk een conventionele geleerde, totdat een mysterieuze derwisj mijn leven veranderde.",
      "Mijn verdriet en liefde vloeide over in duizenden verzen van sublieme poëzie.",
      "Mijn leerlingen dansten in cirkels als vorm van spirituele herinnering aan Allah.",
      "Mijn Masnawī wordt het 'Koran van het Perzisch' genoemd.",
      "Ik ben de meest vertaalde dichter ter wereld en mijn werk behoort tot de rijkste Ṣūfī-literatuur."
    ],
    biografie: "Jalāl al-Dīn al-Rūmī (رحمه الله) was een dertiende-eeuwse geleerde, dichter en spiritueel meester. Zijn ontmoeting met de mysticus Shams-i-Tabrīzī transformeerde hem. Zijn Masnawī — zes boeken lang — en zijn Dīwān-i-Shams zijn onsterfelijk. De Mawlawiyya-orde, die hij inspireerde, leeft voort tot op de dag van vandaag.",
    alternatieven: ["rumi", "al-rumi", "jalal al din rumi", "mawlana rumi", "mevlana"]
  },
  {
    id: 37,
    naam: "Ibn ʿĀbidīn",
    arabisch: "ابْن عَابِدِين",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Damascus, Syrië, in de negentiende eeuw.",
      "Ik studeerde de Ḥanafī-fiqh intensief vanaf jonge leeftijd en werd al vroeg als grote geleerde erkend.",
      "Ik schreef meer dan vijftig werken over fiqh, tafsīr, ḥadīth en andere islamitische wetenschappen.",
      "Mijn stijl combineerde diepgaande analyse met praktische toepasbaarheid.",
      "Geleerden over de hele wereld raadplegen mijn werk als eindoordeel in fiqhkwesties.",
      "Mijn 'Radd al-Muḥtār' is het meest gezaghebbende Ḥanafī-fiqhwerk uit de moderne tijd."
    ],
    biografie: "Muḥammad Amīn Ibn ʿĀbidīn (رحمه الله) is de meest gezaghebbende Ḥanafī-geleerde van de moderne periode. Zijn encyclopedische 'Radd al-Muḥtār ʿalā al-Durr al-Mukhtār' is het standaardwerk voor Ḥanafī-fiqh wereldwijd. Hij leefde in Damascus (1784-1836) en combineerde traditionele kennis met toegepaste juridische analyse.",
    alternatieven: ["ibn abidin", "ibn abideen", "ibn 'abidin"]
  },

  // ── PROFETEN (uitbreiding) ─────────────────────────────────────────────
  {
    id: 38,
    naam: "Idrīs",
    arabisch: "إِدْرِيس",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik leefde vóór de profeet Nūḥ — in de vroegste tijden van de mensheid.",
      "Ik was een van de eerste mensen die konden schrijven en rekenen.",
      "Ik stond bekend om mijn grote wijsheid en kennis.",
      "Allah verhief mij naar een bijzonder hoge plek.",
      "De Profeet ﷺ ontmoette mij op de vierde hemel tijdens zijn nachtelijke hemelreis.",
      "Ik ben de profeet die door Allah levend werd opgeheven — de Koran noemt mij een man van geduld en rechtschapenheid."
    ],
    biografie: "Idrīs (عليه السلام) was een vroege profeet die leefde vóór Nūḥ. Hij wordt in de Koran geprezen als een geduldige en rechtvaardige man en door Allah verheven naar een hoge rang. Tijdens de Miʿrāj ontmoette de Profeet ﷺ hem op de vierde hemel.",
    alternatieven: ["idris", "henoch", "enoch"]
  },
  {
    id: 39,
    naam: "Hūd",
    arabisch: "هُود",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Mijn volk was trots op hun lichamelijke kracht en bouwde enorme bouwwerken.",
      "Ik behoorde zelf tot het volk waarop ik werd gestuurd.",
      "Ik riep hen op om de afgoden te verlaten en alleen Allah te aanbidden.",
      "Ze lachten mij uit: 'Niemand is sterker dan wij!'",
      "Een vernietigende wind trof hen gedurende zeven nachten en acht aaneengesloten dagen.",
      "Ik ben de profeet die naar het volk van ʿĀd werd gestuurd, woonachtig in het Arabische schiereiland."
    ],
    biografie: "Hūd (عليه السلام) was een profeet gestuurd naar het volk van ʿĀd, een machtig volk in het zuiden van Arabië dat bekendstond om zijn imposante bouwwerken. Toen zij zijn boodschap verwierpen, trof hen een verwoestende storm gedurende zeven nachten en acht dagen. Hūd en de gelovigen werden gered.",
    alternatieven: ["hud", "hood"]
  },
  {
    id: 40,
    naam: "Ṣāliḥ",
    arabisch: "صَالِح",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Mijn volk houwde paleizen uit in de rotsen van de bergen.",
      "Allah gaf hen een kameel als levend teken — zij mochten haar niet kwaad doen.",
      "Drie dagen na het doden van de kameel zou de straf komen, waarschuwde ik hen.",
      "Ze doodden haar toch — en precies drie dagen later trof hen een vernietigend geluid.",
      "Mijn volk, Thamūd, wordt vermeld in zowel de Koran als in historische inscripties.",
      "Ik ben de profeet die naar Thamūd werd gestuurd — hun ruïnes zijn vandaag nog te zien in al-Ḥijr (Madā'in Ṣāliḥ), Saoedi-Arabië."
    ],
    biografie: "Ṣāliḥ (عليه السلام) was een profeet gestuurd naar het volk van Thamūd in Arabië. Het wonderteken van de kameel verwierpen zij door het dier te doden. Als gevolg werden zij getroffen door een vernietigend geluid. Hun rotsstad is vandaag nog zichtbaar in wat nu Madā'in Ṣāliḥ heet.",
    alternatieven: ["salih", "saleh"]
  },
  {
    id: 41,
    naam: "Lūṭ",
    arabisch: "لُوط",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik was een neef van de profeet Ibrāhīm en migreerde samen met hem.",
      "Ik werd gestuurd naar een stad waarvan de inwoners openlijk ernstige zonden begingen.",
      "Engelen kwamen in de gedaante van knappe jongemannen bij mij op bezoek.",
      "Ik verliet de stad met mijn dochters op bevel van de engelen — nog vóór de ochtend.",
      "Mijn vrouw keek achterom, ondanks de waarschuwing, en verstarde.",
      "Mijn stad werd omgekeerd en bedolven onder stenen regen — een totale vernietiging."
    ],
    biografie: "Lūṭ (عليه السلام) was een profeet die leefde in de buurt van de Dode Zee. Hij riep zijn volk tevergeefs op het rechte pad. Toen engelen hem bezochten met het bevel de stad te verlaten, werd de stad omgekeerd en vernietigd. Zijn verhaal staat uitvoerig beschreven in de Koran.",
    alternatieven: ["lut", "lot"]
  },
  {
    id: 42,
    naam: "Ismāʿīl",
    arabisch: "إِسْمَاعِيل",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Als zuigeling werd ik met mijn moeder achtergelaten in een droge, lege vallei.",
      "Mijn moeder rende heen en weer tussen twee heuvels op zoek naar water.",
      "Onder mijn voetje sprong een bron op die nooit meer is opgedroogd.",
      "Mijn vader kreeg in een droom de opdracht mij te offeren — maar Allah redde mij.",
      "Ik hielp mijn vader het heiligste huis op aarde bouwen.",
      "Ik ben de eerste zoon van Ibrāhīm, geboren uit Hājar, en de stamvader van de Arabieren."
    ],
    biografie: "Ismāʿīl (عليه السلام) is de eerstgeboren zoon van Ibrāhīm (عليه السلام) uit Hājar. Als baby sprong bij zijn voetje de Zamzambron op. Samen met zijn vader bouwde hij de Kaʿba. Hij werd de stamvader van de Arabieren, en via zijn nakomelingen verscheen de Profeet Muḥammad ﷺ.",
    alternatieven: ["ismail", "ismaiel", "ismael"]
  },
  {
    id: 43,
    naam: "Isḥāq",
    arabisch: "إِسْحَاق",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Mijn geboorte was een wonder — mijn moeder was al hoog bejaard.",
      "Engelen brachten mijn ouders het blijde nieuws van mijn komst.",
      "Mijn moeder lachte van verbazing toen zij het hoorde.",
      "Ik ben de vader van de profeet Yaʿqūb, die later ook Isrā'īl werd.",
      "Ik groeide op naast mijn broer Ismāʿīl bij onze vader Ibrāhīm.",
      "Ik ben de tweede zoon van Ibrāhīm — mijn moeder was Sāra, en via mij stamt de lijn van Banī Isrā'īl."
    ],
    biografie: "Isḥāq (عليه السلام) was de zoon van Ibrāhīm en Sāra, geboren als een wonder op hoge leeftijd. Hij was de vader van Yaʿqūb (Israël) en grootvader van de twaalf stammen. Via zijn nakomelingschap kwamen vele profeten, waaronder Mūsā, Dāwūd, Sulaymān en ʿĪsā.",
    alternatieven: ["ishaq", "isaak", "isaac"]
  },
  {
    id: 44,
    naam: "Yaʿqūb",
    arabisch: "يَعْقُوب",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik ben de zoon van Isḥāq en kleinzoon van Ibrāhīm.",
      "Ik kreeg de naam Isrā'īl — mijn nageslacht droeg deze naam als erenaam.",
      "Ik had twaalf zonen die de stammen van de Banī Isrā'īl werden.",
      "Mijn geliefdste zoon verdween — en ik rouwde zo intens dat mijn ogen wittten van verdriet.",
      "Ik weigerde de hoop op zijn terugkeer op te geven: 'Ik klaag mijn verdriet aan Allah.'",
      "Ik herenigde mij uiteindelijk met mijn verloren gewaande zoon in Egypte."
    ],
    biografie: "Yaʿqūb (عليه السلام), ook bekend als Isrā'īl, was de vader van de twaalf stammen. Zijn leven wordt gekenmerkt door diepe beproeving — het verlies van zijn geliefde zoon Yūsuf — en uiteindelijk hereniging. Zijn standvastigheid en vertrouwen in Allah zijn een voorbeeld in de Koran.",
    alternatieven: ["yaqub", "jakob", "jacob", "israel"]
  },
  {
    id: 45,
    naam: "Zakariyyā",
    arabisch: "زَكَرِيَّا",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik zorgde als priester voor de jonge Maryam in de tempel.",
      "Elke keer als ik bij haar binnenkwam, trof ik bij haar voedsel waarvan ik de herkomst niet kende.",
      "Dat wonder wekte in mij een diep verlangen: ook ik bad tot Allah voor een kind.",
      "Ik was al oud en mijn vrouw was onvruchtbaar — maar ik verloor de hoop niet.",
      "Als teken dat mijn gebed verhoord was, zou ik drie dagen niet kunnen spreken.",
      "Ik ben de vader van de profeet Yaḥyā — een kind dat Allah mij schonk als antwoord op mijn smeekgebed."
    ],
    biografie: "Zakariyyā (عليه السلام) was een profeet en priester die in de tempel van Jeruzalem diende. Zijn zorg voor Maryam en zijn gebed om een kind op hoge leeftijd worden in de Koran uitvoerig beschreven. Allah schonk hem als antwoord zijn zoon Yaḥyā.",
    alternatieven: ["zakariyya", "zacharias", "zachariah"]
  },
  {
    id: 46,
    naam: "Yaḥyā",
    arabisch: "يَحْيَى",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Mijn geboorte was een wonder — mijn vader was oud en mijn moeder onvruchtbaar.",
      "Allah gaf mij persoonlijk mijn naam — er was niemand vóór mij die zo heette.",
      "Als kind al gaf Allah mij wijsheid en vroomheid.",
      "Ik riep mensen op tot berouw en reinheid en doopte hen in de rivier.",
      "Ik werd gedood door een tirannieke heerser die ik had bekritiseerd.",
      "Ik ben de neef van de profeet ʿĪsā en de zoon van de profeet Zakariyyā."
    ],
    biografie: "Yaḥyā (عليه السلام) was een profeet die riep tot berouw en gerechtigheid. Hij was de neef van ʿĪsā en de zoon van Zakariyyā. Allah gaf hem zijn naam persoonlijk, wat aangeeft hoe bijzonder hij was. Hij werd als martelaar gedood door de tirannieke heerser Herodes.",
    alternatieven: ["yahya", "johannes de doper", "john the baptist"]
  },
  {
    id: 47,
    naam: "Ayyūb",
    arabisch: "أَيُّوب",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik was rijk, gezond en omringd door een groot gezin.",
      "Ik verloor alles — rijkdom, kinderen en gezondheid — maar klaagde niet tegenover mensen.",
      "Jarenlang leed ik aan een zware ziekte en werd door mijn omgeving gemeden.",
      "Ik bad slechts: 'Mij heeft tegenspoed getroffen — U bent de Meest Barmhartige.'",
      "Allah verhoorde mijn gebed en herstelde mijn gezondheid, mijn gezin en mijn rijkdom.",
      "Mijn naam is in de Koran het symbool geworden van onwankelbaar geduld in beproeving."
    ],
    biografie: "Ayyūb (عليه السلام) is de profeet van het geduld bij uitstek. Hij verloor in korte tijd alles wat hij had, maar bleef Allah dankbaar en geduldig. Zijn gebed — sober en van het hart — werd verhoord en alles werd hem dubbel teruggegeven. Zijn verhaal staat uitvoerig in de Koran.",
    alternatieven: ["ayyub", "job", "ayoub"]
  },

  // ── ṢAḤĀBA (uitbreiding) ─────────────────────────────────────────────────
  {
    id: 48,
    naam: "Muʿādh ibn Jabal",
    arabisch: "مُعَاذ بْن جَبَل",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik omarmde de islam als tiener, nog in Mekka.",
      "De Profeet ﷺ noemde mij de meest wetende over halal en haram van zijn gemeenschap.",
      "Ik werd persoonlijk door de Profeet ﷺ naar Jemen gestuurd als leraar en rechter.",
      "De Profeet ﷺ gaf mij bij vertrek mee: 'Wees godvrezend waar je ook bent.'",
      "Ik stierf jong aan de pest in Syrië — zo'n 33 jaar oud.",
      "Ik ben de metgezel die de Profeet ﷺ uitstuurde als eerste islamitische geleerde-gouverneur van Jemen."
    ],
    biografie: "Muʿādh ibn Jabal (رضي الله عنه) omarmde de islam als tiener en groeide uit tot een van de meest geleerde metgezellen. De Profeet ﷺ stuurde hem als leraar naar Jemen. Hij stierf jong aan de pest maar liet een enorme nalatenschap na in fiqh en spirituele raadgeving.",
    alternatieven: ["muadh", "muaz", "muadh ibn jabal"]
  },
  {
    id: 49,
    naam: "Anas ibn Mālik",
    arabisch: "أَنَس بْن مَالِك",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Mijn moeder bracht mij als kind van negen jaar persoonlijk naar de Profeet ﷺ als dienaar.",
      "Ik diende de Profeet ﷺ tien jaar lang zonder ooit één keer door hem berispt te worden.",
      "De Profeet ﷺ bad voor mij: 'O Allah, zegen zijn rijkdom en zijn nageslacht.'",
      "Ik leefde bijna honderd jaar en had een enorm groot nageslacht als zegen van dat gebed.",
      "Door mijn lange aanwezigheid bij de Profeet ﷺ overleverde ik duizenden aḥādīth.",
      "Ik ben de persoonlijke dienaar van de Profeet ﷺ en een van de langstlevende en meest geciteerde metgezellen."
    ],
    biografie: "Anas ibn Mālik (رضي الله عنه) diende de Profeet ﷺ van zijn negende jaar tot aan diens overlijden. De Profeet ﷺ bad voor hem en zijn gebed werd verhoord: Anas leefde bijna een eeuw en had talrijke nakomelingen. Hij is een van de meest geciteerde overleveraars van aḥādīth.",
    alternatieven: ["anas ibn malik", "anas"]
  },
  {
    id: 50,
    naam: "ʿAbdullāh ibn ʿAbbās",
    arabisch: "عَبْد اللَّه بْن عَبَّاس",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was nog een kind van dertien jaar toen de Profeet ﷺ overleed.",
      "De Profeet ﷺ bad speciaal voor mij: 'O Allah, geef hem begrip in de godsdienst en leer hem de uitleg.'",
      "Ik ben de neef van de Profeet ﷺ.",
      "De ṣaḥāba noemden mij 'de zee' vanwege de diepte en breedte van mijn kennis.",
      "Ik was de eerste en grootste autoriteit in de uitleg van de Koran.",
      "Ik ben 'Ḥibr al-Umma' — de geleerde van de gemeenschap — en de grondlegger van de Koranwetenschap (tafsīr)."
    ],
    biografie: "ʿAbdullāh ibn ʿAbbās (رضي الله عنه) was de neef van de Profeet ﷺ. Ondanks zijn jonge leeftijd bij het overlijden van de Profeet groeide hij uit tot de grootste tafsīr-geleerde van zijn generatie. De ṣaḥāba noemden hem 'de zee'. Zijn interpretaties vormen de basis van de klassieke Koranuitleg.",
    alternatieven: ["ibn abbas", "abdullah ibn abbas", "ibne abbas"]
  },
  {
    id: 51,
    naam: "Saʿd ibn Abī Waqqāṣ",
    arabisch: "سَعْد بْن أَبِي وَقَّاص",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de allereersten die de islam omarmden in Mekka.",
      "Ik was de eerste die ooit een pijl afschoot in de strijd voor de islam.",
      "De Profeet ﷺ noemde mij zijn oom uit de stam Zuhra — een eretitel.",
      "Ik bad eens voor mijn zieke zoon en raakte zijn gezicht aan — hij genas onmiddellijk.",
      "Ik leidde het moslimleger bij de beslissende slag van al-Qādisiyya en versloeg het Perzische rijkslegers.",
      "Ik ben een van de 'Tien Beloofden met het Paradijs' en de bevrijder van Irak en Perzië voor de islam."
    ],
    biografie: "Saʿd ibn Abī Waqqāṣ (رضي الله عنه) was een van de vroegste moslims en behoort tot de tien metgezellen aan wie de Profeet ﷺ het Paradijs beloofde. Als bevelhebber leidde hij de slag van al-Qādisiyya (636 n.Chr.), die het begin markeerde van de islamitische aanwezigheid in Perzië en Irak.",
    alternatieven: ["sa'd ibn abi waqqas", "saad ibn abi waqqas", "sa'd"]
  },
  {
    id: 52,
    naam: "Abū ʿUbayda ibn al-Jarrāḥ",
    arabisch: "أَبُو عُبَيْدَة بْن الجَرَّاح",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik stond bekend om mijn bescheidenheid en vriendelijkheid — nooit aanmatigend.",
      "Op de slag bij Badr doodde ik mijn eigen vader die aan de kant van de vijanden vocht.",
      "De Profeet ﷺ noemde mij 'Amīn hādhihi al-umma' — de vertrouweling van deze gemeenschap.",
      "Ik leidde de islamitische bevrijding van Syrië en Palestina.",
      "Ik stierf als martelaar aan de pest in de Jordaanvallei.",
      "Ik ben een van de 'Tien Beloofden met het Paradijs' en de veroverar van Syrië voor de islam."
    ],
    biografie: "Abū ʿUbayda ibn al-Jarrāḥ (رضي الله عنه) was een van de meest geliefde en betrouwde metgezellen. De Profeet ﷺ noemde hem 'de vertrouweling van de gemeenschap'. Als bevelhebber bevrijdde hij grote delen van Syrië en Palestina. Hij stierf aan de pest als martelaar.",
    alternatieven: ["abu ubayda", "abu ubaida", "abu ubaidah"]
  },
  {
    id: 53,
    naam: "ʿAbd al-Raḥmān ibn ʿAwf",
    arabisch: "عَبْد الرَّحْمَن بْن عَوْف",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de rijkste kooplieden van Mekka vóór de hidjra.",
      "Bij de hidjra liet ik al mijn bezit achter, maar bouwde het snel opnieuw op door eerlijke handel.",
      "Ik schonk enorme bedragen voor de zaak van de islam — eens een karavaan van 700 kamelen.",
      "De Profeet ﷺ bad achter mij als imām tijdens een expeditie — een grote eer.",
      "Ik was een van de tien metgezellen aan wie het Paradijs werd beloofd.",
      "Ik ben een van de meest succesvolle kooplieden van de vroege islam en een van de 'Tien Beloofden met het Paradijs'."
    ],
    biografie: "ʿAbd al-Raḥmān ibn ʿAwf (رضي الله عنه) was een handelsman die ondanks zijn enorme rijkdom uiterst bescheiden leefde. Hij gaf vrijwel alles weg voor de zaak van de islam. Hij behoort tot de tien metgezellen aan wie de Profeet ﷺ expliciet het Paradijs beloofde.",
    alternatieven: ["abd al rahman ibn awf", "abdurrahman ibn awf"]
  },
  {
    id: 54,
    naam: "Ṭalḥa ibn ʿUbaydullāh",
    arabisch: "طَلْحَة بْن عُبَيْد اللَّه",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de vroegste moslims en leed veel in Mekka.",
      "Op de slag bij Uḥud stak ik mijn hand uit om een pijl te onderscheppen die op de Profeet ﷺ gericht was.",
      "Mijn hand werd verlamd door die pijl — maar ik had er nooit spijt van.",
      "Ik stond bekend als 'Ṭalḥa al-Khayr' vanwege mijn grote vrijgevigheid.",
      "Ik behoorde tot de tien metgezellen aan wie het Paradijs werd beloofd.",
      "Ik ben de man die zijn lichaam als schild inzette voor de Profeet ﷺ op de dag van Uḥud."
    ],
    biografie: "Ṭalḥa ibn ʿUbaydullāh (رضي الله عنه) was een van de moedigste metgezellen. Op Uḥud nam hij een pijl aan om de Profeet ﷺ te beschermen, waardoor zijn hand verlamd raakte. Hij behoort tot de tien metgezellen aan wie de Profeet ﷺ het Paradijs beloofde en staat bekend om zijn buitengewone vrijgevigheid.",
    alternatieven: ["talha", "talha ibn ubaydullah", "talha ibn ubaidillah"]
  },
  {
    id: 55,
    naam: "Al-Zubayr ibn al-ʿAwwām",
    arabisch: "الزُّبَيْر بْن العَوَّام",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was de neef van de Profeet ﷺ en de schoonzoon van Abū Bakr.",
      "Ik was de eerste die ooit zijn zwaard trok voor de islam.",
      "Ik was een van de dapperste strijders die de vroege moslimgemeenschap kende.",
      "De Profeet ﷺ noemde mij zijn 'Hawārī' — zijn bijzondere vertrouweling en steun.",
      "Ik was een van de tien metgezellen aan wie het Paradijs werd beloofd.",
      "Ik ben 'de discipel van de Profeet ﷺ' en een van de 'Tien Beloofden met het Paradijs'."
    ],
    biografie: "Al-Zubayr ibn al-ʿAwwām (رضي الله عنه) was een neef van de Profeet ﷺ en behoorde tot de tien die het Paradijs beloofd kregen. Hij was de eerste die zijn zwaard trok voor de islam. De Profeet ﷺ noemde hem zijn 'Hawārī' — een eretitel die verwijst naar de trouwe discipelen.",
    alternatieven: ["al zubayr", "zubayr ibn al awwam", "zubair"]
  },
  {
    id: 56,
    naam: "Ḥudhayfa ibn al-Yamān",
    arabisch: "حُذَيْفَة بْن اليَمَان",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "De Profeet ﷺ vertelde mij persoonlijk de namen van de huichelaars van Medina.",
      "Door die kennis werd ik 'de bewaarnemer van het geheim' van de Profeet ﷺ.",
      "Kaliefen kwamen bij mij vragen: 'Ben ik soms een van degenen die hij noemde?'",
      "Ik infiltreerde in het vijandelijke kamp tijdens de Slag van de Gracht — alleen, in de donkere nacht.",
      "Ik stond bekend om mijn diepgaand inzicht in fitnah — verdeeldheid en beproevingen.",
      "Ik ben 'Ṣāḥib al-Sirr' — de bewaarnemer van het geheim van de Profeet ﷺ."
    ],
    biografie: "Ḥudhayfa ibn al-Yamān (رضي الله عنه) was de metgezel aan wie de Profeet ﷺ de namen van de huichelaars in Medina toevertrouwde. Dit gaf hem een unieke status. Zijn inzicht in fitnah en zijn eenzame spionageactie tijdens de Slag van de Gracht maken hem een uitzonderlijke figuur.",
    alternatieven: ["hudhayfah", "hudayfa", "hudhaifa"]
  },
  {
    id: 57,
    naam: "Jābir ibn ʿAbdullāh",
    arabisch: "جَابِر بْن عَبْد اللَّه",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Mijn vader stierf als martelaar bij de slag van Uḥud.",
      "De Profeet ﷺ troostte mij en vroeg: 'Wat wil jij, Jābir?'",
      "Ik nam deel aan negentwintig militaire expedities samen met de Profeet ﷺ.",
      "Ik reisde een volle maand op kameel om één enkele hadith te horen van een andere metgezel.",
      "Mijn toewijding aan kennis en aan de Profeet ﷺ maakte mij tot een van de grote overleveraars.",
      "Ik ben een van de meest actieve hadith-overleveraars en trouwste metgezellen van de Profeet ﷺ."
    ],
    biografie: "Jābir ibn ʿAbdullāh (رضي الله عنه) verloor zijn vader bij Uḥud en bleef daarna nog dichter bij de Profeet ﷺ. Zijn reis van een maand op kameel voor één hadith geldt als een van de beroemdste verhalen over toewijding aan kennis. Hij overleverde meer dan 1.500 aḥādīth.",
    alternatieven: ["jabir ibn abdullah", "jabir"]
  },
  {
    id: 58,
    naam: "Umm Salama",
    arabisch: "أُمّ سَلَمَة",
    eretitel: "رضي الله عنها",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik werd weduwe na een zware verbanning en een lange tocht.",
      "De Profeet ﷺ vroeg mij ten huwelijk nadat mijn man overleed.",
      "Ik stond bekend om mijn scherpe intelligentie en wijze raadgeving.",
      "Tijdens de crisis van Ḥudaybiyya gaf ik de Profeet ﷺ een doorslaggevend advies.",
      "Ik overleverde honderden aḥādīth en was een autoriteit in het onderwijs.",
      "Ik ben een van de moeders van de gelovigen, geroemd om mijn wijsheid en invloed op de islamitische geschiedenis."
    ],
    biografie: "Umm Salama (رضي الله عنها) was een van de meest intelligente en wijze echtgenotes van de Profeet ﷺ. Haar advies bij Ḥudaybiyya was historisch beslissend. Ze leefde lang na de Profeet en was een gerespecteerde bron van kennis en fatwa's voor de gemeenschap.",
    alternatieven: ["umm salama", "um salama", "ummu salama"]
  },
  {
    id: 59,
    naam: "Abū Dharr al-Ghifārī",
    arabisch: "أَبُو ذَرّ الغِفَارِيّ",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik hoorde geruchten over een nieuwe profeet in Mekka en reisde helemaal alleen erheen.",
      "ʿAlī begeleidde mij in het geheim naar de Profeet ﷺ, waarbij ik onmiddellijk de islam omarmde.",
      "Ik keerde terug naar mijn stam en bekeerde hen in korte tijd tot de islam.",
      "De Profeet ﷺ noemde mij 'de meest waarachtige' onder zijn gemeenschap.",
      "Ik waarschuwde altijd sterk tegen het oppotten van rijkdom en wereldse gehechtheid.",
      "Ik ben de ascetische metgezel die zei: 'Verwonder je over degene die zijn huis bouwt terwijl zijn echte huis het graf is.'"
    ],
    biografie: "Abū Dharr al-Ghifārī (رضي الله عنه) legde een indrukwekkende weg af om de islam te vinden. De Profeet ﷺ roemde hem als de meest waarachtige. Zijn ascetisme en zijn scherpe kritiek op vergaren van rijkdom maken hem tot een timeless voorbeeld van islamitische soberheid.",
    alternatieven: ["abu dharr", "abu dhar", "abu zarr"]
  },
  {
    id: 60,
    naam: "Zayd ibn Thābit",
    arabisch: "زَيْد بْن ثَابِت",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik leerde als jongeman snel schrijven en werd schrijver van de openbaringen.",
      "Op verzoek van de Profeet ﷺ leerde ik ook Hebreeuws en Syrisch voor de diplomatieke correspondentie.",
      "Abū Bakr gaf mij de historische taak: verzamel de Koran in één boek.",
      "Ik was aanvankelijk huiverig — zo'n gewichtige taak! Maar ik aanvaardde en voltooide hem.",
      "Later coördineerde ik ook de standaardisatie van het Koranexemplaar onder ʿUthmān.",
      "Ik ben de schrijver en hoofdverzamelaar van de Koran — mijn werk vormt de basis van elk Koranexemplaar wereldwijd."
    ],
    biografie: "Zayd ibn Thābit (رضي الله عنه) was de voornaamste schrijver van de openbaringen en de leider van het Koranverzamelproject onder Abū Bakr en later ʿUthmān. Zijn nauwkeurigheid en kennis van de Koran maakten hem de aangewezen persoon voor deze meest verantwoordelijke taak in de vroege islamitische geschiedenis.",
    alternatieven: ["zayd ibn thabit", "zaid ibn thabit"]
  },
  {
    id: 61,
    naam: "Ubayy ibn Kaʿb",
    arabisch: "أُبَيّ بْن كَعْب",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de eersten uit Medina die de islam omarmde en de Profeet ﷺ trouw zwoor.",
      "Ik schreef als een van de schrijvers van de openbaring voor de Profeet ﷺ.",
      "De Profeet ﷺ droeg de moslims op de Koran van vier metgezellen te leren — ik was een van hen.",
      "De Profeet ﷺ reciteerde de Koran aan mij voor als toets.",
      "ʿUmar ibn al-Khaṭṭāb noemde mij openlijk 'onze meester'.",
      "Ik ben 'Sayyid al-Anṣār' — de meester van de Medinese metgezellen — en de beste Koranrecitator van mijn generatie."
    ],
    biografie: "Ubayy ibn Kaʿb (رضي الله عنه) was een van de meest geleerde en vrome metgezellen uit Medina. De Profeet ﷺ reciteerde de Koran aan hem als blijk van vertrouwen in zijn kennis. ʿUmar ibn al-Khaṭṭāb noemde hem 'onze meester', wat in de traditie van de metgezellen een zeldzame eer was.",
    alternatieven: ["ubayy ibn kab", "ubay ibn ka'b", "ubai ibn kab"]
  },
  {
    id: 62,
    naam: "ʿAmr ibn al-ʿĀṣ",
    arabisch: "عَمْرو بْن العَاص",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was vóór mijn bekering een van de sluwste diplomaten en tegenstanders van de moslims.",
      "Ik migreerde samen met Khālid ibn al-Walīd naar de Profeet ﷺ om de islam te omhelzen.",
      "De Profeet ﷺ begroette ons beiden als bijzondere aanwinsten voor de islam.",
      "Ik veroverde Egypte met een leger dat zwaar in de minderheid was — een militaire meestergreep.",
      "Ik werd de eerste gouverneur van Egypte.",
      "Ik ben de metgezel die Egypte voor de islam opende — een land dat tot op de dag van vandaag islamitisch is."
    ],
    biografie: "ʿAmr ibn al-ʿĀṣ (رضي الله عنه) was een diplomatiek genie en militair strateeg. Na zijn bekering gebruikte hij zijn talenten volledig voor de islam. Zijn verovering van Egypte in 640 n.Chr. met een klein leger is een van de meest opmerkelijke campagnes in de vroege islamitische expansie.",
    alternatieven: ["amr ibn al as", "amr ibnul as", "amr ibn al-'as"]
  },
  {
    id: 63,
    naam: "Ḥassān ibn Thābit",
    arabisch: "حَسَّان بْن ثَابِت",
    eretitel: "رضي الله عنه",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was al een beroemde dichter in heel Arabië, vóór de islam.",
      "Na mijn bekering zette ik mijn pen volledig in dienst van de islam.",
      "De Profeet ﷺ bad voor mij: 'O Allah, steun hem met de heilige geest.'",
      "Ik beantwoordde elk spottend gedicht van de vijanden van de islam met een krachtiger tegengedicht.",
      "Ik had een speciale podium in de moskee van de Profeet ﷺ.",
      "Ik ben 'Shāʿir al-Rasūl' — de hofdichter van de Profeet ﷺ — die zijn pen als wapen voor de islam inzette."
    ],
    biografie: "Ḥassān ibn Thābit (رضي الله عنه) was de dichter van de Profeet ﷺ. Zijn poëzie verdedigde de eer van de islam en de Profeet ﷺ tegen de aanvallen van de vijanden. De Profeet ﷺ bad speciaal voor hem en gaf hem een speciale plek in de moskee.",
    alternatieven: ["hassan ibn thabit", "hassan", "hassan ibn sabit"]
  },

  // ── FAMILIE VAN DE PROFEET (uitbreiding) ─────────────────────────────────
  {
    id: 64,
    naam: "Zayd ibn Ḥāritha",
    arabisch: "زَيْد بْن حَارِثَة",
    eretitel: "رضي الله عنه",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik werd als kind ontvoerd en uiteindelijk als slaaf verkocht.",
      "Ik werd aan de Profeet ﷺ gegeven als geschenk — hij behandelde mij als zijn eigen kind.",
      "Mijn vader en oom kwamen mij bevrijden, maar ik weigerde hen te volgen.",
      "De Profeet ﷺ adopteerde mij als zijn zoon en ik werd officieel 'Zayd ibn Muḥammad' genoemd.",
      "Ik was de eerste man die de islam omarmde na Khadīja en ʿAlī.",
      "Ik stierf als martelaar bij de slag van Muʾta — de eerste islamitische expeditie naar het Byzantijnse grondgebied."
    ],
    biografie: "Zayd ibn Ḥāritha (رضي الله عنه) was de aangenomen zoon van de Profeet ﷺ en een van de allereerste moslims. Zijn liefde voor de Profeet was zo groot dat hij zijn eigen vader verkoos boven zijn biologische familie. Hij stierf als bevelhebber bij Muʾta (629 n.Chr.).",
    alternatieven: ["zayd ibn haritha", "zaid ibn haritha", "usama's vader"]
  },
  {
    id: 65,
    naam: "ʿAbd al-Muṭṭalib",
    arabisch: "عَبْد المُطَّلِب",
    eretitel: "",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was de leider en meest gerespecteerde man van de Quraysh-stam in Mekka.",
      "Ik groef de Zamzambron opnieuw uit nadat die eeuwenlang vergeten was.",
      "Allah hielp mij de Kaʿba te verdedigen toen een leider met een olifantleger Mekka naderde.",
      "Ik verloor mijn zoon ʿAbdullāh vóór de geboorte van mijn kleinzoon.",
      "Ik zorgde voor mijn kleinzoon met grote liefde totdat ik op tachtigjarige leeftijd overleed.",
      "Ik ben de grootvader van de Profeet ﷺ die de Zamzam herontdekte en zijn kleinzoon met toewijding opvoedde."
    ],
    biografie: "ʿAbd al-Muṭṭalib was de vooraanstaande grootvader van de Profeet ﷺ en leider van de Hāshimitische clan in Mekka. Hij herontdekte de Zamzambron en stond vastberaden tegenover het leger van Abraha. Na het overlijden van zijn zoon en schoondochter zorgde hij persoonlijk voor zijn kleinzoon.",
    alternatieven: ["abd al muttalib", "abdul muttalib"]
  },
  {
    id: 66,
    naam: "Ḥalīma al-Saʿdiyya",
    arabisch: "حَلِيمَة السَّعْدِيَّة",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was een voedster uit de stam Banū Saʿd, buiten Mekka.",
      "Het jaar dat ik terugkwam met een nieuw zoogkind, was mijn kudde opeens gezond en vol melk.",
      "Zolang dit kind bij mij was, was er overvloed in ons huishouden.",
      "Het kind groeide bij mij op in de zuivere lucht van de woestijn tot zijn zesde jaar.",
      "Ik bracht hem met een zwaar hart terug naar zijn moeder in Mekka.",
      "Ik ben de pleegmoeder van de Profeet ﷺ — hij dronk bij mij en groeide bij mijn gezin op."
    ],
    biografie: "Ḥalīma al-Saʿdiyya was de pleegmoeder van de Profeet ﷺ. Volgens de traditie brachten de borstvoeding en opvoeding bij Ḥalīma de Profeet ﷺ gezonde jaren in de vrije natuur van de woestijn. Haar familie ervoer zegen zolang hij bij hen was. Later bezocht de Profeet ﷺ haar met eerbied en dankbaarheid.",
    alternatieven: ["halima", "halimah", "halima al sa'diyya"]
  },
  {
    id: 67,
    naam: "Zaynab bint Muḥammad",
    arabisch: "زَيْنَب بِنْت مُحَمَّد",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was de oudste dochter van de Profeet ﷺ en Khadīja.",
      "Ik was getrouwd met een man die de islam aanvankelijk weigerde aan te nemen.",
      "Bij de slag van Badr vocht mijn man aan de zijde van de vijanden.",
      "Op mijn reis naar Medina werd ik aangevallen en gewond.",
      "Mijn man bekeerde zich uiteindelijk en voegde zich bij ons in Medina.",
      "Ik ben de oudste dochter van de Profeet ﷺ die haar huwelijk en veiligheid opofferde voor haar geloof."
    ],
    biografie: "Zaynab (رضي الله عنها) was de oudste dochter van de Profeet ﷺ. Haar leven was een test: haar man omarmde de islam pas later, wat haar in een moeilijke positie plaatste. Haar reis naar Medina was gevaarlijk en zij raakte gewond. Ze stierf een paar jaar na haar migratie.",
    alternatieven: ["zaynab bint muhammad", "zaynab", "zainab bint muhammad"]
  },
  {
    id: 68,
    naam: "ʿAlī ibn al-Ḥusayn",
    arabisch: "عَلِيّ بْن الحُسَيْن",
    eretitel: "رحمه الله",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik overleefde de ramp van Karbalā' als jonge man, te ziek om te vechten.",
      "Ik werd gevangengezet en voor de rechtbank van Yazīd gesleept.",
      "Ik sprak daar met onverschrokkenheid de waarheid uit.",
      "Ik stond bekend om mijn buitengewoon intens gebed en nachtelijke aanbidding.",
      "Mijn smeekgebeden werden bijeengebracht in het boek 'al-Ṣaḥīfa al-Sajjādiyya'.",
      "Ik ben Zayn al-ʿĀbidīn — het sieraad van de aanbidders — achterkleinkind van de Profeet ﷺ."
    ],
    biografie: "ʿAlī ibn al-Ḥusayn, bekend als Zayn al-ʿĀbidīn (رحمه الله), overleefde Karbalā' en droeg daarna zijn leven in gebed en aanbidding. Zijn smeekgebedenverzameling 'al-Ṣaḥīfa al-Sajjādiyya' wordt tot op de dag van vandaag gelezen als een juweel van islamitische spirituele literatuur.",
    alternatieven: ["ali ibn husayn", "zayn al abidin", "zain ul abideen"]
  },

  // ── TĀBIʿŪN (uitbreiding) ─────────────────────────────────────────────────
  {
    id: 69,
    naam: "Muḥammad ibn Sīrīn",
    arabisch: "مُحَمَّد بْن سِيرِين",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik werd geboren in Baṣra en leerde van grote ṣaḥāba, waaronder Anas ibn Mālik.",
      "Ik weigerde een schuld te betalen die ik juridisch al niet meer verschuldigd was — uit scrupuleuze eerlijkheid.",
      "Ik stond zo bekend om mijn rechtschapenheid dat mensen mij als maatstaf namen.",
      "Ik werd gevangengezet vanwege een financiële schuld en accepteerde dit gelaten.",
      "Naast fiqh en hadith verwierf ik een bijzondere naam op één specifiek gebied.",
      "Ik ben de grondlegger van de islamitische wetenschap van droomuitleg — mijn naam is synoniem met dit vakgebied."
    ],
    biografie: "Muḥammad ibn Sīrīn (رحمه الله) was een grote tābiʿī uit Baṣra, bekend om zijn extreme scrupulositeit en rechtschapenheid. Zijn naam is onlosmakelijk verbonden met droomuitleg in de islamitische traditie. Zijn werk 'Tafsīr al-Aḥlām' wordt tot op vandaag gelezen.",
    alternatieven: ["ibn sirin", "muhammad ibn sirin"]
  },
  {
    id: 70,
    naam: "ʿUrwa ibn al-Zubayr",
    arabisch: "عُرْوَة بْن الزُّبَيْر",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Mijn vader was al-Zubayr ibn al-ʿAwwām, een van de tien beloofden met het Paradijs.",
      "Mijn tante was ʿĀ'isha, van wie ik enorm veel kennis opdeed.",
      "Ik was een van de eerste geleerden die aḥādīth systematisch begon te noteren en ordenen.",
      "Mijn been moest worden geamputeerd vanwege een ernstige ziekte — ik bad tijdens de operatie.",
      "Op diezelfde dag verloor ik ook een geliefde zoon.",
      "Ik ben een van de 'Zeven Grote Rechtsgeleerden van Medina' en een sleutelfiguur in de vroege hadith-wetenschap."
    ],
    biografie: "ʿUrwa ibn al-Zubayr (رحمه الله) was een van de grootste tābiʿūn van Medina. Via zijn moeder Asmā' en zijn tante ʿĀ'isha had hij directe toegang tot de vroegste tradities. Zijn geduld bij de amputatie van zijn been, terwijl hij gelijktijdig zijn zoon verloor, wordt als een voorbeeld van standvastigheid geciteerd.",
    alternatieven: ["urwa ibn al zubayr", "urwa ibn zubayr"]
  },
  {
    id: 71,
    naam: "Ibn Shihāb al-Zuhrī",
    arabisch: "ابْن شِهَاب الزُّهْرِيّ",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik groeide op in Medina en leerde van de meest geleerde tābiʿūn en latere ṣaḥāba.",
      "Khalīfa ʿUmar ibn ʿAbd al-ʿAzīz gaf mij de officiële opdracht aḥādīth schriftelijk vast te leggen.",
      "Ik was de eerste die aḥādīth op staatsniveau systematisch documenteerde.",
      "Vrijwel alle grote hadith-geleerden na mij leerden van mij of bouwden op mijn methode.",
      "Ik combineerde uitstekende kennis van fiqh, sīra en hadith in één persoon.",
      "Ik ben Muḥammad ibn Shihāb al-Zuhrī — de pijler van de hadith-wetenschap en de eerste die aḥādīth officieel documenteerde."
    ],
    biografie: "Ibn Shihāb al-Zuhrī (رحمه الله) is een van de meest invloedrijke geleerden in de islamitische geschiedenis. Op bevel van khalīfa ʿUmar ibn ʿAbd al-ʿAzīz begon hij aḥādīth systematisch op te schrijven, waarmee hij de basis legde voor de gehele hadith-wetenschap. Bijna elke grote hadith-keten loopt door hem.",
    alternatieven: ["al zuhri", "ibn shihab al zuhri", "ibn shihab"]
  },
  {
    id: 72,
    naam: "Ṭāwūs ibn Kaysān",
    arabisch: "طَاوُوس بْن كَيْسَان",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik was van Jemenitische afkomst en groeide op als een van de grootste geleerden van Jemen.",
      "Ik leerde uitgebreid van ʿAbdullāh ibn ʿAbbās, die een immense invloed op mij had.",
      "Ik stond bekend om mijn onverschrokkenheid tegenover machthebbers.",
      "Ik weigerde een khalīfa de hand te schudden en sprak hem recht in het gezicht de waarheid.",
      "Ik was een van de 'Zeven Grote Rechtsgeleerden' — dit keer van Mekka en Jemen.",
      "Ik ben een van de grootste tābiʿūn van Jemen, bekend om mijn kennis én mijn moed tegenover onrechtvaardige heersers."
    ],
    biografie: "Ṭāwūs ibn Kaysān (رحمه الله) was een groot geleerde en asceet uit Jemen. Hij leerde van Ibn ʿAbbās en gold als zijn meest geliefde leerling. Zijn weigering te buigen voor macht en zijn openheid tegenover khaliefen maken hem tot een voorbeeld van geloofsonafhankelijkheid.",
    alternatieven: ["tawus", "tawus ibn kaysan"]
  },
  {
    id: 73,
    naam: "ʿAlqama ibn Qays",
    arabisch: "عَلْقَمَة بْن قَيْس",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik was een naaste leerling van ʿAbdullāh ibn Masʿūd en zijn meest vertrouwde metgezel in Kūfa.",
      "Ibn Masʿūd zei over mij dat ik hem in karakter en manier van lopen deed denken aan de Profeet ﷺ.",
      "Ik leerde ook rechtstreeks van ʿUmar ibn al-Khaṭṭāb en ʿĀ'isha.",
      "Ik was de leermeester van Ibrāhīm al-Nakhaʿī.",
      "Via mijn leerlingen loopt de directe kennisketen die leidde tot Abū Ḥanīfa.",
      "Ik ben een sleutelschakel in de Ḥanafī-kennisketen: mijn fiqh ging via al-Nakhaʿī naar Ḥammād naar Abū Ḥanīfa."
    ],
    biografie: "ʿAlqama ibn Qays (رحمه الله) was een van de vroegste en grootste geleerden van Kūfa. Als vertrouwde leerling van Ibn Masʿūd droeg hij diens methodologie over. Via zijn leerling Ibrāhīm al-Nakhaʿī vormde hij een cruciale schakel in de kennislijn die leidde tot Abū Ḥanīfa.",
    alternatieven: ["alqama ibn qays", "alqamah"]
  },
  {
    id: 74,
    naam: "Masrūq ibn al-Ajdaʿ",
    arabisch: "مَسْرُوق بْن الأَجْدَع",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik migreerde van Jemen naar Kūfa en werd daar een van de meest geleerde mensen.",
      "Ik leerde uitgebreid van ʿAbdullāh ibn Masʿūd én van ʿĀ'isha.",
      "ʿĀ'isha had grote waardering voor mijn kennis en ontving mij achter een gordijn.",
      "Ik bad zoveel 's nachts dat mijn voeten opzwollen van het lange staan.",
      "Ik weigerde ooit iets te accepteren van de staatskas om mijn onafhankelijkheid te bewaren.",
      "Ik ben een van de voornaamste leerlingen van Ibn Masʿūd en een grote naam in de Kūfische fiqh-traditie."
    ],
    biografie: "Masrūq ibn al-Ajdaʿ (رحمه الله) was een tābiʿī die bekendstond om zijn uitzonderlijke vroomheid en zijn brede kennis. Hij had nauwe banden met zowel Ibn Masʿūd als ʿĀ'isha. Zijn nachtgebeden en zijn weigering staatsuitkeringen te accepteren maken hem tot een voorbeeld van ascetische toewijding.",
    alternatieven: ["masruq", "masrooq"]
  },
  {
    id: 75,
    naam: "Nāfiʿ",
    arabisch: "نَافِع",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik was de vrijgelaten slaaf en directe leerling van ʿAbdullāh ibn ʿUmar.",
      "Ik leerde meer dan twintig jaar rechtstreeks van Ibn ʿUmar.",
      "Mijn overleveringen van Ibn ʿUmar gelden als de meest betrouwbare keten in de hadith-wetenschap.",
      "Imām Mālik leerde uitgebreid van mij en beschouwde mij als zijn belangrijkste bron.",
      "De keten 'Mālik → ik → Ibn ʿUmar → de Profeet ﷺ' wordt 'de gouden keten' van de hadith-wetenschap genoemd.",
      "Ik ben Nāfiʿ, de mawlā van Ibn ʿUmar — mijn overleveringsketen is de meest betrouwbare in de gehele hadith-literatuur."
    ],
    biografie: "Nāfiʿ (رحمه الله) was de vrijgelaten slaaf en trouwe leerling van ʿAbdullāh ibn ʿUmar. Zijn overleveringsketen — Mālik → Nāfiʿ → Ibn ʿUmar — wordt door hadith-geleerden 'de gouden keten' (silsilat al-dhahab) genoemd vanwege de uitzonderlijke betrouwbaarheid van elke schakel.",
    alternatieven: ["nafi", "nafi' mawla ibn umar"]
  },
  {
    id: 76,
    naam: "Saʿīd ibn Jubayr",
    arabisch: "سَعِيد بْن جُبَيْر",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik was een van de meest geleerde tābiʿūn van Kūfa en Mekka.",
      "Ik was de meest geliefde leerling van ʿAbdullāh ibn ʿAbbās.",
      "Ik reciteerde de gehele Koran soms in twee nachten uit het hoofd.",
      "Ik weigerde trouw te zweren aan de tiran al-Ḥajjāj en vluchtte jarenlang.",
      "Al-Ḥajjāj liet mij uiteindelijk vangen en executeerde mij — ik sprak op het moment van mijn dood Allah's naam uit.",
      "Ik ben de martelaar-geleerde die voor de waarheid stierf — al-Ḥajjāj zei na mijn dood dat hij nooit rust meer vond."
    ],
    biografie: "Saʿīd ibn Jubayr (رحمه الله) was een grote tābiʿī die als martelaar stierf vanwege zijn weigering het onrecht van al-Ḥajjāj te erkennen. De tiran al-Ḥajjāj zou na zijn executie nachtmerries hebben gehad. Zijn standvastigheid en kennis maken hem tot een van de meest bewonderde figuren onder de tābiʿūn.",
    alternatieven: ["sa'id ibn jubayr", "said ibn jubayr"]
  },
  {
    id: 77,
    naam: "Qatāda ibn Diʿāma",
    arabisch: "قَتَادَة بْن دِعَامَة",
    eretitel: "رحمه الله",
    categorie: "Tābiʿūn",
    hints: [
      "Ik werd blind geboren, maar mijn geheugen was zo uitzonderlijk scherp dat dit mij nooit hinderde.",
      "Ik leerde van tientallen ṣaḥāba en tābiʿūn in Baṣra.",
      "Ik kende de Koran volledig uit het hoofd en was een groot tafsīr-geleerde.",
      "Ik stond bekend om mijn onfeilbaar geheugen — ik hoefde een tekst slechts één keer te horen.",
      "Ik was een van de grote fiqh-geleerden van de Baṣra-school.",
      "Ik ben een blinde tābiʿī wiens encyclopedische kennis en geheugen zijn visuele beperking volledig overtroffen."
    ],
    biografie: "Qatāda ibn Diʿāma (رحمه الله) was een blind geboren tābiʿī uit Baṣra die door zijn uitzonderlijke geheugen een van de meest geleerde mensen van zijn generatie werd. Hij was autoriteit in tafsīr, fiqh en hadith, en zijn overleveringen zijn verwerkt in de grote hadith-verzamelingen.",
    alternatieven: ["qatada", "qatadah ibn di'ama"]
  },
  {
    id: 78,
    naam: "Asmā' bint Abī Bakr",
    arabisch: "أَسْمَاء بِنْت أَبِي بَكْر",
    eretitel: "رضي الله عنها",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik ben de oudste dochter van Abū Bakr al-Ṣiddīq.",
      "Ik bracht in het geheim voedsel naar de Profeet ﷺ en mijn vader in de grot Thawr.",
      "Ik scheurde mijn gordel in tweeën om de voedselzak te sluiten — de Profeet ﷺ gaf mij de bijnaam 'Dhāt al-Niṭāqayn'.",
      "Mijn schoonvader al-Zubayr vroeg mij te trouwen — ik verzorgde alles voor het huishouden.",
      "Ik leefde bijna honderd jaar en bleef tot het einde helder van geest.",
      "Ik ben 'Dhāt al-Niṭāqayn' — de vrouw van de twee gordels — en een heldere getuige van de vroegste islamitische geschiedenis."
    ],
    biografie: "Asmā' bint Abī Bakr (رضي الله عنها) speelde een cruciale rol in de hidjra door voedsel te leveren aan de Profeet ﷺ en haar vader in de grot. Ze leefde bijna honderd jaar en bleef haar hele leven flink en standvastig. Ze stierf kort na haar zoon ʿAbdullāh ibn al-Zubayr.",
    alternatieven: ["asma bint abi bakr", "asma'", "asmaa"]
  },

  // ── GELEERDEN (uitbreiding) ───────────────────────────────────────────────
  {
    id: 79,
    naam: "Abū Yūsuf",
    arabisch: "أَبُو يُوسُف",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik groeide op in armoede in Kūfa en kon nauwelijks studeren.",
      "Abū Ḥanīfa betaalde persoonlijk mijn levensonderhoud zodat ik kon leren.",
      "Ik was zijn trouwste en meest geleerde leerling.",
      "Ik schreef het eerste islamitische werk over belastingbeleid en staatsfinanciën: Kitāb al-Kharāj.",
      "Ik werd de eerste officieel benoemde Opperrechter (Qāḍī al-Quḍāt) in de islamitische geschiedenis.",
      "Ik ben Yaʿqūb ibn Ibrāhīm Abū Yūsuf — Opperrechter van het ʿAbbāsidisch khalīfaat en codificator van de Ḥanafī-rechtspraak."
    ],
    biografie: "Abū Yūsuf (رحمه الله) was de meest prominente leerling van Abū Ḥanīfa. Hij werd door khalīfa Hārūn al-Rashīd benoemd als de eerste Qāḍī al-Quḍāt (Opperrechter) in de islamitische wereld. Zijn 'Kitāb al-Kharāj' is het eerste systematische werk over islamitisch belastingrecht.",
    alternatieven: ["abu yusuf", "aboe yoesoef", "ya'qub ibn ibrahim"]
  },
  {
    id: 80,
    naam: "Muḥammad al-Shaybānī",
    arabisch: "مُحَمَّد الشَّيْبَانِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leerde van Abū Ḥanīfa zelf, en na zijn dood van Abū Yūsuf.",
      "Ik reisde ook naar Medina en leerde van Imām Mālik — ik schreef zijn Muwaṭṭa' memoriseerde ik volledig.",
      "Ik schreef de zes basisteksten van de Ḥanafī-fiqh.",
      "Imām al-Shāfiʿī leerde van mij en zei: 'Van geen geleerde heb ik meer geleerd dan van hem.'",
      "Zonder mijn schrijfwerk zouden de inzichten van Abū Ḥanīfa voor een groot deel verloren zijn gegaan.",
      "Ik ben de codificator van de Ḥanafī-fiqh — mijn 'Ẓāhir al-Riwāya' zijn de zes grondteksten van de school."
    ],
    biografie: "Muḥammad ibn al-Ḥasan al-Shaybānī (رحمه الله) was de schrijver en codificator van de Ḥanafī-madhhab. Zonder zijn zes basisteksten (Ẓāhir al-Riwāya) zouden de rechtsopvattingen van Abū Ḥanīfa nauwelijks bewaard zijn gebleven. Al-Shāfiʿī bestempelde hem als zijn grootste leermeester.",
    alternatieven: ["al shaybani", "muhammad al-shaybani", "shaybani"]
  },
  {
    id: 81,
    naam: "Imām al-Ṭaḥāwī",
    arabisch: "الإِمَام الطَّحَاوِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Egypte en begon mijn studie in de Shāfiʿī-madhhab.",
      "Ik stapte over naar de Ḥanafī-madhhab nadat ik zag hoe diepgaand en consistent die was.",
      "Ik schreef een korte tekst over de islamitische geloofsleer — slechts een paar pagina's.",
      "Die tekst werd het meest bestudeerde en geciteerde geloofsleersysteem in de Soennitische islam.",
      "Ik schreef ook uitgebreide werken over hadith, waaronder een verklaring van ogenschijnlijk tegenstrijdige overleveringen.",
      "Ik ben de auteur van al-ʿAqīda al-Ṭaḥāwiyya — het compacte geloofsmani- fest dat in alle Soennitische madhhabs als standaard wordt aanvaard."
    ],
    biografie: "Imām Aḥmad ibn Muḥammad al-Ṭaḥāwī (رحمه الله) leefde in Egypte (843–933 n.Chr.) en was een buitengewoon veelzijdig geleerde. Zijn 'al-ʿAqīda al-Ṭaḥāwiyya' is het kortste en meest universeel aanvaarde geloofsleerwerk in de Soennitische islam en wordt tot op de dag van vandaag in madrasas wereldwijd onderwezen.",
    alternatieven: ["al-tahawi", "tahawi", "imam tahawi"]
  },
  {
    id: 82,
    naam: "Imām Mālik",
    arabisch: "الإِمَام مَالِك",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde en stierf in Medina — ik verliet de stad van de Profeet ﷺ vrijwel nooit.",
      "Ik gaf geen fatwa als ik twijfelde — ik zei liever 'ik weet het niet' dan iets onzekers.",
      "Ik reed nooit paard in Medina, uit respect voor de grond die de Profeet ﷺ had betreden.",
      "Ik werd gestraft door de gouverneur vanwege een fatwa, maar trok mijn mening niet in.",
      "Mijn boek al-Muwaṭṭa' is een van de vroegste en meest gezaghebbende hadith-werken.",
      "Ik ben de Imam van Medina en grondlegger van de Mālikī-madhhab."
    ],
    biografie: "Imām Mālik ibn Anas (رحمه الله) was de toonaangevende geleerde van Medina in de tweede islamitische eeuw. Zijn Muwaṭṭa' combineerde fiqh en hadith op een unieke manier. Zijn eerbied voor de Profeet ﷺ en zijn compromisloze rechtschapenheid tegenover machthebbers zijn tot op de dag van vandaag legendarisch.",
    alternatieven: ["imam malik", "malik ibn anas", "maalik"]
  },
  {
    id: 83,
    naam: "Imām al-Shāfiʿī",
    arabisch: "الإِمَام الشَّافِعِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Gaza maar groeide op in Mekka als wees.",
      "Ik memoriseerde de Koran op zevende leeftijd en de Muwaṭṭa' van Mālik op tiende.",
      "Ik leerde van Imām Mālik in Medina én van de Ḥanafī-geleerden in Irak.",
      "Ik schreef het eerste systematische werk over de grondslagen van islamitisch recht.",
      "Ik had twee periodes van rechtsoordelen — mijn 'oude' en 'nieuwe' mening.",
      "Ik ben de grondlegger van de Shāfiʿī-madhhab en de vader van de Uṣūl al-fiqh-wetenschap."
    ],
    biografie: "Imām Muḥammad ibn Idrīs al-Shāfiʿī (رحمه الله) combineerde de tradities van Mekka, Medina en Irak. Zijn 'al-Risāla' legde als eerste systematisch de methode van islamitisch recht vast. Hij is de grondlegger van de Shāfiʿī-madhhab en één van de vier grote imams.",
    alternatieven: ["imam shafi'i", "al-shafi'i", "shafii", "imam syafii"]
  },
  {
    id: 84,
    naam: "Imām Aḥmad ibn Ḥanbal",
    arabisch: "الإِمَام أَحْمَد بْن حَنْبَل",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik reisde mijn leven lang door het islamitische rijk op zoek naar aḥādīth.",
      "Mijn Musnad bevat meer dan 30.000 aḥādīth — de grootste persoonlijk samengestelde collectie.",
      "Een kalief dwong mij de leer aan te nemen dat de Koran geschapen is — ik weigerde.",
      "Ik werd jarenlang gevangengezet en gemarteld, maar gaf geen duimbreed toe.",
      "Mijn standvastigheid wordt beschouwd als de redding van de orthodoxe geloofsleer.",
      "Ik ben de grondlegger van de Ḥanbalī-madhhab en het symbool van de verdediging van de Soenna."
    ],
    biografie: "Imām Aḥmad ibn Ḥanbal (رحمه الله) was een van de grootste hadith-kenners en de grondlegger van de Ḥanbalī-madhhab. Zijn weigering om onder martelingen toe te geven aan de Muʿtazilietische doctrine van de 'geschapen Koran' redde de orthodoxe geloofsleer. Zijn Musnad is de omvangrijkste persoonlijk samengestelde hadithverzameling.",
    alternatieven: ["ahmad ibn hanbal", "imam ahmad", "ahmed ibn hanbal"]
  },
  {
    id: 85,
    naam: "Al-Bukhārī",
    arabisch: "البُخَارِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Bukhārā, het huidige Oezbekistan, in de tweede islamitische eeuw.",
      "Ik reisde tienduizenden kilometers en leerde van meer dan duizend hadith-geleerden.",
      "Ik waste mij ritueel en bad twee rakʿāt voordat ik elke hadith opschreef.",
      "Ik siftte uit 600.000 aḥādīth de 7.563 meest betrouwbare.",
      "Mijn boek werd 'het meest betrouwbare boek na de Koran van Allah' genoemd.",
      "Ik ben Muḥammad ibn Ismāʿīl al-Bukhārī — auteur van al-Ṣaḥīḥ, de beroemdste hadithverzameling ooit."
    ],
    biografie: "Imām al-Bukhārī (رحمه الله) is de auteur van het 'Ṣaḥīḥ al-Bukhārī', door geleerden beschouwd als het meest betrouwbare boek na de Koran. Zijn strenge criteria voor het accepteren van aḥādīth en zijn spirituele toewijding — elke hadith vergezeld van gebed — legden de grondslag voor de hadith-wetenschap als exacte wetenschap.",
    alternatieven: ["bukhari", "al bukhari", "imam bukhari"]
  },
  {
    id: 86,
    naam: "Muslim ibn al-Ḥajjāj",
    arabisch: "مُسْلِم بْن الحَجَّاج",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Nīshāpūr, het huidige Iran.",
      "Ik had grote bewondering voor al-Bukhārī en leerde van hem.",
      "Ik reisde uitgebreid en onderzocht zorgvuldig de betrouwbaarheid van elke overleveraar.",
      "Ik siftte uit 300.000 aḥādīth de meest betrouwbare.",
      "Mijn verzameling wordt samen met die van al-Bukhārī de 'Twee Correcte Boeken' (al-Ṣaḥīḥayn) genoemd.",
      "Ik ben de auteur van het Ṣaḥīḥ Muslim — de tweede meest gezaghebbende hadithverzameling na die van al-Bukhārī."
    ],
    biografie: "Imām Muslim ibn al-Ḥajjāj (رحمه الله) is de auteur van het 'Ṣaḥīḥ Muslim', die samen met het Ṣaḥīḥ al-Bukhārī de twee meest betrouwbare hadithverzamelingen vormt. Zijn methodologische strengheid en zijn systematische structuur maken zijn werk tot op de dag van vandaag onmisbaar.",
    alternatieven: ["imam muslim", "muslim", "imam moslim"]
  },
  {
    id: 87,
    naam: "Al-Nawawī",
    arabisch: "النَّوَوِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik groeide op in het dorp Nawā in Syrië en reisde jong naar Damascus voor kennis.",
      "Ik stond bekend om mijn uiterste soberheid — weinig eten, weinig slapen, veel studeren.",
      "Ik stierf op de jonge leeftijd van 44 jaar, maar liet een indrukwekkend oeuvre na.",
      "Mijn 'Veertig Aḥādīth' is het meest gelezen hadith-boekje ter wereld.",
      "Mijn Riyāḍ al-Ṣāliḥīn is in vrijwel elk islamitisch huishouden te vinden.",
      "Ik ben Yaḥyā ibn Sharaf al-Nawawī — auteur van de Veertig Aḥādīth en Riyāḍ al-Ṣāliḥīn."
    ],
    biografie: "Imām al-Nawawī (رحمه الله) was een Shāfiʿī-geleerde die in zijn korte leven van 44 jaar meer produceerde dan de meeste geleerden in een heel leven. Zijn 'al-Arbaʿūn al-Nawawiyya' (Veertig Aḥādīth) en zijn 'Riyāḍ al-Ṣāliḥīn' behoren tot de meest gelezen islamitische werken aller tijden.",
    alternatieven: ["al-nawawi", "imam nawawi", "nawawi"]
  },
  {
    id: 88,
    naam: "Ibn Ḥajar al-ʿAsqalānī",
    arabisch: "ابْن حَجَر العَسْقَلَانِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Egypte in de achtste islamitische eeuw.",
      "Ik wijdde mijn leven aan de hadith-wetenschap en de beoordeling van overleveraars.",
      "Ik schreef een monumentaal commentaar op het Ṣaḥīḥ al-Bukhārī in dertien dikke delen.",
      "Dat commentaar geldt nog steeds als het standaardwerk voor begrip van al-Bukhārī.",
      "Ik schreef ook een biografisch woordenboek van 12.000 hadith-overleveraars.",
      "Ik ben de auteur van Fatḥ al-Bārī — het definitieve commentaar op al-Bukhārī en een monument in de islamitische hadith-wetenschap."
    ],
    biografie: "Ibn Ḥajar al-ʿAsqalānī (رحمه الله) was de meest gezaghebbende hadith-criticus van de late middeleeuwen. Zijn 'Fatḥ al-Bārī' — commentaar op al-Bukhārī — is 13 delen dik en geldt als het onmisbare referentiewerk voor elke serieuze hadith-studie. Hij diende als rechter in Egypte.",
    alternatieven: ["ibn hajar", "ibn hajar al asqalani", "ibn hajar asqalani"]
  },
  {
    id: 89,
    naam: "Al-Suyūṭī",
    arabisch: "السُّيُوطِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Egypte in de negende islamitische eeuw.",
      "Ik was zo productief dat ik meer dan 500 werken schreef over vrijwel elk islamitisch vakgebied.",
      "Ik memoriseerde de Koran op jonge leeftijd en begon al vroeg te schrijven.",
      "Ik schreef een Korancommentaar samen met al-Maḥallī — de bekende Tafsīr al-Jalālayn.",
      "Ik beweerde de rang van 'mujaddid' (vernieuwer) van mijn eeuw bereikt te hebben.",
      "Ik ben Jalāl al-Dīn al-Suyūṭī — de meest productieve islamitische geleerde aller tijden."
    ],
    biografie: "Jalāl al-Dīn al-Suyūṭī (رحمه الله) leefde in Egypte (1445–1505 n.Chr.) en produceerde meer dan 500 werken op elk denkbaar islamitisch terrein. Zijn Tafsīr al-Jalālayn, het meest compacte en wijdverspreide Korancommentaar, wordt tot op de dag van vandaag in madrasa's wereldwijd onderwezen.",
    alternatieven: ["al-suyuti", "suyuti", "as-suyooti"]
  },
  {
    id: 90,
    naam: "Burhān al-Dīn al-Marghīnānī",
    arabisch: "بُرْهَان الدِّين المَرْغِينَانِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Fergana (het huidige Oezbekistan) in de twaalfde islamitische eeuw.",
      "Ik was een Ḥanafī-geleerde die uitgebreid studeerde en schreef.",
      "Ik schreef een handboek dat de Ḥanafī-fiqh compact en helder samenvat.",
      "Dat handboek nam ik zelf als basis voor een uitgebreider commentaar.",
      "Mijn hoofdwerk 'al-Hidāya' werd het meest bestudeerde Ḥanafī-fiqhboek na de 'Ẓāhir al-Riwāya'.",
      "Ik ben de auteur van al-Hidāya — het meest gezaghebbende Ḥanafī-fiqhleerboek dat in madrasa's wereldwijd wordt onderwezen."
    ],
    biografie: "Burhān al-Dīn al-Marghīnānī (رحمه الله) schreef al-Hidāya, het invloedrijkste handboek van de Ḥanafī-madhhab. Het werk is een commentaar op zijn eigen eerdere compendium en geldt als standaard in islamitische rechtsstudie wereldwijd, van Pakistan tot Turkije tot Indonesië.",
    alternatieven: ["al-marghinani", "marghinani", "burhan al-din al-marghinani"]
  },
  {
    id: 91,
    naam: "Fakhr al-Dīn al-Rāzī",
    arabisch: "فَخْر الدِّين الرَّازِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik werd geboren in Rayy (Iran) in de zesde islamitische eeuw.",
      "Ik was tegelijk filosoof, theoloog, arts en Koranuitlegger.",
      "Ik debatteerde openlijk met Muʿtazilieten, filosofen en andere stromingen — en versloeg hen.",
      "Mijn tafsīr is zo uitgebreid en encyclopedisch dat men zei: 'Het bevat alles, behalve tafsīr.'",
      "Ik was een aanhanger van de Ashʿarī-Māturīdī theologie.",
      "Ik ben de auteur van Mafātīḥ al-Ghayb — de grootste encyclopedische Korancommentaar in de islamitische geschiedenis."
    ],
    biografie: "Fakhr al-Dīn al-Rāzī (رحمه الله) was een veelzijdig islamitisch wetenschapper die fiqh, theologie, filosofie en geneeskunde combineerde. Zijn 'Mafātīḥ al-Ghayb' (ook bekend als al-Tafsīr al-Kabīr) is de meest omvangrijke tafsīr ooit geschreven en een encyclopedie van islamitische wetenschappen.",
    alternatieven: ["fakhr al-din al-razi", "al-razi", "fakhruddin razi"]
  },
  {
    id: 92,
    naam: "Ibn Rajab al-Ḥanbalī",
    arabisch: "ابْن رَجَب الحَنْبَلِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik was een Ḥanbalī-geleerde die leefde in Damascus en Jeruzalem in de achtste islamitische eeuw.",
      "Ik schreef een biografie van de grote Ḥanbalī-geleerden door de eeuwen heen.",
      "Ik schreef een diep en ontroerend commentaar op de Veertig Aḥādīth van al-Nawawī.",
      "Mijn werken over Ramaḍān en de deugden van de dag van ʿArafā zijn tot op de dag van vandaag populair.",
      "Ik stond bekend om mijn prachtige, bewogen schrijfstijl.",
      "Ik ben Ibn Rajab al-Ḥanbalī — wiens commentaren over ascetisme en kennis tot de mooiste in de islamitische literatuur behoren."
    ],
    biografie: "Ibn Rajab al-Ḥanbalī (رحمه الله) was een veertiende-eeuwse geleerde wiens werken over deugden, toewijding en kennis tot de meest geliefde in de islamitische bibliotheek behoren. Zijn commentaar op de Veertig Aḥādīth van al-Nawawī — 'Jāmiʿ al-ʿUlūm wal-Ḥikam' — is een tijdloos klassieker.",
    alternatieven: ["ibn rajab", "ibn rajab al hanbali"]
  },
  {
    id: 93,
    naam: "Aḥmad Sirhindī",
    arabisch: "أَحْمَد السِّرْهِنْدِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in India in de tijd van de Mughal-keizers Akbar en Jahāngīr.",
      "Ik verzette mij tegen de syncretistische religieuze politiek van keizer Akbar.",
      "Ik schreef honderden brieven aan edellieden en ministers om hen terug te leiden naar de orthodoxe islam.",
      "Ik werd gevangengezet door keizer Jahāngīr, maar bleef standvastig.",
      "Ik vernieuwd de islamitische spiritualiteit en orthodoxie op het Indiase subcontinent.",
      "Ik ben 'Mujaddid Alf Thānī' — de Vernieuwer van het Tweede Millennium — een Naqshbandī-meester die de Soenna in India herstelde."
    ],
    biografie: "Aḥmad al-Fārūqī al-Sirhindī (رحمه الله) leefde in India (1564–1624 n.Chr.) en stond bekend als de grootste islamitische vernieuwer van het tweede islamitische millennium. Via zijn honderden brieven (Maktūbāt) bracht hij de Mughal-adel terug naar de orthodoxe islam.",
    alternatieven: ["ahmad sirhindi", "mujaddid alf thani", "imam rabbani"]
  },
  {
    id: 94,
    naam: "Bahā' al-Dīn Naqshband",
    arabisch: "بَهَاء الدِّين نَقْشَبَنْد",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Bukhārā (Oezbekistan) in de veertiende eeuw.",
      "Ik werkte met mijn handen als boer en leefde uiterst sober.",
      "Ik leerde via een spirituele keten die teruggaat naar Abū Bakr al-Ṣiddīq.",
      "Ik stond bekend om de 'stille dhikr' — het gedenken van Allah in het hart, zonder luid te spreken.",
      "Mijn stelregel was: 'Buiten met de wereld, binnen met Allah.'",
      "Ik ben de naamgever van de Naqshbandiyya — de meest verspreide Ṣūfī-orde ter wereld."
    ],
    biografie: "Bahā' al-Dīn Muḥammad Naqshband (رحمه الله) was een veertiende-eeuwse spirituele meester uit Bukhārā. De Naqshbandiyya-orde die zijn naam draagt verspreidde zich via Centraal-Azië, India (Mujaddidī-tak) en het Ottomaanse rijk en is vandaag de meest wijdverbreide Ṣūfī-orde wereldwijd.",
    alternatieven: ["bahauddin naqshband", "baha al-din naqshband", "naqshband"]
  },
  {
    id: 95,
    naam: "Shāh Walīullāh al-Dihlawī",
    arabisch: "شَاه وَلِيّ اللَّه الدِّهْلَوِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Delhi, India, in de achttiende eeuw.",
      "Ik reisde naar Mekka en Medina voor jarenlange diepgaande studie.",
      "Ik vertaalde de Koran voor het eerst in het Perzisch — een omstreden maar historische stap.",
      "Ik probeerde de vier rechtsscholen met elkaar te verzoenen via een overkoepelende methodologie.",
      "Mijn werken beïnvloedden generaties islamitische geleerden op het Indiase subcontinent.",
      "Ik ben Shāh Walīullāh al-Dihlawī — de invloedrijkste islamitische denker van het achttiende-eeuwse India."
    ],
    biografie: "Shāh Walīullāh al-Dihlawī (رحمه الله) leefde in India (1703–1762 n.Chr.) en probeerde de islamitische wetenschappen te vernieuwen en te integreren. Zijn werken verbinden hadith, fiqh, theologie en spiritualiteit in een unieke synthese. Zijn nalatenschap werkt door in bijna alle islamitische stromingen op het Indiase subcontinent.",
    alternatieven: ["shah waliullah", "wali ullah dehlawi", "shah wali allah"]
  },
  {
    id: 96,
    naam: "ʿIzz al-Dīn ibn ʿAbd al-Salām",
    arabisch: "عِزّ الدِّين بْن عَبْد السَّلَام",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Damascus en Egypte in de dertiende eeuw.",
      "Ik was zo rechtuit dat sultans mij vreesden.",
      "Ik verbood een sultan openlijk zijn eigen slaven te verkopen en eiste eerlijke behandeling.",
      "Ik werd 'Sulṭān al-ʿUlamā'' — de sultan der geleerden — genoemd.",
      "Ik schreef 'Qawāʿid al-Aḥkām' — een baanbrekend werk over de doelstellingen van de islamitische wet.",
      "Ik ben een van de grootse geleerden van de dertiende eeuw, die onverschrokken voor gerechtigheid opkwam tegenover sultans."
    ],
    biografie: "ʿIzz al-Dīn ibn ʿAbd al-Salām (رحمه الله) was een Shāfiʿī-geleerde en rechter die bekendstond om zijn absolute moed tegenover machthebbers. Zijn 'Qawāʿid al-Aḥkām fī Maṣāliḥ al-Anām' is een fundament in de theorie van islamitisch recht en zijn nadruk op welzijn en rechtvaardigheid.",
    alternatieven: ["izz al-din ibn abd al-salam", "sultan al ulama", "ibn abd al-salam"]
  },
  {
    id: 97,
    naam: "Umm ʿAmāra",
    arabisch: "أُمّ عُمَارَة",
    eretitel: "رضي الله عنها",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik nam deel aan de slag bij Uḥud, aanvankelijk als verpleegster met water en verbanden.",
      "Toen de situatie gevaarlijk werd, greep ik zelf naar een zwaard en schild.",
      "Ik verdedigde de Profeet ﷺ persoonlijk toen vijanden hem aanvielen.",
      "De Profeet ﷺ zei: 'Waar ik ook keek op die dag, rechts of links, zag ik haar voor mij vechten.'",
      "Ik raakte zwaargewond maar bleef doorvechten.",
      "Ik ben Nusayba bint Kaʿb — een van de beroemdste vrouwelijke strijders in de islamitische geschiedenis."
    ],
    biografie: "Umm ʿAmāra, ook bekend als Nusayba bint Kaʿb (رضي الله عنها), was een metgezellin die bij Uḥud van verpleegster veranderde in strijdster om de Profeet ﷺ te beschermen. De Profeet ﷺ bad speciaal voor haar na de slag. Ze nam ook deel aan latere veldslagen en verloor daarbij een hand.",
    alternatieven: ["umm amara", "nusayba", "nusaybah bint ka'b"]
  },
  {
    id: 98,
    naam: "Zaynab bint ʿAlī",
    arabisch: "زَيْنَب بِنْت عَلِيّ",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik groeide op in het huis van de Profeet ﷺ als kleinkind van zijn dochter.",
      "Ik vergezelde mijn broer op zijn reis naar Karbalā'.",
      "Ik overleefde de ramp van Karbalā' en zorgde voor de gewonde gevangenen.",
      "Ik sprak voor de rechtbank van Yazīd in Damascus de beroemdste toespraak uit de islamitische vrouwengeschiedenis.",
      "Mijn woorden maakten de tirannie van Yazīd wereldkundig en onvergeetbaar.",
      "Ik ben de dochter van ʿAlī en Fāṭima en kleindochter van de Profeet ﷺ — de stem van Karbalā'."
    ],
    biografie: "Zaynab bint ʿAlī (رضي الله عنها) was de dochter van ʿAlī en Fāṭima en kleindochter van de Profeet ﷺ. Haar standvastigheid na Karbalā' en haar onverschrokken toespraak voor Yazīd maakten haar tot een symbool van moed en waardigheid. Ze zorgde voor de overlevenden en droeg de boodschap van Karbalā' de wereld in.",
    alternatieven: ["zaynab bint ali", "zainab bint ali"]
  },
  {
    id: 99,
    naam: "Muḥammad al-Bāqir",
    arabisch: "مُحَمَّد البَاقِر",
    eretitel: "رحمه الله",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was aanwezig als klein kind bij de ramp van Karbalā'.",
      "Ik groeide op in Medina en wijdde mijn leven aan kennis en onderwijs.",
      "Ik stond bekend om mijn diepgaande uitleg van de Koran en islamitische wetenschappen.",
      "Mijn bijnaam betekent 'degene die kennis openbreekt en diep analyseert'.",
      "Ik was de vader van Jaʿfar al-Ṣādiq, van wie Abū Ḥanīfa twee jaar leerde.",
      "Ik ben de vijfde imam in de traditie van de Ahl al-Bayt en achterkleinkind van de Profeet ﷺ."
    ],
    biografie: "Muḥammad al-Bāqir (رحمه الله) was een groot geleerde uit de familie van de Profeet ﷺ, bekend om zijn diepgaande kennis. Zijn bijnaam 'al-Bāqir' — de openbreker van kennis — weerspiegelt zijn wetenschappelijke bijdrage. Hij was de vader van Jaʿfar al-Ṣādiq, van wie Abū Ḥanīfa twee jaar leerde.",
    alternatieven: ["muhammad al baqir", "al-baqir", "imam baqir"]
  },
  {
    id: 100,
    naam: "Abū al-Ḥasan al-Ashʿarī",
    arabisch: "أَبُو الحَسَن الأَشْعَرِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik was aanvankelijk een leerling van de Muʿtazilietische school en leerde van al-Jubbā'ī.",
      "Op veertigjarige leeftijd verbrak ik openlijk met het Muʿtazilisme na een diepgaande herbezinning.",
      "Ik kondigde mijn ommekeer aan vanuit de preekstoel van de moskee van Baṣra.",
      "Ik ontwikkelde een methode die islamitische orthodoxie verdedigde mét gebruik van rationele logica.",
      "Mijn naam staat naast al-Māturīdī als de twee grote imams van de Soennitische geloofsleer.",
      "Ik ben de grondlegger van de Ashʿariyya — een van de twee hoofdstromingen van de Soennitische theologie."
    ],
    biografie: "Abū al-Ḥasan al-Ashʿarī (رحمه الله) leefde in Baṣra en Baghdād (874–936 n.Chr.) en stichtte de Ashʿariyya-school van islamitische theologie. Samen met al-Māturīdī — zijn tijdgenoot in Samarqand — vormt hij de theologische ruggengraat van het Soennitische islam. De Shāfiʿī's en Mālikī's volgen overwegend de Ashʿarī-lijn.",
    alternatieven: ["abu al-hasan al-ash'ari", "al-ash'ari", "ashari", "ash'ari"]
  },
  {
    id: 101,
    naam: "ʿAlī al-Qārī",
    arabisch: "عَلِيّ القَارِيّ",
    eretitel: "رحمه الله",
    categorie: "Geleerden",
    hints: [
      "Ik leefde in Mekka in de tiende en elfde islamitische eeuw.",
      "Ik was een Ḥanafī-geleerde die ook bekend stond als meester in Koranrecitatie.",
      "Ik schreef een uitgebreid commentaar op de al-ʿAqīda al-Ṭaḥāwiyya.",
      "Ik schreef ook een commentaar op de al-Arbaʿūn al-Nawawiyya en talloze andere werken.",
      "Ik was autoriteit in hadith, fiqh, tafsīr én de wetenschap van Koranrecitatie.",
      "Ik ben ʿAlī al-Qārī — een van de meest veelzijdige Ḥanafī-geleerden van Mekka."
    ],
    biografie: "ʿAlī ibn Sulṭān al-Qārī al-Harawī (رحمه الله) was een tiende-eeuwse Ḥanafī-geleerde die in Mekka leefde. Hij was autoriteit in vrijwel alle islamitische disciplines en schreef commentaren op klassieke teksten als de al-ʿAqīda al-Ṭaḥāwiyya en de Mishkāt al-Maṣābīḥ. Zijn werken zijn tot op de dag van vandaag standaard in Ḥanafī-madrasa's.",
    alternatieven: ["ali al-qari", "mulla ali al-qari", "molla ali kari"]
  },
  {
    id: 102,
    naam: "Ruqayya bint Muḥammad",
    arabisch: "رُقَيَّة بِنْت مُحَمَّد",
    eretitel: "رضي الله عنها",
    categorie: "Familie van de Profeet",
    hints: [
      "Ik was een dochter van de Profeet ﷺ en Khadīja.",
      "Mijn eerste man was een zoon van Abū Lahab — hij verstiet mij op druk van zijn familie nadat de islam werd geopenbaard.",
      "Ik trouwde daarna met een man die bekend staat om zijn bescheidenheid en zijn twee namen.",
      "Mijn man en ik migreerden samen naar Abessinië — de eerste hidjra in de islamitische geschiedenis.",
      "Ik stierf terwijl de slag bij Badr werd uitgevochten.",
      "Ik ben de dochter van de Profeet ﷺ die twee keer migreerde voor haar geloof — naar Abessinië en naar Medina."
    ],
    biografie: "Ruqayya (رضي الله عنها) was de tweede dochter van de Profeet ﷺ. Ze migreerde twee keer: eerst naar Abessinië en later naar Medina. Ze trouwde met ʿUthmān ibn ʿAffān, die later de derde khalīfa zou worden. Ze stierf terwijl haar man deelnam aan de slag bij Badr.",
    alternatieven: ["ruqayya", "ruqayyah bint muhammad"]
  },
  {
    id: 103,
    naam: "Asmā' bint ʿUmays",
    arabisch: "أَسْمَاء بِنْت عُمَيْس",
    eretitel: "رضي الله عنها",
    categorie: "Ṣaḥāba",
    hints: [
      "Ik was een van de vroegste moslima's en migreerde als een van de eersten naar Abessinië.",
      "Mijn eerste man, Jaʿfar ibn Abī Ṭālib, stierf als martelaar bij Muʾta.",
      "Ik trouwde daarna met Abū Bakr al-Ṣiddīq.",
      "Na zijn dood trouwde ik met ʿAlī ibn Abī Ṭālib.",
      "Ik was dus getrouwd met drie van de meest vooraanstaande mannen in de islamitische geschiedenis.",
      "Ik was bekend om mijn kennis, vroomheid en haar directe toegang tot de vroegste gebeurtenissen van de islam."
    ],
    biografie: "Asmā' bint ʿUmays (رضي الله عنها) was een uitzonderlijke metgezellin die de eerste hidjra naar Abessinië meemaakte. Ze was achtereenvolgens getrouwd met Jaʿfar ibn Abī Ṭālib, Abū Bakr en ʿAlī — drie van de meest centrale figuren in de vroege islam. Haar overleveringen zijn opgenomen in de klassieke hadith-werken.",
    alternatieven: ["asma bint umays", "asma'", "asmaa bint umais"]
  },
  {
    id: 104,
    naam: "Ilyās",
    arabisch: "إِلْيَاس",
    eretitel: "عليه السلام",
    categorie: "Profeten",
    hints: [
      "Ik werd gestuurd naar een volk in het noorden van Kanaän dat afgoden aanbad.",
      "Mijn volk aanbad een afgod genaamd Baʿl.",
      "Ik riep hen op: 'Zult u Baʿl aanroepen en de beste Schepper verlaten?'",
      "Mijn volk verwierp mij en ik vluchtte voor hun dreiging.",
      "Allah verloste mij en mijn naam wordt in de Koran bewaard als een gegroete.",
      "Ik ben een profeet uit de lijn van de Banī Isrā'īl, wiens naam in de Koran eeuwig is gezegend."
    ],
    biografie: "Ilyās (عليه السلام) was een profeet gezonden naar de Banī Isrā'īl in het noorden van Kanaän. Hij streed tegen de afgodendienst van Baʿl. De Koran vermeldt hem als een van de rechtvaardigen en zegt dat zijn naam voor de latere generaties werd bewaard als een vredessalut.",
    alternatieven: ["ilyas", "elia", "elijah"]
  }
];
