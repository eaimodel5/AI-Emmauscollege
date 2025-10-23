import React from 'react';
import { PlayCircleIcon } from './icons';

const OnlineCourse: React.FC = () => {
  return (
    <article className="bg-white rounded-xl h-full flex flex-col">
        <header className="p-6 md:p-8 flex-shrink-0">
             <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
                <PlayCircleIcon />
                Online AI Cursus
            </h1>
            <p className="mt-4 text-lg text-slate-600">
                Volg de online cursus in het onderstaande venster. De cursus kan het beste worden bekeken op een groter scherm.
            </p>
        </header>
        <div className="flex-grow w-full h-full rounded-b-xl overflow-hidden border-t border-slate-200">
            <iframe
                src="https://v0-ai-course-website-rho.vercel.app/"
                title="Online AI Cursus"
                className="w-full h-full border-0"
                allowFullScreen
            ></iframe>
        </div>
    </article>
  );
};

export default OnlineCourse;
