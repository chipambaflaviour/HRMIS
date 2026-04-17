import React from 'react';
import { TrendingUp } from 'lucide-react';

const PerformancePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Performance Management</h1>
        <p className="text-gray-500 text-sm mt-1">Conduct employee appraisals and KPI assessments.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <TrendingUp size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-bold text-gray-900">Appraisal Engine Pending</h2>
        <p className="text-gray-500">Integration with the 360-degree review matrix will be available soon.</p>
      </div>
    </div>
  );
};

export default PerformancePage;
