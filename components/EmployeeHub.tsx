import React from 'react';
import type { EmployeeHubProps } from '../types';
import { UsersIcon, BookOpenIcon, PlayCircleIcon, DownloadIcon } from './icons';

const InfoCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
}> = ({ icon, title, description, buttonText, onClick }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center flex flex-col">
        <div className="mx-auto bg-brand-accent-light text-brand-accent rounded-full p-3 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 flex-grow mb-4">{description}</p>
        <button onClick={onClick} className="mt-auto bg-brand-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors">
            {buttonText}
        </button>
    </div>
);

const EmployeeHub: React.FC<EmployeeHubProps> = ({ onSelectView }) => {
  return (
    <article className="bg-white rounded-xl p-6 md:p-8 h-full">
      <header className="text-center">
        <div className="inline-flex items-center justify-center bg-brand-accent-light text-brand-accent rounded-full p-4 mb-4">
            <UsersIcon />
        </div>
        <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Hub voor medewerkers</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Welkom op de centrale informatiehub. Hier vindt u de belangrijkste informatie, hulpmiddelen en richtlijnen om AI op een verantwoorde en effectieve manier in te zetten binnen het Emmauscollege.
        </p>
      </header>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Snelstartgids</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
                icon={<BookOpenIcon />}
                title="1. Lees het handboek"
                description="Begin met het doornemen van ons officiële handboek voor een volledig overzicht van onze visie, richtlijnen en beleid."
                buttonText="Open handboek"
                onClick={() => onSelectView({ type: 'handbook' })}
            />
            <InfoCard 
                icon={<PlayCircleIcon />}
                title="2. Volg de online cursus"
                description="Vergroot uw basiskennis en praktische vaardigheden met onze interactieve online cursus."
                buttonText="Start cursus"
                onClick={() => onSelectView({ type: 'online-course' })}
            />
            <InfoCard 
                icon={<DownloadIcon />}
                title="3. Gebruik de formulieren"
                description="Download de benodigde documenten zoals het verantwoordingsmodel en de werkafspraken."
                buttonText="Bekijk downloads"
                onClick={() => onSelectView({ type: 'downloads' })}
            />
        </div>
      </div>

       <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Onze kernprincipes</h2>
            <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><span className="text-brand-accent font-bold mr-2">&#10003;</span> <strong>Mens houdt regie:</strong> AI is een hulpmiddel, geen vervanger. De professionele en ethische eindverantwoordelijkheid ligt altijd bij de medewerker.</li>
                <li className="flex items-start"><span className="text-brand-accent font-bold mr-2">&#10003;</span> <strong>Transparantie is cruciaal:</strong> We zijn open over wanneer en hoe we AI gebruiken. Het gebruik van AI wordt gedocumenteerd en is herleidbaar.</li>
                <li className="flex items-start"><span className="text-brand-accent font-bold mr-2">&#10003;</span> <strong>Privacy eerst:</strong> Er worden nooit persoonsgegevens of andere gevoelige informatie van leerlingen of medewerkers ingevoerd in publieke AI-tools.</li>
                 <li className="flex items-start"><span className="text-brand-accent font-bold mr-2">&#10003;</span> <strong>Ethisch en verantwoord:</strong> We zetten AI in op een manier die onze onderwijsvisie ondersteunt en die vrij is van bias en discriminatie.</li>
            </ul>
        </div>
    </article>
  );
};

export default EmployeeHub;
