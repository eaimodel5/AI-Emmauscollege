import React from 'react';
import { BookOpenIcon } from '../components/icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 mt-8">{children}</h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-3 mt-6">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="mb-4 text-slate-600 leading-relaxed">{children}</p>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <blockquote className="my-6 p-4 border-l-4 border-cyan-500 bg-cyan-50 text-cyan-800 italic">
        {children}
    </blockquote>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="mb-2 ml-5 text-slate-600 leading-relaxed list-disc">{children}</li>
);

const DefinitionTerm: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <dt className="font-semibold text-slate-800 mt-4">{children}</dt>
);

const DefinitionDesc: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <dd className="pl-4 border-l-2 border-slate-200 text-slate-600">{children}</dd>
);

export const HandbookContent: React.FC = () => {
    return (
        <div className="prose prose-slate max-w-none">
            <header className="mb-8">
                <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Handboek AI & onderwijs</h1>
                <p className="text-slate-500 mt-2">Versie 1.0 (oktober 2025) - Documentcode: ECAIHB2025v1.0</p>
            </header>
            
            <SectionTitle>AI als nieuwe (on)gewenste collega</SectionTitle>
            <Paragraph>
                De wereld om ons heen zit vol met AI: van slimme assistenten en vertaaltools tot aanbevelingen voor films en muziek. AI is er, en zal blijven. Omdat AI zich razendsnel ontwikkelt en op steeds meer plekken opduikt, roept dat vragen op. Hoe werkt AI precies? Waar kan het ons bij helpen? En hoe zorgen we ervoor dat we er op een goede manier mee samenwerken? Door AI beter te begrijpen en duidelijke afspraken te maken, zorgen we ervoor dat het een waardevolle en betrouwbare assistent blijft.
            </Paragraph>
            <Paragraph>
                Deze mensgerichte benadering creëert een gemeenschappelijke taal en biedt ruimte voor belangrijke thema's, zoals ethiek, gelijkheid, betrouwbaarheid en verantwoordelijkheid. Bovendien maakt deze benadering het mogelijk om beleidsplannen te vertalen naar praktische werkafspraken en gedragsregels. Formats (werkafspraken, labels, verantwoordingsformulier) zijn beschikbaar op de interne drive &gt; AI &gt; Sjablonen. Evaluaties worden ingericht met ruimte voor feedback, reflectie en beoordeling. Naarmate de kennis over AI groeit, kan de beeldspraak geleidelijk worden losgelaten. AI is een technologie, geen persoon; mens houdt regie en eindverantwoordelijkheid. Dit betekent echter niet dat de discussie over de integratie van AI minder relevant wordt. Integendeel, het blijft van groot belang om richtlijnen en afspraken te ontwikkelen die duidelijk maken hoe AI ons werk kan ondersteunen, waar de grenzen liggen en hoe we de controle behouden over de manier waarop het wordt ingezet.
            </Paragraph>
            <Quote>
                "Door AI te benaderen als een nieuwe (on)gewenste collega krijgen we een completer en eerlijker beeld van de rol die het speelt in ons onderwijs.”
            </Quote>
            <SubTitle>Waarom een stappenplan?</SubTitle>
            <Paragraph>
                Er zijn vaak veel vragen: Wat mag wel en wat niet? Welke afspraken zijn nodig of zelfs noodzakelijk? Hoe waarborgen we kwaliteit, ethiek, privacy en autonomie? Dit stappenplan helpt bij het maken van bewuste keuzes en heldere afspraken. In plaats van een vast beleidsplan dat uitgaat van voorspelbare ontwikkelingen, biedt dit document flexibiliteit. Jaarlijkse review in oktober met AI Officer en secties; wijzigingen worden versienummering toegevoegd. AI verandert continu en dat vraagt om een dynamische aanpak waarin bewustzijn en kennis centraal staan.
            </Paragraph>
            <SubTitle>Hoe lees je dit handboek?</SubTitle>
            <Paragraph>
                Het handboek biedt zowel inhoud als richting voor de inzet van AI binnen onze school. Het volgt de lijn: bewustzijn – begrijpen – positie bepalen – afspraken maken en vastleggen – samenwerken en verantwoorden. Elk hoofdstuk kan op zichzelf worden gelezen. Achter in het handboek zijn de gedragsregels voor AI-gebruik binnen onze school te vinden, evenals een begrippenlijst en andere praktische hulpmiddelen. Zie tevens AI-labels en verantwoordingsformulier (bijlagen).
            </Paragraph>

            <SectionTitle>Bewustzijn</SectionTitle>
            <Paragraph>
                Kunstmatige intelligentie (AI) is geen nieuwe technologie, al jarenlang speelt het een onzichtbare maar belangrijke rol in ons dagelijks leven. Denk aan spellingscontrole in tekstverwerkers, spamfilters in e-mail, gepersonaliseerde aanbevelingen op streamingdiensten en navigatiesystemen die files voorspellen. AI helpt ook bij spraakassistenten zoals Siri en Google Assistant, fraudedetectie bij online betalingen, medische diagnoses door patroonherkenning in scans en automatische ondertiteling. Deze technologie werkt vaak op de achtergrond en maakt processen slimmer, efficiënter en toegankelijker. De laatste jaren is AI een nieuwe fase ingegaan, waarin het niet alleen patronen herkent, maar ook zelfstandig nieuwe inhoud creëert, zoals tekst, afbeeldingen, muziek en code. Dit staat bekend als generatieve AI (GenAI). Dit handboek richt zich specifiek op deze vorm van AI.
            </Paragraph>
             <Paragraph>
                Het gesprek moet niet alleen gaan over wat AI kan, maar ook over hoe we AI wíllen inzetten in het onderwijs. AI ondersteunt instructie en reflectie, niet summatieve beoordeling. Welke rol geven we deze technologie? Hoe zorgen we ervoor dat AI een aanvulling is en geen vervanging van menselijke creativiteit, kritisch denken en autonomie? Verwerk geen persoonsgegevens in externe AI-tools zonder noodzaak; gebruik dataminimalisatie.
            </Paragraph>

            <SectionTitle>Begrijpen</SectionTitle>
             <SubTitle>AI begrijpen om beter samen te werken</SubTitle>
            <Paragraph>
                Om goed samen te werken met AI, moet je hem eerst leren kennen. Hij is als een snelle, onvermoeibare collega die patronen herkent, teksten genereert en complexe berekeningen uitvoert. Maar hij heeft ook beperkingen: hij begrijpt niet wat hij doet, heeft geen moreel besef en kan fouten maken zonder het door te hebben. AI wéét het niet, hij voorspelt. Op basis van patronen in zijn trainingsdata gokt hij welk woord, beeld of geluid het meest logisch lijkt. Dit maakt AI een waardevolle assistent, maar zonder begeleiding ook onbetrouwbaar.
            </Paragraph>
            <SubTitle>Hoe AI 'denkt' en waar het mis kan gaan</SubTitle>
             <Paragraph>
                AI heeft geen eigen ervaring en leert uitsluitend door enorme hoeveelheden informatie te analyseren. Dit fenomeen staat bekend als hallucinaties: AI genereert een antwoord dat logisch klinkt, maar feitelijk onjuist of compleet verzonnen is. Daarnaast kan AI bevooroordeeld zijn – beter bekend als bias. Dit gebeurt wanneer AI onbewust patronen uit zijn trainingsdata overneemt die bepaalde perspectieven bevoordelen of benadelen.
            </Paragraph>

             <SectionTitle>De inzet van AI in ons onderwijs</SectionTitle>
             <Paragraph>
                 Op Europees niveau wordt AI gereguleerd door de AI Act, die bepaalt welke systemen in welke sectoren hoge risico's met zich meebrengen. AI in het onderwijs valt in de een na hoogste categorie, omdat het direct invloed heeft op leerprocessen en beoordelingen. Dit betekent dat scholen verplicht zijn om AI transparant en ethisch verantwoord in te zetten. AI mag ondersteunen, maar mag nooit zelfstandig beslissingen nemen die de ontwikkeling van leerlingen beïnvloeden.
             </Paragraph>
             <SubTitle>Niveaus van AI-gebruik (in het onderwijs)</SubTitle>
             <ul>
                 <ListItem>
                     <strong>Ondersteunende rol:</strong> AI helpt bij data-analyse of het genereren van ideeën, maar de uiteindelijke beslissingen blijven altijd in menselijke handen.
                 </ListItem>
                 <ListItem>
                     <strong>Gedeeld niveau:</strong> AI kan complexere taken ondersteunen, zoals gepersonaliseerde feedback. Hier is menselijk toezicht cruciaal: AI mag adviseren, maar niet zelfstandig bepalen.
                 </ListItem>
                 <ListItem>
                     <strong>Autonoom niveau (Niet toegestaan):</strong> AI mag nooit zonder menselijke controle beslissingen nemen die invloed hebben op beoordelingen of leerlingbegeleiding.
                 </ListItem>
             </ul>
            
            <SectionTitle>Afspraken maken, vastleggen en samenwerken</SectionTitle>
            <Paragraph>
                Samenwerken met AI vereist duidelijke afspraken. Het is belangrijk om vast te leggen welke rol AI krijgt, welke taken hij gaat uitvoeren, aan welke kwaliteitseisen het werk moet voldoen en hoe de inzet wordt gevolgd en geëvalueerd. Transparantie speelt hierin een cruciale rol.
            </Paragraph>
            <SubTitle>Documenten</SubTitle>
            <ul>
                <ListItem>
                    <strong>AI-werkafspraken:</strong> Legt vast hoe AI wordt ingezet en welke regels en verantwoordelijkheden daarbij horen.
                </ListItem>
                <ListItem>
                    <strong>AI-verantwoordingsformulier docent / leerling:</strong> Reflectie op de rol van AI in het werk.
                </ListItem>
                 <ListItem>
                    <strong>AI-labels (AI Assisted & AI Created):</strong> Maken inzichtelijk in hoeverre AI een rol heeft gespeeld in het eindproduct.
                </ListItem>
            </ul>

            <SectionTitle>Volgen, bijstellen en verantwoorden</SectionTitle>
            <Paragraph>Net zoals het begeleiden van een nieuwe collega, moet ook de samenwerking met AI worden gevolgd, geëvalueerd en geoptimaliseerd. Samenwerking vanaf een ‘gedeeld niveau’ betekent dat feedback en informatie actief moet worden opgehaald en gedocumenteerd. De AI - Officer helpt en ondersteunt hierin.</Paragraph>
            <SubTitle>AI Officer</SubTitle>
            <Paragraph>De term AI-Officer is al meerdere keren voorbij gekomen in dit handboek. Deze functionaris is verplicht binnen elke school en houdt toezicht op (de inzet van) AI, signaleert risico's en brengt verbeterpunten in kaart. Daarnaast is hij verantwoordelijk voor het beheer van documentatie en naleving van de AI Act.</Paragraph>

            <SectionTitle>AI gedragsregels</SectionTitle>
            <SubTitle>Voor de medewerker</SubTitle>
             <ul>
                 <ListItem>Begrijp eerst AI, voordat je ermee werkt.</ListItem>
                 <ListItem>Werk alleen samen met AI op het niveau dat jezelf begrijpt.</ListItem>
                 <ListItem>Controleer: Bronvermelding, Feitelijke juistheid, Privacy.</ListItem>
                 <ListItem>Ingeleverd werk gemaakt door AI kan niet worden nagekeken.</ListItem>
                 <ListItem>Blijf bijleren over AI, net zoals AI zelf blijft leren.</ListItem>
             </ul>
            <SubTitle>Voor leerlingen</SubTitle>
             <ul>
                 <ListItem>Leer eerst over AI, voordat je ermee gaat werken.</ListItem>
                 <ListItem>AI praat niet, hij gokt het antwoord. Controleer altijd.</ListItem>
                 <ListItem>Wat AI doet, bepaal jij. Jij bent verantwoordelijk.</ListItem>
                 <ListItem>Vraag altijd toestemming voordat je AI gebruikt.</ListItem>
                 <ListItem>Geef altijd aan hoe je AI hebt gebruikt.</ListItem>
                 <ListItem>Gebruik AI ethisch en verantwoord. Gebruik AI niet voor misleiding, pesten of het verspreiden van nepnieuws.</ListItem>
                 <ListItem>Gebruik AI slim, niet gedachteloos. AI verbruikt veel energie.</ListItem>
             </ul>
             <SubTitle>Algemene gedragsregels voor AI</SubTitle>
             <ul>
                <ListItem>AI ondersteunt de visie, doelen en waarden van de school.</ListItem>
                <ListItem>AI werkt alleen binnen de gemaakte afspraken.</ListItem>
                <ListItem>AI staat onder toezicht. Een mens moet altijd controleren of het goed gaat.</ListItem>
                <ListItem>AI helpt, maar neemt geen beslissingen.</ListItem>
                <ListItem>AI moet eerlijk en duidelijk zijn. Het gebruik van AI moet altijd uitlegbaar zijn.</ListItem>
                <ListItem>AI mag geen privacy schenden.</ListItem>
                <ListItem>AI moet regelmatig worden bijgehouden en gecontroleerd.</ListItem>
                <ListItem>AI leert alleen onder controle.</ListItem>
                <ListItem>AI moet slim en zuinig worden gebruikt.</ListItem>
             </ul>

            <SectionTitle>Wanneer gebruik je wat?</SectionTitle>
            <Paragraph>Werkafspraken maak je vooraf, het verantwoordingsmodel en of de AI Labels gebruik je bij het opmaken van het werkdocument.</Paragraph>
            <SubTitle>Werkafspraken vastleggen</SubTitle>
            <Paragraph>Als sectie vul je jaarlijks met de AI-officer het document “werkafspraken” in wanneer AI wordt ingezet binnen lessen, toetsing of communicatie doeleinden. De bijdrage van AI wordt hiermee herleidbaar en transparant (en is een wettelijke vereiste).</Paragraph>
            <SubTitle>Verantwoording afleggen</SubTitle>
            <Paragraph>De inzet van AI vanaf gedeeld niveau moet transparant en herleidbaar zijn. Dit kan worden gedaan door de inzet van AI labels en verantwoordingsmodel.</Paragraph>
            <ul>
                <ListItem><strong>AI Assisted Label:</strong> Dit label wordt gebruikt als AI is ingezet als hulpmiddel, maar zelf nog aanpassingen heeft gedaan.</ListItem>
                <ListItem><strong>AI Created Label:</strong> Dit label wordt gebruikt als AI het gehele eindproduct heeft gegeneerd.</ListItem>
            </ul>

            <SectionTitle>AI vaardigheden</SectionTitle>
            <Paragraph>Wie met AI werkt, moet weten hoe AI werkt. We kunnen AI-geletterdheid opdelen in vier kernvaardigheden: AI-literacy, kritisch denken, ethisch bewustzijn en effectief prompten. Elk van deze vaardigheden ontwikkelt zich op drie niveaus: No Code, Low Code en Code.</Paragraph>
            <SubTitle>AI-literacy</SubTitle>
            <Paragraph>De basis van samenwerking. Iedere samenwerking begint met begrip. AI-literacy betekent weten wat AI is, hoe het werkt en waar de grenzen liggen.</Paragraph>
            <SubTitle>Kritisch denken</SubTitle>
            <Paragraph>De valkuilen herkennen. AI kan indrukwekkende antwoorden geven, maar dat betekent niet dat ze altijd correct zijn. Kritisch denken betekent dat je AI's output controleert, fouten herkent en bias identificeert.</Paragraph>
            <SubTitle>Ethisch bewustzijn</SubTitle>
            <Paragraph>AI verantwoord inzetten. AI heeft geen moreel besef. Het is aan de mens om ervoor te zorgen dat AI verantwoord wordt ingezet.</Paragraph>
            <SubTitle>Effectief prompten</SubTitle>
            <Paragraph>De kunst van de juiste vraag stellen. AI is zo goed als de input die hij krijgt. Wie leert hoe hij AI effectief kan aansturen, krijgt betere en betrouwbaardere resultaten.</Paragraph>

            <SectionTitle>Begrippenlijst</SectionTitle>
            <dl>
                <DefinitionTerm>Artificial Intelligence (AI)</DefinitionTerm>
                <DefinitionDesc>Kunstmatige intelligentie, systemen die taken uitvoeren die normaal menselijk denkvermogen vereisen.</DefinitionDesc>
                <DefinitionTerm>Machine Learning (ML)</DefinitionTerm>
                <DefinitionDesc>AI-techniek waarbij systemen patronen in data herkennen en zichzelf verbeteren zonder expliciete programmering.</DefinitionDesc>
                <DefinitionTerm>Deep Learning</DefinitionTerm>
                <DefinitionDesc>Subtype van ML waarbij diepe neurale netwerken worden gebruikt voor complexere patronenherkenning en besluitvorming.</DefinitionDesc>
                <DefinitionTerm>Generatieve AI</DefinitionTerm>
                <DefinitionDesc>AI die zelfstandig content zoals tekst, afbeeldingen of muziek genereert op basis van patronen in data.</DefinitionDesc>
                <DefinitionTerm>Large Language Model (LLM)</DefinitionTerm>
                <DefinitionDesc>AI-modellen zoals ChatGPT die getraind zijn op grote hoeveelheden tekst en complexe taalpatronen kunnen genereren.</DefinitionDesc>
                <DefinitionTerm>Bias (Bevooroordeeldheid)</DefinitionTerm>
                <DefinitionDesc>Onbedoelde vertekening in AI-resultaten door onevenwichtige trainingsdata.</DefinitionDesc>
                <DefinitionTerm>Hallucinaties</DefinitionTerm>
                <DefinitionDesc>Wanneer AI foutieve of verzonnen informatie genereert die overtuigend klinkt.</DefinitionDesc>
                <DefinitionTerm>AI Act</DefinitionTerm>
                <DefinitionDesc>Europese wetgeving die AI-gebruik reguleert.</DefinitionDesc>
                <DefinitionTerm>AVG (Algemene Verordening Gegevensbescherming)</DefinitionTerm>
                <DefinitionDesc>Europese wet die persoonsgegevens beschermt.</DefinitionDesc>
            </dl>
        </div>
    );
};
