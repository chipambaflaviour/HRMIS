import React from 'react';
import { Heart } from 'lucide-react';

const WelfarePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Employee Welfare</h1>
        <p className="text-gray-500 text-sm mt-1">Manage health coverage, loans, and benefits.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <Heart size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-bold text-gray-900">Welfare Metrics Coming Soon</h2>
      </div>
    </div>
  );
};

export default WelfarePage;
