import React from 'react';
import type { View } from '../types';
import { AcademicCapIcon, BookOpenIcon, UsersIcon, ChevronRightIcon } from './icons';

interface HomepageProps {
  onSelectView: (view: View) => void;
}

const NavCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left w-full border border-slate-200 flex flex-col group"
  >
    <div className="flex-grow">
        <div className="flex items-center mb-4">
        <div className="flex-shrink-0 bg-brand-accent-light text-brand-accent rounded-full p-3 transition-colors group-hover:bg-brand-accent group-hover:text-white">
            {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-brand-primary">{title}</h3>
        </div>
        <p className="text-slate-600">{description}</p>
    </div>
    <div className="mt-6 flex items-center text-brand-accent font-semibold">
        <span>Bekijk sectie</span>
        <ChevronRightIcon />
    </div>
  </button>
);

const Homepage: React.FC<HomepageProps> = ({ onSelectView }) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">
          AI Kennisplatform Emmauscollege
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Uw centrale bron voor workshops, documentatie en online trainingen om AI succesvol en verantwoord te integreren in het onderwijs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NavCard
          icon={<UsersIcon />}
          title="Voor medewerkers"
          description="Toegang tot de online cursus en algemene informatie en richtlijnen over AI voor alle medewerkers."
          onClick={() => onSelectView({ type: 'employees' })}
        />
        <NavCard
          icon={<BookOpenIcon />}
          title="Handboek & documenten"
          description="Vind hier het officiële AI-handboek, beleidsdocumenten en downloadbare formulieren."
          onClick={() => onSelectView({ type: 'handbook' })}
        />
        <NavCard
          icon={<AcademicCapIcon />}
          title="Voor trainers"
          description="Ontdek praktische workshops en lesmaterialen om AI direct in de lespraktijk toe te passen."
          onClick={() => onSelectView({ type: 'workshop', id: 1 })}
        />
      </div>
    </div>
  );
};

export default Homepage;
