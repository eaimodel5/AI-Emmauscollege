
import React from 'react';
import { HistoryContent } from '../services/historyData';

const HistoryOfAI: React.FC = () => {
  return (
    <article className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <HistoryContent />
    </article>
  );
};

export default HistoryOfAI;
