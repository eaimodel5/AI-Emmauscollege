
import React from 'react';
import { HandbookContent } from '../services/handbookData';

const Handbook: React.FC = () => {
  return (
    <article className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <HandbookContent />
    </article>
  );
};

export default Handbook;
