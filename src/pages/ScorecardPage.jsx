import React from 'react';
import { Target } from 'lucide-react';

const ScorecardPage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Balanced Scorecard (BSC)</h1>
        <p className="text-gray-500 text-sm mt-1">Strategic performance tracking across financial and operational verticals.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <Target size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-bold text-gray-900">BSC Framework Placeholder</h2>
        <p className="text-gray-500">Awaiting metric definitions from regional directors before database seeding.</p>
      </div>
    </div>
  );
};

export default ScorecardPage;
