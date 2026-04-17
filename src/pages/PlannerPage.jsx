import React from 'react';
import { Map } from 'lucide-react';

const PlannerPage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Executive Planner</h1>
        <p className="text-gray-500 text-sm mt-1">Strategic alignment mapping for high-level tasks.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <Map size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-bold text-gray-900">Task Boards Upcoming</h2>
      </div>
    </div>
  );
};

export default PlannerPage;
