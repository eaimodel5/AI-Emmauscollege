import type { Workshop } from '../types';

export const workshops: Workshop[] = [
    {
        id: 1,
        title: "Theoretische basis van AI met tool-introductie",
        summary: "Kennismaking met generatieve AI, LLM, bias, hallucinaties en AI-niveaus. Leerlingen maken onderscheid tussen menselijk denkwerk en AI-hulp. Ze testen een voorbeeldprompt in ChatGPT en Gemini en reflecteren op voorspellend karakter van AI.",
        didacticTips: [
            "Gebruik diverse prompts om verschillen tussen ChatGPT en Gemini zichtbaar te maken.",
            "Benadruk dat AI voorspelt en niet begrijpt.",
            "Voorkom het gebruik van persoonsgegevens in prompts."
        ],
        formsAndAttachments: ["AI-begrip-formulier", "Reflectie-en-exit-formulier"],
        oopNote: "Administratief personeel kan deze sessie ook gebruiken om te begrijpen hoe AI generatieve output levert en hoe zij reflecties veilig kunnen opslaan.",
        metadata: {
            duration: "45 min",
            level: "Basis",
            targetAudience: "Docenten, OOP, leidinggevenden"
        },
        learningGoals: [
            "Verklaren wat generatieve AI is (voorspellen ≠ begrijpen).",
            "Herkennen van hallucinaties en bias in AI-output.",
            "Menselijke kernhandeling herkennen vs AI-ondersteuning.",
            "Een eenvoudige prompt uitvoeren in ChatGPT en Gemini en de uitkomsten analyseren.",
            "Reflecteren op mens- en AI-rollen in onderwijs."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Startvraag: “Wat doet AI precies wanneer hij ‘denkt’?”" },
            { time: "5-15 min", phase: "Uitleg", activity: "Presentatie over AI als voorspeller, hallucinatie, bias en AI-niveaus." },
            { time: "15-25 min", phase: "Demonstratie", activity: "Trainer voert dezelfde prompt in ChatGPT en Gemini en bespreekt verschillen in toon en structuur." },
            { time: "25-35 min", phase: "Oefening", activity: "Duo’s maken een prompt op eigen vakgebied en testen deze in beide tools." },
            { time: "35-40 min", phase: "Discussie", activity: "Bespreek transparantie en regie, link met AI-handboek." },
            { time: "40-45 min", phase: "Reflectie & exit-ticket", activity: "Vul invulblad in: Wat heb ik geleerd? Wat moet een leerling zelf doen? Wat ga ik uitproberen?" }
        ],
        tools: [
            { name: "ChatGPT", usage: "Voer prompt in, bekijk woordgebruik en controleer op hallucinaties." },
            { name: "Gemini", usage: "Voer dezelfde prompt in, vergelijk structuur en toon, klik op “Source” voor bronnen." }
        ],
        practicalInfo: "Benodigdheden: beamer, wifi, accounts voor ChatGPT en Gemini, AI-handboek, reflectie-/exitformulier. Breng laptop of tablet mee.",
        sources: [
            { title: "Wat is generatieve AI? - IBM", url: "https://www.ibm.com/nl-nl/topics/generative-ai" },
            { title: "De Europese AI-act uitgelegd - Rijksoverheid", url: "https://www.rijksoverheid.nl/onderwerpen/kunstmatige-intelligentie/de-europese-ai-verordening-ai-act" },
            { title: "AI in het onderwijs: kansen en risico's - Kennisnet", url: "https://www.kennisnet.nl/themas/digitalisering-in-het-onderwijs/kunstmatige-intelligentie-ai/" }
        ],
        coreConcepts: [
            { term: "Generatieve AI", definition: "AI die zelfstandig tekst, beeld, geluid of code genereert op basis van patronen in data.", example: "ChatGPT schrijft een brief; Gemini maakt een infographic." },
            { term: "LLM", definition: "Taalsysteem dat op enorme hoeveelheden tekst is getraind en de meest waarschijnlijke volgende woorden voorspelt.", example: "ChatGPT of Gemini-Pro." },
            { term: "Hallucinatie", definition: "Wanneer AI foutieve of verzonnen informatie produceert die plausibel klinkt.", example: "“De AI Act werd in 2017 ingevoerd” → onjuist." },
            { term: "Bias", definition: "Onbedoelde vertekening in AI-output door scheve trainingsdata.", example: "AI geeft voorbeelden die vooral Westers of mannelijk zijn." },
            { term: "AI-niveaus", definition: "Ondersteunend (AI helpt → mens beslist), Gedeeld (AI adviseert → mens controleert), Autonoom (AI beslist → verboden in onderwijs).", example: "" }
        ],
        safetyAndResponsibility: {
            legislation: "AI Act → onderwijs = hoog risico → menselijke toezicht verplicht.",
            avg: "Geen persoonlijke data in prompts.",
            officer: "Registreert gebruik en reflecties.",
            rules: "AI mag ondersteunen, niet beslissen.",
            labels: "Gebruik na de oefening het label “AI Assisted”."
        }
    },
    {
        id: 2,
        title: "Hoe bouw ik een effectieve prompt?",
        summary: "Leer hoe je systematisch een goede prompt opbouwt met context, taak en vorm. Maak kennis met verschillende promptvormen (basis, verbeter, denk) en test in ChatGPT en Gemini.",
        didacticTips: ["Gebruik de ezelsbrug PROMPT (Plaats, Rol, Opdracht, Menselijke stap, Proef, Terugkijken).", "Geef per promptvorm een concreet voorbeeld."],
        formsAndAttachments: ["Promptdesign-kaart", "Rubric-Kwaliteit-prompt-en-output", "Checklist-Mens-vs-AI"],
        oopNote: "OOP kan prompts gebruiken voor administratieve taken zoals mails herschrijven; vinken welke stap menselijk blijft.",
        metadata: {
            duration: "45 min",
            level: "Basis / Expert",
            targetAudience: "Docenten met basiskennis over AI"
        },
        learningGoals: [
            "Structuur van een effectieve prompt (context, taak, format, constraints) toepassen.",
            "Gebruik van prompttypes: basis, verbeter- en denk-prompt.",
            "Prompt verfijnen met chaining en self-critique.",
            "Menselijke denkstappen onderscheiden van AI-output.",
            "Reflecteren op verbeteringen van prompts."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Deel een voorbeeld van een mislukte prompt. Wat ging er mis?" },
            { time: "5-15 min", phase: "Uitleg", activity: "Ontleed voorbeelden van effectieve prompts. Introduceer structuur en prompttypes." },
            { time: "15-30 min", phase: "Oefenen in duo’s", activity: "Formuleer een basisprompt en test in ChatGPT; gebruik rubriek om te verbeteren." },
            { time: "30-40 min", phase: "Toepassing individueel", activity: "Ontwerp een prompt voor eigen vak. Verfijn en test opnieuw, noteer verbeteringen." },
            { time: "40-45 min", phase: "Reflectie & exit", activity: "Bespreek welke prompttype je het meest aanspreekt en waarom." }
        ],
        tools: [
            { name: "ChatGPT", usage: "Voer prompts in, bekijk output en verbeter middels self-critique." },
            { name: "Gemini", usage: "Vergelijk output, let op structuur en bias." }
        ],
        practicalInfo: "Benodigd: laptop, accounts voor ChatGPT/Gemini, promptkaart en rubriek. Breng eigen lesmateriaal voor realistische prompts.",
        sources: [
            { title: "Prompt engineering guide", url: "https://www.promptingguide.ai/" },
            { title: "Leren prompen voor onderwijsprofessionals - AI voor Onderwijs", url: "https://www.aivooronderwijs.nl/leren-prompten" },
            { title: "Awesome ChatGPT prompts on GitHub", url: "https://github.com/f/awesome-chatgpt-prompts" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: PROMPT",
            items: [
                { letter: "P", meaning: "Plaats: context geven", didacticLink: "Activeren van voorkennis", explanation: "Geef de AI de achtergrondinformatie die hij nodig heeft. Wie is de doelgroep? Wat is het onderwerp? Welke voorkennis is relevant? Dit helpt de AI om een relevanter en passender antwoord te genereren." },
                { letter: "R", meaning: "Rol van AI beschrijven", didacticLink: "Modeling en taakverdeling", explanation: "Vertel de AI welke rol of persona hij moet aannemen. Bijvoorbeeld: 'Gedraag je als een expert in de didactiek' of 'Schrijf als een 15-jarige scholier'. Dit beïnvloedt de toon, stijl en diepgang van de output." },
                { letter: "O", meaning: "Opdracht duidelijk maken", didacticLink: "Expliciete instructie", explanation: "Wees specifiek en ondubbelzinnig in wat de AI moet doen. Gebruik actieve werkwoorden zoals 'maak', 'analyseer', 'vergelijk', 'vat samen'. Hoe duidelijker de taak, hoe beter het resultaat." },
                { letter: "M", meaning: "Menselijke stap inbouwen", didacticLink: "Eigenaarschap / agency", explanation: "Definieer expliciet welke rol jij als mens hebt. Bijvoorbeeld: 'Lever drie concepten, waaruit ik de beste kies' of 'Controleer de output op feitelijke juistheid'. Dit waarborgt de menselijke controle en het kritisch denkproces." },
                { letter: "P", meaning: "Proef uit in twee tools", didacticLink: "Vergelijkend leren", explanation: "Voer dezelfde prompt uit in verschillende AI-modellen (zoals ChatGPT en Gemini). Analyseer de verschillen in output. Dit leert je de sterke en zwakke punten van elke tool kennen en geeft je een breder perspectief." },
                { letter: "T", meaning: "Terugkijken en aanpassen", didacticLink: "Formatieve feedback", explanation: "De eerste prompt is zelden perfect. Evalueer de output kritisch en pas je prompt aan op basis van wat je ziet. Prompten is een iteratief proces van verfijnen en verbeteren." }
            ]
        }
    },
    {
        id: 3,
        title: "(Visueel) lesmateriaal maken",
        summary: "Maak visuele materialen zoals schema’s, posters en infographics met AI. Leer meerdere tools kennen (Microsoft Image Creator, Canva, Adobe Firefly, DALL·E 3, Gemini). Focus op didactische controle en veiligheid.",
        didacticTips: ["Gebruik de ezelsbrug VISUEEL (Verduidelijk, Illustreer, Selecteer, Gebruik, Evalueer, Expliciteer, Leer).", "Geef per tool één concreet voorbeeldprompt."],
        formsAndAttachments: ["Checklist-beeldkwaliteit-en-veiligheid", "Stappenplan-schema-maken", "Stappenplan-poster-maken"],
        oopNote: "OOP kan deze tools gebruiken voor posters, roosters of proceskaarten; gebruik de checklist voor veilige en juiste visualisaties.",
        metadata: {
            duration: "90 min",
            level: "Basis / Expert",
            targetAudience: "Docenten en OOP-personeel"
        },
        learningGoals: [
            "Schrijven van visuele prompts voor verschillende tools.",
            "Verschillende AI-tools voor beeldanalyse en creatie vergelijken.",
            "Kwaliteit en bias in AI-beelden evalueren met behulp van een checklist.",
            "Visuele output verbeteren door menselijk oordeel (selecteren, bewerken).",
            "Reflecteren op de rol van beeld in leren en bias."
        ],
        lessonFlow: [
            { time: "0-10 min", phase: "Activeren", activity: "Toon drie beelden (echte, AI, fout) en bespreek wat bruikbaar is." },
            { time: "10-25 min", phase: "Instructie", activity: "Leg uit wat een visuele prompt is, met voorbeelden." },
            { time: "25-45 min", phase: "Demo", activity: "Trainer genereert een schema en poster in meerdere tools; bespreek verschillen." },
            { time: "45-70 min", phase: "Zelf ontwerpen", activity: "Deelnemers maken eigen beelden; gebruik stappenplannen voor schema/poster/infographic." },
            { time: "70-80 min", phase: "Verbeteren", activity: "Beoordeel elkaars werk met checklist en pas aan." },
            { time: "80-90 min", phase: "Reflectie", activity: "Deel inzichten: welke tool? welke biases?" }
        ],
        tools: [
            { name: "Microsoft Image Creator", usage: "Snel AI-illustraties maken vanuit tekst, geïntegreerd in Designer." },
            { name: "Canva Magic Design", usage: "Posters en infographics met AI-suggesties." },
            { name: "Adobe Firefly", usage: "Hogere kwaliteit, controle over stijl, getraind op stockmateriaal." },
            { name: "DALL·E 3 (via ChatGPT Plus)", usage: "Beelden genereren binnen chatomgeving, goed in tekstweergave." },
            { name: "Gemini", usage: "Genereren van grafieken en visuals binnen de chat-context." }
        ],
        practicalInfo: "Benodigd: laptop en werkende accounts voor elke tool; beamer; evaluatie checklist; werkbladen per deelnemer. Breng eigen onderwerp.",
        sources: [
            { title: "Adobe Firefly voor het onderwijs", url: "https://www.adobe.com/nl/education/firefly.html" },
            { title: "Canva voor onderwijs", url: "https://www.canva.com/nl_nl/onderwijs/" },
            { title: "Bias in AI-beeldgeneratoren - MIT Technology Review", url: "https://www.technologyreview.com/2022/07/21/1056191/ai-image-generators-bias-racism-sexism-art-dalle-midjourney/" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: VISUEEL",
            items: [
                { letter: "V", meaning: "Verduidelijk je doel", didacticLink: "Expliciete instructie", explanation: "Wat wil je met het beeld bereiken? Moet het iets uitleggen, inspireren of samenvatten? Een helder doel leidt tot een effectievere prompt en een beter eindresultaat." },
                { letter: "I", meaning: "Illustreer alleen wat nodig is", didacticLink: "Beperkte cognitieve belasting", explanation: "Voorkom visuele ruis. Een goed beeld focust op de essentie en leidt niet af. Vraag de AI om overbodige details weg te laten om de cognitieve belasting voor de leerling te minimaliseren." },
                { letter: "S", meaning: "Selecteer zelf het beste beeld", didacticLink: "Eigenaarschap", explanation: "Genereer altijd meerdere opties en kies als professional het beeld dat didactisch het sterkst is. De AI is een hulpmiddel, jij bent de curator en eindverantwoordelijke." },
                { letter: "U", meaning: "Gebruik meerdere tools", didacticLink: "Vergelijkend leren", explanation: "Elke tool heeft zijn eigen stijl en sterktes. Probeer je prompt in verschillende beeldgeneratoren om te zien welke het beste resultaat geeft voor jouw specifieke doel." },
                { letter: "E", meaning: "Evalueer veiligheid en bias", didacticLink: "Ethisch bewustzijn", explanation: "Controleer het gegenereerde beeld altijd op ongewenste stereotypen, vooroordelen (bias) of onveilige inhoud. Wees je bewust van de ethische implicaties van de beelden die je inzet." },
                { letter: "E", meaning: "Expliciteer je denkstap", didacticLink: "Metacognitie", explanation: "Leg aan leerlingen uit waarom je voor een bepaald beeld hebt gekozen en wat het toevoegt aan de lesstof. Dit modelleert kritisch en bewust mediagebruik." },
                { letter: "L", meaning: "Leer van feedback", didacticLink: "Formatieve cyclus", explanation: "Vraag feedback aan collega's of zelfs leerlingen over de duidelijkheid en effectiviteit van het beeld. Gebruik deze input om je toekomstige visuele prompts te verbeteren." }
            ]
        }
    },
    {
        id: 4,
        title: "Werkafspraken maken met leerlingen over AI",
        summary: "Samen met leerlingen afspraken formuleren over AI-gebruik, gebaseerd op de AI-Werkafspraken. Deelnemers vullen het formulier in en maken een klasposter.",
        didacticTips: ["Vervang de placeholder-case door een realistische casus (“Mag AI spelling controleren bij huiswerk?”) om discussie op gang te brengen.", "Gebruik de ezelsbrug A-I-R (Afspraken, Inzicht, Respect voor AI-vrije zones)."],
        formsAndAttachments: ["AI-Werkafsprakenformulier", "Poster-sjabloon", "Digitale-spreadsheet-registratie"],
        oopNote: "OOP kan een gelijkaardig werkafsprakenformulier gebruiken voor interne processen, bv. oudersmailing: “AI mag helpen met taal, niet met besluitvorming.”",
        metadata: {
            duration: "45 min",
            level: "Basis",
            targetAudience: "Docenten, mentoren, leerlingbegeleiders"
        },
        learningGoals: [
            "Het AI-Werkafsprakenformulier begrijpen en invullen.",
            "Afspraken maken over functie, taakverdeling, werktijden, transparantie & ethiek, evaluatie.",
            "Samen met leerlingen regels formuleren en visualiseren.",
            "Risico’s en privacy rond AI-gebruik bespreken.",
            "Reflecteren op AI-gebruik en afspreken wanneer AI niet gebruikt wordt."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Poll over AI-gebruik & gevoelens hierover." },
            { time: "5-15 min", phase: "Instructie", activity: "Toelichting op de vijf delen van het werkafsprakenformulier." },
            { time: "15-30 min", phase: "Invullen in duo’s", activity: "Deelnemers vullen het formulier in voor hun vak; bespreek grijze zones." },
            { time: "30-40 min", phase: "Afsprakenposter", activity: "Vat de afspraken samen in drie regels op een poster met pictogrammen." },
            { time: "40-45 min", phase: "Reflectie", activity: "Bespreek welke regel het meest begrip creëert; vul exit-ticket in." }
        ],
        tools: [
            { name: "AI-Werkafsprakenformulier", usage: "Papier of digitale versie om afspraken vast te leggen." },
            { name: "Poster-sjabloon (Canva/Google Slides)", usage: "Voor het visualiseren van de klassenregels." },
            { name: "Digitale spreadsheet (Excel/Google Sheets)", usage: "Voor registratie en periodieke updates van de afspraken." }
        ],
        practicalInfo: "Benodigd: kopieën of digitale exemplaren van AI-Werkafsprakenformulier, laptop/tablet, sjabloon voor posters.",
        sources: [
            { title: "Handreiking AI in het voortgezet onderwijs - VO-raad", url: "https://www.vo-raad.nl/onderwerpen/digitalisering/kunstmatige-intelligentie/handreiking-ai" },
            { title: "Voorbeeldles over AI en ethiek - Mediawijzer.net", url: "https://www.mediawijzer.net/lesmaterialen/ai-in-de-klas-ethiek-en-toekomst/" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: A-I-R",
            items: [
                { letter: "A", meaning: "Afspraken maken met leerlingen", didacticLink: "Eigenaarschap", explanation: "Betrek leerlingen actief bij het opstellen van de regels. Dit creëert draagvlak en eigenaarschap, waardoor de kans groter is dat de afspraken worden nageleefd." },
                { letter: "I", meaning: "Inzicht in AI-gebruik", didacticLink: "Transparantie / reflectie", explanation: "Maak het doel van de afspraken duidelijk: niet om te verbieden, maar om te leren wanneer en hoe AI effectief en ethisch kan worden ingezet. Stimuleer een open dialoog over het gebruik." },
                { letter: "R", meaning: "Respect voor AI-vrije zones", didacticLink: "Controleerbaar leren", explanation: "Definieer expliciet momenten of opdrachten waarbij AI-gebruik niet is toegestaan, bijvoorbeeld tijdens een toets of bij het schrijven van een persoonlijke reflectie. Dit beschermt de ontwikkeling van kernvaardigheden." }
            ]
        }
    },
    {
        id: 5,
        title: "Leerlingen begeleiden bij effectief AI-gebruik",
        summary: "Leer hoe je leerlingen begeleidt bij het veilig en effectief gebruiken van AI. Gebruik het AI-Verantwoordingsformulier om zicht te krijgen op gebruik, en coach leerlingen naar zelfregulatie.",
        didacticTips: ["Gebruik de G-A-S ezelsbrug (Gesprek, Analyse, Stimuleer zelfregulatie).", "Laat deelnemers zelfreflectiecoach zijn.", "Geef een ingevuld voorbeeld van het AI-verantwoordingsformulier."],
        formsAndAttachments: ["AI-verantwoordingsformulier", "AI-Werkafsprakenblad", "Reflectieblad-leerling"],
        oopNote: "OOP kan het verantwoordingformulier gebruiken voor administratieve projecten: Bijv. “AI mag de vergadering samenvatten; ik controleer toon en context voor verzending.”",
        metadata: {
            duration: "45 min",
            level: "Basis / Expert",
            targetAudience: "Docenten, mentoren, begeleiders"
        },
        learningGoals: [
            "Signaleren wanneer AI ondersteunt of denkwerk overneemt.",
            "Leerlingen begeleiden bij reflectie en verantwoording van AI-gebruik.",
            "AI-verantwoordingsformulier gebruiken als formatief instrument.",
            "Coachende gesprekken voeren vanuit de rollen: Observer, Coach, Verifier.",
            "Zelfregulatie en justification mapping stimuleren."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Toon twee teksten (met en zonder AI) en vraag “Wie deed het denkwerk?”" },
            { time: "5-15 min", phase: "Modeling", activity: "Trainer doorloopt het AI-verantwoordingsformulier; licht de vijf velden toe." },
            { time: "15-30 min", phase: "Oefenen in duo’s", activity: "Speel docent/leerling en vul formulier in; stel reflectievragen." },
            { time: "30-40 min", phase: "Groepsevaluatie", activity: "Bespreek welke vragen leidden tot reflectie." },
            { time: "40-45 min", phase: "Reflectie & exit", activity: "Reflecteer op je rol als begeleider, vul exit-ticket in." }
        ],
        tools: [
            { name: "AI-verantwoordingsformulier", usage: "Invullen met context, AI-inzet, eigen bijdrage, controle en reflectie." },
            { name: "AI-Werkafsprakenblad", usage: "Check of leerling binnen de afspraken blijft." },
            { name: "Reflectieblad", usage: "5 vragen voor snelle formatieve check." }
        ],
        practicalInfo: "Benodigd: kopieën van AI-verantwoordingsformulier, AI-Werkafsprakenblad en reflectieblad.",
        sources: [
            { title: "Zelfregulerend leren stimuleren - Radboud Universiteit", url: "https://www.ru.nl/lerarenopleiding/vm/zelfregulerend-leren-stimuleren-hoe-doe-je-dat/" },
            { title: "Formatief evalueren in de praktijk - Vernieuwenderwijs", url: "https://vernieuwenderwijs.nl/formatief-evalueren-in-de-praktijk/" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: G-A-S",
            items: [
                { letter: "G", meaning: "Gesprek voeren over gebruik", didacticLink: "Formatieve dialoog", explanation: "Ga het gesprek aan met de leerling, niet als een controleur, maar als een coach. Stel open vragen: 'Hoe heeft de AI je geholpen?', 'Welke keuzes heb je zelf gemaakt?'" },
                { letter: "A", meaning: "Analyseer denkwerk en AI-bijdrage", didacticLink: "Metacognitie", explanation: "Help de leerling te analyseren welk deel van het werk door de AI is gedaan en welk deel eigen denkwerk is. Dit bevordert metacognitieve vaardigheden en bewustzijn van het eigen leerproces." },
                { letter: "S", meaning: "Stimuleer zelfregulatie en verantwoording", didacticLink: "Eigenaarschap", explanation: "Het doel is dat leerlingen zelfstandig verantwoorde keuzes maken. Coach hen naar het punt waarop ze zelf kunnen bepalen wanneer AI een nuttig hulpmiddel is en wanneer het hun eigen leerproces in de weg staat." }
            ]
        }
    },
    {
        id: 6,
        title: "AI in administratieve werkzaamheden",
        summary: "Ontdek hoe AI kan helpen bij routinetaken zoals mail, planning, formulieren en rapporten. Leer veilig automatiseren zonder persoonsgegevens prijs te geven.",
        didacticTips: ["Focus op No Code-gebruik en privacy.", "Gebruik het STAP-model.", "Laat voorbeelden zien van geanonimiseerde data voor grafieken.", "Vet de regel “Geen persoonsgegevens in prompts” in elke opdracht."],
        formsAndAttachments: ["AI-Werkafspraken-OOP.xlsx", "AI-verantwoordingsformulier-OOP"],
        oopNote: "Deze workshop is specifiek voor ondersteunend personeel; docenten kunnen onderdelen gebruiken voor PTA-rapportages, maar zorg dat privacyregels gevolgd worden.",
        metadata: {
            duration: "45 min",
            level: "Basis",
            targetAudience: "Administratief en ondersteunend personeel"
        },
        learningGoals: [
            "AI gebruiken voor mails herschrijven, samenvatten of plannen.",
            "Proceskaarten en eenvoudige overzichten maken met AI-tools.",
            "AI-Werkafspraken en AI-verantwoordingsformulier correct gebruiken.",
            "Veiligheidsregels rond privacyzone en AI-Act toepassen.",
            "STAP-model toepassen: Selecteer taak, Test veiligheid, Automatiseer klein, Persoon blijft verantwoordelijk."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Welke administratieve taak kost je wekelijks veel tijd?" },
            { time: "5-15 min", phase: "Instructie", activity: "Toon AI-Werkafsprakenformulier; bespreek privacy (geen persoonsdata)." },
            { time: "15-30 min", phase: "Oefenen", activity: "Kies een taak en test relevante tool: mail herzien, Excel-formule, procesposter." },
            { time: "30-40 min", phase: "Documenteren", activity: "Vul AI-verantwoordingsformulier in; vink AI-Werkafspraken bij de taak. Gebruik STAP-lijst." },
            { time: "40-45 min", phase: "Reflectie & exit", activity: "Bepaal welke taak AI mag overnemen en waar mens nodig is." }
        ],
        tools: [
            { name: "ChatGPT / Gemini", usage: "Herschrijf of vat (geanonimiseerde) mails samen." },
            { name: "Microsoft Copilot voor M365", usage: "Genereer formules in Excel, vat vergaderingen in Teams samen." },
            { name: "Notion AI / ClickUp AI", usage: "Maak planning of vergaderagenda overzichten." },
            { name: "Canva / Adobe Express", usage: "Visuele posters of handleidingen." }
        ],
        practicalInfo: "Benodigd: AI-Werkafspraken.xlsx; AI-verantwoordingsformulier; laptops; anonimiseren van data. Vermeld dat AI nooit vertrouwelijke persoonsgegevens mag verwerken.",
        sources: [
            { title: "Microsoft Copilot voor M365", url: "https://www.microsoft.com/nl-nl/microsoft-365/copilot-for-microsoft-365" },
            { title: "Privacy en AI: een gids voor professionals - Autoriteit Persoonsgegevens", url: "https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/kunstmatige-intelligentie" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: S-T-A-P",
            items: [
              { letter: "S", meaning: "Selecteer de taak", didacticLink: "Wat mag AI doen?", explanation: "Kies een repetitieve, tijdrovende taak die geschikt is voor automatisering. Denk aan het opstellen van concept-mails, het samenvatten van notulen of het maken van een planning." },
              { letter: "T", meaning: "Toets de veiligheid", didacticLink: "Geen persoons- of toetsdata.", explanation: "Dit is de belangrijkste stap. Zorg ervoor dat er absoluut geen persoonlijke, gevoelige of vertrouwelijke gegevens in de prompt worden gebruikt. Anonimiseer alle data voordat je deze invoert." },
              { letter: "A", meaning: "Automatiseer klein", didacticLink: "Begin met één onderdeel.", explanation: "Probeer niet meteen een heel proces te automatiseren. Begin met een kleine, afgebakende deeltaak. Evalueer het resultaat voordat je eventueel uitbreidt." },
              { letter: "P", meaning: "Persoon blijft eindverantwoordelijk", didacticLink: "Controleer altijd handmatig.", explanation: "De AI is een assistent, geen vervanger. De menselijke professional is altijd eindverantwoordelijk. Controleer de output van de AI zorgvuldig op juistheid, toon en context voordat je deze gebruikt of verstuurt." }
            ]
        }
    },
    {
        id: 7,
        title: "AI in relatie tot formatief handelen",
        summary: "Ontdek hoe AI ingezet kan worden in de formatieve cyclus (feed-up, feedback, feed-forward) zonder dat het oordeel of de denkstap van de docent wordt overgenomen.",
        didacticTips: ["Gebruik de rubric (Juistheid, Nuttigheid, Toon, Reflectie) met drie niveaus (zwak, voldoende, sterk).", "Voeg OOP-notitie toe: administratief personeel kan dezelfde cyclus gebruiken voor rapportfeedback op interne documenten."],
        formsAndAttachments: ["AI-verantwoordingsformulier-formatief", "Feedbackrubric"],
        oopNote: "OOP kan de formatieve aanpak toepassen op interne teksten zoals verslagen en notulen; gebruik de rubric om duidelijk te maken wat wel/niet nuttige feedback is.",
        metadata: {
            duration: "45 min",
            level: "Basis / Expert",
            targetAudience: "Docenten, mentoren"
        },
        learningGoals: [
            "Duidelijk maken wat feed-up, feedback en feed-forward inhouden.",
            "AI feedback laten genereren en deze beoordelen met een rubric.",
            "Zelf bepalen welke feedback passend is en hoe feed-forward wordt vormgegeven.",
            "Reflecteren op de transparantie en ethische aspecten van AI-feedback.",
            "Gebruik van de F-A-I-R ezelsbrug."
        ],
        lessonFlow: [
            { time: "0-5 min", phase: "Activeren", activity: "Toon AI-feedback op een leerlingtekst en vraag of het nuttig is." },
            { time: "5-15 min", phase: "Instructie", activity: "Bied de formatieve cyclus aan (feed-up, feedback, feed-forward). Leg de F-A-I-R aanpak uit." },
            { time: "15-30 min", phase: "Oefenen", activity: "Voer een leerlingtekst in bij ChatGPT/Gemini; vraag AI om feedback en feed-forward." },
            { time: "30-40 min", phase: "Vergelijken", activity: "Gebruik rubric om feedback te beoordelen; kies welke aanwijzingen je overneemt." },
            { time: "40-45 min", phase: "Reflectie & exit", activity: "Reflecteer op mens vs AI: welke feedback maakte leren zichtbaar?" }
        ],
        tools: [
            { name: "ChatGPT / Gemini", usage: "Genereren van concept-feedback en feed-forward op (geanonimiseerd) leerlingwerk." },
            { name: "Gradescope / Formative", usage: "Platformen waar AI kan helpen feedback te koppelen aan rubrics (indien beschikbaar)." },
            { name: "Microsoft Copilot in Word", usage: "Ondersteuning bij het formuleren van feedback op taal en vorm." }
        ],
        practicalInfo: "Benodigd: eigen leerlingteksten (of voorbeeld), AI-verantwoordingsformulier, rubrics, laptops. Toon aan dat AI geen cijfers mag geven.",
        sources: [
            { title: "Toetsrevolutie: naar een feedbackcultuur in het voortgezet onderwijs - René Kneyber & Dominique Sluijsmans", url: "https://toetsrevolutie.nl/" },
            { title: "De formatieve cyclus - SLO", url: "https://slo.nl/thema/vakspecifieke-thema/formatief-evalueren/formatieve-cyclus/" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: F-A-I-R",
            items: [
                { letter: "F", meaning: "Feed-up – doel verhelderen", didacticLink: "AI mag doelen uitleggen.", explanation: "Laat de AI de leerdoelen of succescriteria van een opdracht herformuleren in begrijpelijke taal. Dit helpt leerlingen te begrijpen waar ze naartoe werken." },
                { letter: "A", meaning: "Analyse van het werk", didacticLink: "AI geeft feedback, docent controleert.", explanation: "De AI kan een eerste analyse doen en concept-feedback genereren. De docent is cruciaal om deze feedback te valideren, te nuanceren en te selecteren op basis van de specifieke leerling en context." },
                { letter: "I", meaning: "Interpretatie – wat betekent de feedback?", didacticLink: "Leerling reflecteert met formulier.", explanation: "De feedback zelf is niet het eindpunt. De leerling moet deze interpreteren en vertalen naar concrete acties. Gebruik een reflectieformulier om dit proces te structureren." },
                { letter: "R", meaning: "Resultaat – volgende stap bepalen", didacticLink: "Feed-forward uitvoeren.", explanation: "De docent helpt de leerling om op basis van de feedback een concrete en haalbare volgende stap (feed-forward) te formuleren. De AI kan hier suggesties voor doen, maar de docent coacht het proces." }
            ]
        }
    },
    {
        id: 8,
        title: "Bouw je eigen AI-assistent",
        summary: "Stap-voor-stap een eigen AI-assistent ontwerpen en testen. Leer over kennisbanken en zelfcheck (interne feedbacklus) zodat de assistent veilig en nuttig werkt.",
        didacticTips: ["Benadruk dat een AI-assistent tekstgestuurd is en niets doet zonder jouw instructies.", "Laat deelnemers zien hoe de kennisbank het antwoord verandert.", "Leg het belang van de zelfcheck uit en oefen met eigen vragen.", "Gebruik de B.O.U.W.-ezelsbrug: Begin klein, Omschrijf duidelijk, Uitproberen, Wijs terug (mens beslist)."],
        formsAndAttachments: ["Werkblad-Mijn-AI-assistent", "Reflectieblad-interne-feedbackvragen", "Checklist-Veilig-bouwen-met-AI"],
        oopNote: "Dezelfde werkwijze kan worden toegepast voor administratieve assistenten (bijv. samenvatten van vergadernotulen) zolang de kennisbank zorgvuldig wordt gekozen.",
        metadata: {
            duration: "90 min",
            level: "Beginner",
            targetAudience: "Docenten en ondersteunend personeel"
        },
        learningGoals: [
            "Begrijpen wat een AI-assistent is en hoe deze werkt.",
            "Een assistent ontwerpen met één duidelijke taak en rol.",
            "Een kleine kennisbank toevoegen aan de assistent.",
            "Een zelfcheck (interne feedbacklus) formuleren.",
            "Een volledige instructietekst schrijven en testen."
        ],
        lessonFlow: [
            { time: "0-10 min", phase: "Activeren", activity: "Verken welke taken AI zou kunnen overnemen." },
            { time: "10-25 min", phase: "Uitleg", activity: "Leg uit wat een AI-assistent is, introduceer kennisbank en zelfcheck." },
            { time: "25-45 min", phase: "Ontwerpen", activity: "Vul het werkblad “Mijn AI-assistent” in." },
            { time: "45-65 min", phase: "Bouwen & testen", activity: "Voer de instructie en kennisbank in en test." },
            { time: "65-80 min", phase: "Zelfcheck & verbetering", activity: "Laat de AI reflecteren op eigen output. Pas instructie aan." },
            { time: "80-90 min", phase: "Reflectie & delen", activity: "Deel één zin over het leerproces." }
        ],
        tools: [
            { name: "ChatGPT (GPTs)", usage: "Gebruik de GPT Builder om met een interface een assistent te bouwen, inclusief het uploaden van kennisbestanden." },
            { name: "Gemini (Custom Instructions)", usage: "Gebruik de 'custom instructions' of geef in een chat een uitgebreide systeemprompt en kennis mee." },
            { name: "Microsoft Copilot Studio", usage: "Een meer geavanceerde omgeving om eigen copilots te bouwen voor intern gebruik." }
        ],
        practicalInfo: "Benodigd: laptop, ChatGPT Plus of Gemini-account, werkblad Mijn AI-assistent, kennisbank (max 10 pagina’s), reflectieformulier.",
        sources: [
            { title: "Introducing GPTs - OpenAI", url: "https://openai.com/blog/introducing-gpts" },
            { title: "Bouw je eigen AI-bot voor de klas - AI voor Onderwijs", url: "https://www.aivooronderwijs.nl/bouw-je-eigen-ai-bot-voor-de-klas" },
            { title: "Microsoft Copilot Studio", url: "https://www.microsoft.com/nl-nl/copilot/copilot-studio" }
        ],
        mnemonic: {
            title: "Ezelsbruggetje: B.O.U.W.",
            items: [
                { letter: "B", meaning: "Begin klein", didacticLink: "Eén taak, geen wonder.", explanation: "Focus je assistent op één specifieke, goed afgebakende taak. Een 'alleskunner' is moeilijk te instrueren en zal minder betrouwbaar zijn. Denk aan: 'feedback geven op argumentatie' in plaats van 'opstellen nakijken'." },
                { letter: "O", meaning: "Omschrijf duidelijk", didacticLink: "Context + actie + vorm.", explanation: "Schrijf een gedetailleerde instructie (systeemprompt). Beschrijf de rol, de exacte taak, de stappen die de assistent moet volgen, en het gewenste outputformaat. Voeg eventueel een kennisbank toe." },
                { letter: "U", meaning: "Uitproberen", didacticLink: "Prompt invoeren en testen.", explanation: "Test je assistent uitvoerig met verschillende vragen en scenario's. Kijk waar hij goed op reageert en waar hij de mist in gaat. Dit is een cruciale testfase." },
                { letter: "W", meaning: "Wijs terug", didacticLink: "Jij beslist wat blijft.", explanation: "Analyseer de testresultaten en pas de instructies van je assistent aan. Het bouwen van een assistent is een cyclus van testen, evalueren en verfijnen. Jij bent degene die de kwaliteit bepaalt en verbetert." }
            ]
        }
    }
];