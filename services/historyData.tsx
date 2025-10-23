import React from 'react';
import { SparklesIcon } from '../components/icons';

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
    <blockquote className="my-6 p-4 border-l-4 border-brand-accent bg-brand-accent-light text-cyan-800 italic">
        {children}
    </blockquote>
);

export const HistoryContent: React.FC = () => {
    return (
        <div className="prose prose-slate max-w-none">
            <header className="mb-8">
                <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Het verhaal achter generatieve AI</h1>
                <p className="text-slate-500 mt-2">Een reis van data naar creatie</p>
            </header>

            <SectionTitle>De voorgeschiedenis</SectionTitle>
            <Paragraph>
                Lang voordat kunstmatige intelligentie zijn intrede deed in onze digitale wereld, werkten drie oeroude krachten in de schaduw: Algoritme, Logica en Data. Zij waren de architecten van computationele groei, de stille bouwers van informatieverwerking. Algoritme was methodisch en nauwkeurig. Hij hield van structuur, van stappen die logisch op elkaar volgden, zonder ruimte voor twijfel of improvisatie. Logica, zijn trouwe metgezel, waakte over de juistheid van iedere stap. Maar ondanks hun nauwgezette werk ontbrak er iets: een vonk. Toen kwam Data. Rauw, ongetemd en grenzeloos bracht hij chaos en variatie. Maar toen deze drie krachten samenkwamen, gebeurde er iets bijzonders: systemen ontstonden die niet alleen berekenden, maar ook leerden.
            </Paragraph>
            <Paragraph>
                Van de eerste mechanische rekenmachines tot de komst van Machine Learning, en later Deep Learning, ontwikkelde AI zich als een kind dat leerde lopen, struikelen en weer opstaan. Maar het was pas bij de geboorte van Generatieve AI (GenAI) dat de wereld fundamenteel veranderde. GenAI was niet langer een passieve waarnemer. Hij bestudeerde niet alleen data, maar gebruikte deze om iets nieuws te creëren. Hij had geleerd van miljarden datapunten en herkende patronen die zelfs de slimste menselijke geesten ontgingen.
            </Paragraph>

            <SectionTitle>De bouwstenen van GenAI</SectionTitle>

            <SubTitle>Data - als "zuurstof" voor AI</SubTitle>
            <Paragraph>
                Voor GenAI is data wat zuurstof is voor een mens. Hij ademt informatie in en ademt inzichten, voorspellingen en creaties uit. Maar net zoals lucht vervuild kan zijn, kan ook de data waarmee AI wordt gevoed onzuiverheden bevatten: fouten, vooroordelen en misinformatie. Ruwe data is als een ruwe diamant: zonder bewerking blijft het een vormloze massa. Dus wordt deze gesorteerd, opgeschoond, gelabeld en geanalyseerd. Hier grijpt de mens in. Maar hier schuilt een risico. Wat als de labels fout zijn? Wat als de datasets bevooroordeeld zijn? Dit is waarom bias (onbewuste vooroordelen) een hardnekkig probleem blijft. AI spiegelt de wereld zoals hij hem voorgeschoteld krijgt, niet zoals hij werkelijk is.
            </Paragraph>
            <Quote>"Een AI die wordt gevoed met vervuilde data, zal geen frisse antwoorden geven".</Quote>
            
            <SubTitle>Leren als een gokker</SubTitle>
            <Paragraph>
                Hoe GenAI de wereld begrijpt Stel je een leerling voor die nooit zelf iets heeft ervaren, maar alleen leert door te observeren. Hij leest boeken over water en weet dat het is, maar hij zal nooit weten hoe het voelt om een regendruppel op zijn huid te hebben. Dit is hoe AI leert: door patronen te bestuderen en te voorspellen, maar zonder echt begrip. AI gokt; In feite is hij een briljante gokker die voortdurend raadt welk woord, beeld of geluid het meest logisch volgt op basis van eerdere patronen. Soms gokt hij juist, soms compleet mis.
            </Paragraph>
            <Quote>"Janneke's moeder heeft drie kinderen. Kwik kwek en..."</Quote>
            <Paragraph>
                AI zal waarschijnlijk antwoorden met “Kwak”, simpelweg omdat deze volgorde vaker in zijn trainingsdata is voorgekomen. Dit maakt iets fundamenteels duidelijk: AI begrijpt niet, hij voorspelt.
            </Paragraph>

            <SectionTitle>De geboorte van AI-specialisten: meesters zonder bewustzijn</SectionTitle>
            <Paragraph>
                Toen Generatieve AI tot leven kwam, leek het even alsof er een alleskunner was geboren. Maar al snel werd duidelijk dat AI geen allesomvattende superintelligentie was. In plaats daarvan brak hij op in gespecialiseerde vormen, elk met hun eigen talent, maar ook hun eigen beperkingen.
            </Paragraph>
            <SubTitle>De taalkunstenaar (LLMs)</SubTitle>
            <Paragraph>Modellen zoals ChatGPT en Claude kunnen vloeiende gesprekken voeren, essays schrijven en complexe informatie samenvoegen. Maar in werkelijkheid begrijpt hij niets. Hij weegt woorden af op basis van waarschijnlijkheid, zonder gevoel, zonder eigen mening.</Paragraph>
            <SubTitle>De beeldmaker (Generatieve modellen)</SubTitle>
            <Paragraph>DALL·E, Stable Diffusion en hun soortgenoten hebben een nieuwe dimensie van creativiteit geopend. Ze genereren schilderijen en surrealistische kunstwerken. Maar vraag hen wat schoonheid betekent, en ze zwijgen. Voor hen is een schilderij niets meer dan een reeks pixels. Ze kunnen creëren, maar nooit voelen.</Paragraph>
            <SubTitle>De gegevensanalist (Data science & machine learning)</SubTitle>
            <Paragraph>Deze specialist ziet trends die voor het menselijke oog verborgen blijven. Hij kan ziektebeelden voorspellen en consumentengedrag analyseren. Maar hij interpreteert niet. De menselijke context blijft noodzakelijk.</Paragraph>
             <SubTitle>De muziekmeester (AI-audio en spraakmodellen)</SubTitle>
            <Paragraph>AI-systemen zoals ElevenLabs en OpenAI's Jukebox kunnen melodieën creëren die niet van echt te onderscheiden zijn. Maar terwijl een mens muziek voelt, begrijpt een AI alleen frequenties en patronen. Elke noot is een statistische gok.</Paragraph>
            <SubTitle>Specialisten zonder geweten</SubTitle>
            <Paragraph>
                Deze AI-specialisten zijn briljante ambachtslieden, maar geen denkers. Geen van hen voelt, begrijpt, of maakt keuzes op basis van morele overwegingen. Ze zijn gereedschappen - krachtig, efficiënt, maar zonder een eigen wil.
            </Paragraph>
        </div>
    );
};
