import React, { useState } from 'react';
import { workshops } from './services/dataService';
import type { Workshop, View } from './types';
import Sidebar from './components/Sidebar';
import WorkshopDetail from './components/WorkshopDetail';
import Handbook from './components/Handbook';
import Downloads from './components/Downloads';
import EmployeeHub from './components/EmployeeHub';
import OnlineCourse from './components/OnlineCourse';
import HistoryOfAI from './components/HistoryOfAI';
import Homepage from './components/Homepage';
import { MenuIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedView, setSelectedView] = useState<View>({ type: 'homepage' });
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const handleSelectView = (view: View) => {
    setSelectedView(view);
    setIsSidebarOpen(false); // Close sidebar on selection in mobile view
  };

  const renderContent = () => {
    switch (selectedView.type) {
      case 'homepage':
        return <Homepage onSelectView={handleSelectView} />;
      case 'workshop':
        const workshop = workshops.find(w => w.id === selectedView.id) || workshops[0];
        return <WorkshopDetail workshop={workshop} />;
      case 'handbook':
        return <Handbook />;
      case 'history':
        return <HistoryOfAI />;
      case 'downloads':
        return <Downloads />;
      case 'employees':
        return <EmployeeHub onSelectView={handleSelectView} />;
      case 'online-course':
        return <OnlineCourse />;
      default:
        return <Homepage onSelectView={handleSelectView} />;
    }
  };

  return (
    <div className="h-screen flex text-slate-800 font-sans bg-slate-100">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 md:hidden z-30" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* Mobile Sidebar */}
      <aside className={`fixed md:hidden top-0 left-0 h-full bg-slate-50 border-r border-slate-200 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 w-64`}>
         <Sidebar
          workshops={workshops}
          selectedView={selectedView}
          onSelectView={handleSelectView}
          isCollapsed={false}
          onToggleCollapse={() => {}}
        />
      </aside>

      {/* Desktop Sidebar */}
       <aside className={`hidden md:flex flex-col flex-shrink-0 bg-slate-50 border-r border-slate-200 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
         <Sidebar
            workshops={workshops}
            selectedView={selectedView}
            onSelectView={handleSelectView}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        </aside>
      
      <main className="flex-1 flex flex-col overflow-y-auto bg-white">
        <div className="p-4 md:hidden flex items-center justify-between border-b border-slate-200">
           <div onClick={() => handleSelectView({ type: 'homepage' })} className="cursor-pointer">
             <h1 className="text-lg font-bold text-brand-primary">AI Kennisplatform</h1>
             <p className="text-xs text-slate-500">Emmauscollege</p>
           </div>
           <button
              className="p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
        </div>
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
