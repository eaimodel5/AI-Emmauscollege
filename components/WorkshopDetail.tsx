import React from 'react';
import type { Workshop } from '../types';
import { ClockIcon, UserGroupIcon, BarChartIcon, DocumentTextIcon, LightBulbIcon, ExclamationTriangleIcon, AcademicCapIcon, DownloadIcon, LinkIcon } from './icons';

interface WorkshopDetailProps {
  workshop: Workshop | null;
}

const fileContents: Record<string, string> = {
    'AI-begrip-formulier': 'Werkblad: AI Begrippen\n\n1. Wat is Generatieve AI in je eigen woorden?\n\n2. Geef een voorbeeld van een mogelijke hallucinatie.\n\n3. Hoe kan bias in AI ontstaan?',
    'Reflectie-en-exit-formulier': 'Exit Ticket\n\n1. Wat is het belangrijkste dat je vandaag hebt geleerd?\n\n2. Welke rol moet een leerling zelf behouden bij het gebruik van AI?\n\n3. Wat ga je als eerste uitproberen in je eigen praktijk?',
    'Promptdesign-kaart': 'Promptdesign Kaart\n\n- [P] Plaats: Geef context.\n- [R] Rol: Wijs een rol toe aan de AI.\n- [O] Opdracht: Wees specifiek.\n- [M] Menselijke stap: Bepaal je eigen rol.\n- [P] Proef: Test in meerdere tools.\n- [T] Terugkijken: Verfijn je prompt.',
    'Rubric-Kwaliteit-prompt-en-output': 'Rubric: Kwaliteit van Prompt & Output\n\n| Criterium | Zwak | Voldoende | Sterk |\n|---|---|---|---|\n| Context | Geen context | Enige context | Duidelijke context |\n| Taak | Onduidelijk | Taak is te doen | Specifieke taak |\n| Output | Niet bruikbaar | Deels bruikbaar | Direct bruikbaar |',
    'Checklist-Mens-vs-AI': 'Checklist: Mens vs. AI\n\n- Wie heeft het denkwerk gedaan?\n- Is de output gecontroleerd op feiten?\n- Is het werk authentiek en persoonlijk?',
    'Checklist-beeldkwaliteit-en-veiligheid': 'Checklist Beeldkwaliteit\n\n1. Is het beeld relevant voor het leerdoel?\n2. Bevat het beeld stereotypen of bias?\n3. Is de bron van het beeld duidelijk?\n4. Is het beeld ethisch verantwoord?',
    'Stappenplan-schema-maken': 'Stappenplan: Schema maken met AI\n\n1. Definieer de kernconcepten en hun relaties.\n2. Schrijf een prompt: "Maak een schema over [onderwerp] met de volgende onderdelen: ..."\n3. Vraag om een specifiek format, zoals Markdown of Mermaid.\n4. Evalueer en verfijn het schema.',
    'Stappenplan-poster-maken': 'Stappenplan: Poster maken met AI\n\n1. Bepaal het doel en de boodschap van de poster.\n2. Genereer een achtergrondafbeelding met een tool als Firefly.\n3. Gebruik Canva Magic Write om pakkende titels te genereren.\n4. Combineer beeld en tekst, en voeg handmatig de finishing touch toe.',
    'AI-Werkafsprakenformulier': 'Formulier: AI Werkafspraken\n\n- Functie: Waarvoor gebruiken we AI?\n- Taakverdeling: Wat doet de mens, wat doet de AI?\n- Transparantie: Hoe maken we AI-gebruik zichtbaar?\n- Ethiek: Welke data gebruiken we wel/niet?',
    'Poster-sjabloon': 'Dit is een placeholder voor een link naar een Canva of Google Slides sjabloon voor de klasposter.',
    'Digitale-spreadsheet-registratie': 'Dit is een placeholder voor een link naar een Excel of Google Sheets sjabloon voor het bijhouden van afspraken.',
    'AI-verantwoordingsformulier': 'Verantwoordingsformulier AI-gebruik\n\n- Mijn opdracht: ...\n- Mijn prompt(s): ...\n- Mijn bijdrage: ...\n- Hoe heb ik de output gecontroleerd?: ...\n- Wat heb ik geleerd?: ...',
    'AI-Werkafsprakenblad': 'Zie AI-Werkafsprakenformulier.',
    'Reflectieblad-leerling': 'Reflectieblad Leerling\n\n1. Hoe heeft AI je geholpen om het leerdoel te bereiken?\n2. Welk deel van het werk was het moeilijkst en waarom?\n3. Wat zou je de volgende keer anders doen?',
    'AI-Werkafspraken-OOP.xlsx': 'Placeholder voor een Excel-bestand met werkafspraken voor OOP.',
    'AI-verantwoordingsformulier-OOP': 'Zie AI-verantwoordingsformulier, toegespitst op administratieve taken.',
    'AI-verantwoordingsformulier-formatief': 'Zie AI-verantwoordingsformulier, toegespitst op formatief handelen.',
    'Feedbackrubric': 'Rubric voor AI-gegenereerde Feedback\n\n| Criterium | Zwak | Voldoende | Sterk |\n|---|---|---|---|\n| Juistheid | Foutief | Globaal juist | Feitelijk correct |\n| Nuttigheid | Niet concreet | Enkele tips | Direct toepasbaar |\n| Toon | Demotiverend | Neutraal | Constructief |',
    'Werkblad-Mijn-AI-assistent': 'Werkblad: Ontwerp je eigen AI-assistent\n\n- Rol van mijn assistent: ...\n- Kerntaak: ...\n- Kennisbank (bronnen): ...\n- Zelfcheck vraag: ...',
    'Reflectieblad-interne-feedbackvragen': 'Reflectieblad: Zelfcheck\n\nVraag aan de assistent na output:\n1. "Is je antwoord gebaseerd op de aangeleverde kennisbank?"\n2. "Bevat je antwoord aannames die niet in de bronnen staan?"\n3. "Geef een score van 1-10 voor hoe goed je antwoord de vraag dekt."',
    'Checklist-Veilig-bouwen-met-AI': 'Checklist: Veilig Bouwen\n\n- [ ] Taak is duidelijk afgebakend.\n- [ ] Kennisbank bevat geen privacygevoelige informatie.\n- [ ] Instructies bevatten ethische richtlijnen.\n- [ ] De assistent wordt regelmatig getest en bijgesteld.'
};

