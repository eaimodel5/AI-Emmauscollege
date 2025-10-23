import React, { useState } from 'react';
import type { Workshop, View } from '../types';
import { BookOpenIcon, DocumentTextIcon, UsersIcon, PlayCircleIcon, SparklesIcon, LayoutSidebarLeftCollapse, LayoutSidebarLeftExpand, AcademicCapIcon, ChevronDownIcon } from './icons';

interface SidebarProps {
  workshops: Workshop[];
  selectedView: View;
  onSelectView: (view: View) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const NavButton: React.FC<{
  isCollapsed: boolean;
  isSelected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}> = ({ isCollapsed, isSelected, onClick, icon, label }) => (
  <button
    onClick={onClick}
    title={isCollapsed ? label : ''}
    className={`w-full text-left rounded-md text-sm font-medium transition-colors duration-150 flex items-center ${
      isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2.5'
    } ${
      isSelected
        ? 'bg-brand-accent-light text-brand-accent'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    {icon}
    {!isCollapsed && <span className="ml-3 truncate">{label}</span>}
  </button>
);


const Sidebar: React.FC<SidebarProps> = ({ workshops, selectedView, onSelectView, isCollapsed, onToggleCollapse }) => {
  const [isTrainersOpen, setIsTrainersOpen] = useState(true);

  return (
    <div className="flex flex-col h-full">
       <div 
          className="p-4 border-b border-slate-200 flex items-center cursor-pointer" 
          onClick={() => onSelectView({type: 'homepage'})}
          style={{ minHeight: '65px' }} // to match mobile header height
        >
            {isCollapsed ? (
                <div className="h-8 w-8 bg-brand-primary rounded text-white flex items-center justify-center font-bold text-lg mx-auto">E</div>
            ) : (
                <div>
                    <h1 className="text-lg font-bold text-brand-primary">AI Kennisplatform</h1>
                    <p className="text-xs text-slate-500">Emmauscollege</p>
                </div>
            )}
       </div>

      <nav className="flex-grow p-4 space-y-2">
            <NavButton
                isCollapsed={isCollapsed}
                isSelected={selectedView.type === 'employees'}
                onClick={() => onSelectView({ type: 'employees' })}
                icon={<UsersIcon />}
                label="Voor medewerkers"
              />
            <NavButton
                isCollapsed={isCollapsed}
                isSelected={selectedView.type === 'online-course'}
                onClick={() => onSelectView({ type: 'online-course' })}
                icon={<PlayCircleIcon />}
                label="Online cursus"
              />
            <NavButton
                isCollapsed={isCollapsed}
                isSelected={selectedView.type === 'handbook'}
                onClick={() => onSelectView({ type: 'handbook' })}
                icon={<BookOpenIcon />}
                label="Handboek"
              />
            <NavButton
                isCollapsed={isCollapsed}
                isSelected={selectedView.type === 'history'}
                onClick={() => onSelectView({ type: 'history' })}
                icon={<SparklesIcon />}
                label="Het verhaal achter AI"
              />
            <NavButton
                isCollapsed={isCollapsed}
                isSelected={selectedView.type === 'downloads'}
                onClick={() => onSelectView({ type: 'downloads' })}
                icon={<DocumentTextIcon />}
                label="Downloads"
              />
            
            <hr className="border-slate-200 !my-4" />

            <div>
                <button
                    onClick={() => !isCollapsed && setIsTrainersOpen(!isTrainersOpen)}
                    disabled={isCollapsed}
                    title={isCollapsed ? 'Voor trainers' : ''}
                    className={`w-full text-left rounded-md text-sm font-medium transition-colors duration-150 flex items-center ${
                        isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2.5'
                    } ${
                        selectedView.type === 'workshop'
                            ? 'bg-slate-200 text-slate-900'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                    <AcademicCapIcon />
                    {!isCollapsed && <span className="ml-3 flex-1 truncate">Voor trainers</span>}
                    {!isCollapsed && <ChevronDownIcon className={`transition-transform ${isTrainersOpen ? 'rotate-180' : ''}`} />}
                </button>

                {isTrainersOpen && !isCollapsed && (
                    <ul className="pl-6 mt-2 space-y-1">
                        {workshops.map((workshop) => (
                            <li key={workshop.id}>
                                <button
                                    onClick={() => onSelectView({ type: 'workshop', id: workshop.id })}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-start ${
                                    selectedView.type === 'workshop' && selectedView.id === workshop.id
                                        ? 'bg-brand-accent-light text-brand-accent'
                                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                                >
                                    <span className="font-semibold mr-2 text-slate-400">{workshop.id}.</span>
                                    <span className="flex-1">{workshop.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
      </nav>

       <div className="p-4 border-t border-slate-200 mt-auto">
        <button 
          onClick={onToggleCollapse}
          className="w-full flex items-center justify-center p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          aria-label={isCollapsed ? 'Zijbalk uitvouwen' : 'Zijbalk samenvouwen'}
        >
          {isCollapsed ? <LayoutSidebarLeftExpand /> : <LayoutSidebarLeftCollapse />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
