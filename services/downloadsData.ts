import type { DownloadableFile } from '../types';

export const downloadableFiles: DownloadableFile[] = [
  {
    id: 'ai-labels',
    title: 'AI assisted & AI created labels',
    description: 'Richtlijnen en logo\'s voor het gebruik van labels om aan te geven in hoeverre AI is gebruikt bij het creëren van een eindproduct.',
    filename: 'AI-Labels.txt',
    content: `
AI Assisted & AI Created Labels
===============================

AI Assisted Label
-----------------
Dit label wordt gebruikt wanneer AI als hulpmiddel heeft gefungeerd bij de creatie van een eindproduct. Er is menselijke input, sturing of bewerking geweest, waardoor het eindresultaat een samenspel is van AI en menselijke creativiteit. Dit kan bijvoorbeeld een tekst zijn die door AI is gegenereerd en vervolgens door een mens is aangepast, of een afbeelding die met AI is gegenereerd en verder is verfijnd door een ontwerper.

Gebruik: Plaats dit logo bij een tekst of afbeelding om aan te geven dat het eindproduct in samenwerking met AI is ontstaan.

AI Created Label
----------------
Dit label geeft aan dat een tekst, afbeelding of ander creatief product volledig door AI is gegenereerd, zonder menselijke aanpassing. De AI heeft zelfstandig de inhoud geproduceerd op basis van een opdracht of prompt, zonder verdere redactie of ingreep van een mens.

Gebruik: Plaats dit logo bij een tekst of afbeelding om aan te geven dat het eindproduct een creatie is van AI.

Doel
-----
Door deze labels te gebruiken, wordt duidelijk in hoeverre AI een rol heeft gespeeld bij het eindresultaat. Dit draagt bij aan transparantie en helpt bij het beter begrijpen van de impact van AI op creatieve processen.
`
  },
  {
    id: 'verantwoordingsmodel-docent',
    title: 'AI-verantwoordingsmodel (docent)',
    description: 'Een formulier voor docenten en secties om het gebruik van AI in lessen of projecten te documenteren en te reflecteren.',
    filename: 'AI-Verantwoordingsmodel-Docent.txt',
    content: `
AI - Verantwoordingsmodel Sectie / Docent
========================================

Naam: _________________________
Datum: _________________________
Sectie: _________________________

AI-niveau: _________________________
Gebruikte AI-tools: _________________________

Specifieke bijdrage van AI:
-------------------------
[Vul hier in wat de concrete bijdrage van AI was]

Meerwaarde:
-----------
[Wat was de toegevoegde waarde van het gebruik van AI?]

Beperkingen:
------------
[Wat waren de beperkingen of nadelen?]

Gebruiksgebied AI:
------------------
( ) Lesmateriaal
( ) Toetsen
( ) Beoordeling
( ) Data-analyse
( ) Communicatie
( ) Overige: _________________________

Ethische overwegingen:
----------------------
Transparantie (Ja/Nee): _________
Privacy gewaarborgd? (Ja/Nee): _________

Reflectie:
----------
Wat heeft de inzet opgeleverd?
[Vul hier uw reflectie in]
`
  },
  {
    id: 'verantwoordingsmodel-leerling',
    title: 'AI-verantwoordingsmodel (leerling)',
    description: 'Een formulier voor leerlingen om te reflecteren op hun gebruik van AI bij een opdracht.',
    filename: 'AI-Verantwoordingsmodel-Leerling.txt',
    content: `
AI-verantwoordingsformulier Leerling
=====================================

Naam: _________________________
Klas/Vak: _________________________
Datum: _________________________

Waarvoor heb je AI gebruikt? (meerdere opties mogelijk)
---------------------------------------------------------
[ ] Ideeën bedenken / brainstormen
[ ] Spelling en grammatica controleren
[ ] Tekst herschrijven / verbeteren
[ ] Samenvatten / analyseren
[ ] Code / berekeningen maken
[ ] Anders: _________________________

Hoe heeft AI je geholpen bij deze opdracht? (kort toelichten)
------------------------------------------------------------
[Vul hier je toelichting in]
`
  },
  {
    id: 'werkafspraken',
    title: 'AI-werkafspraken',
    description: 'Een uitgebreid document voor het vastleggen van werkafspraken over AI-inzet binnen lessen, toetsing en communicatie.',
    filename: 'AI-Werkafspraken.txt',
    content: `
AI - Werkafspraken
==================
Dit document helpt bij het maken van duidelijke en transparante afspraken over de inzet van AI.

Naam: _________________________
Afdeling / Vak: _________________________
Datum: _________________________

1. Functieomschrijving van AI
-----------------------------
AI wordt ingezet als:
[ ] Samenwerkingspartner (gedeeld niveau: AI draagt bij, mens herschrijft en controleert)

AI ondersteunt bij de volgende taken:
[ ] Geavanceerde data-analyse en modellering
[ ] Automatiseren van complexe workflows en processen
[ ] Andere: [specificeer]

AI wordt niet gebruikt voor:
[ ] Zelfstandig beslissingen nemen zonder menselijke supervisie
[ ] Privacygevoelige informatie verwerken zonder passende waarborgen
[ ] Het volledig automatiseren van beoordelings- en evaluatieprocessen

2. Taakverdeling tussen mens en AI
----------------------------------
Wie is verantwoordelijk voor de eindcontrole?
[ ] Docent
[ ] AI Officer

AI-gebruik wordt verantwoord door:
[ ] Documentatie van AI-inzet en werkprocessen
[ ] AI-verantwoordingsformulier invullen
[ ] Regelmatige evaluatie en herziening van AI-gebruik

3. Werktijden en beschikbaarheid AI
-----------------------------------
AI mag worden ingezet:
[ ] Tijdens lesuren voor specifieke toepassingen
[ ] Buiten lesuren voor geavanceerde analyse en ondersteuning
[ ] Alleen na goedkeuring van de AI Officer

4. Transparantie en ethiek
--------------------------
De inzet van AI wordt gemonitord door:
[ ] Docent
[ ] AI Officer

AI mag alleen worden gebruikt als het voldoet aan:
[ ] De AI Act en privacyregels
[ ] De schoolvisie op AI-gebruik
[ ] De afgesproken richtlijnen en beleidskaders

5. Evaluatie en bijstelling
---------------------------
Hoe wordt AI-gebruik geëvalueerd?
[ ] Continue monitoring door AI-feedbackloops
[ ] Regelmatige feedback van docenten en AI Officers
[ ] AI-feedbackformulier en impactanalyse
`
  },
];