const createDownloadableDataUri = (content: string) => {
    return `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;
};

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mb-8">
        <div className="flex items-center mb-4">
            {icon && <span className="mr-3 text-brand-accent">{icon}</span>}
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 w-full">{title}</h2>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600">
            {children}
        </div>
    </div>
);

const MetaCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-slate-200">
        <div className="flex-shrink-0 bg-brand-accent-light text-brand-accent rounded-full p-3">
            {icon}
        </div>
        <div className="ml-4">
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="text-md font-semibold text-slate-900">{value}</p>
        </div>
    </div>
);

const WorkshopDetail: React.FC<WorkshopDetailProps> = ({ workshop }) => {
  if (!workshop) {
    return (
      <div className="flex items-center justify-center h-full bg-white rounded-lg p-8">
        <p className="text-xl text-slate-500">Selecteer een workshop om de details te bekijken.</p>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-xl p-6 md:p-8 space-y-8">
        <header>
            <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{workshop.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{workshop.summary}</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MetaCard icon={<ClockIcon />} label="Duur" value={workshop.metadata.duration} />
            <MetaCard icon={<BarChartIcon />} label="Niveau" value={workshop.metadata.level} />
            <MetaCard icon={<UserGroupIcon />} label="Doelgroep" value={workshop.metadata.targetAudience} />
        </div>

        <Section title="Leerdoelen" icon={<AcademicCapIcon />}>
            <ul className="list-disc pl-5 space-y-2">
                {workshop.learningGoals.map((goal, index) => <li key={index}>{goal}</li>)}
            </ul>
        </Section>
        
        {workshop.didacticTips.length > 0 && (
            <Section title="Didactische tips" icon={<LightBulbIcon />}>
                <ul className="list-disc pl-5 space-y-2">
                    {workshop.didacticTips.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
            </Section>
        )}
        
        <Section title="Lesverloop">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tijd</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fase</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Activiteit</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {workshop.lessonFlow.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.time}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 capitalize">{item.phase}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{item.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>

        <Section title="Tools en opdrachten">
             <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tool</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Gebruik</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {workshop.tools.map((tool, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{tool.name}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{tool.usage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>

        {workshop.mnemonic && (
            <Section title={workshop.mnemonic.title}>
                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-12">Letter</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Betekenis & Uitleg</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Didactische Koppeling</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {workshop.mnemonic.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-2xl font-bold text-brand-accent align-top">{item.letter}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900 align-top">
                                        <p className="font-semibold">{item.meaning}</p>
                                        <p className="mt-1 text-slate-500">{item.explanation}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 align-top">{item.didacticLink}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        )}
        
        <Section title="Belangrijke formulieren & bijlagen" icon={<DocumentTextIcon />}>
            <div className="flex flex-wrap gap-3">
                {workshop.formsAndAttachments.map((form, index) => (
                    <a 
                        key={index} 
                        href={createDownloadableDataUri(fileContents[form] || `Inhoud voor ${form}`)}
                        download={`${form}.txt`}
                        className="inline-flex items-center gap-2 bg-brand-accent-light text-brand-accent text-sm font-medium px-4 py-2 rounded-full hover:bg-cyan-200 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
                    >
                        <DownloadIcon />
                        {form.replace(/-/g, ' ')}
                    </a>
                ))}
            </div>
        </Section>

        {workshop.sources.length > 0 && (
            <Section title="Bronnen en inspiratie" icon={<LinkIcon />}>
                <ul className="list-none pl-0 space-y-2">
                    {workshop.sources.map((source, index) => (
                        <li key={index}>
                            <a 
                                href={source.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-brand-accent hover:underline transition-colors"
                            >
                                {source.title} &rarr;
                            </a>
                        </li>
                    ))}
                </ul>
            </Section>
        )}
        
        <Section title="Notitie voor ondersteunend personeel (OOP)" icon={<ExclamationTriangleIcon />}>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <p className="text-amber-800">{workshop.oopNote}</p>
            </div>
        </Section>
        
        <Section title="Praktische informatie">
            <p>{workshop.practicalInfo}</p>
        </Section>
    </article>
  );
};

export default WorkshopDetail;
