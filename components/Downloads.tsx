import React from 'react';
import { downloadableFiles } from '../services/downloadsData';
import { DownloadIcon, DocumentTextIcon } from './icons';

const createDownloadableDataUri = (content: string) => {
    return `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;
};

const DownloadCard: React.FC<{ title: string; description: string; filename: string; content: string; }> = ({ title, description, filename, content }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col border border-slate-200">
        <div className="flex-grow">
            <div className="flex items-center mb-3">
                <span className="bg-brand-accent-light text-brand-accent rounded-full p-2 mr-3">
                    <DocumentTextIcon />
                </span>
                <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">{description}</p>
        </div>
        <a 
            href={createDownloadableDataUri(content)}
            download={filename}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
        >
            <DownloadIcon />
            Download
        </a>
    </div>
);


const Downloads: React.FC = () => {
  return (
    <article className="bg-white rounded-xl p-6 md:p-8 space-y-8">
        <header>
            <p className="text-sm font-semibold text-brand-accent mb-1">Emmauscollege</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Formulieren & bijlagen</h1>
            <p className="mt-4 text-lg text-slate-600">
                Hier vindt u alle belangrijke documenten, formulieren en checklists die in de workshops en het handboek worden genoemd. U kunt ze direct downloaden voor gebruik in uw eigen praktijk.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableFiles.map((file) => (
                <DownloadCard
                    key={file.id}
                    title={file.title}
                    description={file.description}
                    filename={file.filename}
                    content={file.content}
                />
            ))}
        </div>
    </article>
  );
};

export default Downloads;
